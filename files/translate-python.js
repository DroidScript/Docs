//  git restore --source 9e74153 --worktree samples/; git restore --source 1a2275 --worktree json/

/* eslint-disable camelcase */
const OpenAI = require("openai");
const fs = require("fs");
const glob = require("glob").sync;
const conf = require("./conf.json");
const path = require("path");
const cliProgress = require('cli-progress');

/** @typedef {(pySample:string, jsSample:string) => string} Validator */
/** @typedef {(file:string, pyCode?:string, write?:boolean) => string} FixupFunc */

/** @param {string[]} p */
const P = (...p) => path.resolve(__dirname, ...p);

const docSampleInstructions = `
You are given a xml page with javascript code.
Translate all included JavaScript code into Python, preserving all comments.
You have to preserve every single XML tags from the original page.
Only return the translated xml page with all xml tags from the initial page.
`.trim().replace(/\n/g, " ");

const appSampleInstructions = `
You are given JavaScript code that you should translate into Python.
Assume the objects app, gfx, ui and MUI are predefined by the framework.
Do not change any variable names! Preserve all comments!
Only return the translated code!
`.trim().replace(/\n/g, " ");

// create new container
const multibar = new cliProgress.MultiBar({
    clearOnComplete: false,
    hideCursor: true,
    gracefulExit: true,
    autopadding: true,
    format: '{filename} | [{duration}s] {msg} {dots} ',
}, cliProgress.Presets.shades_grey);

setTimeout(main);

const useAI = process.argv.includes("-a");
const useFixup = process.argv.includes("-f");

const doDocs = process.argv.includes("-D");
const doApp = process.argv.includes("-A");

async function main() {
    const openai = getOpenAI("./openai.key");
    loadScopes();

    const list = useAI ? await openai.beta.assistants.list({}) : undefined;
    const assistant = list && list.data.find(o => o.name === "Python Translator");
    if (useAI && !assistant) throw Error("Assistant 'Python Translator' not found");

    if (doDocs) await processDocsSamples(openai, assistant, docSampleInstructions);
    if (doApp) await processAppSamples(openai, assistant, appSampleInstructions);
    multibar.stop();
}

/** @type {(openai: OpenAI.OpenAI, assistant:OpenAI.OpenAI.Beta.Assistant|undefined, instructions:string) => Promise<void>} */
async function processDocsSamples(openai, assistant, instructions) {
    const lang = Object.keys(conf.langs)[0];
    const files = glob(`json/${lang}/${conf.version}/*/samples/*.txt`);

    /** @type {{[x:string]:string}} */
    const fileMap = {};
    for (const file of files) {
        if (file.endsWith("-py.txt")) continue;

        const sample = fs.readFileSync(file, "utf-8");
        if (!sample.includes("<sample")) continue;

        const name = path.basename(file, ".txt");
        fileMap[file] = `${path.dirname(file)}/${name}-py.txt`;
    }

    if (useFixup) {
        for (const file in fileMap)
            fixupSample(fileMap[file]);
    }
    if (assistant) {
        await openai.beta.assistants.update(assistant.id, { instructions });
        await startWorker(openai, assistant, fileMap, 4, validateSample, fixupSample);
    }
}

/** @type {(openai: OpenAI.OpenAI, assistant:OpenAI.OpenAI.Beta.Assistant|undefined, instructions:string) => Promise<void>} */
async function processAppSamples(openai, assistant, instructions) {
    const files = glob(`samples/*.js`);

    /** @type {{[x:string]:string}} */
    const fileMap = {};
    for (const file of files) fileMap[file] = file.replace(".js", ".py");

    if (useFixup) {
        for (const file in fileMap)
            fixupPython(fileMap[file]);
    }

    if (assistant) {
        await openai.beta.assistants.update(assistant.id, { instructions });
        await startWorker(openai, assistant, fileMap, 4, validatePython, fixupPython);
    }
}

/** @type {(openai: OpenAI.OpenAI, assistant:OpenAI.OpenAI.Beta.Assistant|undefined, fileMap:{[x:string]:string}, max:number, invalid: Validator, fixup: FixupFunc) => Promise<void>} */
async function startWorker(openai, assistant, fileMap, max, invalid, fixup) {
    const proc = [];
    for (let i = 0; i < max; i++) proc.push(translateWorker(openai, assistant, fileMap, i, max, invalid, fixup));
    await Promise.all(proc);
}

/** @param {string} keyFile */
function getOpenAI(keyFile) {
    const apiKey = fs.readFileSync(P(keyFile), "utf8");
    if (!apiKey) throw Error("No openai key found");

    // return require("./mocks").openai.OpenAI({ apiKey });
    return new OpenAI.OpenAI({ apiKey });
}

/** @type {(openai: OpenAI.OpenAI, assistant:OpenAI.OpenAI.Beta.Assistant|undefined, fileMap:{[x:string]:string}, num:number, max:number, invalid: Validator, fixup: FixupFunc) => Promise<void>} */
async function translateWorker(openai, assistant, fileMap, num, max, invalid, fixup) {

    const thread = assistant ? await openai.beta.threads.create() : null;
    const jsFiles = Object.keys(fileMap).sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? -1 : 1));

    let n = 0;
    loop_files: for (const file of jsFiles) {
        const pyFile = fileMap[file];
        const sample = fs.readFileSync(file, "utf-8");

        let msg = `translating ${file}`;

        if (fs.existsSync(pyFile)) {
            const pySample = fs.readFileSync(pyFile, "utf8");
            const status = invalid(pySample, sample);
            if (!status) continue;
            msg = `re-translating ${file} (${status})`;
        }
        if (!assistant || !thread) continue;

        n++;
        if (n % max !== num) continue;

        await openai.beta.threads.messages.create(
            thread.id,
            { content: sample, role: "user" }
        );

        const run = await openai.beta.threads.runs.create(
            thread.id,
            { assistant_id: assistant.id }
        );

        let dots = ".";
        const bar = multibar.create(1, 0, { filename: file, msg: "queued", dots });
        do {
            await sleep(300);
            const res = await openai.beta.threads.runs.retrieve(
                thread.id, run.id
            );

            if (dots.length > 5) dots = ".";
            else dots += ".";

            bar.increment(1, { filename: file, msg: res.status, dots });
            if (res.status === "queued" || res.status === "in_progress") continue;
            if (res.status === "completed") { msg = "ok."; break; }
            msg = `failed: ${res.last_error?.code} ${res.last_error?.message}`;
            bar.update(0, { filename: file, msg, dots: "" });
            bar.stop();
            continue loop_files;
            // eslint-disable-next-line no-constant-condition
        } while (true);
        bar.update(0, { filename: file, msg, dots: "" });

        const msgs = await openai.beta.threads.messages.list(
            thread.id, { limit: 1 }
        );

        const pySamples = [];
        for (const res of msgs.data[0].content)
            if (res.type === "text") pySamples.push(res.text.value);

        const pySample = pySamples.join("\n\n");
        if (!invalid(pySample, sample)) {
            fs.writeFileSync(pyFile, fixup("", pySample), "utf8");

        }
        else {
            multibar.log("translated sample:");
            multibar.log(JSON.stringify(pySample));
            bar.update(0, { filename: file, msg: "invalid " + invalid(pySample, sample), dots: "" });
        }
        bar.stop();
    }
}

/** @type {FixupFunc} */
function fixupSample(file, pyCode = "", write = true) {
    if (!useFixup) return pyCode;

    pyCode ||= fs.readFileSync(file, "utf8");

    const fixedPy = pyCode
        .replace(/\r/g, '')
        .split("\n</sample>");

    for (const index in fixedPy) {
        if (!fixedPy[index].match(/<sample |<sample>\n/)) {
            fixedPy[index] = "";
            continue;
        }

        let code = fixedPy[index]
            .replace(/^```.*|```$|<\/?(code|script|xml)>\s+/g, '')
            // remove trailing AI text
            .replace(/[^§]*<sample/, "<sample")
            // AI once added CDATA tag
            .replace(/<!\[CDATA\[([\w\W]+)\]\]>/, "$1")
            // AI thought MUI live in gfx
            .replace(/gfx\.MUI\./g, "MUI.")
            // AI thought MUI is ui alias
            .replace(/ui as MUI/g, "MUI");

        // AI thinks ui and MUI are equal
        if (file.includes("MUI")) code = code.replace(/\bui\b/g, "MUI");

        /** @type {string[]} */
        code = fixupPython(file, code, false);
        fixedPy[index] = code + `\n</sample>\n`;
    }

    const fixedSamples = fixedPy.filter(s => s).join("\n").trim();

    if (write && file && pyCode !== fixedSamples) fs.writeFileSync(file, fixedSamples);
    return fixedSamples;
}

/** @type {FixupFunc} */
function fixupPython(file, code = "", write = true) {
    if (!useFixup) return code;

    code ||= fs.readFileSync(file, "utf8");

    code = code.replace(/[\s\S]*```python\s*([\s\S]*)\s*```[\s\S]*/, "$1");

    const head = [];
    /** @type {Set<string>} */
    const imports = new Set();
    /** @type {Set<string>} */
    const cfg = new Set();

    // get meta stuff
    code = code.replace(/(<sample.*>)\s*/, (_, m) => (head.push(m), ""));
    code = code.replace(/(# )?(cfg\.\w+)[,;]?\s*/g, (_, _1, m) => (cfg.add(m), ""));

    /** @type {Obj<string>} */
    const objLibs = { app: "native", ui: "hybrid", MUI: " ", gfx: " " };
    for (const obj in objLibs) {
        if (code.includes(obj + ".") && objLibs[obj] !== " ")
            imports.add(`from ${objLibs[obj]} import ${obj}`);
    }
    code = code.replace(/((from .* )?import (.*))\s*/g, (_, m, ms, is) => {
        if (is && is.includes("native")) return "";
        for (var i of is.split(/,\s*/g)) {
            if (!(ms?.includes(i) || objLibs[i]))
                imports.add((ms || '') + `import ` + i);
        }
        return "";
    });

    if (imports.delete("from native import ui"))
        imports.add("from hybrid import ui");

    code = code.trim()
        .replace(/[ \t\r]+\n/g, "\n")
        .replace(/\n{3,}/g, "\n\n");

    if (!file.includes("ui"))
        code = code.replace(/ui.app/g, "app");

    // additional includes
    // random module
    if (code.match(/Math.random\(/i)) {
        imports.add("import random");
        code = code.replace(/Math.random\(/gi, "random.random(");
    }

    if (code.match(/json\.(loads|dumps)/i))
        imports.add("import json");

    // base64 module
    if (code.match(/\batob\b/) || code.match(/\batob\b/)) {
        imports.add("import base64");
        code = code.replace(/\batob\b/g, "base64.b64decode")
            .replace(/\bbtoa\b/g, "base64.b64encode");
    }

    // math module
    if (code.includes("Math.")) {
        imports.add("import math");
        code = code.replace(/Math\./g, "math.")
            .replace(/math\.PI/g, "math.pi")
            .replace(/math\.abs/g, "abs");
    }
    // date/time
    if (code.includes("Date.")) imports.add("import time as Date");

    code = code
        .replace(/(app\.)?alert\(/g, "app.Alert(")
        .replace(/console\.log/g, "print")
        .replace(/(if|while)\s*\((.*)\)\s*:/g, (_, kw, ex) => `${kw} ${ex.trim()}:`)
        .replace(/native\.(app|ui|MUI|gfx|random|json|base64)?/g, (_, s) => s || "app.")
        .replace(/(app|ui|MUI|gfx) = (app|ui|MUI|gfx)/g, "");

    if (!file.match(/IOT_|USB_/)) {
        code = code
            .replace(/([^'":])\btrue\b([^"'<])/g, "$1True$2")
            .replace(/([^'":])\bfalse\b([^"'<])/g, "$1False$2")
            .replace(/([^'":\w])!([^"'<=\\\n-])/g, "$1not $2");
    }

    // ui class fragment
    //if (code.includes("def onStart(self):")) {
    code = code
        .replace("def onStart(self):", "def OnStart():")
        .replace("app.Run(Main)", "")
        .replace("main = Main()", "")
        .replace("main.onStart()", "")
        .replace(/self\./g, "")
        .replace(/(\()self(,\s*)?/g, "$1")
        .replace(/\(\.(?=[a-z])/gi, "(");
    //}

    code = code
        .replace(/String.fromCharCode/g, "chr")
        .replace(/(\w+)\.charCodeAt\(([^)]*)\)/g, "ord($1)");

    // ui class fragment
    if (code.match(/class Main(\(app(.App)?\))?:/i)) {
        code = code
            .replace(/class Main(\(app(.App)?\))?:/i, "")
            .replace(/Main\(\)\.on.*/g, "")
            .replace(/\n {4}/g, "\n");
    }

    //if (code.match(/app\.Set(Timeout|Interval)/i)) {
    code = code
        .replace(/(?!app.)set(Timeout|Interval)\((\s*(\d+), (.*))\)/gi, "app.Set$1($4, $3)")
        .replace(/(?!app.)set(Timeout|Interval)\((\s*(.*), (\d+))\)/gi, "app.Set$1($3, $4)")
        .replace(/(?!app.)clear(Timeout|Interval)/gi, "app.Clear$1");
    //}

    code = code
        // remove var keyword
        .replace(/\bvar /g, '')
        // remove empty var defs
        .replace(/(\n|^)\w+;/g, '')
        .replace(/\n=.*/, '');

    // auto detect globals and insert global statement
    const defs = code.split(/(?=\ndef )/);
    for (let i = 0; i < defs.length; i++) {
        if (!defs[i].includes("def ")) continue;

        // remove old statement
        defs[i] = defs[i].replace(/\s+global .*/, "");
        // find all assignments
        const vars = defs[i].match(/\w+(?= = )/g) || [];
        /** @type {string[]} */
        const globals = [];

        // find referenced in other defs
        for (let j = i + 1; j < defs.length; j++) {
            /** @type {string[]} */
            const vars2 = defs[j].match(/\w+(?= = )/g) || [];
            const used = vars.filter(v => !vars2.includes(v) && defs[j].match(RegExp(`\\b${v}\\b`)));
            globals.push(...used);
        }

        // insert global statement
        if (globals.length) {
            defs[i] = defs[i].replace(/\n(\s+\S)/, (_, m) => {
                return "\n" + m.slice(m.lastIndexOf("\n") + 1, -1) +
                    "global " + [...new Set(globals)].join(", ") + "\n" + m;
            });
        }
    }
    code = defs.join("");

    // insert callback args
    code.replace(/((\w+)\s*=\s*)?(app|gfx|ui|MUI)\.(\w+)\(\s*([^)]+)\s*\)/g,
        (m1, _1, obj, scope, func, args1) => {
            if (!obj) { code = fixCbs(code, scope, obj, func, args1.trim()); }
            else {
                var regex = /%s\.(\w+)\(\s*([^)]+)\s*\)/g;
                regex = RegExp(regex.source.replace('%s', obj || scope), regex.flags);
                code.replace(regex, (m2, subf, args2) => (code = fixCbs(code, scope, func, subf, args2.trim()), ''));
            }
            return '';
        });


    if (cfg.size > 0) head.push(`# ${[...cfg].join(", ")}\n`);
    if (imports.size > 0) head.push([...imports].sort().join("\n") + "\n");
    const fixedSamples = `${head.join("\n")}\n${code.trim()}`;

    if (file && write && code !== fixedSamples) fs.writeFileSync(file, fixedSamples);
    return fixedSamples;
}

/** @type {(code:string, scopestr:string, obj:string, subf:string, args:string) => string} */
function fixCbs(code, scopestr, obj, subf, argstr) {
    const func = loadDef(scopestr, obj || subf, obj && subf);

    if (!func) {
        if (!subf.match(/InitializeUIKit|CreateSmartWatch|(Set|Clear)(Timeout|Interval)/))
            console.error(`Warning: ${scopestr}.${obj || subf}${obj ? '.' + subf : ''} not found`);
        return code;
    }

    const args = argstr.split(/,\s*/);

    // todo: base func
    if (typeof func != "object" || !Array.isArray(func.pTypes)) return code;

    for (let i = 0; i < func.pTypes.length; i++) {
        const cb = func.pTypes[i];
        // find callback param
        if (typeof cb != "object" || !Array.isArray(cb.pNames)) return code;

        if (args[i].includes("lambda")) {
            const args2 = cb.pNames;
            code = code.replace(argstr, argstr.replace(
                RegExp(`lambda ?([^:]*):`),
                (_, args1) => `lambda ${args2.map((v, j) => args1.split(/,\s*/)[j] || v.trim()).join(", ")}:`));
        }
        else {
            const args2 = cb.pNames;
            code = code.replace(
                RegExp(`(def ${args[i]})\\(([^)]*)\\):`),
                (_, pfx, args1) => `${pfx}(${args2.map((v, j) => args1.split(/\s*,\s*/)[j] || v.trim()).join(", ")}):`);
        }
    }
    return code;
}

/** @type {Validator} */
function validatePython(pySample, jsSample) {
    if (pySample.includes("\nfunction")) return "function instead of def";
    if (pySample.includes("androidhelper")) return "detected androidhelper";
    if (pySample.includes("threading")) return "detected threading";
    if (!pySample.includes("#") && jsSample.includes("//")) return "no comments";
    if (!pySample.includes("def OnStart():") && !pySample.includes("def OnLoad():"))
        return "missing OnStart or OnLoad " + [pySample.includes("def OnStart():"), pySample.includes("def OnLoad():"), pySample.slice(pySample.indexOf("def "), pySample.indexOf("def ") + 20)];
    //if (pySample.split(/\bdef /).length !== jsSample.split(/\bfunction /).length)
    //    return "mismatching def count";
    return "";
}

/** @type {Validator} */
function validateSample(pySample, jsSample) {
    const invalid = validatePython(pySample, jsSample);
    if (invalid) return invalid;
    if (!pySample.includes("<sample")) return "no <sample> tag";
    if (pySample.split("<sample").length !== jsSample.split("<sample").length)
        return "mismatching sample count";
    // if (!sample.includes("<b>")) return "no bold areas";
    return "";
}

/** @type {{[x:string]: DSScope}} */
const scopes = {};

function loadScopes() {
    const lang = Object.keys(conf.langs)[0];
    const scopeDirs = glob(`json/${lang}/${conf.version}/*/`);
    for (const dir of scopeDirs) {
        const name = path.basename(dir);
        scopes[name] = loadJson(dir + '\\obj.json');
        scopes[name + 'base'] = loadJson(dir + '\\base.json');
    }
}

/** @type {(file:string) => any} */
function loadJson(file) {
    try { return JSON.parse(fs.readFileSync(file, 'utf8')); }
    catch (e) { return undefined; }
}

function loadDef(scope = '', func = '', subf = '') {
    /** @type {string | UndefinedPartial<DSMethod>} */
    let met = scopes[scope][func];
    if (!met) return null;
    if (subf) met = met.subf && met.subf[subf] || {};
    // load base func
    met = unwrapBaseFunc(met, "basefunc", scopes[scope + "base"]);
    if (typeof met == "string") return null;
    const base = scopes[scope + 'base'];

    // load params from base
    while (typeof met.params === "string") {
        if (!met.params.startsWith('#')) throw Error(`params must have # prefix. got '${met}'`);
        if (/[a-z]/i.test(met.params[1])) met.params = met.params.slice(1);
        if (!base || !base[met.params]) throw Error("params " + met.params + " not found!");
        met.pNames = base[met.params].pNames || [];
        met.pTypes = base[met.params].pTypes || [];
        met.params = base[met.params].params || undefined;
    }
    return met;
}

/**
 * @param {string | UndefinedPartial<DSMethod>} met
 * @param {string} type
 * @param {DSBase | null} base
 */
function unwrapBaseFunc(met, type, base) {
    while (typeof met === "string") {
        if (!met.startsWith('#')) throw Error(`${type} must have # prefix. got '${met}'`);
        if (/[a-z]/i.test(met[1])) met = met.slice(1);
        if (!base || !base[met]) throw Error("basefunc " + met + " not found!");
        met = base[met];
    }
    return met;
}

async function sleep(ms = 500) {
    return await new Promise((res) => {
        const id = setTimeout(() => { res(id); }, ms);
    });
}
