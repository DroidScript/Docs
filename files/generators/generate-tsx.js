const conf = require("../conf.json");
const { app } = require("./app");
const { keys, regConPrefix, split1, special, replW, Throw, unwrapDesc, fillMissingFuncProps, unwrapBaseFunc, getDstDir, D_LANG } = require("./util");

module.exports = { generateTsx };

/** @type {Obj<string>} */
const tsxTypes = {
    str: "string",
    // eslint-disable-next-line camelcase
    str_com: "string|string[]",
    num: "number",
    obj: "object",
    bin: "boolean",
    fnc: "Function",
    lst: "any[]",
    // eslint-disable-next-line camelcase
    lst_num: "number[]",
    all: "any",
    dso: "AppObject",
    gvo: "GameObject",
    glo: "GLViewObject",
    // eslint-disable-next-line camelcase
    glo_img: "{ width:num_int, height:num_int }",
    uio: "UIObject",
    muo: "MuiObject"
};

/** @type {Obj<string>} */
const objPfx = { app: "Ds", dso: "Ds", ui: "UI", uio: "UI", MUI: "Mui", muo: "Mui", gfx: "Gfx", gvo: "Gfx" };

/** @type {{tname: Obj<string>, tdesc: Obj<string>}} */
const { tname: tName, tdesc: tDesc } = conf;

/**
 * @param {DSInput} inpt
 * @param {GenState} state
 */
function generateTsx(inpt, state) {
    state.curDoc = getDstDir(D_LANG, state, state.curScope + '.d.ts');
    console.log(`generating ${state.lang}.${state.curScope}.tsx`);

    const defs = generateDefinitionFile(state.curScope, inpt, state);
    app.WriteFile(state.curDoc, defs);
}

/** @type {(scopeName: string, inpt: DSInput, state: GenState) => string} */
function generateDefinitionFile(scopeName, inpt, state) {

    if (scopeName === "global") {
        const typeDecls = Object.entries({ ...conf.tname, ...conf.tdesc })
            .filter(([name, _]) => !name.endsWith('o') && name.match(/^[a-z]/i))
            .map(([name, desc]) => `/** ${desc} */\ndeclare type ${name} = ${makeType(inpt, state, name, true).sub};`);
        return typeDecls.join("\n");
    }

    /** @type {Obj<string[]>} */
    const objs = {};

    let definition = "";
    let classDefinition = "";
    for (const funcName in inpt.scope) {
        const func = inpt.scope[funcName];
        if (typeof func !== 'object' || funcName === "_tsxdefs") continue;

        const defs = processFunction(inpt, state, funcName, scopeName, func, "\t");

        if (defs.className && func.retval) {
            const typeKey = func.retval.split('-', 1)[0];
            if (!objs[typeKey]) objs[typeKey] = [];
            objs[typeKey].push(defs.className);
        }

        definition += defs.func;
        classDefinition += defs.class;

        for (const obj in defs.extra) {
            classDefinition += `declare class ${obj} {\n`;
            classDefinition += defs.extra[obj];
            classDefinition += `}\n`;
        }
    }

    scopeName = `Ds${scopeName[0].toUpperCase() + scopeName.slice(1)}`;
    if (scopeName === "DsUi") scopeName = "UI";

    /** @type {string[]} */
    const typeDecls = [];
    for (const o in objs) {
        typeDecls.unshift(`/** ${tName[o]} */\ndeclare type ${o} = ${makeType(inpt, state, o, true).sub};`);
        typeDecls.unshift(`declare type ${tsxTypes[o]} = ${objs[o].join(' | ')};`);
    }

    // eslint-disable-next-line prefer-const
    for (let [name, type] of Object.entries(inpt.scope._tsxdefs?.subf || {})) {
        if (typeof type !== "string") continue;
        if (type.startsWith("r/")) {
            // eslint-disable-next-line security/detect-non-literal-regexp
            const reg = new RegExp(`^${type.slice(2, -1)}$`);
            type = keys(inpt.scope)
                .filter(n => reg.test(n))
                .map(n => objPfx[state.curScope] + n.replace(regConPrefix, '')).join(" | ");
        }
        typeDecls.unshift(`declare type ${name} = ${type};`);
    }

    typeDecls.unshift(`declare var ${state.curScope}: ${scopeName};`);
    return `${typeDecls.join("\n")}\n\ndeclare class ${scopeName} {\n${definition}\n}\n${classDefinition}\n`;
}

/**
 * @param {DSInput} inpt
 * @param {GenState} state
 * @param {string | UndefinedPartial<DSMethod>} stypes
 */
function makeType(inpt, state, stypes, tsx = false) {
    if (typeof stypes === "object")
        return { main: "fnc", sub: processFunction(inpt, state, "callback", "cb", stypes, "\t", true).func, desc: "" };

    const types1 = stypes.split("||").map(stype => {
        const [sub, desc] = split1(stype, "-");
        const [psub, pdesc] = sub.split(':');
        return {
            main: stype.slice(0, 3),
            sub: psub || sub,
            desc: desc || pdesc || '',
            pdesc
        };
    });

    const str = types1.filter(t => t.main).map(
        function formatTypeDecl(type) {
            if (tsx) type.sub = tsxTypes[type.sub] || tsxTypes[type.main] || type.sub;
            else type.desc = type.desc.replace(/@.*\//, '');
            switch (type.main) {
                case "?": type.main = type.sub = "all";
                // eslint-disable-next-line no-fallthrough
                case "all":
                case "fnc": return type;
                case "num":
                case "str":
                case "bin": {
                    const types = replaceTsxTypes(inpt, state, type.desc, type.main);
                    if (!types.string) return type;

                    let tdesc = types.string
                        .replace(/([^\\]|^)\\(.)/g, (m, e, /** @type {string} */ c) =>
                            `${e || ''}§${(special[c] || c).charCodeAt(0)}§`)
                        .replace(/§(\d+?)§/g, (m, /** @type {number} */ c) =>
                            String.fromCharCode(Number(c)))
                        .split(/[,|]/);

                    if (types.string.match(/ |\.\.|&lt;|&gt;|<|>|:/)) {
                        if (types.descs) types.descs = "\\" + types.descs;
                        type.desc = tdesc.map(c => '`' + decodeHtml(c) + '`').join(", ") + types.descs;
                        tdesc = [type.sub];
                        return type;
                    }

                    if (type.main === "str") tdesc = tdesc.map(s => `"${s}"`);
                    if (tdesc.length <= 1 && !/^[a-z0-9"/]+$/i.test(tdesc[0]))
                        return type;

                    type.desc = types.descs && "<br>" + types.descs;
                    if (type.sub === "str_com")
                        type.sub = `string | (${tdesc.join("|")})[]`;
                    else
                        type.sub = tdesc.join("|");

                    if (type.pdesc) {
                        if (type.sub === type.pdesc) type.sub = type.main;
                        type.desc = type.pdesc;
                    }

                    return type;
                }
                case "lst":
                    if (type.desc.includes("{")) type.sub = "lst_obj";
                // eslint-disable-next-line no-fallthrough
                case "obj": {
                    const types = replaceTsxTypes(inpt, state, replW(type.desc), type.sub);
                    if (type.desc && (type.desc.match(/^[{[]/) || !type.desc.includes(" "))) {
                        type.sub = types.string;
                        type.desc = types.descs || types.nameString;
                        type.sub = type.sub
                            .replace(/&comma;/g, ',')
                            .replace(/[“”]/g, '"')
                            .replace(/^\[(.*)\]$/, (m, t) => (t.includes(",") && !t.match(/{|\[/) ? m : t.trim() + "[]"));
                    }
                    return type; //replaceTypes(inpt, state, replW(type.desc), true);
                }
                case "jso": type.sub = type.desc || "Object"; return type;
                default:
                    if (!type.main.endsWith("o"))
                        Throw(Error("unknown typex " + type.sub));
                    if (type.desc) type.desc = type.desc.replace(regConPrefix, '');

                    if (objPfx[type.main] && type.desc) {
                        type.sub = objPfx[type.main] + type.desc;
                        type.desc = "";
                    }
                    else {
                        type.sub = type.sub || '';
                    }
                    return type;
            }
        });

    if (!str.length) return { main: "", sub: "", desc: "" };
    return str.reduce((a, b) => {
        a.main += '|' + b.main;
        a.sub += '|' + b.sub;
        a.desc += a.desc && b.desc ? '\\\n  * **or** ' + b.desc : b.desc;
        return a;
    });
}

/** accept formats: "name":"desc" name:type name:"types" name:"type-values"
 * using name:'...' will force app popups
 * @param {DSInput} inpt
 * @param {GenState} state
 * @param {string} descStr
 * @param {string} ptype
 * @return {{string: string, nameString: string, descs: string}}
 */
function replaceTsxTypes(inpt, state, descStr, ptype, names = false) {
    /** @type {string[]} */
    const types = [];

    // const tags = /** @type {string[]} */ ([]);
    // descStr = descStr.replace(/\s*<[^\s​].*?>/g, (m) => (tags.push(m), `§t${tags.length - 1}§`));

    let string = descStr.replace(/(\b([\w_.#-]+)|"([^"]*)"):([a-z]{3}(_[a-z]{3})?\b)?-?("(\\"|[^"])*|'(\\'|[^'])*| ?\w(\\[\s\S]|[^.,:”<|}\]])*)?['"]?/g,
        function formatDescType(m, _1, /** @type {string} */ name, /** @type {string} */ aname, /** @type {string} */ type = "", _2 = "", /** @type {string} */ desc = "") {
            let space = '';
            if (!name) name = aname;
            if (!type && (!desc || desc[0] === ' ') || name.startsWith("Note")) return m;

            if (desc) {
                if (desc.endsWith(' ')) space = ' ';
                desc = desc.replace(/\\(["'])/g, "$1").slice(Number(desc[0] === '"'), space ? -1 : undefined);
                if (desc[0] === "'") desc = desc.slice(1);
                if (tName[desc.slice(0, 3)] && (!desc[4] || !desc[4].match(/[a-z]/i))) { type = desc; desc = ''; }
            }

            if (type) {
                if (tName[type.slice(0, 3)]) { if (desc) { type += '-' + desc; desc = ''; } }
                else { desc = type + (desc || ''); type = ''; }
            }

            desc = decodeHtml(desc).replace(/\n(\S)/g, "\\\n  * &emsp; $1");
            if (desc) types.push(`\n  * &emsp; \`${decodeHtml(name)}\` - ${desc}`);

            // fix Email
            if (type.includes("obj-{")) type = type.slice(4);
            if (type.includes("-")) type = makeType(inpt, state, type).sub;
            if (ptype.endsWith("obj") && !names) return name + ": " + type;
            if (ptype.endsWith("lst")) return type.split("-")[0];
            return name;
        }
    );

    // fix weird GetObjects and wiz.GetButtons retval
    if (ptype.startsWith("lst") && !string.includes("{")) string = string.replace(/\s*(\w+):\s*([\w-]+(, )?)\s*/g, (m, n, t) => t);
    // fix GetJoystickStates {key:t: value:t} pattern
    if (ptype === "obj") string = string.replace(/\s*(\w+):\s*(\w+):\s*(\w+):\s*(\w+)\s*/, "[$1: $2]: $4");
    // fix StartApp intent
    if (ptype !== "str") string = string.replace(/&comma;/g, ",");

    const nameString = ptype === "obj" && !names ? replaceTsxTypes(inpt, state, descStr, ptype, true).string : '';
    return {
        string,
        nameString: nameString && '\\' + nameString,
        descs: types.length ? types.join("\\") : ''
    };
}


/**
 * @param {DSInput} inpt
 * @param {GenState} state
 * @param {string} name
 * @param {string} pAbbrev
 * @param {DSFunction} dfunc
 */
function processFunction(inpt, state, name, pAbbrev, dfunc, indent = "", isCb = false) {
    const defs = {
        func: "", class: "",
        /** @type {Obj<string>} */
        extra: {},
        /** @type {string} */
        className: ""
    };

    dfunc.name ||= name;
    if (dfunc.desc?.startsWith("#")) dfunc.desc = unwrapDesc(dfunc.desc, state);
    const func = fillMissingFuncProps(dfunc);
    // Fix MUI return types
    if (state.curScope === "MUI" && func.name?.match(regConPrefix) && func.retval === "obj")
        func.retval = "muo-" + func.name?.replace(regConPrefix, '');

    if (!func.shortDesc?.trim())
        func.shortDesc = func.desc.split(/\.\s/)[0];

    func.shortDesc = func.shortDesc
        .replace(/@/g, '')
        .replace(/\n/g, `\n${indent} * `)
        .replace(/<(premium|deprecated|xfeature)(.*?)>/g, "@$1 $2");

    const params = [], jsparams = [];
    for (const i in func.pNames) {
        const [pname, dflt] = func.pNames[i]
            .replace("default", "dflt")
            .replace(/(\w+)\.\.\./, "...$1")
            .split("=");
        const ptype = func.pTypes[i];
        const type = makeType(inpt, state, ptype);
        if (type.sub.match(/^[a-z_]+$/) && !(tDesc[type.sub] || tName[type.sub]))
            type.sub = pAbbrev.toUpperCase() + '_' + type.sub;

        params.push(`${pname + (dflt ? '?' : '')}: ${type.sub}`); // + (dflt ? ' = ' + dflt : ''));
        if (type.desc)
            jsparams.push(`${indent} * @param ${pname.replace("?", '')} ${type.desc.replace(/ \* /g, indent + ' * ')}\n`);
    }

    // eslint-disable-next-line prefer-const
    let { sub: rtype, desc: rdesc } = makeType(inpt, state, func.retval || "");
    const args = func.isval ? '' : `(${params.join(', ')})`;

    // callbacks
    if (isCb) {
        defs.func += `${args} => ${rtype || 'void'}`;
        return defs;
    }

    // return value
    if (rdesc) jsparams.push(`${indent} * @return ${rdesc}\n`);

    // sub properties
    if (name.includes(".")) {
        const [fname, fobj, fcon] = name.split(".").reverse();
        const key = fcon ? `${pAbbrev.toUpperCase()}_${fobj}` : fobj;
        let tempDef = defs.extra[key] || "";

        if (jsparams.length) tempDef += `\n${indent}/**\n${indent} * ${func.shortDesc || ''}\n${jsparams.join('')}${indent} */\n`;
        else tempDef += `\n${indent}/** ${func.shortDesc} */\n`;

        tempDef += `${indent}${fname}${args}: ${rtype || 'void'};\n`;
        defs.extra[key] = tempDef;
    }
    else {
        if (jsparams.length) defs.func += `\n${indent}/**\n${indent} * ${func.shortDesc || ''}\n${jsparams.join('')}${indent} */\n`;
        else defs.func += `\n${indent}/** ${func.shortDesc} */\n`;

        defs.func += `${indent}${name}${args}: ${rtype || 'void'};\n`;
    }

    if (!func.subf) return defs;
    if (!func.retval) throw Error(`Missing ret type for ${state.curScope}.${name}`);

    const className = objPfx[state.curScope] + name.replace(regConPrefix, '');
    defs.className = className;

    // subfunctions for classes
    defs.class += `\ndeclare class ${className} {\n`;
    for (const subFuncName in func.subf) {
        let met = func.subf[subFuncName];
        if (typeof met === "string") met = unwrapBaseFunc(met, inpt.base);

        const sdefs = processFunction(inpt, state, subFuncName, func.abbrev || "undefined", met, indent);
        defs.class += sdefs.func;
        for (const i in sdefs.extra) {
            const retName = i.split("_")[1];
            // replace previous return type with custom
            defs.class = defs.class.replace(RegExp(`: ${retName}(?=;\\s+$)`), ': ' + i);
            defs.extra[i] = (defs.extra[i] || "") + sdefs.extra[i];
        }
    }

    for (const obj in defs.extra) {
        if (obj.match(/^[a-z]/)) {
            defs.class += `\n${indent}${obj}: {`;
            defs.class += defs.extra[obj].replace(/\n/g, "\n" + indent);
            defs.class += `}\n`;
            delete defs.extra[obj];
        }
    }
    defs.class += "}\n\n";
    return defs;
}

/** @param {string} str */
function decodeHtml(str) {
    /** @type {Obj<string>} */
    const entityMap = { lt: '<', gt: '>', amp: '&', period: '.', comma: ',', colon: ':', bsol: '\\' };
    return str.replace(/\\\\n/g, "\n")
        .replace(/&([a-z]+);/g, (_, m) => entityMap[m] || console.log('html entity:', m) || m);
}

