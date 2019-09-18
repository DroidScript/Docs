#!/usr/bin/env node

var curDoc, curSubf, curScope;
var warnEnbl = false, Globals;
var scope, base, cats, regGen;

var scopes = {
	"intro": "Introduction",
	"app": "Reference",
	"gfx":"Game Engine"
};

function generateScope(name, pattern)
{
	curScope = name;
	regGen = RegExp(pattern || ".*");

	if(!pattern) {
		app.ListFolder("docs" + getl()).map(f =>
			f.startsWith(curScope + "_") && app.DeleteFile(`docs${getl()}/` + f));
		app.DeleteFolder(`docs${getl()}/${curScope}`);
		app.MakeFolder(`docs${getl()}/${curScope}`);
	}
	if(!app.FolderExists(`${curScope}-samples`))
		app.MakeFolder(`${curScope}-samples`);

	// read categories
	cats = JSON.parse(ReadFile(curScope + `-cats${getl()}.json`, "{}"));

	// read scope members
	if(scope = JSON.parse(ReadFile(curScope + getl() + ".json", "false")))
	{
		if(!keys(cats).length) cats = keys(scope);
		else cats.All = keys(scope);

		// read base functions used in scope
		if(base = JSON.parse(ReadFile(curScope + `-base${getl()}.json`, "false")))
		{
			// additionally, read /*#obj*/ marked functions from .js file if exists
			if(!app.FileExists(curScope + ".js")) base.all = keys(base).map(k => base[k].name);
			else base.all = app.ReadFile(curScope + ".js")
				.split("/*#obj*/ this.").slice(1)
				.map(v => v.slice(0, v.indexOf(" ")))

			// additionally, read Obj.prototype functions from utils.js if exists
			if(curScope == "app" && app.FileExists("util.js"))
				base.all.concat(app.ReadFile("util.js")
					.split("Obj.prototype.").slice(1)
					.map(v => v.slice(0, v.indexOf(" "))))
		} else base = {all:[]}
	}
	else // no json file available
	{
		regGen = RegExp("(?=^info$)[]|(?!^info$)^.*" + regGen.source);
		// add files from scope folder to be generated
		scope = {}; base = false; cats = [];
		for(var n of app.ListFolder(curScope))
		{
			n = n.slice(0, n.lastIndexOf("."));
			cats.push(n.replace(/^\s+/, ""));
			scope[n] = { desc: `#${n}.md`, name: cats[cats.length - 1] };
		}
	}

	// start generating
	if("navs".match(regGen))
		generateNavigators(cats, scopes[curScope] || curScope);
	generateDocs(scope);

	// update version number
	var v = 1000 * (Date.now() / 864e5 | 0);
	var vn = Number(app.ReadFile("../docs/version.txt", 0)) % 1000 + 1;
	app.WriteFile("version.txt", v + vn);
}

function generateNavigators(cats, name, pfx)
{
	curDoc = `docs${getl()}/${pfx||''}${name.replace(/\s+/g,'')}.htm`;
	pfx = `${pfx||curScope}_`;
	var nav = '';

	if(cats instanceof Array)
	{
		for(var func of cats = cats.filter(nothidden))
			nav += func ? newNaviItem(`${curScope}/${func.replace(/\s+/g,'')}.htm`,
				func.replace(/^\d+\s*/, ''), getAddClass(scope[func])) : "<li></li>";
	}
	else if(cats instanceof Object)
	{
		for(var cat of keys(cats).filter(nothidden).sort(sortAsc))
		{
			nav += newNaviItem(`${pfx + cat.replace(/\s+/g,'')}.htm`, cat );
			var tdoc = curDoc;
				generateNavigators(cats[cat], cat, pfx);
			curDoc = tdoc;
		}
	} else Throw(Error("Wrong catlist datatype: " + typeof cats));

	app.WriteFile( curDoc,
		(keys(cats).length < 15 ? naviBase :
			naviBase.replace( 'data-filter="false"', 'data-filter="true"' ))
		.replace( "%l", nav )
		.replace( /%t/g, name )
	);
}

//generates doc files
function generateDocs(scope)
{
	curDoc = curScope;
	var lst = keys(scope).filter(nothidden).filter(n => !!n.match(regGen));

	for( var i = 0; i < lst.length; i++ )
	{
		generateDoc(lst[i]);
		app.UpdateProgressBar( Math.floor( 100*i / lst.length ), curScope + '.' + lst[i] );
	}

	if(!"info".match(regGen)) return;

	curDoc = curScope + "-info.json";
	var tsubf, info = { [curScope]: {} };

	for(var name of keys(scope).filter(nothidden))
	{
		if(!scope[name].shortDesc) continue;
		info[curScope][lst[i]] = scope[name].shortDesc;

		if(tsubf = scope[name].subf)
		{
			var tctrl = {};
			info[scope[name].abbrev] = tctrl;

			for(var j of keys(tsubf).filter(nothidden))
			{
				if(typeof tsubf[j] == "string" && tsubf[j][0] == '#')
				{
					if(base && base[tsubf[j]])
						tctrl[j] = base[tsubf[j]].shortDesc;
					else
						Throw(Error(`basefunc ${tsubf[j]} not found!`));
				}
				else tctrl[j] = tsubf[j].shortDesc;
			}
		}
	}

	info = tos(info);
	if(info.lastIndexOf("}") != 25)
		app.WriteFile( curDoc, info );
}

// generates one document by function name
function generateDoc( name )
{
	curDoc = `docs${getl()}/${curScope}/${scope[name].name.replace(/\s+/g,'')}.htm`;
	resetGlobals();

	var data, funcLine = "", subfuncs = "", desc = scope[name].desc;

	// get description from external file
	if(desc[0] == '#')
	{
		desc = ReadFile(`${curScope}/${desc.slice(1)}`, false);
		if(!desc) Throw(Error(`description file ${scope[name].desc.slice(1)} linked but doesn't exist.`));
	}

	// get function specific data
	if((keys(scope[name])+'').match(/isfunc|p(Names|Types)|subf/g))
	{
		data = getDocData(scope[name]);
		// function line with popups
		if(scope[name].abbrev) funcLine = scope[name].abbrev + " = ";
		funcLine += `${curScope}.${name}` + (scope[name].isfunc ? `(${data.args})` : '') + data.ret;

		// subfunctions of controls with popups
		if(isControl(name) && data.mets)
			subfuncs = subfHead
				.replace(/%t/g, name.replace(regConPrefix, ''))
				.replace("%f", data.mets);
	}

	// insert data to html base
	var html = htmlBase
		.replace("%b", subfuncs)
		.replace("%d", formatDesc(desc, name, !!data))
		.replace("%c", funcLine);

	app.WriteFile( curDoc, adjustDoc(html, name) );
}

/*----------------------------------------------------------------------------*/

// reset globals
function resetGlobals() {
	popDefs = {};
	spop = {str:0, num:0, lst:0, obj:0, fnc:0, dsc:0, mul:0, std:0, dso:0};
}

function adjustDoc(html, name)
{
	var order = "std,num,str,mul,obj,dso,lst,fnc,dsc";
	var popList = keys(popDefs)
		.map((d) => newDefPopup(popDefs[d], d))
		.sort(function(a, b) {
			a = a.slice(31, 38); b = b.slice(31, 38);
			if(a.slice(0, 3) == b.slice(0, 3)) {
				if(isnum(a[4]) == isnum(b[4])) return a.slice(4) < b.slice(4) ? -1 : 1;
				else return isnum(a[4]) ? 1 : -1;
			} else return order.indexOf(a.slice(0, 3)) < order.indexOf(b.slice(0, 3)) ? -1 : 1;
		}).join("\n\t");

	var toc = [];
	html.replace(/\n\t\t<h(\d)>(.*)<\/h\1>/g, function(m, i, t) {
		if( t != "%t" ) toc.push(
			new Array(Number(i)).join("    ") + ([0, 0, "• ", "- "][i] || "") +
			`<a href="" onclick="jumpTo('${t.replace(/<.*?>/g, "")}')">${t}</a><br>`);
	});
	if(toc.length) {
		toc.unshift("<b>Content:</b><br>");
		toc.unshift('\n\t\t<div class="samp samp-inline" style="font-size:revert; padding:10px 15px">');
		toc.push("</div>\n\n\t\t");
	};

	return html
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
			`${t}<span style="display:inline-block;padding-left:${w.split("    ").length-1}em;">` +
			`${c.replace(RegExp(w+"|^|$",'g'),w.replace(/    /g,'\t')).slice(0,-1)}</span><br>`)
		.replace(/((\n\t{1,3})(    )+)((.*?<br>\1?)+)/g, (m, w, t, _1, c, _2) =>
			`${t}<span style="display:inline-block;padding-left:${w.split("    ").length-1}em;">` +
			`${c.replace(RegExp(w+"|^|$",'g'),w.replace(/    /g,'\t')).slice(0,-1)}</span><br>`)
		.replace(/((\n\t{1,3})(    )+)((.*?<br>\1?)+)/g, (m, w, t, _1, c, _2) =>
			`${t}<span style="display:inline-block;padding-left:${w.split("    ").length-1}em;">` +
			`${c.replace(RegExp(w+"|^|$",'g'),w.replace(/    /g,'\t')).slice(0,-1)}</span><br>`)

		// replace <js> and <bash> tags with sample
		.replace(
			/(\s|<br>)*<(js|bash|smp|java)\b(( |nobox|noinl)*)>(\s|<br>)*([^]*?)(\s|<br>)*<\/\2>((\s|<br>)*)/g,
			function(m, w1, lang, options, _, _, code, _, w2, _)
			{
				options = options.split(" ");
				if(w1) w1 = m.slice(0, m.indexOf(`<${lang}`));
				if(Prism.languages[lang])
				{
					var tags = [];
					code = code
						.replace(/<br>/g, "")
						.replace(/&#160;/g, "§s§")
						.replace(/\s*<.*?>/g, (m) => (tags.push(m), "§t§"));
					code = Prism.highlight( code, Prism.languages[lang], lang )
						.replace(/\n/g, "<br>\n")
						.replace(/§t§(<\/span>)?/g, (m, s) => (s||'') + tags.shift())
						.replace(/§s§/g, "&#160;")
						.replace(/(<span.*em;">)<br>/g, '<br>$1');
				}

				if(has(options, "nobox")) return `${w1||''}${code}${w2||''}`;
				else if(has(code, "<br>") || has(options, "noinl")) return `</p>\n${newCode(code)}\t\t<p>`
				else return `${w1||''}<span class="samp samp-inline">${code}</span>${w2||''}`;
			})
		.replace(/(\n\t+(    )+)(<b .*?>)?([^]*?)(<\/b>)?<br>/g, (m, w, _, b1, t, b2) =>
			`${w}${b1||''}<span style="display:inline-block">${t}</span>${b2||''}<br>`)
		// remove leading whitespace in <p> tag
		.replace(/<p>(<br>|\s+)+/g, "<p>")
		// remove trailing whitespace in <p> tag
		.replace(/(<br>|\s+)+<\/p>/g, "</p>")
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
}

// returns an html formatted description of a function
function formatDesc(desc, name, hasData)
{
	desc = desc.charAt(0).toUpperCase() + desc.slice(1);

	var samples = getSamples(name), s;
	var sampcnt = keys(samples).length;
	if(!has(desc, '.')) desc += '.';

	desc = desc.replace(/(\s|<br>)*<sample( (.*?))?>([^]*?)<\/sample\2>/g,
		function(m, _, _, t, c)
		{
			samples[_ = t || sampcnt + 1] = toHtmlSamp(c, t, ++sampcnt);
			return `<sample ${_}>`;
		});

	desc = `<p>${replaceTypes(addMarkdown(replW( desc )))} </p>`;

	if(hasData) {
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
			Throw(Error(`sample ${t} not found for ${name}`)))
		.replace( /(“.*?”)/g, "<docstr>$1</docstr>")
		+ values(samples).concat("").reduce((a, b) => a + b);
}

// converts a function object into an html snippets object
function getDocData( f, useAppPop )
{
	//needed for popups in popups
	if( useAppPop == undefined )
		useAppPop = false;

	// default descriptions and capitalizing
	f.shortDesc = f.shortDesc.trim();
	if( !f.shortDesc ) f.shortDesc = f.name;
	f.shortDesc = f.shortDesc.charAt(0).toUpperCase() +
		f.shortDesc.slice(1, f.shortDesc.endsWith('.') ? -1 : undefined );

	// abbrev for controls
	if( isControl(f.name) && !f.abbrev )
		f.abbrev = getAbbrev( f.name );

	var i, mArgs = [], type, fretval = "";

	// convert constructor line
	if(!f.pNames) f.pNames = [];
	if(!f.pTypes) f.pTypes = [];
	for( i in f.pNames )
	{
		if( useAppPop )
		{
			mArgs.push(newAppPopup( f.pNames[i], typeDesc( f.pTypes[i] ) )
				.replace( /<\/?\w+?>/g, ""));
		}
		else
			mArgs.push(toArgPop( f.pNames[i], f.pTypes[i]));
	}

	mArgs = mArgs.length ? mArgs.join(",") + " " : "";

	// convert return value
	if( f.retval )
		fretval = (f.pNames.length ? "\n\t\t\t" : " ") + "→ " + typeDesc( f.retval );

	// return data if there are no subfunction
	if( !f.subf || !keys( f.subf ).length )
		return { args: mArgs, ret: fretval, mets: "" }

	var k, methods = "",
		// function list
		mkeys = keys(f.subf).filter(nothidden).sort(sortAsc);

	for( k = 0; k < mkeys.length; k++ )
	{
		var met = f.subf[mkeys[k]], retval = "", type;
		curSubf = met.name;

		// load base func
		if(typeof(met) == "string" && met[0] == '#')
		{
			if(!base[met]) Throw(Error("basefunc " + met + " not found!"));
			met = base[met];
			curSubf = met.name;
		}

		if(hidden(curSubf)) continue;

		//add shortDesc entry if missing
		if( met.shortDesc == undefined )
		{
			scope[f.name].subf[curSubf].shortDesc = "";
			met.shortDesc = "";
		}

		//convert return value
		if( met.retval )
			retval = (met.isfunc && met.pNames.length ? "\n\t\t\t" : " ") + "→ " + typeDesc( met.retval );

		//convert function types
		var mdesc = met.desc;
		if( met.isfunc ) mdesc = `<b>${f.abbrev}.${curSubf}</b><br>` + mdesc;

		var args = [], metpop = newPopup("dsc", curSubf,
			addMarkdown(replaceTypes(replW(mdesc), true)),
			getAddClass(met) || (has(base.all, curSubf) ? ' class="baseFunc"' : ""));

		if( met.isfunc )
		{
			for( i in met.pNames )
				args.push( toArgPop( met.pNames[i], met.pTypes[i] ) );

			metpop += args.length ? `(${args.join(",")} )` : "()";

			if(has(curSubf, '.'))
				metpop = curSubf.split(".").fill("  ").join("") + metpop.italics();

			methods += subfBase.replace( "%s", metpop + retval );
		}
		else methods += subfBase.replace("\n\t\t", "").replace( "%s", metpop.trim() + retval );
	}
	curSubf = null;

	return { args : mArgs, mets : methods, ret : fretval }
}

// read and return html converted example snippets file
function getSamples( name )
{
	var sampcnt = 0, samples = {}, s = ReadFile(`${curScope}-samples/${name}.txt`, " ", true );

	s.replace(/<sample( (.*?))?>([^]*?)<\/sample\1?>/g,
		(m, _, t, c) => samples[t || sampcnt + 1] = toHtmlSamp(c, t, ++sampcnt)
	);

	return samples;
}

// convert a sample to html code
function toHtmlSamp( c, t, n )
{
	var hasBold = has(c, "<b>") && c.indexOf("</b>") > c.indexOf("<b>");
	if(!hasBold) Warn(`${curDoc} sample "${t||''}" has no bold area\n`);

	c = c.trim().replace( /<\/?b>/g, "§b§");
	c = Prism.highlight(c, Prism.languages.javascript, 'javascript')
		.replace( /\t/g, "    " )
		.replace( /    /g, "&#160;&#160;&#160;&#160;" )
		.replace( /\n/g, "<br>\n\t\t\t\t" )

	if(hasBold)
	{
		c = sampBase
			.replace( "%b", c )
			.replace( /§b§([^]+?)§b§/g, "<b id=\"snip%i\" style=\"font-size:100%\">$1</b>" );
	}
	else
	{
		c = sampBase
			.replace( /.*<a.*onclick="copy\( snip%i \)">.*<\/a>\n/, "" )
			.replace( "%b", c );
	}

	return c.replace( /%i/g, n ).replace( /%t/g, t ? " - " + t : '' );
}


function getAddClass(m)
{
	if(!m || !m.desc) return '';
	if(has(m.desc, "<deprecated") ) return ' class="deprHint"';
	if(has(m.desc, "<xfeature")) return ' class="xfeatHint"';
	if(has(m.desc, "<premium")) return ' class="premHint"';
	return '';
}

// returns a formatted description of a type - used for subfunction return values
function typeDesc( types )
{
	types = types.split("||").map(
		 function(type)
		 {
			return [type.slice(0, 3)].concat(
					// custom type desc
				type.replace(/^(...):([^-]*)/, (m, btype, desc) =>
						(typedesc[btype + "_tmp"] = desc, btype + "_tmp"))
					// sample vals
					.replace(/-/, '\x01').split('\x01')
			)
		}
	);

	var last = "</b>";
	var s = types.map(
		(type, i) => typenames[type[0]] ?
			"<b>" + typenames[type[0]] + (typedesc[type[1]] ?
				(last = "</i>", ":</b> <i>" + typedesc[type[1]]) : ""
			) + (type[2] ? `:${last} ` : last) : undefined
	);

	return types.map(
		function(type, i)
		{
			if( s[i] && type.length == 3 )
			{
				//allow limited values for parameters
				switch( type[0] )
				{
					case "num": return s[i] + rplop( type[2] );
					case "str": return s[i] + rplop( type[2], true );
					case "lst":
					case "obj": return s[i] + replaceTypes( type[2], false );
					case "dso":
						var func = type[2].replace(/[^/]*\/|#.*/g, "");
						//if(!curDoc.endsWith(func + ".htm") && !scope[func])
						//	Throw(Error(`link to unexistent file ${type[2]}.htm`))
						if(scope[func])
							return s[i] + newLink(type[2].replace(/(#.*)|$/, "$1.htm"),
								func.replace(regConPrefix, ""));
						else
							return s[i] + type[2];
					default: Throw(Error("unknown type " + type[1]));
				}
			}
			else
				return s[i] || Throw(Error("unknown type " + type[1]));
		}).join("\n").replace( /(“.*?”)/g, "<docstr>$1</docstr>");
}

	//nearly equal to typeDesc, but returns an app.popup for arguments
function toArgPop( name, types, doSwitch )
{
	// function callbacks
	if( typeof types == "object" )
	{
		return newPopup( "fnc", name,
			("<b>function</b>(\n\t\t" + types.pNames.map(
				function(n, i)
				{
					if(types.pTypes[i].isfunc || has("lst,obj", types.pTypes[i].slice(0, 3)))
						// for lists and objects in callback parameters switch popups
						return toArgPop(n, types.pTypes[i], true);
					else
						// primitive types get a primitive popup
						return toArgAppPop(n, types.pTypes[i]);
				}
			).join(",\n\t\t") + "\n\t)").replace(/\(\s+\)/, "()"), false
		);
	}

	// multiple types
	types = types.split("||").map(
		 function(type)
		 {
			return [type.slice(0,3)].concat(
					// custom type desc
				type.replace(/^(...):([^-]*)/, (m, btype, desc) =>
						(typedesc[btype + "_tmp"] = desc, btype + "_tmp"))
					// sample vals
					.replace(/-/, '\x01').split('\x01')
			)
		}
	);

	// start of type desc string. (info: [optional], [:] if followed by value)
	// <b>type[:]</b> [[<i>desc[:]</i>] values]
	var last;
	var s = types
		.map((type, i) => "<b>" + typenames[type[0]] +
			(last = "</b>", typedesc[type[1]] ?
				(last = "</i>", ":</b> <i>" + typedesc[type[1]]) : ""
			) + (type[2] ? `:${last} ` : last)
		);

	// add formatted possible values
	var str = types.map(function(type, i)
	{
		if( type.length == 3 )
		{
			switch( type[0] )
			{
				case "num":
				case "str":
				case "bin":
					if(type.length == 3 && has(type[2], ':'))
						type[2] = replaceTypes(type[2], true);
					return s[i] + rplop( type[2], type[0] == "str" );
				case "lst":
				case "obj": return s[i] + replaceTypes( replW(type[2]), true );
				case "dso":
					var func = type[2].replace(/[^/]*\/|#.*/g, "");
					//if(!curDoc.endsWith(func + ".htm") && !scope[func])
					//	Throw(Error(`link to unexistent file ${type[2]}.htm`))
					return s[i] + newLink(type[2].replace(/(#.*)|$/, "$1.htm"),
						func.replace(regConPrefix, ""));
				default: Throw(Error("unknown type " + type[1]));
			}
		}
		else return s[i];
	});

	// build popup id, "std_type" for common or "type_index" for individual popups
	// save popup definition and return popup text (= link)
	if(types.length == 1)
	{
		types = types[0];
		if(types[1].endsWith("_tmp")) types[2] = true;
		var pop_id =
			(types[1].match("_") || types[2] ? "" : "std_") +
			(!types[2] ? types[1].replace("?", "ukn") :
				types[0] + "_" + incpop( types[0], 1 )
			);
		if(pop_id.match(/[^_\w]/)) Throw(Error("invalid popup id " + pop_id));

		s = newPopup( pop_id, name, str[0].replace(/ShowPopup\('.*?'\)/g,
			(m) => m.replace(/“/g, "&ldquo;" ).replace(/”/g, "&rdquo;" )), "");
		if(doSwitch) s = s.trim().replace(/href="#pop_(..._...)"/, 'href="" ' + switchPop);
		return s;
	}
	else
		// for values with multiple types
		return newPopup("mul", name, str.join("<br>"));
}

function toArgAppPop( name, types )
{
	types = types.split("||")
		.map((type) => [type.slice(0,3)]
			.concat(type.replace('-', '\x01')
			.split('\x01'))
		);

	return newAppPopup(
		name, types.map(
			(type) => typenames[type[0]] +
				(typedesc[type[1]] ? ": " + typedesc[type[1]] : "") +
				(type.length == 3 ? ": " + rplop(type[2], type[0] == "str") : "")
			).join("\n")
	);
}

//replace whitespace with html syntax whitespace
function replW( s, n )
{
	if( n == undefined ) n = true;
	return s
		.replace( /\\\/\\\//g, '#' )
		.replace( /\n/g, n ? "<br>" : "\n" )
		.replace( /\t/g, "    " )
		.replace( /  /g, "&#160;&#160;" );
}

//increase special popup counters and returns its id
function incpop( type, i )
{
	if( i ) spop[type] += i;
	return hex(spop[type]);
}

// accept formats: 'name:"desc"' 'name:type' 'name:"types"' 'name:"type-values"'
// using name:'...' will force app popups
function replaceTypes(s, useAppPop)
{
	var _s = s.replace(/<(style|a)\b.*?>.*?<\/\1>|style=[^>]*/g, '');
	_s.replace(/\b([\w_.#-]+):([a-z]{3}(_[a-z]{3})?\b)?-?("[^"]*|'[^']*| ?\w(\\.|[^.|:,”}\]\n])*)?['"]?/g,
		function(m, name, type, _, desc)
		{
			var r, space = '', tapop = false;
			if( !type && (!desc || desc[0] == ' ') || name.startsWith("Note")) return;

			if(desc) {
				if(desc.endsWith(' ')) space = ' ';
				desc = desc.slice(desc[0] == '"', space ? -1 : undefined);
				if(desc[0] == "'") tapop = true, desc = desc.slice(1);
				if(typenames[desc.slice(0, 3)] && !desc[4].match(/[a-z]/i)) type = desc, desc = '';
			}

			if( type )
			{
				if(typenames[type.slice(0, 3)]) {
					if(desc) type += '-' + desc, desc = ''; }
				else
					desc = type + (desc || ''), type = '';
			}

			if(useAppPop || tapop)
			{
				if(type && !desc) r = toArgAppPop(name, type);
				else r = newAppPopup(name, type ? typenames[type.slice(0, 3)] +
						(typedesc[type] ? ": " + typedesc[type] : "") : desc);
			}
			else if(type) r = toArgPop(name, type);
			else r = newPopup("dsc", name, desc);

			s = s.replace(m, r + space);
			return '';
		}
	);
	return s;
}

// convert markdown symbols to html
function addMarkdown(s)
{
	return s
		// links
		.replace(/([^\\]|^)\[([^\]}]*)\]\((.*?)\)/g, function(match, white, name, url)
		{
			// exists in docs folder? direct link : open in external app
			return white + (!url.startsWith("http") &&
				(app.FileExists("docs/" + url.replace(/\.\.\/|#.*/g, "")) ||
				app.FileExists(`docs/${curScope}/` + url.replace(/\.\.\/|#.*/g, ""))) ?
				`<a href="${url}" data-ajax="false">` :
				`<a href="${url}" onclick="return OpenUrl(this.href);">`)
				+ `${name||url}</a>`;
		})
		// link + onclick
		.replace(/([^\\]|^)\[([^\]}]*)\]{(.*?)}/g, function(match, white, name, script)
		{
			script = script.replace(/"/g, "&quot;").replace(/([*_`~])/g, "\\$1");
			return white + `<a href="" onclick="${script}">${name}</a>`;
		})
		.replace(/(<br>|^)(#+) ([^<]*)/g, (_, white, h, title) =>         // ## headline
			white + `<h${h.length}>${title}</h${h.length}>`)
		.replace(/([^\\]|^)\*\*(\s*[a-z][^]*?[^\\])\*\*/gi, "$1<strong>$2</strong>")
		.replace(/([^\\]|^)\*\*([^]*?[^\\])\*\*/g, "$1<b>$2</b>")   // **bold**
		.replace(/([^\\]|^)__([^]*?)__/g, "$1<u>$2</u>")            // __underlined__
		.replace(/([^\\]|^)\*([^]*?[^\\])\*/g, "$1<i>$2</i>")       // *italic*
		.replace(/([^\\]|^)_([^]*?[^\\])_/g, "$1<i>$2</i>")         // _italic_
		.replace(/([^\\]|^)`([^]*?[^\\])`/g, "$1<kbd>$2</kbd>")     // `monospace`
		//.replace(/([^\\]|^)```([^]*?[^\\])```/g, "$1<kbd>$2</kbd>")   // `monospace`
		.replace(/([^\\]|^)~~([^]*?[^\\])~~/g, "$1<s>$2</s>")       // ~~strikethrough~~
		.replace(/([^\\]|^)@(([^\/\n<>, ]+\/)*([a-z]+?))(#\w+)?\b/gi, '$1<a href="$2.htm$5" data-ajax="false">$4</a>') // @DocReference
		.replace(/\\([_*~@])/g, "$1");                              // consume \ escaped markdown
}
	// convert int to 3-digit hex
function hex(v) { return ("00" + v.toString(16)).replace(/^0+(...)/, "$1"); }
	//returns the type name or description of a value or the value itself
function getv( v ) { return typedesc[v] || typenames[v] || v; }
	//returns a comma separated list of object keys
function skeys( o ) { return "" + keys( o ); }
	//replaces \ paceholders with its placeholder 'name'
function reprs( s ) { return s.replace( /\n/g, "\\n" ).replace( /\t/g, "\\t" ); }
	//replace "&" and "|" operators with "and" and "or"
function rplop( s, n )
{
	return replW((n ? `“${s}”` : s)
		.replace( /\\(.)/g, (m, c) => `§${c.charCodeAt(0)}§` )
		.replace( /\|/g, n ? "” or “" : " or " )
		//.split(',').sort(sortAsc).join(n ? "”, “" : ", ")
		.replace( /,/g, n ? "”, “" : ", " )
		.replace( /§(\d+)§/g, (m, c) => `${String.fromCharCode(c)}` )
	);
}
function Throw(err) { throw err; }
function Warn(msg) { if(warnEnbl) console.error("Warning: " + msg); }
function newNaviItem(link, text, add) { return naviItem.replace("%s", link).replace("%s", add || "").replace("%s", text); }
function newTxtPopup(  id, text, add) { return txtPopup.replace("%s",   id).replace("%s", add || "").replace("%s", text); }
function newDefPopup(  id, text) { return defPopup.replace("%s",   id).replace("%s", text); }
function newAppPopup(name, desc) { return appPopup.replace("%s", desc).replace("%s", name); }
function newLink(  target, text) { return `<a href="${target}" data-ajax="false">${text}</a>`; }
function newCode(code) { return codeBase.replace("%s", code); }

function newPopup(type, name, desc, addClass)
{
	if(addClass !== false) desc = desc.replace( /(“.*?”)/g, "<docstr>$1</docstr>" );

	desc = desc.trim();
	var pop_id = popDefs[desc];
	if(!pop_id) {
		pop_id = spop[type] == undefined ? type : pop_id = type + "_" + incpop( type, 1 );
		popDefs[desc] = pop_id;
	}

	return newTxtPopup( pop_id, name, addClass );
}

function getHead(d)
{
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
	%p: popup  list [defPopup] % ( id, text )
					[txtPopup] % ( id, text )
					[appPopup] % ( desc, type )
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
		<a class="ui-btn-right" data-icon="gear" data-iconpos="notext" onclick="setTheme(getTheme() == 'default' ? 'dark' : 'default')"></a>
	</div><!-- /header -->

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
		<a class="ui-btn-right" data-icon="gear" data-iconpos="notext" onclick="setTheme(getTheme() == 'default' ? 'dark' : 'default')"></a>
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
var 	//globals for one doc
	Globals,
		// app object constructor name prefixes
	regConPrefix = /^(Create|Open)/,
	//bases for...
		//available typenames
	typenames = {
		"all":"all types",
		"bin":"boolean",
		"dso":"app object",
		"fnc":"function",
		"lst":"list",
		"num":"number",
		"obj":"object",
		"str":"string",
		"?":"unknown"
	},
		//special types and descriptions
	typedesc = {
		"lst_obj":"of objects",

		"num_byt":"Bytes",
		"num_col":"hexadecimal 0xrrggbb",
		"num_dat":"Datetime in milliseconds (from JS Date object)",
		"num_deg":"angle in degrees (0..360)",
		"num_dhx":"0-255",
		"num_fac":"factor",
		"num_flt":"float",
		"num_fps":"frames per second",
		"num_frc":"fraction (0..1)",
		"num_gbt":"Gigabytes",
		"num_hrz":"hertz",
		"num_int":"integer",
		"num_met":"meters",
		"num_mls":"milliseconds",
		"num_mtu":"maximum transmission unit",
		"num_prc":"percent",
		"num_pxl":"pixel",
		"num_rad":"angle in radient (0..2*π)",
		"num_sec":"seconds",

		"str_acc":"account Email",
		"str_b64":"base64 encoded",
		"str_col":'<br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ...',
		"str_com":"comma “,” separated",
		"str_eml":"comma separated email addresses or names",
		"str_flt":"float",
		"str_fmt":"format",
		"str_htm":"html code",
		"str_hex":"hexadecimal “00”..“FF”",
		"str_int":"integer",
		"str_jsc":"javascript code",
		"str_lst":"separated",
		"str_mim":"mimetype",
		"str_mod":"mode",
		"str_num":"number",
		"str_oid":"object id “#id”",
		"str_ort":'“Default”, “Portrait”, “Landscape”',
		"str_pip":"pipe “|” separated",
		"str_pth":'path to file or folder ( “/absolute/...” or “relative/...” )',
		"str_pxl":"integer in pixels",
		"str_smc":"semicolon “;” separated",
		"str_sql":"sql code",
		"str_sty":"style",
		"str_uri":"URI encoded",
		"str_url":"url path"
	};


// ---------------------------- DocsModifier.js globs --------------------------

var
	// hide functions and methods which are matching this regex
	regHide = /^(_.*|.+\._.*|(Create|Install)Wallpaper|Create(Object|ListView|NxtRemote|SmartWatch)|GetLast.*|(Set|Is)DebugEnabled|Odroid|Draw|Destroy|Release|Explode|Detailed|IsEngine|SetOn(Touch|Connect)Ex|id|S?Obj|ctx\.(un)?loadTexture)$/,
		// interpret matching app. functions as control constructors
	regControl = /^(Create(?!Debug).*|OpenDatabase|Odroid)$/,
		// html char placeholders
	_htm = {comma:',', colon:':', bsol:'\\', period:'.', lowbar:'_', verbar: '|', "#160":" ", nbsp:" ", ldquo: "“", rdquo: "”"},
		// current language
	lang = "en",
		// cwd
	path = __dirname + "/";


function getl(l) { if(l == undefined) l = lang; return l == "en" ? "" : "-" + l; }
function l(s) { console.log(`-----${s}-----`); return s; }
function hidden(name) { return !!name.match(regHide); }
function nothidden(name) { return !name.match(regHide); }
function isnum(c) { return c >= '0' && c <= '9'; }
function has(l, v) { return l.indexOf(v) > -1; }
function values(o) { return Object.values(o); }
function keys(o) { return Object.keys(o); }
function d(v) { console.log(v); return v; }
function saveScope() { app.WriteFile(curScope + getl() + ".json", tos(scope)); }
function sortAsc(a, b) {
	a = a.toString().replace(/[^a-z0-9]/gi, "") || a + "";
	b = b.toString().replace(/[^a-z0-9]/gi, "") || b + "";
	var la = a.toLowerCase(), lb = b.toLowerCase();
	return la == lb ? a < b ? 1 : -1 : la > lb ? 1 : -1;
}

function isControl(name) { return !!scope[name].subf; }

function getAbbrev(s)
{
	var count = 0;
	        // remove 'Create'
	return s.slice(6)
			// count uppercases
		.replace(/[A-Z]/g, function(c) { count++; return c; })
			// remove 'aeiou'
		.replace(/[aeiou]/g, '')
			// remove doubled letters ('tt' -> 't')
		.replace(/(.)\1+/g, '$1')
			// leave lowercase letters while sum(uppercase + lowercase) < 3
		.replace(/[b-z]/g, function(c) { return ++count > 3? '' : c })
		.slice(0, 3).toLowerCase();
}

function ReadFile(file, dflt, write)
{
	if(!file.startsWith("/")) file = file;
	if(app.FileExists(file)) return app.ReadFile(file);
	else if(write) app.WriteFile(file, dflt);
	return dflt;
}

	// converts a variable to indented string
	// supports Boolean, Number, String, Array and Object
function tos(o, intd, m)
{
	if(intd == undefined) intd = "";
	if(m == undefined) m = true;
	s = m ? intd : "";

	if(o === null) return "null";
	else if(o === undefined) return "undefined";
	else switch(o.constructor.name) {
		case "String": case "Number": case "Boolean":
			return s + JSON.stringify(o);
		case "Array":
			var n = o.length < 2 || (typeof o[0] != "object");
			s += n ? "[" : "[\n";
			for(var i = 0; i < o.length; i++) {
				s += tos(o[i], intd + (n ? "" : "\t"), !n);
				if(i < o.length - 1) s += n ? ", " : ",\n";
			}
			return s + (n ? "" : "\n" + intd) + "]";
		default:
			var okeys = keys(o).sort(sortAsc);
			switch(okeys.length) {
	case 0: return "{}";
				case 1: return s += `{ "${okeys[i]}": ${tos(o[okeys[i]], "", false)} }`;
				default:
					s += "{\n";
					for(var i = 0; i < okeys.length; i++) {
						s += intd + `\t"${okeys[i]}": ${tos(o[okeys[i]], intd + "\t", false)}`;
						if(i < okeys.length - 1) s += ",\n";
					}
				return s + `\n${intd}}`;
			}
	}
	return s;
}


// ---------------------------- nodejs app wrapper -----------------------------


function OnStart()
{
	try {
		if(process.argv[2] == "help")
			return console.error("Syntax:\n\t" +
				process.argv.slice(0, 2).join(" ").replace(path, "") +
				" [scope.[PATTERN]] ..");

		for(var pat of process.argv.slice(2))
		{
			app.ShowProgressBar("Generating " + pat);
			var p = pat.indexOf(".") + 1;
			if(p) generateScope(pat.slice(0, p-1), pat.slice(p));
			else generateScope(pat);
			app.HideProgressBar();
		}
	} catch(e) {
		console.error( /*\x1b[31m*/ `while generating ${curScope} ${curDoc||''}: ${curSubf||''}` );
		throw e;
	}
}

var fs = require("fs");
var rimraf = require("rimraf");
var Prism = require('prismjs');
require('prismjs/components/prism-java.min.js');

function absPth(p) { return p.startsWith("/") ? p : path + p; }

if(typeof app == "undefined")
	var app = {
		ReadFile: (p) => fs.readFileSync(absPth(p), "utf8"),
		WriteFile: (p, s) => fs.writeFileSync(absPth(p), s),
		DeleteFile: (p) => fs.unlinkSync(absPth(p)),
		ListFolder: (p) => fs.readdirSync(absPth(p)),
		MakeFolder: (p) => fs.mkdirSync(absPth(p)),
		DeleteFolder: (p) => rimraf.sync(absPth(p)),
		FileExists: (p) => fs.existsSync(absPth(p)),
		FolderExists: (p) => fs.existsSync(absPth(p)),
		SetDebug: () => 0,
		ShowProgressBar: (t) => console.log(t + "\n"),
		UpdateProgressBar: (i,t) => console.log("\033[1A\033[K" + `${i}% ${t||'Initializing'}`),
		HideProgressBar: () => console.log("\033[1A\033[K100% done."),
		ShowPopup: console.log
	}

OnStart();
