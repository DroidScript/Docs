const Prism = require('prismjs');
const fs = require("fs");
const { getDstDir, D_SCOPE, unwrapDesc, Throw, fillMissingFuncProps, regConPrefix, D_VER, keys, isnum, has, getAbbrev, sortAsc, unwrapBaseFunc, hidden, getAddClass, getSrcDir, ReadFile, Warn, split1, special, hex } = require('./util');
const { app } = require('./app');
const conf = require("../conf.json");

module.exports = {
    generateDoc,
    newNaviItem,
    htmlNavi,
    translatePython,
    getSamples
};

// prism default languages:
//   plain,plaintext,text,txt,extend,insertBefore,DFS,markup,
//   html,mathml,svg,xml,ssml,atom,rss,css,clike,javascript,js
// @ts-ignore
require('prismjs/components/prism-java.min.js');
// @ts-ignore
require('prismjs/components/prism-python.min.js');

// html char placeholders
const _htm = { comma: ',', colon: ':', bsol: '\\', period: '.', lowbar: '_', verbar: '|', "#160": " ", nbsp: " ", ldquo: "“", rdquo: "”" };
/** @type {Obj<string>} */
const tName = { ...conf.tname };
/** @type {Obj<string>} */
const tDesc = { ...conf.tdesc };


// html templates
let [subfBase, naviItem, switchPop, appPopup, codeBase,
    txtPopup, defPopup, subfHead, propsHead] = "";
/** @type {Obj<string>} */
let hints = {};
let dbg = false;

/** generates one document by function name
 * @param {GenState} state
 * @param {DSInput} inpt
 * @param {string} name
 */
function generateDoc(state, inpt, name) {
    state.curFunc = name;
    dbg = app.GetDebug();

    /** @type {DSFunction | string} */
    let ps = inpt.scope[name];
    if (typeof ps === "string")
        inpt.scope[name] = ps = { name, desc: ps, noCon: true };
    else ps.name = ps.name || name;
    if (!ps.name) return;

    state.curDoc = getDstDir(D_SCOPE, state, name.replace(/^\d+|\s+/g, '') + '.htm');

    let data, funcLine = "", desc = ps.desc || "";
    /** @type {string[]} */
    const subfuncs = [];

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
        m.name ||= name;

        // function line with popups
        if (m.retval === "obj-class") {
            funcLine = `class ${m.abbrev} extends ${m.name} {}`;
        }
        else {
            if (m.abbrev && m.abbrev !== m.name) funcLine = m.abbrev + " = ";
            const isGlob = m.subf && state.curScope !== "MUI" && typeof m.retval === "string" && m.retval?.startsWith("obj");
            if (state.curScope !== "global") funcLine += isGlob ? 'new ' : state.curScope + '.';
            funcLine += `${m.name}` + (m.isval ? '' : `(${data.args})`) + data.ret;
        }

        // subfunctions of controls with popups
        if (ps.subf) {
            if (data.props) {
                subfuncs.push(propsHead
                    .replace(/%t/g, m.name.replace(regConPrefix, ''))
                    .replace("%f", data.props));
            }

            if (data.mets) {
                subfuncs.push(subfHead
                    .replace(/%t/g, m.name.replace(regConPrefix, ''))
                    .replace("%f", data.mets));
            }
        }
    }
    // if (!desc) console.log(m);

    // insert data to html base
    if (dbg) app.UpdateProgressBar(state.progress, state.curScope + '.' + name + " generate description");
    const html = htmlDoc(ps.name, formatDesc(inpt, state, desc, Boolean(data)), subfuncs, funcLine);
    if (dbg) app.UpdateProgressBar(state.progress, state.curScope + '.' + name + " adjusting");
    const docHtml = adjustDoc(state, html, ps.name);
    app.WriteFile(state.curDoc, docHtml);

    const indexText = docHtml
        .replace(/<div data-role="popup".*?<\/div>/g, "")
        .replace(/<[^>]+>/g, "")
        .replace(/(\s+|&[a-z]{2,6};)+/g, " ");
    const verDir = getDstDir(D_VER, state);
    const indexFile = getDstDir(D_VER, state, "index.txt");
    fs.appendFileSync(indexFile, `${state.curDoc.replace(verDir, "").replace(/\\/g, '/')} := `);
    fs.appendFileSync(indexFile, indexText.trim() + '\n');

    if (dbg) app.UpdateProgressBar(state.progress, state.curScope + '.' + name + " done");
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
 * @param {boolean} hasData
 */
function formatDesc(inpt, state, desc, hasData) {
    desc = desc.charAt(0).toUpperCase() + desc.slice(1);

    const samplesJs = getSamples(inpt.scope, state);
    const samplesPy = getSamples(inpt.scope, state, "-py");
    let sampcnt = keys(samplesJs).length;
    if (!desc.match(/\.(\s|<br>|$)/)) desc += '.';

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
    if (f.name && f.subf && !f.abbrev)
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

    const mkeys = keys(f.subf || []).sort(sortAsc);

    // return data if there are no subfunction
    if (!f.subf || !mkeys.length)
        return { args: smArgs, ret: fretval, mets: "" };

    // function list
    let k, methods = "", props = "";
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
        if (f.abbrev) mdesc = `<b>${f.abbrev}.${state.curSubf}</b><br>` + mdesc;

        let metpop = newPopup(state, "dsc", state.curSubf,
            addMarkdown(replaceTypes(inpt, state, replW(mdesc), true)),
            getAddClass(m, state) || (has(inpt.baseKeys, state.curSubf) &&
                (!m.isval || state.curScope !== "ui") ? ' class="baseFunc"' : ""));

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

        if (m.isval && !met.name.includes(".")) props += subfBase.replace("\n\t\t", "").replace("%s", metpop + retval);
        else methods += subfBase.replace(m.isval ? "\n\t\t" : "", "").replace("%s", metpop + retval);
    }
    state.curSubf = "";

    return { args: String(mArgs) + " ", mets: methods, props, ret: fretval };
}

/** read and return html converted example snippets file
 * @param {DSScope} scope
 * @param {GenState} state
 * @param {string} ext
 */
function getSamples(scope, state, ext = "") {
    /** @type {Obj<Sample>} */
    const samples = {};
    let index = 0;

    const filePath = getSrcDir(D_SCOPE, state, `samples/${state.curFunc}${ext}.txt`);
    if (ext && !app.FileExists(filePath)) {
        const jsFilePath = getSrcDir(D_SCOPE, state, `samples/${state.curFunc}.txt`);
        const jsSource = ReadFile(jsFilePath, "").replace(/\r/g, '');
        if (jsSource.trim()) app.WriteFile(filePath, translatePython(jsSource));
    }

    const source = ReadFile(filePath, " ", !ext && !scope[state.curFunc].isval).replace(/\r/g, '');
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

/** returns a formatted description of a type - used for subfunction return values
 * @param {GenState} state
 * @param {DSInput} inpt
 * @param {string | DSFunction} stypes */
function typeDesc(inpt, state, stypes) {
    if (typeof stypes === "object") return toArgPop(inpt, state, null, stypes);

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
                case "nil":
                case "num": return s[i] + rplop(type[2]);
                case "str": return s[i] + rplop(type[2], true);
                case "lst":
                case "obj":
                case "jso": return s[i] + replaceTypes(inpt, state, type[2], false);
                case "uio": return s[i] + replaceTypes(inpt, state, type[2], false);
                default:
                    if (!type[0].endsWith("o"))
                        Throw(Error("unknown typex " + type[1]));
                    if (state.curFunc.endsWith(type[2]))
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
 * @param {string | null} name null indicates no popup -> return definition
 * @param {DSFunction | string} stypes
 * @param {boolean} [doSwitch]
 * @return {string} Popup when name was set, otherwise definition
 */
function toArgPop(inpt, state, name, stypes, doSwitch) {
    if (Array.isArray(stypes)) return "";

    // function callbacks
    if (typeof stypes === "object") {
        const argList = stypes.pNames?.map(function makeFuncPop(n, i) {
            if (Array.isArray(stypes) || !stypes.pTypes) return "";
            const val = stypes.pTypes[i];
            if (typeof val === "object" || has("lst,obj", val.slice(0, 3)) || name === null)
                // for lists and objects in callback parameters switch popups
                return toArgPop(inpt, state, n, val, Boolean(name !== null));
            return toArgAppPop(n, val);
        }) || [];

        const funcDef = `<b>function</b>(\n\t\t${argList.join(",\n\t\t")}\n\t)`.replace(/\(\s+\)/, "()");
        if (name === null) return funcDef;

        let s1 = newPopup(state, "fnc", name || '', funcDef, false);
        if (doSwitch) s1 = s1.trim().replace(/href="#pop_(..._...)"/, 'href="" ' + switchPop);
        return s1;
    }
    name ||= '';

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
            case "nil":
                if (type.length === 3 && has(type[2], ':'))
                    type[2] = replaceTypes(inpt, state, type[2], true);
                return s2[i] + rplop(type[2], type[0] === "str");
            case "lst":
            case "obj": return s2[i] + replaceTypes(inpt, state, replW(type[2]), true);
            case "uio": return s2[i] + replaceTypes(inpt, state, replW(type[2]), true);
            default:
                if (!type[0].endsWith("o"))
                    Throw(Error("unknown typex " + type[1]));
                if (state.curFunc.endsWith(type[2]))
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
    const desc = stypes.split("||")
        .map(type => [type.slice(0, 3)].concat(split1(type, '-')))
        .map(type => tName[type[0]].replace(/<[^>]*>/g, '') +
            (tDesc[type[1]] ? ": " + tDesc[type[1]] : "") +
            (type.length === 3 ? ": " + rplop(type[2], type[0] === "str") : "")
        ).join("\\n");

    return newAppPopup(name, desc);
}

/** accept formats: "name":"desc" name:type name:"types" name:"type-values"
 * using name:'...' will force app popups
 * @param {DSInput} inpt
 * @param {GenState} state
 * @param {string} descStr
 * @param {boolean} [useAppPop]
 */
function replaceTypes(inpt, state, descStr, useAppPop) {

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

/** increase special popup counters and returns its id
 * @param {GenState} state
 * @param {string} type
 * @param {number} i
 */
function incpop(state, type, i) {
    if (i) state.spop[type] += i;
    return hex(state.spop[type] || 0);
}

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

/** @type {(link:string, text:string, add?:string) => string} */
function newNaviItem(link, text, add) { return naviItem.replace("%s", link).replace("%s", add || "").replace("%s", text); }
/** @type {(id:string, text:string, add?:string|false) => string} */
function newTxtPopup(id, text, add) { return txtPopup.replace("%s", id).replace("%s", add || "").replace("%s", text); }
/** @type {(id:string, text:string) => string} */
function newDefPopup(id, text) { return defPopup.replace("%s", id).replace("%s", text); }
/** @type {(name:string, desc:string) => string} */
function newAppPopup(name, desc) { return appPopup.replace("%s", desc.replace(/\n|<br>/g, '\\n').replace(/'/g, "\\\\'")).replace("%s", name); }
/** @type {(target:string, text:string) => string} */
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
// props list
propsHead = `<h3>Properties</h3>\n\t\t<p><br>The following properties are available on the <strong>%t</strong> object:</p>\n\n%f`;
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

function htmlDoc(title = "", desc = "", subf = /** @type {string[]} */ ([]), construct = "") {
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
\t\t${subf.join("\n\t\t")}
\t</div>

\t%p
</div>
</body>
\t
</html>\n`;
}
