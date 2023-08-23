const fs = require('fs');
const path = require('path');
const glob = require('glob/sync');

const pathGlob = './markup/en/*/'; // Replace with your input directory path

/** @type {Obj<string>} */
const types = {
    String: "str",
    Number: "num",
    Object: "obj",
    Boolean: "bin",
    Function: "fnc",
    Array: "lst",
    Any: "all",
    AppObject: "dso",
    GameObject: "gvo",
    JSObject: "jso",
    SmartWatchObject: "swo",
    unknown: "?"
}

for (const dir of glob(pathGlob)) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        if (path.extname(file) === '.js') {
            const filePath = path.join(dir, file);
            transformPopups(filePath);
        }
    }
}

/** @param {string} filePath */
function transformPopups(filePath) {
    let fileContent = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    do {
        let newContent = fileContent.replace(
            /<div class="samp"><a href="#([^"]+)"[^>]*>\s*([^<]+\S)\s*<\/a><\/div>([\s\S]*)<div data-role="popup" id="\1" class="ui-content"><p><span style="color:#\w+;">\s*([^<]+\S)\s*<\/span><br>(.+)<\/p><\/div>\r?\n/g,
            (m, id, name, btw, type, desc) => `<smp noinl>${name}:"${types[type] || type}:\'${desc}\'"</smp>${btw}`);

        if (newContent.length == fileContent.length) break;
        fileContent = newContent;
        changed = true;
    } while (true);

    do {
        let newContent = fileContent.replace(
            /<span style="color:(#[0-9a-f]+); font-family:Courier, monospace; font-size:100%; padding:0px 2px;">([^<\n]*)<\/span>/g,
            '<col nobox $1>$2</col>');

        if (newContent.length == fileContent.length) break;
        fileContent = newContent
        changed = true;
    } while (true);

    if (!changed) return;
    console.log(`processed ${filePath}`);
    fs.writeFileSync(filePath, fileContent, 'utf-8');
}