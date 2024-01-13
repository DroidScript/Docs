/// <reference path="../types.d.ts"/>

const fs = require("fs-extra");
const path = require("path");
const rimraf = require("rimraf");

const rootPath = path.normalize(__dirname + "/..") + "/";
const app = getApp();

module.exports = { app };

let dbg = false;

/** @param {string} p */
function absPth(p) { return path.resolve(rootPath, p); }

function getApp() {
    /** @type {App} */
    const _app = {
        ReadFile: (p) => fs.readFileSync(absPth(p), "utf8"),
        WriteFile: (p, s) => fs.writeFileSync(absPth(p), s),
        DeleteFile: (p) => fs.unlinkSync(absPth(p)),
        ListFolder: (p) => fs.readdirSync(absPth(p)),
        MakeFolder: (p) => fs.mkdirSync(absPth(p)),
        CopyFolder: (a, b) => fs.copySync(absPth(a), absPth(b)),
        DeleteFolder: (p) => rimraf.sync(absPth(p)),
        IsFile: (p) => fs.lstatSync(absPth(p)).isFile(),
        IsFolder: (p) => fs.lstatSync(absPth(p)).isDirectory(),
        FileExists: (p) => fs.existsSync(absPth(p)) && fs.lstatSync(absPth(p)).isFile(),
        FolderExists: (p) => fs.existsSync(absPth(p)) && fs.lstatSync(absPth(p)).isDirectory(),
        GetFileDate: (p) => new Date(fs.statSync(absPth(p)).ctime),
        SetDebug: (d) => dbg = d,
        GetDebug: () => dbg,
        ShowProgressBar: (t) => console.log(t + "\n"),
        UpdateProgressBar: (i, t) => console.log(`\x1b[1A\x1b[K${i}% ${t || 'Initializing'}`),
        HideProgressBar: () => console.log("\n\x1b[1A\x1b[K100% done."),
        ShowPopup: console.log,
        Alert: console.log
    };
    return _app;
}
