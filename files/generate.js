
/// <reference path="./types.d.ts"/>

const _glob = require('glob');
/** @type {DSConfig} */
const conf = require("./conf.json");

const { app } = require("./generators/app");
const { generateDoc, htmlNavi, newNaviItem } = require("./generators/generate-htm");
const { generateNavigators } = require("./generators/generate-navs");
const { generateTips } = require("./generators/generate-tips");
const { generateTsx } = require("./generators/generate-tsx");
const { keys, getl, Throw, ReadFile, mergeObject, nothidden, tos, force, getDstDir, D_BASE, D_LANG, getSrcDir, outDir, D_VER, D_SCOPE, baseDir } = require("./generators/util");

//TODO:WebServer,WebSocket,WebSocket conn.Ex.,gfx
/** @type {GenState} */
const dfltState = {
    lang: "en", curVer: "", curDoc: "",
    curScope: "app", curFunc: "", curSubf: "",
    progress: 0, popDefs: {}, spop: {}
};
let nogen = false, clear = false, updateVer = false, makeTsx = false, makeTips = false;
let regGen = RegExp("");

const rootPath = __dirname + "/";

// eslint-disable-next-line no-undef
if (typeof OnStart === 'undefined') OnStart = g_OnStart;
function g_OnStart() { }

/** @param {GenPattern} genPattern */
function Generate(genPattern) {
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
 * @param {DSInput} inpt
 * @param {GenState} state
 */
function generateDocs(inpt, state) {
    if (!nogen) {
        const lst = keys(inpt.scope)
            .filter(n => (state.curScope === "global" || nothidden(n)) && regGen.test(n));
        for (let i = 0; i < lst.length; i++) {
            state.progress = Math.floor(100 * i / lst.length);
            app.UpdateProgressBar(state.progress, state.curScope + '.' + lst[i]);
            //console.log('\n:'+i+':'+lst[i]+'\n');
            resetGlobals(state);
            generateDoc(state, inpt, lst[i]);
        }
    }

    if (makeTips && "tips".match(regGen) && state.curScope !== "global") {
        resetGlobals(state);
        generateTips(inpt, state);
    }

    if (makeTsx && "tsx".match(regGen)) {
        resetGlobals(state);
        generateTsx(inpt, state, "ts");

        resetGlobals(state);
        generateTsx(inpt, state, "js");
    }
}


/*----------------------------------------------------------------------------*/

/** @param {GenState} state reset globals */
function resetGlobals(state) {
    state.popDefs = {};
    state.spop = { fnc: 0, dsc: 0, mul: 0, std: 0, ukn: 0 };
    keys(conf.tname).map(k => state.spop[k] = 0);
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
            case "-V": case "--verbose": app.SetDebug(true); break;
            case "-c": case "--clear": clear = true; break;
            case "-C": case "--clean": clean = true; break;
            case "-t": case "--tips": makeTips = true; break;
            case "-d": case "--tsx": makeTsx = true; break;
            case "-u": case "--update": updateVer = true; break;
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
