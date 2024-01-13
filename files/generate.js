
/// <reference path="./types.d.ts"/>

const fs = require("fs-extra");
const path = require("path");
const rimraf = require("rimraf");
const Prism = require('prismjs');
const _glob = require('glob');
/** @type {DSConfig} */
const conf = require("./conf.json");

// prism default languages:
//   plain,plaintext,text,txt,extend,insertBefore,DFS,markup,
//   html,mathml,svg,xml,ssml,atom,rss,css,clike,javascript,js
// @ts-ignore
require('prismjs/components/prism-java.min.js');
// @ts-ignore
require('prismjs/components/prism-python.min.js');

//TODO:WebServer,WebSocket,WebSocket conn.Ex.,gfx
const baseDir = "json/", outDir = "../out/";
/** @type {GenState} */
const dfltState = {
    lang: "en", curVer: "", curDoc: "",
    curScope: "app", curFunc: "", curSubf: "",
    progress: 0, popDefs: {}, spop: {}
};
const warnEnbl = false;
let dbg = false, nogen = false, clear = false, force = false, updateVer = false, makeTsx = false, makeTips = false;
let regGen = RegExp(""), regHide = RegExp("");

const app = getApp();
const rootPath = __dirname + "/";
// constructor name prefixes
const regConPrefix = /^(Create|Open|Add|show)(?=\w+)/i;
// html char placeholders
const _htm = { comma: ',', colon: ':', bsol: '\\', period: '.', lowbar: '_', verbar: '|', "#160": " ", nbsp: " ", ldquo: "“", rdquo: "”" };

// html templates
let [subfBase, naviItem, switchPop, appPopup, codeBase,
    txtPopup, defPopup, subfHead] = "";
/** @type {Obj<string>} */
let hints = {};

/** @type {Obj<string>} */
const special = { n: '\n', r: '\r', t: '\t', b: '\b', f: '\f' };

// eslint-disable-next-line no-undef
if (typeof OnStart === 'undefined') OnStart = g_OnStart;
function g_OnStart() { }

/** @param {string} p */
function absPth(p) { return path.resolve(rootPath, p); }

const D_BASE = 0, D_LANG = 1, D_VER = 2, D_SCOPE = 3;
/**
 * @param {0|1|2|3} level
 * @param {GenState} state
 */
function getSrcDir(level, state, file = "") {
    const dir = [state.lang, state.curVer, state.curScope];
    return baseDir + dir.slice(0, level).join('/') + '/' + file;
}

/**
 * @param {0|1|2|3} level
 * @param {GenState} state
 */
function getDstDir(level, state, file = "") {
    const dir = ['docs' + getl(state.lang), state.curVer, state.curScope];
    return outDir + dir.slice(0, level).join('/') + '/' + file;
}

/** @param {GenPattern} genPattern */
function Generate(genPattern) {
    regHide = RegExp(conf.regHide);
    const state = dfltState;

    if (genPattern.lang && !conf.langs[genPattern.lang])
        Throw(Error(`language ${genPattern.lang} not specified in conf.json`));
    if (genPattern.scope && !conf.scopes[genPattern.scope])
        Throw(Error(`scope ${genPattern.scope} not specified in conf.json`));

    const dstDir = getDstDir(D_BASE, state);
    if (!app.FolderExists(dstDir)) app.MakeFolder(dstDir);

    // language index page
    const nav = keys(conf.langs).map(l => newNaviItem(`docs${getl(l)}/Docs.htm`, conf.langs[l]));
    const index = htmlNavi("Available languages:", "", nav.join(''))
        .replace(/(href|src)="(?!http|\/)(?!docs)(\.\.\/)?/g, '$1="docs/')
        .replace(/<script .*forward.js"><\/script>\s+/g, '');
    app.WriteFile(dstDir + "index.html", index);

    // 404 page
    app.CopyFolder('404.html', dstDir + '404.html');

    // update forward.js version map
    /** @type {Obj<string>} */
    const latest = {};
    const forwardjs = app.ReadFile('docs-base/js/forward.js');
    keys(conf.langs).map(l => {
        state.lang = l;
        const versions = app.ListFolder(getSrcDir(D_LANG, state)).sort();
        latest[state.lang] = versions[versions.length - 1];
    });
    app.WriteFile('docs-base/js/forward.js', forwardjs.replace(/(versions = ).*;/, `$1${JSON.stringify(latest)};`));

    // generate all languages
    keys(conf.langs).filter(l => l.match(genPattern.lang) !== null).forEach(l => generateLang(l, state, genPattern));

    // update version number
    const verDate = Date.now() / 864e5 | 0;
    const verNum = ReadFile("../docs/version.txt", "0").split('.').map(Number);
    if (updateVer) verNum[1] = (verNum[1] | 0) + 1;
    verNum[0] %= 1000;
    app.WriteFile(outDir + "version.txt", verDate + verNum.join('.'));

    for (const file of _glob.sync(outDir + '*/*/Docs.htm', { cwd: __dirname })) {
        const content = app.ReadFile(file)
            .replace(/version.txt: [0-9.]+/, `version.txt: ${verDate + verNum.join('.')}`)
            .replace(/Docs version: [0-9.]*/, `Docs version: ${verNum.join('.')}`)
            .replace(/\(\d\d\/\d\d\/\d\d\d\d\)/, `(${new Date().toLocaleDateString("en-GB", { timeZone: "UTC" })})`);
        app.WriteFile(file, content);
    }
}

/**
 * @param {LangKeys} l
 * @param {GenState} state
 * @param {GenPattern} genPattern
*/
function generateLang(l, state, genPattern) {
    state.lang = l;
    const langDir = getSrcDir(D_LANG, state);
    const dstDir = getDstDir(D_LANG, state);
    let hadError = false;

    // clear state.lang folder
    if (!app.FolderExists(langDir)) Throw(Error(`Language '${state.lang}' doesn't exist.`));

    try {
        // update base files
        if (!app.FolderExists(dstDir)) app.MakeFolder(dstDir);
        else console.log("overwriting " + state.lang);

        app.CopyFolder("font-awesome", dstDir + "font-awesome");
        app.CopyFolder("app.js", dstDir + "app.js");
        app.CopyFolder("docs-base/css", dstDir + "css");
        app.CopyFolder("docs-base/js", dstDir + "js");
        app.CopyFolder("docs-base/Index.htm", dstDir + "index.html");
    }
    catch (e) {
        console.error(e);
        hadError = true;
    }

    // version index page
    const nav = conf.vers.sort().map(v => newNaviItem(v + '/Docs.htm', "Version " + v.replace(/v(\d)(\d\d)(\.\d+)?/, "$1.$2$3")));
    const index = htmlNavi("Available versions:", "", nav.join(''))
        .replace(/(href|src)="(?!http|\/)(\.\.\/)?/g, '$1="../docs/')
        .replace(/<script .*forward.js"><\/script>\s+/g, '');
    app.WriteFile(dstDir + "Docs.htm", index);

    // generate all versions
    const versions = app.ListFolder(langDir).sort().filter(v => !v.startsWith("."));
    // eslint-disable-next-line security/detect-non-literal-regexp
    for (const v of versions) if (new RegExp(genPattern.ver || '.*').test(v)) generateVersion(v, state, genPattern);
    if (hadError) console.warn("Warning: Copy docs-base failed for docs-" + l + ". Reload VSCode via 'Ctrl+Shift+P > Reload Window' and try again if the preview renders incorrectly.");
}

/**
 * @param {string} ver
 * @param {GenState} state
 * @param {GenPattern} genPattern
 */
function generateVersion(ver, state, genPattern) {
    state.curVer = ver;
    const curDir = getDstDir(D_VER, state);
    let hadError = false;

    try {
        if (clear && app.FolderExists(curDir)) {
            console.log(`deleting ${state.lang}/${ver}`);
            app.DeleteFolder(curDir);
        }
        app.CopyFolder("docs-base", curDir);
    }
    catch (e) {
        console.error(e);
        hadError = true;
    }

    app.WriteFile(curDir + "index.txt", "");

    // generate all scopes
    keys(conf.scopes)
        .filter(s => s.match(genPattern.scope) !== null)
        .forEach(scopeName => {
            try { generateScope(scopeName, state, genPattern); }
            catch (e) {
                console.error(/*\x1b[31m*/ `while generating ${state.curScope} ${state.curDoc || ''}: ${state.curSubf || ''}`);
                Throw(e);
            }
        });

    if (hadError) console.warn("Warning: Copy docs-base failed for " + ver + ". Reload VSCode via 'Ctrl+Shift+P > Reload Window' and try again if the preview renders incorrectly.");
}

/**
 * @param {ScopeKeys} name
 * @param {GenState} state
 * @param {GenPattern} genPattern
 */
function generateScope(name, state, genPattern) {
    state.curScope = name;
    const scopeDir = getSrcDir(D_SCOPE, state);
    const dstDir = getDstDir(D_SCOPE, state);
    regGen = RegExp(genPattern.func || ".*");

    if (!app.FolderExists(scopeDir) || !(app.FileExists(scopeDir + "obj.json") || app.FolderExists(scopeDir + "desc")))
        Throw(Error(`'${scopeDir}' doesn't exist.`));

    if (!app.FolderExists(scopeDir + "samples")) app.MakeFolder(scopeDir + "samples");

    // check file dates for update
    if (!force && !clear && newestFileDate(dstDir) > newestFileDate(scopeDir, "generate.js"))
        return console.log(`Skipped ${state.lang}.${state.curVer}.${name}.${genPattern.func || '*'}`);

    app.ShowProgressBar(`Generating ${state.lang}.${state.curVer}.${name}.${genPattern.func || '*'}`);
    const inpt = parseInput(state);

    // clear nav & scope folder for generating
    /* if (!clear) {
        const verDir = getDstDir(D_VER, state);
        if (!"navs".match(regGen)) app.DeleteFolder(dstDir);
        for (const f of app.ListFolder(verDir))
            f.startsWith(name + "_") && app.DeleteFile(verDir + f);
    } */
    if (!app.FolderExists(dstDir)) app.MakeFolder(dstDir);

    // generate nav pages
    if ("navs".match(regGen)) {
        generateNavigators(inpt.scope, inpt.navs, conf.scopes[state.curScope] || state.curScope, state);
        const missNavs = Object.entries(inpt.scope).filter(m => !m[1].hasNav).map(m => m[1].name || m[0]).filter(nothidden);
        if (inpt.base && missNavs.length > 0) console.log(`missing navigators in ${state.curScope}: ${missNavs.join(", ")}\n`);
    }

    // generate doc pages
    generateDocs(inpt, state);
    return app.HideProgressBar();
}

/** read all input json files
 * @param {GenState} state
 * @returns {DSInput}
 */
function parseInput(state) {
    /** @type {DSNavs} */ let navs;
    /** @type {DSBase|null} */ let base = {}, newBase;
    /** @type {DSScope} */ let scope = {}, newScope;
    /** @type {string[]} */ let baseKeys = [];

    // read categories
    const scopeDir = getSrcDir(D_SCOPE, state);
    state.curDoc = scopeDir + "navs.json";
    navs = JSON.parse(ReadFile(state.curDoc, "{}"));

    // read scope members
    state.curDoc = scopeDir + "obj.json";
    if (app.FileExists(state.curDoc)) {
        newScope = JSON.parse(ReadFile(state.curDoc, "false"));
        scope = mergeObject(scope, newScope);
        if (!keys(navs).length) navs = keys(scope);
        // @ts-ignore
        else navs.All = keys(scope);

        // read base functions used in scope
        state.curDoc = scopeDir + "base.json";
        newBase = JSON.parse(ReadFile(state.curDoc, "false"));
        base = mergeObject(base, newBase);
        if (base) {
            // additionally, read /*#obj*/ marked functions from .js file if exists
            if (!app.FileExists(scopeDir + state.curScope + ".js")) { baseKeys = keys(base).map(k => base && base[k].name || k); }
            else {
                baseKeys = app.ReadFile(scopeDir + state.curScope + ".js")
                    .split("/*#obj*/ self.").slice(1)
                    .map((v) => v.slice(0, v.indexOf(" ")));
            }

            // additionally, read Obj.prototype functions from utils.js if exists
            if (state.curScope === "app" && app.FileExists(scopeDir + "util.js")) {
                baseKeys.concat(app.ReadFile(scopeDir + "util.js")
                    .split("Obj.prototype.").slice(1)
                    .map((v) => v.slice(0, v.indexOf(" "))));
            }
        }
        else { base = {}; }
    }
    else // no json file available
    {
        regGen = RegExp("(?=^(tips|tsx)$)[]|(?!^(tips|tsx)$)^.*" + regGen.source);
        // add files from scope folder to be generated
        newScope = {}; base = null; navs = [];

        for (let n of app.ListFolder(scopeDir + "desc")) {
            n = n.slice(0, n.lastIndexOf("."));
            navs.push(n.replace(/^\s+/, ""));
            // @ts-ignore
            newScope[n] = `#${n}.md`;
        }
        scope = mergeObject(scope, newScope);
    }

    return { navs, scope, base, baseKeys };
}

/**
 * @param {DSScope} scope
 * @param {DSNavs} navs
 * @param {string} name
 * @param {GenState} state
 * @param {string} [pfx]
 */
function generateNavigators(scope, navs, name, state, pfx) {
    state.curDoc = getDstDir(D_VER, state, `${pfx || ''}${name.replace(/\s+/g, '')}.htm`);
    pfx = `${pfx || state.curScope}_`;
    let nav = '', addcontent = '';

    // function list
    if (navs instanceof Array) {
        for (const func of navs = navs.filter(nothidden)) {
            if (!func) { nav += "<li></li>"; }
            else if (name !== 'All' && scope['_' + func]) { scope['_' + func].hasNav = true; }
            else if (!scope[func]) { Throw(`nav to deleted method ${state.curScope}.${func}`); }
            else {
                scope[func].hasNav ||= (name !== 'All');
                nav += newNaviItem(
                    state.curScope + `/${func.replace(/^\d+|\s+/g, '')}.htm`,
                    func.replace(/^\d+\s*/, ''), getAddClass(scope[func], state));
            }
        }
    }
    // name:target.htm or scope:categories association
    else if (navs instanceof Object) {
        for (const cat of keys(navs).filter(nothidden)) {
            let val = navs[cat];
            if (cat === '_nofilter') continue;
            if (cat.startsWith("+html")) {
                addcontent += val;
                continue;
            }
            if (!val) val = state.curScope + "/" + cat + ".htm";

            // targtet file
            if (typeof val === "string") {
                const m = val.match(state.curScope + "\\/(\\w+).htm(#(.*))?");
                /** @type {DSFunction|string|undefined} */
                let f, add = "";
                if (val.startsWith("http")) add += ' onclick="return OpenUrl(this.href);"';
                if (m && scope[m[1]]) f = m[3] ? (scope[m[1]].subf || {})[m[3]] : scope[m[1]];
                if (f && typeof f !== "string") { add += getAddClass(f, state); f.hasNav = true; }
                nav += newNaviItem(val, cat, add);
            }
            else // new category
            {
                nav += newNaviItem(`${pfx + cat.replace(/\s+/g, '')}.htm`, cat, cat === "Premium" ? getAddClass({ desc: "<premium>" }, state) : undefined);
                const tdoc = state.curDoc;
                generateNavigators(scope, val, cat, state, pfx);
                state.curDoc = tdoc;
            }
        }
    }
    else { Throw(Error("Wrong catlist datatype: " + typeof navs)); }

    const nofilter = keys(navs).length < 15 || (navs instanceof Object && navs._nofilter);
    app.WriteFile(state.curDoc, htmlNavi(name, addcontent, nav, !nofilter));
}

let madeTsxGlobals = false;
/**
 * @param {DSInput} inpt
 * @param {GenState} state
 */
function generateDocs(inpt, state) {
    if (!nogen) {
        const lst = keys(inpt.scope).filter(nothidden).filter(n => Boolean(n.match(regGen)));
        for (let i = 0; i < lst.length; i++) {
            state.progress = Math.floor(100 * i / lst.length);
            app.UpdateProgressBar(state.progress, state.curScope + '.' + lst[i]);
            //console.log('\n:'+i+':'+lst[i]+'\n');
            generateDoc(state, inpt, lst[i]);
        }
    }

    if (makeTips && "tips".match(regGen)) {
        resetGlobals(state);
        generateTips(inpt, state);
    }

    if (makeTsx && "tsx".match(regGen)) {
        if (!madeTsxGlobals) {
            const tmpInpt = { base: null, navs: [], baseKeys: [], scope: {} };
            const tmpState = Object.assign({}, state);
            // @ts-ignore
            tmpState.curScope = "global";

            resetGlobals(tmpState);
            generateTsx(tmpInpt, tmpState);
            madeTsxGlobals = true;
        }

        resetGlobals(state);
        generateTsx(inpt, state);
    }
}

/**
 * @param {DSInput} scope
 * @param {GenState} state
 */
function generateTips({ base, scope }, state) {
    state.curDoc = getDstDir(D_LANG, state, state.curScope + '-tips.json');
    console.log(`generating ${state.lang}.${state.curScope}-tips.json`);

    /** @type {DSScopeRaw} */
    let tsubf;
    /** @type {Obj<Obj<string>>} */
    const tips = { [state.curScope]: {} };

    for (const name of keys(scope).filter(nothidden)) {
        const s = scope[name];
        s.name ||= name;
        if (!s.shortDesc && s.desc?.startsWith("#")) s.desc = unwrapDesc(s.desc, state);
        fillMissingFuncProps(s);

        if (!s.shortDesc || !s.subf || !s.abbrev) continue;
        tips[state.curScope][name] = s.shortDesc;

        tsubf = s.subf;
        /** @type {Obj<string>} */
        const tctrl = {};
        tips[s.abbrev] = tctrl;

        for (const j of keys(tsubf).filter(nothidden)) {
            const t = unwrapBaseFunc(tsubf[j], base);
            t.name ||= j;
            fillMissingFuncProps(t);
            if (t.shortDesc) tctrl[j] = t.shortDesc;
        }
    }

    const stips = tos(tips);
    if (stips.lastIndexOf("}") !== 25)
        app.WriteFile(state.curDoc, stips);
}

/**
 * @param {string | UndefinedPartial<DSMethod>} met
 * @param {DSBase | null} base
 */
function unwrapBaseFunc(met, base) {
    while (typeof met === "string") {
        if (!met.startsWith('#')) Throw(Error(`basefunc must have # prefix. got '${met}'`));
        if (/[a-z]/i.test(met[1])) met = met.slice(1);
        if (!base || !base[met]) Throw(Error("basefunc " + met + " not found!"));
        met = base[met];
    }

    // load params from base
    while (typeof met.params === "string") {
        if (!met.params.startsWith('#')) Throw(Error(`params must have # prefix. got '${met}'`));
        if (/[a-z]/i.test(met.params[1])) met.params = met.params.slice(1);
        if (!base || !base[met.params])
            Throw(Error("params " + met.params + " not found!"));
        met.pNames = base[met.params].pNames || [];
        met.pTypes = base[met.params].pTypes || [];
        met.params = base[met.params].params || undefined;
    }

    return met;
}

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

/** @type {(s:string, d:string|RegExp, l?:number) => [string]|[string,string]} */
function split1(s, d) {
    /** @ts-ignore */
    return s.replace(d, '\x01').split('\x01');
}

/** @type {(scopeName: string, inpt: DSInput, state: GenState) => string} */
function generateDefinitionFile(scopeName, inpt, state) {
    /** @type {Obj<string>} */
    const objPfx = { app: "Ds", dso: "Ds", ui: "UI", uio: "UI", MUI: "Mui", muo: "Mui", gfx: "Gfx", gvo: "Gfx" };
    /** @type {{tname: Obj<string>, tdesc: Obj<string>}} */
    const { tname: tName, tdesc: tDesc } = conf;

    if (scopeName === "global") {
        const typeDecls = Object.entries({ ...conf.tname, ...conf.tdesc })
            .filter(([name, _]) => !name.endsWith('o') && name.match(/^[a-z]/i))
            .map(([name, desc]) => `/** ${desc} */\ndeclare type ${name} = ${makeType(name, true).sub};`);
        return typeDecls.join("\n");
    }

    /** @type {Obj<string[]>} */
    const objs = {};

    let definition = "";
    let classDefinition = "";
    for (const funcName in inpt.scope) {
        const func = inpt.scope[funcName];
        if (typeof func !== 'object' || funcName === "_tsxdefs") continue;

        const defs = processFunction(funcName, scopeName, func, "\t");
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
        typeDecls.unshift(`/** ${tName[o]} */\ndeclare type ${o} = ${makeType(o, true).sub};`);
        typeDecls.unshift(`declare type ${tsxTypes[o]} = ${objs[o].join(' | ')};`);
    }

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


    /** @param {string | UndefinedPartial<DSMethod>} stypes */
    function makeType(stypes, tsx = false) {
        if (typeof stypes === "object")
            return { main: "fnc", sub: processFunction("callback", "cb", stypes, "\t", true).func, desc: "" };

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
                        const types = replaceTsxTypes(type.desc, type.main);
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
                        const types = replaceTsxTypes(replW(type.desc), type.sub);
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
     * @param {string} descStr
     * @param {string} ptype
     * @return {{string: string, nameString: string, descs: string}}
     */
    function replaceTsxTypes(descStr, ptype, names = false) {
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
                if (type.includes("-")) type = makeType(type).sub;
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

        const nameString = ptype === "obj" && !names ? replaceTsxTypes(descStr, ptype, true).string : '';
        return {
            string,
            nameString: nameString && '\\' + nameString,
            descs: types.length ? types.join("\\") : ''
        };
    }


    /**
     * @param {string} name
     * @param {string} pAbbrev
     * @param {DSFunction} dfunc
     */
    function processFunction(name, pAbbrev, dfunc, indent = "", isCb = false) {
        const defs = {
            func: "", class: "",
            /** @type {Obj<string>} */
            extra: {}
        };

        dfunc.name ||= name;
        if (dfunc.desc?.startsWith("#")) dfunc.desc = unwrapDesc(dfunc.desc, state);
        const func = fillMissingFuncProps(dfunc);
        // Fix MUI return types
        if (scopeName === "MUI" && func.name?.match(regConPrefix) && func.retval === "obj")
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
            const type = makeType(ptype);
            if (type.sub.match(/^[a-z_]+$/) && !(tDesc[type.sub] || tName[type.sub]))
                type.sub = pAbbrev.toUpperCase() + '_' + type.sub;

            params.push(`${pname + (dflt ? '?' : '')}: ${type.sub}`); // + (dflt ? ' = ' + dflt : ''));
            if (type.desc)
                jsparams.push(`${indent} * @param ${pname.replace("?", '')} ${type.desc.replace(/ \* /g, indent + ' * ')}\n`);
        }

        // eslint-disable-next-line prefer-const
        let { sub: rtype, desc: rdesc } = makeType(func.retval || "");
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
        if (!func.retval) throw Error(`Missing ret type for ${scopeName}.${name}`);

        const className = objPfx[scopeName] + name.replace(regConPrefix, '');
        const typeKey = func.retval.split('-', 1)[0];
        if (!objs[typeKey]) objs[typeKey] = [];
        objs[typeKey].push(className);

        // subfunctions for classes
        defs.class += `\ndeclare class ${className} {\n`;
        for (const subFuncName in func.subf) {
            let met = func.subf[subFuncName];
            if (typeof met === "string") met = unwrapBaseFunc(met, inpt.base);

            const sdefs = processFunction(subFuncName, func.abbrev || "undefined", met, indent);
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
}

/** generates one document by function name
 * @param {GenState} state
 * @param {DSInput} inpt
 * @param {string} name
 */
function generateDoc(state, inpt, name) {
    state.curFunc = name;

    /** @type {DSFunction | string} */
    let ps = inpt.scope[name];
    if (typeof ps === "string")
        inpt.scope[name] = ps = { name, desc: ps, noCon: true };
    else ps.name = ps.name || name;
    if (!ps.name) return;

    state.curDoc = getDstDir(D_SCOPE, state, ps.name.replace(/^\d+|\s+/g, '') + '.htm');
    resetGlobals(state);

    let data, funcLine = "", subfuncs = "", desc = ps.desc || "";

    // get description from external file
    desc = unwrapDesc(ps.desc, state);
    if (ps.desc && !desc) Throw(Error(`description file ${ps.desc.slice(1)} linked but doesn't exist.`));
    ps.desc = desc;

    // get function specific data
    if (!ps.noCon) {
        if (dbg) app.UpdateProgressBar(state.progress, state.curScope + '.' + name + " get data");

        const m = fillMissingFuncProps(ps);
        data = getDocData(inpt, state, m);
        desc = m.desc;

        // function line with popups
        if (m.abbrev) funcLine = m.abbrev + " = ";
        funcLine += `${state.curScope}.${name}` + (m.isval ? '' : `(${data.args})`) + data.ret;

        // subfunctions of controls with popups
        if (isControl(inpt.scope, name) && data.mets) {
            subfuncs = subfHead
                .replace(/%t/g, name.replace(regConPrefix, ''))
                .replace("%f", data.mets);
        }
    }
    // if (!desc) console.log(m);

    // insert data to html base
    if (dbg) app.UpdateProgressBar(state.progress, state.curScope + '.' + name + " generate description");
    const html = htmlDoc(name, formatDesc(inpt, state, desc, name, Boolean(data)), subfuncs, funcLine);
    if (dbg) app.UpdateProgressBar(state.progress, state.curScope + '.' + name + " adjusting");
    const docHtml = adjustDoc(state, html, name);
    app.WriteFile(state.curDoc, docHtml);

    const indexText = docHtml
        .replace(/<div data-role="popup".*?<\/div>/g, "")
        .replace(/<[^>]+>/g, "")
        .replace(/(\s+|&[a-z]{2,6};)+/g, " ");
    const verDir = getDstDir(D_VER, state);
    fs.appendFileSync(absPth(verDir + "index.txt"), `${state.curDoc.replace(verDir, "").replace(/\\/g, '/')} := `);
    fs.appendFileSync(absPth(verDir + "index.txt"), indexText.trim() + '\n');

    if (dbg) app.UpdateProgressBar(state.progress, state.curScope + '.' + name + " done");
}

/*----------------------------------------------------------------------------*/

/** @param {GenState} state reset globals */
function resetGlobals(state) {
    state.popDefs = {};
    state.spop = { fnc: 0, dsc: 0, mul: 0, std: 0, ukn: 0 };
    keys(conf.tname).map(k => state.spop[k] = 0);
}

/**
 * @param {GenState} state
 * @param {string} html
 * @param {string} name
 */
function adjustDoc(state, html, name) {
    const order = "std,num,str,mul,obj,dso,lst,fnc,dsc";
    const popList = keys(state.popDefs)
        .map((d) => newDefPopup(state.popDefs[d], d))
        .sort(function sortPops(a, b) {
            a = a.slice(31, 38); b = b.slice(31, 38);
            if (a.slice(0, 3) === b.slice(0, 3)) {
                if (isnum(a[4]) === isnum(b[4])) return a.slice(4) < b.slice(4) ? -1 : 1;
                return isnum(a[4]) ? 1 : -1;
            }
            return order.indexOf(a.slice(0, 3)) < order.indexOf(b.slice(0, 3)) ? -1 : 1;
        }).join("\n\t").replace(/\$n\$/g, '\\n');

    const toc = [];
    html.replace(/\n\t\t<h(\d)>(.*)<\/h\1>/g, function makeToc(m, /** @type {number} */ i, /** @type {string} */ t) {
        if (!name.endsWith(t) && i < 4) {
            toc.push(
                new Array(Number(i)).join("    ") + ([0, 0, "• ", "- "][i] || "") +
                `<a href="" onclick="jumpTo('${t.replace(/<.*?>/g, "")}')">${t.replace(/(<sup>|$)/, "</a>$1")}<br>`);
        }
        return "";
    });
    if (toc.length) {
        toc.unshift("<b>Content:</b><br>");
        toc.unshift('\n\t\t<div class="samp samp-inline" style="font-size:revert; padding:10px 15px">');
        toc.push("</div>\n\n\t\t");
    }

    html = html
        // table of contents
        .replace(/("content">\n\t\t)/, `$1${toc.join("\n\t\t")}`)
        // popup object list
        .replace(/%p/, popList)
        // additional notes
        .replace(/<(premium|deprecated|xfeature)(.*?)>/g,
            (m, /** @type {string} */ n, a) => hints[Number(n)].replace("%s", a))
        // colored passages
        .replace(/<(red|greed|blue|grey)>(.*?)<\/\1>/g, '<$1>$2</$1>')
        // some html char placeholders
        .replace(/&(.+?);/g, (m, /** @type {keyof typeof _htm} */ v) => _htm[v] || m)
        // remove special whitespace from tables
        .replace(/([\n\t ]+)(<\/?t([rhd]|head|body|able))/g,
            (m, /** @type {string} */ w, t) => w.replace(/\t/g, "    ").replace(/ /g, ' ') + t)

        // text indentation
        .replace(/((\n\t{1,3})(    )+)((.*?<br>\1?)+)/g, (m, /** @type {string} */ w, t, _1, /** @type {string} */ c, _2) =>
            `${t}<span style="display:inline-block;padding-left:${w.split("    ").length - 1}em;">` +
            `${c.replace(RegExp(w + "|^|$", 'g'), w.replace(/    /g, '\t')).slice(0, -1)}</span><br>`)
        .replace(/((\n\t{1,3})(    )+)((.*?<br>\1?)+)/g, (m, /** @type {string} */ w, t, _1, /** @type {string} */ c, _2) =>
            `${t}<span style="display:inline-block;padding-left:${w.split("    ").length - 1}em;">` +
            `${c.replace(RegExp(w + "|^|$", 'g'), w.replace(/    /g, '\t')).slice(0, -1)}</span><br>`)
        .replace(/((\n\t{1,3})(    )+)((.*?<br>\1?)+)/g, (m, /** @type {string} */ w, t, _1, /** @type {string} */ c, _2) =>
            `${t}<span style="display:inline-block;padding-left:${w.split("    ").length - 1}em;">` +
            `${c.replace(RegExp(w + "|^|$", 'g'), w.replace(/    /g, '\t')).slice(0, -1)}</span><br>`);
    // .replace(/(^|\n)([\t ]*- )(.*)/g, '$1$2<span style="display:inline-block">$3</span>')

    // replace <js> and <bash> tags with sample
    html = html.replace(
        /(\s|<br>)*<(js|bash|smp|txt|java|json|xml|col)\b(( |nobox|noinl|#[0-9a-f]+)*)>(\s|<br>)*([^]*?)(\s|<br>)*<\/\2>((\s|<br>)*)/g,
        function markupCode(m, w1, /** @type {string} */ langId, /** @type {string} */ soptions, _1, _2, /** @type {string} */ code, _3, w2, _4) {
            const options = soptions.split(" ");
            if (w1) w1 = m.slice(0, m.indexOf(`<${langId}`));
            if (Prism.languages[langId]) {
                /** @type {string[]} */
                const tags = [];
                code = code
                    .replace(/<br>/g, "")
                    .replace(/&#160;/g, "§s§")
                    .replace(/\s*<[^\s​].*?>/g, (t) => (tags.push(t), "§t§"));
                code = Prism.highlight(code, Prism.languages[langId], langId)
                    .replace(/\n/g, "<br>\n")
                    .replace(/§t§(<\/span>)?/g, (_m, s) => (s || '') + tags.shift())
                    .replace(/§s§/g, "&#160;")
                    .replace(/(<span.*em;">)<br>/g, '<br>$1');
            }

            const col = soptions.match(/#[0-9a-f]+/) || [''];
            const spanStyle = col[0] && ` style="color:${col[0]}; font-family:Courier,monospace; padding:0px 2px;"`;
            let spanClass = '';

            if (has(options, "nobox")) spanClass = '';
            else if (has(code, "<br>") || has(options, "noinl")) return `</p>\n${newCode(code)}\t\t<p>`;
            else spanClass = ' class="samp samp-inline"';
            if (spanClass || spanStyle) code = `<span${spanClass}${spanStyle}>${code}</span>`;
            return `${w1 || ''}${code}${w2 || ''}`;
        });

    //.replace(/(\n\t+(    )+)(<b .*?>)?([^]*?)(<\/b>)?<br>/g, (m, w, _, b1, t, b2) =>
    //	w + `${b1||''}<span style="display:inline-block">${t}</span>${b2||''}<br>`)
    html = html
        // remove leading whitespace in <p> tag
        .replace(/<p>(<br>|\s+)+/g, "<p>")
        // remove trailing whitespace in <p> tag
        .replace(/(<br>|\s)+<\/p>/g, "</p>")
        // remove empty <p> tags
        .replace(/\n?\t*<p><\/p>/g, "")
        // remove escaped linebreaks
        .replace(/\\<br>/g, "")
        // remove trailing <br> tags from table
        .replace(/(<\/?(t([rdh]|head|body|able))[^>]*>)<br>/g, "$1")
        // indent line breaks
        .replace(/\n\s*<br>\n(\s+)/g, (m, /** @type {string} */ w) => `\n${w.replace(/ /g, " ")}<br>\n${w}`)
        // remove trailing whitespace
        .replace(/[ \t]+\n/g, "\n");

    if (dbg) app.UpdateProgressBar(state.progress, state.curScope + '.' + name + " write changes");
    return html;
}

/** returns an html formatted description of a function
 * @param {DSInput} inpt
 * @param {GenState} state
 * @param {string} desc
 * @param {any} name
 * @param {boolean} hasData
 */
function formatDesc(inpt, state, desc, name, hasData) {
    desc = desc.charAt(0).toUpperCase() + desc.slice(1);

    const samplesJs = getSamples(inpt.scope, state, name);
    const samplesPy = getSamples(inpt.scope, state, name, "-py");
    let sampcnt = keys(samplesJs).length;
    if (!has(desc, '.')) desc += '.';

    desc = desc.replace(/(\s|<br>)*<sample( Python| (.*?))?(( |norun)*)>([^]*?)<\/sample\2?>/g,
        (m, _, py, title, opt, _1, code) => {
            sampcnt++;
            title = title || sampcnt + 1;
            (py.includes('Python') ? samplesPy : samplesJs)[title] =
                { code, name: title, index: sampcnt, opt };
            return `<sample ${title}>`;
        });

    desc = `<p>${replaceTypes(inpt, state, addMarkdown(replW(desc)))} </p>`;

    if (hasData) {
        // replace %c with constructor if existent, otherwise insert after first dot
        desc = desc.replace(
            /((?=.*%c)\.?(\s|<br>)*%c|((?!.*%c)\.)(\s|<br>|$)+)/,
            `.</p>\n${newCode("%c")}\t\t<p>`);
    }
    // exclude <h> and <table> tags from <p>
    return desc.replace(
        /(<\/p>)?(<br>)?(<(h\d?|table)>[^]*?<\/\4>)(\s|<br>|<p>)*/g,
        "</p>\n\t\t$3\n\t\t<p>")
        // format html code on linebreaks
        .replace(/\s*<br>\s*/g, "<br>\n\t\t")
        // expandable samples (per <sample name> tag or add to desc)
        .replace(/<sample (.*?)>/g, (m, /** @type {string} */ t) =>
            `</p>\n\t\t${toHtmlSamp(t, samplesJs[t], samplesPy[t], state) + (delete samplesJs[t], '')}<p>`)
        .replace(/(“.*?”)/g, "<docstr>$1</docstr>")
        + keys(samplesJs).map(t => toHtmlSamp(t, samplesJs[t], samplesPy[t], state)).join("");
}

/**
 * @param {DSFunction} f
 * @returns {DSMethod}
 * */
function fillMissingFuncProps(f) {
    if (!f.name) Throw(Error(`missing name in ${tos(f)}`));

    // default descriptions and capitalizing
    if (!f.desc) {
        f.desc = f.name[0] + f.name.slice(1)
            .replace(/([A-Z]+)/g, " $1").toLowerCase();
    }

    if (!f.shortDesc?.trim())
        f.shortDesc = f.desc.split(/\.\s/)[0];

    // start upper case without trailing dot
    f.shortDesc = f.shortDesc.charAt(0).toUpperCase() +
        f.shortDesc.slice(1, f.shortDesc.endsWith('.') ? -1 : undefined);

    f.desc = f.desc.replace(/%(\w+)%/g, (m, /** @type {string} */ t) => conf.tmpl[t] || Throw(`template ${t} not found`) || '');
    f.shortDesc = f.shortDesc.replace(/%(\w+)%/g, (m, /** @type {string} */ t) => conf.tmpl[t] || Throw(`template ${t} not found`) || '');

    if (f.pNames === undefined) f.pNames = [];
    if (f.pTypes === undefined) f.pTypes = [];
    return /** @type {DSMethod} */ (f);
}

/** converts a function object into an html snippets object
 * @param {DSInput} inpt
 * @param {GenState} state
 * @param {DSMethod} f */
function getDocData(inpt, state, f, useAppPop = false) {
    const { base } = inpt;
    /** @type {string[]} */
    const mArgs = [];
    let i, fretval = "";

    // abbrev for controls
    if (f.name && isControl(inpt.scope, f.name) && !f.abbrev)
        f.abbrev = getAbbrev(f.name);

    // convert constructor line
    for (i in f.pNames) {
        if (useAppPop) {
            // @ts-ignore
            mArgs.push(newAppPopup(f.pNames[i], typeDesc(f.pTypes[i]))
                .replace(/<\/?\w+?>/g, ""));
        }
        else {
            const type = f.pTypes[i];
            mArgs.push(toArgPop(inpt, state, f.pNames[i], type));
        }
    }

    const smArgs = mArgs.length ? String(mArgs) + " " : "";

    // convert return value
    if (f.retval)
        fretval = (f.pNames.length ? "\n\t\t\t" : " ") + "→ " + typeDesc(inpt, state, f.retval);

    // return data if there are no subfunction
    if (!f.subf || !keys(f.subf).length)
        return { args: smArgs, ret: fretval, mets: "" };

    let k, methods = "";
    // function list
    const mkeys = keys(f.subf).filter(nothidden).sort(sortAsc);

    if (dbg) app.UpdateProgressBar(state.progress, state.curScope + '.' + f.name + " generate subfunctions");
    for (k = 0; k < mkeys.length; k++) {
        let met = f.subf[mkeys[k]], retval = "";

        // load base func
        met = unwrapBaseFunc(met, base);

        state.curSubf = met.name = met.name || mkeys[k];
        // force use of entry name
        //if (mkeys[k].endsWith('!')) met.name = mkeys[k].slice(0, mkeys[k].length - 1);

        if (hidden(state.curSubf)) continue;

        const m = fillMissingFuncProps(met);

        //convert return value
        if (m.retval)
            retval = (!m.isval && m.pNames.length ? "\n\t\t\t" : " ") + "→ " + typeDesc(inpt, state, m.retval);

        //convert function types
        let mdesc = m.desc || "";
        if (!m.isval) mdesc = `<b>${f.abbrev}.${state.curSubf}</b><br>` + mdesc;

        let metpop = newPopup(state, "dsc", state.curSubf,
            addMarkdown(replaceTypes(inpt, state, replW(mdesc), true)),
            getAddClass(m, state) || (has(inpt.baseKeys, state.curSubf) ? ' class="baseFunc"' : ""));

        if (m.isval) {
            metpop = metpop.trim();
        }
        else {
            const args = [];
            for (i in m.pNames)
                args.push(toArgPop(inpt, state, m.pNames[i], m.pTypes[i]));
            metpop += args.length ? `(${args.join(",")} )` : "()";
        }

        // indent subtype declarations
        if (has(state.curSubf, '.'))
            metpop = state.curSubf.split(".").fill("  ").join("") + metpop.italics();

        methods += subfBase.replace(m.isval ? "\n\t\t" : "", "").replace("%s", metpop + retval);
    }
    state.curSubf = "";

    return { args: String(mArgs) + " ", mets: methods, ret: fretval };
}

/** read and return html converted example snippets file
 * @param {DSScope} scope
 * @param {GenState} state
 * @param {string} func
 * @param {string} ext
 */
function getSamples(scope, state, func, ext = "") {
    /** @type {Obj<Sample>} */
    const samples = {};
    let index = 0;

    const filePath = getSrcDir(D_SCOPE, state, `samples/${func}${ext}.txt`);
    if (ext && !app.FileExists(filePath)) {
        const jsFilePath = getSrcDir(D_SCOPE, state, `samples/${func}.txt`);
        const jsSource = ReadFile(jsFilePath, "").replace(/\r/g, '');
        if (jsSource.trim()) app.WriteFile(filePath, translatePython(jsSource));
    }

    const source = ReadFile(filePath, " ", !ext && !scope[func].isval).replace(/\r/g, '');
    source.replace(/<sample( (.*?))?(( |norun)*)>([^]*?)<\/sample\1?>/g,
        (m, py, name, opt, _1, code) => {
            index++;
            name = name || index + 1;
            samples[name] = { code, name, index, opt };
            return "";
        }
    );

    return samples;
}

/** @param {string} code */
function formatCode(code, langId = "js") {
    code = code.trim().replace(/<\/?b>/g, "§b§");
    code = Prism.highlight(code, Prism.languages[langId], langId)
        .replace(/\t/g, "    ")
        .replace(/ {4}/g, "&#160;&#160;&#160;&#160;")
        .replace(/\n/g, "<br>\n\t\t\t\t");
    return code;
}

/** @param {string} jsCode */
function translatePython(jsCode) {
    return jsCode
        .replace(/\s*[{}] *(\n)?/g, '$1')
        .replace(/\bfunction\b (\w+\([^\n]*\))/g, 'def $1: ')
        .replace(/\/\/([^\n]*)/g, '# $1')
        .replace(/\/\*(.*?)\*\//g, '"""$1"""')
        .replace(/else\s+if\s*\(([^\n]*)\) */g, 'elif $1:')
        .replace(/\b(if|for|while)\b\s*\(([^())]*|[^()]*\([^()]*\)[^()]*) *\) *(;?)/g, '$1 $2: $3')
        .replace(/\bcatch\b\s*\(([^\n]*)\) */g, 'except $1:')
        .replace(/\b(else|try|do)\b */g, '$1: ')
        .replace(/\b(var|let|const)\b (\w+)/g, '$2')
        .replace(/:;\n/g, ': pass\n')
        .replace(/; *(<\/b>|\n)/g, '$1')
        .replace(/: +\n/g, ':\n');
}

/** convert a sample to html code
 * @param {string} name
 * @param {Sample} jsSample
 * @param {Sample} pySample
 * @param {GenState} state
 */
function toHtmlSamp(name, jsSample, pySample, state) {
    if (!pySample) { // test
        pySample = { ...jsSample };
        pySample.code = translatePython(jsSample.code);
    }
    if (!jsSample) Throw(Error(`Js sample '${name}' not found for '${state.curFunc}'.`));
    if (!pySample) Throw(Error(`Py sample '${name}' not found for '${state.curFunc}'.`));

    const jsCode = formatCode(jsSample.code);
    const pyCode = formatCode(pySample.code, "python");

    const run = !has(jsSample.opt, "norun");
    const hasBold = has(jsSample.code, "<b>") && jsSample.code.indexOf("</b>") > jsSample.code.indexOf("<b>");
    if (!hasBold) Warn(`${state.curDoc} sample "${name || ''}" has no bold area\n`);

    return htmlSample(name, String(jsSample.index), jsCode, pyCode, hasBold, run);
}

/**
 * @param {string | undefined} desc
 * @param {GenState} state
 */
function unwrapDesc(desc, state) {
    if (!desc || !desc.startsWith('#')) return desc || '';
    return ReadFile(getSrcDir(D_SCOPE, state, 'desc/' + desc.slice(1)), "").replace(/\r/g, '');
}

/**
 * @param {DSFunction} m
 * @param {GenState} state
 */
function getAddClass(m, state) {
    if (!m || typeof m.desc !== "string") return '';
    const desc = unwrapDesc(m.desc, state);
    if (!desc) return '';

    if (has(desc, "<deprecated")) return ' class="deprHint"';
    if (has(desc, "<xfeature")) return ' class="xfeatHint"';
    if (has(desc, "<premium")) return ' class="premHint"';
    return '';
}

/** returns a formatted description of a type - used for subfunction return values
 * @param {GenState} state
 * @param {DSInput} inpt
 * @param {string} stypes */
function typeDesc(inpt, state, stypes) {
    /** @type {{tname: Obj<string>, tdesc: Obj<string>}} */
    const { tname: tName, tdesc: tDesc } = conf;
    const types = stypes.split("||").map((/** @type {string} */ type) => [type.slice(0, 3)]
        .concat(type
            // custom type desc
            .replace(/^(...):([^-]*)/, (m, /** @type {string} */ btype, desc) =>
                (tDesc[btype + "_tmp"] = desc, btype + "_tmp"))
            // sample vals
            .replace(/-/, '\x01').split('\x01')
        )
    );

    let last = "";
    const s = types.map(
        (/** @type {any[]} */ type, _i) => ((last = "</b>", tName[type[0]]) ?
            "<b>" + tName[type[0]] + (tDesc[type[1]] ?
                (last = "</i>", ":</b> <i>" + tDesc[type[1]]) : ""
            ) + (type[2] ? `:${last} ` : last) : "")
    );

    let ss = types.map(
        function formatTypePop(type, i) {
            if (!s[i] || type.length < 3)
                return s[i] || Throw(Error("unknown type " + type[1]));

            //allow limited values for parameters
            switch (type[0]) {
                case "num": return s[i] + rplop(type[2]);
                case "str": return s[i] + rplop(type[2], true);
                case "lst":
                case "obj":
                case "jso": return s[i] + replaceTypes(inpt, state, type[2], false);
                default:
                    if (!type[0].endsWith("o"))
                        Throw(Error("unknown typex " + type[1]));
                    if (state.curDoc.endsWith(type[2] + ".htm"))
                        return s[i] + type[2];
                    if (!type[2].startsWith("@") && !inpt.scope[type[2]])
                        Throw(Error("link required for " + type[2]));
                    return s[i] + newLink(type[2].replace("@", "") + (type[2].match(/\.\w{2,5}$/) ? "" : ".htm"),
                        type[2].replace(/@.*\/|\.\w{2,5}$/g, "").replace(regConPrefix, ""));
            }
        }).join("<br>\n\t\t\t").replace(/(“.*?”)/g, "<docstr>$1</docstr>");

    if (types.length > 1) ss = '<span style="display:inline-block;vertical-align: middle;">' + s + "</span>";
    return ss;
}

/** nearly equal to typeDesc, but returns an app.popup for arguments
 * @param {DSInput} inpt
 * @param {GenState} state
 * @param {string} name
 * @param {DSFunction | string} stypes
 * @param {boolean} [doSwitch]
 */
function toArgPop(inpt, state, name, stypes, doSwitch) {
    if (Array.isArray(stypes)) return "";
    /** @type {{tname: Obj<string>, tdesc: Obj<string>}} */
    const { tname: tName, tdesc: tDesc } = conf;

    // function callbacks
    if (typeof stypes === "object") {
        if (stypes.pNames === undefined) stypes.pNames = [];
        let s1 = newPopup(state, "fnc", name,
            ("<b>function</b>(\n\t\t" + stypes.pNames.map(
                function makeFuncPop(n, i) {
                    if (Array.isArray(stypes) || !stypes.pTypes) return "";
                    const val = stypes.pTypes[i];
                    if (typeof val === "object" || has("lst,obj", val.slice(0, 3)))
                        // for lists and objects in callback parameters switch popups
                        return toArgPop(inpt, state, n, val, true);
                    return toArgAppPop(n, val);
                }
            ).join(",\n\t\t") + "\n\t)").replace(/\(\s+\)/, "()"), false
        );
        if (doSwitch) s1 = s1.trim().replace(/href="#pop_(..._...)"/, 'href="" ' + switchPop);
        return s1;
    }

    // multiple types
    const types = stypes.split("||").map(
        (/** @type {string} */ type) => [type.slice(0, 3)]
            .concat(type
                // custom type desc
                .replace(/^(...):'([^']*)'/, (m, /** @type {string} */ btype, desc) =>
                    (tDesc[btype + "_tmp"] = desc, btype + "_tmp"))
                .replace(/^(...):([^-']*)/, (m, /** @type {string} */ btype, desc) =>
                    (tDesc[btype + "_tmp"] = desc, btype + "_tmp"))
                // sample vals
                .replace(/-/, '\x01').split('\x01')
            )
    );

    // start of type desc string. (tips: [optional], [:] if followed by value)
    // <b>type[:]</b> [[<i>desc[:]</i>] values]
    let last = "";
    const s2 = types
        .map((/** @type {any[]} */ type, _i) => "<b>" + tName[type[0]] +
            (last = "</b>", tDesc[type[1]] ?
                (last = "</i>", ":</b> <i>" + tDesc[type[1]]) : ""
            ) + (type[2] ? `:${last} ` : last)
        );

    // add formatted possible values
    const str = types.map(function formatTypePop(type, i) {
        if (type.length < 3) return s2[i];
        switch (type[0]) {
            case "num":
            case "str":
            case "bin":
                if (type.length === 3 && has(type[2], ':'))
                    type[2] = replaceTypes(inpt, state, type[2], true);
                return s2[i] + rplop(type[2], type[0] === "str");
            case "lst":
            case "obj": return s2[i] + replaceTypes(inpt, state, replW(type[2]), true);
            default:
                if (!type[0].endsWith("o"))
                    Throw(Error("unknown typex " + type[1]));
                if (state.curDoc.endsWith(type[2] + ".htm"))
                    return s2[i] + type[2];
                if (!type[2].startsWith("@") && !inpt.scope[type[2]])
                    Throw(Error("link required for " + type[2]));
                return s2[i] + newLink(type[2].replace("@", "") + (type[2].match(/\.\w{2,5}$/) ? "" : ".htm"),
                    type[2].replace(/@.*\/|\.\w{2,5}$/g, "").replace(regConPrefix, ""));
        }
    });

    // build popup id, "std_type" for common or "type_index" for individual popups
    // save popup definition and return popup text (= link)
    if (types.length === 1) {
        const type = types[0];
        if (type[1].endsWith("_tmp")) type[2] = "true";
        const popId =
            (type[1].match("_") || type[2] ? "" : "std_") +
            (!type[2] ? type[1].replace("?", "ukn") :
                type[0] + "_" + incpop(state, type[0], 1)
            );
        if (popId.match(/[^_\w]/)) Throw(Error("invalid popup id " + popId));

        let s3 = newPopup(state, popId, name, str[0].replace(/ShowPopup\('.*?'\)/g,
            (/** @type {string} */ m) => m.replace(/“/g, "&ldquo;").replace(/”/g, "&rdquo;")), "");
        if (doSwitch) s3 = s3.trim().replace(/href="#pop_(..._...)"/, 'href="" ' + switchPop);
        return s3;
    }
    return newPopup(state, "mul", name, str.join("<br>"));
}

/**
 * @param {string} name
 * @param {string} stypes
 */
function toArgAppPop(name, stypes) {
    /** @type {{tname: Obj<string>, tdesc: Obj<string>}} */
    const { tname: tName, tdesc: tDesc } = conf;

    const types = stypes.split("||")
        .map((/** @type {string} */ type) => [type.slice(0, 3)]
            .concat(type.replace('-', '\x01')
                .split('\x01'))
        );

    return newAppPopup(
        name, types.map(
            (/** @type {string | any[]} */ type) => tName[type[0]].replace(/<[^>]*>/g, '') +
                (tDesc[type[1]] ? ": " + tDesc[type[1]] : "") +
                (type.length === 3 ? ": " + rplop(type[2], type[0] === "str") : "")
        ).join("\\n")
    );
}

/** replace whitespace with html syntax whitespace
 * @param {string} s
 */
function replW(s, n = true) {
    return s
        .replace(/\\\/\\\//g, '#')
        .replace(/\n|\\n/g, n ? "<br>" : "\n")
        .replace(/\t/g, "    ")
        .replace(/ {2}/g, "&#160;&#160;");
}

/** increase special popup counters and returns its id
 * @param {GenState} state
 * @param {string} type
 * @param {number} i
 */
function incpop(state, type, i) {
    if (i) state.spop[type] += i;
    return hex(state.spop[type] || 0);
}

/** accept formats: "name":"desc" name:type name:"types" name:"type-values"
 * using name:'...' will force app popups
 * @param {DSInput} inpt
 * @param {GenState} state
 * @param {string} descStr
 * @param {boolean} [useAppPop]
 */
function replaceTypes(inpt, state, descStr, useAppPop) {
    /** @type {{tname: Obj<string>, tdesc: Obj<string>}} */
    const { tname: tName, tdesc: tDesc } = conf;

    const tags = /** @type {string[]} */ ([]);
    if (useAppPop) descStr = descStr.replace(/<(style|a)\b.*?>.*?<\/\1>|style=[^>]*/g, '');
    else descStr = descStr.replace(/\s*<[^\s​].*?>/g, (m) => (tags.push(m), `§t${tags.length - 1}§`));

    descStr = descStr.replace(/(\b([\w_.#-]+)|"([^"]*)"):([a-z]{3}(_[a-z]{3})?\b)?-?("(\\"|[^"])*|'(\\'|[^'])*| ?\w(\\[\s\S]|[^.,:”<|}\]])*)?['"]?/g,
        function formatDescType(m, _1, /** @type {string} */ name, /** @type {string} */ aname, /** @type {string} */ type, _2, /** @type {string} */ desc) {
            let r, space = '', tapop = false;
            if (!name) name = aname;
            if (!type && (!desc || desc[0] === ' ') || name.startsWith("Note")) return m;

            if (desc) {
                if (desc.endsWith(' ')) space = ' ';
                desc = desc.replace(/\\(["'])/g, "$1").slice(Number(desc[0] === '"'), space ? -1 : undefined);
                if (desc[0] === "'") { tapop = true; desc = desc.slice(1); }
                if (tName[desc.slice(0, 3)] && (!desc[4] || !desc[4].match(/[a-z]/i))) { type = desc; desc = ''; }
            }

            if (type) {
                if (tName[type.slice(0, 3)]) { if (desc) { type += '-' + desc; desc = ''; } }
                else { desc = type + (desc || ''); type = ''; }
            }

            if (useAppPop || tapop) {
                if (type && !desc) { r = toArgAppPop(name, type); }
                else {
                    r = newAppPopup(name, type ? tName[type.slice(0, 3)] +
                        (tDesc[type] ? ": " + tDesc[type] : "") : desc.replace(/\\n|\n/g, '$n$'));
                }
            }
            else if (type) { r = toArgPop(inpt, state, name, type.replace(/§t(\d+)§(<\/span>)?/g, (_m, i, s) => (s || '') + tags[i])); }
            else { r = newPopup(state, "dsc", name, desc.replace(/§t(\d+)§(<\/span>)?/g, (_m, i, s) => (s || '') + tags[i])); }

            return r + space;
        }
    );
    return descStr.replace(/§t(\d+)§(<\/span>)?/g, (m, i, s) => (s || '') + tags[i]);
}

/** convert markdown symbols to html
 * @param {string} s */
function addMarkdown(s) {
    return s
        // links
        .replace(/([^\\]|^)\[([^\]}]*)\]\((.*?)\)/g, function replaceMdLinks(match, /** @type {string} */ white, name, /** @type {string} */ url) {
            if (name && !url) url = name;
            if (!name && url) name = url;
            // web link ? external : internal
            return white + (url.startsWith("http") ?
                `<a href="${url}" onclick="return OpenUrl(this.href);">` :
                `<a href="${url}" data-ajax="false">`)
                + `${name}</a>`;
        })
        // link + onclick
        .replace(/([^\\]|^)\[([^\]}]*)\]{(.*?)}/g, function replaceMdActions(match, /** @type {string} */ white, name, /** @type {string} */ script) {
            script = script.replace(/"/g, "&quot;").replace(/([*_`~])/g, "\\$1");
            return white + `<a href="" onclick="${script}">${name}</a>`;
        })
        .replace(/(<br>|^)(#+) ([^<]*)/g, (_, /** @type {string} */ white, /** @type {string | any[]} */ h, /** @type {string} */ title) =>		// ## headline
            white + `<h${h.length}>${title.replace(/ (\(.+?\))/, "<sup>$1</sup>")}</h${h.length}>`)
        //.replace(/([^\\]|^)\*\*(\s*[a-z][^]*?[^\\])\*\*/gi, "$1<strong>$2</strong>")
        .replace(/([^\\]|^)\*\*([a-z][a-z0-9:]{3,}?)\*\*/gi, "$1<strong>$2</strong>")   // **bold**
        .replace(/([^\\]|^)\*\*([^]*?[^\\])\*\*/g, "$1<b>$2</b>")   // **bold**
        .replace(/([^\\]|^)__([^]*?)__/g, "$1<u>$2</u>")			// __underlined__
        .replace(/([^\\]|^)\*([^]*?[^\\])\*/g, "$1<i>$2</i>")		// *italic*
        .replace(/([^\\]|^)_([^]*?[^\\])_/g, "$1<i>$2</i>")			// _italic_
        .replace(/([^\\]|^)`([^]*?[^\\])`/g, "$1<kbd>$2</kbd>")		// `monospace`
        //.replace(/([^\\]|^)```([^]*?[^\\])```/g, "$1<kbd>$2</kbd>")   // `monospace`
        .replace(/([^\\]|^)~~([^]*?[^\\])~~/g, "$1<s>$2</s>")		// ~~strikethrough~~
        // additional notes
        .replace(/<(premium|deprecated|xfeature)(.*?)>/g, (m, /** @type {string} */ n, a) => hints[n].replace("%s", a))
        .replace(/([^\\]|^)@(([^/\n<>, ]+\/)*(\w+?))(#(\w+))?\b/gi, (m, b, n, _, f, H, h) =>  // @DocReference
            `${b}<a href="${n}.htm${(H || '').replace(/_/g, ' ')}" data-ajax="false">${(h || f).replace(/_/g, ' ')}</a>`)
        .replace(/\\([_*~@])/g, "$1");								// consume \ escaped markdown
}

/** convert int to 3-digit hex
 * @param {number} v */
function hex(v) { return ("00" + v.toString(16)).replace(/^0+(...)/, "$1"); }
/** returns the type name or description of a value or the value itself
 * @param {string} v */
//function getv(v) { return tDesc[v] || tName[v] || v; }
/** returns a comma separated list of object keys
 * @param {any} o */
//function skeys(o) { return String(keys(o)); }
/** replaces \ paceholders with its placeholder 'name'
 * @param {string} s */
//function reprs(s) { return s.replace(/\n/g, "\\n").replace(/\t/g, "\\t"); }
/** replace "&" and "|" operators with "and" and "or"
 * @param {string} s
 * @param {boolean} [n]
 */
function rplop(s, n) {
    s = s
        .replace(/([^\\]|^)\\(.)/g, (m, e, /** @type {string} */ c) =>
            `${e || ''}§${(special[c] || c).charCodeAt(0)}§`)
        .replace(/\|/g, n ? "” or “" : " or ")
        //.split(',').sort(sortAsc).join(n ? "”, “" : ", ")
        .replace(/,/g, n ? "”, “" : ", ")
        .replace(/§(\d+?)§/g, (m, /** @type {number} */ c) =>
            String.fromCharCode(Number(c)));
    return replW(n ? '“' + s + '”' : s);
}
/**
 * @param {string | Error} e
 * @returns {never}
 */
function Throw(e) { throw e; }
/** @param {string} msg */
function Warn(msg) { if (warnEnbl) console.error("Warning: " + msg); }
/**
 * @param {string} link
 * @param {string} text
 * @param {string} [add]
 */
function newNaviItem(link, text, add) { return naviItem.replace("%s", link).replace("%s", add || "").replace("%s", text); }
/**
 * @param {string} id
 * @param {string} text
 * @param {string | false} [add]
 */
function newTxtPopup(id, text, add) { return txtPopup.replace("%s", id).replace("%s", add || "").replace("%s", text); }
/**
 * @param {string} id
 * @param {string} text
 */
function newDefPopup(id, text) { return defPopup.replace("%s", id).replace("%s", text); }
/**
 * @param {string} name
 * @param {string} desc
 */
function newAppPopup(name, desc) { return appPopup.replace("%s", desc.replace(/\n|<br>/g, '\\n').replace(/'/g, "\\\\'")).replace("%s", name); }
/**
 * @param {string} target
 * @param {string} text
 */
function newLink(target, text) { return `<a href="${target}" data-ajax="false">${text}</a>`; }
/** @param {string} code */
function newCode(code) { return codeBase.replace("%s", code); }

/**
 * @param {GenState} state
 * @param {string} type
 * @param {string} name
 * @param {string} desc
 * @param {string | false} [addClass]
 */
function newPopup(state, type, name, desc, addClass) {
    if (addClass !== false) desc = desc.replace(/(“.*?”)/g, "<docstr>$1</docstr>");

    desc = desc.trim();
    let popId = state.popDefs[desc];
    if (!popId) {
        popId = state.spop[type] === undefined ? type : popId = type + "_" + incpop(state, type, 1);
        state.popDefs[desc] = popId;
    }

    return newTxtPopup(popId, name, addClass);
}


/* % placeholder descriptions in the html base strings
    %t: title name
    %n: navigator object
    %i: example number
    %d: description
    %c: constructor
    %s: sample code or anything else
    %b: method body [subfHead]
    %f: method list [subfBase]
    %p: popup  list [defPopup] % (id, text)
                    [txtPopup] % (id, text)
                    [appPopup] % (desc, type)
*/

// html templates
// subfunction
subfBase = '\t\t<div class="samp">%s\n\t\t</div>\n';
// navigator list item
naviItem = '\n\t\t\t<li><a href="%s"%s>%s</a></li>';
// reopen popup onclick code
switchPop = 'onclick="switchPopup(this, \'#pop_$1\')"';
// app-popup tag
appPopup = '<a href="" onclick="app.ShowPopup(\'%s\')">%s</a>';
// constructor and inline examples
codeBase = '\n\t\t<div class="samp">\n\t\t%s\n\t\t</div>\n\n';
// jquery-popup link tag
txtPopup = '\n\t\t\t<a href="#pop_%s" data-transition="pop" data-rel="popup"%s>%s</a>';
// popup object
defPopup = '<div data-role="popup" id="pop_%s" class="ui-content">%s</div>';
// subfunction list
subfHead = `<h3>Methods</h3>\n\t\t<p><br>The following methods are available on the <strong>%t</strong> object:</p>\n\n%f`;
/** @type {Obj<string>} */
hints = {
    deprecated: "<div class='deprHint'><strong>Note: This function is deprecated.%s</strong></div>",
    premium: "<div class='premHint'><strong>Note: This function is a premium feature. Please consider subscribing to Premium to use this feature and support DroidScript in its further development.</strong></div>",
    xfeature: "<div class='xfeatHint'><strong>ATTENTION: This function is available in the DS X-Versions only as it doesn't meet the GooglePlay security requirements. APKs built with X-Versions are for private use only.</strong></div>",
};

function htmlSample(title = "", id = "", codeJs = "", codePy = "", bold = false, run = false) {
    if (bold) codeJs = codeJs.replace(/§b§([^]+?)§b§/g, `<b id="snip${id}" class="code-js" style="font-size:100%">$1</b>`);
    if (bold) codePy = codePy.replace(/§b§([^]+?)§b§/g, `<b id="snip${id}" class="code-py" style="font-size:100%">$1</b>`);
    return `
\t\t<div data-role="collapsible" data-collapsed="true" data-mini="true" data-theme="a" data-content-theme="a">
\t\t\t<h3>Example${title && ' - ' + title}</h3>
\t\t\t<div id="examp${id}" class="code-js" style="font-size:70%">
\t\t\t\t${codeJs}
\t\t\t</div>
\t\t\t<div id="examp${id}" class="code-py" style="font-size:70%">
\t\t\t\t${codePy}
\t\t\t</div>
\t\t\t<div name="divCopy" align="right">
\t\t\t${bold ? `<a href="#" data-role="button" data-mini="true" data-inline="true" onclick="copy( 'snip${id}' )">&#160;&#160;&#160;&#160;Copy&#160;&#160;&#160;&#160;</a>
\t\t\t` : ''}<a href="#" data-role="button" data-mini="true" data-inline="true" onclick="copy( 'examp${id}' )">Copy All</a>
\t\t\t${run ? `<a href="#" data-role="button" data-mini="true" data-inline="true" onclick="demo( 'examp${id}' )">&#160;&#160;&#160;&#160;&#160;&#160;Run&#160;&#160;&#160;&#160;&#160;&#160;</a>
\t\t\t` : ''}</div>
\t\t</div>\n\n\t\t`.replace(/%i/g, id).replace(/%t/g, title);
}

function getHead(title = "", d = 0) {
    const sd = new Array(d).fill("../").join("");
    return `<head>
\t<title>${title}</title>
\t<meta charset="utf-8">
\t<meta name="viewport" content="width=device-width, initial-scale=1">
\t<link rel="stylesheet" id="themeJQ" href="css/themes/default/theme-dark.min.css"/>
\t<link rel="stylesheet" href="css/themes/default/jquery.mobile.structure-1.2.0.min.css"/>
\t<link rel="stylesheet" id="themePrism" href="css/themes/prism/dark.min.css"/>
\t<link rel="stylesheet" id="themeDocs" href="css/docs-dark.min.css"/>

\t<script src="js/forward.js"></script>
\t<script src="js/energize-min.js"></script>
\t<script src="js/jquery-1.8.1.min.js"></script>
\t<script src="js/jquery.mark.es6.min.js"></script>
\t<script src="../app.js"></script>
\t<script src="js/common.js"></script>
\t<script src="js/example.js"></script>
\t<script src="js/jquery.mobile-1.2.0.min.js"></script>
</head>`.replace(/(href|src)="(?!http|\/)/g, '$1="' + sd);
}

function htmlNavi(title = "", content = "", navs = "", filter = false) {
    return `
<!DOCTYPE html>
<html>

${getHead(title, 0)}

<body>
<div data-role="page" data-theme="a" data-ajax="false" data-add-back-btn="true">

\t<div data-role="header" data-position="fixed">
\t\t<a href="#" class="ui-btn-left" data-icon="arrow-l" onclick="history.back(); return false">Back</a>
\t\t<h1>${title}</h1>
\t\t<a class="ui-btn-right" data-icon="gear" data-iconpos="notext" onclick="tglTheme()"></a>
\t</div><!-- /header -->

\t${content}

\t<div data-role="content">
\t\t<ul data-role="listview" data-inset="true" data-filter="${filter}">
\t\t${navs}
\t\t</ul>
\t</div><!-- /content -->
</div><!-- /page -->
</body>
</html>\n`;
}

function htmlDoc(title = "", desc = "", subf = "", construct = "") {
    title = title.replace(/^\d+\s*/, '');
    return `
<!DOCTYPE html>
<html>
\t
${getHead(title, 1)}
\t
<body>
<div data-role="page" data-theme="a">

\t<div data-role="header" data-position="fixed">
\t\t<a href='#' class='ui-btn-left' data-icon='arrow-l' onclick="history.back(); return false">Back</a>
\t\t<h1>${title}</h1>
\t\t<div class="ui-btn-right" style="font-size:50%">
\t\t\t<a class="code-js" data-role="button" data-inline="true" data-mini="true" onclick="tglMode()">JS</a>
\t\t\t<a class="code-py" data-role="button" data-inline="true" data-mini="true" onclick="tglMode()">Py</a>
\t\t\t<a data-icon="gear" data-role="button" data-inline="true" data-mini="true" data-iconpos="notext" onclick="tglTheme()"></a>
\t\t</div>
\t</div>

\t<div style="position:fixed; top:40px; width:100%; text-align:center; z-index:1101;">
\t\t<div id="appPopup" class="androidPopup">Hello World</div>
\t</div>

\t<div data-role="content">
\t\t${desc.replace("%c", construct)}
\t\t${subf}
\t</div>

\t%p
</div>
</body>
\t
</html>\n`;
}

// ---------------------------- top globs --------------------------------------


/** @param {string} l */
function getl(l) { return l === "en" ? "" : "-" + l; }
/** @param {string} s */
// function l(s) { console.log(`-----${s}-----`); return s; }
/** @param {string} name */
function hidden(name) { return !(force || !name.match(regHide)); }
/** @param {string} name */
function nothidden(name) { return !hidden(name); }
/** @param {string | number} c */
function isnum(c) { return c >= '0' && c <= '9'; }
/** @type {(l:string|string[], v:string) => boolean} */
function has(l, v) { return Boolean(l) && l.indexOf(v) > -1; }
/** @ts-ignore @type {<T extends object>(O: T) => T[keyof T][]} */
// function values(o) { return Object.values(o); }
/** @ts-ignore @type {<T>(O: T) => (Extract<keyof T, string>)[]} */
function keys(o) { return Object.keys(o); }
/**
 * @param {any} a
 * @param {any} b
 */
function sortAsc(a, b) {
    const sa = String(a).replace(/[^a-z0-9]/gi, "") || String(a);
    const sb = String(b).replace(/[^a-z0-9]/gi, "") || String(b);
    const la = sa.toLowerCase(), lb = sb.toLowerCase();
    return la === lb ? sa < sb ? 1 : -1 : la > lb ? 1 : -1;
}

/**
 * @param {DSScope} scope
 * @param {string} name */
function isControl(scope, name) { return Boolean(scope[name].subf); }

/** @param {string} s */
function getAbbrev(s) {
    let count = 0;
    // remove 'Create'
    return s.slice(6)
        // count uppercases
        .replace(/[A-Z]/g, function incC(c) { count++; return c; })
        // remove 'aeiou'
        .replace(/[aeiou]/g, '')
        // remove doubled letters ('tt' -> 't')
        .replace(/(.)\1+/g, '$1')
        // leave lowercase letters while sum(uppercase + lowercase) < 3
        .replace(/[b-z]/g, function maxC3(c) { return ++count > 3 ? '' : c; })
        .slice(0, 3).toLowerCase();
}

/**
 * @param {string} file
 * @param {string} dflt
 * @param {boolean} [write]
 */
function ReadFile(file, dflt, write) {
    if (app.FileExists(file)) return app.ReadFile(file);
    else if (write) app.WriteFile(file, dflt);
    return dflt;
}

/**
 * @template T
 * @param {T} a
 * @param {T} b
 */
function mergeObject(a, b) {
    // inherit old from a / copy new from b
    if (a === undefined || b === undefined) return a || b;
    if (a === null || b === null) return a || b;
    if (typeof b === "object") {
        for (const k in b) {
            if (b[k] === null) delete a[k];
            else if (a[k] === null) throw Error("mergeObject restore deleted property " + k);
            else a[k] = mergeObject(a[k], b[k]);
        }
    }
    // override primitives
    return b;
}

/** converts a variable to indented string
 * supports Boolean, Number, String, Array and Object
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

/**
 * @param {string} p
 * @param {string[]} rest
 * @returns {number}
 */
function newestFileDate(p, ...rest) {
    let files;
    if (rest.length) files = [p, ...rest];
    else if (!p.endsWith('/') && app.FileExists(p)) return app.GetFileDate(p).getTime();
    else if (!app.FolderExists(p)) return 0;
    else files = app.ListFolder(p).map((/** @type {string} */ f) => p + (p.endsWith('/') ? '' : '/') + f);
    return files.length ? Math.max.apply(null, files.map((f) => newestFileDate(f))) : 0;
}

// ---------------------------- nodejs app wrapper -----------------------------


const help = `${process.argv.slice(0, 2).join(" ").replace(rootPath, "")} [OPTIONS] [PATTERNS]
OPTIONS:
    -v  --version=<PATTERN>	version filter pattern
    -c  --clear            	regenerate the docs completely
    -u  --update           	update the docs version number
    -f  --force             force generation of otherwise skipped
    -C  --clean            	delete temp files (out/ files/json/*/)
    -al --addlang=<LANG-CODE>=<LANG-NAME>
                            adds a language to conf.json
    -as --addscope=<SCOPE-ABBREV>=<SCOPE-NAME>
                            adds a scope to conf.json
    -av --addversion=<VERSION>
                            adds a version number to conf.json
    -n  --nogen             don't generate
    -s  --server            start webserver after generating
    -V  --verbose           print more debug logs
    -h  --help              this help

PATTERN:
    generates a scope in each defined language:
    <SCOPE>[.<MEMBER-PATTERN>]
    with specified language:
    <LANG-CODE>[.<SCOPE>[.<MEMBER-PATTERN>]]

MEMBER-PATTERN:
\t                  \tRegEx pattern

EXAMPLES:
\tgenerate.js       \tgenerate all defined languages (in generate.js)
\tgenerate.js en    \tgenerate all english docs
\tgenerate.js en.app\tgenerate english docs of scope 'app'
\tgenerate.js app   \tgenerate docs of scope 'app' in all defined languages
\tgenerate.js app.^C\tgenerate all docs starting with 'C'`;

function getApp() {
    /** @type {App} */
    const _app = {
        ReadFile: (p) => fs.readFileSync(absPth(p), "utf8"),
        WriteFile: (p, s) => fs.writeFileSync(absPth(p), s),
        DeleteFile: (p) => fs.unlinkSync(absPth(p)),
        ListFolder: (p) => fs.readdirSync(absPth(p)),
        MakeFolder: (p) => fs.mkdirSync(absPth(p)),
        CopyFolder: (a, b) => fs.copySync(absPth(a), absPth(b)),
        DeleteFolder: (p) => rimraf.sync(absPth(p)),
        IsFile: (p) => fs.lstatSync(absPth(p)).isFile(),
        IsFolder: (p) => fs.lstatSync(absPth(p)).isDirectory(),
        FileExists: (p) => fs.existsSync(absPth(p)) && fs.lstatSync(absPth(p)).isFile(),
        FolderExists: (p) => fs.existsSync(absPth(p)) && fs.lstatSync(absPth(p)).isDirectory(),
        GetFileDate: (p) => new Date(fs.statSync(absPth(p)).ctime),
        SetDebug: (d) => dbg = d,
        ShowProgressBar: (t) => console.log(t + "\n"),
        UpdateProgressBar: (i, t) => console.log(`\x1b[1A\x1b[K${i}% ${t || 'Initializing'}`),
        HideProgressBar: () => console.log("\n\x1b[1A\x1b[K100% done."),
        ShowPopup: console.log,
        Alert: console.log
    };
    return _app;
}

function main() {
    let startServer = false, clean = false, addcfg = false;
    /** @type {GenPattern} */
    const genPattern = { ver: "", lang: "", scope: "", func: "" };

    for (const spat of process.argv.slice(2)) {
        if (!spat.startsWith("-")) {
            const p = spat.match(/(^[a-z]{2})?(\.|^|$)([a-zA-Z]{2,})?(\.|$)(.*)?/);
            if (!p) throw Error("invalid pattern " + spat);
            genPattern.lang = /** @type {LangKeys} */ (p[5] && p[1]);
            genPattern.scope = /** @type {ScopeKeys} */ (p[5] ? p[3] : p[1]);
            genPattern.func = p[5] || p[3];
            continue;
        }
        const pat = spat.split("=");
        switch (pat[0]) {
            case "-n": case "--nogen": nogen = true; break;
            case "-v": case "--version": genPattern.ver = pat[1]; break;
            case "-V": case "--verbose": dbg = true; break;
            case "-c": case "--clear": clear = true; break;
            case "-C": case "--clean": clean = true; break;
            case "-t": case "--tips": makeTips = true; break;
            case "-d": case "--tsx": makeTsx = true; break;
            case "-u": case "--update": updateVer = true; break;
            case "-f": case "--force": force = true; break;
            case "-h": case "--help": app.Alert(help); process.exit(0);
            // eslint-disable-next-line no-fallthrough
            case "-s": startServer = true; break;
            case "-al": case "--addlang":
                if (pat.length !== 3) Throw(Error("missing option args. expected <code> <name>"));
                if (pat[1].length !== 2) Throw(Error("state.lang code must have 2 digits"));
                addcfg = true;
                //@ts-ignore
                conf.langs[pat[1]] = pat[2];
                break;
            case "-as": case "--addscope":
                if (pat.length < 3) Throw(Error("missing option args. expected <code> <name>"));
                if (pat[1].length < 3) Throw(Error("scope code must have at least 3 digits"));
                addcfg = true;
                //@ts-ignore
                conf.scopes[pat[1]] = pat[2];
                break;
            case "-av": case "--addversion":
                if (pat.length < 2) Throw(Error("missing option args. expected version"));
                // supports alpha, beta and patch versions, although noone might ever use those
                if (!/^v\d{3}([ab]\d(_p\d)?)?$/.test(pat[1])) Throw(Error("version must start with a v and 3 digits"));
                addcfg = true;
                if (!conf.vers.includes(pat[1]))
                    conf.vers.unshift(pat[1]);
                conf.vers.sort().reverse();
                break;
            case "-sv": case "--setversion":
                if (pat.length < 2) Throw(Error("missing option args. expected version"));
                // supports alpha, beta and patch versions, although noone might ever use those
                if (!/^v\d{3}([ab]\d(_p\d)?)?$/.test(pat[1])) Throw(Error("version must start with a v and 3 digits"));
                if (!conf.vers.includes(pat[1])) Throw(Error("unregistered version. add with --addversion=" + pat[1]));
                addcfg = true;
                conf.version = pat[1];
                break;
            default: Throw(Error("Unknown option " + pat[0]));
        }
    }

    if (clean) {
        const glob = require('glob').sync;
        for (const dir of glob(baseDir + '*/' + conf.version)) {
            console.log(`Deleting ${dir} ...`);
            app.DeleteFolder(dir);
        }
        console.log(`Deleting ${outDir} ...`);
        app.DeleteFolder(outDir);
        console.log("done.");
        process.exit();
    }

    if (addcfg) app.WriteFile("conf.json", tos(conf));
    if (!nogen) makeTips = makeTsx = true;

    Generate(genPattern);
    if (startServer) {
        const express = require('express');
        const server = express();
        server.use("/", express.static("../out"));
        server.listen(8081);
        console.log("webserver started on http://localhost:8081");
    }
}

setTimeout(main);
