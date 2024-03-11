const { unwrapDesc, Throw, fillMissingFuncProps, regConPrefix, keys, has, getAbbrev, sortAsc, unwrapBaseFunc, hidden, split1, special, getDstDir, D_VER, D_LANG } = require('./util');
const { translatePython, getSamples } = require("./generate-htm");
const { app } = require('./app');
const conf = require("../conf.json");

module.exports = {
    generateMarkdown
};

// html char placeholders
const _htm = { comma: ',', colon: ':', bsol: '\\', period: '.', lowbar: '_', verbar: '|', "#160": " ", nbsp: " ", ldquo: "“", rdquo: "”" };
/** @type {Obj<string>} */
const tName = { ...conf.tname };
/** @type {Obj<string>} */
const tDesc = { ...conf.tdesc };


// html templates
let [subfHead, propsHead] = "";
/** @type {Obj<string>} */
let hints = {};
let dbg = false;

/** generates one document by function name
 * @param {DSInput} inpt
 * @param {GenState} state
 */
function generateMarkdown(inpt, state) {
    if (state.curScope === "MUI") return;

    state.curDoc = getDstDir(D_LANG, state) + "Docs.md";
    app.AppendFile(state.curDoc, `## ${conf.scopes[state.curScope] || state.curScope}\n\n`);
    console.log(`generating ${state.lang}.${state.curScope} Docs.md`);

    for (const funcName in inpt.scope) {
        if (funcName === "_tsxdefs") continue;
        const markdown = generateMarkdownDoc(state, inpt, funcName);
        app.AppendFile(state.curDoc, markdown.replace(/(^|\n)(#+)/g, '$1##$2'));
    }
}

/** generates one document by function name
 * @param {GenState} state
 * @param {DSInput} inpt
 * @param {string} name
 */
function generateMarkdownDoc(state, inpt, name) {
    state.curFunc = name;
    dbg = app.GetDebug();

    /** @type {DSFunction | string} */
    let ps = inpt.scope[name];
    if (typeof ps === "string")
        inpt.scope[name] = ps = { name, desc: ps, noCon: true };
    else ps.name = ps.name || name;
    if (!ps.name) return "";

    let data, funcLine = "", desc = ps.desc || "";
    /** @type {string[]} */
    const subfuncs = [];

    // get description from external file
    desc = unwrapDesc(ps.desc, state);
    if (ps.desc && !desc) Throw(Error(`description file ${ps.desc.slice(1)} linked but doesn't exist.`));
    ps.desc = desc;

    // get function specific data
    if (!ps.noCon) {
        const m = fillMissingFuncProps(ps);
        data = getDocData(inpt, state, m);
        desc = m.desc;
        m.name ||= name;

        // function line with popups
        if (m.retval === "obj-class") {
            funcLine = `\`\`\`js\nclass ${m.abbrev} extends ${m.name} {}\n\`\`\``;
        }
        else {
            if (m.abbrev && m.abbrev !== m.name) funcLine = m.abbrev + " = ";
            const isGlob = m.subf && state.curScope !== "MUI" && typeof m.retval === "string" && m.retval?.startsWith("obj");
            if (state.curScope !== "global") funcLine += isGlob ? 'new ' : state.curScope + '.';
            funcLine += `${m.name}` + (m.isval ? '' : `(${m.pNames.join(", ")})`);
            funcLine = `\`\`\`\n${funcLine}\n\`\`\`\n${data.args}\n`;
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

    // insert data to html base
    const html = htmlDoc(ps.name, formatDesc(inpt, state, desc, Boolean(data)), subfuncs, funcLine);
    return adjustDoc(state, html, ps.name);
}

/**
 * @param {GenState} state
 * @param {string} html
 * @param {string} name
 */
function adjustDoc(state, html, name) {
    html = html
        // additional notes
        .replace(/<(premium|deprecated|xfeature)(.*?)>/g,
            (m, /** @type {string} */ n, a) => hints[Number(n)].replace("%s", a))
        // colored passages
        .replace(/<(red|greed|blue|grey)>(.*?)<\/\1>/g, '<$1>$2</$1>')
        // some html char placeholders
        .replace(/&(.+?);/g, (m, /** @type {keyof typeof _htm} */ v) => _htm[v] || m)
        // remove special whitespace from tables
        .replace(/([\n\t ]+)(<\/?t([rhd]|head|body|able))/g,
            (m, /** @type {string} */ w, t) => w.replace(/\t/g, "    ").replace(/ /g, ' ') + t);

    // replace <js> and <bash> tags with sample
    html = html.replace(
        /(\s*)<(js|bash|smp|txt|java|json|xml|col)\b(( |nobox|noinl|#[0-9a-f]+)*)>(\s*)([^]*?)(\s*)<\/\2>(\s*)/g,
        function markupCode(m, w1, /** @type {string} */ langId, /** @type {string} */ soptions, _1, _2, /** @type {string} */ code, _3, w2, _4) {
            const options = soptions.split(" ");

            if (has(code, "\n") || has(options, "noinl"))
                return `\n\`\`\`${langId}\n${code.trim()}\n\`\`\`\n`;
            return `${w1 || ''}\`${code}\`${w2 || ''}`;
        });

    if (dbg) app.UpdateProgressBar(state.progress, state.curScope + '.' + name + " write changes");
    return html.replace(/[ \t]+\n/g, '\n');
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
    if (!desc.match(/\.(\s|$)/)) desc += '.';

    desc = desc.replace(/\s*<sample( Python| (.*?))?(( |norun)*)>([^]*?)<\/sample\2?>/g,
        (m, py, title, opt, _1, code) => {
            sampcnt++;
            title = title || sampcnt + 1;
            (py.includes('Python') ? samplesPy : samplesJs)[title] =
                { code, name: title, index: sampcnt, opt };
            return `<sample ${title}>`;
        });

    desc = `${replaceTypes(inpt, state, addMarkdown(replW(desc)))} `;

    if (hasData) {
        // replace %c with constructor if existent, otherwise insert after first dot
        desc = desc.replace(/((?=.*%c)\.?\s*%c|((?!.*%c)\.)(\s|$)+)/, `.\n%c\n`);
    }
    // exclude <h> and <table> tags from
    return desc
        .replace(/<sample (.*?)>/g, (m, /** @type {string} */ t) =>
            `\n${toHtmlSamp(t, samplesJs[t], samplesPy[t], state) + (delete samplesJs[t], '')}`)
        .replace(/(“.*?”)/g, "<docstr>$1</docstr>")
        + keys(samplesJs).map(t => toHtmlSamp(t, samplesJs[t], samplesPy[t], state)).join("");
}

/** @param {string[]} titles */
function makeTable(titles, useHtml = false) {
    if (useHtml) return "<table>" + tableRow(titles, useHtml, 'th');
    return "\n" + tableRow(titles, useHtml) + tableRow(titles.fill('---'), useHtml);
}

/** @param {string[]} titles */
function tableRow(titles, useHtml = false, cell = 'td') {
    if (useHtml) return "<tr>" + titles.map(t => `<${cell}>${t}</${cell}>`).join('') + '</tr>';
    return titles.join(" | ") + '\n';
}

function endTable(useHtml = false) { return useHtml ? "</table>" : ""; }

/** converts a function object into an html snippets object
 * @param {DSInput} inpt
 * @param {GenState} state
 * @param {DSMethod} f */
function getDocData(inpt, state, f, useAppPop = false) {
    const { base } = inpt;
    /** @type {string} */
    let mArgs = makeTable(["Parameter", "Type"], useAppPop);

    // abbrev for controls
    if (f.name && f.subf && !f.abbrev)
        f.abbrev = getAbbrev(f.name);

    // convert constructor line
    for (const i in f.pNames) {
        if (useAppPop) {
            const desc = typeDesc(inpt, state, f.pTypes[i]).replace(/<\/?\w+?>/g, "");
            mArgs += tableRow([f.pNames[i], desc], useAppPop);
        }
        else {
            const desc = toArgPop(inpt, state, f.pTypes[i]);
            mArgs += tableRow([f.pNames[i], desc], useAppPop);
        }
    }

    // convert return value
    if (f.retval)
        mArgs += tableRow(["Return Value:", typeDesc(inpt, state, f.retval)], useAppPop);

    if (!f.pNames.length && !f.retval) mArgs = "";
    else mArgs += endTable(useAppPop);

    const mkeys = keys(f.subf || []).sort(sortAsc);
    // return data if there are no subfunction
    if (!f.subf || !mkeys.length)
        return { args: mArgs, mets: "" };

    // function list
    let k, methods = "", props = "";
    if (dbg) app.UpdateProgressBar(state.progress, state.curScope + '.' + f.name + " generate subfunctions");
    for (k = 0; k < mkeys.length; k++) {
        let met = f.subf[mkeys[k]];

        // load base func
        met = unwrapBaseFunc(met, base);

        state.curSubf = met.name = met.name || mkeys[k];
        if (hidden(state.curSubf)) continue;

        const m = fillMissingFuncProps(met);

        //convert function types
        let mdesc = "\n";
        if (f.abbrev) mdesc += `### ${f.abbrev}.${state.curSubf}`;
        if (!m.isval) mdesc += m.pNames.length ? `( ${m.pNames.join(", ")} )` : "()";

        mdesc += "\n\n";
        mdesc += addMarkdown(replaceTypes(inpt, state, replW(m.desc || ""), true));
        mdesc += "\n";

        if (m.pNames.length || m.retval) {
            let mpdesc = makeTable(["Parameter", "Type"]);
            for (const i in m.pNames) {
                const desc = toArgPop(inpt, state, m.pTypes[i]);
                mpdesc += tableRow([m.pNames[i], desc]);
            }

            //convert return value
            if (m.retval)
                mpdesc += tableRow(["Return Value:", typeDesc(inpt, state, m.retval)]);

            mdesc += mpdesc + endTable();
        }

        if (m.isval && !met.name.includes(".")) props += mdesc;
        else methods += mdesc;
    }
    state.curSubf = "";

    return { args: String(mArgs) + " ", mets: methods, props };
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

    const jsCode = `\n\`\`\`js\n${jsSample.code.replace(/<\/?b>/g, '').trim()}\n\`\`\`\n`;
    const pyCode = `\n\`\`\`py\n${pySample.code.replace(/<\/?b>/g, '').trim()}\n\`\`\`\n`;
    return `\n\n<details>\n<summary>Example: ${name}</summary>\n${jsCode}${pyCode}</details>`;
}

/** returns a formatted description of a type - used for subfunction return values
 * @param {GenState} state
 * @param {DSInput} inpt
 * @param {string | DSFunction} stypes */
function typeDesc(inpt, state, stypes) {
    if (typeof stypes === "object") return toArgPop(inpt, state, stypes);

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
        (/** @type {any[]} */ type, _i) => ((last = "**", tName[type[0]]) ?
            "**" + tName[type[0]] + (tDesc[type[1]] ?
                (last = "*", ":** *" + tDesc[type[1]]) : ""
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
                default:
                    if (!type[0].endsWith("o"))
                        Throw(Error("unknown typex " + type[1]));
                    if (state.curFunc.endsWith(type[2]))
                        return s[i] + type[2];
                    if (!type[2].startsWith("@") && !inpt.scope[type[2]])
                        Throw(Error("link required for " + type[2]));
                    return s[i] + newLink('#' + type[2].replace(/@|.htm$/g, ""),
                        type[2].replace(/@.*\/|\.\w{2,5}$/g, "").replace(regConPrefix, ""));
            }
        }).join("\n\n").replace(/(“.*?”)/g, "<docstr>$1</docstr>");

    if (types.length > 1)
        ss = '<span style="display:inline-block;vertical-align: middle;">' + s + "</span>";
    return ss;
}

/** nearly equal to typeDesc, but returns an app.popup for arguments
 * @param {DSInput} inpt
 * @param {GenState} state
 * @param {DSFunction | string} stypes
 * @return {string} Popup when name was set, otherwise definition
 */
function toArgPop(inpt, state, stypes) {
    if (Array.isArray(stypes)) return "";

    // function callbacks
    if (typeof stypes === "object") {
        const argList = stypes.pNames?.map(function makeFuncPop(n, i) {
            if (Array.isArray(stypes) || !stypes.pTypes) return "";
            return tableRow([n, toArgPop(inpt, state, stypes.pTypes[i])], true);
        }) || [];

        let funcDef = `**function(${String(stypes.pNames || [])})**`;
        if (argList.length) funcDef += makeTable(["Parameter", "Type"], true) + argList + endTable(true);
        return funcDef;
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
    // **type[:]** [[*desc[:]*] values]
    let last = "";
    const s2 = types
        .map((/** @type {any[]} */ type, _i) => "**" + tName[type[0]] +
            (last = "**", tDesc[type[1]] ?
                (last = "*", ":** *" + tDesc[type[1]]) : ""
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
                return s2[i] + newLink('#' + type[2].replace(/@|.htm$/g, ""),
                    type[2].replace(/@.*\/|\.\w{2,5}$/g, "").replace(regConPrefix, ""));
        }
    });

    return str.join(" **or** ");
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
                if (type && !desc) {
                    r = type.split("||")
                        .map(stype => [stype.slice(0, 3)].concat(split1(stype, '-')))
                        .map(stype => tName[stype[0]].replace(/<[^>]*>/g, '') +
                            (tDesc[stype[1]] ? ": " + tDesc[stype[1]] : "") +
                            (stype.length === 3 ? ": " + rplop(stype[2], stype[0] === "str") : "")
                        ).join(" **or** ");

                    r = `${name} *(${r})*`;
                }
                else {
                    r = type ? tName[type.slice(0, 3)] +
                        (tDesc[type] ? ": " + tDesc[type] : "") : desc.replace(/\\n|\n/g, '$n$');
                    r = `${name} *(${r})*`;
                }
            }
            else if (type) {
                r = toArgPop(inpt, state, type.replace(/§t(\d+)§(<\/span>)?/g, (_m, i, s) => (s || '') + tags[i]));
                r = `${name} *(${r})*`;
            }
            else {
                r = desc.replace(/§t(\d+)§(<\/span>)?/g, (_m, i, s) => (s || '') + tags[i]);
                r = `${name} *(${r})*`;
            }

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
            return white + `[${name}](${url})`;
        })
        // link + onclick
        .replace(/([^\\]|^)\[([^\]}]*)\]{(.*?)}/g, '')
        .replace(/(\n|^)(#+) ([^<]*)/g, (_, /** @type {string} */ white, /** @type {string | any[]} */ h, /** @type {string} */ title) => // ## headline
            white + `${h} ${title}`)
        // additional notes
        .replace(/<(premium|deprecated|xfeature)(.*?)>/g, (m, /** @type {string} */ n, a) => hints[n].replace("%s", a))
        .replace(/([^\\]|^)@(([^/\n<>, ]+\/)*(\w+?))(#(\w+))?\b/gi, (m, b, n, _, f, H, h) =>  // @DocReference
            `${b}[${(h || f).replace(/_/g, ' ')}](#${(h || f).replace(/_/g, '-')})`)
        .replace(/\\([_*~@])/g, "$1");								// consume \ escaped markdown
}

/** replace "&" and "|" operators with "and" and "or"
 * @param {string} s
 * @param {boolean} [n]
 */
function rplop(s, n) {
    s = s
        .replace(/([^\\]|^)\\(.)/g, (m, e, /** @type {string} */ c) =>
            `${e || ''}§${(special[c] || c).charCodeAt(0)}§`)
        .replace(/\s*\|\s*/g, n ? "” or “" : " or ")
        //.split(',').sort(sortAsc).join(n ? "”, “" : ", ")
        .replace(/,/g, n ? "”, “" : ", ")
        .replace(/§(\d+?)§/g, (m, /** @type {number} */ c) =>
            String.fromCharCode(Number(c)));
    return replW(n ? '“' + s + '”' : s);
}

/** @type {(target:string, text:string) => string} */
function newLink(target, text) { return `[${text}](${target})`; }

/** replace whitespace with html syntax whitespace
 * @param {string} s
 */
function replW(s) {
    return s
        .replace(/\\\/\\\//g, '#')
        .replace(/\n|\\n/g, "\n\n")
        .replace(/\t/g, "    ")
        .replace(/ {2}/g, "  ");
}

// html templates
// props list
propsHead = `## Properties\n\nThe following properties are available on the **%t** object:\n\n%f`;
// subfunction list
subfHead = `## Methods\n\nThe following methods are available on the **%t** object:\n\n%f`;
/** @type {Obj<string>} */
hints = {
    deprecated: "<div class='deprHint'>**Note: This function is deprecated.%s**</div>",
    premium: "<div class='premHint'>**Note: This function is a premium feature. Please consider subscribing to Premium to use this feature and support DroidScript in its further development.**</div>",
    xfeature: "<div class='xfeatHint'>**ATTENTION: This function is available in the DS X-Versions only as it doesn't meet the GooglePlay security requirements. APKs built with X-Versions are for private use only.**</div>",
};

function htmlDoc(title = "", desc = "", subf = /** @type {string[]} */ ([]), construct = "") {
    title = title.replace(/^\d+\s*/, '');
    return `# ${title}

${desc.replace("%c", construct)}

${subf.join("\n\n")}
`;
}
