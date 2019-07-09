
	// declare global variables
var
    // hide functions and methods which are matching this regex
	regHide = /_[\w\W]*|Destroy|Release|CreateObject|data|id/g,
		// defined in OnStart or later
	functions, categories, info, tchd,
	listHrefs, listTypes, listFolderSH,
	controlArgs, lang = "en",
		// current edited app control object
	control,
		// defined true after modifying smth, false after saving
	changed = false,
		// true when all controls are loaded
	loaded = false,
		// can disable progress at the beginning if sdcard folder doesnt exist
	useprg = true,
		// app sdcard path
	path = "/sdcard/DocsModifier/",
		// true if app loaded first time
	firstLoad = !app.FolderExists(path),
		// available languages
	languages = JSON.parse(app.LoadText("languages", '["English (en)", "Español (es)", "Português (pt)", "Russian (ru)"]'));;

	// called when application started
function OnStart() {
		// prevent app closing when errors occures and show file, line and error msg
	app.SetOnError(error);
		// disable debugging to improve performance
	app.SetDebugEnabled(false);
		// just for debugging
	// app.SetOnDebug(function(s){if(s.indexOf(":")>-1)alert(s)});
		// fix current orientation
	app.SetOrientation(app.GetOrientation());

		// ask user to use 20MB space (uses 12 after extracting + tolerance after changes)
	if(!app.FolderExists(path) || !app.LoadBoolean("agreed", false)) {
		var free = Math.floor(1000*app.GetFreeSpace("Internal")).toString();
		free = (free < 10? alert : prompt)(
			"You need to have at least 10 MB free space in your internal storage.\nYou have " +
			free + "MB available." + (free < 10? "App will exit!" :
			"Type \"agree\" to continue")) || "";
		if(free.toLowerCase().indexOf("agree") < 0) return app.Exit();
		else app.SaveBoolean("agreed", true);
		app.ShowPopup("agreed");
	}

    if(Object.keys) keys = Object.keys;
    if(Object.values) values = Object.values;
    
		// loads all source files
	showProgress("loading sources...");
	app.LoadScript("Dialogs.js", function() {
		app.LoadScript("Generate.js", function() {
			app.LoadScript("appGUI.js", OnLoadScript);
		});
	});
}

function OnLoadScript() {
		// local variables
			// get 2 char language code
	var lc = app.GetLanguageCode().slice(0, 2),
		docsLst,
			// define sys proc object for sheell commands
		sys = app.CreateSysProc("sh");

	// define some globals
		// faster listFolder function using the android shell
	listFolderSH = function(path) {
		return app.ListFolder(path, "", null, "folders")
			.map(function(name) { return name + '/'; })
			.concat(app.ListFolder(path, "", null, "files"));
		/*
		sys.Out("ls -l \"" + path + "\"\n");
		var s, lst, i = 0;
		while((lst = sys.In(10, "nowait")) == "" && ++i < 10);
		while(s = sys.In(100, "nowait")) lst += s;
		alert(lst)
		return lst.split("\n").slice(0, -1).map(function(file) {
			var info = file.split(/[0-9][0-9]:[0-9][0-9]\s/),
				name = info[1];
			if(info[0][0] == "d") name += "/";
			return name;
		});
		*/
	};

		// item format: (title: typename, body: description)
	listHrefs = keys(hrefs).map(function(n) {
		return n.length < 8? ((hrefs[n].replace(/:/g, "^c^") || typenames[n]) + ":" + n + ": ") : "";
	}).sort(sortAsc);

		// item format: (title:full name  [> num_specifications], body:abbreviation)
	listTypes = keys(typenames).map(function(n) {
			// get the number of special types of a basic one
		var len = listHrefs.filter(function(desc) {
			return desc.indexOf(":") == -1? false : !desc.split(":")[1].indexOf(n);
		}).length;
			// if theres just one special type it is the type itself
		if(len < 2) len = 0;
			// returns the formatted item
		return typenames[n] + (len? "\t> " + len : "") + ":" + n + ": ";
	}).sort(sortAsc);
		// add item which represents no return value
	listTypes.unshift("nothing:: ");

		// creates all dialogs
	createDlgs();

	if(firstLoad) {
			// causes empty progress messages
		useprg = false;
			// create /sdcard/DocsModifier folder
		app.MakeFolder(path);
			// show Readme dialog
		Dlgs.Readme.Show();
	}

		// extract assets without overriding them
	showProgress("extracting assets...");
		// extract assets folder to sdcard without overriding them
	app.ExtractAssets("assets", path);
		// do for each docs* folder
	app.ListFolder(path, "docs").forEach(function(d) {
			// needed to check which files does already exist
		docsLst = listFolderSH(path + d);
			// copy other required files from DroidScript folder (reduces spk size)
		["css", "app.js", "js", "javascript"/*, "nxt", "plugins"*/].forEach(function(f) {
			if(docsLst.indexOf(f) == -1)
				if(f.indexOf('.') == -1)
					app.CopyFolder("/sdcard/DroidScript/.edit/docs/" + f, path + d + "/" + f);
				else app.CopyFile("/sdcard/DroidScript/.edit/" + f, path + d + "/" + f);
		});
	});

		// get last used language
	lang = app.LoadText("language", "");
		// select language if app started first time
	if(lang && !firstLoad) OnLoad();
	else Dlgs.Language.show(OnLoad);
}

	// called after all (re)sources loaded
function OnLoad() {
	// define declared globals
    
		// load all functions
	if(getl() && !app.FileExists(path + "functions" + getl() + ".json"))
	    app.CopyFile(path + "functions.json", path + "functions" + getl() + ".json")
	functions = JSON.parse(app.ReadFile(path + "functions" + getl() + ".json") || "{}");
	
		// load categories {category: [items]} and add the "all" section
	if(getl() && !app.FileExists(path + "categories" + getl() + ".json"))
	    app.CopyFile(path + "categories.json", path + "categories" + getl() + ".json")
	categories = JSON.parse(app.ReadFile(path + "categories" + getl() + ".json") || "{}");
	
	categories.All = {};
	for(var f in functions) categories.All[f] = f + ".htm";
	controlArgs = JSON.parse(app.ReadFile(path + "controlArgs.json") || "{}");
	
	showProgress("loading GUI...");
	createGUI();
	
	app.SetDebugEnabled(false);
	
	app.ShowPopup("DS Version: " + app.GetDSVersion());
	if(app.LoadText("lastVersion", "") != app.GetDSVersion()) loadNews();

	loadCategs();
	hideProgress();

	loaded = true;
	firstLoad = false;
	app.SetDebugEnabled(true);
}

function loadNews() {
    // update app functions
	var news = [];
	
	for(var i in app) {
	    // remove hidden app functions
	    if(hidden(i)) {
	        if(functions[i]) {
	            news.push("- ".fontcolor("red") + i + markFunc(functions[i]));
	            delete functions[i];
	        }
	        continue;
	    }
	    
	    // add new app functions
	    if(!functions[i]) {
			news.push("+ ".fontcolor("green") + i + markFunc(app[i]));
			functions[i] = getBaseFuncObj(i, app[i]);
		}
		
		if(isControl(i)) {
            // create temp control
			var ctrl = loadControl(i, getArgs(app[i]));
			if(!ctrl) continue;

            for(var j in ctrl) {
                // remove hidden subfunctions
		        if(hidden(j)) {
        	        if(functions[i].subf[j]) {
        	            news.push("- ".fontcolor("red") + i + "." + j + markFunc(functions[i].subf[j]));
        	            delete functions[i].subf[j];
        	        }
        	        continue;
        	    }
	    
                // add new subfunctions
	            if(!functions[i].subf[j] && ctrl[j]) {
			        news.push("+ ".fontcolor("green") + i + "." + j + markFunc(ctrl[j]));
		    		functions[i].subf[j] = getBaseFuncObj(j, ctrl[j]);
			    }
		    }
		    
            // remove deleted subfunctions
		    for(var j in functions[i].subf) {
	            if(!ctrl[j]) {
			        news.push("- ".fontcolor("red") + i + "." + j + markFunc(functions[i].subf[j]));
		    		delete functions[i].subf[j];
			    }
		    }

            // destroy temp control
		    if(controlArgs[i])
    		    if(ctrl.Destroy) ctrl.Destroy();
	    }
    }
    
    // remove deleted app functions
    for(var i in functions) {
	    if(hidden(i)) continue;
	    if(!app[i]) {
			news.push("- ".fontcolor("red") + i + markFunc(functions[i]));
			delete functions[i];
			for(var j in categories)
			    delete categories[j][i];
		}
    }
    
    hideProgress();
    if(news.length) Dlgs.News.show(news);
	delete news;
}

    // get control object
function loadControl(name, pNames) {
    var obj, args = [];
    
        // one heck of a workaround for websockets trying to reopen
    if(name == "CreateWebSocket") {
        t_WebSocket   = WebSocket;
        t_setInterval = setInterval;
        WebSocket   = function() {};
        setInterval = function() {};
        var ws = app.CreateWebSocket("#-1","127.0.0.1");
        WebSocket   = t_WebSocket;
        setInterval = t_setInterval;
        obj = ws;
    } else if(controlArgs[name]) {
        obj = app[name].apply(this, controlArgs[name]);
    } else {
        var con = controlName(name);
        obj = window[con] ? window[con]("#-1") : null;
    }
    
    while(!obj) {
		args = prompt("type the argument list\napp." + name + 
			"(" + pNames + ')\n\nie: "Linear", "FillXY,VCenter"');
		if(args == null) return false;
		
		try { args = JSON.parse("[" + args + "]") } 
		catch(e) { alert("args invalid: " + e); };
		
		try { obj = app[name].apply(this, args); }
		catch(e) { alert("creation failed: " + e); obj = null; }
	}
	
	if(args.length) {
		controlArgs[name] = args;
		saveControlArgs();
	}
	return obj;
}

	// called when back button pressed
function OnBack() {
    
	switch(vis) {
	    
		case 1: // edit layout shown
			if(changed) { // ask for saving before cancel if smth was changed
				Dlgs.Confirm.show("Save \"" + curF.name + "\" first?", function(reply, btn) {
					if(reply == "Yes") guiCallbacks.btnSaveDoc_OnTouch(true);
					GUI.layEdit.Animate("SlideToRight");
					GUI.layStart.SetTouchable(true);
					changed = false;
					vis = 0;
				});
			} else {
				GUI.layEdit.Animate("SlideToRight");
				GUI.layStart.SetTouchable(true);
				vis = 0;
			}
		break;
		
		case 2: // edit examples layout shown
			var sName = GUI.edtSName.GetText(),
				sCode = GUI.edtSCode.GetText();
				// ask for saving when smth has changed and title and code are valid
			if(changed && sName && sCode)
				Dlgs.Confirm.show("Save \"" + sName + "\" first?", function(reply, btn) {
					if(reply == "Yes") guiCallbacks.btnSaveSamples_OnTouch(sName, sCode);
					GUI.layEdit.SetTouchable(true);
					GUI.laySamples.Animate("SlideToRight");
					changed = false;
					vis = 1;
				});
			else {
				GUI.layEdit.SetTouchable(true);
				GUI.laySamples.Animate("SlideToRight");
				vis = 1;
			}
		break;
		
		case 3: // subfunction loaded
			curF = functions[doc];
			vis = 1; doc = "";
				// not needed because subfunctions shouldnt have more subfunctions
			GUI.btnEdtSamp.SetEnabled(true);
			loadDoc(curF);
		break;
		
		default: // 0: start layout shown
			if(cat) loadCategs(cat = "");
			else Dlgs.Confirm.show("Do you really want to exit?", function(reply) {
				if(reply == "Yes") app.Exit();
			});
	}
}

function getBaseFuncObj(name, func) {
	var isObj = isControl(name), args = func.toString(), isFunc = args.indexOf("function");
	isFunc = isFunc > -1 && isFunc < 9;
	args = isFunc? getArgs(args) : [];
	return {
		abbrev: isObj? getAbbrev(name) : "",
		desc:   name,   isfunc:  isFunc,
		name:   name,   pNames:  args,
		retval: "",   shortDesc: name,
		pTypes: isFunc? args.map(function() { return "?"; }):[],
		subf: {}
	};
}

	// change the content of each control on the edit layout dependent on the function object
function loadDoc(f) {
	curF = f;
	if(control && control.Destroy) control.Destroy();
	var isObj = isControl(f.name), tchd = false;
	
	GUI.lstSubf.SetVisibility(isObj? "Show" : "Hide");
	GUI.lstParams.SetVisibility(f.isfunc? "Show" : "Hide");
	GUI.btnRType.SetVisibility(isObj? "Hide" : "Show");
	GUI.edtAbbrev.SetVisibility(isObj? "Show" : "Hide");

	GUI.txtName.SetText(f.name || "");
	GUI.edtDesc.setText(f.desc || "");
	
	if(!f.shortDesc && isObj) {
		GUI.edtShortDesc.SetText("returns a " + f.name.slice(6) + " object.");
		tchd = true;
	} else GUI.edtShortDesc.SetText(f.shortDesc || "");

	if(isObj) {
		if(!f.abbrev) {
			f.abbrev = getAbbrev(f.name);
			tchd = true;
		}
		GUI.edtAbbrev.SetText(f.abbrev);
		GUI.edtAbbrev.temp = f.abbrev;
	} else GUI.btnRType.type = f.retval;

	if(isObj && app[f.name]) {
		if(!(control = loadControl(f.name, f.pNames))) return false;
	} else control = null;
	
	loadSubfLst();
	loadPreview();
	loadParamLst();
	changed = tchd;
	return true;
}

	// change lstCategs list depending on the current category
function loadCategs(categ) {
	categ = categ == undefined? cat : categ;
	var add = "";
	if(categ) {
		GUI.lstCategs.SetList([".."]
			.concat(keys(categories[categ])
			.sort(sortAsc)
			.map(function(name) {
				var col = "";
				if(!functions[name]) functions[name] = emptyFunc(name);
				if(!functions[name].isfunc || hidden(name)) col = "grey";
				if(!app[name]) col = "black";
				else if(add = isIncomplete(functions[name])) col = "yellow";
	            return col? name.fontcolor(col) + " " + add.toString().fontcolor("grey") : name;
			}))
			.concat("+")
			.join(";;"),
			";;"
		);
	} else {
		var f, lst = [];
		for(categ in categories)
			lst.push(categ + ":" + keys(categories[categ]).length + ": ");
	    console.log(26)
		GUI.lstCategs.SetList(lst.sort(sortAsc).concat("+").join(";;"), ";;");
	}
}

	// reloads the preview of the constructor line
function loadPreview() {
	GUI.edtPreview.SetHtml(funcLine(curF.name, curF.pNames, curF.retval));
}

	// reloads the parameter list of the edit layout
function loadParamLst() {
	var lst = [];
	for(var i = 0; i < curF.pNames.length; i++)
		lst.push(curF.pNames[i] + ":" + (curF.pTypes[i].constructor.name == "Object"? "function" : curF.pTypes[i]) + ": ")
	GUI.lstParams.SetList(lst.join(";;"), ";;");
}

	// update examples list
function loadSampleLst() {
	GUI.lstSamples.SetList(keys(GUI.lstSamples.samples).concat("+").join(";;"), ";;");
}

	// updates subfunction list
function loadSubfLst() {
	GUI.lstSubf.SetList(keys(curF.subf).map(function(name) {
		var col = "", add = "";
		var args = curF.subf[name].isfunc? ":" + funcLine(curF.subf[name].name, curF.subf[name].pNames, curF.subf[name].retval) + ": " : "::";
		if(!curF.subf[name].isfunc || hidden(name)) col = "grey";
		else if(control && !control[name]) col = "black";
		else if(add = isIncomplete(curF.subf[name])) col = "yellow";
		return (col? name.fontcolor(col) : name)  + " " + add.toString().fontcolor("grey") + args;
		// 	.replace("<b>", "").replace("</b>", "") + ": ";
	}).join(";;"), ";;");
}

	// change the content of each control on the edit examples layout
function loadSample(title) {
	if(title == "+") return guiCallbacks.lstSamples_OnAction("Insert");
	else GUI.edtSCode.SetText(GUI.lstSamples.samples[title]);
	GUI.edtSName.SetText(GUI.lstSamples.title = title);
	changed = false;
}

// helping functions
	// locks screen if GUI loaded to prevent errors
function showProgress(msg) { if(useprg) app.ShowProgress(msg); if(loaded) GUI.layMain.SetTouchable(false); }
	// shows an error dialog
function error(msg, line, file) { app.Alert(file + ": error at line " + line + "\n\n" + msg, "notitle"); }
	// reenables screen if GUI loaded
function hideProgress(msg) { app.HideProgress(msg); if(loaded) GUI.layMain.SetTouchable(true); }
	// function for Array.sort() with ascending values
function sortAsc(a, b) { return a.toString().toLowerCase() > b.toString().toLowerCase()? 1 : -1 }
	// let the user type a string until it is valid
function getName(msg) { var s; while(!validName(s = prompt(msg))); return s; }
    // match hidden functions
function hidden(name) { return name.replace(regHide, "").length == 0; }
	// crop number to given range
function crop(n, min, max) { return n < min? min : max != undefined && n > max? max : n; }
	// returns wether a string is alphanumerical and not empty
function validName(s) { return s? s.trim().length : s == null; }
	// returns "-language_code" of the current language (nothing if english)
function getl(l) { if(l == undefined) l = lang; return l == "en"? "" : "-" + l; }
	// returns a list of keys in an object
function keys(o) { var arr = []; for(var i in o) arr.push(i); return arr; }
	// returns a list of values in an object
function values(o) { var arr = [], i; for(i in o) arr.push(o[i]); return arr; }
    // return new empty function element
function emptyFunc(title) { return { name:title, desc:"", pNames:[], pTypes:[], isfunc:true, retval:"", subf:{} }; }
    // validate control status
function isControl(name) { return name.startsWith("Create") && (app[name]? app[name].toString().indexOf("return") > -1 : false); }
	// convert arguments to function line like in the docs
function funcLine(name, params, rtype) {
	return name + (params.length? "(" + params.join(", ") + ")" : "()") +
		(rtype? " -> " + typeDesc(rtype, !name.indexOf("Create")) : "");
}
    // get control constructor name
function controlName(name) { return app[name].toString().replace(/[\w\W]* +new +(\w+)\([\w\W]*/, "$1"); }
	// converts multiple object into one
function assign() {
	var obj = arguments[arguments.length-- -1];
	for(var i = 0; i < arguments.length; i++)
		for(var k in arguments[i]) obj[k] = arguments[i][k];
	return obj;
}
    // get control abbreviation
function getAbbrev(s) {
	if(controlName(s).length == 3)
	    return controlName(s).toLowerCase();
    
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

function getArgs(foo) {
    foo = foo.toString().slice("");
    return foo.slice(foo.indexOf("(") + 1, foo.indexOf(")")).replace(/\s/g,"").split(",");
}

function markFunc(foo) {
    var len = -1;
    if(foo && foo.isfunc) len = foo.pNames.length;
    else if(typeof(foo) == "function") len = getArgs(foo).length;
    return len ? len == -1 ? "" : "(" + len + ")" : "()";
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
			var n = o.length? (o[0] == null || o[0] == undefined || o[0].constructor.name != "Object") : true;
			s += n? "[" : "[\n";
			for(var i = 0; i < o.length; i++) {
				s += tos(o[i], intd + "\t", !n);
				if(i < o.length - 1) s += n? ", " : ",\n";
			}
			return s + (n? "" : "\n" + intd) + "]";
		default:
			var okeys = keys(o).sort(sortAsc);
			switch(okeys.length) {
				case 0: return "{}";
/*				case 1:
					s += "{ ";
					for(var i = 0; i < okeys.length; i++) {
						s += '"' + okeys[i] + '": ' + tos(o[okeys[i]], "", false);
						if(i < okeys.length - 1) s += ",";
					}
				return s + " }";*/
				default:
					s += "{\n";
					for(var i = 0; i < okeys.length; i++) {
						s += intd + "\t\"" + okeys[i] + '": ' + tos(o[okeys[i]], intd + "\t", false);
						if(i < okeys.length - 1) s += ",\n";
					}
				return s + "\n" + intd + "}";
			}
	}
	return s;
}

function createZip(dest) {
	var zip = app.CreateZipUtil();
	zip.Create(dest);
	zip.addFolder = function(pth, fld) {
		if(pth == undefined)
			pth = fld.endsWith("/")? fld.split("/").slice(-2 , -1)[0] + "/" :
				fld.slice(fld.lastIndexOf("/"));
		var lst = listFolderSH(fld);
		for(var i in lst)
			if(lst[i].endsWith("/"))
				this.addFolder(pth + lst[i], fld + lst[i]);
			else this.AddFile(pth + lst[i], fld + lst[i]);
	}
	return zip;
}

function openZip(dest) {
	var zip = app.CreateZipUtil();
	zip.Open(dest);
	zip.extractFolder = function(pth, fld) {
		if(!app.FolderExists(fld)) app.MakeFolder(fld);
		var lst = zip.List(pth).split(",");
		for(var i in lst)
			if(lst[i].endsWith("/"))
				this.extractFolder(pth + lst[i], fld + lst[i]);
			else this.Extract(pth + lst[i], fld + lst[i]);
	}
	return zip;
}

	// reads the example.txt file of an app function and returns a {title:code} object
function getSamplesObj(name) {
	var samples = {}, samp = app.ReadFile(path + "samples/" + name + ".txt").split("</sample>").slice(0 , -1);
	for(var i in samp) {
		var s = samp[i].trim(), title = s.slice(8, s.indexOf(">"));
		if(samples[title]) {
			for(var j=1; samples[title + j]; j++);
			title = title + j;
		}
		samples[title] = s.slice(s.indexOf("\n"));
	}
	return samples;
}

	// calls a method if the control content wasnt modified after 3 seconds
function setModifier(obj, callb) {
    
	obj.setText = callb;
	obj.tmt = null;
	obj.SetOnChange(_ObjCbm(function() {
		clearTimeout(obj.tmt);
		changed = true;
		obj.tmt = setTimeout(callb, 3000);
	}));
	
	obj.fireCallback = function() {
		clearTimeout(obj.tmt);
		changed = true;
		callb();
	};
}

	// allows to switch list items
function setSwitchable(lst, onTouch, callback) {
	lst.item = null;
	lst.onTouch = onTouch;
	lst.callback = callback;
	lst.SetOnTouch(guiCallbacks.switchable_OnTouch);
	lst.SetOnLongTouch(guiCallbacks.switchable_OnLongTouch);
}

	// used by function isIncomplete to remove ? and whitespace
function fstrip(s) {
	return s.replace(/\?/g, "").replace(/\s/g, "");
}

	// returns wether a value is missing in the function
function isIncomplete(f) {
    var lst = [];
    
		// check subfunctions
	for(var i in f.subf)
		if(isIncomplete(f.subf[i])) { lst.push("sf"); break; }

		// check parameter types
	for(var i = 0; i < f.pTypes.length; i++)
		if(f.pTypes[i].constructor.name != "Object")
			if(!fstrip(f.pTypes[i]).length) { lst.push("pt"); break; }
		
		// check description
	if(!fstrip(f.desc = f.desc || "").length || f.desc == f.name) lst.push("d");

		// check short description
	if(!fstrip(f.shortDesc = f.shortDesc || "").length || f.shortDesc == f.name) lst.push("sd");

		// check abbreviation
	if(isControl(f.name))
		if(!fstrip(f.abbrev = f.abbrev || "").length) lst.push("ab");

		// check return value
	if(f.retval.constructor.name != "Object")
		if(f.retval)
			if(!fstrip(f.retval).length) lst.push("rv");

	return lst;
}


function saveCategories() {
		// save categories object
	var all = categories.All;
	delete categories.All;
	app.WriteFile(path + "categories" + getl() + ".json", tos(categories));
	categories.All = all;
}

function saveFunctions() {
	app.WriteFile(path + "functions" + getl() + ".json", tos(functions));
}

function saveControlArgs() {
	app.WriteFile(path + "controlArgs.json", tos(controlArgs));
}

	// overrides the _Cbm method
	// prevents error when using {foo:function} as function store
	// prevent error at local defined functions (var foo = function)
function _Cbm(callb) {
	if(!callb) return null;
	switch(callb.constructor.name) {
		case "String": return callb;
		case "Function": return callb.toString().replace(/\s/g, '')[8] == "("? _ObjCbm(callb) : callb.name;
		default: return null;
	}
}

	// override the _ObjCbm method
	// prevents that functions are added to _cbMap multiple times
function _ObjCbm(func, add) {
	var i = add? -1 : _cbMap.indexOf(func);
	if(i == -1) {
		_cbMap[++_cbId] = func;
		return "_cbMap[" + _cbId + "]";
	} else return "_cbMap[" + i + "]";
}