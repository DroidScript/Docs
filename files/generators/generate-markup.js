
const fs = require('fs');
const fsp = require('fs/promises');

const baseIDAlways = false;

module.exports = {
    GenerateJSFile
};

/**
 * @param {String} dir
 * @param {String} outDir
 * @param {String} scope
 * @param {String} path Path to the scope
 * @param {Obj<DSFunction>} obj json object
 * @param {Obj<DSFunction>} base base object
 * @param {Obj<DSNavs>} _navs navs-json object
 */
async function GenerateJSFile(dir, outDir, scope, path, obj, base = {}, _navs = {}) {
    const folder = path.replace(dir, outDir);
    if (!fs.existsSync(folder)) fs.mkdirSync(folder, { recursive: true });
    if (fs.existsSync(path + 'navs.json')) fs.copyFileSync(path + 'navs.json', outDir + scope + '-navs.json');

    /** @type {Obj<string>} */
    const usedIDs = {};

    let baseStr = "";
    for (const key in base) {
        const methodData = base[key];
        const method = methodData.name || key;
        const addId = baseIDAlways || usedIDs[method] && usedIDs[method] !== key;
        const _desc = methodData.desc ? methodData.desc.replace(/ \* /g, " \\* ").replace(/\n/g, "\n * ") : "";
        usedIDs[method] ||= key;

        let info = "";
        // if (data.name && data.name !== key) info += ` * @name ${data.name}\n`;
        if (method !== key || addId) info += ` * @name ${method || key}\n`;
        if (methodData.isval) info += ` * @prop\n`;
        if (methodData.abbrev) info += ` * @abbrev ${methodData.abbrev}\n`;
        if (methodData.shortDesc) info += ` * @brief ${methodData.shortDesc}\n`;

        baseStr += `
/** ### ${addId ? key.replace('#', '') : method}
${info} * ${_desc}
`;

        baseStr += extractParams(methodData, usedIDs);

        if (methodData.retval) {
            const retData = parseParamType("", methodData.retval);
            if (retData.desc) retData.type += '-' + retData.desc;
            baseStr += ` * @returns ${retData.type}\n`;
        }

        baseStr += ` */\n\n`;
    }

    if (baseStr) {
        baseStr = baseStr.replace(/ +(\n|$)/g, "$1").trim() + "\n";
        const _baseFile = "_base.js";
        const _baseOutFile = folder.slice(0, -1) + _baseFile;
        fs.writeFileSync(_baseOutFile, baseStr);
    }

    for (const key in obj) {
        let str = "// ------------- HEADER SECTION ------------- \n\n";
        const fileName = key + ".js";
        const outputFile = folder + fileName;
        const data = obj[key];
        data.name ||= key;

        str += renderInfo(scope, key, data);

        str += extractParams(data, usedIDs);

        if (data.retval) {
            const retData = parseParamType("", data.retval);
            if (retData.desc) retData.type += '-' + retData.desc;
            str += ` * @returns ${retData.type}\n`;
        }


        str += '*/\n\n\n';

        // advanced description
        const mdFile = path + "/desc/" + key + ".md";
        if (data.desc && data.desc.includes(".md") && fs.existsSync(mdFile)) {
            str += "// ------------- LONG DESCRIPTION ------------- \n\n";
            const cmpDesc = fs.readFileSync(mdFile, 'utf8');
            str += `/** @Description\n${cmpDesc.trim()}\n */\n\n`;
        }

        // methods
        if (data.subf) {
            str += `\n\n// ------------- VISIBLE METHODS & PROPERTIES ------------- \n\n`;
            str += renderSubf(data, usedIDs);
        }

        // samples
        let samples = "";
        const sampFile = path + "/samples/" + key + ".txt";
        if (fs.existsSync(sampFile)) samples += renderSamples(sampFile);

        const pysampFile = path + "/samples/" + key + "-py.txt";
        if (fs.existsSync(pysampFile)) samples += renderSamples(pysampFile, "Python");

        if (samples) {
            str += "\n\n// ------------- SAMPLES ------------- \n\n";
            str += samples;
        }

        str = str.replace(/ +(\n|$)/g, "$1").trim() + "\n";
        await fsp.writeFile(outputFile, str);
    }
}

/** @type {(scope:string, name: string, data: UndefinedPartial<DSMethod>) => string} */
function renderInfo(scope, name, data) {
    let _desc = data.desc || "";
    if (!/^#.*.md$/.test(_desc)) _desc = _desc.replace(/ \* /g, " \\* ").replace(/\n/g, "\n * ").replace(/\*\//g, '*\\/');
    else _desc = "";

    let info = "";
    // if (data.name && data.name !== key) info += ` * @name ${data.name}\n`;
    if (data.name && data.name !== name) info += ` * @name ${data.name}\n`;
    if (data.isval) info += ` * @prop\n`;
    if (data.abbrev) info += ` * @abbrev ${data.abbrev}\n`;
    if (data.shortDesc) info += ` * @brief ${data.shortDesc}\n`;

    let jdocLine = "";
    if (data.abbrev && data.abbrev !== data.name) jdocLine += data.abbrev + " = ";
    if (scope !== "global" ? scope + '.' : '') jdocLine += scope + '.';
    jdocLine += data.name || name;
    if (!data.isval) jdocLine += `(${data.pNames?.join(", ") || ''})`;

    return `
/** # ${name} #
${info} * ${_desc}
 * $$ ${jdocLine} $$ 
`;
}

/** @type {(data: UndefinedPartial<DSMethod>, usedIDs: Obj<string>) => string} */
function renderSubf(data, usedIDs) {
    let str = "";
    for (const method in data.subf) {
        let methodData = data.subf[method];

        if (typeof methodData === "string") {
            const isDef = data.name === "_tsxdefs";
            if (!isDef && !methodData.startsWith('#'))
                throw Error("Unexpected subf string " + methodData);

            if (/^#[a-z]/i.test(methodData)) methodData = methodData.slice(1);
            if (isDef) methodData = methodData.replace(/\n/g, "\\n").replace(/\t/g, "\\t");
            const addId = baseIDAlways || usedIDs[method] && usedIDs[method] !== methodData || isDef || '';
            str += `\n/** @extern ${method}${addId && ' ' + methodData} */\n`;
            usedIDs[method] ||= methodData;
        }

        else if (methodData.isval) {
            const brief = methodData.shortDesc && `\n * @brief ${methodData.shortDesc}`;
            str += `
/** ### ${method}
 * @prop${brief || ''}
 * ${methodData.desc ? methodData.desc.replace(/ \* /g, " \\* ").replace(/\n/g, "\n * ") : ""}
 * @returns ${methodData.retval}
 */
\n                    `;
        }

        else {
            const brief = methodData.shortDesc && `\n * @brief ${methodData.shortDesc || ''}`;
            str += `
/** ### ${method} ###${brief || ''}
 * ${methodData.desc ? methodData.desc.replace(/ \* /g, " \\* ").replace(/\n/g, "\n * ") : ""}
 * $$ ${data.abbrev}.${method}(${methodData.pNames ? methodData.pNames.join(", ") : ""}) $$
`;

            str += extractParams(methodData, usedIDs);

            if (methodData.retval) {
                const retData = parseParamType("", methodData.retval);
                retData.type += retData.desc ? '-' + retData.desc : '';
                str += ` * @returns ${retData.type}\n`;
            }

            str += ` */\n\n`;
        }
    }
    return str;
}

const split0 = (s = '', t = '') => s.substring(0, s.indexOf(t)) || s;
const split1 = (s = '', t = '') => s.slice(s.indexOf(t)).substring(1);

/** @type {(pName:string, pDef:string|UndefinedPartial<DSMethod>) => {name:string, type:string, desc:string}} */
function parseParamType(pName, pDef) {
    let pDesc = "", pType = "";
    if (typeof pDef === "object" || pName === "callback" && !pDef) {
        pType = "fnc_json";
        pDesc = pDef && JSON.stringify(pDef);
    } else if (typeof pDef === "string") {
        pType = split0(pDef, "-");
        pDesc = split1(pDef, "-");
    }
    const name = pName
        .replace(/^(.*)=(.*)$/, "[$1=$2]")
        .replace(/^(.*)\?$/, "[$1]");
    return { name, type: pType, desc: pDesc.replace(/\n/g, "\\n") };
}

/** @type {(methodData:DSFunction, usedIDs:Obj<string>) => string} */
function extractParams(methodData, usedIDs) {
    if (methodData.params) return ` * @param ${usedIDs[methodData.params] || methodData.params}\n`;

    let str = "";
    if (methodData.pNames && methodData.pTypes) {
        for (let i = 0; i < methodData.pNames.length; i++) {
            const pData = parseParamType(methodData.pNames[i], methodData.pTypes[i]);
            str += ` * @param {${pData.type}} ${pData.name} ${pData.desc}\n`;
        }
    }
    return str;
}

/** @param {string} file */
function renderSamples(file, ext = "") {
    const raw = fs.readFileSync(file, "utf8").trim();
    if (!raw) return "";

    let str = "";
    const strArr = raw.split(/<\/sample( [^>]+)?>/);
    strArr.forEach(samp => {
        if (samp && samp.trim()) {
            const name = samp.substring(samp.indexOf("<sample") + 7, samp.indexOf(">")).trim();
            let cod = samp.substring(samp.indexOf(">") + 1).trim();
            cod = cod.replace(/\*\//g, "*_");
            str += `
    
/**
@sample ${ext && ext + " "}${name}
${cod}
 */
    
            `;
        }
    });
    return str;
}
