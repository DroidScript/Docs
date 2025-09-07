const { app } = require("./generators/app");
const path = require("path");
setTimeout(OnStart);

var dir = '.' + path.sep;

function OnStart() {

    var list = app.WalkFolder(dir + 'samples', ".js");
    for (const dir in list) {
        const folder = dir + path.sep;
        const newDir = folder.replace(/([/\\])samples([/\\]|$)/, path.sep + "samples2" + path.sep);
        app.MakeFolder(newDir);

        for (const file of list[dir]) {
            if (!file.isFile || !file.name.endsWith('.js')) continue;
            const code = app.ReadFile(folder + file.name).replace(/\r\n/g, "\n");
            const newCode = smartDeclare(code)
                .replace(/"linear"/g, '"Linear"')
                .replace(/\bscroll\b/g, 'scroller');
            app.WriteFile(newDir + file.name, newCode);
        }
    }
    app.ShowPopup("done");
}

/** @param {string} code */
function smartDeclare(code) {
    const text = code;
    const globals = findGlobalVars(text);

    const lines = text.split("\n");
    const globCode = text.match(/^[\s\S]*?(\/\/.*\n)*function/);
    const globPos = globCode ? globCode[0].split("\n").length - 1 : 0;


    const regConPrefix = /^(Create|Open|Add|show)(?=\w+)/i;
    /** @type {{[x:string]: string}} */
    const objPfx = { app: "Ds", ui: "UI", MUI: "Mui", gfx: "Gfx" };
    /** @type {{[x:string]: string}} */
    const typeObj = {
        '`': 'string', '"': 'string', "'": 'string',
        '[': 'any[]', '{': '{[x:string]: any}',
        '.': 'number'
    };

    for (let i = 0; i < lines.length; i++) {
        const match = lines[i].match(/(?<=^|\n|^\s+for\s*\()\s*(?<!(var\s+|let\s+|const\s+))\b(\w+)\s*=[^=]/);
        if (!match || globals.has(match[2]) || text.match(`(var|let|const)\\b[^\n(]+\\b${match[2]}\\s*[=,;\\n]`)) continue;
        const m = lines[i].match(`\\b${match[2]}\\s*=[^=]`);
        if (m?.index !== undefined) lines[i] = lines[i].slice(0, m.index) + "var " + lines[i].slice(m.index);
    }

    if (!globals.size) return lines.join('\n');

    let globDefs = "";
    for (const v of globals) {
        if (text.match(`\\b(var|let|const)\\b[^\n(]+${v}\\s*[=,;\\n]`)) continue;
        const typeMatch = text.match(`${v}\\s*=\\s*((app|gfx|ui|mui)\\.(\\w+)|([^=;()]+))`);
        let type = "";
        if (typeMatch && typeMatch[3]) {
            if (typeMatch[3].match(regConPrefix)) type = objPfx[typeMatch[2]] + typeMatch[3].replace(regConPrefix, '');
            else if (typeMatch[3].match(/^(is|has)/i)) type = "boolean";
        } else if (typeMatch && typeMatch[4]) {
            if (typeObj[typeMatch[4][0]]) type = typeObj[typeMatch[4][0]];
            else if (typeMatch[4].match(/^(true|false)$/)) type = "boolean";
            else if (type.match(/^[0-9.]+/)) type = "number";
        }
        globDefs += `/** @type {${type}} */\nvar ${v};\n`;
    }
    lines.splice(globPos, 0, `\n${globDefs}\n`);

    return lines.join('\n');
}

/** @param {string} code */
function findGlobalVars(code) {
    // auto detect globals
    const defs = code.split(/(?<=\n[ \t]*)(?=function )/);
    const vars = defs.map(def => def.match(/(?<!(var|let|const)\s*)\b\w+(?=\s*=[^=])/g));

    /** @type {Set<string>} */
    const globalSet = new Set();

    for (let i = 0; i < defs.length; i++) {
        // find all assignments
        if (!vars[i]) continue;

        // find referenced in other defs
        for (let j = 0; j < defs.length; j++) {
            if (i === j) continue;
            /** @type {string[]} */
            for (const v of vars[i] || []) {
                // eslint-disable-next-line max-depth
                if (!vars[j]?.includes(v) && defs[j].match(RegExp(`\\b${v}\\b`)))
                    globalSet.add(v);
            }
        }
        // console.log(defs[i].split("\n", 1)[0], vars1, [...globalSet]);
    }
    return globalSet;
}

