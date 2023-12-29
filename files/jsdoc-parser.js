
const fs = require("fs-extra");
const path = require("path");
const conf = require("./conf.json");
const getComment = require("esprima-extract-comments");
const rimraf = require("rimraf");

/** @type {0 | 1 | 2 | 3} off | error | warn | more */
let verbose = 1;
const extraFormat = false;
const LANG = "en";
const SRC = path.normalize(__dirname + "/markup/" + LANG);
const DST = path.normalize(__dirname + "/json/" + LANG + "/" + conf.version);

const typx = "all,bin,dso,gvo,jso,swo,fnc,lst,num,obj,str,?,uio";
/** @type {Obj<string>} */
const types = {
    String: "str",
    Number: "num",
    Object: "obj",
    Boolean: "bin",
    Function: "fnc",
    Array: "lst",
    Any: "all",
    AppObject: "dso",
    GameObject: "gvo",
    JSObject: "jso",
    SmartWatchObject: "swo",
    unknown: "?",
    UIObject: "uio"
};

let _errors = 0;

/**
 * @param {string} SOURCE_DIR
 * @param {string} fn Filename
 */
function LoopFiles(SOURCE_DIR, fn) {
    // console.log("<---- Generating json for "+SOURCE_DIR+" ----->";
    if (!fs.existsSync(SOURCE_DIR)) return console.log(SOURCE_DIR + " does not exist!");

    const folder = path.basename(SOURCE_DIR);
    const outputFolder = path.join(DST, folder);
    const outputSamples = path.join(outputFolder, "samples");
    const outputDesc = path.join(outputFolder, "desc");

    // parent methods
    // let parent = false
    if (!fs.existsSync(outputFolder)) fs.mkdirSync(outputFolder, { recursive: true });
    if (!fs.existsSync(outputSamples)) fs.mkdirSync(outputSamples, { recursive: true });
    if (!fs.existsSync(outputDesc)) fs.mkdirSync(outputDesc, { recursive: true });

    const baseFile = SOURCE_DIR + "_base.js";
    /** @type {Obj<DSFunction|string>} */
    let baseJson = {};
    if (fs.existsSync(baseFile)) baseJson = getBaseMethods(baseFile);

    /** @type {Obj<DSFunction>} */
    let objJson = {};

    let files = fs.readdirSync(SOURCE_DIR);
    // TODO: Support regex for this "file filtering" method in the future
    if (fn) {
        files = files.filter(m => m.includes(fn));
        if (!files.length) return console.log("Empty files for '" + fn + "' filter");
        const objPath = path.join(__dirname, "json", LANG, conf.version, folder, "obj.json");
        if (fs.existsSync(objPath))
            objJson = JSON.parse(fs.readFileSync(objPath, 'utf8'));
    }
    files.sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? -1 : 1));

    /** @type {Obj<string[]>} */
    let navs = {};
    const navsPath = path.join(SOURCE_DIR, "..", folder + "-navs.json");
    if (fs.existsSync(navsPath))
        navs = JSON.parse(fs.readFileSync(navsPath, 'utf8'));

    for (const file of files) {
        const folderPath = path.join(SOURCE_DIR, file);
        const stats = fs.statSync(folderPath);
        if (!stats.isFile()) continue;//console.log( "Sub-folder is not rendered" )
        if (file.endsWith(".js")) {
            const data = renderFile(folderPath, objJson, baseJson, navs);

            // write description.md file
            const descFile = path.join(outputDesc, data.name + ".md");
            if (data.desc && !_errors) fs.writeFileSync(descFile, data.desc.replace(/<br>/g, '\n'));

            // write sample.txt file
            const sampleFile = path.join(outputSamples, data.name + ".txt");
            if (!_errors && data.samples.js) fs.writeFileSync(sampleFile, data.samples.js);
            const pysampleFile = path.join(outputSamples, data.name + "-py.txt");
            if (!_errors && data.samples.py) fs.writeFileSync(pysampleFile, data.samples.py);
        }
        else if (file.endsWith(".md")) {
            const data = renderMdFile(folderPath, objJson);
            // write description.md file
            const descFile = path.join(outputDesc, data.name + ".md");
            if (!_errors) fs.writeFileSync(descFile, data.desc.replace(/<br>/g, '\n'));
        }
    }
    Throw(null, SOURCE_DIR);

    /** @type {Obj<DSFunction>} */
    const rObjJson = JSON.parse(JSON.stringify(objJson));
    /** @param {DSFunction} o */
    const descOnly = o => String(Object.keys(o)) === 'desc' && (!o.desc || /^#.*\.md$/.test(o.desc));
    if (Object.values(rObjJson).every(o => descOnly(o))) return void 0;

    if (Object.keys(objJson).length) {
        const objJsonFile = path.join(outputFolder, "obj.json");
        fs.writeFileSync(objJsonFile, tos(objJson));
    }

    if (Object.keys(baseJson).length) {
        const baseJsonFile = path.join(outputFolder, "base.json");
        fs.writeFileSync(baseJsonFile, tos(baseJson).replace(/\s+"name": /g, ' "name": '));
    }

    if (Object.keys(navs).length) {
        const navsJsonFile = path.join(outputFolder, "navs.json");
        fs.writeFileSync(navsJsonFile, JSON.stringify(navs, null, '\t'));
    }

    const scopePath = path.join(SOURCE_DIR, "..", folder + ".js");
    if (fs.existsSync(scopePath)) {
        const scopeJSFile = path.join(outputFolder, folder + ".js");
        fs.copyFileSync(scopePath, scopeJSFile);
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
    if (typeof o == "object") {
        var okeys = Object.keys(o).filter(k => o[k] !== undefined);
        if (!okeys.length) return "{}";
        return "{\n" + okeys.map(k => intd + `\t"${k}": ${tos(o[k], intd + "\t")}`).join(",\n") + `\n${intd}}`;
    }
    return JSON.stringify(o);
}

/**
 * @param {string} filePath
 * @param {Obj<DSFunction>} objJson
 * @param {Obj<DSFunction|string>} baseJson
 * @param {Obj<string[]>} navs
 */
function renderFile(filePath, objJson, baseJson, navs) {

    const file = path.basename(filePath);

    const strComments = getComment.file(filePath, {});

    const _fname = file.slice(0, -3);

    const objData = RenderComments(objJson, strComments, true, _fname, baseJson);
    /** @type {typeof objData} */
    const data = JSON.parse(JSON.stringify(objData));

    for (const cat of objData.categories) {
        if (!navs[cat]) navs[cat] = [];
        if (!navs[cat].includes(objData.name)) navs[cat].push(objData.name);
    }

    // description
    let desc = objJson[data.name].desc || '';
    objJson[data.name].desc = "#" + data.name + ".md";

    let popups = "";
    const props = data.props;
    props.sort((a, b) => (a[1] < b[1] ? -1 : 1));

    if (props.length) {
        desc += "<h3>Properties</h3>";
        desc += "These are the setter and getter properties for the " + data.name + " Component.\n";
        for (let o = 0; o < props.length; o++) {
            const p = props[o];
            p[2] = extractBacktickStrings(p[2]);
            const id = p[1].toLowerCase().trim() + "-" + (o * 5);
            desc += `<div class="samp"><a href="#${id}" data-transition="pop" data-rel="popup" class="ui-link">${p[1]}</a></div>`;
            popups += `<div data-role="popup" id="${id}" class="ui-content"><p><span style="color:#4c4;">${p[0]}</span><br>${p[2]}</p></div>`;
        }
        desc += "\n" + popups;
    }

    desc = extractBacktickStringsDesc(desc.trim());
    if (desc.length < 256) {
        objJson[data.name].desc = desc;
        desc = "";
    }
    else { desc += "\n"; }

    return {
        name: data.name,
        desc,
        samples: data.samples
    };
}

/** @returns {DSFunction} */
const newDSFunc = () => ({
    name: undefined,
    abbrev: undefined,
    desc: "",
    isval: undefined,
    pNames: undefined,
    pTypes: undefined,
    params: undefined,
    retval: undefined,
    shortDesc: undefined,
});

/**
 * Render markown files.
 * @param {String} filePath Path to the md file
 * @param {Obj<DSFunction>} objJson
 */
function renderMdFile(filePath, objJson) {
    const file = path.basename(filePath);
    const name = file.slice(0, -3);
    const desc = fs.readFileSync(filePath, "utf8");
    objJson[name] = newDSFunc();
    objJson[name].desc = "#" + name + ".md";
    return {
        name,
        desc
    };
}

/**
 * Get base methods.
 * @param {String} filePath Path to the _base.js file
 */
function getBaseMethods(filePath) {
    const file = path.basename(filePath);
    const strComments = getComment.file(filePath, {});
    const name = file.slice(0, -3);
    const objData = RenderComments({}, strComments, true, name, {});
    Throw(null, filePath);
    return objData.json;
}

/** @param {string | null} e */
function Throw(e, filePath = '') {
    if (e) {
        _errors++;
        if (verbose) console.error(`\x1b[31m${e}\x1b[37m`);
    } else if (_errors) {
        const msg = `Errors detected${filePath && ' in ' + filePath}. Fix all of them to continue.`;
        throw Object.assign(Error(msg), { stack: '' });
    }
}

/** @type {(msg:string, lvl?:typeof verbose) => void} */
function Warn(msg, lvl = 2) {
    if (verbose >= lvl) console.warn(`\x1b[30mWarning: ${msg}\x1b[37m`);
}


/** @ts-ignore @type {<T>(O: T) => (Extract<keyof T, string>)[]} */
function keys(o) { return Object.keys(o || []); }

/**
 * @param {Obj<DSFunction | string>} objJson
 * @param {import('esprima').Token[]} tokens
 * @param {boolean} cmp
 * @param {string} name
 * @param {Obj<DSFunction|string>} baseJson
 */
function RenderComments(objJson, tokens, cmp, name, baseJson) {
    /** @type {DSFunction} */
    let func = {};
    objJson[name] = func;

    const samples = { js: "", py: "" };
    /** @type {string[][]} */
    const props = [];
    /** @type {string[]} */
    const categories = [];
    /** @type {Obj<DSFunction|string>} */
    const json = {};

    tokens.forEach(c => {
        if (c.type === "BlockComment") {
            const mt = c.value.match(/@\s*(ex|s)ample *-? *(.*)/i);
            if (mt) {
                const t = mt[2].trim() || '';
                const ext = t.startsWith("Python") ? "py" : "js";
                const title = t.slice(ext === "py" ? 7 : 0).trim();

                const cod = c.value.substring(c.value.indexOf('\n', mt.index)).trim();
                const sample = `\n\n<sample${title && ' ' + title}>\n${cod.replace(/\*_/g, '*/')}\n</sample>`;
                samples[ext] += sample;
            }
            else if (c.value.includes('```')) { /* empty */ }

            // Description.md
            else if (/@\s*description/i.test(c.value)) {
                func.desc += c.value.substring(c.value.indexOf("\n"));
            }

            else if (/@\s*ds/i.test(c.value)) {
                func.desc += c.value.split("@ds")[1].trim();
            }

            // Sample.txt
            else if (/@\s*sample/i.test(c.value)) {
                const _samp = c.value.slice(c.value.indexOf("\n") + 1);
                samples.js += `\n\n${_samp}\n\n`;
                console.log("reached @sample despite /(ex|s)ample/");
            }

            // Base method
            else if (/@\s*extern/i.test(c.value)) {
                const [_m, _n, _, _k = ''] = c.value.match(/@\s*extern\s+(\S+)(\s+(#\S+))?/i) || [];
                if (!baseJson[_k || _n])
                    Throw(`unknown base method '${_n + (_k && ' ' + _k)}' in '${name}'`);
                json[_n] = _k || '#' + _n;
            }

            // Category
            else if (/@\s*category/i.test(c.value)) {
                const _n = c.value.split(/@\s*category/i)[1].trim();
                if (_n) categories.push(_n);
            }

            else {
                func = HandleComment(c, name, func, json, objJson);
            }
        }
    });

    if (cmp && Object.keys(json).length) func.subf = json;

    if (!name.endsWith("_base")) {
        func.desc = func.desc?.trim() || undefined;
        func.shortDesc = func.shortDesc?.trim() || undefined;
        if (!func.desc) Warn(`empty desc in ${name}`);
        if (!func.shortDesc) Warn(`empty shortDesc in ${name}`, 3);
    }

    for (const [k, v] of Object.entries(json)) {
        if (typeof v == "string") continue;
        v.desc = v.desc?.trim() || undefined;
        v.shortDesc = v.shortDesc?.trim() || undefined;
        if (!v.desc) Warn(`empty desc in ${name}.${k}`);
        if (!v.shortDesc) Warn(`empty shortDesc in ${name}.${k}`, 3);
    }

    for (const ext of keys(samples))
        samples[ext] = samples[ext].trim();

    return {
        json,
        name,
        samples,
        categories,
        objJson: func,
        props
    };
}

/**
 * @param {import('esprima').Token} c
 * @param {string} name
 * @param {UndefinedPartial<DSMethod>} func
 * @param {Obj<string|UndefinedPartial<DSMethod>>} json
 * @param {Obj<string|UndefinedPartial<DSMethod>>} objJson
 */
function HandleComment(c, name, func, json, objJson) {
    let isCA = false, afterCmpParam = false;
    let met = newDSFunc();

    for (let line of c.value.split(/\r?\n/)) {
        line = line.trim();
        const obj = isCA ? func : met;

        if (line.includes("###") && !isCA) {
            const method = line.replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
            const ref = /\d/.test(method[0]) ? '#' : '';
            json[ref + method] = met = newDSFunc();
            if (c.value.includes("@prop")) met.isval = true;
        }

        // exclude these lines
        else if (line.includes("@jdocs")) { /* empty */ }

        else if (line.includes("##") && !isCA) {
            // met += line;
        }

        // isCA = false
        else if (line.includes("@prop") && line.includes("{")) {
            const l = line.split("@prop")[1].trim(),
                p = extractParams(l),
                ts = p[0].split('||').map(t => types[p[0]] || t);
            if (ts.find(t => !typx.includes(t.split(/[_:-]/)[0]))) Throw(`unknown param type ${line} in ${name}`);
            let d = ts.join('||');
            if (p[2]) d += "-" + p[2];
            const ref = /\d/.test(p[1][0]) ? '#' : '';
            json[ref + p[1]] = met = newDSFunc();
            met.isval = true;
            met.desc = p[2];

            let g = p[0].split(/[_\s:-]/)[0], v;
            if (types[g]) v = types[g];
            else if (typx.includes(g)) v = p[0];
            else console.log(`unknown ret type ${g} in ${name}`), v = "obj-" + p[0];
            met.retval = v;
        }
        else if (line.includes("@prop")) {
            if (line.includes("{")) {
                const l = line.split("@prop")[1].trim(),
                    p = extractParams(l),
                    ts = p[0].split('||').map(t => types[p[0]] || t);
                if (ts.find(t => !typx.includes(t.split(/[_:-]/)[0]))) Throw(`unknown param type ${line} in ${name}`);
                let d = ts.join('||');
                if (p[2]) d += "-" + p[2];
                const ref = /\d/.test(p[1][0]) ? '#' : '';
                json[ref + p[1]] = met = newDSFunc();
                met.isval = true;
                met.desc = p[2];

                let g = p[0].split(/[_\s:-]/)[0], v;
                if (types[g]) v = types[g];
                else if (typx.includes(g)) v = p[0];
                else console.log(`unknown ret type ${g} in ${name}`), v = "obj-" + p[0];
                met.retval = v;
            }
            else { obj.isval = true; }
        }

        else if (line.includes("@name")) {
            obj.name = line.substring(line.indexOf("@name") + 5).trim();
        }

        else if (line.includes("@brief")) {
            obj.shortDesc = line.substring(line.indexOf("@brief") + 6).trim();
        }

        else if (/@param\s+#/.test(line)) {
            obj.params = line.split("@param")[1].trim();
        }

        else if (line.includes("@param")) {
            const _l = line.split("@param")[1].trim();
            const p = extractParams(_l);
            let _d;
            //p[2] = p[2].replace(/\\n/g, '\n') //.replace(pattern, replacement);
            if (p[2].includes("--->") || p[0].includes("unction")) {
                _d = formatDef(p[2].split("--->")[1] || "");
                p[2] = p[2].split("--->")[0];
                p[2] = extractBacktickStrings(p[2]);
            }
            else if (p[0] === "fnc_json") {
                _d = p[2] && JSON.parse(p[2]);
            }
            else {
                const ts = p[0].split('||').map(t => types[p[0]] || t);
                if (ts.find(t => !typx.includes(t.split(/[_:-]/)[0])))
                    Throw(`unknown param type ${line} in ${name}`);
                _d = ts.join('||');
                if (p[2]) _d += "-" + p[2];
            }

            if (isCA) afterCmpParam = true;

            if (!obj.pNames) obj.pNames = [];
            if (!obj.pTypes) obj.pTypes = [];
            obj.pNames.push(p[1]);
            obj.pTypes.push(_d);
            afterCmpParam = true;
        }

        else if (line.includes("#") && !func.desc) {
            isCA = true;
            func = objJson[name] = newDSFunc();
            // if( parent && isChild ) {
            //     met.subf = JSON.parse(JSON.stringify(parent));
            // }
        }

        else if (line.includes("@returns")) {
            let f = line.split("returns")[1].trim(), g = f.split(/[_\s:-]/)[0], v;
            if (types[g]) v = types[g];
            else if (typx.includes(g)) v = f;
            else console.log(`unknown ret type ${g} in ${name}`), v = "obj-" + f;
            obj.retval = v;
        }

        else if (line.includes("@img")) { /* empty */ }
        else if (line.includes("@@")) { /* empty */ }

        else if (line.includes("$$")) {
            if (!line.includes('(')) obj.isval = true;
            if (isCA && afterCmpParam) {
                const match = line.match(/\$\$(.*?)\$\$/) || [];
                func.desc += ('\n<js>' + match[1].replace(/:/g, ' : ') + '</js>\n');
            }
        }

        else if (line.includes("@abbrev")) { func.abbrev = line.split("abbrev")[1].trim(); }
        else if (line.trim() === "*") { obj.desc += "\n"; }
        else if (line.trim() === "*/" || !line.trim()) { /* empty */ }
        else { obj.desc += line.trim().replace(/^\* | \* /g, '\n'); }
    }
    return func;
}


/** @param {string} str */
function extractParamDef(str) {
    const s = str.split("}").map((l) => l.trim());
    const n = s[1].slice(0, s[1].trim().indexOf(' ') + 1);
    const d = s[1].slice(n.length);
    const t = s[0].split("{")[1].trim();
    return [t, n, d];
}

/** @param {string} sline */
function formatDef(sline) {
    if (!sline) return "";
    /** @type {string[]} */
    const pNames = [];
    /** @type {string[]} */
    const pTypes = [];
    const line = sline.split("@arg");
    line.forEach((l) => {
        if (!l.trim()) return;
        const r = extractParamDef(l);
        pNames.push(r[1]);
        if (!types[r[0]]) console.log(`unknown def type ${r[0]}`);
        pTypes.push(types[r[0]] ? types[r[0]] + "-" + r[2] : "obj-" + r[2]);
    });
    return { pNames, pTypes };
}

/** @param {string} str */
function extractParams(str) {
    const regex = /{([^}]+)}\s*(\S+)\s*(.*)/;
    const matches = str.match(regex);
    if (matches) {
        const word1 = matches[1];
        const word2 = matches[2];
        const word3 = matches[3] ? matches[3].trim() : '';
        return [word1, word2, word3];
    }
    return ['', '', ''];

}

/** replace backticks with a colored string
 * @param {string} str
 */
function extractBacktickStrings(str) {
    if (!extraFormat) return str;
    const regex = /`([^`]*)`/g;
    const matches = str.matchAll(regex);
    const style = "color:#fb8c00; font-size:100%; padding:0px 2px;";
    for (const match of matches)
        str = str.replace('`' + match[1] + '`', `<span style="${style}">${match[1]}</span>`);

    str = str.replace(/,/gm, ",");
    return str;
}

/** @param {string} str */
function extractBacktickStringsDesc(str) {
    if (!extraFormat) return str;
    let finalStr = String(str);
    const regex = /`([^`]*)`/g;
    const matches = str.matchAll(regex);
    const style = "color:#4c4; font-size:100%; padding:0px 2px;";
    for (const match of matches)
        finalStr = finalStr.replace(`\`${match[1]}\``, `<span style="${style}">${match[1]}</span>`);

    return finalStr;
}

function GetFolders(m = "") {
    let mp = SRC;
    let fn = "";
    if (m) {
        fn = m.split(".")[1];
        mp = path.join(SRC, m.split(".")[0]);
        if (!fs.existsSync(mp)) return console.log("Path " + m + " does not exist!");
        // Assumes <scope>.<member> e.g. "app.CreateButton"
        // TODO: Add <lang> and <version> in the future
        // Something like <lang>.<version>.<scope>.<member> e.g. "en.v257.app.CreateButton"
    }
    rimraf.sync(path.normalize(__dirname + "/json/" + LANG));
    fs.mkdirSync(path.normalize(__dirname + "/json/" + LANG));

    const files = fs.readdirSync(SRC, { withFileTypes: true });
    // Filter the files to only include directories (subdirectories)
    const folders = files.filter(file => /[a-z]/i.test(file.name[0]) && file.isDirectory());
    for (const folder of folders) {
        const fld = path.join(SRC, folder.name);
        if ((m && mp.includes(fld)) || !m)
            LoopFiles(fld, fn);
    }
}

if (process.argv.includes('-v')) verbose = 2;
if (process.argv.includes('-vv')) verbose = 3;
if (process.argv.includes('-q')) verbose = 0;

// path argument
const arg = process.argv.filter(a => (a.includes("-p=") || a.includes("--path=")));
let p = "";
if (arg.length) p = arg[0].split("=")[1];
GetFolders(p);
