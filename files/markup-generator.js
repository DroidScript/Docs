
const fs = require('fs');
const fsp = require('fs/promises');
const conf = require('./conf.json');
const { GenerateJSFile } = require('./generators/generate-markup');

const dir = __dirname + "/json/en/" + conf.version;
const outDir = __dirname + "/markup/en/";

async function GetFolders(folder = "") {
    const folders = await fsp.readdir(folder, { withFileTypes: true });
    for (const fld of folders.filter(d => /[a-z]/i.test(d.name[0]) && d.isDirectory())) {
        const path = folder + "/" + fld.name + "/";
        const files = ["obj.json", "base.json", "navs.json"];
        const descPath = path + "desc/";
        try {
            const fileDataPromises = files.map((f) => fsp.readFile(path + f, 'utf8').catch(_e => '{}'));
            const fileData = await Promise.all(fileDataPromises);
            const [obj, base, navs] = fileData.map(data => JSON.parse(data));
            let md = false;

            if (fs.existsSync(path + files[0]))
                fs.writeFileSync(path + files[0], tos(obj));
            if (fs.existsSync(path + files[1]))
                fs.writeFileSync(path + files[1], tos(base).replace(/\s+"name": "/g, ' "name": "'));

            if (!fs.existsSync(path + files[0]) && fs.existsSync(descPath)) {
                // const descFiles = await fsp.readdir(descPath);
                md = true;
                // for (const descFile of descFiles) {
                //     obj[descFile.replace('.md', '')] = { desc: '#' + descFile };
                // }
            }

            if (md) await GenerateMDFile(fld.name, path);
            else await GenerateJSFile(dir, outDir, fld.name, path, obj, base, navs);
        } catch (err) {
            console.error("While generating " + fld.name);
            console.error(err.stack || err.message);
        }
    }
}

/**
 * @param {String} scope scope
 * @param {String} path Path
 */
function GenerateMDFile(scope, path) {
    const folder = path.replace(dir, outDir);
    if (!fs.existsSync(folder)) fs.mkdirSync(folder, { recursive: true });
    const srcPath = path + "/desc";
    try {
        const descFiles = fs.readdirSync(srcPath);
        for (const descFile of descFiles)
            fs.copyFileSync(srcPath + "/" + descFile, folder + "/" + descFile);

    } catch (err) {
        console.log("Error in " + scope, err.message);
    }
}

// converts a variable to indented string
// supports Boolean, Number, String, Array and Object
/**
 * @param {any} o
 * @param {string} [intd]
 * @returns {string}
 */
function tos(o, intd = "") {
    if (o === null || o === undefined) return "null";
    if (Array.isArray(o)) return "[" + o.map(e => tos(e, intd)).join(', ') + "]";
    if (typeof o === "object") {
        const okeys = Object.keys(o).filter(k => o[k] !== undefined);
        if (!okeys.length) return "{}";
        return "{\n" + okeys.map(k => intd + `\t"${k}": ${tos(o[k], intd + "\t")}`).join(",\n") + `\n${intd}}`;
    }
    return JSON.stringify(o);
}

GetFolders(dir);
