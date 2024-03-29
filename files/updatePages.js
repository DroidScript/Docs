
const path = require('path');
const fs = require('fs-extra');
const rimraf = require('rimraf').sync;
const conf = require('./conf.json');

main();

function main() {
    const base = path.join(__dirname, '..') + path.sep;

    console.log("removing old docs");
    try { rimraf(base + "docs/" + conf.version); } catch (e) { console.error(e.message); }

    console.log("copying new docs");
    if (!fs.existsSync(base + "docs")) fs.mkdirSync(base + "docs");
    fs.copySync(base + "out", base + "docs");
    fs.copySync(base + "out/version.txt", base + "docs/version.txt");

    console.log('done');
}
