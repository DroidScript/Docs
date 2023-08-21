#!/usr/bin/node

const fs = require('fs');
const fsp = require('fs').promises;

const ver = "v257";
const dir = "json/en/" + ver;
const outDir = "markup/en/";

/**
 * @param {String} scope 
 * @param {String} path Path to the scope
 * @param {Obj<DSFunction>} obj json object
 * @param {Obj<DSFunction>} base base object
 * @param {Obj<DSNavs>} navs navs-json object
 */
async function GenerateJSFile(scope, path, obj, base = {}, navs = {}) {
    let folder = path.replace(dir, outDir);
    if (!fs.existsSync(folder)) fs.mkdirSync(folder, { recursive: true });
    if (fs.existsSync(path + 'navs.json')) fs.copyFileSync(path + 'navs.json', outDir + scope + '-navs.json');

    /** @type {Obj<string>} */
    const usedIDs = {}

    for (let key in obj) {
        let str = "// ------------- HEADER SECTION ------------- \n\n";
        const fileName = key + ".js";
        const outputFile = folder + fileName;
        const data = obj[key];

        let _desc = data.desc || "";
        if (!/^#.*.md$/.test(_desc)) _desc = _desc.replace(/\n/g, "\n * ").replace(/\*\//g, '*\\/')
        else _desc = "";

        let info = "";
        // if (data.name && data.name != key) info += ` * @name ${data.name}\n`;
        if (data.isval) info += ` * @prop\n`;
        if (data.abbrev) info += ` * @abbrev ${data.abbrev}\n`;
        if (data.shortDesc) info += ` * @brief ${data.shortDesc}`;


        str += `
/** # ${key} #
${info}
 * ${_desc}
 * $$ ${data.abbrev ? data.abbrev + " = " : ""}${scope}.${key}(${data.pNames ? data.pNames.join(", ") : ""}) $$ 
`;

        str += extractParams(data);

        if (data.retval) {
            str += ` * @returns ${data.retval}\n`;
        }

        str += '*/\n\n\n';

        // advanced description
        let mdFile = path + "/desc/" + key + ".md";
        if (data.desc && data.desc.includes(".md") && fs.existsSync(mdFile)) {
            str += "// ------------- LONG DESCRIPTION ------------- \n\n"
            let cmpDesc = fs.readFileSync(mdFile, 'utf8');
            str += `/** @Description\n${cmpDesc.trim()}\n */\n\n`;
        }

        // methods
        if (data.subf) {
            str += `\n\n// ------------- VISIBLE METHODS & PROPERTIES ------------- \n\n`
            for (let method in data.subf) {
                let methodData = data.subf[method];

                if (typeof methodData == "string") {
                    if (!methodData.startsWith("#")) throw "Unexpected subf string " + methodData;
                    const addId = usedIDs[method] && usedIDs[method] != methodData || '';
                    str += `\n/** @extern ${method}${addId && ' ' + methodData} */\n`;
                    usedIDs[method] ||= methodData;
                }

                else if (methodData.isval) {
                    const brief = methodData.shortDesc && `\n * @brief ${methodData.shortDesc}`;
                    str += `
/** ### ${method}
 * @prop${brief || ''}
 * ${methodData.desc ? methodData.desc.replace(/\n/g, " * ").replace(/\*\*/g, "`") : ""}
 * @returns ${methodData.retval}
 */
\n                    `;
                }

                else {
                    const brief = methodData.shortDesc && `\n * @brief ${methodData.shortDesc || ''}`;
                    str += `
/** ### ${method} ###${brief || ''}
 * ${methodData.desc ? methodData.desc.replace(/\n/g, " * ").replace(/\*\*/g, "`") : ""}
 * $$ ${data.abbrev}.${method}(${methodData.pNames ? methodData.pNames.join(", ") : ""}) $$
`;

                    str += extractParams(methodData);

                    if (methodData.retval) {
                        str += ` * @returns ${methodData.retval}\n`
                    }
                    str += ` */\n\n`
                }
            }
        }

        // samples

        // samples
        let sampFile = path + "/samples/" + key + ".txt";
        if (fs.existsSync(sampFile)) {
            str += "\n\n// ------------- SAMPLES ------------- \n\n";
            let cmpSamp = fs.readFileSync(sampFile, "utf8");
            // str += `/** @Sample\n${cmpSamp}\n */\n\n`;
            str += renderSamples(cmpSamp);
        }

        await fsp.writeFile(outputFile, str);
    }

    let baseStr = "";
    for (let key in base) {

        let methodData = base[key];
        let method = methodData.name || '';
        const addId = usedIDs[method] && usedIDs[method] != key;

        baseStr += `
/** ### ${addId ? key.replace('#', '') : method}
 * ${methodData.desc ? methodData.desc.replace(/\n/g, " * ").replace(/\*\*/g, "`") : ""}
 * $$ obj.${method}(${methodData.pNames ? methodData.pNames.join(", ") : ""}) $$
`;

        baseStr += extractParams(methodData);

        if (methodData.retval) {
            baseStr += ` * @returns ${methodData.retval}\n`
        }
        baseStr += ` */\n\n`
    }

    if (baseStr) {
        let _baseFile = "_base.js";
        let _baseOutFile = folder.slice(0, -1) + _baseFile;
        fs.writeFileSync(_baseOutFile, baseStr);
    }
}

const split0 = (s = '', t = '') => s.substring(0, s.indexOf(t)) || s;
const split1 = (s = '', t = '') => s.slice(s.indexOf(t)).substring(1);

/** @param {DSFunction} methodData */
function extractParams(methodData) {
    let str = ""
    if (methodData.pNames && methodData.pTypes) {
        for (let i = 0; i < methodData.pNames.length; i++) {
            let pDesc = "", pType = "", pDef = methodData.pTypes[i];
            if (typeof pDef == "string") {
                pType = split0(pDef, "-");
                pDesc = split1(pDef, "-");
            } else if (typeof pDef == "object") {
                pType = "fnc_json";
                pDesc = JSON.stringify(pDef);
            }
            str += ` * @param {${pType}} ${methodData.pNames[i]} ${pDesc}\n`
        }
    }
    return str;
}

/** @param {string} raw */
function renderSamples(raw) {
    if (!raw) return;
    let str = "";
    const strArr = raw.split(/<\/sample( [^>]+)?>/);
    strArr.forEach(samp => {
        if (samp && samp.trim()) {
            let name = samp.substring(samp.indexOf("<sample") + 7, samp.indexOf(">")).trim();
            let cod = samp.substring(samp.indexOf(">") + 1).trim();
            cod = cod.replace(/\*\//g, "*_");
            str += `
    
/**
@sample ${name}
${cod}
 */
    
            `;
        }
    });
    return str;
}

async function GetFolders(folder = "") {
    const folders = await fsp.readdir(folder, { withFileTypes: true });
    for (const fld of folders.filter(d => d.isDirectory())) {
        const path = folder + "/" + fld.name + "/";
        const files = ["obj.json", "base.json", "navs.json"];
        const descPath = path + "desc/";
        try {
            const fileDataPromises = files.map((f) => fsp.readFile(path + f, 'utf8').catch(e => '{}'));
            const fileData = await Promise.all(fileDataPromises);
            const [obj, base, navs] = fileData.map(data => JSON.parse(data));

            if (!fs.existsSync(path + files[0]) && fs.existsSync(descPath)) {
                const descFiles = await fsp.readdir(descPath);
                for (const descFile of descFiles) {
                    obj[descFile.replace('.md', '')] = { desc: '#' + descFile };
                }
            }
            await GenerateJSFile(fld.name, path, obj, base, navs);
        } catch (err) {
            console.error(err.message);
        }
    }
}
GetFolders(dir);
