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
let JSDOC = false;

/**
 * @param {DSInput} inpt
 * @param {GenState} state
 * @param {"js"|"ts"} mode
 */
function generateTsx(inpt, state, mode) {
    JSDOC = mode === "js";

    const curDir = getDstDir(D_LANG, state, `definitions/${mode}/`);
    state.curDoc = curDir + `${state.curScope}.d.${mode}`;
    console.log(`generating ${state.lang}.${state.curScope}.d.` + mode);

    app.MakeFolder(curDir);
    if (JSDOC) app.WriteFile(`${curDir}jsconfig.json`, '{"compilerOptions": {"checkJs": true}}');
    else app.WriteFile(`${curDir}tsconfig.json`, '{}');

    const defs = generateDefinitionFile(state.curScope, inpt, state);
    app.WriteFile(state.curDoc, defs);
}

/** @type {(name:string, type:string, desc?:string) => string} */
function declareType(name, type, desc = "") {
    if (JSDOC) return `/** @typedef {${type}} ${name} ${desc && desc + ' '}*/`;
    return (desc ? `/** ${desc} */\n` : '') + `declare type ${name} = ${type};`;
}

/** @type {(scopeName: string, inpt: DSInput, state: GenState) => string} */
function generateDefinitionFile(scopeName, inpt, state) {
    if (scopeName === "global") {
        const typeDecls = Object.entries({ ...conf.tname, ...conf.tdesc })
            .filter(([name, _]) => !name.endsWith('o') && name.match(/^[a-z]/i))
            .map(([name, desc]) => declareType(name, makeType(inpt, state, name, true).sub, desc));
        return typeDecls.join("\n");
    }

    /** @type {Obj<string[]>} */
    const objs = {};

    let definition = "";
    let classDefinition = "";
    for (const funcName in inpt.scope) {
        const func = inpt.scope[funcName];
        if (typeof func !== 'object' || funcName === "_tsxdefs") continue;
        const isGlob = func.subf && state.curScope !== "MUI" && func.retval?.startsWith("obj");

        const defs = processFunction(inpt, state, funcName, scopeName, func, "\t");

        if (defs.className && func.retval && !isGlob) {
            const typeKey = func.retval.split('-', 1)[0];
            if (!objs[typeKey]) objs[typeKey] = [];
            objs[typeKey].push(defs.className);
        }

        definition += defs.func;
        classDefinition += defs.class;

        for (const obj in defs.extra) {
            if (!JSDOC) classDefinition += 'declare ';
            classDefinition += `class ${obj} {\n`;
            classDefinition += defs.extra[obj];
            classDefinition += `}\n`;
        }
    }

    /** @type {string[]} */
    const typeDecls = [];
    for (const o in objs) {
        typeDecls.unshift(declareType(o, makeType(inpt, state, o, true).sub, tName[o]));
        typeDecls.unshift(declareType(tsxTypes[o], objs[o].join(' | ')));
    }

    // eslint-disable-next-line prefer-const
    for (let [name, type] of Object.entries(inpt.scope._tsxdefs?.subf || {})) {
        if (typeof type !== "string") continue;
        if (type.startsWith("r/")) {
            name = objPfx[scopeName] + name;
            // eslint-disable-next-line security/detect-non-literal-regexp
            const reg = new RegExp(`^${type.slice(2, -1)}$`);
            type = keys(inpt.scope)
                .filter(n => reg.test(n))
                .map(n => objPfx[state.curScope] + n.replace(regConPrefix, '')).join(" | ");
        } else if (type.startsWith("{") && type.endsWith("}")) {
            type = type.slice(1, -1);
        }
        else {
            throw Error("Unknown _tsxdefs type " + type);
        }
        typeDecls.unshift(declareType(name, type));
    }

    scopeName = `Ds${scopeName[0].toUpperCase() + scopeName.slice(1)}`;
    if (scopeName === "DsUi") scopeName = "UI";

    if (JSDOC) typeDecls.unshift(`/** @type {${scopeName}} */\nvar ${state.curScope};`);
    else typeDecls.unshift(`declare var ${state.curScope}: ${scopeName};`);
    return `${typeDecls.join("\n")}\n\n${JSDOC ? '' : 'declare '}class ${scopeName} {\n${definition}\n}\n${classDefinition}\n`;
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
                        // fix ui param descriptions with '`'
                        if (!tdesc.find(c => c.includes('`'))) tdesc = tdesc.map(c => '`' + c + '`');
                        type.desc = tdesc.map(decodeHtml).join(", ") + types.descs;
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

/** @typedef {{name:string; type:string; desc:string; dflt:string}} ParamDef */
/** @typedef {{main:string, sub:string, desc:string}} TypeDef */

/**
 * @param {ParamDef[]} params
 * @param {TypeDef} retval
 */
function declareCallback(params, retval) {
    const args = params.map(p => `${p.name + (p.dflt ? '?' : '')}: ${p.type}`);
    return `(${args.join(", ")}) => ${retval.sub || 'void'}`;
}

/**
 * @param {string} name
 * @param {string} desc
 * @param {ParamDef[]} params
 * @param {TypeDef} retval
 * @param {boolean|undefined} isval
 * @param {string} indent
 */
function declareFunction(name, desc, params, retval, isval, indent) {
    let docStr = "";
    if (JSDOC) {
        const args = params.map(p => p.name.replace('?', ''));

        const jsparams = params.map(p => {
            if (p.name.startsWith("...")) {
                p.name = p.name.slice(3);
                p.type = `(${p.type})[]`;
            }
            if (p.dflt) p.name = `[${p.name}=${p.dflt}]`;
            else if (p.name.endsWith("?")) p.name = `[${p.name.slice(0, -1)}]`;
            return `${indent} * @param {${p.type}} ${p.name} ${p.desc.replace(/^\\/, '').replace(/ \* /g, indent + ' * ')}\n`;
        });

        if (!isval) jsparams.push(`${indent} * @return {${retval.sub || 'void'}} ${retval.desc}\n`);

        if (jsparams.length) docStr += `\n${indent}/**\n${indent} * ${desc || ''}\n${jsparams.join('')}${indent} */\n`;
        else if (isval) docStr += `\n${indent}/** @type {${retval.sub || 'void'}} ${desc} */\n`;
        else docStr += `\n${indent}/** ${desc} */\n`;

        if (isval) docStr += `${indent}${name};\n`;
        else docStr += `${indent}${name}(${args.join(", ")}) {return}\n`;
    }
    else {
        const args = params.map(p => `${p.dflt ? p.name + '?' : p.name}: ${p.type}`);

        params = params.filter(p => p.desc);
        const jsparams = params.map(p =>
            `${indent} * @param ${p.name.replace("?", '')} ${p.desc.replace(/^\\(?=[^{}])/, '').replace(/ \* /g, indent + ' * ')}\n`);
        if (retval.desc) jsparams.push(`${indent} * @return ${retval.desc}\n`);

        if (jsparams.length) docStr += `\n${indent}/**\n${indent} * ${desc || ''}\n${jsparams.join('')}${indent} */\n`;
        else docStr += `\n${indent}/** ${desc} */\n`;

        const argStr = isval ? args.join(', ') : `(${args.join(", ")})`;
        docStr += `${indent}${name}${argStr}: ${retval.sub || 'void'};\n`;
    }
    return docStr;
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

    const params = [];
    for (const i in func.pNames) {
        const [pname, dflt] = func.pNames[i]
            .replace("default", "dflt")
            .split("=");
        const ptype = func.pTypes[i];
        const type = makeType(inpt, state, ptype);
        if (type.sub.match(/^[a-z_]+$/) && !(tDesc[type.sub] || tName[type.sub]))
            type.sub = pAbbrev.toUpperCase() + '_' + type.sub;

        params.push({ name: pname, type: type.sub, desc: type.desc, dflt });
    }

    // eslint-disable-next-line prefer-const
    let retval = makeType(inpt, state, func.retval || "");

    // callbacks
    if (isCb) {
        defs.func += declareCallback(params, retval);
        return defs;
    }

    // sub properties
    if (name.includes(".")) {
        const [fname, fobj, fcon] = name.split(".").reverse();
        const key = fcon ? `${pAbbrev.toUpperCase()}_${fobj}` : fobj;
        const s = defs.extra[key] || "";
        defs.extra[key] = s + declareFunction(fname, func.shortDesc, params, retval, func.isval, indent);
    }
    else {
        defs.func += declareFunction(name, func.shortDesc, params, retval, func.isval, indent);
    }

    if (!func.subf) return defs;
    if (!func.retval) throw Error(`Missing ret type for ${state.curScope}.${name}`);

    const isGlob = func.subf && state.curScope !== "MUI" && func.retval.startsWith("obj");
    const className = (isGlob ? '' : objPfx[state.curScope]) + name.replace(regConPrefix, '');
    defs.className = className;

    // subfunctions for classes
    defs.class += JSDOC ? '\n' : '\ndeclare ';
    defs.class += `class ${className} {\n`;
    for (const subFuncName in func.subf) {
        let met = func.subf[subFuncName];
        if (typeof met === "string") met = unwrapBaseFunc(met, inpt.base);

        const sdefs = processFunction(inpt, state, subFuncName, func.abbrev || "undefined", met, indent);
        defs.class += sdefs.func;
        for (const i in sdefs.extra) {
            const retName = i.split("_")[1];
            // replace previous return type with custom
            if (JSDOC)
                defs.class = defs.class.replace(RegExp(`(.* @return) {${retName}} `), `$1 {${i}} `);
            else
                defs.class = defs.class.replace(RegExp(`: ${retName}(?=;\\s+$)`), ': ' + i);
            defs.extra[i] = (defs.extra[i] || "") + sdefs.extra[i];
        }
    }

    for (const obj in defs.extra) {
        if (obj.match(/^[a-z]/)) {
            defs.class += `\n${indent}${obj}${JSDOC ? ' =' : ':'} {`;
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

