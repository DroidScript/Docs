
var vis = 0, cat = "", curF, doc = "", GUI = {}, guiCallbacks;

function createGUI() {

		//GUI (graphical user interface)
	GUI.layMain = app.CreateLayout( "absolute" );
	GUI.layMain.SetVisibility( "Hide" );

		GUI.layStart = app.CreateLayout( "absolute" );
			GUI.layStart.SetSize( 1, 1 );
			GUI.layStart.SetBackColor( "#333333" );

			GUI.btnLanguage = app.CreateButton( "choose\nlanguage", .23, .095 );
			GUI.btnLanguage.SetOnTouch( Dlgs.Language.show );
			GUI.btnLanguage.SetPosition( .24, .04 );
			GUI.layStart.AddChild( GUI.btnLanguage );

			GUI.btnImport = app.CreateButton( "Import", .23, .095 );
			GUI.btnImport.SetPosition( .48, .04 );
			GUI.btnImport.SetOnTouch( guiCallbacks.btnImport_OnTouch );
			GUI.layStart.AddChild( GUI.btnImport );

			GUI.btnExport = app.CreateButton( "Export", .23, .095 );
			GUI.btnExport.SetPosition( .72, .04 );
			GUI.btnExport.SetOnTouch( guiCallbacks.btnExport_OnTouch );
			GUI.layStart.AddChild( GUI.btnExport );

			GUI.btnReadme = app.CreateButton( "Readme", .29, .095 );
			GUI.btnReadme.SetPosition( .05, .14 );
			GUI.btnReadme.SetOnTouch( guiCallbacks.btnReadme_OnTouch );
			GUI.layStart.AddChild( GUI.btnReadme );

			GUI.btnGenerateDocs = app.CreateButton( "generate\nall docs", .29, .095 );
			GUI.btnGenerateDocs.SetPosition( .36, .14 );
			GUI.btnGenerateDocs.SetOnTouch( generateDocs );
			GUI.layStart.AddChild( GUI.btnGenerateDocs );

			GUI.btnDocPreview = app.CreateButton( "full docs\npreview", .29, .095 );
			GUI.btnDocPreview.SetPosition( .67, .14 );
			GUI.btnDocPreview.SetOnTouch( guiCallbacks.btnDocPreview_OnTouch );
			GUI.layStart.AddChild( GUI.btnDocPreview );

			GUI.lstCategs = app.CreateList( "", .9, .62, "html" );
			GUI.lstCategs.SetPosition( .05, .24 );
			GUI.lstCategs.SetTextSize( 13 );
			GUI.lstCategs.SetOnTouch( guiCallbacks.lstCategs_OnTouch );
			GUI.lstCategs.SetOnLongTouch( _ObjCbm( guiCallbacks.lstCategs_OnLongTouch, true ) );
			GUI.lstCategs.SetBackColor( "#222222" );
			GUI.layStart.AddChild( GUI.lstCategs );

			GUI.btnScrollTop = app.CreateButton( "scroll to top", .3, .095 );
			GUI.btnScrollTop.SetOnTouch( guiCallbacks.btnScrollTop_OnTouch );
			GUI.btnScrollTop.SetPosition( .175, .87 );
			GUI.layStart.AddChild( GUI.btnScrollTop );

			GUI.btnScrollBtm = app.CreateButton( "scroll\nto bottom", .3, .095 );
			GUI.btnScrollBtm.SetOnTouch( guiCallbacks.btnScrollBtm_OnTouch );
			GUI.btnScrollBtm.SetPosition( .575, .87 );
			GUI.layStart.AddChild( GUI.btnScrollBtm );

		GUI.layMain.AddChild( GUI.layStart );

		GUI.layEdit = app.CreateLayout( "absolute" );
		GUI.layEdit.SetSize( 1, 1 );
		GUI.layEdit.SetVisibility( "hide" );
		GUI.layEdit.SetBackColor( "#334433" );

			GUI.btnEdtSamp = app.CreateButton( "edit example snippets", .23, .105 );
			GUI.btnEdtSamp.SetPosition( .24, .03 );
			GUI.btnEdtSamp.SetOnTouch( guiCallbacks.btnEdtSamp_OnTouch );
			GUI.layEdit.AddChild( GUI.btnEdtSamp );

			GUI.btnSaveDoc = app.CreateButton( "Save and generate", .23, .105 );
			GUI.btnSaveDoc.SetPosition( .48, .03 );
			GUI.btnSaveDoc.SetOnTouch( guiCallbacks.btnSaveDoc_OnTouch );
			GUI.layEdit.AddChild( GUI.btnSaveDoc );

			GUI.btnPreview = app.CreateButton( "Preview", .23, .105 );
			GUI.btnPreview.SetPosition( .72, .03 );
			GUI.btnPreview.SetOnTouch( guiCallbacks.btnPreview_OnTouch );
			GUI.layEdit.AddChild( GUI.btnPreview );

			GUI.txtName = app.CreateTextEdit( "", .632, .08, "singleline,readonly" );
			GUI.txtName.SetTextSize( 15 );
			GUI.txtName.SetTextColor( "#aaaaaa" );
			GUI.txtName.SetBackColor( "#445544" );
			GUI.txtName.SetPosition( .05, .15 );
			GUI.layEdit.AddChild( GUI.txtName );

			GUI.btnRType = app.CreateButton( "return value", .23, .09 );
			GUI.btnRType.SetPosition( .715, .15 );
			GUI.btnRType.type = "";
			GUI.btnRType.SetOnTouch( guiCallbacks.btnRType_OnTouch );
			GUI.layEdit.AddChild( GUI.btnRType );

			GUI.edtDesc = app.CreateTextEdit( "", .9, .2 );
			GUI.edtDesc.SetPosition( .05, .24 );
			setModifier( GUI.edtDesc, guiCallbacks.edtDesc_OnModify );
			GUI.edtDesc.SetBackColor( "#445544" );
			GUI.edtDesc.SetTextSize( 15 );
			GUI.edtDesc.SetHint( "Description" );
			GUI.layEdit.AddChild( GUI.edtDesc );

			GUI.edtPreview = app.CreateTextEdit( "Preview", .9, .095, "singleline,readonly" );
			GUI.edtPreview.SetBackColor( "#445544" );
			GUI.edtPreview.SetPosition( .05, .45 );
			GUI.edtPreview.SetTextColor( "#aaaaaa" );
			GUI.edtPreview.SetTextSize( 15 );
			GUI.layEdit.AddChild( GUI.edtPreview );

			GUI.txtP = app.CreateText( "Parameters:" );
			GUI.txtP.SetPosition( .05, .55 );
			GUI.layEdit.AddChild( GUI.txtP );

			GUI.lstParams = app.CreateList( "", .3, .4 );
			setSwitchable( GUI.lstParams, guiCallbacks.lstParams_OnTouch, guiCallbacks.lstParams_OnAction );
			GUI.lstParams.SetBackColor( "#445544" );
			GUI.layEdit.AddChild( GUI.lstParams );

			GUI.txtSf = app.CreateText( "Subfunctions:" );
			GUI.txtSf.SetPosition( .4, .55 );
			GUI.layEdit.AddChild( GUI.txtSf );

			GUI.lstSubf = app.CreateList( "", .55, .4, "html" );
			setSwitchable( GUI.lstSubf, guiCallbacks.lstSubf_OnTouch, guiCallbacks.lstSubf_OnAction );
			GUI.lstSubf.SetBackColor( "#445544" );
			GUI.layEdit.AddChild( GUI.lstSubf );

		GUI.layMain.AddChild( GUI.layEdit );

		GUI.laySamples = app.CreateLayout( "absolute" );
		GUI.laySamples.SetSize( 1, 1 );
		GUI.laySamples.SetVisibility( "hide" );
		GUI.laySamples.SetBackColor( "#333344" );

			GUI.edtSName = app.CreateTextEdit( "", .72, .08, "singleline" );
			GUI.edtSName.SetOnChange( _ObjCbm( function() { changed = true; }, true ) );
			GUI.edtSName.SetPosition( .23, .04 );
			GUI.edtSName.SetTextSize( 15 );
			GUI.edtSName.SetBackColor( "#444455" );
			GUI.edtSName.SetHint( "Title" );
			GUI.laySamples.AddChild( GUI.edtSName );

			GUI.edtSCode = app.CreateTextEdit( "", .9, .42 );
			GUI.edtSCode.SetPosition( .05, .14 );
			GUI.edtSCode.SetOnChange( _ObjCbm( function() { changed = true; }, true ) );
			GUI.edtSCode.SetBackColor( "#444455" );
			GUI.laySamples.AddChild( GUI.edtSCode );

			GUI.btnUndo = app.CreateButton( "Undo", .21, .08 );
			GUI.btnUndo.SetOnTouch( GUI.edtSCode.Undo );
			GUI.btnUndo.SetPosition( .05, .58 );
			GUI.laySamples.AddChild( GUI.btnUndo );

			GUI.btnBold = app.CreateButton( "Bold", .21, .08 );
			GUI.btnBold.SetOnTouch( guiCallbacks.btnBold_OnTouch );
			GUI.btnBold.SetPosition( .28, .58 );
			GUI.laySamples.AddChild( GUI.btnBold );

			GUI.btnSaveSamples = app.CreateButton( "Save", .21, .08 );
			GUI.btnSaveSamples.SetOnTouch( guiCallbacks.btnSaveSamples_OnTouch );
			GUI.btnSaveSamples.SetPosition( .51, .58 );
			GUI.laySamples.AddChild( GUI.btnSaveSamples );

			GUI.btnRedo = app.CreateButton( "Redo", .21, .08 );
			GUI.btnRedo.SetOnTouch( GUI.edtSCode.Redo );
			GUI.btnRedo.SetPosition( .74, .58 );
			GUI.laySamples.AddChild( GUI.btnRedo );

			GUI.lstSamples = app.CreateList( "", .9, .27 );
			setSwitchable( GUI.lstSamples, guiCallbacks.lstSamples_OnTouch, guiCallbacks.lstSamples_OnAction );
			GUI.lstSamples.title = "";
			GUI.lstSamples.SetPosition( .05, .68 );
			GUI.lstSamples.SetBackColor( "#444455" );
			GUI.laySamples.AddChild( GUI.lstSamples );

		GUI.layMain.AddChild( GUI.laySamples );

		GUI.btnBack = app.CreateButton( "[fa-reply]", .18, .093, "fontawesome, custom" );
		GUI.btnBack.SetStyle( "#dd0000", "#880000", 20, "#330000", 2, 0 );
		GUI.btnBack.SetOnTouch( OnBack );
		GUI.btnBack.SetPosition( .047, .04 );
		GUI.layMain.AddChild( GUI.btnBack );

		GUI.btnExit = app.CreateButton( "[fa-close]", .08, .04, "fontawesome, custom" );
		GUI.btnExit.SetStyle( "#dd0000", "#880000", 20, "#330000", 2, 0 );
		GUI.btnExit.SetOnTouch( app.Exit );
		GUI.layMain.AddChild( GUI.btnExit );

	app.AddLayout( GUI.layMain );

	GUI.txtP.h = 1*GUI.txtP.GetHeight();
	GUI.lstParams.SetPosition( .05, .55 + GUI.txtP.h, .3, .41 - GUI.txtP.h );
	GUI.txtSf.h = 1*GUI.txtSf.GetHeight();
	GUI.lstSubf.SetPosition( .4, .55 + GUI.txtSf.h, .55, .41 - GUI.txtSf.h );

	Dlgs.Preview.SetOnCancel( _ObjCbm( function() { GUI.layMain.SetTouchable( true ); }, true ) );
	app.EnableBackKey( false );
	GUI.layMain.SetVisibility( "show" );
}

guiCallbacks = {
	btnImport_OnTouch: _ObjCbm( function() {
		app.ShowPopup( "Select the docs.zip.dat file you want to import" );
		app.ChooseFile( "Select a zip file", "", function( fpath ) {
			var list, missing = [1, 1, 1], ukn, content, zip = openZip( fpath );

				//check for valid zip file
			if( ( list = zip.List( "/" ).split( "," ) )[0] == "" ) {
					//don't leave files opened
				zip.Close();
				return app.Alert( "invalid zip file", "Warning", 255 );
			}
			
			app.MakeFolder( path + "temp" );
			zip.Extract( "content", path + "temp/content" );
			content = app.ReadFile( path + "temp/content" ).split( "," );
			app.DeleteFile( path + "temp/content" );

			ukn = list.filter( function( s ) {
				switch( s ) {
					case "content": return missing[0] = 0;
					case "Docs/": return missing[1] = content.indexOf( "docs" ) == -1 ? 1 : 0;
					case "Gens/": return missing[2] = content.indexOf( "gens" ) == -1 ? 1 : 0;
					default: return true;
				}
			} );

			if( ukn.length ) alert( "Warning:\n unknown zip content:\n" + ukn.join( ", " ) );
			if( missing[1] && missing[2] )
				return alert( "Warning:\n Zip contains neither generation, nor Documentation files" );

			Dlgs.Import.chkDocs.SetEnabled( missing[1] == 0 );
			Dlgs.Import.chkGens.SetEnabled( missing[2] == 0 );

			Dlgs.Import.show( function( lst ) {
				if( lst.indexOf( "docs" ) > -1 ) {
					showProgress( "extracting Docs" );
					zip.List( "Docs/" ).split( "," ).forEach( function( name ) {
						if( name.endsWith( "/" ) )
							zip.extractFolder( "Docs/" + name, "/sdcard/DroidScript/.edit/" + name );
						else zip.Extract( "Docs/" + name, "/sdcard/DroidScript/.edit/" + name );
					} );
				}

				if( lst.indexOf( "gens" ) > -1 ) {
					showProgress( "extracting Gens" );
					zip.List( "Gens/" ).split( "," ).forEach( function( name ) {
						if( name.endsWith( "/" ) )
							zip.extractFolder( "Gens/" + name, path + name );
						else zip.Extract( "Gens/" + name, path + name );
					} );
				}

				showProgress( "closing" );
				zip.Close();
				hideProgress();
			} );
		} );
	}, true ),

	btnExport_OnTouch: _ObjCbm( function() {
		Dlgs.Export.show( function( lst ) {
			if( lst == "DroidScript" ) {
				showProgress( "Exporting..." );
				app.DeleteFolder( "/sdcard/DroidScript/.edit/docs" + getl() )
				app.CopyFolder( path + "docs" + getl(), "/sdcard/DroidScript/.edit/docs" + getl() );
				hideProgress();
				app.ShowPopup( "Exported " + lang + " docs"  );
				return alert( "please restart DroidScript to reload the DroidScript documentation" );
			}
			
			app.MakeFolder( path + "temp" );
			var file = "DS_Docs-" + lang + ".zip.dat",
				zip = createZip( path + "temp/" + file );
			zip.AddText( "content", lst );

			showProgress( "compressing..." );
			if( lst.indexOf( "gens" ) > -1 ) {
				showProgress( "adding samples" );
				zip.AddFile( "Gens/functions" + getl() + ".json", path + "functions" + getl() + ".json" );
				zip.AddFile( "Gens/categories" + getl() + ".json", path + "categories" + getl() + ".json" );
				zip.addFolder( "Gens/samples/", path + "samples/" );
			}

			if( lst.indexOf( "docs" ) > -1 ) {
				showProgress( "adding docs" + getl() );
				zip.addFolder( "Docs/docs" + getl() + "/", path + "docs" + getl() + "/" );
			}

			showProgress( "closing" );
			zip.Close();
			hideProgress();

			Dlgs.Share.show( function( reply ) {
				switch( reply ) {
					case "save to Downloads":
						showProgress( "Exporting..." );
						if( !app.FolderExists( "/sdcard/Download/" ) )
							app.MakeFolder( "/sdcard/Download/" );
						app.CopyFile( path + "temp/" + file, "/sdcard/Download/" + file );
						app.DeleteFile( path + "temp/" + file );
						app.ShowPopup( "copied to /sdcard/Download/" + file );
						hideProgress();
					break;
					case "share via":
						app.SendFile( path + "temp/" + file );
					break;
				}
			} );
		} );
	}, true ),

	btnReadme_OnTouch: _ObjCbm( function() {
		Dlgs.Readme.Show();
	}, true ),

	btnDocPreview_OnTouch: _ObjCbm( function() {
		showProgress( "loading..." );
		Dlgs.Preview.web.LoadUrl( "file://" + path + "docs" + getl() + "/Docs.htm" );
	}, true ),

	btnScrollTop_OnTouch: _ObjCbm( function() {
		GUI.lstCategs.ScrollToItemByIndex( 0 );
	}, true ),

	btnScrollBtm_OnTouch: _ObjCbm( function() {
		GUI.lstCategs.ScrollToItemByIndex( 9999 );
	}, true ),

	lstCategs_OnTouch: function( title ) {
			//extract name if html used
		if( !title.indexOf( "<" ) )
			title = title.slice( title.indexOf( ">" ) + 1, title.lastIndexOf( "<" ) );

		if( cat ) {
			switch( title ) {
				case "..":
					return loadCategs( cat = "" );
				case "+":
					if( !( title = getName( "type the function name:" ) ) ) return;
					categories[cat][title] = title + ".htm";
					saveCategories();
					loadCategs();

					if( functions[title] ) return app.ShowPopup( 'imported "app.' + title + '"!' );
					else {
						functions[title] = { name:title, desc:"", pNames:[], pTypes:[], isfunc:true, retval:"", subf:{} };
						app.ShowPopup( 'added function "app.' + title + '"!' );
					}
					saveFunctions();
				default:
					loadDoc( functions[title] );
					GUI.layEdit.Animate( "SlideFromRight" );
					GUI.layStart.SetTouchable( false );
					vis = 1;
			}
		} else {
			switch( title ) {
				case "+":
					if( !( title = getName( "type the category name:" ) ) ) return;
					if( categories[title] ) return app.ShowPopup( 'category "' + title + '" already exists!' );
					categories[title] = {};
					saveCategories();
					loadCategs();
					return app.ShowPopup( 'added "' + title + '" category!' );
				default: loadCategs( cat = title );
			}
		}
	},

	lstCategs_OnLongTouch: function( title ) {
			//extract name if html used
		if( !title.indexOf( "<" ) )
			title = title.slice( title.indexOf( ">" ) + 1, title.lastIndexOf( "<" ) );

		GUI.lstCategs.title = title;
		Dlgs.edtCategsLst.Show();
	},
	
	lstCategs_OnAction: function( action ) {
		Dlgs.edtCategsLst.Hide();
		switch( action ) {
			case "Add":
				return guiCallbacks.lstCategs_OnTouch( "+" );
			case "Remove":
				if( cat ==	"" && GUI.lstCategs.title == "All" )
					return alert( 'You cannot remove the "All" section!' );
				Dlgs.Confirm.show( "Remove " + ( cat? GUI.lstCategs.title + " from " + cat : GUI.lstCategs.title ) + " section?", function( reply ) {
					if( reply == "Yes" )
						if( cat ) delete categories[cat][GUI.lstCategs.title];
						else delete categories[GUI.lstCategs.title];
					saveCategories();
					loadCategs();
				} );
		}
	},

	btnEdtSamp_OnTouch: _ObjCbm( function() {
		GUI.layEdit.SetTouchable( false );
		GUI.edtSName.SetText( "" );
		GUI.edtSCode.SetText( "" );
		GUI.lstSamples.samples = getSamplesObj( curF.name );
		loadSampleLst();
		GUI.lstSamples.title = "";
		GUI.laySamples.Animate( "SlideFromRight" );
		vis = 2;
		changed = false;
	}, true ),

	btnSaveDoc_OnTouch: function( onlysave ) {
		showProgress( "saving..." );
		if( GUI.edtDesc.tmt != null ) {
			clearTimeout( GUI.edtDesc.tmt );
			curF.desc = GUI.edtDesc.GetText();
			GUI.edtDesc.tmt = null;
		}

		saveFunctions()
		if( !onlysave ) {
			showProgress( "generating doc file..." );
			generateDoc( doc? doc : curF.name );
			app.ShowPopup( "Saved and generated" );
		} else app.ShowPopup( "Saved" );
		hideProgress();
		changed = false;
	},

	btnPreview_OnTouch: _ObjCbm( function() {
		showProgress( "loading..." );
		Dlgs.Preview.web.LoadUrl( "file://" + path + "docs/app" + getl() + "/" + ( doc? doc : curF.name ) + ".htm" );
	}, true ),

	btnRType_OnTouch: _ObjCbm( function() {
		Dlgs.PType.show( function( type ) {
			if( curF.retval != type ) {
				curF.retval = type;
				changed = true;
				loadPreview();
				app.ShowPopup( 'changed return value to "' + type + '"' );
			}
		} );
	}, true ),

	edtDesc_OnModify: function( txt ) {
		if( txt == undefined ) txt = GUI.edtDesc.GetText();
		else GUI.edtDesc.SetText( txt );
		if( doc ) functions[doc].subf[curF.name].desc = txt;
		else curF.desc = txt;
		GUI.edtDesc.tmt = null;
		changed = true;
	},

	lstParams_OnTouch: _ObjCbm( function( pName, pType, img, i ) {
		if( pName == "+" ) return guiCallbacks.lstParams_OnAction( "Insert", "", "", curF.pNames.length )
		Dlgs.PType.show( function( type ) {
			if( curF.pTypes[i] != type ) {
				curF.pTypes[i] = type;
				loadParamLst();
				changed = true;
			}
		} );
	}, true ),

	lstParams_OnAction: function( action, title, body, index ) {
		switch( action ) {
			case "Delete":
					//deletes the sample in the samples object
				curF.pNames.splice( index, 1 );
				curF.pTypes.splice( index, 1 );
			break;
			case "Move":
				if( index[0] != index[1] ) {
					curF.pNames = curF.pNames.concat( curF.pNames.splice( index[0], 1 ), curF.pNames.splice( index[1] ) );
					curF.pTypes = curF.pTypes.concat( curF.pTypes.splice( index[0], 1 ), curF.pTypes.splice( index[1] ) );
				}
			break;
			case "Insert":
				if( !( title = getName( "type the parameter name" ) ) ) return;
				curF.pNames = curF.pNames.slice( 0, index ).concat( title, curF.pNames.slice( index ) );
				Dlgs.PType.show( function( type ) {
					curF.pTypes = curF.pTypes.slice( 0, index ).concat( type, curF.pTypes.slice( index ) );
						changed = true;
						loadParamLst();
						loadPreview();
				} );
				return;
		}
		changed = true;
		loadParamLst();
		loadPreview();
	},

	lstSubf_OnTouch: function( title ) {
		if( title == "+" ) return guiCallbacks.lstSubf_OnAction( "Insert" );

			//extract name if html used
		if( !title.indexOf( "<" ) )
			title = title.slice( title.indexOf( ">" ) + 1, title.lastIndexOf( "<" ) );

		doc = curF.name;
		GUI.btnEdtSamp.SetEnabled( false );
		loadDoc( curF.subf[title] );
		vis = 3;
	},

	lstSubf_OnAction: function( action, title, body, index ) {
		switch( action ) {
			case "Delete":
					//deletes the sample in the samples object
				delete curF.subf[title];
			break;
			case "Move":
					//create new object with changed key order
				var lst = Object.keys( curF.subf ), obj = {};

				if( index[0] != index[1] )
					lst = lst.concat( lst.splice( index[0], 1 ), lst.splice( index[1] ) );

				lst.forEach( function( k ) { obj[k] = curF.subf[k]; } );
				curF.subf = obj;
			break;
			case "Insert":
				if( !( title = getName( "type the subfunction name" ) ) ) return;
				functions[curF.name].subf[title] = { name:title, desc:"", pNames:[], pTypes:[], isfunc:true, retval:"", subf:{} };
				guiCallbacks.lstSubf_OnTouch( title );
			break;
		}
		changed = true;
		loadSubfLst();
	},

	lstSamples_OnAction: function( action, title, body, index ) {
		switch( action ) {
			case "Delete":
					//deletes the sample in the samples object
				delete GUI.lstSamples.samples[title];
			break;
			case "Move":
					//create new object with changed key order
				var lst = Object.keys( GUI.lstSamples.samples ), obj = {};

				if( index[0] != index[1] )
					lst = lst.concat( lst.splice( index[0], 1 ), lst.splice( index[1] ) );

				lst.forEach( function( k ) { obj[k] = GUI.lstSamples.samples[k]; } );
				GUI.lstSamples.samples = obj;
			break;
			case "Insert":
				if( !( title = getName( "type the example name" ) ) ) return;
				GUI.edtSCode.SetText( GUI.lstSamples.samples[name] = "" );
				GUI.edtSName.SetText( GUI.lstSamples.title = title );
			break;
		}
		guiCallbacks.btnSaveSamples_OnTouch( false, false );
		loadSampleLst();
	},

	lstSamples_OnTouch: _ObjCbm( function( title ) {
		var sName = GUI.edtSName.GetText();
		if( changed )
			Dlgs.Confirm.show( "Save \"" + sName + "\" first?", function( reply, btn ) {
				if( reply == "Yes" ) guiCallbacks.btnSaveSamples_OnTouch( sName, sCode );
				loadSample( title );
			} );
		else loadSample( title );
	}, true ),

			//get all content from the edit sample layout and save them to samples/
	btnBold_OnTouch: _ObjCbm( function ( nTitle, code ) {
		var s = GUI.edtSCode.GetSelectionStart(), t = GUI.edtSCode.GetSelectionEnd(),
			txt = GUI.edtSCode.GetText(), p;

		while( ( p = txt.indexOf("<b>") ) > -1 ) {
			if( p < s ) s -= 3;
			if( p < t ) t -= 3;
			txt = txt.replace( "<b>", "" );
		}

		while( ( p = txt.indexOf("</b>") ) > -1 ) {
			if( p < s ) s -= 4;
			if( p < t ) t -= 4;
			txt = txt.replace( "</b>", "" );
		}

		GUI.edtSCode.SetText( txt.slice( 0, s ) + "<b>" + txt.slice( s, t ) + "</b>"  + txt.slice( t ) );
		changed = true;
	}, true ),

			//get all content from the edit sample layout and save them to samples/
	btnSaveSamples_OnTouch: function ( nTitle, code ) {
			//get default value if function is called from the button instead of somewhere else (like 8 lines before this)
		if( nTitle == undefined ) nTitle = GUI.edtSName.GetText();
		if( code == undefined ) code = GUI.edtSCode.GetText();

			//check wether title and code are defined
		if( nTitle.length == 0 || code.length == 0 )
			return app.Alert( "please set a title and write come code", "", 255 );

		if( code != false )
				//check wether an area was marked bold and will be able to copy
			if( code.indexOf( "<b>" ) < 0 || code.indexOf( "<b>" ) > code.indexOf( "</b>" ) )
				return app.Alert( " mark it using <b> /*code*/ </b>", "bold area is missing!", "", 255 );

		if( nTitle != false )
				//check wether the title has changed
			if( GUI.lstSamples.title != nTitle ) {
					//delete old
				delete GUI.lstSamples.samples[GUI.lstSamples.title];
					//save new
				GUI.lstSamples.samples[nTitle] = code;
					//save
			} else GUI.lstSamples.samples[nTitle] = code;

			loadSampleLst();

			//generate example.txt file and save it to the samples/ folder
		var title, samples = "";
		for( title in GUI.lstSamples.samples )
			samples += "\n<sample " + title + ">\n" + GUI.lstSamples.samples[title] + "\n</sample>\n";
		app.WriteFile( path + "samples/" + curF.name + ".txt", samples );

		changed = false;
		app.ShowPopup( "saved" );
	},

	switchable_OnTouch: _ObjCbm( function( title, body, img, index ) {
			//extract name if html used
		if( !title.indexOf( "<" ) )
			title = title.slice( title.indexOf( ">" ) + 1, title.lastIndexOf( "<" ) );

			//prevent editing function parameters
		if( body ==	"function" ) return alert( "unfortunately you cannot edit this parameter yet.\nEither you modify it directly in functions.json (if you know how) or you wait for an update." );

		if( this.item == null )
			switch( this.onTouch.constructor.name ) {
				case "Function":
					this.onTouch( title, body, img, index );
				break;
				case "String":
					if( this.onTouch.slice( 0, 7 ) == "_cbMap[" )
						_cbMap[this.onTouch.slice( 7, -1 )]( title, body, img, index );
					else eval( this.onTouch )( title, body, img, index );
				break;
			}
		else {
			var list = this.GetList();
			this.RemoveItemByIndex( index );
			this.InsertItem( this.item, list[index].title, list[index].body );
			if( this.callback ) this.callback( "Move", title, body, [this.item, index] );
			this.item = null;
			changed = true;
		}
	}, true ),

	switchable_OnLongTouch: _ObjCbm( function( title, body, img, index ) {
			//extract name if html used
		if( !title.indexOf( "<" ) )
			title = title.slice( title.indexOf( ">" ) + 1, title.lastIndexOf( "<" ) );

			//prevent editing function parameters
		if( body ==	"function" ) return alert( "unfortunately you cannot edit this parameter yet.\nEither you modify it directly in functions.json (if you know how) or you wait for an update." );

		var lst = this;
		Dlgs.ItemAction.show( function( reply ) {
			switch( reply ) {
				case "Move":
					lst.item = index;
					return app.ShowPopup( "Select the new position" );
				case "Delete":
					lst.RemoveItemByIndex( index );
					if( lst.callback ) lst.callback( reply, title, body, index );
				break;
				case "Insert":
					if( lst.callback ) lst.callback( reply, "", "", index );
				break;
			}
		} );
	}, true )
}