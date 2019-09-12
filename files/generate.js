#!/usr/bin/env node

var curDoc = null, curSubf = null;
var warnEnbl = false, Globals;

	//generates all doc files
function generateDocs() {
	app.ShowProgressBar("Generating files...");

	app.SetDebug("console");
	generateNavigators();
	generateIntros();
	app.UpdateProgressBar( 0 );

	app.DeleteFolder(path + `docs${getl()}/app`);
	app.MakeFolder(path + `docs${getl()}/app`);

	// missing: check samples
	//var lastfuncs = JSON.parse(ReadFile(path + `lastfuncs${getl()}.json`, "{}"));
	var i, last = -1, tchd = false, info = { app: {} };
	var lst = keys(functions)
		.filter(nothidden)
		/*.filter((f) =>
			JSON.stringify(functions[f]) != JSON.stringify(lastfuncs[f]) ||
			keys(functions[f].subs).filter(hidden).length);*/

	for( i = 0; i < lst.length; i++ ) {
		generateDoc(lst[i]);

		if( isControl(lst[i]) ) {
			var tctrl = {}, tsubf = functions[lst[i]].subf;
			info[functions[lst[i]].abbrev] = tctrl;

			for( var j in tsubf ) {
				if(hidden(j)) continue;

				if(typeof(tsubf[j]) == "string" && tsubf[j].startsWith("#")) {
					if(!basefuncs[tsubf[j]]) Throw(Error(`basefunc ${tsubf[j]} not found!`));
					tctrl[j] = basefuncs[tsubf[j]].shortDesc;
				}
				else tctrl[j] = tsubf[j].shortDesc;
			}
		}
		info.app[lst[i]] = functions[lst[i]].shortDesc;

		last = Math.floor( 100 * i / lst.length )
		app.UpdateProgressBar( last, lst[i] );
	}

	app.SetDebug("all");
	//if( tchd ) saveFunctions();

	//app.WriteFile( path + `lastfuncs${getl()}.json`, tos(functions) );
	app.WriteFile( path + "info.json", tos(info) );

	//delete lastfuncs;
	delete info;

	app.HideProgressBar();
	app.ShowPopup("Generated");
}

function generateNavigators() {
	var list, nav = '';

	// generate html category lists
	for(var cat of keys( categories ).filter(nothidden).sort(sortAsc)) {
		curDoc = `docs${getl()}/${cat}.htm`;

		nav += newNaviItem(cat + ".htm", cat );
		list = categories[cat]
			.filter(nothidden)
			.map((func) => func ? newNaviItem(`app/${func}.htm`, func,
				getAddClass(functions[func])) : "<li></li>")
			.join("");

		// generate category list html file
		app.WriteFile( path + `docs${getl()}/${cat}.htm`,
			(categories[cat].length < 20 ? naviBase :
				naviBase.replace( 'data-filter="false"', 'data-filter="true"' ))
			.replace( "%l", list )
			.replace( /%t/g, cat )
		);
	};

	app.WriteFile(
		path + `docs${getl()}/Categories.htm`,
		naviBase
			.replace( "%l", nav )
			.replace( /%t/g, "Categories" )
	);
}

function generateIntros() {
	app.DeleteFolder(path + `docs${getl()}/intro`);
	app.MakeFolder(path + `docs${getl()}/intro`);
	var nav = "";

	for(var name of app.ListFolder("intros").sort(sortAsc)) {
		var s = app.ReadFile(path + `intros${getl()}/` + name);
		var samples = {}, sampcnt = 0;
		resetGlobals();
		
		name = name.replace(/.md$/, "");
		curDoc = `docs${getl()}/intro/${name.replace(/\s/g, "")}.htm`;
		nav += newNaviItem(
		    `intro/${name.replace(/\s/g, "")}.htm`,
		    name = name.replace(/^\d*\s*/, ""));
		
		s = s.replace(/(\s|<br>)*<sample (.*?)>([^]*?)<\/sample \2>/g,
			function(m, _, t, c)
			{
				samples[t] = toHtmlSamp(c, t, ++sampcnt).replace(/\n\t\t/g, "\n\t\t");
				return `<sample ${t}>`;
			});

		var html = `<p>${replaceTypes(addMarkdown(replW(s)))}</p>`
			// exclude <h> and <table> tags from <p>
			.replace(
				/(<\/p>)?(<br>)?(<(h\d?|table)>[^]*?<\/\4>)(\s|<br>|<p>)*/g,
				"</p>\n\t\t$3\n\t\t<p>")
			// format html code on linebreaks
			.replace(/\s*<br>\s*/g, "<br>\n\t\t")
			// expandable samples (per <sample name> tag or add to desc)
			.replace(/<sample (.*?)>/g, (m, t) => `</p>\n\t\t${samples[t]}<p>`)
			.replace( /(“.*?”)/g, "<docstr>$1</docstr>");

		app.WriteFile(path + curDoc, adjustDoc(introBase.replace("%c", html), name));
	}

	app.WriteFile(
		path + `docs${getl()}/Introduction.htm`,
		naviBase
			.replace( "%l", nav )
			.replace( /%t/g, "Introduction" )
	);
}

// generates one document by function name
function generateDoc( name ) {
	if(name == "Intros") return generateIntros();
	if(name == "Navs") return generateNavigators();
	curDoc = `docs${getl()}/app/${name}.htm`;
	resetGlobals();

	//get an object with the html-converted data
	var data = getDocData(functions[name]),
		//insert everything into the doc base string
		html = htmlBase
			// subfunctions
			.replace(/%b/g, isControl(name) && data.mets ? subfHead
				.replace(/%t/g, name.slice(6))
				.replace("%f", data.mets) : ""
			)
			// description
			.replace("%d", getDesc(name)
				.replace("%c", (
					functions[name].abbrev ? functions[name].abbrev + " = " : "") +
					`app.${name}(${data.args})` + data.ret)
				.replace(/(<\/div>\n\n\t*<p><br>)<br>/, "$1")
			);

	//save doc file
	app.WriteFile( path + `docs${getl()}/app/${name}.htm`, adjustDoc(html, name) );
}

// reset globals
	// it still exists because it was necessary to do it this way in python
	// and I haven't changed it during the translation
function resetGlobals() {
	Globals = {
		popDefs: [],
		spop: {str:0, num:0, lst:0, obj:0, fnc:0, dsc:0, mul:0, std:0, dso:0}
	};
}

function adjustDoc(html, name) {
	return html
		// title occurances
		.replace(/%t/g, name)
		// popup object list
		.replace(/%p/, Globals.popDefs.join("\n\t"))
		// additional notes
		.replace(/<(premium|deprecated|xfeature)(.*?)>/g, (m, n, a) => eval(n + "Hint").replace("%s", a))
		// colored passages
		.replace(/<(red|greed|blue|grey)>(.*?)<\/\1>/g, '<$1>$2</$1>')
		// some html char placeholders
		.replace(/&(.+?);/g, (m, v) => _htm[v] || m)
		// replace <js> and <bash> tags with sample
		.replace(
			/(\s|<br>)*<(js|bash|smp)( nobox)?>(\s|<br>)*([^]*?)(\s|<br>)*<\/\2>((\s|<br>)*)/g, 
			function(m, w1, lang, nobox, _, code, _, w2, _)
			{
			    if(w1) w1 = m.slice(0, m.indexOf(`<${lang}>`));
				if(Prism.languages[lang])
					code = Prism.highlight(
						code.replace(/<br>/g, "").replace(/&#160;/g, "§s§"),
						Prism.languages[lang], lang
					).replace(/§s§/g, "&#160;").replace(/\n/g, "<br>\n");
				
				if(nobox) return `${w1||''}${code}${w2||''}`;
				else if(has(code, "<br>")) return `</p>\n${newCode(code)}\t\t<p>`
				else return `${w1||''}<code class="samp samp-inline">${code}</code>${w2||''}`;
			})
		// remove leading whitespace in <p> tag
		.replace(/<p>(<br>|\s+)+/g, "<p>")
		// remove trailing whitespace in <p> tag
		.replace(/(<br>|\s+)+<\/p>/g, "</p>")
		// remove empty <p> tags
		.replace(/\n?\t*<p><\/p>/g, "")
		// remove special whitespace from tables
		.replace(/([\n\t\xa0]+)(<\/?t([rhd]|head|body|able))/g,
			(m, w, t) => w.replace(/\t/g, "    ").replace(/\xa0/g, ' ') + t)
		// remove trailing <br> tags from table
		.replace(/(<\/?(t([rdh]|head|body|able))[^>]*>)<br>/g, "$1")
		// indent line breaks
		.replace(/\n\s+<br>\n(\s+)/g, (m, w) => `\n${w.replace(/ /g, " ")}<br>\n${w}`)
		// remove trailing whitespace
		.replace(/[ \t]+\n/g, "\n");
}

// converts a function object into an html snippets object
function getDocData( f, useAppPop ) {

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
	for( i in f.pNames ) {
		if( useAppPop ) {
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

	// return data if there are no subfunctions
	if( !f.subf || !keys( f.subf ).length )
		return { args: mArgs, ret: fretval, mets: "" }

	var k, methods = "",
		// function list
		mkeys = keys( f.subf ).filter(nothidden).sort(sortAsc);

	for( k = 0; k < mkeys.length; k++ )
	{
		var met = f.subf[mkeys[k]], retval = "", type;
		curSubf = met.name;

		// load base func
		if(typeof(met) == "string" && met.startsWith("#")) {
			if(!basefuncs[met]) Throw(Error("basefunc " + met + " not found!"));
			met = basefuncs[met];
			curSubf = met.name;
		}

		if(!met.isfunc || hidden(curSubf)) continue;

		//add shortDesc entry if missing
		if( met.shortDesc == undefined )
		{
			functions[f.name].subf[curSubf].shortDesc = "";
			met.shortDesc = "";
		}

		//convert return value
		if( met.retval )
			retval = (met.pNames.length ? "\n\t\t\t" : " ") + "→ " + typeDesc( met.retval );

		//convert function types
		if( met.isfunc )
		{
			var args = [], pop;
			if(!has(Globals.popDefs[Globals.popDefs.length - 1] || "", f.abbrev + ".")) Globals.popDefs.push("");

			pop = descPopup( curSubf, `<b>${f.abbrev}.${curSubf}</b><br>` +
				replW( met.desc ).replace( /(“.*?”)/g, "<docstr>$1</docstr>"),
				getAddClass(met) || (has(basefuncs.all, curSubf) ? ' class="baseFunc"' : ""));
			tryAddType( pop.fnc );

			for( i in met.pNames )
				args.push( toArgPop( met.pNames[i], met.pTypes[i] ) );

			var s = pop.txt + ( args.length ? `(${args.join(",")} )` : "()" ) + retval;
			if(has(curSubf, '.')) s = s.split(".").fill("  ").join("") + s.italics();
			methods += subfBase.replace( "%s", s );
		}
		/* else { //convert other types
			var pop = descPopup( curSubf, replW( met.desc ) );
			tryAddType( pop.fnc );
			methods += subfBase.replace( "%s", pop.txt + retval );
		} */
	}
	curSubf = null;

	return { args : mArgs, mets : methods, ret : fretval }
}

// returns an html formatted description of a function
function getDesc(name)
{
	var desc = functions[name].desc.trim();
	if(desc.startsWith("#"))
	{
		if(app.FileExists(path + `functions/${desc.slice(1)}`))
			desc = app.ReadFile(path + `functions/${desc.slice(1)}`).trim();
		else
			Throw(new Error(`description file ${desc.slice(1)} linked but doesn't exist.`));
	}
	desc = desc.charAt(0).toUpperCase() + desc.slice(1);
	
	var samples = getSamples(name), s;
	var sampcnt = Object.keys(samples).length;
	if(!has(desc, '.')) desc += '.';
	
	desc = desc.replace(/(\s|<br>)*<sample (.*?)>([^]*?)<\/sample \2>/g,
		function(m, _, t, c)
		{
			samples[t] = toHtmlSamp(c, t, ++sampcnt);
			return `<sample ${t}>`;
		});

	return `<p>${replaceTypes(addMarkdown(replW( desc )))} </p>`
		// replace %c with constructor if existent, otherwise insert after first dot
		.replace(
			/((?=.*\%c)\.?(\s|<br>)*\%c|((?!.*\%c)\.)(\s|<br>|$)+)/,
			`.</p>\n${newCode("%c")}\t\t<p>`)
		// exclude <h> and <table> tags from <p>
		.replace(
			/(<\/p>)?(<br>)?(<(h\d?|table)>[^]*?<\/\4>)(\s|<br>|<p>)*/g,
			"</p>\n\t\t$3\n\t\t<p>")
		// format html code on linebreaks
		.replace(/\s*<br>\s*/g, "<br>\n\t\t")
		// expandable samples (per <sample name> tag or add to desc)
		.replace(/<sample (.*?)>/g, (m, t) => (s = samples[t]) ?
			(delete samples[t], `</p>\n\t\t${s}<p>`) :
			Throw(Error(`sample ${t} not found for ${name}`)))
		.replace( /(“.*?”)/g, "<docstr>$1</docstr>")
		+ Object.values(samples).concat("").reduce((a, b) => a + b);
}

// read and return html converted example snippets file
function getSamples( name )
{
	var sampcnt = 0, samples = {}, s = ReadFile( path + `samples/${name}.txt`, " ", true );
	
	s.replace(/<sample (.*?)>([^]*?)<\/sample>/g,
		(m, t, c) => samples[t] = toHtmlSamp(c, t, ++sampcnt));
	
	return samples;
}

// convert a sample to html code
function toHtmlSamp( c, t, n )
{
	var hasBold = has(c, "<b>") && c.indexOf("</b>") > c.indexOf("<b>");
	if(!hasBold) Warn(`${curDoc} sample "${t}" has no bold area\n`);

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

	return c.replace( /%i/g, n ).replace( /%t/g, t );
}


function getAddClass(m)
{
	if(has(m.desc, "<deprecated") ) return ' class="deprHint"';
	if(has(m.desc, "<xfeature")) return ' class="xfeatHint"';
	if(has(m.desc, "<premium")) return ' class="premHint"';
	return '';
}

// returns a description popup object
function descPopup( text, ptext, sClass )
{
	return {
		fnc: newDefPopup(
			"dsc_" + incpop( "dsc", 1 ),
			addMarkdown(replaceTypes(ptext, 1))),
		txt: newTxtPopup( "dsc_" + incpop( "dsc" ), text, sClass )
	};
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
						if(!curDoc.endsWith(type[2] + ".htm") && !functions[type[2]])
							Throw(Error(`link to unexistent file ${type[2]}.htm`))
						if(functions[type[2]])
							return s[i] + newLink(type[2] + ".htm", type[2].replace(regConPrefix, ""));
						else
							return s[i] + type[2];
					default: Throw(Error("unknown type " + type[1]));
				}
			}
			else
			{
				if(s[i] == undefined)
				{
					//if(isDSO) return "<b>app object:</b> " + type[1]; else
					Throw(Error("unknown type " + type[1]));
				}
				return s[i];
			}
		}).join("\n")
		.replace( /(“.*?”)/g, "<docstr>$1</docstr>");
}

	//nearly equal to typeDesc, but returns an app.popup for arguments
function toArgPop( name, types, doSwitch ) {

	// function callbacks
	if( typeof types == "object" )
	{
		tryAddType( newDefPopup(
			"fnc_" + incpop( "fnc", 1 ),
			"<b>function</b>(\n\t\t" + types.pNames.map(
				function(n, i)
				{
					if(types.pTypes[i].isfunc || has("lst,obj", types.pTypes[i].slice(0, 3)))
						// for lists and objects in callback parameters switch popups
						return toArgPop(n, types.pTypes[i], true);
					else
						// primitive types get a primitive popup
						return toArgAppPop(n, types.pTypes[i]);
				}
			).join(",\n\t\t") + "\n\t)" ).replace(/\(\s+\)/, "()")
		);

		return newTxtPopup( "fnc_" + incpop( "fnc" ), name );
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
	var last = "</b>";
	var s = types
		.map((type, i) => "<b>" + typenames[type[0]] +
			(typedesc[type[1]] ?
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
					if(!curDoc.endsWith(type[2] + ".htm") && !functions[type[2]])
						Throw(Error(`link to unexistent file ${type[2]}.htm`))
					return s[i] + newLink(type[2] + ".htm", type[2].replace(regConPrefix, ""));
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

		tryAddType( newDefPopup( pop_id, str[0]
			.replace( /(“.*?”)/g, "<docstr>$1</docstr>" )
			.replace( /ShowPopup\('.*?'\)/g, m => m.replace(/<.*?>/g, ""), "")
		));

		s = newTxtPopup( pop_id, name );
		if(doSwitch) s = s.trim().replace(/href="#pop_(..._...)"/, 'href="" ' + switchPop);
		return s;
	}
	else {
		// for values with multiple types
		tryAddType( newDefPopup(
			"mul_" + incpop( "mul", 1 ),
			str.join("<br>").replace( /(“.*?”)/g, "<docstr>$1</docstr>" )));
		return newTxtPopup( "mul_" + incpop( "mul" ), name );
	}
}

function toArgAppPop( name, types ) {
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

//adds a type to the type popup list if it doesnt exist yet
function tryAddType( def ) {
	def = def.trim();
	if(!has(Globals.popDefs, def ))
		Globals.popDefs.push( def );
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
	if( i ) Globals.spop[type] += i;
	return hex(Globals.spop[type]);
}

// accept formats: 'name:"desc"' 'name:type' 'name:"type-values"'
function replaceTypes(s, useAppPop)
{
	var _s = s.replace(/<(style|a).*?>.*<\/\1>|style=[^>]*/g, '');
	_s.replace(/\b([\w_.#-]+):([a-z]{3}(_[a-z]{3})?\b)?-?("[^"]*| ?\w[^.|:,”}\]\n]*)?"?/g,
		function(m, name, type, _, desc)
		{
			var r, space = '';
			if( !type && !desc || name.startsWith("Note")) return;

			if(desc) {
				if(desc.endsWith(' ')) space = ' ';
				desc = desc.slice(desc.startsWith('"'), space ? -1 : undefined);
			}

			if( type )
			{
				if(typenames[type.slice(0, 3)]) {
					if(desc) type += '-' + desc, desc = ''; }
				else
					desc = type + (desc || ''), type = '';
			}

			if(useAppPop)
			{
				if(type && !desc) r = toArgAppPop(name, type);
				else r = newAppPopup(name, type ? typenames[type.slice(0, 3)] +
						(typedesc[type] ? ": " + typedesc[type] : "") : desc);
			}
			else
				r = type ? toArgPop(name, type) : newAppPopup(name, desc);

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
		.replace(/([^\\]|^)\[([^\]}]*)\]\((.*?)\)/g, function(match, white, name, url)
		{
			// exists in docs folder? direct link : open in external app
			return white + (!url.startsWith("http") &&
				(app.FileExists(path + "docs/" + url.replace("../", "")) ||
				app.FileExists(path + "docs/app/" + url.replace("../", ""))) ?
				`<a href="${url}" data-ajax="false">` :
				`<a href="${url}" onclick="return OpenUrl(this.href);">`)
				+ `${name||url}</a>`;
		})
		// link + onclick
		.replace(/([^\\]|^)\[([^\]}]*)\]{(.*?)}/g, function(match, white, name, script)
		{
			script = script.replace(/"/g, "&quot;").replace(/([*_`~])/g, "\\$1");
			return white + `<a href="#" onclick="${script}">${name}</a>`;
		})
		.replace(/(<br>|^)(#+) ([^<]*)/g, (_, white, h, title) =>         // ## headline
			white + `<h${h.length}>${title}</h${h.length}>`)
		.replace(/([^\\]|^)\*\*([^]*?[^\\])\*\*/g, "$1<b>$2</b>")   // **bold**
		.replace(/([^\\]|^)__([^]*?)__/g, "$1<u>$2</u>")            // __underlined__
		.replace(/([^\\]|^)\*([^]*?[^\\])\*/g, "$1<i>$2</i>")       // *italic*
		.replace(/([^\\]|^)_([^]*?[^\\])_/g, "$1<i>$2</i>")         // _italic_
		.replace(/([^\\]|^)`([^]*?[^\\])`/g, "$1<kbd>$2</kbd>")     // `monospace`
		//.replace(/([^\\]|^)```([^]*?[^\\])```/g, "$1<kbd>$2</kbd>")   // `monospace`
		.replace(/([^\\]|^)~~([^]*?[^\\])~~/g, "$1<s>$2</s>")       // ~~strikethrough~~
		.replace(/([^\\]|^)@(([^\/\n<>, ]+\/)*([a-z]+?))\b/gi, '$1<a href="$2.htm" data-ajax="false">$4</a>') // @DocReference
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
function d(v) { console.log(v); return v; }
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
	%p: popup  list [defPopup] % ( id, text )
					[txtPopup] % ( id, text )
					[appPopup] % ( desc, type )
*/

// html templates
var		// subfunctions
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
		// subfunctions list
	subfHead = `<p><br>The following methods are available on the <b>%t</b> object:</p>\n\n%f`,

		// deprecated note
	deprecatedHint = "<div class='deprHint'><b>Note: This function is deprecated.%s</b></div>";
		// premium note
	premiumHint = "<div class='premHint'><b>Note: This function is a premium feature. Please consider subscribing to Premium to use this feature and support DroidScript in its further development.</b></div>";
		// xfeature note
	xfeatureHint = "<div class='xfeatHint'><b>ATTENTION: This function is available in the DS X-Versions only as it doesn't meet the GooglePlay security requirements. APKs built with X-Versions are for private use only.</b></div>";
		// example snippets
	sampBase = `
		<div data-role="collapsible" data-collapsed="true" data-mini="true" data-theme="a" data-content-theme="a">
			<h3>Example - %t</h3>
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
	<link rel="stylesheet" id="themeJQ" href="css/themes/default/theme-default.min.css"/>
	<link rel="stylesheet" href="css/themes/default/jquery.mobile.structure-1.2.0.min.css"/>
	<link rel="stylesheet" id="themePrism" href="css/themes/prism/default.min.css"/>
	<link rel="stylesheet" id="themeDocs" href="css/docs-default.min.css"/>

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
		<br>
	</div>

	%p
</div>
</body>

</html>\n`,

	introBase = `
<!DOCTYPE html>
<html>

${getHead(1)}

<body>

<div data-role="page" data-theme="a" >

	<div data-role="header">
		<a href='#' class='ui-btn-left' data-icon='arrow-l' onclick="history.back(); return false">Back</a>
		<h1>%t</h1>
		<a class="ui-btn-right" data-icon="gear" data-iconpos="notext" onclick="setTheme(getTheme() == 'default' ? 'dark' : 'default')"></a>
	</div><!-- /header -->

	<div data-role="content">
		%c
	</div><!-- /content -->
	%p
</div><!-- /page -->

</body>
</html>`;

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
		"?"  :"",
		"all":"",
		"bin":"",
		"dso":"",
		"fnc":"",
		"lst":"",

		"lst_obj":"of objects",
		/*"mul":"", // multiple separated with ||*/

		"num":"",
		"num_byt":"Bytes",
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

		"str":"",
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
	regHide = /^(_.*|(Create|Install)Wallpaper|Create(Object|ListView|NxtRemote|SmartWatch)|GetLast.*|(Set|Is)DebugEnabled|Odroid|Draw|Destroy|Release|Explode|Detailed|IsEngine|SetOn(Touch|Connect)Ex|data|id|S?Obj|ctx\.(un)?loadTexture)$/,
		// interpret matching app. functions as control constructors
	regControl = /^(Create(?!Debug).*|OpenDatabase|Odroid)$/,
		// html char placeholders
	_htm = {comma:',', colon:':', bsol:'\\', period:'.', lowbar:'_', verbar: '|', "#160":"\xa0", nbsp:"\xa0"},
		// defined in OnStart or later
	functions, basefuncs, categories,
		// current language
	lang = "en",
		// cwd
	path = __dirname + "/";


function getl(l) { if(l == undefined) l = lang; return l == "en" ? "" : "-" + l; }
function keys(o) { var arr = []; for(var i in o) arr.push(i); return arr; }
function values(o) { var arr = [], i; for(i in o) arr.push(o[i]); return arr; }
function l(s) { console.log(`-----${s}-----`); return s; }
function hidden(name) { return name.match(regHide); }
function nothidden(name) { return !hidden(name); }
function has(l, v) { return l.indexOf(v) > -1; }
function crop(n, min, max) { return n < min? min : max != undefined && n > max ? max : n; }
function saveOldfuncs() { app.WriteFile(path + "oldfuncs" + getl() + ".json", tos(oldfuncs)); }
function saveFunctions() { app.WriteFile(path + "functions" + getl() + ".json", tos(functions)); }
function saveControlArgs() { app.WriteFile(path + "controlArgs.json", tos(controlArgs)); }
function sortAsc(a, b) {
	a = a.toString().replace(/[^a-z0-9]/gi, "") || a + "";
	b = b.toString().replace(/[^a-z0-9]/gi, "") || b + "";
	var la = a.toLowerCase(), lb = b.toLowerCase();
	return la == lb ? a < b ? 1 : -1 : la > lb ? 1 : -1;
}

function isControl(name) {
	return (name.match(regControl)) && (app[name] ?
		has(app[name].toString(), "return") :
		!!functions[name].subf);  //! for debug, :false
}

function ReadFile(path, dflt, write) {
	if(app.FileExists(path)) return app.ReadFile(path);
	else if(write) app.WriteFile(path, dflt);
	return dflt;
}

	// converts a variable to indented string
	// supports Boolean, Number, String, Array and Object
function tos(o, intd, m) {
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

function saveCategories() {
	// save categories object
	var all = categories.All;
	delete categories.All;
	app.WriteFile(path + "categories" + getl() + ".json", tos(categories));
	categories.All = all;
}


// ---------------------------- nodejs app wrapper -----------------------------


function OnStart() {

	functions = JSON.parse(ReadFile(path + `functions${getl()}.json`, "{}", true));
	basefuncs = JSON.parse(ReadFile(path + `basefuncs${getl()}.json`, "{}", true));
	categories = JSON.parse(ReadFile(path + `categories${getl()}.json`, "{}", true));

	categories.All = [];
	categories.All = keys(functions);

	if(app.FileExists("app.js"))
		basefuncs.all = app.ReadFile("app.js").split("/*#obj*/ this.").slice(1).map(v => v.slice(0, v.indexOf(" ")))
	else
		basefuncs.all = Object.keys(basefuncs).map(k => basefuncs[k].name);

	if(app.FileExists("util.js"))
		basefuncs.all.concat(app.ReadFile("util.js").split("Obj.prototype.").slice(1).map(v => v.slice(0, v.indexOf(" "))))

	try {
		if(process.argv.length > 2)
			process.argv.slice(2).forEach((n) => generateDoc(n));
		else generateDocs();
	} catch(e) {
		console.error( /*\x1b[31m*/ `while generating "${curDoc}": ${curSubf||""}` );
		throw e;
	}

	var v = 1000 * (Date.now() / 864e5 | 0);
	var vn = Number(app.ReadFile("../docs/version.txt", 0)) % 1000 + 1;
	app.WriteFile("version.txt", v + vn);
}

var fs = require("fs");
var rimraf = require("rimraf");
var Prism = require('prismjs');


if(typeof app == "undefined")
	var app = {
		ReadFile: (p) => fs.readFileSync(p, "utf8"),
		WriteFile: fs.writeFileSync,
		DeleteFile: fs.unlinkSync,
		ListFolder: fs.readdirSync,
		MakeFolder: fs.mkdirSync,
		DeleteFolder: rimraf.sync,
		FileExists: fs.existsSync,
		FolderExists: fs.existsSync,
		SetDebug: () => 0,
		ShowProgressBar: (t) => console.log(t + "\n"),
		UpdateProgressBar: (i,t) => console.log("\033[1A\033[K" + `${i}% ${t}`),
		HideProgressBar: () => console.log("\033[1A\033[K100% done."),
		ShowPopup: console.log
	}

OnStart();

