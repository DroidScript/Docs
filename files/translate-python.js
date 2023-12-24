/* eslint-disable camelcase */
const OpenAI = require("openai");
const fs = require("fs");
const glob = require("glob").sync;
const conf = require("./conf.json");
const path = require("path");
const cliProgress = require('cli-progress');

/** @param {string[]} p */
const P = (...p) => path.resolve(__dirname, ...p);

const instructions = `
You are given a xml page with javascript code.
Translate all included JavaScript code into Python.
You have to preserve every single XML tags from the original page.
Only return the translated xml page with all xml tags from the initial page.
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

async function main() {
    const max = 4;
    const proc = [];

    const openai = getOpenAI("./openai.key");

    const list = await openai.beta.assistants.list({});
    const assistant = list.data.find(o => o.name === "Python Translator");
    if (!assistant) throw Error("Assistant 'Python Translator' not found");

    await openai.beta.assistants.update(assistant.id, { instructions });


    for (let i = 0; i < max; i++) proc.push(translateWorker(openai, assistant, i, max));
    Promise.all(proc).then(() => multibar.stop());
}

/** @param {string} keyFile */
function getOpenAI(keyFile) {
    const apiKey = fs.readFileSync(P(keyFile), "utf8");
    if (!apiKey) throw Error("No openai key found");

    // return require("./mocks").openai.OpenAI({ apiKey });
    return new OpenAI.OpenAI({ apiKey });
}

/** @type {(openai: OpenAI.OpenAI, assistant:OpenAI.OpenAI.Beta.Assistant, num:number, max:number) => Promise<void>} */
async function translateWorker(openai, assistant, num, max) {
    const lang = Object.keys(conf.langs)[0];
    const files = glob(`json/${lang}/${conf.version}/*/samples/*.txt`);
    const jsFiles = files.filter(f => !f.endsWith("-py.txt"));
    jsFiles.sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? -1 : 1));

    const thread = await openai.beta.threads.create();


    let n = 0;
    loop_files: for (const file of jsFiles) {
        const name = path.basename(file, ".txt");
        const dir = path.dirname(file);
        const pyFile = `${dir}/${name}-py.txt`;

        const sample = fs.readFileSync(file, "utf-8");
        if (!sample.includes("<sample")) continue;

        let msg = `translating ${file}`;

        // && fs.statSync(file).mtime <= fs.statSync(pyFile).mtime
        if (fs.existsSync(pyFile)) {
            const pySample = fs.readFileSync(pyFile, "utf8");
            const status = invalid(pySample, sample);
            if (!status) {
                // eslint-disable-next-line max-depth
                if (!num) fixup(pyFile, pySample);
                continue;
            }
            msg = `re-translating ${file} (${status})`;
        }
        if (!useAI) continue;

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
            continue loop_files;
            // eslint-disable-next-line no-constant-condition
        } while (true);
        bar.update(0, { filename: file, msg, dots: "" });
        bar.stop();

        const msgs = await openai.beta.threads.messages.list(
            thread.id, { limit: 1 }
        );

        const pySamples = [];
        for (const res of msgs.data[0].content)
            if (res.type === "text") pySamples.push(res.text.value);

        let pySample = pySamples.join("\n\n");
        pySample = fixup("", pySample);

        if (!invalid(pySample, sample)) { fs.writeFileSync(pyFile, pySample, "utf8"); }
        else {
            multibar.log(`translated sample:\n${JSON.stringify(pySample)}\ninvalid ${invalid(pySample, sample)}\n`);
            if (n <= 3) {
                multibar.log("Error - terminating");
                multibar.stop();
                setTimeout(() => process.exit(), 100);
            }
        }
    }
}

/** @type {(file:string, pyCode:string) => string} */
function fixup(file, pyCode) {
    if (!useFixup) return pyCode;

    const fixedPy = pyCode
        .replace(/\r/g, '')
        .split("\n</sample>");

    for (const i in fixedPy) {
        if (!fixedPy[i].match(/<sample |<sample>\n/)) {
            fixedPy[i] = "";
            continue;
        }

        let code = fixedPy[i]
            .replace(/^```.*|```$|<\/?(code|script|xml)>\s+/g, '')
            // remove trailing AI text
            .replace(/[^§]*<sample/, "<sample")
            // AI once added CDATA tag
            .replace(/<!\[CDATA\[([\w\W]+)\]\]>/, "$1")
            // AI thought MUI live in gfx
            .replace(/gfx\.MUI\./g, "MUI.")
            // AI thought MUI is ui alias
            .replace(/ui as MUI/g, "MUI")

        // AI thinks ui and MUI are equal
        if (file.includes("MUI")) code = code.replace(/\bui\b/g, "MUI");

        let head = [];
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
        code = code.trim()
            .replace(/[ \t\r]+\n/g, "\n")
            .replace(/\n{3,}/g, "\n\n");

        // additional includes
        if (code.includes("Math.")) {
            code = code.replace(/Math\.(abs|PI)/g, m => m.toLowerCase());
            imports.add("import math");
        }
        if (code.includes("Date.")) imports.add("import time as Date");

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
            .replace(/\n\w+;/g, '');

        const defs = code.split("\ndef ");
        for (let i = 1; i < defs.length; i++) {
            defs[i] = defs[i].replace(/\s+global .*/, "");
            const vars = defs[i].match(/\w+(?= = )/g) || [];
            /** @type {string[]} */
            const globals = [];

            for (let j = i + 1; j < defs.length; j++) {
                const vars2 = defs[j].match(/\w+(?= = )/g) || [];
                const used = vars.filter(v => !vars2.includes(v) && defs[j].match(RegExp(`\\b${v}\\b`)));
                globals.push(...used);
            }

            if (globals.length) {
                defs[i] = defs[i].replace(/\n(\s+\S)/, (_, m) => {
                    return "\n" + m.slice(m.lastIndexOf("\n") + 1, -1) +
                        "global " + globals.join(", ") + "\n" + m;
                });
            }
        }
        code = defs.join("\ndef ");

        if (cfg.size > 0) head.push(`# ${[...cfg].join(", ")}\n`);
        if (imports.size > 0) head.push([...imports].sort().join("\n") + "\n");
        fixedPy[i] = `${head.join("\n")}\n${code.trim()}\n</sample>\n`;
    }

    const fixedSamples = fixedPy.filter(s => s).join("\n").trim();

    if (file && pyCode !== fixedSamples) fs.writeFileSync(file, fixedSamples);
    return fixedSamples;
}

/** @type {(pySample:string, jsSample:string) => string} */
function invalid(pySample, jsSample) {
    if (!pySample.includes("<sample")) return "no <sample> tag";
    if (pySample.includes("\nfunction")) return "function instead of def";
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
