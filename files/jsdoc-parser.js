#!/usr/bin/node

const fs = require("fs-extra");
const path = require("path");
const getComment = require("esprima-extract-comments");

const extraFormat = false;
const version = "v257";
const SRC = "markup/en";
const DST = "json/en/" + version;
const typx = "all,bin,dso,gvo,jso,swo,fnc,lst,num,obj,str,?";
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
    unknown: "?"
}

// Replace backticks with forward slashes around text inside them
const pattern = /`([^`]*)`/g; // Matches any text between backticks
const replacement = '“$1”'; // Replaces backticks with slash before and after the matched text

/** @param {string} SOURCE_DIR */
async function LoopFiles(SOURCE_DIR) {
    // console.log("<---- Generating json for "+SOURCE_DIR+" ----->";
    if (!fs.existsSync(SOURCE_DIR)) return console.log(SOURCE_DIR + " does not exist!");

    let folder = path.basename(SOURCE_DIR);
    let outputFolder = path.join(DST, folder);
    let outputSamples = path.join(outputFolder, "samples");
    let outputDesc = path.join(outputFolder, "desc");

    let navsJson = path.join(SOURCE_DIR.substring(0, SOURCE_DIR.lastIndexOf("/")), folder + "-navs.json");

    // parent methods
    // let parent = false
    if (!fs.existsSync(outputFolder)) fs.mkdirSync(outputFolder, { recursive: true })
    if (!fs.existsSync(outputSamples)) fs.mkdirSync(outputSamples, { recursive: true })
    if (!fs.existsSync(outputDesc)) fs.mkdirSync(outputDesc, { recursive: true })

    const baseFile = SOURCE_DIR + "_base.js";
    /** @type {Obj<DSFunction|string>} */
    let baseJson = {};
    if (fs.existsSync(baseFile)) baseJson = getBaseMethods(baseFile);

    const files = await fs.readdir(SOURCE_DIR);
    files.sort((a, b) => a.toLowerCase() < b.toLowerCase() ? -1 : 1)

    /** @type {Obj<DSFunction>} */
    const objJson = {}

    /** @type {Obj<string[]>} */
    let navs = {};
    if (fs.existsSync(navsJson))
        navs = JSON.parse(fs.readFileSync(navsJson, 'utf8'));

    for (const file of files) {
        const folderPath = path.join(SOURCE_DIR, file);
        const stats = fs.statSync(folderPath)
        if (stats.isFile()) {
            if (file.endsWith(".js")) {
                const data = renderFile(folderPath, objJson, baseJson, navs);

                // write description.md file
                const descFile = path.join(outputDesc, data.name + ".md")
                if (data.desc) fs.writeFileSync(descFile, data.desc)

                // write sample.txt file
                const sampleFile = path.join(outputSamples, data.name + ".txt")
                fs.writeFileSync(sampleFile, data.samples)
            }
            else if (file.endsWith(".md")) {
                const data = renderMdFile(folderPath, objJson);
                // write description.md file
                const descFile = path.join(outputDesc, data.name + ".md");
                fs.writeFileSync(descFile, data.desc);
            }
        }
        else {
            //console.log( "Sub-folder is not rendered" )
        }
    }

    /** @type {Obj<DSFunction>} */
    const rObjJson = JSON.parse(JSON.stringify(objJson));
    /** @param {DSFunction} o */
    const descOnly = o => String(Object.keys(o)) === 'desc' && (!o.desc || /^#.*\.md$/.test(o.desc));
    if (Object.values(rObjJson).every(o => descOnly(o))) return;

    if (Object.keys(objJson).length) {
        let objJsonFile = path.join(outputFolder, "obj.json");
        fs.writeFileSync(objJsonFile, tos(objJson));
    }

    if (Object.keys(navs).length) {
        let navsJsonFile = path.join(outputFolder, "navs.json");
        fs.writeFileSync(navsJsonFile, JSON.stringify(navs, null, '\t'));
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
        if (!okeys.length) return "{}"
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

    let _fname = file.slice(0, -3);

    const objData = RenderComments(objJson, strComments, true, _fname, baseJson);
    /** @type {typeof objData} */
    const data = JSON.parse(JSON.stringify(objData));

    for (const cat of objData.categories) {
        if (!navs[cat]) navs[cat] = [];
        if (!navs[cat].includes(objData.name)) navs[cat].push(objData.name);
    }

    // description
    let desc = objJson[data.name].desc || ''
    objJson[data.name].desc = "#" + data.name + ".md"

    let popups = ""
    const props = data.props
    props.sort((a, b) => a[1] < b[1] ? -1 : 1);

    if (props.length) {
        desc += "<h3>Properties</h3>"
        desc += "These are the setter and getter properties for the " + data.name + " Component.\n"
        for (let o = 0; o < props.length; o++) {
            const p = props[o]
            p[2] = extractBacktickStrings(p[2]);
            let id = p[1].toLowerCase().trim() + "-" + (o * 5)
            desc += `<div class="samp"><a href="#${id}" data-transition="pop" data-rel="popup" class="ui-link">${p[1]}</a></div>`
            popups += `<div data-role="popup" id="${id}" class="ui-content"><p><span style="color:#4c4;">${p[0]}</span><br>${p[2]}</p></div>`
        }
        desc += "\n" + popups;
    }

    desc = extractBacktickStringsDesc(desc.trim());
    if (desc.length < 256) {
        objJson[data.name].desc = desc;
        desc = "";
    }
    else desc += "\n";

    if (data.samples.trim()) data.samples = data.samples.trim() + "\n";
    else data.samples = " ";

    return {
        name: data.name,
        desc,
        samples: data.samples
    };
}

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
    }
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
    return objData.json;
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

    let samples = "";
    /** @type {string[][]} */
    let props = [];
    /** @type {string[]} */
    let categories = [];
    /** @type {Obj<DSFunction|string>} */
    let json = {};

    tokens.forEach((c, i) => {
        if (c.type == "BlockComment") {
            let mt = c.value.match(/@\s*(ex|s)ample *-? *(.*)/i);
            if (mt) {
                let t = mt[2].trim() || '';
                let cod = c.value.substring(c.value.indexOf('\n', mt.index)).trim();
                samples += `\n\n<sample${t && ' ' + t}>\n`
                samples += cod.replace(/\*\_/g, '*/');
                samples += "\n</sample>";
            }
            else if (c.value.includes('```')) { }

            // Description.md
            else if (/@\s*description/i.test(c.value)) {
                func.desc += c.value.substring(c.value.indexOf("\n"));
            }

            // Sample.txt
            else if (/@\s*sample/i.test(c.value)) {
                let _samp = c.value.slice(c.value.indexOf("\n") + 1)
                samples += `\n\n${_samp}\n\n`
                console.log("reached @sample despite /(ex|s)ample/")
            }

            // Base method
            else if (/@\s*extern/i.test(c.value)) {
                const [_m, _n, _, _k = ''] = c.value.match(/@\s*extern\s+(\S+)(\s*#(\S+))?/i) || [];
                if (!baseJson[_k || _n])
                    throw Error(`unknown base method '${_n + (_k && ' ' + _k)}' in '${name}'`);
                json[_n] = '#' + _n;
            }

            // Category
            else if (/@\s*category/i.test(c.value)) {
                const _n = c.value.split(/@\s*category/i)[1].trim();
                if (_n) categories.push(_n);
            }

            else {
                let isCA = false, afterCmpParam = false;
                let met = newDSFunc();

                for (let line of c.value.split(/\r?\n/)) {
                    line = line.trim();
                    const obj = isCA ? func : met;

                    if (line.includes("###")) {
                        const method = line.replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
                        json[method] = met = newDSFunc();
                        if (c.value.includes("@prop")) met.isval = true;
                    }

                    else if (line.includes("##")) {
                        // met += line;
                    }

                    // isCA = false
                    else if (line.includes("@prop")) {
                        obj.isval = true;
                    }

                    else if (line.includes("@brief")) obj.shortDesc = line.substring(line.indexOf("@brief") + 6).trim();

                    else if (line.includes("@param")) {
                        let _l = line.split("@param")[1].trim();
                        let p = extractParams(_l);
                        let isFunc = false, _d;
                        //p[2] = p[2].replace(/\\n/g, '\n') //.replace(pattern, replacement);
                        if (p[2].includes("--->") || p[0].includes("unction")) {
                            _d = formatDef(p[2].split("--->")[1] || "");
                            p[2] = p[2].split("--->")[0];
                            p[2] = extractBacktickStrings(p[2]);
                            isFunc = true;
                        }
                        else if (p[0] == "fnc_json") {
                            isFunc = true;
                            _d = JSON.parse(p[2]);
                        }
                        else {
                            let ts = p[0].split('||').map(t => types[p[0]] || t);
                            if (ts.find(t => !typx.includes(t.split(/[_:-]/)[0])))
                                throw Error(`unknown param type ${line} in ${name}`);
                            _d = ts.join('||');
                            if (p[2]) _d += "-" + p[2]
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

                    else if (line.includes("@return")) {
                        let f = line.split("returns")[1].trim(), g = f.split(/[_\s:-]/)[0], v;
                        if (types[g]) v = types[g];
                        else if (typx.includes(g)) v = f;
                        else console.log(`unknown ret type ${g} in ${name}`), v = "obj-" + f;
                        obj.retval = v;
                    }

                    else if (line.includes("@img")) { }
                    else if (line.includes("@@")) { }

                    else if (line.includes("$$")) {
                        if (!line.includes('(')) obj.isval = true;
                        if (isCA && afterCmpParam) {
                            const match = line.match(/\$\$(.*?)\$\$/) || [];
                            func.desc += ('\n<js>' + match[1].replace(/:/g, ' : ') + '</js>\n');
                        }
                    }

                    else if (line.includes("@abbrev")) func.abbrev = line.split("abbrev")[1].trim();
                    else if (line.trim() == "*") obj.desc += "\n";
                    else if (line.trim() == "*/" || !line.trim()) { }
                    else {
                        if (isCA) obj.desc += "\n";
                        obj.desc += line.trim().replace(/^\* */, '').replace(/[* ]+$/, '');
                    }
                }
            }
        }
    });

    if (cmp && Object.keys(json).length) {
        func.subf = { ...func.subf, ...json };
    }
    return {
        json,
        name,
        samples,
        categories,
        objJson: func,
        props
    }
}

/** @param {string} str */
function extractParamDef(str) {
    let s = str.split("}").map((l) => l.trim())
    let n = s[1].slice(0, s[1].trim().indexOf(' ') + 1)
    let d = s[1].slice(n.length)
    let t = s[0].split("{")[1].trim()
    return [t, n, d]
}

/** @param {string} sline */
function formatDef(sline) {
    if (!sline) return "";
    /** @type {string[]} */
    let pNames = [];
    /** @type {string[]} */
    let pTypes = [];
    let line = sline.split("@arg");
    line.forEach((l) => {
        if (!l.trim()) return;
        let r = extractParamDef(l);
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
    } else {
        return ['', '', ''];
    }
}

/** replace backticks with a colored string
 * @param {string} str
 */
function extractBacktickStrings(str) {
    if (!extraFormat) return str;
    const regex = /`([^`]*)`/g;
    const matches = str.matchAll(regex);
    const style = "color:#fb8c00; font-size:100%; padding:0px 2px;";
    for (const match of matches) {
        str = str.replace('`' + match[1] + '`', `<span style="${style}">${match[1]}</span>`);
    }
    str = str.replace(/,/gm, "&#44;");
    return str;
}

/** @param {string} str */
function extractBacktickStringsDesc(str) {
    if (!extraFormat) return str;
    let finalStr = str + '';
    const regex = /`([^`]*)`/g;
    const matches = str.matchAll(regex);
    const style = "color:#4c4; font-size:100%; padding:0px 2px;";
    for (const match of matches) {
        //match[1]
        finalStr = finalStr.replace('`' + match[1] + '`', `<span style="${style}">${match[1]}</span>`);
    }
    return finalStr;
}

async function GetFolders() {
    const files = fs.readdirSync(path.join(__dirname, SRC), { withFileTypes: true });
    // Filter the files to only include directories (subdirectories)
    const folders = files.filter(file => file.isDirectory());
    for (const folder of folders)
        LoopFiles(path.join(SRC, folder.name));
}

GetFolders();
