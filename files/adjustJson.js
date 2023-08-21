#!/usr/bin/env node

const fs = require("fs")

const opt = { strip: false, navs: false, save: false, pathtypes: false, scopes: /** @type {string[]} */ ([]), base: false, lang: "en", names: false };
const ts = JSON.stringify;

const baseDir = "json/";
/** @type {import("conf.json")} */
const conf = JSON.parse(fs.readFileSync('conf.json', 'utf8'));
const regHide = RegExp(conf.regHide);

function OnStart() {
	const curDir = baseDir + opt.lang + "/";
	for (const v of fs.readdirSync(curDir)) {
		for (var s of opt.scopes) {
			checkObj(curDir + `${v}/${s}/obj.json`);
			if (opt.base) checkObj(curDir + `${v}/${s}/base.json`);
			if (opt.navs) checkNav(curDir + `${v}/${s}/navs.json`);
		}
	}
}

/** @param {string} p */
function checkNav(p) {
	var o = JSON.parse(fs.readFileSync(p, 'utf8'));
	var s = JSON.stringify(check(o), null, '\t');
	if (opt.save) fs.writeFileSync(p, s);
	else console.log(s);

	/** @param {any} navs */
	function check(navs) {
		if (Array.isArray(navs)) {
			for (let i = 0; i < navs.length; i++)
				if (regHide.test(navs[i])) navs.splice(i, 1);
		}
		else if (typeof navs === "object") {
			for (var cat of keys(navs)) {
				if (cat == '_nofilter') continue;
				if (regHide.test(cat)) delete navs[cat];
				else if (typeof regHide == "object") check(navs[cat]);
			}
		}
		return navs;
	}
}

/** @returns {DSFunction} */
const newDSFunc = () => ({
	name: undefined,
	abbrev: undefined,
	desc: "",
	isval: undefined,
	pNames: undefined,
	pTypes: undefined,
	params: undefined,
	retval: undefined,
	shortDesc: undefined,
});

var curp = '', curf = '', curm = '';
/** @param {string} p */
function checkObj(p) {
	curp = p;
	const o = JSON.parse(fs.readFileSync(p, 'utf8'))
	/** @type {Obj<DSFunction>} */
	const no = {}

	for (const fn in o) {
		const f = o[fn];
		const nf = no[fn] = newDSFunc();
		// @ts-ignore
		for (const k in f) nf[k] = JSON.parse(JSON.stringify(f[k]));
		curf = f.name || ''; curm = "";
		if (handle(nf, fn)) delete no[fn];

		if (!f.subf) continue;
		for (const mn in nf.subf) {
			const m = f.subf[mn];
			const nm = nf.subf[mn] = newDSFunc();
			if (typeof m == "string") nf.subf[mn] = f.subf[mn];
			else {
				// @ts-ignore
				for (const k in f.subf[mn]) nm[k] = JSON.parse(JSON.stringify(m[k]));
				curm = m.name || '';
				if (handle(nm, mn)) delete nf.subf[mn];
			}
		}
	}

	var s = tos(no);
	if (p.endsWith("base.json")) s = s.replace(/: {\n\t\t"name": /g, ': { "name": ');
	if (opt.save) fs.writeFileSync(p, s);
	else console.log(s);
}

/**
 * @param {DSFunction} f
 * @param {string} name
 */
function handle(f, name) {
	if (opt.strip && (regHide.test(name) || f.name && regHide.test(f.name))) return true;
	if (opt.names) if (f.name == name) delete f.name;
	if (opt.names) if (!f.desc) delete f.desc; else f.desc = f.desc.trim();
	if (opt.pathtypes) if (!f.pNames?.length) delete f.pNames;
	if (opt.pathtypes) if (!f.pTypes?.length) delete f.pTypes;
	if (opt.pathtypes) keys(f.pTypes).forEach((f, i) => checkType(f, i));
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
function values(o) { return Object.values(o || []); }
/** @ts-ignore @type {<T>(O: T) => (Extract<keyof T, string>)[]} */
function keys(o) { return Object.keys(o || []); }
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
 * @param {string} [intd]
 * @returns {string}
 */
function tos(o, intd = "") {
	if (o === null || o === undefined) return "null";
	if (Array.isArray(o)) return "[" + o.map(e => tos(e, intd)).join(', ') + "]";
	if (typeof o == "object") {
		var okeys = Object.keys(o).filter(k => o[k] !== undefined);
		if (!okeys.length) return "{}"
		return "{\n" + okeys.map(k => intd + `\t"${k}": ${tos(o[k], intd + "\t")}`).join(",\n") + `\n${intd}}`;
	}
	return JSON.stringify(o);
}

///////////////// arg parsing /////////////////////

for (var spat of process.argv.slice(2)) {
	if (spat.startsWith("-")) {
		const pat = spat.split("=");
		switch (pat[0]) {
			case "-l": case "--lang": opt.lang = pat[1]; break;
			//case "-v": case "-verbose": dbg = true; break;
			case "-h": case "--help": process.exit();
			case "-b": case "--base": opt.base = true; break;
			case "-s": case "--save": opt.save = true; break;
			case "-n": case "--navs": opt.navs = true; break;
			case "-x": case "--strip": opt.strip = true; break;
			case "-pt": case "--pathtypes": opt.pathtypes = true; break;
			case "-nm": case "--names": opt.names = true; break;
			default: throw Error("Unknown option " + pat[0])
		}
	}
	else opt.scopes.push(spat);
}

OnStart();
