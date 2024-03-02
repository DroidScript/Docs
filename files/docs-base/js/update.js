/// <reference path="common.js"/>
/// <reference path="../../../out/docs/definitions/ts/app.d.ts"/>
/// <reference path="../../doctypes.d.ts"/>

/*
$(document).ready(function () { alert("event: document ready depr"); });
$(function () { alert("event: document ready"); });
$(document).on("mobileinit", function () { alert("event: mobile init"); });
$(document).load(function () { alert("event: document load"); });
// page change
$(document).live('pageshow', function () { alert("event: page show"); });
$(window).load(function () { alert("event: window load"); });
*/

function HttpRequest(method, host, path, header, cb) {
    let xmlHttp = new XMLHttpRequest();
    if (cb) xmlHttp.onload = function () { cb(xmlHttp.responseText); };
    xmlHttp.open(method, host + path, true);
    xmlHttp.send();
}

const tmpPath = "/sdcard/.DroidScript/Temp";
const docsPath = "/sdcard/DroidScript/.edit/";
const repos = { release: "DroidScript", beta: "SymDSTools" }
const docver = { installed: 0, local: 0 };
let vinstalled = "";

$(window).load(function () {
    if (!isMobileIDE) return;
    try {
        const localVerStr = (app.GetDSVersion() + "000").replace(/\D/g, '').slice(0, 3);
        docver.local = Number(localVerStr + '.' + app.GetDSBuild());

        const docsHtm = app.ReadFile(docsPath + "docs/Docs.htm") + "";
        vinstalled = (docsHtm.match(/version.txt: ([\d.]+)/) || [])[1];
        // legacy version
        var docsVer = docsHtm.slice(docsHtm.indexOf("Docs version: ") + 14);
        docsVer = docsVer.slice(0, docsVer.indexOf("<"));
        docver.installed = parseDsVer(vinstalled) || Number(docsVer);

        HttpRequest("get", "https://raw.githubusercontent.com/",
            repos.release + "/Docs/master/docs/version.txt",
            null, OnRemoteVersion.bind(null, "release"));

        HttpRequest("get", "https://raw.githubusercontent.com/",
            repos.beta + "/Docs/master/docs/version.txt",
            null, OnRemoteVersion.bind(null, "beta"));
    } catch (e) {
        alert(e);
    }
});

var testVer = "";
function OnRemoteVersion(repo, version) {
    const testVer = parseDsVer(version);
    docver[repo] = testVer;

    try {
        console.log(`got local ${docver.local} - installed ${docver.installed}\n${repo} ${testVer} (${vinstalled} - ${version})`);
        if (testVer !== docver.local || (testVer === docver.local && version <= vinstalled)) return;

        $('#popupDialog h3').append(`Install ${testVer} over ${docver.installed}?`);
        $('#popupDialog').popup("open");
        $('#popupDialog a').on("click", function (e) {
            if (this.innerText === "Yes") InstallUpdate(repo);
            $('#popupDialog').popup("close");
        });
    } catch (e) {
        alert(e);
    }
}

// input: string [date][3x ver].[build] => Number ver.build
// "19670264.6" => 264.6
function parseDsVer(ver) {
    ver = Number(ver) % 1000;
    return (ver * 1000 | 0) / 1000;
}

function InstallUpdate(repo) {
    try {
        const dl = app.CreateDownloader();
        dl.SetOnCancel(P(function (f) { app.ShowPopup("Download aborted"); }));

        const url = `https://github.com/${repos[repo]}/Docs/archive/master.zip`;
        dl.Download(url, tmpPath, "docs-master.zip");
        dl.SetOnDownload(P(ExtractDocs));
    } catch (e) {
        alert(e);
    }
}

function ExtractDocs(file) {
    try {
        app.ShowProgress("Extracting docs");
        if (!app.FileExists(file) || file.endsWith("/")) return;
        app.Execute('app.UnzipFile(' + JSON.stringify(file) + ', ' + JSON.stringify(tmpPath) + ')');
        app.ListFolder(tmpPath + "/Docs-master/docs", null, null, "Folders,FullPath")
            .forEach(ExtractLang);
    } catch (e) {
        alert(e);
    }
    app.HideProgress();
}

var cntDocs = 0;
function ExtractLang(file) {
    cntDocs++;
    const name = file.slice(file.lastIndexOf("/") + 1);
    const sourceDir = file + "/latest";
    if (!app.FolderExists(sourceDir))
        return app.ShowPopup("Latest not found.");

    // app.ShowProgress("Removing old " + name);
    // app.ListFolder(sourceDir).forEach(function (d) { app.DeleteFolder(docsPath + name + "/" + d) });

    app.ShowProgress("Copying new " + name);
    app.ListFolder(sourceDir).forEach(function (d) { app.RenameFolder(sourceDir + "/" + d, docsPath + name + "/" + d) });
    Updated();
}

function Updated(force = false) {
    if (!force && --cntDocs) return;
    app.HideProgress();
    app.ShowPopup("Done.");
    location.reload();
}

// DS callback workaround in iframes
function P(func) {
    var name = _Cbm(func).replace(/_cbMap\['(.*)'\]/g, '_cb$1');
    if (!useWebIDE || window == window.parent) return func;
    window.parent[name] = window[name] = func.bind();
    return { name };
}
