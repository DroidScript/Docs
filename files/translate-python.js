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

        let pySample = pySamples.join("\n\n").replace(/^```.*|```$|<\/?(code|script)>|from native import cfg\s+/g, '').trim();
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
            // remove trailing AI text
            .replace(/[^§]*<sample/, "<sample")
            // AI once added CDATA tag
            .replace(/<!\[CDATA\[([\w\W]+)\]\]>/, "$1")
            // AI thought MUI live in gfx
            .replace(/gfx\.MUI\./g, "MUI.")
            // AI thought MUI is ui alias
            .replace(/ui as MUI/g, "MUI")
            // move import to top
            .replace(/(<sample.*>)([^§]+)((\s+from native import.*)+)/, "$1$3$2");

        // AI thinks ui and MUI are equal
        if (file.includes("MUI")) code = code.replace(/\bui\b/g, "MUI");

        // ui class fragment
        if (code.match(/class Main\(app(.App)?\):/i)) {
            code = code
                .replace(/class Main\(app(.App)?\):/i, "")
                .replace(/\n {4}/g, "\n");
        }

        for (const scope of "app,gfx,MUI,ui,cfg".split(",")) {
            if (scope !== "cfg" && code.includes(scope + ".")) {
                // eslint-disable-next-line max-depth
                if (!code.match(RegExp(`from native import .*${scope}`)))
                    // add import
                    code = code.replace(/(<sample.*>(\s*|cfg\..*|\/\/.*)*)/, `$1\nfrom native import ${scope}\n`);
            }
            else {
                code = code
                    // remove import
                    .replace(RegExp(`\\s*from native import ${scope}\n`), "\n")
                    // remove inline import
                    .replace(RegExp(`(from native import )(\\w+, )*${scope},? ?`), "$1$2");
            }
        }

        if (file.includes("RadioButtons"))
            console.log(JSON.stringify(code));

        code = code
            // remove var keyword
            .replace(/\bvar /g, '')
            // remove trailing commas, ensure newlines
            .replace(/(from native import .*), *\n/g, "$1\n")
            // merge multiple imports
            .replace(/((from native import \w+\s+)+)/, m => {
                const imports = m.split(/\n*from native import /).map(s => s.trim()).filter(s => s);
                return `from native import ${[...new Set(imports)].join(", ")}\n\n`;
            })
            // move import to top
            .replace(/(<sample.*>)\s+(from native import .*)\s+((\ncfg\..*|\n\/\/.*)*)/, "$1$3\n\n$2\n\n")
            // trim whitespace
            .replace(/(<sample.*>)\n+/, "$1\n");

        fixedPy[i] = code.trim() + "\n</sample>\n";
    }

    const fixedSamples = fixedPy.filter(s => s).join("\n").trim();

    // if (file.includes("TextH4-py")) console.log(fixedSamples);
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
