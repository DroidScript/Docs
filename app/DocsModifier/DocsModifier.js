
	//declare global variables
		//initialisation of some variables because app functions
		//shouldn't be used before OnStart was called
var lang, functions, categories,
	listHrefs, listTypes, listFolderSH,
		//defined true after modifying smth, false after saving
	changed = false,
		//true when all controls are loaded
	loaded = false,
		//can disable progress at the beginning if sdcard folder doesnt exist
	useprg = true,
		//app sdcard path
	path = "/sdcard/DocsModifier/",
		//true if app loaded first time
	firstLoad = !app.FolderExists( path ),
		//available languages
	languages = JSON.parse( app.LoadText( "languages", '["English (en)", "Español (es)", "Português (pt)", "Russian (ru)"]' ) );;

	//called when application started
function OnStart() {
		//prevent app closing when errors occures and show file, line and error msg
	app.SetOnError( error );
		//disable debugging to improve performance
	app.SetDebugEnabled( false );
		//just for debugging
	//app.SetOnDebug(function(s){if(s.indexOf(":")>-1)alert(s)});
		//fix current orientation
	app.SetOrientation( app.GetOrientation() );

		//ask user to use 20MB space (uses 12 after extracting + tolerance after changes)
	if( !app.FolderExists( path ) || !app.LoadBoolean( "agreed", false ) ) {
		var free = Math.floor( 1000*app.GetFreeSpace( "Internal" ) ).toString();
		free = ( free < 10? alert : prompt )(
			"You need to have at least 10 MB free space in your internal storage.\nYou have " +
			free + "MB available." + ( free < 10? "App will exit!" :
			"Type \"agree\" to continue" ) ) || "";
		if( free.toLowerCase().indexOf( "agree" ) < 0 ) return app.Exit();
		else app.SaveBoolean( "agreed", true );
		app.ShowPopup( "agreed" );
	}

		//loads all source files
	showProgress( "loading sources..." );
	_LoadScriptSync( "Dialogs.js" );
	_LoadScriptSync( "Generate.js" );
	_LoadScriptSync( "appGUI.js" );

		//local variables
			//get 2 char language code
	var lc = app.GetLanguageCode().slice( 0, 2 ),
		docsLst,
			//define sys proc object for sheell commands
		sys = app.CreateSysProc( "sh" );

	//define some globals
		//faster listFolder function using the android shell
	listFolderSH = function( path ) {
		sys.Out( "ls -l \"" + path + "\"\n" );
		var s, lst, i = 0;
		while( ( lst = sys.In( 10, "nowait" ) ) == "" && ++i < 10 );
		while( s = sys.In( 100, "nowait" ) ) lst += s;
		return lst.split( "\n" ).slice( 0, -1 ).map( function( file ) {
			var info = file.split( /[0-9][0-9]:[0-9][0-9]\s/ ),
				name = info[1];
			if( info[0][0] == "d" ) name += "/";
			return name;
		} );
	};

		//item format: (title: typename, body: description)
	listHrefs = Object.keys( hrefs ).map( function( n ) {
		return n.length < 8? ( ( hrefs[n].replace( /:/g, "^c^" ) || typenames[n] ) + ":" + n + ": " ) : "";
	} ).sort( sortAsc );

		//item format: (title:full name  [> num_specifications], body:abbreviation)
	listTypes = Object.keys( typenames ).map( function( n ) {
			//get the number of special types of a basic one
		var len = listHrefs.filter( function( desc ) {
			return desc.indexOf( ":" ) == -1? false : !desc.split( ":" )[1].indexOf( n );
		} ).length;
			//if theres just one special type it is the type itself
		if( len < 2 ) len = 0;
			//returns the formatted item
		return typenames[n] + ( len? "\t> " + len + ":" : ":" ) + n + ": ";
	} ).sort( sortAsc );
		//add item which represents no return value
	listTypes.unshift( "nothing:: " );

		//creates all dialogs
	createDlgs();

	if( firstLoad ) {
			//causes empty progress messages
		useprg = false;
			//create /sdcard/DocsModifier folder
		app.MakeFolder( path );
			//show Readme dialog
		Dlgs.Readme.Show();
	}

		//extract assets without overriding them
	showProgress( "extracting assets..." );
		//extract assets folder to sdcard without overriding them
	app.ExtractAssets( "assets", path );
		//do for each docs* folder
	app.ListFolder( path, "docs" ).forEach( function( d ) {
			//needed to check which files does already exist
		docsLst = listFolderSH( path + d );
			//copy other required files from DroidScript folder (reduces spk size)
		["css", "app.js", "js", "javascript"/*, "nxt", "plugins"*/].forEach( function( f ) {
			if( docsLst.indexOf( f ) == -1 )
				if( f.indexOf( '.' ) == -1 )
					app.CopyFolder( "/sdcard/DroidScript/.edit/docs/" + f, path + d + "/" + f );
				else app.CopyFile( "/sdcard/DroidScript/.edit/" + f, path + d + "/" + f );
		} );
	} );

		//get last used language
	lang = app.LoadText( "language", "" );
		//select language if app started first time
	if( lang && !firstLoad ) OnLoad();
	else Dlgs.Language.show( OnLoad, false );
}

function OnLoad() {
	//define declared globals
		//load all functions
	functions = JSON.parse( app.ReadFile( path + "functions" + getl() + ".json" ) || "{}" );
		//load categories {category: [items]} and add the "all" section
	categories = JSON.parse( app.ReadFile( path + "categories" + getl() + ".json" ) || "{}" );
	categories.All = {};
	for( var f in functions ) categories.All[f] = f + ".htm";

	showProgress( "loading GUI..." );
	createGUI();
	loadCategs();
	hideProgress();

	loaded = true;
	app.SetDebugEnabled( true );
}

	//called when back button pressed
function OnBack() {
	switch( vis ) {
		case 1: //edit layout shown
			if( changed ) //ask for saving before cancel if smth was changed
				Dlgs.Confirm.show( "Save \"" + curF.name + "\" first?", function( reply, btn ) {
					if( reply == "Yes" ) guiCallbacks.btnSaveDoc_OnTouch( true );
					GUI.layEdit.Animate( "SlideToRight" );
					GUI.layStart.SetTouchable( true );
					changed = false;
					vis = 0;
				} );
			else {
				GUI.layEdit.Animate( "SlideToRight" );
				GUI.layStart.SetTouchable( true );
				vis = 0;
			}
		break;
		case 2: //edit examples layout shown
			var sName = GUI.edtSName.GetText(),
				sCode = GUI.edtSCode.GetText();
				//ask for saving when smth has changed and title and code are valid
			if( changed && sName && sCode )
				Dlgs.Confirm.show( "Save \"" + sName + "\" first?", function( reply, btn ) {
					if( reply == "Yes" ) guiCallbacks.btnSaveSamples_OnTouch( sName, sCode );
					GUI.layEdit.SetTouchable( true );
					GUI.laySamples.Animate( "SlideToRight" );
					changed = false;
					vis = 1;
				} );
			else {
				GUI.layEdit.SetTouchable( true );
				GUI.laySamples.Animate( "SlideToRight" );
				vis = 1;
			}
		break;
		case 3: //subfunction loaded
			curF = functions[doc];
			vis = 1; doc = "";
				//not needed because subfunctions shouldnt have more subfunctions
			GUI.btnEdtSamp.SetEnabled( true );
			loadDoc( curF );
		break;
		default: //0: start layout shown
			if( cat ) loadCategs( cat = "" );
			else Dlgs.Confirm.show( "Do you really want to exit?", function( reply ) {
				if( reply == "Yes" ) app.Exit();
			} );
	}
}

	//change the content of each control on the edit layout dependent on the function object
function loadDoc( f ) {
	curF = f;
	GUI.lstSubf.SetVisibility( curF.name.slice( 0, 6 ) == "Create"? "Show" : "Hide" );
	GUI.lstParams.SetVisibility( curF.isfunc? "Show" : "Hide" );
	GUI.btnRType.SetEnabled( curF.name.slice( 0, 6 ) != "Create" );

	GUI.txtName.SetText( curF.name );
	GUI.edtDesc.setText( curF.desc );
	GUI.btnRType.type = curF.retval;

	loadSubfLst();
	loadPreview();
	loadParamLst();
	changed = false;
}

	//change lstCategs list depending on the current category
function loadCategs( categ ) {
	categ = categ == undefined? cat : categ
	if( categ )
		GUI.lstCategs.SetList( [".."].concat( Object.keys( categories[categ] ).sort( sortAsc ).map( function( name ) {
			return isIncomplete( functions[name] )? "<font color='red'>" + name + "</font>" : name;
		} ).concat( "+" ) ).join( ";;" ), ";;" );
	else {
		var f, lst = [];
		for( categ in categories )
			lst.push( categ + ":" + Object.keys( categories[categ] ).length + ": " );
		GUI.lstCategs.SetList( lst.sort( sortAsc ).concat( "+" ).join( ";;" ), ";;" );
	}
}

	//reloads the preview of the constructor line
function loadPreview() {
	GUI.edtPreview.SetHtml( funcLine( curF.name, curF.pNames, curF.retval ) );
}

	//reloads the parameter list of the edit layout
function loadParamLst() {
	var lst = [];
	for( var i = 0; i < curF.pNames.length; i++ )
		lst.push( curF.pNames[i] + ":" + ( curF.pTypes[i].constructor.name == "Object"? "function" : curF.pTypes[i] ) + ": " )
	GUI.lstParams.SetList( lst.concat( "+" ).join( ";;" ), ";;" );
}

	//update examples list
function loadSampleLst() {
	GUI.lstSamples.SetList( Object.keys( GUI.lstSamples.samples ).concat( "+" ).join( ";;" ), ";;" );
}

	//updates subfunction list
function loadSubfLst() {
	GUI.lstSubf.SetList( Object.keys( curF.subf ).map( function( name ) {
		return ( isIncomplete( curF.subf[name] )? "<font color='red'>" + name + "</font>" : name ) +
			":" + funcLine( curF.subf[name].name, curF.subf[name].pNames, curF.subf[name].retval ) + ": "
		//	.replace( "<b>", "" ).replace( "</b>", "" )
			//+ ": ";
	} ).concat( "+" ).join( ";;" ), ";;" );
}

	//change the content of each control on the edit examples layout
function loadSample( title ) {
	if( title == "+" ) return guiCallbacks.lstSamples_OnAction( "Insert" );
	else GUI.edtSCode.SetText( GUI.lstSamples.samples[title] );
	GUI.edtSName.SetText( GUI.lstSamples.title = title );
	changed = false;
}

//helping functions
	//locks screen if GUI loaded to prevent errors
function showProgress( msg ) { if( useprg ) app.ShowProgress( msg ); if( loaded ) GUI.layMain.SetTouchable( false ); }
	//reenables screen if GUI loaded
function hideProgress( msg ) { app.HideProgress( msg ); if( loaded ) GUI.layMain.SetTouchable( true ); }
	//function for Array.sort() with ascending values
function sortAsc( a, b ) { return a.toString().toLowerCase() > b.toString().toLowerCase()? 1 : -1 }
	//let the user type a string until it is valid
function getName( msg ) { var s; do var s = prompt( msg ); while( !validName( s ) ); return s; }
	//returns a number cropped to a given range
function crop( n, min, max ) { return n < min? min : max != undefined && n > max? max : n; }
	//shows an error dialog
function error( msg, line, file ) { app.Alert( msg, file + ": error at line " + line, "", 255 ); }
	//returns wether a string is alphanumerical and not empty
function validName( s ) { return s? !s.replace( /[0-z9A-Za-z]/g, "" ) : s == null; }
	//returns "-language_code" of the current language (nothing if english)
function getl( l ) { if( l == undefined ) l = lang; return l == "en"? "" : "-" + l; }
	//returns a list of values in an object
function values(o) { var arr = [], i; for( i in o ) arr.push( o[i] ); return arr; }
	//convert arguments to function line like in the docs
function funcLine( name, params, rtype ) {
	return name + ( params.length? "( " + params.join( ", " ) + " )" : "()" ) +
		( rtype? " -> " + typeDesc( rtype, !name.indexOf( "Create" ) ) : "" );
}
	//converts multiple object into one
function assign() {
	var obj = arguments[arguments.length-- -1];
	for( var i = 0; i < arguments.length; i++ )
		for( var k in arguments[i] ) obj[k] = arguments[i][k];
	return obj;
}

	//converts a variable to intendated string
	//supports Boolean, Number, String, Array and Object
function tos( o, intd, m ) {
	if( intd == undefined ) intd = "";
	if( m == undefined ) m = true;
	s = m? intd : "";
	switch( o.constructor.name ) {
		case "String": case "Number": case "Boolean":
			return s + JSON.stringify(o);
		case "Array":
			var n = o.length? o[0].constructor.name != "Object" : true;
			s += n? "[" : "[\n";
			for( var i = 0; i < o.length; i++ ) {
				s += tos( o[i], intd + "\t", !n );
				if( i < o.length - 1 ) s += n? ", " : ",\n";
			}
			return s + ( n? "" : "\n" + intd ) + "]";
		case "Object":
			var keys = Object.keys( o ).sort( sortAsc );
			switch( keys.length ) {
				case 0: return "{}";
/*				case 1:
					s += "{ ";
					for( var i = 0; i < keys.length; i++ ) {
						s += '"' + keys[i] + '": ' + tos( o[keys[i]], "", false );
						if( i < keys.length - 1 ) s += ",";
					}
				return s + " }";*/
				default:
					s += "{\n";
					for( var i = 0; i < keys.length; i++ ) {
						s += intd + "\t\"" + keys[i] + '": ' + tos( o[keys[i]], intd + "\t", false );
						if( i < keys.length - 1 ) s += ",\n";
					}
				return s + "\n" + intd + "}";
			}
	}
	return s;
}

function createZip( dest ) {
	var zip = app.CreateZipUtil();
	zip.Create( dest );
	zip.addFolder = function( path, fld ) {
		if( path == undefined )
			path = fld.endsWith( "/" )? fld.split( "/" ).slice( -2 , -1 )[0] + "/" :
				fld.slice( fld.lastIndexOf( "/" ) );
		var lst = listFolderSH( fld );
		for( var i in lst )
			if( lst[i].endsWith( "/" ) )
				this.addFolder( path + lst[i], fld + lst[i] );
			else this.AddFile( path + lst[i], fld + lst[i] );
	}
	return zip;
}

function openZip( dest ) {
	var zip = app.CreateZipUtil();
	zip.Open( dest );
	zip.extractFolder = function( path, fld ) {
		if( !app.FolderExists( fld ) ) app.MakeFolder( fld );
		var lst = zip.List( path ).split( "," );
		for( var i in lst )
			if( lst[i].endsWith( "/" ) )
				this.extractFolder( path + lst[i], fld + lst[i] );
			else this.Extract( path + lst[i], fld + lst[i] );
	}
	return zip;
}

	//reads the example.txt file of an app function and returns a {title:code} object
function getSamplesObj( name ) {
	var samples = {}, samp = app.ReadFile( path + "samples/" + name + ".txt" ).split( "</sample>" ).slice( 0 , -1 );
	for( var i in samp ) {
		var s = samp[i].trim(), title = s.slice( 8, s.indexOf( ">" ) );
		if( samples[title] ) {
			for( var j=1; samples[title + j]; j++ );
			title = title + j;
		}
		samples[title] = s.slice( s.indexOf( "\n" ) );
	}
	return samples;
}

	//calls a method if the control content wasnt modified after 3 seconds
function setModifier( obj, callb ) {
	obj.setText = callb;
	obj.tmt = null;
	obj.SetOnChange( function() {
		clearTimeout( obj.tmt );
		changed = true;
		obj.tmt = setTimeout( callb, 3000 );
	} );
}

	//allows to switch list items
function setSwitchable( lst, onTouch, callback ) {
	lst.item = null;
	lst.onTouch = onTouch;
	lst.callback = callback;
	lst.SetOnTouch( guiCallbacks.switchable_OnTouch );
	lst.SetOnLongTouch( guiCallbacks.switchable_OnLongTouch );
}

	//used by function isIncomplete to remove ? and whitespace
function fstrip( s ) {
	return s.replace( /\?/g, "" ).replace( /\s/g, "" );
}

	//returns wether a value is missing in the function
function isIncomplete( f ) {
		//check description
	if( !fstrip( f.desc ).length ) return true;
		//check return value
	if( f.retval.constructor.name != "Object" )
		if( f.retval )
			if( !fstrip( f.retval ).length ) return true;

	var i;
		//check parameter types
	for( i = 0; i < f.pTypes.length; i++ )
		if( f.pTypes[i].constructor.name != "Object" )
			if( !fstrip( f.pTypes[i] ).length ) return true;
		//check subfunctions
	for( i in f.subf )
		if( isIncomplete( f.subf[i] ) ) return true;

	return false;
}


function saveCategories() {
		//save categories object
	var all = categories.All;
	delete categories.All;
	app.WriteFile( path + "categories" + getl() + ".json", tos( categories ) );
	categories.All = all;
}

function saveFunctions() {
	app.WriteFile( path + "docs" + getl() + "/functions.json", tos( functions ) );
}


	//overrides the _Cbm method
	//prevents error when using {foo:function} as function store
	//prevent error at local defined functions (var foo = function)
function _Cbm( callb ) {
	if( !callb ) return null;
	switch( callb.constructor.name ) {
		case "String": return callb;
		case "Function": return callb.toString()[9] == "("? _ObjCbm(callb) : callb.name;
		default: return null;
	}
}

	//override the _ObjCbm method
	//prevents that functions are added to _cbMap multiple times
function _ObjCbm( func, add ) {
	var i = add? -1 : _cbMap.indexOf( func );
	if( i == -1 ) {
		_cbMap[++_cbId] = func;
		return "_cbMap[" + _cbId + "]";
	} else return "_cbMap[" + i + "]";
}