
var Dlgs = {};

	// improved app.CreateYesNoDialog
CreateConfirmDialog = function(title, choices, callback) {
	var dlg = app.CreateDialog(title);
	dlg.reply = null; dlg.btn = null; dlg.btns = [];
	dlg.SetOnTouch = function(callback) { dlg.callback = callback; };
	dlg.Cancel = function() {
		this.Dismiss();
		if(dlg.callback && this.reply != null)
			this.callback(this.reply, this.btn);
		this.reply = null;
		this.btn = null;
	}
	dlg.callback = callback || null;

		dlg.lay = app.CreateLayout("Linear", "Horizontal,VCenter");
		dlg.lay.SetSize(.9, .15)
			for(var i = 0; i < choices.length; i++) {
				dlg.btns[i] = app.CreateButton(choices[i], .215, .1);
				dlg.btns[i].SetOnTouch(dlgCallbacks.confirmOnTouch);
				dlg.btns[i].SetMargins(.005, .005, .005, .005);
				dlg.btns[i].SetTextSize(12);
				dlg.btns[i].reply = choices[i];
				dlg.btns[i].index = i + 1;
				dlg.btns[i].dlg = dlg;
				dlg.lay.AddChild(dlg.btns[i]);
			}

		dlg.AddLayout(dlg.lay);

	return dlg;
}

	// creates all used dialogs
function createDlgs() {
    
	Dlgs.Language = app.CreateDialog("Choose language", "NoCancel");
	Dlgs.Language.SetOnBack(function() {
		if(!firstLoad) Dlgs.Language.Hide();
	});
	Dlgs.Language.show = function(callback) {
		Dlgs.Language.callback = callback || null;
		Dlgs.Language.lang = lang;
		Dlgs.Language.lst.SelectItem(languages.filter(function(l) {
			return l.indexOf("(" + lang + ")") > -1;
		}));
		Dlgs.Language.Show();
	};
		Dlgs.Language.lay = app.CreateLayout("Linear", "VCenter");
		Dlgs.Language.lay.SetPadding(.04, .02, .04, .02);
			Dlgs.Language.lst = app.CreateList(languages, .6, .2);
			Dlgs.Language.lst.SetBackColor("#444444");
			Dlgs.Language.lst.SetOnTouch(dlgCallbacks.languageLst_OnTouch);
			Dlgs.Language.lay.AddChild(Dlgs.Language.lst);

			Dlgs.Language.btnAdd = app.CreateButton("add language", .3, .1);
			Dlgs.Language.btnAdd.SetMargins(0, .02);
			Dlgs.Language.btnAdd.SetOnTouch(dlgCallbacks.languageBtnAdd_OnTouch);
			Dlgs.Language.lay.AddChild(Dlgs.Language.btnAdd);

			Dlgs.Language.edtLname = app.CreateTextEdit("", .6, -1, "singleline,center");
			Dlgs.Language.edtLname.SetMargins(0, .02, 0, .02);
			Dlgs.Language.edtLname.SetBackColor("#444444");
			Dlgs.Language.edtLname.SetHint("language name");
			Dlgs.Language.lay.AddChild(Dlgs.Language.edtLname);

			Dlgs.Language.edtLcode = app.CreateTextEdit("", .6, -1, "singleline,center");
			Dlgs.Language.edtLcode.SetBackColor("#444444");
			Dlgs.Language.edtLcode.SetHint("language code (2 char)");
			Dlgs.Language.edtLcode.SetOnChange(dlgCallbacks.LanguageEdtCode_OnChange);
			Dlgs.Language.lay.AddChild(Dlgs.Language.edtLcode);
			
			Dlgs.Language.btnOk = app.CreateButton("Ok", .3, .1);
			Dlgs.Language.btnOk.SetOnTouch(dlgCallbacks.LanguageBtnOk_OnTouch);
			Dlgs.Language.lay.AddChild(Dlgs.Language.btnOk);
		Dlgs.Language.AddLayout(Dlgs.Language.lay);


		// news dialog
	Dlgs.News = app.CreateDialog("News", "NoCancel");
	Dlgs.News.show = function(lst) {
		Dlgs.News.lst.SetList(lst.join(";;;"), ";;;");
		Dlgs.News.Show();
	};
		Dlgs.News.lay = app.CreateLayout("Linear");
		// Dlgs.News.lay.SetPadding(.1, .05, .1, .05);

            Dlgs.News.lst = app.CreateList("", .9, .8, "html");
            Dlgs.News.lst.SetTextSize(13);
            Dlgs.News.lay.AddChild(Dlgs.News.lst);
            
			Dlgs.News.btnOk = app.CreateButton("Ok", .3, .1);
			Dlgs.News.btnOk.SetOnTouch(dlgCallbacks.NewsBtnOk_OnTouch);
			Dlgs.News.lay.AddChild(Dlgs.News.btnOk);

		Dlgs.News.AddLayout(Dlgs.News.lay);


		// Import as dialog
	Dlgs.Import = app.CreateDialog("Import");
	Dlgs.Import.show = function(callback) {
		Dlgs.Import.callback = callback;
		Dlgs.Import.Show();
	};
		Dlgs.Import.lay = app.CreateLayout("Linear", "VCenter,left");
		Dlgs.Import.lay.SetPadding(.1, .05, .1, .05);

			Dlgs.Import.chkGens = app.CreateCheckBox("generation files");
			Dlgs.Import.lay.AddChild(Dlgs.Import.chkGens);

			Dlgs.Import.chkDocs = app.CreateCheckBox("documentation files");
			Dlgs.Import.chkDocs.SetMargins(0, .02, 0, .02);
			Dlgs.Import.lay.AddChild(Dlgs.Import.chkDocs);

			Dlgs.Import.btnOk = app.CreateButton("Import", .3, .1);
			Dlgs.Import.btnOk.SetOnTouch(dlgCallbacks.ImportBtnOK_OnTouch);
			Dlgs.Import.lay.AddChild(Dlgs.Import.btnOk);

		Dlgs.Import.AddLayout(Dlgs.Import.lay);


		// Export as dialog
	Dlgs.Export = app.CreateDialog("Export");
	Dlgs.Export.show = function(callback) {
		Dlgs.Export.callback = callback;
		Dlgs.Export.Show();
	};
		Dlgs.Export.lay = app.CreateLayout("linear", "vcenter");
		Dlgs.Export.lay.SetPadding(.1, .05, .1, .05);

			Dlgs.Export.btnDS = app.CreateButton("Export to DroidScript", .3, .1);
			Dlgs.Export.btnDS.SetOnTouch(dlgCallbacks.ExportBtnDS_OnTouch);
			Dlgs.Export.lay.AddChild(Dlgs.Export.btnDS);

			Dlgs.Export.delim = app.CreateImage(null, 1, .003);
			Dlgs.Export.delim.SetBackColor("#444444");
			Dlgs.Export.delim.SetMargins(0, .02, 0, .02);
			Dlgs.Export.lay.AddChild(Dlgs.Export.delim);

			Dlgs.Export.chkGens = app.CreateCheckBox("generation files (recommended)");
			Dlgs.Export.lay.AddChild(Dlgs.Export.chkGens);

			Dlgs.Export.chkDocs = app.CreateCheckBox("documentation files");
			Dlgs.Export.lay.AddChild(Dlgs.Export.chkDocs);

			Dlgs.Export.btnOk = app.CreateButton("Export", .3, .1);
			Dlgs.Export.btnOk.SetMargins(0, .02);
			Dlgs.Export.btnOk.SetOnTouch(dlgCallbacks.ExportBtnOK_OnTouch);
			Dlgs.Export.lay.AddChild(Dlgs.Export.btnOk);

		Dlgs.Export.AddLayout(Dlgs.Export.lay);


		// Share via dialog
	Dlgs.Share = CreateConfirmDialog("Choose an action", ["save to Downloads", "share via"]);
	Dlgs.Share.show = function(callb) {
		Dlgs.Share.SetOnTouch(callb);
		Dlgs.Share.Show();
	};


		// Readme/License dialog
	Dlgs.Readme = app.CreateDialog("README", "nocancel");
	Dlgs.Readme.read = !firstLoad;
	Dlgs.Readme.SetOnBack(dlgCallbacks.Readme_OnBack);
	Dlgs.Readme.SetOnCancel(function() { useprg = true; });
		Dlgs.Readme.page = 1 * firstLoad;
		Dlgs.Readme.readme = app.ReadFile("README.md").replace(/\t/g, "  ")
			.replace(/\n/g, "<br>").replace(/  /g, "&#160;&#160;")
			.replace(/"white"/g, "\"#ffffff\"").replace(/<br> /g, "<br>&#160");
		Dlgs.Readme.license = app.ReadFile("LICENSE.md").replace(/\t/g, "  ")
			.replace(/\n/g, "<br>").replace(/  /g, "&#160;&#160;")
			.replace(/<br> /g, "<br>&#160");
		Dlgs.Readme.lay = app.CreateLayout("Linear");
			Dlgs.Readme.scr = app.CreateScroller(.9, .74);
			Dlgs.Readme.scr.SetBackColor("#222222");
			Dlgs.Readme.scr.SetPadding(.03, .02, .03, .02);
			Dlgs.Readme.scr.SetMargins(.03, .02, .03, .02);
				Dlgs.Readme.txt = app.CreateText(
				    firstLoad ? Dlgs.Readme.license : Dlgs.Readme.readme,
				    -1, -1, "left,html,multiline,monospace");
				Dlgs.Readme.txt.SetTextSize(10);
				Dlgs.Readme.scr.AddChild(Dlgs.Readme.txt);
				Dlgs.Readme.lay.AddChild(Dlgs.Readme.scr);

				Dlgs.Readme.btn = app.CreateButton(firstLoad ? "Readme" : "License", -1, .08);
				Dlgs.Readme.btn.SetOnTouch(dlgCallbacks.btnReadme_OnTouch);
			Dlgs.Readme.lay.AddChild(Dlgs.Readme.btn);
		Dlgs.Readme.AddLayout(Dlgs.Readme.lay);


		// save sample dialog (shown if switched to another sample without saving)
	Dlgs.ItemAction = CreateConfirmDialog("Choose an action", ["Delete", "Move", "Insert"]);
	Dlgs.ItemAction.show = function(callb) {
		Dlgs.ItemAction.SetOnTouch(callb);
		Dlgs.ItemAction.Show();
	};


	Dlgs.Confirm = CreateConfirmDialog(" ", ["No", "Yes"]);
	Dlgs.Confirm.show = function(title, callb) {
		Dlgs.Confirm.SetTitle(title);
		Dlgs.Confirm.SetOnTouch(callb);
		Dlgs.Confirm.Show();
	};


		// Documentation preview dialog
	Dlgs.Preview = app.CreateDialog("Preview");
    Dlgs.Preview.Load = function(url) {
        Dlgs.Preview.web.LoadUrl(url);
        showProgress("loading...");
        Dlgs.Preview.web.tmt = setTimeout(hideProgress, 500);
        Dlgs.Preview.Show();
    }
		Dlgs.Preview.lay = app.CreateLayout("absolute");
			Dlgs.Preview.web = app.CreateWebView(1, .9, "ignoreerrors");
			Dlgs.Preview.web.tmt = null;
			Dlgs.Preview.web.SetOnProgress(dlgCallbacks.webPreview_OnProgress);
			Dlgs.Preview.lay.AddChild(Dlgs.Preview.web);
		Dlgs.Preview.AddLayout(Dlgs.Preview.lay);
		
		Dlgs.edtCategsLst = CreateConfirmDialog("Choose an action", ["Add", "Remove"]);
		Dlgs.edtCategsLst.SetOnTouch(guiCallbacks.lstCategs_OnAction);


		// select type dialog
	Dlgs.PType = app.CreateDialog("Choose a type", "nocancel");
	Dlgs.PType.callb = null;
		// switch to previous (main) list or hide dialog
	Dlgs.PType.SetOnBack(dlgCallbacks.dlgTypes_OnBack);
		// callb was called en atype was selected
	Dlgs.PType.show = function(callb, val) {
		Dlgs.PType.callb = callb;
		Dlgs.PType.val = val && val.indexOf("-") > 0 ? val.slice(val.indexOf("-") + 1) : "";
		Dlgs.PType.Show();
	};
		Dlgs.PType.lay = app.CreateLayout("Frame");

		Dlgs.PType.layS = app.CreateLayout("Linear");
			Dlgs.PType.layS.SetVisibility("Hide");
				Dlgs.PType.sTitle = app.CreateText("", -1, -1, "multiline,html");
				Dlgs.PType.layS.AddChild(Dlgs.PType.sTitle);

				Dlgs.PType.sDesc = app.CreateText("<h>Description<h><br><br>\"|\" will be replaced by \" or \"<br>\"&\" will be replaced by \" and \"<br>You can also use tabs and linebreaks<br>unfortunately functions are not supported by the editor yet" , .9, -1, "multiline,html");
				Dlgs.PType.sDesc.SetBackColor("#444444");
				Dlgs.PType.sDesc.SetTextSize(12);
				Dlgs.PType.sDesc.SetMargins(.01, .02, .01, .02);
				Dlgs.PType.sDesc.SetPadding(0, .02, 0, .02);
				Dlgs.PType.layS.AddChild(Dlgs.PType.sDesc);

				Dlgs.PType.edt = app.CreateTextEdit("", .9, .4);
				Dlgs.PType.edt.SetHint("num:\t1|2|3|4\nstr:\t\"left\"|\"right\"&\"html\"\nlst:\t[a,b,c][1,2,3]\nlst:\t[2,3,5,7,11]\nobj:\t{X:0.5,Y:0.39,action:\"Down\"}");
				Dlgs.PType.edt.SetBackColor("#444444");
				Dlgs.PType.edt.SetTextSize(15);
				Dlgs.PType.layS.AddChild(Dlgs.PType.edt);
			Dlgs.PType.lay.AddChild(Dlgs.PType.layS);

			Dlgs.PType.lst = app.CreateList(listTypes, .9, .8, "html");
			Dlgs.PType.lst.main = true;
			Dlgs.PType.lst.SetTextSize(13);
			Dlgs.PType.lst.SetOnTouch(dlgCallbacks.dlgTypesLst_OnTouch);
			Dlgs.PType.lay.AddChild(Dlgs.PType.lst);

			Dlgs.PType.btnOk = app.CreateButton("Ok", -1, .08);
			Dlgs.PType.btnOk.SetOnTouch(dlgCallbacks.dlgTypesBtnOk_OnTouch);
			Dlgs.PType.layS.AddChild(Dlgs.PType.btnOk);
		Dlgs.PType.AddLayout(Dlgs.PType.lay);
}

var dlgCallbacks = {
	confirmOnTouch: _ObjCbm(function() {
		this.dlg.reply = this.reply;
		this.dlg.btn = this.index;
		this.dlg.Cancel();
	}, true),

	languageLst_OnTouch:  _ObjCbm(function(title, body, image, index) {
		Dlgs.Language.lst.SelectItem(title);
		Dlgs.Language.lang = title.slice(-3, -1);
	}, true),

	LanguageEdtCode_OnChange: _ObjCbm(function() {
		var txt;
		Dlgs.Language.edtLcode.SetText(txt = Dlgs.Language.edtLcode.GetText().slice(-2));
		Dlgs.Language.edtLcode.SetCursorPos(txt.length);
	}, true),

	languageBtnAdd_OnTouch: _ObjCbm(function() {
		var name = Dlgs.Language.edtLname.GetText(),
			code = Dlgs.Language.edtLcode.GetText();
		if(name.length < 5 || !validName(code) || code.length != 2)
			return app.ShowPopup("Invalid language name or code");
		if(languages.indexOf(name + " (" + code + ")") > -1)
			return alert("language already exists");
		languages = languages.concat(name + " (" + code + ")").sort(sortAsc);
		app.SaveText("languages", JSON.stringify(languages));

			// create all required files
		app.CopyFile(path + "functions.json", path + "functions-" + code + ".json");
		app.MakeFolder(path + "docs-" + name);
			// needed to check which files does already exist
		docsLst = listFolderSH(path + "docs-" + name);
			// copy other required files from DroidScript folder (reduces spk size)
		["css", "app.js", "js", "javascript"/*, "nxt", "plugins"*/].forEach(function(f) {
			if(docsLst.indexOf(f) == -1)
				app.CopyFolder("/sdcard/DroidScript/.edit/docs/" + f, path + "docs-" + name + "/" + f);
		});

			// update language list
		Dlgs.Language.lst.SetList(languages.join(";;"), ";;");
		Dlgs.Language.lst.SelectItem(name + " (" + code + ")");
			// reset text edits
		Dlgs.Language.edtLname.SetText("");
		Dlgs.Language.edtLcode.SetText("");
	}, true),
	
	LanguageBtnOk_OnTouch: _ObjCbm(function() {
		lang = Dlgs.Language.lang;
			// save current language
		app.SaveText("language", lang);
			// save languages list
		app.SaveText("languages", JSON.stringify(languages));
			// update functions object
		functions = JSON.parse(app.ReadFile(path + "functions" + getl() + ".json"));
			// info alert
		if(lang != "en")
			alert("each document is english by default to have a base you can work with.");
		
		Dlgs.Language.Hide();
		app.ShowPopup("changed language to " + lang);
		Dlgs.Confirm.show("generate docs?", function(reply) {
			if(reply == "Yes") generateDocs();
		});
		
		if(Dlgs.Language.callback)
			Dlgs.Language.callback(lang);
	}, true),
	
	NewsBtnOk_OnTouch: _ObjCbm(function() {
        saveFunctions();
        saveCategories();
        app.SaveText("lastVersion", app.GetDSVersion());
	    Dlgs.News.Hide();
	}, true),
	
	ImportBtnOK_OnTouch: _ObjCbm(function() {
		var lst = [];
		if(Dlgs.Import.chkDocs.GetChecked()) lst.push("docs");
		if(Dlgs.Import.chkGens.GetChecked()) lst.push("gens");
		if(lst.length && Dlgs.Import.callback)
			Dlgs.Import.callback(lst);
	}, true),

	ExportBtnOK_OnTouch: _ObjCbm(function() {
		var lst = [];
		if(Dlgs.Export.chkDocs.GetChecked()) lst.push("docs");
		if(Dlgs.Export.chkGens.GetChecked()) lst.push("gens");
		if(lst.length && Dlgs.Export.callback)
			Dlgs.Export.callback(lst);
	}, true),

	ExportBtnDS_OnTouch: _ObjCbm(function() {
		if(Dlgs.Export.callback)
			Dlgs.Export.callback("DroidScript");
	}, true),

	Readme_OnBack: _ObjCbm(function() {
		if(!Dlgs.Readme.read)
			dlgCallbacks.btnReadme_OnTouch();
		else Dlgs.Readme.Hide();
	}, true),

	btnReadme_OnTouch: function() {
			// allows to switch between Readme and License
		app.ShowProgress();
		Dlgs.Readme.read = true;
		Dlgs.Readme.page = 1 - Dlgs.Readme.page;
		Dlgs.Readme.txt.SetHtml(Dlgs.Readme.page? Dlgs.Readme.license : Dlgs.Readme.readme);
		Dlgs.Readme.btn.SetText(Dlgs.Readme.page? "Readme" : "License");
		app.HideProgress();
	},

	webPreview_OnProgress: _ObjCbm(function() {
		clearTimeout(Dlgs.Preview.web.tmt);
		Dlgs.Preview.web.tmt = setTimeout(hideProgress, 500);
	}, true),

	dlgTypes_OnBack: _ObjCbm(function() {
		if(Dlgs.PType.layS.IsVisible())
			Dlgs.PType.lay.Animate("Flip", null, 300);
		else if(Dlgs.PType.lst.main) Dlgs.PType.Hide();
		else {
			Dlgs.PType.lst.SetList(listTypes.join(";;"), ";;");
			Dlgs.PType.lst.main = true;
		};
	}, true),

	dlgTypesLst_OnTouch: _ObjCbm(function(desc, type) {
			// if main list shown
		if(Dlgs.PType.lst.main) {
				// if there are other special types of the type
			if(desc.indexOf(">") > -1) {
					// show special types
				Dlgs.PType.lst.SetList("..;;" + listHrefs.filter(function(n) {
					return n.indexOf(type) > -1;
						// sort by body texts (type abbreviarions)
				}).sort(function(a, b) {
					return a.split(":")[1] > b.split(":")[1]? 1 : -1;
				}).join(";;"), ";;");
				Dlgs.PType.lay.SetSize(Dlgs.PType.lay.GetWidth(), crop(1*Dlgs.PType.lst.GetHeight(), 0, .8));
				Dlgs.PType.lst.main = false;
			} else if(["num", "str", "lst", "obj", "fnc"].indexOf(type.slice(0, 3)) > -1) {
				Dlgs.Confirm.show("specify possible values?", function(reply) {
					if(reply == "Yes") {
						Dlgs.PType.sTitle.SetHtml("<font size=\"15pt\"><b>" + type + "</b><font><br><font size=\"10pt\">" + (hrefs[type] || typenames[type.slice(0,3)]) + "</font>");
						if(Dlgs.PType.val) Dlgs.PType.edt.SetText(Dlgs.PType.val);
						Dlgs.PType.lay.Animate("Flip", null, 300);
					} else {
						Dlgs.PType.callb(type);
						Dlgs.PType.callb = null;
						Dlgs.PType.Hide();
					}
				});
			} else {
				Dlgs.PType.callb(type);
				Dlgs.PType.callb = null;
				Dlgs.PType.Hide();
			}
		} else { // if there arent special types
			 if(["num", "str", "lst", "obj", "fnc"].indexOf(type.slice(0, 3)) > -1) {
				Dlgs.Confirm.show("specify possible values?", function(reply) {
					if(reply == "Yes") {
						Dlgs.PType.sTitle.SetHtml("<font size=\"15pt\"><b>" + type + "</b><font><br><font size=\"10pt\">" + (hrefs[type] || typenames[type.slice(0,3)]) + "</font>");
						if(Dlgs.PType.val) Dlgs.PType.edt.SetText(Dlgs.PType.val);
						Dlgs.PType.lay.Animate("Flip", null, 300);
					} else {
						Dlgs.PType.callb(type);
						Dlgs.PType.callb = null;
						Dlgs.PType.Hide();
					}
					Dlgs.PType.lst.SetList(listTypes.join(";;"), ";;");
					Dlgs.PType.lst.main = true;
				});
			} else if(desc != "..") {
					// return type
				Dlgs.PType.callb(type);
				Dlgs.PType.callb = null;
				Dlgs.PType.Hide();
			}
			Dlgs.PType.lst.SetList(listTypes.join(";;"), ";;");
			Dlgs.PType.lst.main = true;
		}
	}, true),

	dlgTypesBtnOk_OnTouch: _ObjCbm(function() {
		var s = Dlgs.PType.edt.GetText();
		if(s.replace(/\s/g, ""))
			Dlgs.PType.callb(Dlgs.PType.sTitle.GetText().split("\n")[0] + "-" + s);
		else Dlgs.PType.callb(Dlgs.PType.sTitle.GetText().split("\n")[0]);
		Dlgs.PType.callb = null;
		Dlgs.PType.Hide();
	}, true)
}
