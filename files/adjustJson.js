#!/usr/bin/env node

const opt = { save: false, pathtypes: false, scopes: /** @type {string[]} */ ([]), base: false, lang: "en", names: false };
const ts = JSON.stringify;

function OnStart() {
	for (var s of opt.scopes) {
		checkObj(opt.lang + "/" + s + "/obj.json");
		if (opt.base) checkObj(opt.lang + "/" + s + "/base.json");
	}
}

var curp = '', curf = '', curm = '';
/** @param {string} p */
function checkObj(p) {
	curp = p;
	var o = JSON.parse(fs.readFileSync(p, 'utf8'))

	for (var fn in o) {
		var f = o[fn];
		curf = f.name; curm = "";
		handle(f, fn);

		if (!f.subf) continue;
		for (var mn in f.subf) {
			var m = f.subf[mn];
			curm = m.name;
			handle(m, mn);
		}
	}

	var s = tos(o);
	if (p.endsWith("base.json")) s = s.replace(/: {\n\t\t"name": /g, ': { "name": ');
	if (opt.save) fs.writeFileSync(p, s);
	else console.log(s);
}

/**
 * @param {DSFunction} f
 * @param {string} name
 */
function handle(f, name) {
	if (opt.pathtypes) keys(f.pTypes).forEach((f, i) => checkType(f, i));
	if (opt.names) if (f.name == name) delete f.name;
}

/**
 * @param {DSFunction} f
 * @param {number} i
 */
function checkType(f, i) {
	if (!f.pNames || !f.pTypes) return;
	const pName = f.pNames[i], pType = f.pTypes[i];
	if (typeof pName != "string" || typeof pType != "string")//|| !pType.match(/^(str_pth|str)(-|$)/))
		return;

	/** @type {Obj<number>} */
	const oc = { '.': 3, d: 6, f: 2, '-': 1 };
	const c = (/** @type {string} */ v) => v ? '\x1b[1;3' + oc[v] + 'm' + v + '\x1b[0;37m' : v;
	const sc = (/** @type {string} */ a) => console.log(curp.replace(".json", ''), c(a || ''), curf, curm, pName + ": " + pType);
	//if((pName == "file") && pType != "str_ptf") sc();

	if (pType.match(/^str_p[art][fd]/)) sc('.');
	else if (pType.startsWith("str") && pName.match(/^(.*[Ff]ile|img([A-Z].*)?|image)$/) ||
		pType.startsWith("str_pth") && pName.match(/(file|img|image|icon)/i))
		// pType = pType.replace(/^(str_pth|str)(-|$)/, "str_ptf$2");
		sc('f');
	else if (pType.startsWith("str") && pName.match(/^(.*[Ff]older|dir(ectory)?)$/))
		// pType = pType.replace(/^(str_pth|str)(-|$)/, "str_ptd$2");
		sc('d');
	else if (pName.match(/(file|fold|dir|im(g|age))/i)) sc('-');
}


/////////// copied from generate.js /////////////////

/** @param {string} s */
function l(s) { console.log(`-----${s}-----`); return s; }
/** @param {string | number} c */
function isnum(c) { return c >= '0' && c <= '9'; }
/** @type {(l:string|string[], v:string) => boolean} */
function has(l, v) { return !!l && l.indexOf(v) > -1; }
/** @ts-ignore @type {<T extends object>(O: T) => T[keyof T][]} */
function values(o) { return Object.values(o); }
/** @ts-ignore @type {<T>(O: T) => (Extract<keyof T, string>)[]} */
function keys(o) { return Object.keys(o); }
/** @param {any} v */
function d(v) { console.log(v); return v; }
/**
 * @param {any} a
 * @param {any} b
 */
function sortAsc(a, b) {
	const sa = String(a).replace(/[^a-z0-9]/gi, "") || String(a);
	const sb = String(b).replace(/[^a-z0-9]/gi, "") || String(b);
	var la = sa.toLowerCase(), lb = sb.toLowerCase();
	return la == lb ? sa < sb ? 1 : -1 : la > lb ? 1 : -1;
}

// converts a variable to indented string
// supports Boolean, Number, String, Array and Object
/**
 * @param {any} o
 * @param {boolean} [nosort]
 * @param {string} [intd]
 * @param {boolean} [m]
 * @returns {string}
 */
function tos(o, nosort, intd, m) {
	if (intd == undefined) intd = "";
	if (m == undefined) m = true;
	var s = m ? intd : "";

	if (o === null || o === undefined) return "null";
	else switch (o.constructor.name) {
		case "String": case "Number": case "Boolean":
			return s + JSON.stringify(o);
		case "Array":
			var n = o.length < 2 || (typeof o[0] != "object");
			s += n ? "[" : "[\n";
			for (var i = 0; i < o.length; i++) {
				s += tos(o[i], nosort, intd + (n ? "" : "\t"), !n);
				if (i < o.length - 1) s += n ? ", " : ",\n";
			}
			return s + (n ? "" : "\n" + intd) + "]";
		default:
			var okeys = keys(o);
			if (!nosort) okeys = okeys.sort(sortAsc);
			switch (okeys.length) {
				case 0: return "{}";
				case 1:
					if (o[okeys[0]] === undefined) return "{}";
					return s += `{ "${okeys[0]}": ${tos(o[okeys[0]], nosort, "", false)} }`;
				default:
					s += "{\n";
					for (var i = 0; i < okeys.length; i++) {
						if (o[okeys[i]] === undefined) continue;
						s += intd + `\t"${okeys[i]}": ${tos(o[okeys[i]], nosort, intd + "\t", false)}`;
						if (i < okeys.length - 1) s += ",\n";
					}
					return s + `\n${intd}}`;
			}
	}
}

///////////////// arg parsing /////////////////////

const fs = require("fs")
for (var spat of process.argv.slice(2)) {
	if (spat.startsWith("-")) {
		const pat = spat.split("=");
		switch (pat[0]) {
			case "-l": case "--lang": opt.lang = pat[1]; break;
			//case "-v": case "-verbose": dbg = true; break;
			case "-h": case "--help": process.exit();
			case "-b": case "--base": opt.base = true; break;
			case "-s": case "--save": opt.save = true; break;
			case "-pt": case "--pathtypes": opt.pathtypes = true; break;
			case "-nm": case "--names": opt.names = true; break;
			default: throw Error("Unknown option " + pat[0])
		}
	}
	else opt.scopes.push(spat);
}

OnStart();
