
const fs = require('fs');
const fsp = require('fs/promises');
const { keys } = require('./util');

const baseIDAlways = false;
let isUI = false;

module.exports = {
    GenerateJSFile
};

/** @type {Obj<string>} */
const jsTypes = {
    str: "String",
    num: "Number",
    lst: "Array",
    obj: "Object",
    bin: "Boolean",
    fnc: "Function",
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
    isUI = scope === 'ui';
    if (isUI !== process.argv.includes("--ui")) return;

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
            baseStr += ` * @returns ${makeType(retData.type)}\n`;
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
        let str = "";
        if (!isUI) str += "// ------------- HEADER SECTION ------------- \n\n";
        const fileName = key + ".js";
        const outputFile = folder + fileName;
        const data = obj[key];
        data.name ||= key;

        str += renderInfo(scope, key, data);

        str += extractParams(data, usedIDs);

        if (data.retval) {
            const retData = parseParamType("", data.retval);
            if (retData.desc) retData.type += '-' + retData.desc;
            str += ` * @returns ${makeType(retData.type)}\n`;
        }


        str += '*/\n\n\n';

        // advanced description
        const mdFile = path + "/desc/" + key + ".md";
        if (data.desc && data.desc.includes(".md") && fs.existsSync(mdFile)) {
            if (!isUI) str += "// ------------- LONG DESCRIPTION ------------- \n\n";
            const cmpDesc = fs.readFileSync(mdFile, 'utf8');
            str += `/** @Description\n${cmpDesc.trim()}\n */\n\n`;
        }

        // methods
        if (data.subf) {
            if (!data.abbrev && key != "_tsxdefs")
                console.error(`missing abbrev for ${scope}.${data.name}`);
            if (isUI) { str += renderSubfNew(data, usedIDs); }
            else {
                str += `\n\n// ------------- VISIBLE METHODS & PROPERTIES ------------- \n\n`;
                str += renderSubf(data, usedIDs);
            }
        }

        // samples
        let samples = "";
        const sampFile = path + "/samples/" + key + ".txt";
        if (fs.existsSync(sampFile)) samples += renderSamples(sampFile);

        const pysampFile = path + "/samples/" + key + "-py.txt";
        if (fs.existsSync(pysampFile)) samples += renderSamples(pysampFile, "Python");

        if (samples) {
            if (isUI) str += "/* ## Examples */";
            else str += "\n\n// ------------- SAMPLES ------------- \n\n";
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
    if (!data.isval) {
        const args = data.pNames?.join(", ") || '';
        jdocLine += isUI && args ? `( ${args} )` : `(${args})`;
    }

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
            if (isUI) str += `\n/** @extern ${method}${addId && ' ' + methodData} */`;
            else str += `\n/** @extern ${method}${addId && ' ' + methodData} */\n`;
            usedIDs[method] ||= methodData;
        }

        else if (methodData.isval) {
            const brief = methodData.shortDesc && `\n * @brief ${methodData.shortDesc}`;
            const desc = methodData.desc ? methodData.desc.replace(/ \* /g, " \\* ").replace(/\n/g, "\n * ") : "";
            if (isUI) { str += `/** @prop {${makeType(methodData.retval)}} ${method} ${desc} */\n`; }
            else {
                str += `
/** ### ${method}
 * @prop${brief || ''}
 * ${desc}
 * @returns ${makeType(methodData.retval)}
 */
\n`;
            }
        }

        else {
            let brief = methodData.shortDesc ? `\n * @brief ${methodData.shortDesc || ''}` : '';
            if (!isUI) brief = '###' + brief;
            let args = methodData.pNames ? methodData.pNames.join(", ") : "";
            if (isUI && args) args = ` ${args} `;
            str += `
/** ### ${method} ${brief || ''}
 * ${methodData.desc ? methodData.desc.replace(/ \* /g, " \\* ").replace(/\n/g, "\n * ") : ""}
 * $$ ${data.abbrev}.${method}(${args}) $$
`;


            str += extractParams(methodData, usedIDs);

            if (methodData.retval) {
                const retData = parseParamType("", methodData.retval);
                retData.type += retData.desc ? '-' + retData.desc : '';
                str += ` * @returns ${makeType(retData.type)}\n`;
            }

            str += ` */\n\n`;
            if (isUI) str += '\n';
        }
    }
    return str;
}

/** @type {(data: UndefinedPartial<DSMethod>, usedIDs: Obj<string>) => string} */
function renderSubfNew(data, usedIDs) {
    let propStr = "";
    let inheritStr = "";
    let metStr = "";
    for (const method in data.subf) {
        let methodData = data.subf[method];

        if (typeof methodData === "string") {
            const isDef = data.name === "_tsxdefs";
            if (!isDef && !methodData.startsWith('#'))
                throw Error("Unexpected subf string " + methodData);

            if (/^#[a-z]/i.test(methodData)) methodData = methodData.slice(1);
            if (isDef) methodData = methodData.replace(/\n/g, "\\n").replace(/\t/g, "\\t");
            const addId = baseIDAlways || usedIDs[method] && usedIDs[method] !== methodData || isDef || '';
            inheritStr += `/** @extern ${method}${addId && ' ' + methodData} */\n`;
            usedIDs[method] ||= methodData;
        }

        else if (methodData.isval) {
            const brief = methodData.shortDesc && `\n * @brief ${methodData.shortDesc}`;
            const desc = methodData.desc ? methodData.desc.replace(/ \* /g, " \\* ").replace(/\n/g, "\n * ") : "";
            propStr += ` * @prop {${makeType(methodData.retval)}} ${method} ${desc}\n`;
        }

        else {
            const brief = methodData.shortDesc ? `\n * @brief ${methodData.shortDesc || ''}` : '';
            let args = methodData.pNames ? methodData.pNames.join(", ") : "";
            if (isUI && args) args = ` ${args} `;
            metStr += `
/** ### ${method} ${brief || ''}
 * ${methodData.desc ? methodData.desc.replace(/ \* /g, " \\* ").replace(/\n/g, "\n * ") : ""}
 * $$ ${data.abbrev}.${method}(${args}) $$
`;

            metStr += extractParams(methodData, usedIDs);

            if (methodData.retval) {
                const retData = parseParamType("", methodData.retval);
                retData.type += retData.desc ? '-' + retData.desc : '';
                metStr += ` * @returns ${makeType(retData.type)}\n`;
            }

            metStr += ` */\n`;
            if (isUI) metStr += '\n';
        }
    }

    const objName = data.name?.replace(/^(show|add)/, '');
    if (propStr) {
        propStr = `/** ## Properties
 * Here are the available setters and getters of the ${objName} component.
${propStr} */\n`;
    }

    if (metStr) {
        metStr = `/** ## Methods
 * Here are the methods available on the ${objName} component.\n */\n` + metStr;
    }

    if (inheritStr) metStr = `\n// Inherited props\n${inheritStr}\n` + metStr;
    return propStr + metStr;
}

const split0 = (s = '', t = '') => s.substring(0, s.indexOf(t)) || s;
const split1 = (s = '', t = '') => s.slice(s.indexOf(t)).substring(1);

/** @type {(pName:string, pDef:string|UndefinedPartial<DSMethod>) => {name:string, type:string, desc:string}} */
function parseParamType(pName, pDef) {
    let pDesc = "", pType = "";
    if (typeof pDef === "object" || pName === "callback" && !pDef) {
        if (isUI) {
            pType = "Function";
            pDesc = parseCallbackNew(typeof pDef === "object" ? pDef : {});
        } else {
            pType = "fnc_json";
            pDesc = pDef && JSON.stringify(pDef);
        }
    } else if (typeof pDef === "string") {
        pType = split0(pDef, "-");
        pDesc = split1(pDef, "-");
    }
    const name = pName
        .replace(/^(.*)=(.*)$/, "[$1=$2]")
        .replace(/^(.*)\?$/, "[$1]");
    return { name, type: pType, desc: pDesc.replace(/\n/g, "\\n") };
}

/** @param {DSFunction} type  */
function parseCallbackNew(type) {
    const args = [];
    if (!type.pNames || !type.pTypes) return 'The callback to be called.';

    for (const i in type.pNames) {
        const argTypeStr = type.pTypes[i];
        if (typeof argTypeStr !== "string") {
            console.warn("warning: untested fnc_json in callback");
            args.push(`@arg {fnc_json} ${JSON.stringify(argTypeStr)}`);
            continue;
        }

        const argType = split0(argTypeStr, "-");
        const argDesc = split1(argTypeStr, "-");
        args.push(`@arg {${makeType(argType)}} ${type.pNames[i].trim()} ${argDesc}`);
    }
    return `The callback to be called. ---> ` + args.join(" ");
}

/** @type {(methodData:DSFunction, usedIDs:Obj<string>) => string} */
function extractParams(methodData, usedIDs) {
    if (methodData.params) return ` * @param ${usedIDs[methodData.params] || methodData.params}\n`;

    let str = "";
    if (methodData.pNames && methodData.pTypes) {
        for (let i = 0; i < methodData.pNames.length; i++) {
            const pData = parseParamType(methodData.pNames[i], methodData.pTypes[i]);
            str += ` * @param {${makeType(pData.type)}} ${pData.name} ${pData.desc}\n`;
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
\n/**
@sample ${ext && ext + " "}${name}
${cod}
 */\n\n`;
            if (isUI) str = str.slice(0, -2);
        }
    });
    return str;
}

/** @param {string|DSFunction} [type] */
function makeType(type) {
    if (!isUI) return type;
    if (typeof type != "string") throw Error("Unsupported makeType for callbacks");

    const ta = type.split("-");
    ta[0] = jsTypes[ta[0]] || ta[0];
    return ta.join("-");
}
