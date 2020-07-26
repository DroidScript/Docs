cfg.Holo;

(function(){

var conf = loadConf({theme:"dark",h:1000,version:0,samp:null});
var path = app.GetAppPath() + "/";

if(conf.samp) {
	app.Script(conf.samp);
	updConf("samp", null);
} else {
	OnStart = _OnStart;
	OnBack = _OnBack;
	RunDemo = _StartApp;
}

function _OnStart()
{
	app.SetOrientation(app.GetOrientation());
	
	dlgUpd = app.CreateDialog( "Available Updates", "NoCancel" );
	lstUpd = app.CreateList( "", 0.8, 0.5 );
	CheckUpdate();
	dlgUpd.SetOnBack( function()
	{
		if(conf.version) dlgUpd.Hide();
		else app.ShowPopup("You need to download the docs first.");
	});
	lstUpd.SetOnTouch( Download );
	dlgUpd.AddLayout( lstUpd );
	
	
	lay = app.CreateLayout( "linear", "Left,FillXY" );
	
	prgBar = app.CreateImage( null, 1, 5/conf.h, "fix", 100, 5 );
	prgBar.SetBackColor( "#5555ff" );
	lay.AddChild( prgBar );

	webDocs = app.CreateWebView( 1, .95, "NoLongTouch,IgnoreErrors,ScrollFade" );
	webDocs.LoadUrl( "docs/Docs.htm?theme=" + conf.theme );
	if(conf.theme == "dark") webDocs.SetBackColor("#333333");
	var tmt = 0;
	webDocs.SetOnProgress( function(p)
	{
		var url = webDocs.GetUrl().replace("file://" + path, "");
		edtUrl.data.url = url;
		edtUrl.SetText( url );
		
		if(tmt) clearTimeout(tmt);
		if(p !=  10) prgBar.SetSize( p/100 );
		if(p == 100) tmt = setTimeout(function() { prgBar.SetSize( 0 ); tmt = 0; }, 500);
	});
	webDocs.SetOnConsole( function(s)
	{
		console.log(s.fontcolor("grey"));
		if(s.startsWith("setTheme('")) updConf("theme", s.slice(10, s.lastIndexOf("'")));
	});
	lay.AddChild( webDocs );
	
	txtBtn = app.CreateText( "▲", 1, -1, "AutoSize" );
	txtBtn.SetBackGradient( "#111111", "#333333" );
	txtBtn.data.open = false;
	txtBtn.SetOnTouchUp( ToggleSettings = function()
	{
		var o = txtBtn.data.open;
		txtBtn.data.open = !o;
		laySet.Animate("Scale" + (o ? "To" : "From") + "Bottom");
		txtBtn.SetText(o ? '▲' : '▼');
	});
	lay.AddChild( txtBtn );
	
	app.AddLayout( lay );
	
	webDocs.SetSize( 1, 1 - prgBar.GetHeight() - txtBtn.GetHeight() );
	
	layB = app.CreateLayout("linear", "FillXY,TouchThrough,Bottom");
	
	laySet = app.CreateLayout( "linear", "FillX,TouchThrough" );
	laySet.SetMargins( 0, 0, 0, txtBtn.GetHeight() );
	laySet.SetBackColor( "#cc000000" );
	layB.AddChild( laySet );
	laySet.Hide();
	
	var layH = app.CreateLayout("linear", "horizontal");
	laySet.AddChild( layH );
	
	edtUrl = app.CreateTextEdit( "docs/Docs.htm", .7, -1, "singleline" );
	edtUrl.SetTextSize( 14 );
	edtUrl.SetOnEnter( function() { webDocs.LoadUrl( edtUrl.GetText() ); });
	edtUrl.SetHint( laySet );
	layH.AddChild( edtUrl );
	
	btnReload = app.CreateButton("[fa-refresh]", .1, -1, "fontawesome");
	btnReload.SetOnTouch( webDocs.Reload );
	btnReload.SetTextSize( 14 );
	layH.AddChild( btnReload );
	
	var layH = app.CreateLayout("linear", "horizontal");
	laySet.AddChild( layH );
	
	edtAnchor = app.CreateTextEdit( "", .6, -1, "singleline" );
	edtAnchor.SetHint( "HTML anchor" );
	edtAnchor.SetTextSize( 14 );
	edtAnchor.SetOnEnter( LoadAnchor = function(c)
	{
		webDocs.Execute("jumpTo('" + edtAnchor.GetText() + "')");
	})
	layH.AddChild( edtAnchor );
	
	btnAnchor = app.CreateButton( "Set" );
	btnAnchor.SetTextSize( 14 );
	btnAnchor.SetOnTouch( LoadAnchor );
	layH.AddChild( btnAnchor );
	
	layH = app.CreateLayout("linear", "horizontal");
	laySet.AddChild( layH );
	
	btnCancel = app.CreateButton("[fa-close]", .1, -1, "fontawesome");
	btnCancel.SetOnTouch( app.Exit );
	btnCancel.SetTextColor( "red" );
	btnCancel.SetTextSize( 14 );
	layH.AddChild( btnCancel );
	
	chkDark = app.CreateCheckBox( "Dark Theme" );
	chkDark.SetChecked( conf.theme == "dark" );
	chkDark.SetMargins( .05, 0, .05 );
	chkDark.SetTextSize( 14 );
	chkDark.SetOnTouch( function(c)
	{
		webDocs.Execute( 'setTheme("' + (c ? "dark" : "default") + '")' );
	} );
	layH.AddChild( chkDark );
	
	yndUpdDS = app.CreateYesNoDialog("Update DroidScript docs?");
	yndUpdDS.SetOnTouch( function(res) { if(res == "Yes") UpdateDSDocs(); });
	
	btnUpdate = app.CreateButton( "Update" );
	btnUpdate.SetOnTouch( CheckUpdate );
	layH.AddChild( btnUpdate );
	btnUpdDS = app.CreateButton( "Update DS" );
	btnUpdDS.SetOnTouch( yndUpdDS.Show );
	layH.AddChild( btnUpdDS );
	
	app.AddLayout( layB );
	
	var h = edtAnchor.GetHeight();
	btnCancel.SetSize( -1, h );
	btnReload.SetSize( -1, h );
	btnAnchor.SetSize( -1, h );
	btnUpdate.SetSize( -1, h );
	btnUpdDS.SetSize( -1, h );
	ToggleSettings();

	yndStart = app.CreateYesNoDialog("Close preview and Start sample?");
	yndStart.SetOnTouch( function(res)
	{
		if(res == "Yes")
		{
			app.SetAlarm("Set", cfg.version, null, Date.now() + 300);
			app.Exit();
		}
		else updConf("samp", null);
	});
	
	app.EnableBackKey( false );
}

function _OnBack()
{
	if(webDocs.CanGoBack()) webDocs.Back();
	else if(laySet.IsVisible()) ToggleSettings();
	else app.Exit();
}

function loadConf(dflt)
{
	conf = dflt;
	var _conf = app.LoadText("DocsPreviewCfg", false);
	
	if( _conf )
	{
		_conf = JSON.parse(_conf);
		for(var i in _conf) conf[i] = _conf[i];
	}
	else conf.h = app.GetDisplayHeight();
	
	if(!app.FolderExists("docs")) conf.version = 0;
	else conf.version = Number(app.ReadFile("docs-version.txt")) || conf.version;
	
	return conf;
}

function updConf(name, value)
{
	if(name != null) conf[name] = value;
	app.SaveText( "DocsPreviewCfg", JSON.stringify(conf) );
	if(name != null) return value;
}

function a(v) { alert(JSON.stringify(v)); return v; }
function cmp(a, b) { return (a -= b) ? a < 0 ? -1 : 1 : 0; }

function CheckUpdate()
{
	var rv = 0, _e, startup = !app.IsStarted();
	lstUpd.SetList("Loading...: : ");
	if( !startup || !conf.version ) dlgUpd.Show();
	
	app.HttpRequest("GET", "https://raw.githubusercontent.com/",
		"DroidScript/Docs/master/docs/version.txt", null,
		function(e, version)
		{
			if(e) return !_e && !startup && app.Alert(_e = version);
			
			if(conf.version < (rv = version))
				lstUpd.AddItem("Docs: " + version,
					"Release date: " + new Date((version / 1000 | 0) * 864e5).toLocaleDateString().replace(/\//g, '.') +
					"\nCurrent: " + conf.version);
		}
	);
	
	app.HttpRequest("GET", "https://raw.githubusercontent.com/",
		"alex-Symbroson/Docs/master/docs/version.txt", null,
		function(e, version)
		{
			if(e) return !_e && !startup && app.Alert(_e = version);
			
			if(conf.version < version && rv < version)
				lstUpd.AddItem("Docs (Beta): " + version,
					"Release date: " + new Date((version / 1000 | 0) * 864e5).toLocaleDateString().replace(/\//g, '.') +
					"\nCurrent: " + conf.version);
		}
	);
	
	app.HttpRequest("GET", "https://dspk.justplayer.de/", "api/file/66", null,
		function(e, file)
		{
			setTimeout(Ready);
			if(e) return !_e && startup && app.Alert(_e = file);
			
			file = JSON.parse(file);
			if(file.error) return !_e && !startup && app.Alert(_e = file.message);
			file = file.message;
			
			var desc = file.description.cleartext;
			
			var p = desc.indexOf("DocsPreview Version: ");
			var newver = Number(desc.slice(p + 21, desc.indexOf("\n", p) + 1 || undefined));
			var curver = Number(app.ReadFile("version.txt"));
			
			if(curver < newver)
			{
				p = desc.indexOf("Docs Version: ");
				lstUpd.AddItem(
					"DocsPreview: " + newver,
					"Release date: " + new Date((file.update_time / 86400 | 0) * 864e5).toLocaleDateString().replace(/\//g, '.') +
					"\nCurrent:    " + curver + (p + 1 ? 
					"\nDocs ver: " + desc.slice(p + 14, desc.indexOf("\n", p) + 1 || undefined) +
					"\nCurrent:    " + conf.version : ""));
			}
		}
	);
	
	function Ready()
	{
		lstUpd.SetItemByIndex( 0, "Refresh", lstUpd.GetLength() > 1 ? "Updates found." : "No updates available." );
		
		if( startup && conf.version && lstUpd.GetLength() > 1 )
		{
			var ynd = app.CreateYesNoDialog("There are updates available. Update now?");
			ynd.SetOnTouch( function(res) { if(res == "Yes") dlgUpd.Show(); });
			ynd.Show();
		}
	}
}

function Download( item )
{
	if(item == "Refresh") return CheckUpdate();
	app.MakeFolder("tmp");
	
	var dl = app.CreateDownloader();
	dl.SetOnCancel( function(f) { app.ShowPopup("Download aborted"); } );
	dl.data.version = Number(item.slice(item.indexOf(":") + 2));
	dl.SetOnError( app.ShowPopup );
			
	if(item.startsWith("Docs") && !item[4].match(/[a-z]/i))
	{
		var url = "https://github.com/" + (item.indexOf("(Beta)" > -1) ? "alex-Symbroson" : "DroidScript") + "/Docs/archive/master.zip";
		dl.Download( url, path + "tmp", "master.zip" );
		dl.SetOnDownload( ExtractDocs );
	}
	else if(item.startsWith("DocsPreview"))
	{
		var url = "https://dspk.justplayer.de/api/file/66/download";
		dl.Download( url, path + "tmp", "DocsPreview.spk" );
		dl.SetOnDownload( ExtractSpk );
	}
}

function ExtractDocs( file, newversion )
{
	app.ShowProgressBar("Updating", 0);
	if(file && !file.endsWith("/"))
	{
		app.Wait(0);
		app.UnzipFile( file, path + "tmp" );
		file = "tmp/Docs-master/docs/";
	}
	
	if(!app.FolderExists(file))
	{
		app.Alert("Failed to extract zip file.");
		return app.HideProgressBar();
	}
	
	app.UpdateProgressBar(25);
	app.DeleteFolder("font-awesome");
	app.DeleteFolder("docs");
	app.DeleteFile("app.js");
	app.DeleteFile("docs-version.txt");
	
	app.UpdateProgressBar(50);
	app.RenameFolder(file + "docs", "docs");
	app.RenameFolder(file + "font-awesome", "font-awesome");
	app.RenameFile(file + "app.js", "app.js");

	app.RenameFile(file + "version.txt", "docs-version.txt");
	updConf("version", newversion || Number(app.ReadFile("docs-version.txt")));
	
	app.UpdateProgressBar(75);
	app.DeleteFolder("tmp");
	app.UpdateProgressBar(100);
	
	if(file) webDocs.Reload();
	app.HideProgressBar();
	dlgUpd.Hide();
}

function renameJs(dir, n)
{
	var lst = app.ListFolder(dir, ".js.txt", null, "files");
	for(var i in lst) app.RenameFile(dir + lst[i], dir + lst[i].replace(".js.txt", ".js"));
	if(n === 0) return;
	
	var lst = app.ListFolder(dir, null, null, "folders");
	for(var i in lst) renameJs(dir + lst[i] + "/", n - 1);
}

function ExtractSpk( file, newversion )
{
	app.ShowProgressBar("Extracting", 0);
	if(file)
	{
		app.Wait(0);
		app.UnzipFile( file, path + "tmp" );
		
		renameJs("tmp/DocsPreview/", 0);
		renameJs("tmp/DocsPreview/docs/js/", 5);
	}
	
	if(!app.FolderExists("tmp/DocsPreview"))
	{
		app.Alert("Failed to extract zip file.");
		return app.HideProgressBar();
	}
	
	app.UpdateProgressBar(25);
	app.DeleteFolder("Img");
	app.DeleteFile("version.txt");
	app.DeleteFile("DocsPreview.js");
	
	app.UpdateProgressBar(50);
	var newver, lst = app.ListFolder("tmp/DocsPreview");
	for(var i in lst)
		if("font-awesome,docs,app.js".indexOf(lst[i]) == -1)
			app.RenameFile("tmp/DocsPreview/" + lst[i], lst[i]);

	if((newver = Number(app.ReadFile("tmp/DocsPreview/docs/version.txt"))) > conf.version)
	{
		app.RenameFolder("tmp/DocsPreview", "tmp/docs");
		ExtractDocs("tmp/", newver);
	}
	else
	{
		app.UpdateProgressBar(75);
		app.DeleteFolder("tmp");
		app.UpdateProgressBar(100);
	}
	
	app.SetAlarm("Set", cfg.version, null, Date.now() + 300);
	app.Exit();
}

function UpdateDSDocs()
{
	app.ShowProgress("Removing old docs");
	app.DeleteFolder("/sdcard/DroidScript/.edit/docs");
	
	app.ShowProgress("Copying new docs");
	app.CopyFolder("docs", "/sdcard/DroidScript/.edit/docs");
	
	app.HideProgress();
	app.ShowPopup("Done.");
}

function _StartApp(file)
{
	updConf("samp", file);
	yndStart.Show();
}

})();
