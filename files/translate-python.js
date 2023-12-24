/* eslint-disable camelcase */
const OpenAI = require("openai");
const fs = require("fs");
const glob = require("glob").sync;
const conf = require("./conf.json");
const path = require("path");
const cliProgress = require('cli-progress');

/** @typedef {(pySample:string, jsSample:string) => string} Validator */
/** @typedef {(file:string, pyCode?:string) => string} FixupFunc */

/** @param {string[]} p */
const P = (...p) => path.resolve(__dirname, ...p);

const docSampleInstructions = `
You are given a xml page with javascript code.
Translate all included JavaScript code into Python.
You have to preserve every single XML tags from the original page.
Only return the translated xml page with all xml tags from the initial page.
`.trim().replace(/\n/g, " ");

const appSampleInstructions = `
You are given JavaScript code that you should translate into Python.
Assume the objects app, gfx, ui and MUI are predefined by the framework and can be imported from the module 'native'.
Do not change any variable names.
Only return the translated code.
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
function fixupSample(file, pyCode = "") {
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
        code = fixupPython(file, code);
        fixedPy[index] = code + `\n</sample>\n`;
    }

    const fixedSamples = fixedPy.filter(s => s).join("\n").trim();

    if (file && pyCode !== fixedSamples) fs.writeFileSync(file, fixedSamples);
    return fixedSamples;
}


/** @type {FixupFunc} */
function fixupPython(file, code = "") {
    if (!useFixup) return code;

    code ||= fs.readFileSync(file, "utf8");

    code = code.replace(/[\s\S]*```python\s*([\s\S]*)\s*```[\s\S]*/, "$1");

    const head = [];
    /** @type {Set<string>} */
    const imports = new Set();
    /** @type {Set<string>} */
    const cfg = new Set();

    // get meta stuff
    const usedObj = "app,gfx,MUI,ui".split(",").filter(s => code.includes(s + "."));
    if (usedObj.length) imports.add("from native import " + usedObj.join(", "));
    code = code.replace(/(<sample.*>)\s*/, (_, m) => (head.push(m), ""));
    code = code.replace(/(# )?(cfg\.\w+)[,;]?\s*/g, (_, _1, m) => (cfg.add(m), ""));
    code = code.replace(/(from (.*) import .*|import .*)\s*/g, (_, m, ms) => {
        if (ms !== "native") imports.add(m);
        return "";
    });
    imports.delete("import native");
    code = code.trim()
        .replace(/[ \t\r]+\n/g, "\n")
        .replace(/\n{3,}/g, "\n\n");

    // additional includes
    // random module
    if (code.match(/Math.random\(/i)) {
        imports.add("import random");
        code = code.replace(/Math.random\(/gi, "random.random(");
    }

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
        .replace(/native.(app|gfx|MUI)/g, "$1")
        .replace(/(app\.)?alert\(/g, "app.Alert(");

    // ui class fragment
    if (code.match(/class Main(\(app(.App)?\))?:/i)) {
        code = code
            .replace(/class Main(\(app(.App)?\))?:/i, "")
            .replace(/Main\(\)\.on.*/g, "")
            .replace(/\n {4}/g, "\n");
    }

    code = code
        // remove var keyword
        .replace(/\bvar /g, '')
        // remove empty var defs
        .replace(/(\n|^)\w+;/g, '');

    // auto detect globals and insert global statement
    const defs = code.split("\ndef ");
    for (let i = 1; i < defs.length; i++) {
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
    code = defs.join("\ndef ");

    if (cfg.size > 0) head.push(`# ${[...cfg].join(", ")}\n`);
    if (imports.size > 0) head.push([...imports].sort().join("\n") + "\n");
    const fixedSamples = `${head.join("\n")}\n${code.trim()}`;

    if (file && code !== fixedSamples) fs.writeFileSync(file, fixedSamples);
    return fixedSamples;

}

/** @type {Validator} */
function validatePython(pySample, jsSample) {
    if (pySample.includes("\nfunction")) return "function instead of def";
    if (pySample.includes("androidhelper")) return "detected androidhelper";
    if (!pySample.includes("def OnStart():") && !pySample.includes("def OnLoad():"))
        return "missing OnStart or OnLoad " + [pySample.includes("def OnStart():"), pySample.includes("def OnLoad():"), pySample.slice(pySample.indexOf("def "), pySample.indexOf("def ") + 20)];
    if (pySample.split(/\bdef /).length !== jsSample.split(/\bfunction /).length)
        return "mismatching def count";
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

async function sleep(ms = 500) {
    return await new Promise((res) => {
        const id = setTimeout(() => { res(id); }, ms);
    });
}
