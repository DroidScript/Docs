#!/usr/bin/node

const path = require('path');
const fs = require('fs-extra');
const rimraf = require('rimraf').sync;
const glob = require('glob/sync')

main();

function main() {
    const base = path.join(__dirname, '..') + path.sep;

    const version = fs.readFileSync(base + "out/version.txt", 'utf8').slice(-3);
    for (const file of glob(path.join(base, 'out/*/*/Docs.htm'))) {
        const content = fs.readFileSync(file, 'utf8');
        fs.writeFileSync(file, content.replace(/Docs version:\ [0-9]*/, `Docs version: ${version}`));
    }

    console.log("removing old docs");
    try { rimraf(base + "docs"); } catch(e) { console.error(e.message); }

    console.log("copying new docs");
    fs.mkdirSync(base + "docs");
    fs.copySync(base + "out", base + "docs");
    fs.copySync(base + "out/version.txt", base + "docs/version.txt");

    console.log('done');
}