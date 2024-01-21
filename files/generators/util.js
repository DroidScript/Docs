/** @type {DSConfig} */
const conf = require("../conf.json");
const path = require("path");
const { app } = require("./app");

// constructor name prefixes
const regConPrefix = /^_?(Create|Open|Add|show)(?=\w+)/i;
/** @type {Obj<string>} */
const special = { n: '\n', r: '\r', t: '\t', b: '\b', f: '\f' };
const warnEnbl = false;
const force = false;
const regHide = RegExp(conf.regHide);

const D_BASE = 0, D_LANG = 1, D_VER = 2, D_SCOPE = 3;
const baseDir = "json/", outDir = "../out/";

module.exports = {
    // constants
    regConPrefix, special, force,
    // unwrapper
    fillMissingFuncProps, unwrapDesc, unwrapBaseFunc,
    // popup helper
    getAddClass, getAbbrev,
    // utils
    Throw, Warn, getl, hidden, nothidden, mergeObject,
    isnum, has, keys, sortAsc, split1, replW, hex, tos,
    // paths
    outDir, baseDir, ReadFile, getSrcDir, getDstDir,
    D_BASE, D_LANG, D_SCOPE, D_VER,
};

/**
 * @param {0|1|2|3} level
 * @param {GenState} state
 */
function getSrcDir(level, state, file = "") {
    const dir = [state.lang, state.curVer, state.curScope];
    const folder = path.resolve(__dirname, "..", baseDir, ...dir.slice(0, level));
    return folder.replace(/\\/g, "/") + "/" + file;
}

/**
 * @param {0|1|2|3} level
 * @param {GenState} state
 */
function getDstDir(level, state, file = "") {
    const dir = ['docs' + getl(state.lang), state.curVer, state.curScope];
    const folder = path.resolve(__dirname, "..", outDir, ...dir.slice(0, level));
    return folder.replace(/\\/g, "/") + "/" + file;
}


/** @type {(s:string, d:string|RegExp, l?:number) => [string]|[string,string]} */
function split1(s, d) {
    /** @ts-ignore */
    return s.replace(d, '\x01').split('\x01');
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

/** convert int to 3-digit hex
 * @param {number} v */
function hex(v) { return ("00" + v.toString(16)).replace(/^0+(...)/, "$1"); }
/** @type {(e: string|Error) => never} */
function Throw(e) { throw e; }
/** @param {string} msg */
function Warn(msg) { if (warnEnbl) console.error("Warning: " + msg); }

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
/** @param {string} s */
function invertCase(s) { return s.replace(/([a-z]*)([A-Z]*)/g, (_, a, b) => a.toUpperCase() + b.toLowerCase()); }

/**
 * @param {any} a
 * @param {any} b
 * @param {boolean} lowerFirst
 */
function sortAsc(a, b, lowerFirst = false) {
    const sa = String(a).replace(/[^a-z0-9_]/gi, "") || String(a);
    const sb = String(b).replace(/[^a-z0-9_]/gi, "") || String(b);
    const la = sa.toLowerCase(), lb = sb.toLowerCase();
    if (la === lb) return sa < sb ? 1 : -1;
    if (lowerFirst === true && (sa === la || sa === lb))
        return invertCase(sa) > invertCase(sb) ? 1 : -1;
    return la > lb ? 1 : -1;
}

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

/** @type {<T>(a: T, b: T) => T} */
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
