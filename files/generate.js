#!/usr/bin/env node

const fs = require("fs-extra");
const rimraf = require("rimraf");
const Prism = require('prismjs');
conf = require("./conf.json");
// @ts-ignore
require('prismjs/components/prism-java.min.js');

//TODO:WebServer,WebSocket,WebSocket conn.Ex.,gfx
const baseDir = "json/", outDir = "../out/";
var lang = /** @type {LangKeys} */ ("");
var curVer = "", curDoc = "", curSubf = "";
var patFunc = "", patScope = /**@type {ScopeKeys}*/("");
var patVer = "", patLang = /** @type {LangKeys} */("");
var warnEnbl = false, dbg = false, clear = false, force = false, updateVer = false;
var regGen = RegExp(""), regHide = RegExp(""), regControl, progress = 0;

/** @type {DSConfig} */    var conf;
/** @type {DSBase|null} */ var base;
/** @type {DSNavs} */      var navs;
/** @type {DSScope} */     var scope;
/** @type {ScopeKeys} */   var curScope;
/** @type {string[]} */    var allKeys = [];
/** @type {Obj<string>} */ var tDesc;
/** @type {Obj<string>} */ var tName;

// @ts-ignore
if (typeof OnStart == 'undefined') OnStart = g_OnStart;
function g_OnStart() { }

/** @param {string} p */
function absPth(p) { return p.startsWith("/") ? p : path + p; }


const D_BASE = 0, D_LANG = 1, D_VER = 2, D_SCOPE = 3;
/** @param {0|1|2|3} level */
function getSrcDir(level, file = "") {
	const dir = [lang, curVer, curScope];
	return baseDir + dir.slice(0, level).join('/') + '/' + file;
}

/** @param {0|1|2|3} level */
function getDstDir(level, file = "") {
	const dir = ['docs' + getl(), curVer, curScope];
	return outDir + dir.slice(0, level).join('/') + '/' + file;
}


function Generate() {
	conf = JSON.parse(ReadFile("conf.json", '{"langs":{},"scopes":{}}', true));
	regHide = RegExp(conf.regHide);
	regControl = RegExp(conf.regControl);
	tDesc = conf.tdesc;
	tName = conf.tname;

	if (patLang && !conf.langs[patLang])
		Throw(Error(`language ${patLang} not specified in conf.json`));
	if (patScope && !conf.scopes[patScope])
		Throw(Error(`scope ${patScope} not specified in conf.json`));

	const dstDir = getDstDir(D_BASE);
	if (!app.FolderExists(dstDir)) app.MakeFolder(dstDir);

	// language index page
	const nav = keys(conf.langs).map(l => newNaviItem(`docs${getl(l)}/Docs.htm`, conf.langs[l]));
	const index = htmlNavi("Available languages:", "", nav.join(''))
		.replace(/(href|src)="(?!http|\/)(?!docs)(\.\.\/)?/g, '$1="docs/');
	app.WriteFile(dstDir + "index.html", index);

	// 404 page
	app.CopyFolder('404.html', dstDir + '404.html');

	// update forward.js version map
	/** @type {Obj<string>} */
	const latest = {};
	const forwardjs = app.ReadFile('docs-base/js/forward.js');
	keys(conf.langs).map(l => {
		lang = l;
		const versions = app.ListFolder(getSrcDir(D_LANG)).sort();
		latest[lang] = versions[versions.length - 1];
	});
	app.WriteFile('docs-base/js/forward.js', forwardjs.replace(/(versions = ).*;/, `$1${JSON.stringify(latest)};`));

	// generate all languages
	keys(conf.langs).filter(l => l.match(patLang) != null).forEach(l => generateLang(l));
}

/** @param {LangKeys} l */
function generateLang(l) {
	lang = l;
	const langDir = getSrcDir(D_LANG);
	const dstDir = getDstDir(D_LANG);
	scope = {};
	base = {};

	// clear lang folder
	if (!app.FolderExists(langDir)) Throw(Error(`Language '${lang}' doesn't exist.`));
	if (app.FolderExists(dstDir) && clear) {
		console.log("deleting " + lang);
		app.DeleteFolder(dstDir);
	} else console.log("overwriting " + lang);

	// update base files
	if (clear || !app.FolderExists(dstDir)) app.MakeFolder(dstDir);
	app.CopyFolder("font-awesome", dstDir + "font-awesome");
	app.CopyFolder("app.js", dstDir + "app.js");
	app.CopyFolder("docs-base/css", dstDir + "css");
	app.CopyFolder("docs-base/js", dstDir + "js");
	app.CopyFolder("docs-base/Index.htm", dstDir + "index.html");
	const versions = app.ListFolder(langDir).sort().filter(v => !v.startsWith("."));

	// version index page
	const nav = versions.map(v => newNaviItem(v + '/Docs.htm', "Version " + v.replace(/v(\d)(\d\d)/, "$1.$2")));
	const index = htmlNavi("Available versions:", "", nav.join(''))
		.replace(/(href|src)="(?!http|\/)(\.\.\/)?/g, '$1="../docs/');
	app.WriteFile(dstDir + "Docs.htm", index);

	// generate all versions
	for (const v of versions) if (new RegExp(patVer || '.*').test(v)) generateVersion(v);
}

/** @param {string} ver */
function generateVersion(ver) {
	curVer = ver;
	const curDir = getDstDir(D_VER);
	app.CopyFolder("docs-base", curDir);

	app.WriteFile(curDir + "index.txt", "");

	// generate all scopes
	keys(conf.scopes)
		.filter(s => s.match(patScope) != null)
		.forEach(scope => {
			try { generateScope(scope); }
			catch (e) {
				console.error(/*\x1b[31m*/ `while generating ${curScope} ${curDoc || ''}: ${curSubf || ''}`);
				Throw(e);
			}
		});

	// update version number
	var v = 1000 * (Date.now() / 864e5 | 0);
	var vn = Number(ReadFile("../docs/version.txt", "0")) % 1000;
	if (updateVer) vn++;
	app.WriteFile(outDir + "version.txt", (v + vn).toString());
}

/** @param {ScopeKeys} name */
function generateScope(name) {
	curScope = name;
	const scopeDir = getSrcDir(D_SCOPE);
	const dstDir = getDstDir(D_SCOPE);
	regGen = RegExp(patFunc || ".*");

	if (!app.FolderExists(scopeDir) || !(app.FileExists(scopeDir + "obj.json") || app.FolderExists(scopeDir + "desc")))
		Throw(Error(`'${scopeDir}' doesn't exist.`));

	if (!app.FolderExists(scopeDir + "samples")) app.MakeFolder(scopeDir + "samples");

	// check file dates for update
	if (!force && !clear && newestFileDate(dstDir) > newestFileDate(scopeDir, "generate.js"))
		return console.log(`Skipped ${lang}.${curVer}.${name}.${patFunc || '*'}`);

	app.ShowProgressBar(`Generating ${lang}.${curVer}.${name}.${patFunc || '*'}`);
	parseInput();

	// clear nav & scope folder for generating
	/* if (!clear) {
		const verDir = getDstDir(D_VER);
		if (!"navs".match(regGen)) app.DeleteFolder(dstDir);
		for (const f of app.ListFolder(verDir))
			f.startsWith(name + "_") && app.DeleteFile(verDir + f);
	} */
	if (!app.FolderExists(dstDir)) app.MakeFolder(dstDir);

	// generate nav pages
	if ("navs".match(regGen)) {
		generateNavigators(navs, conf.scopes[curScope] || curScope);
		var missNavs = Object.entries(scope).filter(m => !m[1].hasNav).map(m => m[1].name || m[0]).filter(nothidden);
		if (base && missNavs.length > 0) console.log(`missing navigators in ${curScope}: ${missNavs.join(", ")}\n`);
	}

	// generate doc pages
	generateDocs(scope);
	app.HideProgressBar();
}

// read all input json files
function parseInput() {
	var newScope = scope, newBase = base;

	// read categories
	const scopeDir = getSrcDir(D_SCOPE);
	curDoc = scopeDir + "navs.json";
	navs = JSON.parse(ReadFile(curDoc, "{}"));

	// read scope members
	curDoc = scopeDir + "obj.json";
	if (app.FileExists(curDoc)) {
		newScope = JSON.parse(ReadFile(curDoc, "false"));
		scope = mergeObject(scope, newScope);
		if (!keys(navs).length) navs = keys(scope);
		// @ts-ignore
		else navs.All = keys(scope);

		// read base functions used in scope
		curDoc = scopeDir + "base.json";
		newBase = JSON.parse(ReadFile(curDoc, "false"));
		base = mergeObject(base, newBase);
		if (base) {
			// additionally, read /*#obj*/ marked functions from .js file if exists
			if (!app.FileExists(scopeDir + curScope + ".js"))
				allKeys = keys(base).map(k => base && base[k].name || k);
			else
				allKeys = app.ReadFile(scopeDir + curScope + ".js")
					.split("/*#obj*/ self.").slice(1)
					.map((v) => v.slice(0, v.indexOf(" ")));

			// additionally, read Obj.prototype functions from utils.js if exists
			if (curScope == "app" && app.FileExists(scopeDir + "util.js"))
				allKeys.concat(app.ReadFile(scopeDir + "util.js")
					.split("Obj.prototype.").slice(1)
					.map((v) => v.slice(0, v.indexOf(" "))))
		} else base = {}
	}
	else // no json file available
	{
		regGen = RegExp("(?=^tips$)[]|(?!^tips$)^.*" + regGen.source);
		// add files from scope folder to be generated
		newScope = {}; base = null; navs = [];

		for (var n of app.ListFolder(scopeDir + "desc")) {
			n = n.slice(0, n.lastIndexOf("."));
			navs.push(n.replace(/^\s+/, ""));
			// @ts-ignore
			newScope[n] = `#${n}.md`;
		}
		scope = mergeObject(scope, newScope);
	}
}

/**
 * @param {DSNavs} navs
 * @param {string} name
 * @param {string} [pfx]
 */
function generateNavigators(navs, name, pfx) {
	curDoc = getDstDir(D_VER, `${pfx || ''}${name.replace(/\s+/g, '')}.htm`);
	pfx = `${pfx || curScope}_`;
	var nav = '', addcontent = '';

	// function list
	if (navs instanceof Array) {
		for (var func of navs = navs.filter(nothidden)) {
			if (!func) nav += "<li></li>";
			else {
				if (name != 'All' && scope['_' + func]) scope['_' + func].hasNav = true;
				else if (!scope[func]) Throw(`nav to deleted method ${curScope}.${func}`);
				else {
					if (name != 'All') scope[func].hasNav = true;
					nav += newNaviItem(
						curScope + `/${func.replace(/\s+/g, '')}.htm`,
						func.replace(/^\d+\s*/, ''), getAddClass(scope[func]));
				}
			}
		}
	}
	// name:target.htm or scope:categories association
	else if (navs instanceof Object) {
		for (var cat of keys(navs).filter(nothidden)) {
			var val = navs[cat];
			if (cat == '_nofilter') continue;
			if (cat.startsWith("+html")) {
				addcontent += val;
				continue;
			}
			if (!val) val = curScope + "/" + cat + ".htm";

			// targtet file
			if (typeof val == "string") {
				var m = val.match(curScope + "\\/(\\w+).htm(#(.*))?");
				/** @type {DSFunction|string|undefined} */
				var f, add = "";
				if (val.startsWith("http")) add += ' onclick="return OpenUrl(this.href);"';
				if (m && scope[m[1]]) f = m[3] ? (scope[m[1]].subf || {})[m[3]] : scope[m[1]];
				if (f && typeof f != "string") add += getAddClass(f), f.hasNav = true;
				nav += newNaviItem(val, cat, add);
			}
			else // new category
			{
				nav += newNaviItem(`${pfx + cat.replace(/\s+/g, '')}.htm`, cat, cat == "Premium" ? getAddClass({ desc: "<premium>" }) : undefined);
				var tdoc = curDoc;
				generateNavigators(val, cat, pfx);
				curDoc = tdoc;
			}
		}
	}
	else Throw(Error("Wrong catlist datatype: " + typeof navs));

	const nofilter = keys(navs).length < 15 || (navs instanceof Object && navs._nofilter);
	app.WriteFile(curDoc, htmlNavi(name, addcontent, nav, !nofilter));
}

/** @param {DSScope} scope */
function generateDocs(scope) {
	curDoc = getSrcDir(D_SCOPE);
	var lst = keys(scope).filter(nothidden).filter(n => !!n.match(regGen));

	for (var i = 0; i < lst.length; i++) {
		progress = Math.floor(100 * i / lst.length);
		app.UpdateProgressBar(progress, curScope + '.' + lst[i]);
		//console.log('\n:'+i+':'+lst[i]+'\n');
		generateDoc(lst[i]);
	}

	if (!"tips".match(regGen)) return;

	generateTips(scope);
	generateTsx(scope);
}

/** @param {DSScope} scope */
function generateTips(scope) {
	curDoc = getSrcDir(D_VER, curScope + '-tips.json');
	/** @type {DSScopeRaw} */
	var tsubf;
	/** @type {Obj<Obj<string>>} */
	var tips = { [curScope]: {} };

	for (var name of keys(scope).filter(nothidden)) {
		const s = scope[name];
		if (s.shortDesc)
			tips[curScope][name] = s.shortDesc;
		else continue;

		if (s.subf && s.abbrev) {
			tsubf = s.subf;
			/** @type {Obj<string>} */
			var tctrl = {};
			tips[s.abbrev] = tctrl;

			for (var j of keys(tsubf).filter(nothidden)) {
				let t = tsubf[j];
				if (typeof t === "string") {
					if (!t.startsWith('#')) Throw(Error(`md ref must have '#' prefix, got '${t}'`))
					if (/[a-z]/i.test(t[1])) t = t.slice(1);
					if (base && base[t]) {
						const b = base[t];
						if (b.shortDesc) tctrl[j] = b.shortDesc;
					}
					else Throw(Error(`basefunc ${t} not found!`));
				}
				else if (t.shortDesc) tctrl[j] = t.shortDesc;
			}
		}
	}

	const stips = tos(tips);
	if (stips.lastIndexOf("}") != 25)
		app.WriteFile(curDoc, stips);
}

/** @param {any} scope */
function generateTsx(scope) {
	// TODO
}

/** generates one document by function name 
 * @param {string} name */
function generateDoc(name) {
	/** @type {DSFunction | string} */
	var ps = scope[name];
	if (typeof ps == "string")
		scope[name] = ps = { name, desc: ps, noCon: true };
	else ps.name = ps.name || name;
	if (typeof ps == "string" || !ps.name) return;

	curDoc = getDstDir(D_SCOPE, ps.name.replace(/\s+/g, '') + '.htm');
	resetGlobals();

	var data, funcLine = "", subfuncs = "", desc = ps.desc || "";

	// get description from external file
	if (ps.desc && ps.desc.startsWith('#')) {
		desc = ps.desc = ReadFile(getSrcDir(D_SCOPE, 'desc/' + ps.desc.slice(1)), "").replace(/\r/g, '');
		if (!desc) Throw(Error(`description file ${ps.desc.slice(1)} linked but doesn't exist.`));
	}

	// get function specific data
	if (!ps.noCon) {
		if (dbg) app.UpdateProgressBar(progress, curScope + '.' + name + " get data");

		const m = fillMissingFuncProps(ps);
		data = getDocData(m);
		desc = m.desc;

		// function line with popups
		if (m.abbrev) funcLine = m.abbrev + " = ";
		funcLine += `${curScope}.${name}` + (m.isval ? '' : `(${data.args})`) + data.ret;

		// subfunctions of controls with popups
		if (isControl(name) && data.mets)
			subfuncs = subfHead
				.replace(/%t/g, name.replace(regConPrefix, ''))
				.replace("%f", data.mets);
	}
	// if (!desc) console.log(m);

	// insert data to html base
	if (dbg) app.UpdateProgressBar(progress, curScope + '.' + name + " generate description");
	const html = htmlDoc(name, formatDesc(desc, name, !!data), subfuncs, funcLine);
	if (dbg) app.UpdateProgressBar(progress, curScope + '.' + name + " adjusting");
	const docHtml = adjustDoc(html, name);
	app.WriteFile(curDoc, docHtml);

	const indexText = docHtml
		.replace(/<div data-role="popup".*?<\/div>/g, "")
		.replace(/<[^>]+>/g, "")
		.replace(/(\s+|&[a-z]{2,6};)+/g, " ");
	const verDir = getDstDir(D_VER);
	fs.appendFileSync(absPth(verDir + "index.txt"), `${curDoc.replace(verDir, "").replace(/\\/g, '/')} := `);
	fs.appendFileSync(absPth(verDir + "index.txt"), indexText.trim() + '\n');

	if (dbg) app.UpdateProgressBar(progress, curScope + '.' + name + " done");
}

/*----------------------------------------------------------------------------*/

/** @type {Obj<string>} */
var popDefs;
/** @type {Obj<number>} */
var spop;

// reset globals
function resetGlobals() {
	popDefs = {};
	spop = { fnc: 0, dsc: 0, mul: 0, std: 0, ukn: 0 };
	keys(conf.tname).map(k => spop[k] = 0);
}

/**
 * @param {string} html
 * @param {string} name
 */
function adjustDoc(html, name) {
	var order = "std,num,str,mul,obj,dso,lst,fnc,dsc";
	var popList = keys(popDefs)
		.map((d) => newDefPopup(popDefs[d], d))
		.sort(function (a, b) {
			a = a.slice(31, 38); b = b.slice(31, 38);
			if (a.slice(0, 3) == b.slice(0, 3)) {
				if (isnum(a[4]) == isnum(b[4])) return a.slice(4) < b.slice(4) ? -1 : 1;
				else return isnum(a[4]) ? 1 : -1;
			}
			else return order.indexOf(a.slice(0, 3)) < order.indexOf(b.slice(0, 3)) ? -1 : 1;
		}).join("\n\t").replace(/\$n\$/g, '\\n');

	var toc = [];
	html.replace(/\n\t\t<h(\d)>(.*)<\/h\1>/g, function (m, /** @type {number} */ i, /** @type {string} */ t) {
		if (!name.endsWith(t) && i < 4) toc.push(
			new Array(Number(i)).join("    ") + ([0, 0, "• ", "- "][i] || "") +
			`<a href="" onclick="jumpTo('${t.replace(/<.*?>/g, "")}')">${t.replace(/(<sup>|$)/, "</a>$1")}<br>`);
		return "";
	});
	if (toc.length) {
		toc.unshift("<b>Content:</b><br>");
		toc.unshift('\n\t\t<div class="samp samp-inline" style="font-size:revert; padding:10px 15px">');
		toc.push("</div>\n\n\t\t");
	};

	html = html
		// table of contents
		.replace(/("content">\n\t\t)/, `$1${toc.join("\n\t\t")}`)
		// popup object list
		.replace(/%p/, popList)
		// additional notes
		.replace(/<(premium|deprecated|xfeature)(.*?)>/g, (m, /** @type {string} */ n, a) => hints[n].replace("%s", a))
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
			`${c.replace(RegExp(w + "|^|$", 'g'), w.replace(/    /g, '\t')).slice(0, -1)}</span><br>`)
	// .replace(/(^|\n)([\t ]*- )(.*)/g, '$1$2<span style="display:inline-block">$3</span>')

	// replace <js> and <bash> tags with sample
	html = html.replace(
		/(\s|<br>)*<(js|bash|smp|txt|java|json|col)\b(( |nobox|noinl|#[0-9a-f]+)*)>(\s|<br>)*([^]*?)(\s|<br>)*<\/\2>((\s|<br>)*)/g,
		function (m, w1, /** @type {string} */ lang, /** @type {string} */ soptions, _1, _2, /** @type {string} */ code, _3, w2, _4) {
			const options = soptions.split(" ");
			if (w1) w1 = m.slice(0, m.indexOf(`<${lang}`));
			if (Prism.languages[lang]) {
				/** @type {string[]} */
				var tags = [];
				code = code
					.replace(/<br>/g, "")
					.replace(/&#160;/g, "§s§")
					.replace(/\s*<.*?>/g, (m) => (tags.push(m), "§t§"));
				code = Prism.highlight(code, Prism.languages[lang], lang)
					.replace(/\n/g, "<br>\n")
					.replace(/§t§(<\/span>)?/g, (m, s) => (s || '') + tags.shift())
					.replace(/§s§/g, "&#160;")
					.replace(/(<span.*em;">)<br>/g, '<br>$1');
			}

			const col = soptions.match(/#[0-9a-f]+/) || [''];
			const spanStyle = col[0] && ` style="color:${col[0]}; font-family:Courier,monospace; padding:0px 2px;"`;
			let spanClass = '';

			if (has(options, "nobox")) spanClass = '';
			else if (has(code, "<br>") || has(options, "noinl")) return `</p>\n${newCode(code)}\t\t<p>`
			else spanClass = ' class="samp samp-inline"';
			if (spanClass || spanStyle) code = `<span${spanClass}${spanStyle}>${code}</span>`
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

	if (dbg) app.UpdateProgressBar(progress, curScope + '.' + name + " write changes");
	return html;
}

/** returns an html formatted description of a function
 * @param {string} desc
 * @param {any} name
 * @param {boolean} hasData
 */
function formatDesc(desc, name, hasData) {
	desc = desc.charAt(0).toUpperCase() + desc.slice(1);

	var samples = getSamples(name), s;
	var sampcnt = keys(samples).length;
	if (!has(desc, '.')) desc += '.';

	desc = desc.replace(/(\s|<br>)*<sample( (.*?))?(( |norun)*)>([^]*?)<\/sample\2?>/g,
		function (m, _, _1, /** @type {string} */ t, opt, _2, c) {
			samples[_ = t || sampcnt + 1] = toHtmlSamp(c, t, ++sampcnt, opt);
			return `<sample ${_}>`;
		});

	desc = `<p>${replaceTypes(addMarkdown(replW(desc)))} </p>`;

	if (hasData) {
		// replace %c with constructor if existent, otherwise insert after first dot
		desc = desc.replace(
			/((?=.*\%c)\.?(\s|<br>)*\%c|((?!.*\%c)\.)(\s|<br>|$)+)/,
			`.</p>\n${newCode("%c")}\t\t<p>`)
	}
	// exclude <h> and <table> tags from <p>
	return desc.replace(
		/(<\/p>)?(<br>)?(<(h\d?|table)>[^]*?<\/\4>)(\s|<br>|<p>)*/g,
		"</p>\n\t\t$3\n\t\t<p>")
		// format html code on linebreaks
		.replace(/\s*<br>\s*/g, "<br>\n\t\t")
		// expandable samples (per <sample name> tag or add to desc)
		.replace(/<sample (.*?)>/g, (m, /** @type {string} */ t) => (s = samples[t]) ?
			(delete samples[t], `</p>\n\t\t${s}<p>`) :
			(Throw(Error(`sample ${t} not found for ${name}. Have ${keys(samples) + "" || "none"}.`)), ''))
		.replace(/(“.*?”)/g, "<docstr>$1</docstr>")
		+ values(samples).concat("").reduce((a, b) => a + b);
}

/** 
 * @param {DSFunction} f 
 * @returns {DSMethod}
 * */
function fillMissingFuncProps(f) {
	if (!f.name) {
		Throw(Error(`missing name in ${tos(f)}`));
		process.exit();
	}

	// default descriptions and capitalizing
	if (!f.desc) f.desc = f.name[0] + f.name.slice(1)
		.replace(/([A-Z]+)/g, " $1").toLowerCase();

	if (!f.shortDesc?.trim())
		f.shortDesc = f.desc;

	// start upper case without trailing dot
	f.shortDesc = f.shortDesc.charAt(0).toUpperCase() +
		f.shortDesc.slice(1, f.shortDesc.endsWith('.') ? -1 : undefined);

	f.desc = f.desc.replace(/%(\w+)%/g, (m, /** @type {string} */ t) => conf.tmpl[t] || Throw(`template ${t} not found`) || '');
	f.shortDesc = f.shortDesc.replace(/%(\w+)%/g, (m, /** @type {string} */ t) => conf.tmpl[t] || Throw(`template ${t} not found`) || '');

	if (f.pNames == undefined) f.pNames = [];
	if (f.pTypes == undefined) f.pTypes = [];
	return /** @type {DSMethod} */ (f);
}

/** converts a function object into an html snippets object 
 * @param {DSMethod} f */
function getDocData(f, useAppPop = false) {
	/** @type {string[]} */
	var mArgs = [];
	var i, type, fretval = "";

	// abbrev for controls
	if (f.name && isControl(f.name) && !f.abbrev)
		f.abbrev = getAbbrev(f.name);

	// convert constructor line
	for (i in f.pNames) {
		if (useAppPop) {
			// @ts-ignore
			mArgs.push(newAppPopup(f.pNames[i], typeDesc(f.pTypes[i]))
				.replace(/<\/?\w+?>/g, ""));
		}
		else {
			let type = f.pTypes[i];
			mArgs.push(toArgPop(f.pNames[i], type));
		}
	}

	const smArgs = mArgs.length ? String(mArgs) + " " : "";

	// convert return value
	if (f.retval)
		fretval = (f.pNames.length ? "\n\t\t\t" : " ") + "→ " + typeDesc(f.retval);

	// return data if there are no subfunction
	if (!f.subf || !keys(f.subf).length)
		return { args: smArgs, ret: fretval, mets: "" }

	var k, methods = "",
		// function list
		mkeys = keys(f.subf).filter(nothidden).sort(sortAsc);

	if (dbg) app.UpdateProgressBar(progress, curScope + '.' + f.name + " generate subfunctions");
	for (k = 0; k < mkeys.length; k++) {
		var met = f.subf[mkeys[k]], retval = "", type;

		// load base func
		while (typeof met === "string") {
			if (!met.startsWith('#')) Throw(Error(`basefunc must have # prefix. got '${met}'`)), process.exit();
			if (/[a-z]/i.test(met[1])) met = met.slice(1);
			if (!base || !base[met]) Throw(Error("basefunc " + met + " not found!")), process.exit();
			met = base[met];
		}

		curSubf = met.name = met.name || mkeys[k];
		// force use of entry name
		//if (mkeys[k].endsWith('!')) met.name = mkeys[k].slice(0, mkeys[k].length - 1);

		// load params from base
		while (typeof met.params == "string") {
			if (!met.params.startsWith('#')) Throw(Error(`params must have # prefix. got '${met}'`)), process.exit();
			if (/[a-z]/i.test(met.params[1])) met.params = met.params.slice(1);
			if (!base || !base[met.params])
				Throw(Error("params " + met.params + " not found!")), process.exit();
			met.pNames = base[met.params].pNames || [];
			met.pTypes = base[met.params].pTypes || [];
			met.params = base[met.params].params || undefined;
		}

		if (hidden(curSubf)) continue;

		const m = fillMissingFuncProps(met);

		//convert return value
		if (m.retval)
			retval = (!m.isval && m.pNames.length ? "\n\t\t\t" : " ") + "→ " + typeDesc(m.retval);

		//convert function types
		var mdesc = m.desc || "";
		if (!m.isval) mdesc = `<b>${f.abbrev}.${curSubf}</b><br>` + mdesc;

		var args = [], metpop = newPopup("dsc", curSubf,
			addMarkdown(replaceTypes(replW(mdesc), true)),
			getAddClass(m) || (has(allKeys, curSubf) ? ' class="baseFunc"' : ""));

		if (!m.isval) {
			for (i in m.pNames)
				args.push(toArgPop(m.pNames[i], m.pTypes[i]));

			metpop += args.length ? `(${args.join(",")} )` : "()";

			if (has(curSubf, '.'))
				metpop = curSubf.split(".").fill("  ").join("") + metpop.italics();

			methods += subfBase.replace("%s", metpop + retval);
		}
		else methods += subfBase.replace("\n\t\t", "").replace("%s", metpop.trim() + retval);
	}
	curSubf = "";

	return { args: String(mArgs) + " ", mets: methods, ret: fretval }
}

/** read and return html converted example snippets file 
 * @param {string} name */
function getSamples(name) {
	var sampcnt = 0, s = ReadFile(getSrcDir(D_SCOPE, `samples/${name}.txt`), " ", !scope[name].isval).replace(/\r/g, '');
	/** @type {Obj<string>} */
	var samples = {};

	s.replace(/<sample( (.*?))?(( |norun)*)>([^]*?)<\/sample\1?>/g,
		(m, _, name, opt, _1, c) => samples[name || sampcnt + 1] = toHtmlSamp(c, name, ++sampcnt, opt)
	);

	return samples;
}

/** convert a sample to html code
 * @param {string} code
 * @param {string} name
 * @param {number} index
 * @param {string} options
 */
function toHtmlSamp(code, name, index, options) {
	var hasBold = has(code, "<b>") && code.indexOf("</b>") > code.indexOf("<b>");
	if (!hasBold) Warn(`${curDoc} sample "${name || ''}" has no bold area\n`);

	code = code.trim().replace(/<\/?b>/g, "§b§");
	code = Prism.highlight(code, Prism.languages.javascript, 'javascript')
		.replace(/\t/g, "    ")
		.replace(/    /g, "&#160;&#160;&#160;&#160;")
		.replace(/\n/g, "<br>\n\t\t\t\t")

	return htmlSample(name, String(index), code, hasBold, !has(options, "norun"));
}


/** @param {DSFunction} m */
function getAddClass(m) {
	if (!m || typeof m.desc != "string") return '';
	if (m.desc.startsWith('#')) {
		m.desc = ReadFile(getSrcDir(D_SCOPE, 'desc/' + m.desc.slice(1)), "").replace(/\r/g, '');
		if (!m.desc) return '';
	}

	if (has(m.desc, "<deprecated")) return ' class="deprHint"';
	if (has(m.desc, "<xfeature")) return ' class="xfeatHint"';
	if (has(m.desc, "<premium")) return ' class="premHint"';
	return '';
}

/** returns a formatted description of a type - used for subfunction return values
 * @param {string} stypes */
function typeDesc(stypes) {
	const types = stypes.split("||").map((/** @type {string} */ type) => [type.slice(0, 3)]
		.concat(type
			// custom type desc
			.replace(/^(...):([^-]*)/, (m, /** @type {string} */ btype, desc) =>
				(tDesc[btype + "_tmp"] = desc, btype + "_tmp"))
			// sample vals
			.replace(/-/, '\x01').split('\x01')
		)
	);

	var last = "";
	var s = types.map(
		(/** @type {any[]} */ type, i) => (last = "</b>", tName[type[0]]) ?
			"<b>" + tName[type[0]] + (tDesc[type[1]] ?
				(last = "</i>", ":</b> <i>" + tDesc[type[1]]) : ""
			) + (type[2] ? `:${last} ` : last) : ""
	);

	var ss = types.map(
		function (type, i) {
			if (s[i] && type.length == 3) {
				//allow limited values for parameters
				switch (type[0]) {
					case "num": return s[i] + rplop(type[2]);
					case "str": return s[i] + rplop(type[2], true);
					case "lst":
					case "obj":
					case "jso": return s[i] + replaceTypes(type[2], false);
					default:
						if (!type[0].endsWith("o"))
							Throw(Error("unknown typex " + type[1]));
						if (curDoc.endsWith(type[2] + ".htm"))
							return s[i] + type[2];
						if (!type[2].startsWith("@") && !scope[type[2]])
							Throw(Error("link required for " + type[2]));
						return s[i] + newLink(type[2].replace("@", "") + (type[2].match(/\.\w{2,5}$/) ? "" : ".htm"),
							type[2].replace(/@.*\/|\.\w{2,5}$/g, "").replace(regConPrefix, ""));
				}
			}
			else
				return s[i] || Throw(Error("unknown type " + type[1]));
		}).join("<br>\n\t\t\t").replace(/(“.*?”)/g, "<docstr>$1</docstr>");

	if (types.length > 1) ss = '<span style="display:inline-block;vertical-align: middle;">' + s + "</span>";
	return ss;
}

/** nearly equal to typeDesc, but returns an app.popup for arguments
 * @param {string} name
 * @param {DSFunction | string} stypes
 * @param {boolean} [doSwitch]
 */
function toArgPop(name, stypes, doSwitch) {
	if (Array.isArray(stypes)) return "";

	// function callbacks
	if (typeof stypes == "object") {
		if (stypes.pNames == undefined) stypes.pNames = [];
		var s1 = newPopup("fnc", name,
			("<b>function</b>(\n\t\t" + stypes.pNames.map(
				function (n, i) {
					if (Array.isArray(stypes) || !stypes.pTypes) return;
					const val = stypes.pTypes[i];
					if (typeof val == "object" || has("lst,obj", val.slice(0, 3)))
						// for lists and objects in callback parameters switch popups
						return toArgPop(n, val, true);
					else
						// primitive types get a primitive popup
						return toArgAppPop(n, val);
				}
			).join(",\n\t\t") + "\n\t)").replace(/\(\s+\)/, "()"), false
		);
		if (doSwitch) s1 = s1.trim().replace(/href="#pop_(..._...)"/, 'href="" ' + switchPop);
		return s1;
	}

	// multiple types
	var types = stypes.split("||").map(
		(		/** @type {string} */ type) => [type.slice(0, 3)]
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
	var last = "";
	var s2 = types
		.map((/** @type {any[]} */ type, i) => "<b>" + tName[type[0]] +
			(last = "</b>", tDesc[type[1]] ?
				(last = "</i>", ":</b> <i>" + tDesc[type[1]]) : ""
			) + (type[2] ? `:${last} ` : last)
		);

	// add formatted possible values
	var str = types.map(function (type, i) {
		if (type.length == 3) {
			switch (type[0]) {
				case "num":
				case "str":
				case "bin":
					if (type.length == 3 && has(type[2], ':'))
						type[2] = replaceTypes(type[2], true);
					return s2[i] + rplop(type[2], type[0] == "str");
				case "lst":
				case "obj": return s2[i] + replaceTypes(replW(type[2]), true);
				default:
					if (!type[0].endsWith("o"))
						Throw(Error("unknown typex " + type[1]));
					if (curDoc.endsWith(type[2] + ".htm"))
						return s2[i] + type[2];
					if (!type[2].startsWith("@") && !scope[type[2]])
						Throw(Error("link required for " + type[2]));
					return s2[i] + newLink(type[2].replace("@", "") + (type[2].match(/\.\w{2,5}$/) ? "" : ".htm"),
						type[2].replace(/@.*\/|\.\w{2,5}$/g, "").replace(regConPrefix, ""));
			}
		}
		else return s2[i];
	});

	// build popup id, "std_type" for common or "type_index" for individual popups
	// save popup definition and return popup text (= link)
	if (types.length == 1) {
		var type = types[0];
		if (type[1].endsWith("_tmp")) type[2] = "true";
		var pop_id =
			(type[1].match("_") || type[2] ? "" : "std_") +
			(!type[2] ? type[1].replace("?", "ukn") :
				type[0] + "_" + incpop(type[0], 1)
			);
		if (pop_id.match(/[^_\w]/)) Throw(Error("invalid popup id " + pop_id));

		var s3 = newPopup(pop_id, name, str[0].replace(/ShowPopup\('.*?'\)/g,
			(/** @type {string} */ m) => m.replace(/“/g, "&ldquo;").replace(/”/g, "&rdquo;")), "");
		if (doSwitch) s3 = s3.trim().replace(/href="#pop_(..._...)"/, 'href="" ' + switchPop);
		return s3;
	}
	else
		// for values with multiple types
		return newPopup("mul", name, str.join("<br>"));
}

/**
 * @param {string} name
 * @param {string} stypes
 */
function toArgAppPop(name, stypes) {
	var types = stypes.split("||")
		.map((/** @type {string} */ type) => [type.slice(0, 3)]
			.concat(type.replace('-', '\x01')
				.split('\x01'))
		);

	return newAppPopup(
		name, types.map(
			(/** @type {string | any[]} */ type) => tName[type[0]].replace(/<[^>]*>/g, '') +
				(tDesc[type[1]] ? ": " + tDesc[type[1]] : "") +
				(type.length == 3 ? ": " + rplop(type[2], type[0] == "str") : "")
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
		.replace(/  /g, "&#160;&#160;");
}

/** increase special popup counters and returns its id
 * @param {string} type
 * @param {number} i
 */
function incpop(type, i) {
	if (i) spop[type] += i;
	return hex(spop[type] || 0);
}

/** accept formats: "name":"desc" name:type name:"types" name:"type-values"
 * using name:'...' will force app popups
 * @param {string} s
 * @param {boolean} [useAppPop]
 */
function replaceTypes(s, useAppPop) {
	var _s = s.replace(/<(style|a)\b.*?>.*?<\/\1>|style=[^>]*/g, '');
	_s.replace(/(\b([\w_.#-]+)|"(.*?)"):([a-z]{3}(_[a-z]{3})?\b)?-?("[^"]*|'[^']*| ?\w(\\[\s\S]|[^.,:”<|}\]])*)?['"]?/g,
		function (m, _1, /** @type {string} */ name, /** @type {string} */ aname, /** @type {string} */ type, _2, /** @type {string} */ desc) {
			var r, space = '', tapop = false;
			if (!name) name = aname;
			if (!type && (!desc || desc[0] == ' ') || name.startsWith("Note")) return '';

			if (desc) {
				if (desc.endsWith(' ')) space = ' ';
				desc = desc.slice(Number(desc[0] == '"'), space ? -1 : undefined);
				if (desc[0] == "'") tapop = true, desc = desc.slice(1);
				if (tName[desc.slice(0, 3)] && (!desc[4] || !desc[4].match(/[a-z]/i))) type = desc, desc = '';
			}

			if (type) {
				if (tName[type.slice(0, 3)]) { if (desc) type += '-' + desc, desc = ''; }
				else
					desc = type + (desc || ''), type = '';
			}

			if (useAppPop || tapop) {
				if (type && !desc) r = toArgAppPop(name, type);
				else r = newAppPopup(name, type ? tName[type.slice(0, 3)] +
					(tDesc[type] ? ": " + tDesc[type] : "") : desc.replace(/\\n|\n/g, '$n$'));
			}
			else if (type) r = toArgPop(name, type);
			else r = newPopup("dsc", name, desc);

			s = s.replace(m, r + space);
			return '';
		}
	);
	return s;
}

/** convert markdown symbols to html
 * @param {string} s */
function addMarkdown(s) {
	return s
		// links
		.replace(/([^\\]|^)\[([^\]}]*)\]\((.*?)\)/g, function (match, /** @type {string} */ white, name, /** @type {string} */ url) {
			if (name && !url) url = name;
			if (!name && url) name = url;
			// web link ? external : internal
			return white + (url.startsWith("http") ?
				`<a href="${url}" onclick="return OpenUrl(this.href);">` :
				`<a href="${url}" data-ajax="false">`)
				+ `${name}</a>`;
		})
		// link + onclick
		.replace(/([^\\]|^)\[([^\]}]*)\]{(.*?)}/g, function (match, /** @type {string} */ white, name, /** @type {string} */ script) {
			script = script.replace(/"/g, "&quot;").replace(/([*_`~])/g, "\\$1");
			return white + `<a href="" onclick="${script}">${name}</a>`;
		})
		.replace(/(<br>|^)(#+) ([^<]*)/g, (_, /** @type {string} */ white, /** @type {string | any[]} */ h, /** @type {string} */ title) =>		// ## headline
			white + `<h${h.length}>${title.replace(/ (\(.+?\))/, "<sup>$1</sup>")}</h${h.length}>`)
		//.replace(/([^\\]|^)\*\*(\s*[a-z][^]*?[^\\])\*\*/gi, "$1<strong>$2</strong>")
		.replace(/([^\\]|^)\*\*([a-z]{3,}?[^\\])\*\*/gi, "$1<strong>$2</strong>")   // **bold**
		.replace(/([^\\]|^)\*\*([^]*?[^\\])\*\*/g, "$1<b>$2</b>")   // **bold**
		.replace(/([^\\]|^)__([^]*?)__/g, "$1<u>$2</u>")			// __underlined__
		.replace(/([^\\]|^)\*([^]*?[^\\])\*/g, "$1<i>$2</i>")		// *italic*
		.replace(/([^\\]|^)_([^]*?[^\\])_/g, "$1<i>$2</i>")			// _italic_
		.replace(/([^\\]|^)`([^]*?[^\\])`/g, "$1<kbd>$2</kbd>")		// `monospace`
		//.replace(/([^\\]|^)```([^]*?[^\\])```/g, "$1<kbd>$2</kbd>")   // `monospace`
		.replace(/([^\\]|^)~~([^]*?[^\\])~~/g, "$1<s>$2</s>")		// ~~strikethrough~~
		// additional notes
		.replace(/<(premium|deprecated|xfeature)(.*?)>/g, (m, /** @type {string} */ n, a) => hints[n].replace("%s", a))
		.replace(/([^\\]|^)@(([^\/\n<>, ]+\/)*(\w+?))(#(\w+))?\b/gi, (m, b, n, _, f, H, h) =>  // @DocReference
			`${b}<a href="${n}.htm${(H || '').replace(/_/g, ' ')}" data-ajax="false">${(h || f).replace(/_/g, ' ')}</a>`)
		.replace(/\\([_*~@])/g, "$1");								// consume \ escaped markdown
}

/** @type {Obj<string>} */
const special = { n: '\n', r: '\r', t: '\t', b: '\b', f: '\f' };

/** convert int to 3-digit hex
 * @param {number} v */
function hex(v) { return ("00" + v.toString(16)).replace(/^0+(...)/, "$1"); }
/** returns the type name or description of a value or the value itself
 * @param {string} v */
function getv(v) { return tDesc[v] || tName[v] || v; }
/** returns a comma separated list of object keys
 * @param {any} o */
function skeys(o) { return "" + keys(o); }
/** replaces \ paceholders with its placeholder 'name'
 * @param {string} s */
function reprs(s) { return s.replace(/\n/g, "\\n").replace(/\t/g, "\\t"); }
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
/** @param {string | Error} e */
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
function newAppPopup(name, desc) { return appPopup.replace("%s", desc.replace(/\n|<br>/g, '\\n')).replace("%s", name); }
/**
 * @param {string} target
 * @param {string} text
 */
function newLink(target, text) { return `<a href="${target}" data-ajax="false">${text}</a>`; }
/** @param {string} code */
function newCode(code) { return codeBase.replace("%s", code); }

/**
 * @param {string} type
 * @param {string} name
 * @param {string} desc
 * @param {string | false} [addClass]
 */
function newPopup(type, name, desc, addClass) {
	if (addClass !== false) desc = desc.replace(/(“.*?”)/g, "<docstr>$1</docstr>");

	desc = desc.trim();
	var pop_id = popDefs[desc];
	if (!pop_id) {
		pop_id = spop[type] == undefined ? type : pop_id = type + "_" + incpop(type, 1);
		popDefs[desc] = pop_id;
	}

	return newTxtPopup(pop_id, name, addClass);
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
var		// subfunction
	subfBase = '\t\t<div class="samp">%s\n\t\t</div>\n',
	// navigator list item
	naviItem = '\n\t\t\t<li><a href="%s"%s>%s</a></li>',
	// reopen popup onclick code
	switchPop = 'onclick="switchPopup(this, \'#pop_$1\')"',
	// app-popup tag
	appPopup = '<a href="" onclick="app.ShowPopup(\'%s\')">%s</a>',
	// constructor and inline examples
	codeBase = '\n\t\t<div class="samp">\n\t\t%s\n\t\t</div>\n\n',
	// jquery-popup link tag
	txtPopup = '\n\t\t\t<a href="#pop_%s" data-transition="pop" data-rel="popup"%s>%s</a>',
	// popup object
	defPopup = '<div data-role="popup" id="pop_%s" class="ui-content">%s</div>',
	// subfunction list
	subfHead = `<h3>Methods</h3>\n\t\t<p><br>The following methods are available on the <strong>%t</strong> object:</p>\n\n%f`,
	/** @type {Obj<string>} */
	hints = {
		deprecated: "<div class='deprHint'><strong>Note: This function is deprecated.%s</strong></div>",
		premium: "<div class='premHint'><strong>Note: This function is a premium feature. Please consider subscribing to Premium to use this feature and support DroidScript in its further development.</strong></div>",
		xfeature: "<div class='xfeatHint'><strong>ATTENTION: This function is available in the DS X-Versions only as it doesn't meet the GooglePlay security requirements. APKs built with X-Versions are for private use only.</strong></div>",
	};

function htmlSample(title = "", id = "", code = "", bold = false, run = false) {
	if (bold) code = code.replace(/§b§([^]+?)§b§/g, `<b id="snip${id}" style="font-size:100%">$1</b>`);
	return `
		<div data-role="collapsible" data-collapsed="true" data-mini="true" data-theme="a" data-content-theme="a">
			<h3>Example${title && ' - ' + title}</h3>
			<div id="examp${id}" style="font-size:70%">
				${code}
			</div>
			<div name="divCopy" align="right">
			${bold ? `<a href="#" data-role="button" data-mini="true" data-inline="true" onclick="copy( snip${id} )">&#160;&#160;&#160;&#160;Copy&#160;&#160;&#160;&#160;</a>
			` : ''}<a href="#" data-role="button" data-mini="true" data-inline="true" onclick="copy( examp${id} )">Copy All</a>
			${run ? `<a href="#" data-role="button" data-mini="true" data-inline="true" onclick="demo( examp${id} )">&#160;&#160;&#160;&#160;&#160;&#160;Run&#160;&#160;&#160;&#160;&#160;&#160;</a>
			` : ''}</div>
		</div>\n\n\t\t`.replace(/%i/g, id).replace(/%t/g, title);
}

function getHead(title = "", d = 0) {
	const sd = new Array(d).fill("../").join("");
	return `<head>
	<title>${title}</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" id="themeJQ" href="css/themes/default/theme-dark.min.css"/>
	<link rel="stylesheet" href="css/themes/default/jquery.mobile.structure-1.2.0.min.css"/>
	<link rel="stylesheet" id="themePrism" href="css/themes/prism/dark.min.css"/>
	<link rel="stylesheet" id="themeDocs" href="css/docs-dark.min.css"/>

	<script src="js/forward.js"></script>
	<script src="js/energize-min.js"></script>
	<script src="js/jquery-1.8.1.min.js"></script>
	<script src="js/jquery.mark.es6.min.js"></script>
	<script src="../app.js"></script>
	<script src="js/common.js"></script>
	<script src="js/example.js"></script>
	<script src="js/jquery.mobile-1.2.0.min.js"></script>
</head>`.replace(/(href|src)="(?!http|\/)/g, '$1="' + sd);
}

function htmlNavi(title = "", content = "", navs = "", filter = false) {
	return `
<!DOCTYPE html>
<html>

${getHead(title, 0)}

<body>
<div data-role="page" data-theme="a" data-ajax="false" data-add-back-btn="true">

	<div data-role="header" data-position="fixed">
		<a href="#" class="ui-btn-left" data-icon="arrow-l" onclick="history.back(); return false">Back</a>
		<h1>${title}</h1>
		<a class="ui-btn-right" data-icon="gear" data-iconpos="notext" onclick="tglTheme()"></a>
	</div><!-- /header -->

	${content}

	<div data-role="content">
		<ul data-role="listview" data-inset="true" data-filter="${filter}">
		${navs}
		</ul>
	</div><!-- /content -->
</div><!-- /page -->
</body>
</html>\n`;
}

function htmlDoc(title = "", desc = "", subf = "", construct = "") {
	title = title.replace(/^\d+\s*/, '');
	return `
<!DOCTYPE html>
<html>
	
${getHead(title, 1)}
	
<body>
<div data-role="page" data-theme="a">

	<div data-role="header" data-position="fixed">
		<a href='#' class='ui-btn-left' data-icon='arrow-l' onclick="history.back(); return false">Back</a>
		<h1>${title}</h1>
		<a class="ui-btn-right" data-icon="gear" data-iconpos="notext" onclick="tglTheme()"></a>
	</div>

	<div style="position:fixed; top:40px; width:100%; text-align:center; z-index:1101;">
		<div id="appPopup" class="androidPopup">Hello World</div>
	</div>

	<div data-role="content">
		${desc.replace("%c", construct)}
		${subf}
	</div>

	%p
</div>
</body>
	
</html>\n`;
}

// ---------------------------- top globs --------------------------------------

//global variables
var		// constructor name prefixes
	regConPrefix = /^(Create|Open|Add)/i;


// ---------------------------- DocsModifier.js globs --------------------------

var
	// html char placeholders
	_htm = { comma: ',', colon: ':', bsol: '\\', period: '.', lowbar: '_', verbar: '|', "#160": " ", nbsp: " ", ldquo: "“", rdquo: "”" },
	// cwd
	path = __dirname + "/";


/** @param {string} [l] */
function getl(l) { if (l == undefined) l = lang; return l == "en" ? "" : "-" + l; }
/** @param {string} s */
function l(s) { console.log(`-----${s}-----`); return s; }
/** @param {string} name */
function hidden(name) { return !(force || !name.match(regHide)); }
/** @param {string} name */
function nothidden(name) { return !hidden(name); }
/** @param {string | number} c */
function isnum(c) { return c >= '0' && c <= '9'; }
/** @type {(l:string|string[], v:string) => boolean} */
function has(l, v) { return !!l && l.indexOf(v) > -1; }
/** @ts-ignore @type {<T extends object>(O: T) => T[keyof T][]} */
function values(o) { return Object.values(o); }
/** @ts-ignore @type {<T>(O: T) => (Extract<keyof T, string>)[]} */
function keys(o) { return Object.keys(o); }
/** @param {any} v */
function d(v) { console.log(v); return v; }
function saveScope() { app.WriteFile(getSrcDir(D_SCOPE, "obj.json"), tos(scope)); }
/**
 * @param {any} a
 * @param {any} b
 */
function sortAsc(a, b) {
	const sa = String(a).replace(/[^a-z0-9]/gi, "") || String(a);
	const sb = String(b).replace(/[^a-z0-9]/gi, "") || String(b);
	var la = sa.toLowerCase(), lb = sb.toLowerCase();
	return la == lb ? sa < sb ? 1 : -1 : la > lb ? 1 : -1;
}

/** @param {string} name */
function isControl(name) { return !!scope[name].subf; }

/** @param {string} s */
function getAbbrev(s) {
	var count = 0;
	// remove 'Create'
	return s.slice(6)
		// count uppercases
		.replace(/[A-Z]/g, function (c) { count++; return c; })
		// remove 'aeiou'
		.replace(/[aeiou]/g, '')
		// remove doubled letters ('tt' -> 't')
		.replace(/(.)\1+/g, '$1')
		// leave lowercase letters while sum(uppercase + lowercase) < 3
		.replace(/[b-z]/g, function (c) { return ++count > 3 ? '' : c })
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
	if (typeof o == "object") {
		var okeys = Object.keys(o).filter(k => o[k] !== undefined);
		if (!okeys.length) return "{}"
		return "{\n" + okeys.map(k => intd + `\t"${k}": ${tos(o[k], intd + "\t")}`).join(",\n") + `\n${intd}}`;
	}
	return JSON.stringify(o);
}

/**
 * @param {string} p
 * @return {number}
 */
function newestFileDate(p) {
	var files;
	if (arguments.length > 1) files = [...arguments];
	else if (!p.endsWith('/') && app.FileExists(p)) return app.GetFileDate(p).getTime();
	else if (!app.FolderExists(p)) return 0;
	else files = app.ListFolder(p).map((/** @type {string} */ f) => p + (p.endsWith('/') ? '' : '/') + f);
	return files.length ? Math.max.apply(null, files.map((f) => newestFileDate(f))) : 0;
}

// ---------------------------- nodejs app wrapper -----------------------------


var help = `${process.argv.slice(0, 2).join(" ").replace(path, "")} [OPTIONS] [PATTERNS]
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
	                  	RegEx pattern

EXAMPLES:
	generate.js	      	generate all defined languages (in generate.js)
	generate.js en    	generate all english docs
	generate.js en.app	generate english docs of scope 'app'
	generate.js app   	generate docs of scope 'app' in all defined languages
	generate.js app.^C	generate all docs starting with 'C'`;

if (typeof app == "undefined") {
	app = {
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
		UpdateProgressBar: (i, t) => console.log("\x1b[1A\x1b[K" + `${i}% ${t || 'Initializing'}`),
		HideProgressBar: () => console.log("\n\x1b[1A\x1b[K100% done."),
		ShowPopup: console.log,
		Alert: console.log
	}

	var nogen = false, startServer = false, clean = false, addcfg = false;

	for (var spat of process.argv.slice(2)) {
		if (spat.startsWith("-")) {
			const pat = spat.split("=");
			switch (pat[0]) {
				case "-n": case "--nogen": nogen = true; break;
				case "-v": case "--version": patVer = pat[1]; break;
				case "-V": case "--verbose": dbg = true; break;
				case "-c": case "--clear": clear = true; break;
				case "-C": case "--clean": clean = true; break;
				case "-u": case "--update": updateVer = true; break;
				case "-f": case "--force": force = true; break;
				case "-h": case "--help": app.Alert(help); process.exit(0); case "-s": startServer = true; break;
				case "-al": case "--addlang":
					if (pat.length != 3) Throw(Error("missing option args. expected <code> <name>"));
					if (pat[1].length != 2) Throw(Error("lang code must have 2 digits"));
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
						conf.vers.push(pat[1]);
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
		else {
			var p = spat.match(/(^[a-z]{2})?(\.|^|$)([a-zA-Z]{3,})?(\.|$)(.*)?/);
			if (!p) throw Error("invalid pattern " + spat);
			patLang = /** @type {LangKeys} */ (p[1]);
			patScope = /** @type {ScopeKeys} */ (p[3]);
			patFunc = p[5];
		}
	}

	if (clean) {
		const glob = require('glob').sync;
		for (const dir of glob(baseDir + '*/')) {
			console.log(`Deleting ${l} ...`);
			app.DeleteFolder(dir);
		}
		console.log(`Deleting ${outDir} ...`);
		app.DeleteFolder(outDir);
		console.log("done.");
		process.exit();
	}

	if (addcfg) app.WriteFile("conf.json", tos(conf));

	if (!nogen) Generate();
	if (startServer) {
		var express = require('express');
		var server = express();
		server.use("/", express.static("../out"));
		server.listen(8081);
		console.log("webserver started on http://localhost:8081");
	}
}
