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
in every <sample> area, add add a "from native import app", "gfx", or "ui" statement, when they are used by the sample, and not defined elsewhere already.
Lines that start with "cfg." at the beginning of a sample should not be modified.
at the beginning if app, gfx or ui is needed within the sample block.
Only return the translated xml page with all xml tags from the initial page.
`.trim().replace(/\n/g, " ");

/** @param {string} keyFile */
function getOpenAI(keyFile) {
    const apiKey = fs.readFileSync(P(keyFile), "utf8");
    if (!apiKey) throw Error("No openai key found");

    // return require("./mocks").openai.OpenAI({ apiKey });
    return new OpenAI.OpenAI({ apiKey });
}

async function sleep(ms = 500) {
    return await new Promise((res) => {
        const id = setTimeout(() => { res(id); }, ms);
    });
}

/** @param {string} sample */
function invalid(sample) {
    if (!sample.match(/from native import (app|ui|gfx)/)) return "no import native";
    if (!sample.includes("<sample")) return "no <sample> tag";
    if (sample.includes("\nfunction")) return "function instead of def";
    // if (!sample.includes("<b>")) return "no bold areas";
    return "";
}

// create new container
const multibar = new cliProgress.MultiBar({
    clearOnComplete: false,
    hideCursor: true,
    gracefulExit: true,
    autopadding: true,
    format: '{filename} | [{duration}s] {msg} {dots} ',
}, cliProgress.Presets.shades_grey);

async function main(num = 1, max = 1) {
    const openai = getOpenAI("./openai.key");

    const lang = Object.keys(conf.langs)[0];
    const files = glob(`json/${lang}/${conf.version}/*/samples/*.txt`);
    const jsFiles = files.filter(f => !f.endsWith("-py.txt"));
    jsFiles.sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? -1 : 1));

    const list = await openai.beta.assistants.list({});
    const assistant = list.data.find(o => o.name === "Python Translator");
    if (!assistant) throw Error("Assistant 'Python Translator' not found");

    await openai.beta.assistants.update(assistant.id, { instructions });

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
            const status = invalid(pySample);
            if (!status) continue;
            msg = `re-translating ${file} (${status})`;
        }

        n++;
        if (n % max !== num) continue;

        const message = await openai.beta.threads.messages.create(
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
        for (const msg of msgs.data[0].content)
            if (msg.type === "text") pySamples.push(msg.text.value);

        let pySample = pySamples.join("\n\n").replace(/^```.*|```$|<\/?(code|script)>|from native import cfg\s+/g, '').trim();
        if (invalid(pySample) === "no import native") {
            if (pySample.includes("app.")) pySample = pySample.replace(/(<sample.*>\s+(cfg\..*\s+|\/\/.*\s+)+?)/g, "$1from native import app\n");
            if (pySample.includes("ui.")) pySample = pySample.replace(/(<sample.*>\s+(cfg\..*\s+|\/\/.*\s+)+?)/g, "$1from native import ui\n");
            if (pySample.includes("gfx.")) pySample = pySample.replace(/(<sample.*>\s+(cfg\..*\s+|\/\/.*\s+)+?)/g, "$1from native import gfx\n");
            multibar.log("fixed import: " + JSON.stringify(pySample));
        }
        if (!invalid(pySample)) { fs.writeFileSync(pyFile, pySample, "utf8"); }
        else {
            multibar.log(`translated sample:\n${JSON.stringify(pySample)}\ninvalid ${invalid(pySample)}\n`);
            if (n < 5) process.exit();
        }
    }
}

const max = 4;
const proc = [];
for (let i = 0; i < max; i++) proc.push(main(i, max));
Promise.all(proc).then(() => multibar.stop());
