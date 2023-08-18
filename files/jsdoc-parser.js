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
    unknown: "?"
}

// Replace backticks with forward slashes around text inside them
const pattern = /`([^`]*)`/g; // Matches any text between backticks
const replacement = '“$1”'; // Replaces backticks with slash before and after the matched text

/** @param {string} SOURCE_DIR */
function LoopFiles(SOURCE_DIR) {
    // console.log("<---- Generating json for "+SOURCE_DIR+" ----->";
    if (!fs.existsSync(SOURCE_DIR))  return console.log(SOURCE_DIR + " does not exist!");

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

    const baseFile = path.join(SOURCE_DIR, "_base.js");
    /** @type {Obj<DSFunction>} */
    let baseJson = {};
    if (fs.existsSync(baseFile)) baseJson = getBaseMethods(baseFile);

    fs.readdir(SOURCE_DIR, async (err, files) => {

        if (err) return console.log("Error reading " + SOURCE_DIR, err);

        /** @type {Obj<DSFunction>} */
        const objJson = {}

        for (let i = 0; i < files.length; i++) {
            const file = files[i]
            const folderPath = path.join(SOURCE_DIR, file);
            const stats = fs.statSync(folderPath)
            if (stats.isFile()) {
                if (file.endsWith(".js")) {
                    const data = renderFile(folderPath, objJson, baseJson);

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

        let objJsonFile = path.join(outputFolder, "obj.json");
        fs.writeFileSync(objJsonFile, tos(objJson));

        // copy navs.json file for the namespace
        if (fs.existsSync(navsJson))
            fs.copyFileSync(navsJson, path.join(outputFolder, "navs.json"));
    });
}

// converts a variable to indented string
// supports Boolean, Number, String, Array and Object
/**
 * @param {any} o
 * @param {string} [intd]
 * @param {boolean} [m]
 * @returns {string}
 */
function tos(o, intd, m) {
    if (intd == undefined) intd = "";
    if (m == undefined) m = true;
    var s = m ? intd : "";

    if (o === null || o === undefined) return "null";
    else switch (o.constructor.name) {
        case "String": case "Number": case "Boolean":
            return s + JSON.stringify(o);
        case "Array":
            s += "[";
            for (var i = 0; i < o.length; i++) {
                s += tos(o[i], intd, false);
                if (i < o.length - 1) s += ", ";
            }
            return s + "]";
        default:
            var okeys = Object.keys(o);
            switch (okeys.length) {
                case 0: return "{}";
                case 1: return s += `{ "${okeys[0]}": ${tos(o[okeys[0]], "", false)} }`;
                default:
                    s += "{\n";
                    for (var i = 0; i < okeys.length; i++) {
                        if (o[okeys[i]] === undefined) continue;
                        s += intd + `\t"${okeys[i]}": ${tos(o[okeys[i]], intd + "\t", false)}`;
                        if (i < okeys.length - 1) s += ",\n";
                    }
                    return s + `\n${intd}}`;
            }
    }
}

/**
 * @param {string} filePath
 * @param {Obj<DSFunction>} objJson
 * @param {Obj<DSFunction>} baseJson
 */
function renderFile(filePath, objJson, baseJson) {

    const file = path.basename(filePath);

    const strComments = getComment.file(filePath, {});

    let _fname = file.slice(0, -3);

    const objData = RenderComments(objJson, strComments, true, _fname, baseJson);
    /** @type {typeof objData} */
    const data = JSON.parse(JSON.stringify(objData));

    // description
    let desc = objJson[data.name].desc || ''
    objJson[data.name].desc = "#" + data.name + ".md"

    let popups = ""
    const props = data.props

    // bubble sort TODO: use array.sort()
    for (let o = 0; o < props.length - 1; o++) {
        for (let p = o + 1; p < props.length; p++) {
            if (props[p][1] < props[o][1]) {
                let tmp = props[p]
                props[p] = props[o]
                props[o] = tmp
            }
        }
    }

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
    abbrev: undefined,
    desc: "",
    pNames: undefined,
    pTypes: undefined,
    retval: undefined,
    shortDesc: undefined,
});

/**
 * @param {Obj<DSFunction>} objJson
 * @param {import('esprima').Token[]} tokens
 * @param {boolean} cmp
 * @param {string} [name]
 * @param {Obj<DSFunction>} baseJson
 */
function RenderComments(objJson, tokens, cmp, name = "", baseJson = {}) {
    objJson[name] = {};
    let func = objJson[name];

    let samples = "";
    /** @type {string[][]} */
    let props = [];
    /** @type {Obj<DSFunction>} */
    let json = {};
    tokens.forEach((c, i) => {
        if (c.type == "BlockComment") {
            const DescriptionPattern = /[#@]\s*[Dd]escription/;
            const SamplePattern = /[#@]\s*[Ss]ample/;
            const ExternPattern = /[#@]\s*[Ee]xtern/;

            if (c.value.toLowerCase().includes("#example")) {
                let _x = c.value.trim().split("\n")
                samples += "\n\n"
                samples += `<sample${_x[0].split("#Example")[1].trim().replace("-", "")}>\n`
                samples += _x.splice(1, _x.length - 1).join("\n")
                samples += "\n</sample>"
            }
            else if (c.value.includes('```')) { }

            // Description.md
            else if (DescriptionPattern.test(c.value)) {
                func.desc += c.value.substring(c.value.indexOf("\n"));
            }

            // Sample.txt
            else if (SamplePattern.test(c.value)) {
                let _samp = c.value.slice(c.value.indexOf("\n") + 1)
                samples += `\n\n${_samp}\n\n`
            }

            // Base method
            else if (ExternPattern.test(c.value)) {
                const r = /@extern([\s\S]*)/;
                const _m = r.exec(c.value);
                if (_m) {
                    const _n = _m[1].trim();
                    if (_n && baseJson[_n]) {
                        json[_n] = baseJson[_n];
                    }
                }
            }

            else {
                let isCA = false, afterCmpParam = false;
                let met = newDSFunc();
                let isval = false;

                for (let line of c.value.split(/\r?\n/)) {
                    line = line.trim();
                    const obj = isCA ? func : met;

                    if (line.includes("###")) {
                        const method = line.replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
                        json[method] = met = newDSFunc();
                        if (c.value.includes("@prop")) isval = true;
                    }

                    else if (line.includes("##")) {
                        // met += line;
                    }

                    // isCA = false
                    else if (line.includes("@prop")) {
                        if (!isval)
                            props.push(extractParamDef(line));
                    }
                    else if (line.includes("@brief")) obj.shortDesc = line.substring(line.indexOf("@brief") + 6).trim();

                    else if (line.includes("@param")) {
                        let _l = line.split("@param")[1].trim();
                        let p = extractParams(_l);
                        let isFunc = false, _d;
                        p[2] = p[2].replace(/\\n/g, '\n') //.replace(pattern, replacement);
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
                            let k = p[0].split(/[_-]/)[0];
                            if (types[p[0]]) _d = types[p[0]];
                            else if (typx.includes(k)) _d = p[0];
                            else _d = "obj"
                            if (p[2]) {
                                p[2] = extractBacktickStrings(p[2]);
                                _d += "-" + p[2];
                            }
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
                        let f = line.split("returns")[1].trim(), g = f.split(/[_\s-]/)[0], v;
                        if (types[g]) v = types[g];
                        else if (typx.includes(g)) v = f;
                        else console.log("unknown type " + g), v = "obj-" + f;
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
                        obj.desc += line.trim().replace(/^\* */, '');
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
        objJson: func,
        props
    }
}

/** @param {string} str */
function extractParamDef(str) {
    let s = str.split("}").map((/** @type {string} */ l) => { return l.trim() })
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
    line.map(function (/** @type {string} */ l) {
        if (!l.trim()) return;
        let r = extractParamDef(l);
        pNames.push(r[1]);
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
    let finalStr = str + '';
    const regex = /`([^`]*)`/g;
    const matches = str.matchAll(regex);
    const style = "color:#fb8c00; font-size:100%; padding:0px 2px;";
    for (const match of matches) {
        //match[1]
        finalStr = finalStr.replace('`' + match[1] + '`', `<span style="${style}">${match[1]}</span>`);
    }
    if (extraFormat) finalStr = finalStr.replace(/,/gm, "&#44;");
    return finalStr;
}

/** @param {string} str */
function extractBacktickStringsDesc(str) {
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

fs.readdir(SRC, { withFileTypes: true }, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    // Filter the files to only include directories (subdirectories)
    const folders = files.filter(file => file.isDirectory());
    for (const folder of folders)
        LoopFiles(path.join(SRC, folder.name));
});