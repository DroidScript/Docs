const fs = require('fs');
const fsp = require('fs').promises;

const ver = "v257";
const dir = "json/en/" + ver;
const outDir = "markup/en";

/**
 * @param {String} scope 
 * @param {String} path Path to the scope
 * @param {Obj<DSFunction>} obj json object
 * @param {Obj<DSFunction>} base base object
 * @param {Obj<DSNavs>} navs navs-json object
 */
async function GenerateJSFile(scope, path, obj = {}, base = {}, navs = {}) {
    let folder = path.replace(dir, outDir);
    if (!fs.existsSync(folder)) fs.mkdirSync(folder, { recursive: true });

    for (let key in obj) {
        let str = "// ------------- HEADER SECTION ------------- \n\n";
        const fileName = key + ".js";
        const outputFile = folder + "/" + fileName;
        const data = obj[key];

        let _desc = data.desc || "";
        if (!_desc.includes(".md")) _desc = _desc.replace(/\n/g, "\n * ")
        else _desc = "";

        let info = "";
        if (data.abbrev) info += ` * @abbrev ${data.abbrev}\n`;
        if (data.shortDesc) info += ` * @brief ${data.shortDesc}`;

        str += `
/** # ${key} #
${info}
 * ${_desc}
 * $$ ${data.abbrev ? data.abbrev + " = " : ""}${scope}.${key}(${(data.pNames && data.pNames.length) ? data.pNames.join(", ") : ""}) $$ \n`;

        if (data.pNames && data.pTypes && data.pNames.length) {
            for (let i = 0; i < data.pNames.length; i++) {
                let pDesc = "", pType = "", pDef = data.pTypes[i];
                if (typeof (pDef) == "string") {
                    pType = pDef.split("-")[0];
                    pDesc = pDef.split("-")[1] || "";
                    str += ` * @param {${pType}} ${data.pNames[i]} ${pDesc}\n`
                }
            }
        }

        if (data.retval) {
            str += ` * @returns ${data.retval}\n`;
        }

        str += '*/\n\n\n';

        // advanced description
        let mdFile = path + "/desc/" + key + ".md";
        if (data.desc && data.desc.includes(".md") && fs.existsSync(mdFile)) {
            str += "// ------------- LONG DESCRIPTION ------------- \n\n"
            let cmpDesc = fs.readFileSync(mdFile);
            str += `/** @Description\n${cmpDesc}\n */\n\n`;
        }


        // samples
        let sampFile = path + "/samples/" + key + ".txt";
        if (fs.existsSync(sampFile)) {
            str += "\n\n// ------------- SAMPLES ------------- \n\n";
            let cmpSamp = fs.readFileSync(sampFile);
            str += `/** @Sample\n${cmpSamp}\n */\n\n`;
        }

        // methods
        if (data.subf) {
            str += `\n\n// ------------- VISIBLE METHODS & PROPERTIES ------------- \n\n`
            for (let method in data.subf) {
                let methodData = data.subf[method];

                if (typeof methodData == "object" && methodData.isval) {
                    str += `
/** ### ${method}
 * @prop
 * ${methodData.desc ? methodData.desc.replace(/\n/g, " * ").replace(/\*\*/g, "`") : ""}
 * @returns ${methodData.retval}
 */

                    `;
                }

                else if (typeof methodData == "string") {
                    if (!methodData.startsWith("#")) throw "Unexpected subf string " + methodData;
                    str += `\n/** @extern ${method} */\n`;
                }

                else {

                    str += `
/** ### ${method} ###
 * ${methodData.desc ? methodData.desc.replace(/\n/g, " * ").replace(/\*\*/g, "`") : ""}
 * $$ ${data.abbrev}.${method}(${(methodData.pNames && methodData.pNames.length) ? methodData.pNames.join(", ") : ""}) $$\n`;

                    if (methodData.pNames && methodData.pTypes && methodData.pNames.length) {
                        for (let i = 0; i < methodData.pNames.length; i++) {
                            let pDesc = "", pType = "", pDef = methodData.pTypes[i];
                            if (typeof pDef == "string") {
                                pType = pDef.split("-")[0];
                                pDesc = pDef.split("-")[1] || "";
                            } else if (typeof pDef == "object") {
                                pType = "fnc_json";
                                pDesc = JSON.stringify(pDef);
                            }
                            str += ` * @param {${pType}} ${methodData.pNames[i]} ${pDesc}\n`
                        }
                    }

                    if (methodData.retval) {
                        str += ` * @returns ${methodData.retval}\n`
                    }
                    str += ` */\n\n`
                }
            }
        }

        await fsp.writeFile(outputFile, str);
    }

    let baseStr = "";
    for (let key in base) {

        let methodData = base[key];
        let method = methodData.name;

        baseStr += `
/** ### ${method}
 * ${methodData.desc ? methodData.desc.replace(/\n/g, " * ").replace(/\*\*/g, "`") : ""}
 * $$ obj.${method}(${(methodData.pNames && methodData.pNames.length) ? methodData.pNames.join(", ") : ""}) $$\n`;

        if (methodData.pNames && methodData.pTypes && methodData.pNames.length) {
            for (let i = 0; i < methodData.pNames.length; i++) {
                let pDesc = "", pType = "", pDef = methodData.pTypes[i];
                if (typeof pDef == "string") {
                    pType = pDef.split("-")[0];
                    pDesc = pDef.split("-")[1] || "";
                } else if (typeof pDef == "object") {
                    pType = "fnc_json";
                    pDesc = JSON.stringify(pDef);
                }
                baseStr += ` * @param {${pType}} ${methodData.pNames[i]} ${pDesc}\n`
            }
        }

        if (methodData.retval) {
            baseStr += ` * @returns ${methodData.retval}\n`
        }
        baseStr += ` */\n\n`
    }

    if (baseStr) {
        let _baseFile = "_base.js";
        let _baseOutFile = folder + "/" + _baseFile;
        await fs.writeFileSync(_baseOutFile, baseStr);
    }
}

async function GetFolders(folder = "") {
    const folders = await fsp.readdir(folder);
    if (!folders.length) return;

    for (let i = 0; i < folders.length; i++) {
        let path = folder + "/" + folders[i];
        let desc = path + "/desc"
        let samples = path + "/samples"
        let base = path + "/base.json"
        let navs = path + "/navs.json"
        let obj = path + "/obj.json"

        if (fs.existsSync(obj)) {
            const filePaths = [obj, base, navs];
            try {
                const fileDataPromises = filePaths.map((filePath) => fsp.readFile(filePath, 'utf-8'));
                const [objData, baseData, navsData] = await Promise.all(fileDataPromises);
                let objJson = JSON.parse(objData);
                let baseJson = JSON.parse(baseData);
                let navsJson = JSON.parse(navsData);
                await GenerateJSFile(folders[i], path, objJson, baseJson, navsJson);
            } catch (err) {
                console.error(err);
            }
        }
    }
}
GetFolders(dir);
