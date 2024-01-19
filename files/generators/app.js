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
        WalkFolder,
        MakeFolder: (p) => fs.mkdirSync(absPth(p), { recursive: true }),
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

/**
 * @param {string} dirPath
 * @param {string} filter
 * @param {number} depth
 * @return {Obj<WalkDir[]>}
 */
function WalkFolder(dirPath, filter = "", depth = -1) {
    if (!depth) return {};

    /** @type {Obj<WalkDir[]>} */
    const walkDirs = {};
    const folders = [absPth(dirPath)];
    for (let i = 0; i < folders.length; i++) {
        dirPath = folders[i];
        /** @type {WalkDir[]} */
        const files = [];

        const fileList = fs.readdirSync(dirPath);
        for (const fileName of fileList) {
            const filePath = path.join(dirPath, fileName);
            const fileStat = fs.statSync(filePath);
            if (fileStat.isDirectory()) folders.push(filePath);
            if (filter && !fileName.includes(filter)) continue;

            files.push({
                name: fileName,
                isFile: fileStat.isFile(),
                modified: fileStat.mtimeMs,
                size: fileStat.size,
                hidden: fileName[0] === "."
            });
        }

        if (files.length) walkDirs[dirPath] = files;
    }
    return walkDirs;
}
