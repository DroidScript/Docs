var fs = require("fs")
var curp='',curf='',curm='';
var ts = JSON.stringify;

for(var s of "app,gfx,MUI".split(","))
{
	checkObj("en/"+s+"/obj.json");
	checkObj("en/"+s+"/base.json");
}

function checkObj(p)
{
	curp = p;
	var o = JSON.parse(fs.readFileSync(p))
	
	for(var fn in o)
	{
		var f = o[fn];
		curf = f.name; curm = "";
		for(var i in f.pTypes || []) checkType(f, i);

		
		if(!f.subf) continue;
		for(var mn in f.subf)
		{
			var m = f.subf[mn];
			curm = m.name;
			for(var i in m.pTypes || []) checkType(m, i);
		}
	}
	
	// var s = tos(o);
	// if(p.endsWith("base.json")) s = s.replace(/: {\n\t\t"name": /g, ': { "name": ');
	// fs.writeFileSync(p, s);
}

function checkType(f, i)
{
	if(typeof f.pNames[i] != "string" || typeof f.pTypes[i] != "string" )//|| !f.pTypes[i].match(/^(str_pth|str)(-|$)/))
		return;

	const oc = {'.':3,d:6,f:2,'-':1}
	const c = v => v ? '\033[1;3'+oc[v]+'m'+v+'\033[0;37m' : v;
	const sc = a => console.log(curp.replace(".json",''),c(a||''),curf,curm, f.pNames[i]+": "+f.pTypes[i]);
	//if((f.pNames[i] == "file") && f.pTypes[i] != "str_ptf") sc();
	
	if(f.pTypes[i].match(/^str_p[art][fd]/)) sc('.');
	else if( f.pTypes[i].startsWith("str") && f.pNames[i].match(/^(.*[Ff]ile|img([A-Z].*)?|image)$/) ||
		f.pTypes[i].startsWith("str_pth") && f.pNames[i].match(/(file|img|image|icon)/i))
		// f.pTypes[i] = f.pTypes[i].replace(/^(str_pth|str)(-|$)/, "str_ptf$2");
		sc('f');
	else if(f.pTypes[i].startsWith("str") && f.pNames[i].match(/^(.*[Ff]older|dir(ectory)?)$/))
		// f.pTypes[i] = f.pTypes[i].replace(/^(str_pth|str)(-|$)/, "str_ptd$2");
		 sc('d');
	else if(!f.pNames[i].match(/(file|fold|dir|im(g|age))/i));
	else sc('-');
}


/////////// copied from generate.js /////////////////

function getl(l) { if(l == undefined) l = lang; return l == "en" ? "" : "-" + l; }
function l(s) { console.log(`-----${s}-----`); return s; }
function hidden(name) { return !!name.match(regHide); }
function nothidden(name) { return !name.match(regHide); }
function isnum(c) { return c >= '0' && c <= '9'; }
function has(l, v) { return !!l && l.indexOf(v) > -1; }
function values(o) { return Object.values(o); }
function keys(o) { return Object.keys(o); }
function d(v) { console.log(v); return v; }
function saveScope() { app.WriteFile(scopeDir + "obj.json", tos(scope)); }
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
			var okeys = keys(o)//.sort(sortAsc);
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


