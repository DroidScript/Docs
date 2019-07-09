
	//generates all doc files
function generateDocs() {
	app.ShowProgressBar( "Generating files..." );

	// saveCategories();
	// saveFunctions();

	app.SetDebug("console");
	generateNavigators();
	app.UpdateProgressBar( 0 );
	
	if(!app.FolderExists(path + `docs${getl()}/app`))
		app.MakeFolder(path + `docs${getl()}/app`);
	
	// missing: check samples
	//var lastfuncs = JSON.parse(ReadFile(path + `lastfuncs${getl()}.json`, "{}"));
	var i, last = -1, tchd = false, info = { app: {} };
	var lst = keys( functions )
		.filter(nothidden)
		/*.filter((f) => 
			JSON.stringify(functions[f]) != JSON.stringify(lastfuncs[f]) ||
			keys(functions[f].subs).filter(hidden).length);*/

	for( i = 0; i < lst.length; i++ ) {
		generateDoc( lst[i] );

		if( isControl(lst[i]) ) {
			var tctrl = {}, tsubf = functions[lst[i]].subf;
			info[functions[lst[i]].abbrev] = tctrl;

			for( var j in tsubf ) {
				if(hidden(j)) continue;
				if(typeof(tsubf[j]) == "string" && tsubf[j].startsWith("#")) {
					if(!basefuncs[tsubf[j]]) throw `basefunc ${tsubf[j]} not found!`;
					tctrl[j] = basefuncs[tsubf[j]].shortDesc;
				} else tctrl[j] = tsubf[j].shortDesc;
			}
		}
		info.app[lst[i]] = functions[lst[i]].shortDesc;
		
		last = Math.floor( 100 * i / lst.length )
		app.UpdateProgressBar( last, lst[i] );
	}

	app.SetDebug(true);
	if( tchd ) {
		saveFunctions();
		tchd = false;
	}
	
	//app.WriteFile( path + `lastfuncs${getl()}.json`, tos(functions) );
	app.WriteFile( path + "info.json", tos( info ) );
	
	//delete lastfuncs;
	delete info;
	
	app.HideProgressBar();
	app.ShowPopup( "Generated" );
}

function generateNavigators() {
	var i, j, list, f, categ, nav = '';

	// generate html category lists
	keys( categories )
		.filter(nothidden)
		.sort( sortAsc )
		.forEach(function(cat, i, l) {
		
			nav += newNaviItem(cat + ".htm", cat );
			list = categories[cat]
				.sort( sortAsc )
				.filter(nothidden)
				.map((func) => newNaviItem(`app/${func}.htm`, func))  // ?cat=" + cat
				.join("");
	
			/*
			var navs = {cat: [
					l[(i + l.length - 1) % l.length] + ".htm",
					l[(i + 1) % l.length] + ".htm"
				]};*/
			
			// generate category list html file
			app.WriteFile( path + `docs${getl()}/${cat}.htm`,
				(categories[cat].length < 20? naviBase :
					naviBase.replace( 'data-filter="false"', 'data-filter="true"' ))
				.replace( "%l", list )
				.replace( /%t/g, cat )
				// .replace( "%n", JSON.stringify(navs) )
			);
		});
		
	app.WriteFile( 
		path + "docs" + getl() + "/Categories.htm", 
		naviBase
			.replace( "%l", nav )
			.replace( /%t/g, "Categories" )
	);
}

// generates one document by function name
function generateDoc( name ) {
	
	//try {
		// reset globals
			// it still exists because it was necessary to do it this way in python
			// and I haven't changed it during the translation
		Globals = {
			popDefs: [],
			useEventPop: false,
			saveHref:    false,
			spop: {str:0, num:0, lst:0, obj:0, fnc:0, dsc:0, mul:0, std:0}
		};

		/* find next documents by categories
		var navs = {};
		keys(categories).forEach(function(c, i, l) {
			l = categories[c].sort( sortAsc ).filter(nothidden);
			if((i = l.indexOf(name)) != -1) {
				navs[c] = [
					l[(i + l.length - 1) % l.length] + ".htm", 
					l[(i + 1) % l.length] + ".htm"
				];
			}
		});*/
		
		//get an object with the html-converted data
		var data = getDocData(functions[name]),
			//insert everything into the doc base string
			html = htmlBase
				// subfunctions
				.replace(/%b/g, isControl(name) ? subfHead
					.replace(/%t/g, name.slice(6))
					.replace("%f", data.mets) : ""
				)
				// description
				.replace("%d", getDesc(name)
					.replace("%s", (
						functions[name].abbrev ? functions[name].abbrev + " = " : "") +
						`app.${name}(${data.args})` + data.ret)
					.replace(/(<\/div>\n\n\t*<p><br>)<br>/, "$1")
				)
				// popup object list
				.replace(/%p/, Globals.popDefs.join(""))
				// title occurances
				.replace(/%t/g, name)
				// remove empty <p> tags
				.replace(/\n?\t*<p><\/p>/g, "")      
				// remove leading whitespace in <p> tag
				.replace(/<p>(<br>\s+)+/g, "<p>");   
				// add navigator target object
				//.replace(/%n/, JSON.stringify(navs)) 

		//save doc file
		app.WriteFile( path + `docs${getl()}/app/${name}.htm` , html );
	//} catch(e) { app.Alert( e, "while generating " + name + ".htm:", "", 255 ); }
}

// converts a function object into an html snippets object
function getDocData( f, useAppPop ) {

	//needed for popups in popups
	if( useAppPop == undefined )
		useAppPop = false;

	// default descriptions and capitalizing
	if( !f.shortDesc ) {
		f.shortDesc = f.name;
		tchd = true;
	}
	f.shortDesc = f.shortDesc.trim();
	f.shortDesc = f.shortDesc.charAt(0).toUpperCase() + f.shortDesc.slice(1);

	if( !f.desc ) {
		f.desc = f.shortDesc;
		tchd = true;
	}
	f.desc = f.desc.trim();
	f.desc = f.desc.charAt(0).toUpperCase() + f.desc.slice(1);

	if( isControl(f.name) ) {
		if( !f.abbrev ) {
			f.abbrev = getAbbrev( f.name );
			tchd = true;
		}
	}

	var i, mArgs = [], type, fretval = "";

	// convert constructor line
	for( i in f.pNames ) {
		if( f.pNames[i] == "event" ) {
			Globals.useEventPop = true;
			mArgs.push(
				`<a pop="${Globals.saveHref}" href="" onclick='$( this.getAttribute( "pop" ) ).bind( {popupafterclose:function(){$( "#pop_std_evt" ).popup( "open", {"transition":"pop"} )}} );$( this.getAttribute( "pop" ) ).popup( "close" )'>event</a>`
			);
		} else if( useAppPop ) {
			mArgs.push(
				newAppPopup( typeDesc( f.pTypes[i] ), f.pNames[i] )
				.replace( /<\/?b>/g, "")
			);
		} else {
			mArgs.push(toArgPop( f.pNames[i], f.pTypes[i]));
		}
	}

	mArgs = mArgs.length? ` ${mArgs.join(", ")} ` : "";

	// convert return value
	if( f.retval )
		fretval = " → " + typeDesc( f.retval, true );

	// return data if there are no subfunctions
	if( !f.subf || !keys( f.subf ).length )
		return useAppPop ?
			{ args: mArgs, ret: fretval } :
			{ args: mArgs, ret: fretval, mets: "" }

	var k, methods = "",
		// function list
		mkeys = keys( f.subf ).filter(nothidden).sort();

	for( k = 0; k < mkeys.length; k++ ) {
		var met = f.subf[mkeys[k]], retval = "", type;
		
		// load base func
		if(typeof(met) == "string" && met.startsWith("#")) {
			if(!basefuncs[met]) throw "basefunc " + met + " not found!";
			met = basefuncs[met];
		}

		if(!met.isfunc || hidden(met.name)) continue;
		
		//add shortDesc entry if missing
		if( met.shortDesc == undefined ) {
			functions[f.name].subf[met.name].shortDesc = "";
			met.shortDesc = "";
			tchd = true;
		}

		// special popup for OnTouch-event-object
		if( met.pNames.length == 1 && met.pTypes[0].constructor.name == "Object" &&
			met.pTypes[0].pNames.length == 1 && met.pTypes[0].pNames[0] == "event" )
			Globals.saveHref = true;

		//convert return value
		if( met.retval )
			retval = " → " + typeDesc( met.retval );

		//convert function types
		if( met.isfunc ) {
			var args = [], type, pop;
			for( i in met.pNames )
				args.push( toArgPop( met.pNames[i], met.pTypes[i] ) );
			
			pop = descPopup( met.name, replW( met.desc) );
			tryAddType( pop.fnc );
			
			methods += subfBase.replace( "%s", pop.txt + ( args.length ? 
				`( ${args.join(", ")} )` : "()" ) + retval );
		} /* else { //convert other types
			var pop = descPopup( met.name, replW( met.desc ) );
			tryAddType( pop.fnc );
			methods += subfBase.replace( "%s", pop.txt + retval );
		} */
	}

	if( Globals.useEventPop ) tryAddType( eventPop );

	return { args : mArgs, mets : methods, ret : fretval }
}

// returns an html formatted description of a function
function getDesc(name) {
	var desc = functions[name].desc.trim();
	var samples = getSamples(name);
	if( desc.indexOf(".") == -1 ) desc += ".";
	
	return "<p>" + addMarkdown(replW( desc ))
		// exclude <h> tags from <p>
		.replace(
			/(<\/?p>)?(\s|<br>)*(<(h\d?)>.*?<\/\4>)(\s|<br>)*(<\/?p>)?/g, 
			"</p>\n\t\t\t$3\n\t\t\t<p>")
		// replace %c with constructor if existent, otherwise insert after first dot
		.replace(
			/((?=.*%c)\.?(\s|<br>)*%c|(?!.*%c)\.)(\s|<br>|$)+/,
			`.</p>\n${funcBase}\t\t\t<p>`)
		// replace <js> and <bash> tags with sample
		.replace(
			/(\s|<br>)*<(js|bash)>([^]*?)<\/\2>(\s|<br>)*/g,
			`</p>\n${funcBase.replace("%s", "$3")}\t\t\t<p>`)
		.replace(/\s*<br>\s*/g, "<br>\n\t\t\t")
		// expandable samples (per <sample name> tag or add to desc)
		.replace(/(\s|<br>)*<sample (.*?)>/g, (m, _, n) => 
			(s = samples[n] || Throw(`sample ${n} not found for ${name}`),
				delete samples[n], `</p>\n\t\t\t${s}<p>`) // <- actual returned value
		) + "</p>" + values(samples).concat("").reduce((a, b) => a + b);
}

// read and return html converted example snippets file
function getSamples( name ) {
	var i, s, samples = {}, samp = ReadFile( path + `samples/${name}.txt`, " " );

	// replace special html characters and convert to list
	samp = samp
		.replace( /\&/g, "&amp;" )
		.replace( /\</g, "&lt;" )
		.replace( /\>/g, "&gt;" )
		.replace( /\"/g, "&quot;" )
		.split( "&lt;/sample&gt;" )
		.slice( 0 , -1 );
	
	// convert samples to required html format
	for( var i in samp ) {
		s = samp[i].trim();
		var p = s.indexOf( "&gt;" ),
			title = s.slice( 11, p );
		samples[title] = toHtmlSamp( s.slice( p + 4 ), title, i );
	}
	return samples;
}

// convert a sample to html code
function toHtmlSamp( c, t, n ) {
	c = c.trim()
		.replace( /\t/g, "    " )
		.replace( /    /g, "&#160;&#160;&#160;&#160;" )
		.replace( /\n/g, "<br>\n\t\t\t\t" );
	
	return sampBase
		.replace( "%b", c
		.replace( "&lt;b&gt;", "<b id = \"snip%i\"  style = \"font-size:100%\">" ) )
		.replace( "&lt;/b&gt;", "</b>" )
		.replace( /%i/g, n )
		.replace( /%t/g, t )
}

// returns a description popup object
function descPopup( text, ptext ) {
	var o = {
		fnc: newDefPopup(
			"dsc_" + incpop( "dsc", 1 ),
			addMarkdown(replaceTypes(ptext, 1))),
		txt: newTxtPopup( "dsc_" + incpop( "dsc" ), text )
	}
	return o;
}

// returns a formatted description of a type - used for subfunction return values
function typeDesc( types, isDSO ) {
	types = types
		.split("||")
		.map((type, i) => [type.slice(0,3)]
			.concat(type.replace("-", '\x01').split('\x01'))
		);

	var last = "</b>";
	var s = types.map(
		(type, i) => typenames[type[0]] ?
			"<b>" + typenames[type[0]] + (hrefs[type[1]] ? 
				(last = "</i>", ":</b> <i>" + hrefs[type[1]]) : 
				(last = "", type[2] ? ":</b>" : "</b>")
			) + (type[2] ? last + " " : last) :
			undefined
	);
	
	return types.map(function(type, i) {
		if( s[i] && type.length == 3 ) {
				//allow limited values for parameters
			switch( type[0] ) {
				case "num": return s[i] + rplop( type[2] );
				case "str": return s[i] + rplop( type[2], true );
				case "lst":
				case "obj": return s[i] + replaceTypes( type[2], false );
				default: throw "unknown type " + type[1];
			}
		} else {
			if(s[i] == undefined) {
				if(isDSO) return "<b>app object:</b> " + type[1];
				else throw "unknown type " + type[1];
			}
			return s[i];
		}
	}).join("\n");
}

	//nearly equal to typeDesc, but returns an app.popup for arguments
function toArgPop( name, types ) {

	// function callbacks
	if( typeof types == "object" ) {
		incpop( "fnc", 1 );

		tryAddType(newDefPopup(
			"fnc_" + incpop( "fnc" ),
			"<b>function</b>(" + types.pNames.map(
				(n, i) => toArgAppPop(n, types.pTypes[i])
			).join(", ") + ")" )
		);

		if( Globals.saveHref ) Globals.saveHref = "#pop_fnc_" + incpop( "fnc" );
		return newTxtPopup( "fnc_" + incpop( "fnc" ), name );
	}

	// multiple types
	types = types.split("||").map(
		(type) => [type.slice(0,3)].concat(
			type.replace("-", '\x01').split('\x01')
		)
	);

	// start of type desc string. [optional], [:] if followed by value
	// <b>type[:]</b> [[<i>desc[:]</i>] values]
	var last = "</b>";
	var s = types.map(
		(type, i) => "<b>" + typenames[type[0]] +
			(hrefs[type[1]] ? 
				(last = "</i>", ":</b> <i>" + hrefs[type[1]]) : 
				(last = "", type[2] ? ":</b>" : "</b>")
			) + (type[2] ? last + " " : last)
		);
	
	// add formatted possible values
	var str = types.map(function(type, i) {
		if( type.length == 3 ) {
			switch( type[0] ) {
				case "num":
				case "str":
					s[i] += rplop( type[2], type[0] == "str" );
					if( ["options", "mode"].indexOf(name) > -1 && type.length == 3 && type[2].indexOf(":") > -1)
						s[i] = s[i].replace(/“(\w+):([^”]*)/g, "“" + newAppPopup("$2", "$1"))
					return s[i]; break;
				case "lst":
				case "obj": return s[i] + replW( replaceTypes( type[2], true )); break;
				default: throw "unknown type " + type[1];
			}
		} else return s[i];
	});

	// build popup id, "std_type" for common or "type_index" for individual popups
	// save popup definition and return popup text (= link)
	if(types.length == 1) {
		types = types[0];
		var pop = 
			(types[1].match("_") || types[2] ? "" : "std_") +
			(!types[2] ? types[1].replace("?","ukn") :
				types[0] + "_" + incpop( types[0], 1 )
			);
		tryAddType(newDefPopup( pop, str[0]));
		return newTxtPopup( pop, name );
		
	} else {
		// for values with multiple types
		tryAddType( newDefPopup(
			"mul_" + incpop( "mul", 1 ),
			str.join("<br>")));
		return newTxtPopup( "mul_" + incpop( "mul" ), name );
	}
}

function toArgAppPop( name, types ) {
	types = types.split("||")
		.map((type) => [type.slice(0,3)]
			.concat(type.replace("-", '\x01')
			.split('\x01'))
		);
	
	return newAppPopup(
		types.map(
			(type) => typenames[type[0]] +
				(hrefs[type[1]] ? ": " + hrefs[type[1]] : "") +
				(type.length == 3 ? ": " + rplop(type[2], type[0] == "str") : "")
			).join("\n"),
		name
	);
}

//adds a type to the type popup list if it doesnt exist yet
function tryAddType( typelst ) {
	var tlst = typelst.split( "\n" )
	for( i = 0; i < tlst.length; i++ ) {
		if( !tlst[i] ) continue;
		if( Globals.popDefs.indexOf( tlst[i] + "\n" ) == -1 )
			Globals.popDefs.push( tlst[i] + "\n" );
	}
}

//replace whitespace with html syntax whitespace
function replW( s, n ) {
	if( n == undefined ) n = true;
	return s
		.replace( /\\\/\\\//g, "#" )
		.replace( /\n/g, n ? "<br>" : "\n" )
		.replace( /\t/g, "  " )
		.replace( /  /g, "&#160;&#160;" );
}

//increase special popup counters and returns its id
function incpop( type, i ) {
	if( i ) Globals.spop[type] += i;
	return hex(Globals.spop[type]);
}

function replaceTypes(s, useAppPop) {
	return s.replace(RegExp(
		"(\\b[\\w_]+)\\s*:\\s*(\\b[a-z]{3}(_[a-z]{3})?\\b)((\s*\\s[}\\]])|\\s*)?", "g"),
		function(m, name, type, _, close) {
			if(useAppPop) {
				return newAppPopup(
					typenames[type.slice(0, 3)] +
						(hrefs[type] ? ": " + hrefs[type] : "") +
						(close || ""),
					name
				)
			} else {
				return toArgPop(name, type) + (close || "")
			}
		}
	);
}

// convert markdown symbols to html
function addMarkdown(s) {
	return s
		// links
		.replace(/([^\\]|^)\[(.*?)\]\((.*?)\)/g, function(match, white, url, name) {
			// exists in docs folder? direct link : open in external app
			return white + (app.FileExists(`docs/app/${url}`) ? 
				`<a href="${url}">` :
				`<a href="#" onclick="(isAndroid?app.OpenUrl:window.open)(\'${url}\');">`)
				+ `${name}</a>`;
			}
		)
		.replace(/([^\\]|^)\*\*([^]*?[^\\])\*\*/g, "$1<b>$2</b>")   // **bold**
		.replace(/([^\\]|^)__([^]*?)__/g, "$1<u>$2</u>")            // __underlined__
		.replace(/([^\\]|^)\*([^]*?[^\\])\*/g, "$1<i>$2</i>")       // *italic*
		.replace(/([^\\]|^)_([^]*?[^\\])_/g, "$1<i>$2</i>")         // _italic_
		.replace(/([^\\]|^)\`([^]*?[^\\])\`/g, "$1<kbd>$2</kbd>")   // `monospace`
		.replace(/([^\\]|^)~~([^]*?[^\\])~~/g, "$1<s>$2</s>")       // ~~strikethrough~~
		.replace(/([^\\]|^)@([a-z]+?)\b/gi, '$1<a href="$2.htm">$2</a>') // @DocReference
		.replace(/\\([_*~@])/g, "$1");                              // consume \ escaped markdown
}
	// convert int to 3-digit hex
function hex(v) { return ("00" + v.toString(16)).replace(/^0+(...)/, "$1"); }
	//returns the type name or description of a value or the value itself
function getv( v ) { return hrefs[v] || typenames[v] || v; }
	//returns a comma separated list of object keys
function skeys( o ) { return "" + keys( o ); }
	//replaces \ paceholders with its placeholder 'name'
function reprs( s ) { return s.replace( /\n/g, "\\n" ).replace( /\t/g, "\\t" ); }
	//replace "&" and "|" operators with "and" and "or"
function rplop( s, n ) {
	return replW( (n? '“' + s + '”' : s)
		.replace( /\|/g, n? '” or “' : " or " )
		.replace( /\&|,/g, n? '”, “' : ", " )
	);
}
function Throw(err) {
	throw err;
}
function newNaviItem(link, text) { 
	return naviItem.replace("%s", link).replace("%s", text);
}
function newDefPopup(  id, text) {
	return defPopup.replace("%s",   id).replace("%s", text);
}
function newTxtPopup(  id, text) { 
	return txtPopup.replace("%s",   id).replace("%s", text);
}
function newAppPopup(desc, type) { 
	return appPopup.replace("%s", desc).replace("%s", type);
}
function dbg(v){ console.log(v); return v; }

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
var 	//navigator list item
	naviItem = '\n\t\t\t\t<li><a href="%s">%s</a></li>',
		// constructor and inline examples
	funcBase = '\n\t\t\t<div class="samp">\n\t\t\t%s\n\t\t\t</div>\n\n',
		// subfunctions
	subfBase = '\t\t\t<div class="samp">%s</div>\n',
		//jquery-popup link tag
	txtPopup = '<a href="#pop_%s" data-transition="pop" data-rel="popup">%s</a>',
		//app-popup tag
	appPopup = '<a href="" onclick="prompt( \'#\', \'App.ShowPopup( %s\' )">%s</a>',
		//popup objct
	defPopup = '\t\t<div data-role="popup" id="pop_%s" class="ui-content">%s</div>\n',
		//subfunctions list
	subfHead = `<p><br>The following methods are available on the <b>%t</b> object:</p>\n\n%f`,
		//example snippets
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
			</div>\n\n\t\t\t`,
		//popup for the event object at OnTouch* callbacks
	eventPop = `
		<div data-role="popup" id="pop_std_evt" class="ui-content">
		{<br>
			&#160;&#160;&#160;&#160;source: <b>app object</b>,<br>
			&#160;&#160;&#160;&#160;action: <b>string:</b> "Down" or "Move" or "Up",<br>
			&#160;&#160;&#160;&#160;count: <b>number:</b> integer,<br>
			&#160;&#160;&#160;&#160;X: <b>number:</b> fraction of screen width,<br>
			&#160;&#160;&#160;&#160;Y: <b>number:</b> fraction of screen height,<br>
			&#160;&#160;&#160;&#160;x: <b>list:</b> [
				<a href="" onClick="prompt('#','App.ShowPopup(fraction of screen width')">x1</a>,
				<a href="" onClick="prompt('#','App.ShowPopup(fraction of screen width')">x2</a>,
				<a href="" onClick="prompt('#','App.ShowPopup(fraction of screen width')">x3</a>
			],<br>
			&#160;&#160;&#160;&#160;y: <b>list:</b> [
				<a href="" onClick="prompt('#','App.ShowPopup(fraction of screen height')">y1</a>,
				<a href="" onClick="prompt('#','App.ShowPopup(fraction of screen height')">y2</a>,
				<a href="" onClick="prompt('#','App.ShowPopup(fraction of screen height')">y3</a>
			]<br>
		}
		</div>`.replace(/[\n\t]+/g, "");
		
		//docs navigator list base
	naviBase = `
<!DOCTYPE html>
<html>

<head>
	<title>%t</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" id="themeJQ" href="css/themes/default/theme-default.min.css"/>
	<link rel="stylesheet" href="css/themes/default/jquery.mobile.structure-1.2.0.min.css"/>
	<link rel="stylesheet" id="themeDocs" href="css/docs-default.css"/>
	<script src="js/energize-min.js"></script>
	<script src="js/jquery-1.8.1.min.js"></script>
	<script src="../app.js"></script>
	<script src="js/common.js"></script>
	<script src="js/example.js"></script>
	<script src="js/jquery.mobile-1.2.0.min.js"></script>
</head>

<body>
	<div data-role="page" data-theme="a" data-ajax="false" data-add-back-btn="true">

		<div data-role="header" data-position="fixed">
			<a href="#" class="ui-btn-left" data-icon="arrow-l" onclick="history.back(); return false">Back</a>
			<h1>%t</h1>
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

<head>
	<title>%t</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" id="themeJQ" href="../css/themes/default/theme-default.min.css"/>
	<link rel="stylesheet" href="../css/themes/default/jquery.mobile.structure-1.2.0.min.css"/>
	<link rel="stylesheet" id="themeDocs" href="../css/docs-default.css"/>
	<script src="../js/energize-min.js"></script>
	<script src="../js/jquery-1.8.1.min.js"></script>
	<script src="../../app.js"></script>
	<script src="../js/common.js"></script>
	<script src="../js/example.js"></script>
	<script src="../js/jquery.mobile-1.2.0.min.js"></script>
</head>

<body>
	<div data-role="page" data-theme="a">

		<div data-role="header" data-position="fixed">
			<a href='#' class='ui-btn-left' data-icon='arrow-l' onclick="history.back(); return false">Back</a>
			<h1>%t</h1>
		</div>

		<div data-role="content">
			%d
			%b
			<br>
		</div>

%p
	</div>
</body>

</html>\n`;
