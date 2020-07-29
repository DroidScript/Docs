
cfg.Holo;

/*/ HEAD \*/
cfg.MUI;
/*\ HEAD /*/

var dbg = {app:0,sub:0,fun:1,cre:0};

window.onerror = function(msg,file,line,coloumn,error) {
	if(error) error.stack.replace(/file:\/\/\/sdcard\/DroidScript\/[^/]*\//g, "").split("\n").forEach(function(s){console.log(decodeURI(s).fontcolor("red"))});
}

var scope, functions = {}, baseFuncs, controlArgs;
var regHead = /(\/\*\/ HEAD \\\*\/\n)([\s\S]*)(\n\/\*\\ HEAD \/\*\/)/;
var ctlArgsPth, funcPath, baseFunPth;
var appPath = app.GetAppPath() + "/";
var appName = app.GetAppName();
var confPath = appPath + "conf.json";
var uconfPath = appPath + "userconf.json";

function OnStart()
{
	app.SetAutoStart(null);

	app.SetDebug(true);

	conf = JSON.parse(app.ReadFile(confPath) || "{}");
	uconf = JSON.parse(app.ReadFile(uconfPath) || "{}");

	dlgConf = app.CreateDialog("Configuration", "nocancel");
	var lay = app.CreateLayout("linear");
	lay.SetPadding(.05, .02, .05, .02);
	dlgConf.AddLayout(lay);

	var edtName = app.AddTextEdit(lay, uconf.scopeName || "", .7, null, "singleline" );
	edtName.SetBackColor("darkgray");
	edtName.SetHint("scope name (ie. Game Engine)");

	var edtAbbr = app.AddTextEdit(lay, uconf.scopeAbbrev || "", .7, null, "singleline" );
	edtAbbr.SetBackColor("darkgray");
	edtAbbr.SetMargins(0, .01, 0, .01)
	edtAbbr.SetHint("scope abbrev. (ie. gfx)");

	var edtScop = app.AddTextEdit(lay, uconf.getScope || "", .7, null, "singleline" );
	edtScop.SetBackColor("darkgray");
	edtScop.SetHint("expr→scope (ie. 'app' or 'gfx')");

	var chkAppB = app.AddCheckBox(lay, "use app-base");
	chkAppB.SetChecked(uconf.appBase || true);

	var chkOvrd = app.AddCheckBox(lay, "generate from scratch");
	chkOvrd.SetChecked(uconf.override || true);

	app.AddText(lay, "Custom imports and cfg settings:")
		.SetMargins(0, .02, 0, .01);

	var edtHead = app.AddTextEdit(lay, uconf.header || "", .7, .2 );
	edtHead.SetBackColor("darkgray");
	edtHead.SetTextSize(edtHead.GetTextSize()*.8);
	edtHead.SetHint("cfg and imports\n\nYes you can break the app with this but then this will be your own harm, fault and problem");

	var layH = app.AddLayout(lay, "linear", "Horizontal,FillX,Right,Bottom");
	layH.SetMargins(0, .03);

	var btnGen = app.AddButton(layH, "Generate");
	btnGen.SetMargins(0, 0, .13);
	btnGen.SetOnTouch(function()
	{
		uconf.scopeName = edtName.GetText();
		uconf.scopeAbbrev = edtAbbr.GetText();
		uconf.getScope = edtScop.GetText();
		uconf.header = edtHead.GetText().trim();
		uconf.appBase = chkAppB.GetChecked();
		uconf.override = chkOvrd.GetChecked();
		app.WriteFile(uconfPath, tos(uconf));
		app.ShowPopup("config saved.");

		var s = app.ReadFile(appPath + appName + ".js");
		var m = s.match(regHead);
		if(!m) alert("custom header is broken. Fabulous.");
		else if(m[2] != uconf.header)
		{
			app.WriteFile(appPath + appName + ".js", s.replace(regHead, "$1" + uconf.header + "$3"));

			var ynd = app.CreateYesNoDialog("Requires restart to apply changes.\nQuit now?");
			ynd.SetOnTouch(function(res) { if(res == "Yes") RestartApp(); })
			ynd.Show();
		} else {
			dlgConf.Hide();
			onLoad();
		}
	});

	var btnX = app.AddButton(layH, "X", .1, .06, "bold");
	btnX.SetOnTouch(app.Exit);
	btnX.SetTextColor("red");

	dlgConf.Show();
}

function RestartApp() {
	app.HttpRequest("GET", "http://localhost:8088", "/ide", "cmd=run|prog=" + appName, function(e,r,s) {
		if(s != 200) {
			app.SetAutoStart(appName);

			var apps = app.GetRunningApps().filter(
				function(v) { return v.name == "com.smartphoneremote.androidscriptfree"; });

			if(apps.length > 0) {
				app.KillApp(apps[0].pid);
				app.LaunchApp( "com.smartphoneremote.androidscriptfree", false);
				// app.Exit();
			}
		}
	});
}

function onLoad()
{
	app.ShowProgress();
	ctlArgsPth = appPath + uconf.scopeAbbrev + "-controlArgs.json";
	funcPath = appPath + uconf.scopeAbbrev + "-functions.json";
	baseFunPth = appPath + (uconf.appBase ? "app" : uconf.scopeAbbrev) + "-base.json"

	scope = eval(uconf.getScope);
	controlArgs = JSON.parse(app.ReadFile(ctlArgsPth) || "{}");
	baseFuncs = JSON.parse(app.ReadFile(baseFunPth) || "{}");
	if(!uconf.override) functions = JSON.parse(app.ReadFile(funcPath) || "{}");

	if(!dbg.app) app.SetDebug("console")
	loadNews(scope);
	if(!dbg.app) app.SetDebug(true);
	app.WriteFile(funcPath, tos(functions));

	app.HideProgress();
	app.ShowPopup("done");
	dlgConf.Show();
}

function loadNews()
{
	for(var i in scope)
	{
		// remove hidden scope functions
		if(hidden(i))
		{
			if(functions[i])
			{
				if(dbg.fun) console.log("- ".fontcolor("red") + i + markFunc(functions[i]));
				delete functions[i];
			}
			continue;
		}

		// add new scope functions
		if(!functions[i])
		{
			if(dbg.fun) console.log("+ ".fontcolor("green") + i + markFunc(scope[i]));
			functions[i] = getBaseFuncObj(i, scope[i]);
		}

		if(isControl(i) || scope[i] instanceof Object)
		{
			// create temp control
			var ctrl;
			if(scope[i] instanceof Object)
				ctrl = scope[i];
			if(isControl(i))
				ctrl = loadControl(i, getArgs(scope[i]));
			if(!ctrl) continue;

			for(var j in ctrl)
			{
				// remove hidden subfunctions
				if(hidden(j))
				{
					if(functions[i].subf[j]) {
						if(dbg.sub) console.log("- ".fontcolor("red") + i + "." + j + markFunc(functions[i].subf[j]));
						delete functions[i].subf[j];
					}
					continue;
				}

				// add new subfunctions
				if(functions[i].subf && !functions[i].subf[j] && ctrl[j])
				{
					if(dbg.sub) console.log("+ ".fontcolor("green") + i + "." + j + markFunc(ctrl[j]));
					functions[i].subf[j] = getBaseFunc(j) || getBaseFuncObj(j, ctrl[j]);
				}
			}

			// remove deleted subfunctions
			for(var j in functions[i].subf)
			{
				if(!ctrl[j])
				{
					console.log("- ".fontcolor("red") + i + "." + j + markFunc(functions[i].subf[j]));
					delete functions[i].subf[j];
				}
			}

			// destroy temp control
			if(ctrl) {
				if(ctrl.Gone) ctrl.Gone();
				if(ctrl.Destroy) ctrl.Destroy();
			}
		}
	}

	// remove deleted scope functions
	for(var i in functions)
	{
		if(hidden(i)) continue;
		if(!scope[i])
		{
			news.push("- ".fontcolor("red") + i + markFunc(functions[i]));
			delete functions[i];
			for(var j in categories)
				delete categories[j][i];
		}
	}
}

function getBaseFunc(n)
{
	for(var i in baseFuncs)
		if(baseFuncs[i].name == n) return i;
	return null;
}

	// get control object
function loadControl(name, pNames)
{
	var obj, args = [];

	if(controlArgs[name]) {
		if(dbg.cre) console.log(`cre: ${uconf.scopeAbbrev}.${name}(${JSON.stringify(controlArgs[name]).replace(/^\[|\]$/g,"")})`)
		obj = scope[name].apply(scope, controlArgs[name]);
	} else {
		var con = controlName(name);
		obj = window[con] ? window[con]("#-1") : null;
	}

	var n = 0;
	while(!obj)
	{
		if(++n <= 4) args = "'','','',''".slice((4-n)*3);
		else args = prompt("type the argument list\nscope." + name +
			"(" + pNames + ')\n\nie: "Linear", "FillXY,VCenter"');
		if(args == null) {
			consolel.log("failed: " + name);
			return false;
		}

		try { args = eval("[" + args + "]") }
		catch(e) { alert("args invalid: " + e); };

		if(dbg.cre) console.log(`cre: ${uconf.scopeAbbrev}.${name}(${JSON.stringify(args).replace(/^\[|\]$/g,"")})`)
		try { obj = scope[name].apply(scope, args); }
		catch(e) { alert("creation failed: " + e); obj = null; }
	}

	if(args.length)
	{
		controlArgs[name] = args;
		app.WriteFile(ctlArgsPth, tos(controlArgs));
	}
	return obj;
}
	// get control constructor name
function controlName(name) { return scope[name].toString().replace(/[\w\W]* +new +(\w+)\([\w\W]*/, "$1"); }

/*MUI.CreateAlertSimple, */
// -----------------------------------------------------------------------------

function getBaseFuncObj(name, func)
{
	var funcs = func.toString();
	var isFunc = funcs.indexOf("function");
	isFunc = isFunc > -1 && isFunc < 9;

	if(isFunc)
	{
		var args = getArgs(funcs);
		return {
			abbrev: isControl(name)? getAbbrev(name) : "",
			desc  : name,  name	 : name,
			pNames: args,  shortDesc: name,
			pTypes: isFunc? args.map(n => getOptType(n) || "?") : [],
			retval: getRetval(func, name) || undefined,
			subf: {}
		};
	} else
		return {
			desc: name, isval: true, name: name,
			retval: getRetval(func, name) || undefined, shortDesc: name
		};
}

function getOptType(name) {
	var nmat = r => !!name.match(r);

	if(nmat(/^(te?xt|str(ing)?|delim(eter)?|password|\w*name|title\d?|body|subject|msg|message)$/)) return "str";
	if(nmat(/^(colou?r\d?|^col\d?)$/)) return "str_col";
	if(nmat(/^(b(ase)?64)$/)) return "str_b64";
	if(nmat(/^(html?)$/)) return "str_htm";
	if(nmat(/^(hex)$/)) return "str_hex";
	if(nmat(/^(mime(type)?)$/)) return "str_mim";
	if(nmat(/^(options)$/)) return "str_com";
	if(nmat(/^(uri)$/)) return "str_uri";
	if(nmat(/^(url)$/)) return "str_url";
	if(nmat(/^(sql)$/)) return "str_sql";
	if(nmat(/^file[A-Z]?|^folder[A-Z]?|^fld$|^fil$|\w+File$|\w+Folder|path$/)) return "str_pth";

	if(nmat(/^(js)$/)) return "str_jsc";
	if(nmat(/^(sql)$/)) return "str_sql";

	if(nmat(/^(count|(min|max)[A-Z]?.*|port|line)$/)) return "num_int";
	if(nmat(/(width|height|radius|range|dpi|d?[xywh]|dur(ation)?|hue|saturation|brightness|delay)$/)) return "num";
	if(nmat(/^(percent)$/)) return "num_prc";
	if(nmat(/^(sec(ond)?s?)$/)) return "num_sec";
	if(nmat(/^(ms|millis(econds)?)$/)) return "num_sec";

	if(nmat(/^((en|dis)able|onoff|show|is[A-Z]*)$/)) return "bin";

	if(nmat(/^(callback|cb|on[A-Z].*)$/)) return getBaseCbObj();

	return null;
}

function getBaseCbObj() {
	return {
		"desc": "callback function",
		"name": "callback",
		"pNames": [],
		"pTypes": [],
		"shortDesc": "callback"
	}
}

function getRetval(o, name)
{
	var s = "";
	var matchn = (v,i) => name.match(v)
	var matcho = (v,i) => o.match(v)

	if(o === null || o === undefined) return "null";
	else switch(o.constructor.name) {
		case "String": return "str-" + o;
		case "Number": return "num";
		case "Boolean": return "bin";
		case "Array": return "lst";
		case "Function":
			var t = o.toString().trim();
			if(t.indexOf("return") == -1) return null;
			if(name.match(/^Is[A-Z]/)) return "bin";

			var m = t.match(/function\([^)]*\)\s*{\s*return\s*([^\n]+?);?\s*}$/);
			if(m && m.length > 1) {
				var v = m[1];
				if(v.startsWith("parseInt(")) return "num_int";
				if(v.startsWith("parseFloat(")) return "num";
				if(v.match(/^("[^"]*"|'[^']*')$/))
				{
					try { return "str-" + eval(v); }
					catch(e) {
						alert("String not parseable:\n" + v);
						return "str";
					}
				}
				if(!isNaN(Number(o))) return Number.isInteger(Number(o)) ? "str_int" : "str_num";
			}
		case "Object": return "obj";
		default: return "?";
	}
	return s;
}

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

function getArgs(foo) {
	foo = foo.toString().slice("");
	var ret = foo.slice(foo.indexOf("(") + 1, foo.indexOf(")")).replace(/\s/g,"");
	return ret ? ret.split(",") : [];
}
function isControl(name) {
	return name.match(conf.regControl);
}
function markFunc(foo) {
	var len = -1;
	if(typeof(foo) == "function") len = getArgs(foo).length;
	else if(foo && foo.pNames && !foo.isval) len = foo.pNames.length;
	return len ? len == -1 ? "" : "(" + len + ")" : "()";
}

// -----------------------------------------------------------------------------

function any(o, f) { for(var i in o) if(f(o[i], i, o)) return true; return false; }
function hidden(name) { return !!name.match(conf.regHide); }
function keys(o) { return Object.keys(o); }
function sortAsc(a, b) {
	a = a.toString().replace(/[^a-z0-9]/gi, "") || a + "";
	b = b.toString().replace(/[^a-z0-9]/gi, "") || b + "";
	var la = a.toLowerCase(), lb = b.toLowerCase();
	return la == lb ? a < b ? 1 : -1 : la > lb ? 1 : -1;
}

	// converts a variable to indented string
	// supports Boolean, Number, String, Array and Object
function tos(o, intd, m)
{
	if(intd == undefined) intd = "";
	if(m == undefined) m = true;
	var s = m ? intd : "";

	if(o === null || o === undefined) return "null";
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
				case 1:
					if(o[okeys[0]] === undefined) return "{}";
					return s += `{ "${okeys[0]}": ${tos(o[okeys[0]], "", false)} }`;
				default:
					s += "{\n";
					for(var i = 0; i < okeys.length; i++) {
						if(o[okeys[i]] === undefined) continue;
						s += intd + `\t"${okeys[i]}": ${tos(o[okeys[i]], intd + "\t", false)}`;
						if(i < okeys.length - 1) s += ",\n";
					}
				return s + `\n${intd}}`;
			}
	}
	return s;
}
