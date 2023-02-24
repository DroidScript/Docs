#!/usr/bin/env node

//TODO:WebServer,WebSocket,WebSocket conn.Ex.,gfx
var curDoc, curSubf, curScope, lang;
var warnEnbl = false, conf, dbg = false, clean = false, force = false;
var scope, base, navs, regGen, regHide, regControl, progress;

if (typeof OnStart == 'undefined') OnStart = g_OnStart;

function g_OnStart() { }

/**
 * @param patLang {string} optional RegEx pattern
 * @param patScope {string} optional RegEx pattern
 * @param patFunc {string} optional RegEx pattern
 */
function Generate(patFunc, patScope, patLang)
{
	conf = JSON.parse(ReadFile("conf.json", '{"langs":{},"scopes":{}}', true));
	regHide = RegExp(conf.regHide);
	regControl = RegExp(conf.regControl);

	if (patLang && !conf.langs[patLang])
		Throw(new Error(`language ${patLang} not specified in conf.json`));
	if (patScope && !conf.scopes[patScope])
		Throw(new Error(`scope ${patScope} not specified in conf.json`));

	for (var l in conf.langs) if (l.match(patLang) != null)
	{
		lang = l;

		if (patScope + patFunc == "")
		{
			// delete old generated files
			if (clean) app.DeleteFolder("docs" + getl());
			if (clean || !app.FolderExists("docs" + getl()))
				app.CopyFolder("docs-base", "docs" + getl());
		}

		for (var s in conf.scopes) if (s.match(patScope) != null)
			try { generateScope(s, patFunc); }
			catch (e) {
				console.error(/*\x1b[31m*/ `while generating ${curScope} ${curDoc || ''}: ${curSubf || ''}`);
				Throw(e);
			}
	}
}

function generateScope(name, pattern)
{
	curScope = name;
	scopeDir = lang + `/${curScope}/`;
	regGen = RegExp(pattern || ".*");

	if (!app.FolderExists(lang)) Throw(Error(`Language '${lang}' doesn't exist.`));

	if (!app.FolderExists(scopeDir) || !(app.FileExists(scopeDir + "obj.json") || app.FolderExists(scopeDir + "desc")))
		Throw(Error(`Scope '${lang}.${name}' doesn't exist.`));

	if (!app.FolderExists(scopeDir + "samples"))
		app.MakeFolder(scopeDir + "samples");

	// read categories
	curDoc = scopeDir + "navs.json";
	navs = JSON.parse(ReadFile(curDoc, "{}"));

	// check file dates for update
	if (!force && !clean && newestFileDate(`docs${getl()}/${curScope}`) > newestFileDate(scopeDir, "generate.js"))
		return console.log(`Skipped ${lang}.${name}.${pattern || '*'}`);

	app.ShowProgressBar(`Generating ${lang}.${name}.${pattern || '*'}`);

	// read scope members
	curDoc = scopeDir + "obj.json";
	if (app.FileExists(curDoc))
	{
		scope = JSON.parse(ReadFile(curDoc, "false"));
		if (!keys(navs).length) navs = keys(scope);
		else navs.All = keys(scope);

		// read base functions used in scope
		curDoc = scopeDir + "base.json";
		if (base = JSON.parse(ReadFile(curDoc, "false"))) {
			// additionally, read /*#obj*/ marked functions from .js file if exists
			if (!app.FileExists(scopeDir + curScope + ".js"))
				base.all = keys(base).map(k => base[k].name || k);
			else
				base.all = app.ReadFile(scopeDir + curScope + ".js")
					.split("/*#obj*/ self.").slice(1)
					.map(v => v.slice(0, v.indexOf(" ")));

			// additionally, read Obj.prototype functions from utils.js if exists
			if (curScope == "app" && app.FileExists(scopeDir + "util.js"))
				base.all.concat(app.ReadFile(scopeDir + "util.js")
					.split("Obj.prototype.").slice(1)
					.map(v => v.slice(0, v.indexOf(" "))))
		} else base = { all: [] }
	}
	else // no json file available
	{
		regGen = RegExp("(?=^tips$)[]|(?!^tips$)^.*" + regGen.source);
		// add files from scope folder to be generated
		scope = {}; base = false; navs = [];

		for (var n of app.ListFolder(scopeDir + "desc"))
		{
			n = n.slice(0, n.lastIndexOf("."));
			navs.push(n.replace(/^\s+/, ""));
			scope[n] = `#${n}.md`;
		}
	}

	if (!clean)
	{
		// delete navs
		if ("navs".match(regGen))
			app.ListFolder("docs" + getl()).map(f =>
				f.startsWith(name + "_") && app.DeleteFile(`docs${getl()}/` + f));
		// delete docs
		else app.DeleteFolder(`docs${getl()}/` + name);
	}

	if (!app.FolderExists(`docs${getl()}/` + name))
		app.MakeFolder(`docs${getl()}/` + name);

	// start generating
	if ("navs".match(regGen))
	{
		generateNavigators(navs, conf.scopes[curScope] || curScope);
		var missNavs = Object.entries(scope).filter(m => !m[1].hasNav).map(m => m[1].name || m[0]).filter(nothidden);
		if(base && missNavs.length > 0) console.log(`missing navigators in ${curScope}: ${missNavs.join(", ")}\n`);
	}

	generateDocs(scope);

	// update version number
	var v = 1000 * (Date.now() / 864e5 | 0);
	var vn = Number(app.ReadFile("../docs/version.txt", 0)) % 1000 + 1;
	app.WriteFile("version.txt", (v + vn).toString());
	app.HideProgressBar();
}

function generateNavigators(navs, name, pfx)
{
	curDoc = `docs${getl()}/${pfx || ''}${name.replace(/\s+/g, '')}.htm`;
	pfx = `${pfx || curScope}_`;
	var nav = '', addcontent = '';

	// function list
	if (navs instanceof Array)
	{
		for (var func of navs = navs.filter(nothidden))
		{
			if (!func) nav += "<li></li>";
			else
			{
				if (name != 'All' && scope['_'+func]) scope['_'+func].hasNav = true;
				else if (!scope[func]) Throw(`nav to deleted method ${curScope}.${func}`);
				else
				{
					if(name != 'All') scope[func].hasNav = true;
					nav += newNaviItem(
						curScope + `/${func.replace(/\s+/g, '')}.htm`,
						func.replace(/^\d+\s*/, ''), getAddClass(scope[func]));
				}
			}
		}
	}
	// name:target.htm or scope:categories association
	else if (navs instanceof Object)
	{
		for (var cat of keys(navs).filter(nothidden))
		{
			if (cat.startsWith("+html"))
			{
				addcontent += navs[cat];
				continue;
			}
			if (!navs[cat]) navs[cat] = curScope + "/" + cat + ".htm";

			// targtet file
			if (typeof navs[cat] == "string")
			{
				var m = navs[cat].match(curScope + "\\/(\\w+).htm(#(.*))?");
				var f = null, add = "";
				if (navs[cat].startsWith("http")) add += ' onclick="return OpenUrl(this.href);"';
				if (m && scope[m[1]]) f = m[3] ? scope[m[1]].subf[m[3]] : scope[m[1]];
				if (f) add += getAddClass(f), f.hasNav = true;
				nav += newNaviItem(navs[cat], cat, add);
			}
			else // new category
			{
				nav += newNaviItem(`${pfx + cat.replace(/\s+/g, '')}.htm`, cat, cat == "Premium" ? getAddClass({ desc: "<premium>" }) : null);
				var tdoc = curDoc;
				generateNavigators(navs[cat], cat, pfx);
				curDoc = tdoc;
			}
		}
	}
	else Throw(Error("Wrong catlist datatype: " + typeof navs));

	app.WriteFile(curDoc,
		(keys(navs).length < 15 || (navs instanceof Object && navs._nofilter) ? naviBase :
			naviBase.replace('data-filter="false"', 'data-filter="true"'))
			.replace("%c", addcontent)
			.replace("%l", nav)
			.replace(/%t/g, name)
	);
}

//generates doc files
function generateDocs(scope)
{
	curDoc = lang + "/" + curScope;
	var lst = keys(scope).filter(nothidden).filter(n => !!n.match(regGen));

	for (var i = 0; i < lst.length; i++) {
		progress = Math.floor(100 * i / lst.length);
		app.UpdateProgressBar(progress, curScope + '.' + lst[i]);
		generateDoc(lst[i]);
	}

	if (!"tips".match(regGen)) return;

	curDoc = lang + `/${curScope}-tips.json`;
	var tsubf, tips = { [curScope]: {} };

	for (var name of keys(scope).filter(nothidden)) {
		if (scope[name].shortDesc)
			tips[curScope][name] = scope[name].shortDesc;
		else continue;

		if (tsubf = scope[name].subf)
		{
			var tctrl = {};
			tips[scope[name].abbrev] = tctrl;

			for (var j of keys(tsubf).filter(nothidden))
			{
				if (typeof tsubf[j] == "string" && tsubf[j].startsWith('#'))
				{
					if (base && base[tsubf[j]])
					{
						if (base[tsubf[j]].shortDesc)
							tctrl[j] = base[tsubf[j]].shortDesc;
					}
					else Throw(Error(`basefunc ${tsubf[j]} not found!`));
				}
				else if (tsubf[j].shortDesc) tctrl[j] = tsubf[j].shortDesc;
			}
		}
	}
	tips = tos(tips);
	if (tips.lastIndexOf("}") != 25)
		app.WriteFile(curDoc, tips);
}

// generates one document by function name
function generateDoc(name)
{
	if (typeof scope[name] == "string")
		scope[name] = {name, desc:scope[name], noCon:true};
	else scope[name].name = scope[name].name || name;

	curDoc = `docs${getl()}/${curScope}/${(scope[name].name).replace(/\s+/g, '')}.htm`;
	resetGlobals();

	var data, funcLine = "", subfuncs = "", desc = scope[name].desc;

	// get description from external file
	if (desc && desc.startsWith('#'))
	{
		desc = ReadFile(scopeDir + `desc/${desc.slice(1)}`, false);
		if (!desc) Throw(Error(`description file ${scope[name].desc.slice(1)} linked but doesn't exist.`));
	}

	// get function specific data
	if (!scope[name].noCon)
	{
		if (dbg) app.UpdateProgressBar(progress, curScope + '.' + name + " get data");

		fillMissingFuncProps(scope[name]);
		data = getDocData(scope[name]);
		desc = scope[name].desc;

		// function line with popups
		if (scope[name].abbrev) funcLine = scope[name].abbrev + " = ";
		funcLine += `${curScope}.${name}` + (scope[name].isval ? '' : `(${data.args})`) + data.ret;

		// subfunctions of controls with popups
		if (isControl(name) && data.mets)
			subfuncs = subfHead
				.replace(/%t/g, name.replace(regConPrefix, ''))
				.replace("%f", data.mets);
	}
	if(!desc) console.log(scope[name]);

	// insert data to html base
	if (dbg) app.UpdateProgressBar(progress, curScope + '.' + name + " generate description");
	var html = htmlBase
		.replace("%b", subfuncs)
		.replace("%d", formatDesc(desc, name, !!data))
		.replace("%c", funcLine);

	if (dbg) app.UpdateProgressBar(progress, curScope + '.' + name + " adjusting");
	app.WriteFile(curDoc, adjustDoc(html, name));
	if (dbg) app.UpdateProgressBar(progress, curScope + '.' + name + " done");
}

/*----------------------------------------------------------------------------*/

// reset globals
function resetGlobals() {
	popDefs = {};
	spop = { fnc: 0, dsc: 0, mul: 0, std: 0, ukn: 0 };
	keys(conf.tname).map(k => spop[k] = 0);
}

function adjustDoc(html, name)
{
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
		}).join("\n\t");

	var toc = [];
	html.replace(/\n\t\t<h(\d)>(.*)<\/h\1>/g, function (m, i, t) {
		if (t != "%t" && i < 4) toc.push(
			new Array(Number(i)).join("    ") + ([0, 0, "• ", "- "][i] || "") +
			`<a href="" onclick="jumpTo('${t.replace(/<.*?>/g, "")}')">${t.replace(/(<sup>|$)/, "</a>$1")}<br>`);
	});
	if (toc.length)
	{
		toc.unshift("<b>Content:</b><br>");
		toc.unshift('\n\t\t<div class="samp samp-inline" style="font-size:revert; padding:10px 15px">');
		toc.push("</div>\n\n\t\t");
	};

	html = html
		// table of contents
		.replace(/("content">\n\t\t)/, `$1${toc.join("\n\t\t")}`)
		// title occurances
		.replace(/%t/g, name.replace(/\d+\s*/, ''))
		// popup object list
		.replace(/%p/, popList)
		// additional notes
		.replace(/<(premium|deprecated|xfeature)(.*?)>/g, (m, n, a) => eval(n + "Hint").replace("%s", a))
		// colored passages
		.replace(/<(red|greed|blue|grey)>(.*?)<\/\1>/g, '<$1>$2</$1>')
		// some html char placeholders
		.replace(/&(.+?);/g, (m, v) => _htm[v] || m)
		// remove special whitespace from tables
		.replace(/([\n\t ]+)(<\/?t([rhd]|head|body|able))/g,
			(m, w, t) => w.replace(/\t/g, "    ").replace(/ /g, ' ') + t)

		// text indentation
		.replace(/((\n\t{1,3})(    )+)((.*?<br>\1?)+)/g, (m, w, t, _1, c, _2) =>
			`${t}<span style="display:inline-block;padding-left:${w.split("    ").length - 1}em;">` +
			`${c.replace(RegExp(w + "|^|$", 'g'), w.replace(/    /g, '\t')).slice(0, -1)}</span><br>`)
		.replace(/((\n\t{1,3})(    )+)((.*?<br>\1?)+)/g, (m, w, t, _1, c, _2) =>
			`${t}<span style="display:inline-block;padding-left:${w.split("    ").length - 1}em;">` +
			`${c.replace(RegExp(w + "|^|$", 'g'), w.replace(/    /g, '\t')).slice(0, -1)}</span><br>`)
		.replace(/((\n\t{1,3})(    )+)((.*?<br>\1?)+)/g, (m, w, t, _1, c, _2) =>
			`${t}<span style="display:inline-block;padding-left:${w.split("    ").length - 1}em;">` +
			`${c.replace(RegExp(w + "|^|$", 'g'), w.replace(/    /g, '\t')).slice(0, -1)}</span><br>`)
	// .replace(/(^|\n)([\t ]*- )(.*)/g, '$1$2<span style="display:inline-block">$3</span>')

	// replace <js> and <bash> tags with sample
	html = html.replace(
		/(\s|<br>)*<(js|bash|smp|java|json)\b(( |nobox|noinl)*)>(\s|<br>)*([^]*?)(\s|<br>)*<\/\2>((\s|<br>)*)/g,
		function (m, w1, lang, options, _, _, code, _, w2, _) {
			options = options.split(" ");
			if (w1) w1 = m.slice(0, m.indexOf(`<${lang}`));
			if (Prism.languages[lang]) {
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

			if (has(options, "nobox")) return `${w1 || ''}${code}${w2 || ''}`;
			else if (has(code, "<br>") || has(options, "noinl")) return `</p>\n${newCode(code)}\t\t<p>`
			else return `${w1 || ''}<span class="samp samp-inline">${code}</span>${w2 || ''}`;
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
		.replace(/\n\s*<br>\n(\s+)/g, (m, w) => `\n${w.replace(/ /g, " ")}<br>\n${w}`)
		// remove trailing whitespace
		.replace(/[ \t]+\n/g, "\n");

	if (dbg) app.UpdateProgressBar(progress, curScope + '.' + name + " write changes");
	return html;
}

// returns an html formatted description of a function
function formatDesc(desc, name, hasData)
{
	desc = desc.charAt(0).toUpperCase() + desc.slice(1);

	var samples = getSamples(name), s;
	var sampcnt = keys(samples).length;
	if (!has(desc, '.')) desc += '.';

	desc = desc.replace(/(\s|<br>)*<sample( (.*?))?(( |norun)*)>([^]*?)<\/sample\2?>/g,
		function (m, _, _1, t, opt, _2, c) {
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
		.replace(/<sample (.*?)>/g, (m, t) => (s = samples[t]) ?
			(delete samples[t], `</p>\n\t\t${s}<p>`) :
			Throw(Error(`sample ${t} not found for ${name}. Have ${keys(samples) + "" || "none"}.`)))
		.replace(/(“.*?”)/g, "<docstr>$1</docstr>")
		+ values(samples).concat("").reduce((a, b) => a + b);
}

function fillMissingFuncProps(f)
{
	// default descriptions and capitalizing
	if (!f.desc) f.desc = f.name[0] + f.name.slice(1)
		.replace(/([A-Z]+)/g, " $1").toLowerCase();

	if (!f.shortDesc || !f.shortDesc.trim())
		f.shortDesc = f.desc;

	// start upper case without trailing dot
	f.shortDesc = f.shortDesc.charAt(0).toUpperCase() +
		f.shortDesc.slice(1, f.shortDesc.endsWith('.') ? -1 : undefined);

	f.desc = f.desc.replace(/%(\w+)%/g, (m, t) => conf.tmpl[t] || Throw(`template ${t} not found`));
	f.shortDesc = f.shortDesc.replace(/%(\w+)%/g, (m, t) => conf.tmpl[t] || Throw(`template ${t} not found`));

	if (f.pNames == undefined) f.pNames = [];
	if (f.pTypes == undefined) f.pTypes = [];
}

// converts a function object into an html snippets object
function getDocData(f, useAppPop = false) {
	var i, mArgs = [], type, fretval = "";

	// abbrev for controls
	if (isControl(f.name) && !f.abbrev)
		f.abbrev = getAbbrev(f.name);

	// convert constructor line
	for (i in f.pNames) {
		if (useAppPop) {
			mArgs.push(newAppPopup(f.pNames[i], typeDesc(f.pTypes[i]))
				.replace(/<\/?\w+?>/g, ""));
		}
		else
			mArgs.push(toArgPop(f.pNames[i], f.pTypes[i]));
	}

	mArgs = mArgs.length ? mArgs.join(",") + " " : "";

	// convert return value
	if (f.retval)
		fretval = (f.pNames.length ? "\n\t\t\t" : " ") + "→ " + typeDesc(f.retval);

	// return data if there are no subfunction
	if (!f.subf || !keys(f.subf).length)
		return { args: mArgs, ret: fretval, mets: "" }

	var k, methods = "",
		// function list
		mkeys = keys(f.subf).filter(nothidden).sort(sortAsc);

	if (dbg) app.UpdateProgressBar(progress, curScope + '.' + f.name + " generate subfunctions");
	for (k = 0; k < mkeys.length; k++) {
		var met = f.subf[mkeys[k]], retval = "", type;
		curSubf = met.name = met.name || mkeys[k];

		// load base func
		if (typeof (met) == "string" && met.startsWith('#')) {
			if (!base[met]) Throw(Error("basefunc " + met + " not found!"));
			met = base[met];
			if (!met.name) met.name = mkeys[k];
			// force use of entry name
			if (mkeys[k].endsWith('!')) met.name = mkeys[k].slice(0, mkeys[k].length - 1);
			curSubf = met.name;
		}

		// load params from base
		while (typeof met.params == "string" && met.params.startsWith('#')) {
			if (!base[met.params]) Throw(Error("basefunc " + met.params + " not found!"));
			met.pNames = base[met.params].pNames;
			met.pTypes = base[met.params].pTypes;
			met.params = base[met.params].params;
		}

		if (hidden(curSubf)) continue;

		fillMissingFuncProps(met);

		//convert return value
		if (met.retval)
			retval = (!met.isval && met.pNames.length ? "\n\t\t\t" : " ") + "→ " + typeDesc(met.retval);

		//convert function types
		var mdesc = met.desc;
		if (!met.isval) mdesc = `<b>${f.abbrev}.${curSubf}</b><br>` + mdesc;

		var args = [], metpop = newPopup("dsc", curSubf,
			addMarkdown(replaceTypes(replW(mdesc), true)),
			getAddClass(met) || (has(base.all, curSubf) ? ' class="baseFunc"' : ""));

		if (!met.isval) {
			for (i in met.pNames)
				args.push(toArgPop(met.pNames[i], met.pTypes[i]));

			metpop += args.length ? `(${args.join(",")} )` : "()";

			if (has(curSubf, '.'))
				metpop = curSubf.split(".").fill("  ").join("") + metpop.italics();

			methods += subfBase.replace("%s", metpop + retval);
		}
		else methods += subfBase.replace("\n\t\t", "").replace("%s", metpop.trim() + retval);
	}
	curSubf = null;

	return { args: mArgs, mets: methods, ret: fretval }
}

// read and return html converted example snippets file
function getSamples(name) {
	var sampcnt = 0, samples = {}, s = ReadFile(scopeDir + `samples/${name}.txt`, " ", !scope[name].isval);

	s.replace(/<sample( (.*?))?(( |norun)*)>([^]*?)<\/sample\1?>/g,
		(m, _, name, opt, _1, c) => samples[name || sampcnt + 1] = toHtmlSamp(c, name, ++sampcnt, opt)
	);

	return samples;
}

// convert a sample to html code
function toHtmlSamp(code, name, index, options) {
	var hasBold = has(code, "<b>") && code.indexOf("</b>") > code.indexOf("<b>");
	if (!hasBold) Warn(`${curDoc} sample "${name || ''}" has no bold area\n`);

	code = code.trim().replace(/<\/?b>/g, "§b§");
	code = Prism.highlight(code, Prism.languages.javascript, 'javascript')
		.replace(/\t/g, "    ")
		.replace(/    /g, "&#160;&#160;&#160;&#160;")
		.replace(/\n/g, "<br>\n\t\t\t\t")

	if (hasBold) {
		code = sampBase
			.replace("%b", code)
			.replace(/§b§([^]+?)§b§/g, "<b id=\"snip%i\" style=\"font-size:100%\">$1</b>");
	}
	else {
		code = sampBase
			.replace(/.*<a.*onclick="copy\( snip%i \)">.*<\/a>\n/, "")
			.replace("%b", code);
	}
	if (has(options, "norun")) code = code.replace(/\s*<a .*? onclick="demo\( examp.*?<\/a>/, "");

	return code.replace(/%i/g, index).replace(/%t/g, name ? " - " + name : '');
}


function getAddClass(m) {
	if (!m || typeof m.desc != "string") return '';
	if (m.desc.startsWith('#')) {
		m.desc = ReadFile(scopeDir + `desc/${m.desc.slice(1)}`, false);
		if (!m.desc) return '';
	}

	if (has(m.desc, "<deprecated")) return ' class="deprHint"';
	if (has(m.desc, "<xfeature")) return ' class="xfeatHint"';
	if (has(m.desc, "<premium")) return ' class="premHint"';
	return '';
}

// returns a formatted description of a type - used for subfunction return values
function typeDesc(types) {
	types = types.split("||").map(type => [type.slice(0, 3)]
		.concat(type
			// custom type desc
			.replace(/^(...):([^-]*)/, (m, btype, desc) =>
				(conf.tdesc[btype + "_tmp"] = desc, btype + "_tmp"))
			// sample vals
			.replace(/-/, '\x01').split('\x01')
		)
	);

	var last;
	var s = types.map(
		(type, i) => (last = "</b>", conf.tname[type[0]]) ?
			"<b>" + conf.tname[type[0]] + (conf.tdesc[type[1]] ?
				(last = "</i>", ":</b> <i>" + conf.tdesc[type[1]]) : ""
			) + (type[2] ? `:${last} ` : last) : undefined
	);

	s = types.map(
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

	if (types.length > 1) s = '<span style="display:inline-block;vertical-align: middle;">' + s + "</span>";
	return s;
}

//nearly equal to typeDesc, but returns an app.popup for arguments
function toArgPop(name, types, doSwitch) {
	// function callbacks
	if (typeof types == "object") {
		if (types.pNames == undefined) types.pNames = [];
		var s = newPopup("fnc", name,
			("<b>function</b>(\n\t\t" + types.pNames.map(
				function (n, i) {
					if (types.pTypes[i].isval === false || typeof types.pTypes[i] == "object" || has("lst,obj", types.pTypes[i].slice(0, 3)))
						// for lists and objects in callback parameters switch popups
						return toArgPop(n, types.pTypes[i], true);
					else
						// primitive types get a primitive popup
						return toArgAppPop(n, types.pTypes[i]);
				}
			).join(",\n\t\t") + "\n\t)").replace(/\(\s+\)/, "()"), false
		);
		if (doSwitch) s = s.trim().replace(/href="#pop_(..._...)"/, 'href="" ' + switchPop);
		return s;
	}

	// multiple types
	types = types.split("||").map(
		type => [type.slice(0, 3)]
			.concat(type
				// custom type desc
				.replace(/^(...):([^-]*)/, (m, btype, desc) =>
					(conf.tdesc[btype + "_tmp"] = desc, btype + "_tmp"))
				// sample vals
				.replace(/-/, '\x01').split('\x01')
			)
	);

	// start of type desc string. (tips: [optional], [:] if followed by value)
	// <b>type[:]</b> [[<i>desc[:]</i>] values]
	var last;
	var s = types
		.map((type, i) => "<b>" + conf.tname[type[0]] +
			(last = "</b>", conf.tdesc[type[1]] ?
				(last = "</i>", ":</b> <i>" + conf.tdesc[type[1]]) : ""
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
					return s[i] + rplop(type[2], type[0] == "str");
				case "lst":
				case "obj": return s[i] + replaceTypes(replW(type[2]), true);
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
		else return s[i];
	});

	// build popup id, "std_type" for common or "type_index" for individual popups
	// save popup definition and return popup text (= link)
	if (types.length == 1) {
		types = types[0];
		if (types[1].endsWith("_tmp")) types[2] = true;
		var pop_id =
			(types[1].match("_") || types[2] ? "" : "std_") +
			(!types[2] ? types[1].replace("?", "ukn") :
				types[0] + "_" + incpop(types[0], 1)
			);
		if (pop_id.match(/[^_\w]/)) Throw(Error("invalid popup id " + pop_id));

		s = newPopup(pop_id, name, str[0].replace(/ShowPopup\('.*?'\)/g,
			(m) => m.replace(/“/g, "&ldquo;").replace(/”/g, "&rdquo;")), "");
		if (doSwitch) s = s.trim().replace(/href="#pop_(..._...)"/, 'href="" ' + switchPop);
		return s;
	}
	else
		// for values with multiple types
		return newPopup("mul", name, str.join("<br>"));
}

function toArgAppPop(name, types) {
	types = types.split("||")
		.map((type) => [type.slice(0, 3)]
			.concat(type.replace('-', '\x01')
				.split('\x01'))
		);

	return newAppPopup(
		name, types.map(
			(type) => conf.tname[type[0]].replace(/<[^>]*>/g, '') +
				(conf.tdesc[type[1]] ? ": " + conf.tdesc[type[1]] : "") +
				(type.length == 3 ? ": " + rplop(type[2], type[0] == "str") : "")
		).join("\\n")
	);
}

//replace whitespace with html syntax whitespace
function replW(s, n) {
	if (n == undefined) n = true;
	return s
		.replace(/\\\/\\\//g, '#')
		.replace(/\n/g, n ? "<br>" : "\n")
		.replace(/\t/g, "    ")
		.replace(/  /g, "&#160;&#160;");
}

//increase special popup counters and returns its id
function incpop(type, i) {
	if (i) spop[type] += i;
	return hex(spop[type]);
}

// accept formats: "name":"desc" name:type name:"types" name:"type-values"
// using name:'...' will force app popups
function replaceTypes(s, useAppPop) {
	var _s = s.replace(/<(style|a)\b.*?>.*?<\/\1>|style=[^>]*/g, '');
	_s.replace(/(\b([\w_.#-]+)|"(.*?)"):([a-z]{3}(_[a-z]{3})?\b)?-?("[^"]*|'[^']*| ?\w(\\.|[^.|:,”}\]\n])*)?['"]?/g,
		function (m, _, name, aname, type, _, desc) {
			var r, space = '', tapop = false;
			if (!name) name = aname;
			if (!type && (!desc || desc[0] == ' ') || name.startsWith("Note")) return;

			if (desc) {
				if (desc.endsWith(' ')) space = ' ';
				desc = desc.slice(desc[0] == '"', space ? -1 : undefined);
				if (desc[0] == "'") tapop = true, desc = desc.slice(1);
				if (conf.tname[desc.slice(0, 3)] && (!desc[4] || !desc[4].match(/[a-z]/i))) type = desc, desc = '';
			}

			if (type) {
				if (conf.tname[type.slice(0, 3)]) { if (desc) type += '-' + desc, desc = ''; }
				else
					desc = type + (desc || ''), type = '';
			}

			if (useAppPop || tapop) {
				if (type && !desc) r = toArgAppPop(name, type);
				else r = newAppPopup(name, type ? conf.tname[type.slice(0, 3)] +
					(conf.tdesc[type] ? ": " + conf.tdesc[type] : "") : desc);
			}
			else if (type) r = toArgPop(name, type);
			else r = newPopup("dsc", name, desc);

			s = s.replace(m, r + space);
			return '';
		}
	);
	return s;
}

// convert markdown symbols to html
function addMarkdown(s) {
	return s
		// links
		.replace(/([^\\]|^)\[([^\]}]*)\]\((.*?)\)/g, function (match, white, name, url) {
			if (name && !url) url = name;
			if (!name && url) name = url;
			// web link ? external : internal
			return white + (url.startsWith("http") ?
				`<a href="${url}" onclick="return OpenUrl(this.href);">` :
				`<a href="${url}" data-ajax="false">`)
				+ `${name}</a>`;
		})
		// link + onclick
		.replace(/([^\\]|^)\[([^\]}]*)\]{(.*?)}/g, function (match, white, name, script) {
			script = script.replace(/"/g, "&quot;").replace(/([*_`~])/g, "\\$1");
			return white + `<a href="" onclick="${script}">${name}</a>`;
		})
		.replace(/(<br>|^)(#+) ([^<]*)/g, (_, white, h, title) =>		// ## headline
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
		.replace(/<(premium|deprecated|xfeature)(.*?)>/g, (m, n, a) => eval(n + "Hint").replace("%s", a))
		.replace(/([^\\]|^)@(([^\/\n<>, ]+\/)*(\w+?))(#(\w+))?\b/gi, (m, b, n, _, f, H, h) =>  // @DocReference
			`${b}<a href="${n}.htm${(H || '').replace(/_/g, ' ')}" data-ajax="false">${(h || f).replace(/_/g, ' ')}</a>`)
		.replace(/\\([_*~@])/g, "$1");								// consume \ escaped markdown
}

// convert int to 3-digit hex
function hex(v) { return ("00" + v.toString(16)).replace(/^0+(...)/, "$1"); }
//returns the type name or description of a value or the value itself
function getv(v) { return conf.tdesc[v] || conf.tname[v] || v; }
//returns a comma separated list of object keys
function skeys(o) { return "" + keys(o); }
//replaces \ paceholders with its placeholder 'name'
function reprs(s) { return s.replace(/\n/g, "\\n").replace(/\t/g, "\\t"); }
//replace "&" and "|" operators with "and" and "or"
function rplop(s, n) {
	return replW((n ? `“${s}”` : s)
		.replace(/\\(.)/g, (m, c) => `§${c.charCodeAt(0)}§`)
		.replace(/\|/g, n ? "” or “" : " or ")
		//.split(',').sort(sortAsc).join(n ? "”, “" : ", ")
		.replace(/,/g, n ? "”, “" : ", ")
		.replace(/§(\d+)§/g, (m, c) => `${String.fromCharCode(c)}`)
	);
}
function Throw(e) { throw e; }
function Warn(msg) { if (warnEnbl) console.error("Warning: " + msg); }
function newNaviItem(link, text, add) { return naviItem.replace("%s", link).replace("%s", add || "").replace("%s", text); }
function newTxtPopup(id, text, add) { return txtPopup.replace("%s", id).replace("%s", add || "").replace("%s", text); }
function newDefPopup(id, text) { return defPopup.replace("%s", id).replace("%s", text); }
function newAppPopup(name, desc) { return appPopup.replace("%s", desc).replace("%s", name); }
function newLink(target, text) { return `<a href="${target}" data-ajax="false">${text}</a>`; }
function newCode(code) { return codeBase.replace("%s", code); }

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

function getHead(d) {
	d = new Array(d).fill("../").join("");
	return htmlHead.replace(/(href|src)="(?!http|\/)/g, (m, p) => `${p}="${d}`)
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

	// deprecated note
	deprecatedHint = "<div class='deprHint'><strong>Note: This function is deprecated.%s</strong></div>";
// premium note
premiumHint = "<div class='premHint'><strong>Note: This function is a premium feature. Please consider subscribing to Premium to use this feature and support DroidScript in its further development.</strong></div>";
// xfeature note
xfeatureHint = "<div class='xfeatHint'><strong>ATTENTION: This function is available in the DS X-Versions only as it doesn't meet the GooglePlay security requirements. APKs built with X-Versions are for private use only.</strong></div>";
// example snippets
sampBase = `
		<div data-role="collapsible" data-collapsed="true" data-mini="true" data-theme="a" data-content-theme="a">
			<h3>Example%t</h3>
			<div id="examp%i" style="font-size:70%">
				%b
			</div>
			<div name="divCopy" align="right">
			<a href="#" data-role="button" data-mini="true" data-inline="true" onclick="copy( snip%i )">&#160;&#160;&#160;&#160;Copy&#160;&#160;&#160;&#160;</a>
			<a href="#" data-role="button" data-mini="true" data-inline="true" onclick="copy( examp%i )">Copy All</a>
			<a href="#" data-role="button" data-mini="true" data-inline="true" onclick="demo( examp%i )">&#160;&#160;&#160;&#160;&#160;&#160;Run&#160;&#160;&#160;&#160;&#160;&#160;</a>
			</div>
		</div>\n\n\t\t`;

htmlHead = `<head>
	<title>%t</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" id="themeJQ" href="css/themes/default/theme-dark.min.css"/>
	<link rel="stylesheet" href="css/themes/default/jquery.mobile.structure-1.2.0.min.css"/>
	<link rel="stylesheet" id="themePrism" href="css/themes/prism/dark.min.css"/>
	<link rel="stylesheet" id="themeDocs" href="css/docs-dark.min.css"/>

	<script src="js/energize-min.js"></script>
	<script src="js/jquery-1.8.1.min.js"></script>
	<script src="../app.js"></script>
	<script src="js/common.js"></script>
	<script src="js/example.js"></script>
	<script src="js/jquery.mobile-1.2.0.min.js"></script>
</head>`,
	//docs navigator list base
	naviBase = `
<!DOCTYPE html>
<html>

${getHead(0)}

<body>
<div data-role="page" data-theme="a" data-ajax="false" data-add-back-btn="true">

	<div data-role="header" data-position="fixed">
		<a href="#" class="ui-btn-left" data-icon="arrow-l" onclick="history.back(); return false">Back</a>
		<h1>%t</h1>
		<a class="ui-btn-right" data-icon="gear" data-iconpos="notext" onclick="tglTheme()"></a>
	</div><!-- /header -->

	%c

	<div data-role="content">
		<ul data-role="listview" data-inset="true" data-filter="false">
		%l
		</ul>
	</div><!-- /content -->
</div><!-- /page -->
</body>
</html>\n`,
	//whole html document
	htmlBase = `
<!DOCTYPE html>
<html>

${getHead(1)}

<body>
<div data-role="page" data-theme="a">

	<div data-role="header" data-position="fixed">
		<a href='#' class='ui-btn-left' data-icon='arrow-l' onclick="history.back(); return false">Back</a>
		<h1>%t</h1>
		<a class="ui-btn-right" data-icon="gear" data-iconpos="notext" onclick="tglTheme()"></a>
	</div>

	<div style="position:fixed; top:40px; width:100%; text-align:center; z-index:1101;">
		<div id="appPopup" class="androidPopup">Hello World</div>
	</div>

	<div data-role="content">
		%d
		%b
	</div>

	%p
</div>
</body>

</html>\n`;

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


function getl(l) { if (l == undefined) l = lang; return l == "en" ? "" : "-" + l; }
function l(s) { console.log(`-----${s}-----`); return s; }
function hidden(name) { return !(force || !name.match(regHide)); }
function nothidden(name) { return !hidden(name); }
function isnum(c) { return c >= '0' && c <= '9'; }
function has(l, v) { return !!l && l.indexOf(v) > -1; }
function values(o) { return Object.values(o); }
function keys(o) { return Object.keys(o); }
function d(v) { console.log(v); return v; }
function saveScope() { app.WriteFile(scopeDir + "obj.json", tos(scope, true)); }
function sortAsc(a, b) {
	a = a.toString().replace(/[^a-z0-9]/gi, "") || a + "";
	b = b.toString().replace(/[^a-z0-9]/gi, "") || b + "";
	var la = a.toLowerCase(), lb = b.toLowerCase();
	return la == lb ? a < b ? 1 : -1 : la > lb ? 1 : -1;
}

function isControl(name) { return !!scope[name].subf; }

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

function ReadFile(file, dflt, write) {
	if (app.FileExists(file)) return app.ReadFile(file);
	else if (write) app.WriteFile(file, dflt);
	return dflt;
}

// converts a variable to indented string
// supports Boolean, Number, String, Array and Object
function tos(o, nosort, intd, m) {
	if (intd == undefined) intd = "";
	if (m == undefined) m = true;
	var s = m ? intd : "";

	if (o === null || o === undefined) return "null";
	else switch (o.constructor.name) {
		case "String": case "Number": case "Boolean":
			return s + JSON.stringify(o);
		case "Array":
			var n = o.length < 2 || (typeof o[0] != "object");
			s += n ? "[" : "[\n";
			for (var i = 0; i < o.length; i++) {
				s += tos(o[i], nosort, intd + (n ? "" : "\t"), !n);
				if (i < o.length - 1) s += n ? ", " : ",\n";
			}
			return s + (n ? "" : "\n" + intd) + "]";
		default:
			var okeys = keys(o);
			if (!nosort) okeys = okeys.sort(sortAsc);
			switch (okeys.length) {
				case 0: return "{}";
				case 1:
					if (o[okeys[0]] === undefined) return "{}";
					return s += `{ "${okeys[0]}": ${tos(o[okeys[0]], nosort, "", false)} }`;
				default:
					s += "{\n";
					for (var i = 0; i < okeys.length; i++) {
						if (o[okeys[i]] === undefined) continue;
						s += intd + `\t"${okeys[i]}": ${tos(o[okeys[i]], nosort, intd + "\t", false)}`;
						if (i < okeys.length - 1) s += ",\n";
					}
					return s + `\n${intd}}`;
			}
	}
	return s;
}

function newestFileDate(p) {
	var files;
	if (arguments.length > 1) files = [...arguments];
	else if (!p.endsWith('/') && app.FileExists(p)) return app.GetFileDate(p);
	else if (!app.FolderExists(p)) return null;
	else files = app.ListFolder(p).map(f => p + (p.endsWith('/') ? '' : '/') + f);
	return files.length ? Math.max.apply(null, files.map(f => newestFileDate(f))) : null;
}

// ---------------------------- nodejs app wrapper -----------------------------


help = `${process.argv.slice(0, 2).join(" ").replace(path, "")} [OPTIONS] [PATTERNS]
OPTIONS:
	-l  --lang=<LANG-CODE>	2 digit code, ie. en de fr pt es ..
                         	defaults to 'en'
	-al --addlang=<LANG-CODE>=<LANG-NAME>
                         	adds a language to conf.json
	-as --addscope=<SCOPE-ABBREV>=<SCOPE-NAME>
                                adds a scope to conf.json
	-c  --clean            	regenerate the docs completely
	-f  --force             force generation of otherwise skipped
	-n  --nogen             don't generate
	-s  --server            start webserver after generating
	-v  --verbose           print more debug logs
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
	var fs = require("fs-extra");
	var rimraf = require("rimraf");
	var Prism = require('prismjs');
	require('prismjs/components/prism-java.min.js');

	function absPth(p) { return p.startsWith("/") ? p : path + p; }

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
		UpdateProgressBar: (i, t) => console.log("\033[1A\033[K" + `${i}% ${t || 'Initializing'}`),
		HideProgressBar: () => console.log("\033[1A\033[K100% done."),
		ShowPopup: console.log,
		Alert: console.log
	}

	var patLang = "", patScope = "", patFunc = "";
	var addcfg = { add: false, langs: {}, scopes: {} };
	var nogen = false, startServer = false;

	for (var pat of process.argv.slice(2)) {
		if (pat.startsWith("-")) {
			pat = pat.split("=");
			switch (pat[0]) {
				case "-l": case "--lang": lang = pat[1]; break;
				case "-n": case "--nogen": nogen = true; break;
				case "-v": case "--verbose": dbg = true; break;
				case "-c": case "--clean": clean = true; break;
				case "-f": case "--force": force = true; break;
				case "-h": case "--help": app.Alert(help); return;
				case "-s": startServer = true; break;
				case "-al": case "--addlang":
					if (pat.length < 3) Throw(Error("missing option args. expected 2"));
					addcfg.add = true;
					addcfg.langs[pat[1]] = pat[2];
					break;
				case "-as": case "--addscope":
					if (pat.length < 3) Throw(Error("missing option args. expected 2"));
					addcfg.add = true;
					addcfg.scopes[pat[1]] = pat[2];
					break;
				default: Throw(Error("Unknown option " + pat[0]));
			}
		}
		else {
			var p = pat.match(/(^[a-z]{2})?(\.|^|$)([a-zA-Z]{3,})?(\.|$)(.*)?/);
			if (!p) Throw(Error("invalid pattern " + pat));

			patLang = p[1];
			patScope = p[3];
			patFunc = p[5];
		}
	}

	if (addcfg.add) {
		var conf = JSON.parse(app.ReadFile("conf.json", false, false));
		if (!conf) Throw(Error("conf.json not readable."));

		Object.assign(conf.langs, addcfg.langs);
		Object.assign(conf.scopes, addcfg.scopes);

		app.WriteFile("conf.json", tos(conf, true));
	}

	if (!nogen) Generate(patFunc, patScope, patLang);
	if (startServer) {
		var express = require('express');
		var server = express();
		server.use("/", express.static("."));
		server.listen(8081);
		console.log("started on http://localhost:8081/docs");
	}
}
