
	//global variables
var Globals,
	//bases for...
		//navigator list item
	naviItem = '\n\t\t\t\t<li><a href="%s">%s</a></li>',
		//constructor line and subfunctions
	funcBase = '\t\t\t\t<div class="samp">&#160;&#160;%s</div>\n',
		//jquery-popup link tag
	txtPopup = '<a href="#pop_%s" data-transition="pop" data-rel="popup">%s</a>',
		//app-popup tag
	appPopup = '<a href="" onClick="prompt( \'#\', \'App.ShowPopup( %s\' )">%s</a>',
		//popup objct
	defPopup = '\t\t<div data-role="popup" id="pop_%s" class="ui-content">%s</div>\n',
		//subfunctions list
	subfHead = '\n\t\t\t<br>\n\t\t\t<p>The following methods are avaiable on the <b>%t</b> object:</p>\n\n%f',
		//example snippets
	sampBase = '\n\t\t\t<div data-role="collapsible" data-collapsed="false" data-mini="true" data-theme="a" data-content-theme="b">\n\t\t\t\t<h3>Example - %t</h3>\n\t\t\t\t<div id="examp%n" style="font-size:70%"><br>\n\t\t\t\t\t%b<br>\n\t\t\t\t</div>\n\t\t\t\t<div name="divCopy" align="right">\n\t\t\t\t<a href="#" data-role="button" data-mini="true" data-inline="true" onclick="copy( snip%n )">&#160;&#160;&#160;&#160;Copy&#160;&#160;&#160;&#160;</a>\n\t\t\t\t<a href="#" data-role="button" data-mini="true" data-inline="true" onclick="copy( examp%n )">Copy All</a>\n\t\t\t\t<a href="#" data-role="button" data-mini="true" data-inline="true" onclick="demo( examp%n )">&#160;&#160;&#160;&#160;&#160;&#160;Run&#160;&#160;&#160;&#160;&#160;&#160;</a>\n\t\t\t\t</div>\n\t\t\t</div>\n',
		//popup for the event object at OnTouch* callbacks
	eventPop = '\t\t<div data-role="popup" id="pop_std_evt" class="ui-content">{<br>&#160;&#160;&#160;&#160;source: <b>app object</b>,<br>&#160;&#160;&#160;&#160;action: <b>string</b> - "Down" or "Move" or "Up",<br>&#160;&#160;&#160;&#160;count: <b>number</b> - integer,<br>&#160;&#160;&#160;&#160;X: <b>number</b> - fraction of screen width,<br>&#160;&#160;&#160;&#160;Y: <b>number</b> - fraction of screen height,<br>&#160;&#160;&#160;&#160;x: <b>list</b> - [ <a href="" onClick="prompt(\'#\',\'App.ShowPopup(fraction of screen width\')">x1</a>, <a href="" onClick="prompt(\'#\',\'App.ShowPopup(fraction of screen width\')">x2</a>, <a href="" onClick="prompt(\'#\',\'App.ShowPopup(fraction of screen width\')">x3</a> ],<br>&#160;&#160;&#160;&#160;y: <b>list</b> - [ <a href="" onClick="prompt(\'#\',\'App.ShowPopup(fraction of screen height\')">y1</a>, <a href="" onClick="prompt(\'#\',\'App.ShowPopup(fraction of screen height\')">y2</a>, <a href="" onClick="prompt(\'#\',\'App.ShowPopup(fraction of screen height\')">y3</a> ]<br>}</div>\n'
		//docs navigator list base
	naviBase = '\n<!DOCTYPE html>\n<html>\n\n<head>\n\t<title>%t</title>\n\t<meta charset="utf-8">\n\t<meta name="viewport" content="width=device-width, initial-scale=1">\n\t<link rel="stylesheet" href="css/themes/default/theme.min.css" />\n\t<link rel="stylesheet" href="css/themes/default/jquery.mobile.structure-1.2.0.min.css" />\n\t<script src="js/energize-min.js"></script>\n\t<script src="js/jquery-1.8.1.min.js"></script>\n\t<link rel="stylesheet" href="css/docs.css" />\n\t<script src="../app.js"></script>\n\t<script src="js/common.js"></script>\n\t<script src="js/jquery.mobile-1.2.0.min.js"></script>\n</head>\n\n<body>\n\n\t<div data-role="page" data-theme="a" data-ajax="false" data-add-back-btn="true">\n\t\n\t\t<div data-role="header" data-position="fixed" >\n\t\t\t<a href="#" class="ui-btn-left" data-icon="arrow-l" data-theme="c" onclick="history.back(); return false">Back</a>\n\t\t\t<h1>%t</h1>\n\t\t</div><!-- /header -->\n\t\n\t\t<div data-role="content">\n\t\t\t<ul data-role="listview" data-inset="true" data-filter="false">%l\n\t\t\t</ul>\n\t\t</div><!-- /content -->\n\t</div><!-- /page -->\n\n</body>\n</html>\n',
		//whole html document
	htmlBase = '\n<!DOCTYPE html>\n<html>\n\n<head>\n\t<title>%t</title>\n\t<meta charset="utf-8">\n\t<meta name="viewport" content="width=device-width, initial-scale=1">\n\t<link rel="stylesheet" href="../css/themes/default/theme.min.css" />\n\t<link rel="stylesheet" href="../css/themes/default/jquery.mobile.structure-1.2.0.min.css" />\n\t<script src="../js/energize-min.js"></script>\n\t<script src="../js/jquery-1.8.1.min.js"></script>\n\t<script src="../../app.js"></script>\n\t<script src="../js/common.js"></script>\n\t<script src="../js/example.js"></script>\n\t<link rel="stylesheet" href="../css/docs.css" />\n\t<script src="../js/jquery.mobile-1.2.0.min.js"></script>\n\t<style type="text/css"></style>\n</head>\n\n<body>\n\t<div data-role="page" data-theme="a">\n\n\t\t<div data-role="header" data-position="fixed">\n\t\t\t<a href=\'#\' class=\'ui-btn-left\' data-icon=\'arrow-l\' data-theme="c" onclick="history.back(); return false">Back</a>\n\t\t\t<h1>%t</h1>\n\t\t</div>\n\n\t\t<div data-role="content">\n\t\t\t<p>%d</p>\n\n\t\t\t<div class="samp">%c</div>\n\n\t\t\t%s%b\n\t\t\t<br>\n\t\t</div>\n\n%p\n\t</div>\n</body>\n\n</html>\n',
		//functions which are often required as subfunction
	consts = {
		"id": "id: str-//id //object id",
		"Gone()": 'Gone() //Set visibility "Gone"',
		"Hide()": 'Hide() //Set visibility "Hide"',
		"Show()": 'Show() //Set visibility "Show"',
		"Focus()": "Focus() //??",
		"Release()": "Release() //??",
		"Explode()": "Explode() //destroys object with explode animation and sound",
		"Destroy()": "Destroy() //destroys object",
		"IsVisible()": "IsVisible() -> bin //returns a boolean wether the object is visible or not",
		"IsEnabled()": "IsEnabled() -> bin //returns a boolean wether the object is enabled or not",
		"ClearFocus()": "ClearFocus() //??",
		"GetAbsWidth()": "GetAbsWidth() -> num_int //get width in pixels",
		"GetAbsHeight()": "GetAbsHeight() -> num_int //get height in pixels",
		"GetVisibility()": "GetVisibility() -> str-Show|Hide|Gone //returns the current visibility state",
		"SetScale( x, y )": "SetScale( x, y ) ( num_fac, num_fac ) //scales the object in x and y direction",
		"GetTop( options )": "GetTop( options ) ( ? ) -> num_srh //get distance to upper parent border",
		"GetLeft( options )": "GetLeft( options ) ( ? ) -> num_srw //get distance to left parent border",
		"GetWidth( options )": "GetWidth( options ) ( ? ) -> num_srw //get screen relative width",
		"GetHeight( options )": "GetHeight( options ) ( ? ) -> num_srh //get screen relative height",
		"SetEnabled( enable )": "SetEnabled( enable ) ( bin ) //en/disable object",
		"SetVisibility( mode )": "SetVisibility( mode ) ( str-Show|Hide|Gone ) //change visibility mode",
		"GetPosition( options )": "GetPosition( options ) ( ? ) -> obj-{ left: num_prw, top: num_prh, right: num_prw, bottom: num_prh }",
		"SetBackColor( colour )": "SetBackColor( col ) ( str_col ) //changes the background color",
		"SetBackground( file, options )": "SetBackground( file, options ) ( str_pth, ? )  //changes the background image",
		"SetColorFilter( colour, mode )": "SetColorFilter( colour, mode ) ( str_col, str-Add|Multiply|? ) //adjust color",
		"SetSize( width, height, options )": "SetSize( width, height, options ) ( num_srw, num_srh, ? ) //change object size",
		"SetBackColor( col1, col2, col3, options )": "SetBackColor( col1, col2, col3, options ) ( str_col, str_col, str_col, ? ) //set solid back colour",
		"SetMargins( left, top, right, bottom, mode )": "SetMargins( left, top, right, bottom, mode ) ( num_srw, num_srh, num_srw, num_srh, ? ) //move object from current position",
		"SetPadding( left, top, right, bottom, mode )": "SetPadding( left, top, right, bottom, mode ) ( num_srw, num_srh, num_srw, num_srh, ? ) //set surrounding borders",
		"SetPosition( left, top, width, height, options )": "SetPosition( left, top, width, height, options ) ( num_srw, num_srh, num_srw, num_srh, ? ) //changes the position of the object on absolute layouts",
		"AdjustColor( hue, saturation, brightness, contrast )": "AdjustColor( hue, saturation, brightness, contrast ) ( num, num, num, num ) //set color effects",
		"Tween( target, duration, type, repeat, yoyo, callback )": "Tween( target, duration, type, repeat, yoyo, callback ) ( ?, ?, ?, ?, ?, ? ) //??",
		"SetBackColorRadial( x, y, radius, col1, col2, col3, options )": "SetBackColorRadial( x, y, radius, col1, col2, col3, options ) ( num_srw, num_srh, num_srw, str_col, str_col, str_col, ? ) //define circle gradial back colour"
	},
		//available typenames
	typenames = {
		"?":"unknown",
		"all":"all types",
		"bin":"boolean",
		"dso":"app object",
		"fnc":"function",
		"lst":"list",
		"num":"number",
		"obj":"object",
		"str":"string"
	},
		//special types and descriptions
	hrefs = {
		"?"  :"",
		"all":"",
		"bin":"",
		"dso":"",
		"dso_glv":"app GLView image",
		"dso_img":"app image",
		"dso_lay":"app layout",
		"fnc":"",
		"lst":"",
		"num":"",
		"num_deg":"angle in degrees ( 0 - 360 )",
		"num_rad":"angle in radient ( 0 - 2*π )",
		"num_dhx":"0-255",
		"num_fac":"factor",
		"num_flt":"float",
		"num_hrz":"hertz",
		"num_int":"integer",
		"num_mls":"milliseconds",
		"num_orh":"fraction of object height",
		"num_orw":"fraction of object width",
		"num_srh":"fraction of screen height",
		"num_srw":"fraction of screen width",
		"num_prw":"fraction of parent width",
		"num_prh":"fraction of parent height",
		"num_prc":"percent",
		"num_pxl":"pixel",
		"num_sec":"seconds",
		"num_smtp":"<pre>      <u> server               SSL     TLS</u>\ngmail: smtp.gmail.com       465     578\nyahoo: smtp.mail.yahoo.com  465     578\ngmx  : mail.gmx.net         465     587</pre>".replace( /\n/g, "<br>" ).replace( /  /g, "&#160;&#160;" ),
		"num_imap":"<pre>      <u> server               SSL</u>\ngmail: imap.gmail.com       993\nyahoo: imap.mail.yahoo.com  993\ngmx  : imap.gmx.net         993</pre>".replace( /\n/g, "<br>" ).replace( /  /g, "&#160;&#160;" ),
		"str":"",
		"str_lst":"comma separated",
		"str_col":'<br>&nbsp;&nbsp;hexadecimal: "#rrggbb", "#aarrggbb"<br>&nbsp;&nbsp;colourName: "red", "green", ...',
		"str_fmt":"format",
		"str_htm":"html",
		"str_mod":"mode",
		"str_ort":'"Default", "Portrait", "Landscape"',
		"str_pth":'path to file or folder ( "/absolute/..." or "relative/..." )',
		"str_sql":"sql code",
		"str_sty":"style",
		"str_url":"url path"
	};

/* % placeholder descriptions in the html base strings
	%t: title name
	%d: description
	%c: constructor
	%s: sample code or anything else
	%b: method body [subfHead]
	%f: method list [funcBase]
	%p: popup  list [defPopup] % ( id, title, text )
					[txtPopup] % ( id, text )
					[appPopup] % ( desc, type )
*/

	//generates all doc files
function generateDocs() {
	app.ShowProgressBar( "Generating files..." );
	app.DeleteFolder( path + "docs" + getl() + "/app" );
	app.MakeFolder( path + "docs" + getl() + "/app" );
	generateNavigators();
	app.UpdateProgressBar( 0 );
	var i, last = -1, lst = Object.keys( functions );
	for( i = 0; i < lst.length; i++ ) {
		generateDoc( lst[i] );
		if( last != (last = Math.floor( 100*i/lst.length ) ) )
			app.UpdateProgressBar( last );
	}
	app.HideProgressBar();
	app.ShowPopup( "Generated" );
}

function generateNavigators() {
	var i, j, lstF, lstC = Object.keys( categories ).sort( sortAsc ), list, f, categ, nav = '';
	
	for( i in lstC ) {
		nav += naviItem.replace( "%s", lstC[i] + ".htm" ).replace( "%s", lstC[i] );
		list = "", lstF = Object.keys( categories[lstC[i]] ).sort( sortAsc );
		for( j in lstF )
			list += naviItem.replace( "%s", "app/" + categories[lstC[i]][lstF[j]] ).replace( "%s", lstF[j] );
		//data-filter="false"
		app.WriteFile( path + "docs" + getl() + "/" + lstC[i] + ".htm", Object.keys( categories[lstC[i]] ).length > 50?
			naviBase.replace( "%l", list ).replace( /%t/g, lstC[i] ).replace( 'data-filter="false"', 'data-filter="true"' ) :
			naviBase.replace( "%l", list ).replace( /%t/g, lstC[i] )
		)
	}
	app.WriteFile( path + "docs" + getl() + "/Categories.htm", naviBase.replace( "%l", nav ).replace( /%t/g, "Categories" ) );
}

	//generates one document by function name
function generateDoc( name ) {
	try {
			//reset globals
				//it still exists because it was necessary to do it this way in python
				//and I haven't changed it during the translation
		Globals = {"useEventPop":false, "saveHref":false, "spop":{"str":0, "num":0, "lst":0, "fnc":0, "dsc":0}};
			//get an object with the html-converted data
		var data = getDocData( functions[name] ),
				//insert everything into the doc base string
			html = htmlBase.replace( /%b/g, name.slice( 0, 6 ) == "Create"?
					subfHead.replace( /%t/g, name.slice( 6 ) ).replace( /%f/g, data.mets ) : ""
				).replace( /%c/g, "app." + name + "(" + data.args + ")" + data.ret
				).replace( /%d/g, replW( functions[name].desc.replace( "Create", "" ) )
				).replace( /%p/g, data.pops
				).replace( /%s/g, getSampleDivs( name )
				).replace( /%t/g, name
				).replace( /pop\_\?/g, "pop_std_ukn"
				);
			//save doc file
		app.WriteFile( path + "docs" + getl() + "/app/" + name + ".htm" , html );
	} catch(e) { app.Alert( e, "while generating " + name + ".htm:", "", 255 ); }
}

	//converts a function object into an html snippets object
function getDocData( f, useAppPop ) {
		//needed on popups in popups
	if( useAppPop == undefined )
		useAppPop = false;

	var i, types = [], mArgs = [], type, fretval = "";

		//adds a type to the types list if it doesnt exist yet
	var tryAddType = function( typelst ) {
		var tlst = typelst.split( "\n" )
		for( i = 0; i < tlst.length; i++ ) {
			if( !tlst[i] ) return;
			if( types.indexOf( tlst[i] + "\n" ) == -1 )
				types.push( tlst[i] + "\n" );
		}
	}

		//convert constructor line
	for( i in f.pNames )
		if( f.pNames[i] == "event" ) {
			Globals.useEventPop = true;
			mArgs.push(
				"<a pop = \"" + Globals.saveHref + '" href = "" onclick = \'$( this.getAttribute( "pop" ) ).bind( {popupafterclose:function(){$( "#pop_std_evt" ).popup( "open", {"transition":"pop"} )}} );$( this.getAttribute( "pop" ) ).popup( "close" )\'>event</a>'
			);
		} else if( useAppPop ) {
			mArgs.push( appPopup.replace( "%s", typeDesc( f.pTypes[i] ) )
				.replace( "%s", f.pNames[i] ).replace( "<b>", "" ).replace( "</b>", "" ) )
		} else {
			var pop = argToPop( f.pNames[i], f.pTypes[i] );
			mArgs.push( pop.txt );
			tryAddType( pop.fnc );
		}

	mArgs = mArgs.length? " " + mArgs.join( ", " ) + " " : "";

		//convert return value
	if( f.retval.length ) {
		var type = f.retval;
		type = skeys( consts ).indexOf( type + "\"" ) > -1 ? consts[type] : type;
		fretval = " -> " + typeDesc( type, true );
	}

		//return data if there are no subfunctions
	if( !Object.keys( f.subf ).length )
		if( useAppPop ) return { args : mArgs, ret : fretval }
		else return { args : mArgs, mets : "", pops : types.join( "" ), ret : fretval }

	var k, methods = "",
	//fuction list
		keys = Object.keys( f.subf ).sort();

	for( k = 0; k < keys.length; k++ ) {
		var met = f.subf[keys[k]], retval = "", type;

			//special popup for OnTouvh-event-object
		if( met.pNames.length == 1 && met.pTypes[0].constructor.name == "Object" &&
			met.pTypes[0].pNames.length == 1 && met.pTypes[0].pNames[0] == "event" )
			Globals.saveHref = true;

			//convert return value
		if( met.retval.length ) {
			var type = met.retval;
			type = ( skeys( consts ).indexOf( type + "\"" ) > -1 ) ? consts[type] : type;
			retval = " -> " + typeDesc( type );
		}

			//convert function types
		if( met.isfunc ) {
			var args = [], type, pop;
			for( i in met.pNames ) {
				type = met.pTypes[i];
				if( type.constructor.name != "Object" )
					type = ( skeys( consts ).indexOf( type + "\"" ) >= 0 ) ? consts[type] : type;
				pop = argToPop( met.pNames[i], type );
				args.push( pop.txt );
				tryAddType( pop.fnc );
			}
			pop = descPopup( met.name, replW( met.desc ) );
			tryAddType( pop.fnc );
			methods += funcBase.replace( "%s", pop.txt + ( args.length? "( " +
				args.join( ", " ) + " )" : "()" ) + retval );
		} else { //convert other types
			var pop = descPopup( met.name, replW( met.desc ) );
			tryAddType( pop.fnc );
			methods += funcBase.replace( "%s", pop.txt + retval );
		}
	}
	if( Globals.useEventPop )
		tryAddType( eventPop );
	return { args : mArgs, mets : methods, pops : types.join( "" ), ret : fretval }
}

	//read and return html converted example snippets file
function getSampleDivs( name ) {
	var i, s, samples = "", samp = app.ReadFile( path + "samples/" + name + ".txt" )
		.replace( /\&/g, "&amp;" ).replace( /\</g, "&lt;" ).replace( /\>/g, "&gt;" )
		.replace( /\"/g, "&quot;" ).split( "&lt;/sample&gt;" ).slice( 0 , -1 );

	for( i in samp ) {
		s = samp[i].trim();
		samples += toHtmlSamp( s.slice( s.indexOf( "\n" ) ), s.slice( 11, s.indexOf( "&gt;" ) ), i );
	}
	return samples;
}

	//convert a sample to html code
function toHtmlSamp( c, t, n ) {
	c = c.replace( /\t/g, "\t" ).replace( /\t/g, "&#160;&#160;&#160;&#160;" ).replace( /\n/g, "<br>\n\t\t\t\t" );
	return sampBase.replace( "%b", c.replace( "&lt;b&gt;", "<b id = \"snip%n\"  style = \"font-size:100%\">" ) )
		.replace( "&lt;/b&gt;", "</b>" ).replace( /%n/g, n ).replace( /%t/g, t )
}

	//returns a description popup object
function descPopup( text, ptext ) {
	return {
		fnc: defPopup.replace( "%s", "dsc_" + incpop( "dsc", 1 ) ).replace( "%s", ptext ),
		txt: txtPopup.replace( "%s", "dsc_" + incpop( "dsc" ) ).replace( "%s", text )
	}
}

	//returns a formatted description of a type - used for subfunction return values
function typeDesc( type, ignore ) {
	if( type.indexOf( "-" ) > -1 ) {
		var i, temp = type.indexOf( "-" );
		temp = [type.slice( 0, temp ), type.slice( temp + 1 )];
		type = temp[0];
			//allow limited values for parameters
		switch( type.slice( 0, 3 ) ) {
			case "str":
				return "<b>string</b> - \"" + rplop( temp[1].trim(), true ) + "\"";
			case "obj":
				var desc = replW( temp[1].trim() );
				for( var k in hrefs )
					if( k.length == 7 ) desc = desc.replace( RegExp( k, "g" ), hrefs[k] );
					//else if( len( k ) == 3: desc = desc.replace( RegExp( k, "g" ), typenames[k[:3]] )
				return "<b>object</b> - " + desc;
			case "num":
				var add = rplop( temp[1].trim() );
				return "<b>" + typenames[type.slice( 0, 3 )] + "</b>" + ( add.length? " - " + add : "" );
			case "lst":
				var t = temp[1].trim().slice( 1, -1 ).split( "][" ),
					names = t[0].split( "," );
					if( t.length == 1 )
						return "<b>" + typenames[type.slice( 0, 3 )] + "</b> - [ " + names.join( ", " ) + " ]";

				var types = t[1].split( "," );
					popups = [], i;
				for( i in names )
					popups.push( appPopup.replace( "%s", hrefs[types[i]] ).replace( "%s", names[i] ) )
				return "<b>" + typenames[type.slice( 0, 3 )] + "</b> - [ " + popups.join( ", " ) + " ]"
			default: error( "unknown type " + temp );
		}
	} else { //no "-" in type
		var stype = typenames[type.slice( 0, 3 )];
		if( stype == undefined )
			if( ignore ) return "<b>app object</b> - " + type;
			else error( "invalid type: " + type );
		var add = type.split( "|" ).map( function( n ) {return hrefs[n]} ).join( " or " );
		return "<b>" + stype + "</b>" + ( add.length? " - " + add : "" );
	}
}

	//nearly equal to toTypeDesc, but returns a popup for arguments
function argToPop( name, type ) {
	if( type.constructor.name == "Object" ) {
		incpop( "fnc", 1 );
		if( Globals.saveHref == true ) Globals.saveHref = "#pop_fnc_" + incpop( "fnc" );
		var doc = getDocData( type, true );
		return {
			fnc: defPopup.replace( "%s", "fnc_" + incpop( "fnc" ) )
				.replace( "%s", "<b>function</b>(" + doc.args + ")" + doc.ret ),
			txt: txtPopup.replace( "%s", "fnc_" + incpop( "fnc" ) ).replace( "%s", name )
		}
	}

	if( type.indexOf( "-" ) > -1 ) {
		var temp = type.split( "-" )
		type = temp[0]
		switch( type.slice( 0, 3 ) ) {
			case "str":
				return {
					fnc: defPopup.replace( "%s", "str_" + incpop( "str", 1 ) )
						.replace( "%s", "<b>string</b> - \"" + rplop( temp[1].trim().replace( /"/g, "" ), true ) + "\"" ),
					txt: txtPopup.replace( "%s", "str_" + incpop( "str" ) ).replace( "%s", name )
				}
			case "obj":
				var k, desc = replW( temp[1].trim() );
				for( k in Object.keys( hrefs ) )
					if( k.length == 7 )
						desc = desc.replace( RegExp( k, "g" ), hrefs[k.slice( 0, 3 )] );
					//else if( len( k ) == 3: desc = desc.replace( RegExp( k, "g" ), typenames[k[:3]] )
				return {
					fnc: defPopup.replace( "%s", "obj" ).replace( "%s", "<b>object</b> - " + desc ),
					txt: txtPopup.replace( "%s", "obj" ).replace( "%s", name )
				}
			case "num":
				return {
					fnc: defPopup.replace( "%s", "num_" + incpop( "num", 1 ) )
						.replace( "%s", "<b>" + typenames[type.slice( 0, 3 )] + "</b> - " + rplop( temp[1].trim() ) ),
					txt: txtPopup.replace( "%s", "num_" + incpop( "num" ) ).replace( "%s", name )
				}
			case "lst":
				var t = temp[1].trim().replace( /\, /g, "," ).slice( 1, -1 ).split( "][" ), popups = [],
					names = t[0].split( "," );

				if( t.length == 1) return {
						fnc: defPopup.replace( "%s", "lst_" + incpop( "lst", 1 ) )
							.replace( "%s", "<b>" + typenames[type.slice( 0, 3 )] + "</b> - " + "[ " + names.join( ", " ) + " ]" ),
						txt: txtPopup.replace( "%s", "lst_" + incpop( "lst" ) ).replace( "%s", name )
					}

				var i, types = t[1].split( "," );
				for( i in names )
					popups.push( appPopup.replace( "%s", getv( types[i] ) ).replace( "%s", names[i] ) )
				return {
					fnc: defPopup.replace( "%s", "lst_" + incpop( "lst", 1 ) )
						.replace( "%s", "<b>" + typenames[type.slice( 0, 3 )] + "</b> - " + "[ " + popups.join( ", " ) + " ]" ),
					txt: txtPopup.replace( "%s", "lst_" + incpop( "lst" ) ).replace( "%s", name )
				}
			default: error( "unknown type " + type )
		}
	} else {
		var add = type.split( "|" ).map( function( n ) { return hrefs[n] } ).join( " or " );
		return {
			fnc: defPopup.replace( "%s", type.length == 3? "std_" + type : type )
				.replace( "%s", "<b>" + typenames[type.slice( 0, 3 )] + "</b>" + ( add.length? " - " + add : "" ) ),
			txt: txtPopup.replace( "%s", type.length == 3? "std_" + type : type ).replace( "%s", name )
		}
	}
}

	//replace whitespace with html syntax whitespace
function replW( s, n ) {
	if( n == undefined ) n = true;
	return s.replace( /\\\/\\\//g, "#" )
	.replace( /\n/g, n?"<br>":"\n" )
	.replace( /\t/g, "  " ).replace( /  /g, "&#160;&#160;" );
}

	//increase special popup counters and returns its id
function incpop( type, i ) {
	if( i ) Globals.spop[type] += i;
	return ( "000" + Globals.spop[type] ).slice( -3 )
}

	//returns the type name or description of a value or the value itself
function getv( v ) { return hrefs[v] || typenames[v] || v;}
	//returns a comma separated list of object keys
function skeys( o ) { return "" + Object.keys( o ); }
	//replaces \ paceholders with its placeholder 'name'
function reprs( s ) { return s.replace( /\n/g, "\\n" ).replace( /\t/g, "\\t" ); }
	//replace "&" and "|" operators with "and" and "or"
function rplop( s, n ) {
	var a = n? "\" or \"" : " or ",
		b = n? "\", \"" : ", ";
	return replW( s.replace( /\|/g, a ).replace( /\&/g, b ) );
}