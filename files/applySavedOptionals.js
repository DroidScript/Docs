const fs = require('fs');
const dbg = process.argv.includes("-v");
process.chdir(__dirname);

const destPath = 'markup/en/ui/';
/** @type {DSScope} */
const obj = loadJSON('~json/ui/obj.json');
scanAndUpdateFunctions(obj);

// Function to load JSON file
/** @type {(filePath:string) => any} */
function loadJSON(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(content);
}

// Function to recursively scan and update function parameter names
/** @param {DSScope} obj */
function scanAndUpdateFunctions(obj) {
    for (const key in obj) {
        const func = obj[key];
        if (typeof func !== 'object') continue;
        if (!func.pNames) continue;

        const fileName = key; // for UI repo: .replace(/^(add|show)/, '');
        const filePath = destPath + `${fileName}.js`;
        if (!fs.existsSync(filePath)) {
            console.error("File not found: " + filePath);
            continue;
        }
        let content = fs.readFileSync(filePath, 'utf8');
        let changed = false;

        for (let i = 0; i < func.pNames.length; i++) {
            const paramName = func.pNames[i];
            if (!paramName.includes('?') && !paramName.includes('=')) continue;

            content = updateArgs(key, content, func, i, "/** # ");

            if (func.subf) content = scanSubfunctions(key, func.subf, content);
            if (process.argv.includes("--write"))
                fs.writeFileSync(filePath, content);

            changed = true;
        }
        if (changed && process.argv.includes("--write"))
            fs.writeFileSync(filePath, content);
    }
}

/** @type {(name:string, obj:Obj<string | UndefinedPartial<DSMethod>>, content: string) => string} */
function scanSubfunctions(name, obj, content) {
    for (const key in obj) {
        const func = obj[key];
        if (typeof func !== 'object') continue;

        if (!func.pNames) continue;
        for (let i = 0; i < func.pNames.length; i++) {
            const paramName = func.pNames[i];
            if (!paramName.includes('?') && !paramName.includes('=')) continue;
            content = updateArgs(name + '.' + key, content, func, i, "/** ### ");
        }
    }
    return content;
}

/** @type {(name:string, content:string, func:DSFunction, paramIndex:number, prefix:string) => string} */
function updateArgs(name, content, func, paramIndex, prefix) {
    if (!func.pNames) throw Error();
    prefix = prefix.replace(/([/*])/g, "\\$1");
    const testName = name.split('.').slice(-1)[0].replace(/^(add|show)?/, '(add|show)?');
    const paramName = func.pNames[paramIndex].replace(/[?=].*$/, '');

    const nl = '\\r?\\n\\s*';
    const reg = `(${prefix}${testName}.*${nl}( \\* .*${nl})+)( \\* @param \\{([^}]+)\\}) (\\[?${paramName}(='.*'|=\\d+)?\\]?) `;
    const match = content.match(RegExp(reg));
    if (!match)
        console.error(`Warning: match not found: ${name}.${func.pNames[paramIndex]}`);
    if (dbg) console.error('    reg: ' + reg);

    //console.log(name + " replaced " + paramName + " with " + func.pNames[paramIndex]);
    return content.replace(RegExp(reg), `$1$4 [${func.pNames[paramIndex].replace('?', '')}] `);
}
