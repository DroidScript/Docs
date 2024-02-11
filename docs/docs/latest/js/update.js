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

let localVer = "", remoteVer = "", installedVer = "", vinstalled = "";
const tmpPath = "/sdcard/.DroidScript/Temp";
const docsPath = "/sdcard/DroidScript/.edit/";
const repoName = { release: "DroidScript", beta: "SymDSTools" }

$(window).load(function () {
    if (!isMobileIDE) return;
    try {
        const localBuild = app.GetDSBuild();
        localVer = (app.GetDSVersion() + "000").replace(/\D/g, '').slice(0, 3);
        if (localBuild) localVer += '.' + localBuild;

        const docsHtm = app.ReadFile(docsPath + "docs/Docs.htm") + "";
        const docsVer = docsHtm.slice(docsHtm.indexOf("Docs version: ") + 14);
        installedVer = docsVer.slice(0, docsVer.indexOf("<"));
        [_, vinstalled] = docsHtm.match(/version.txt: ([\d.]+)/) || [];

        HttpRequest("get", "https://raw.githubusercontent.com/",
            repoName.release + "/Docs/master/docs/version.txt",
            null, OnRemoteVersion.bind(null, "release"));

        HttpRequest("get", "https://raw.githubusercontent.com/",
            repoName.beta + "/Docs/master/docs/version.txt",
            null, OnRemoteVersion.bind(null, "beta"));
    } catch (e) {
        alert(e);
    }
});

const repoVers = {}
var testVer = "";
function OnRemoteVersion(repo, version) {
    const testVer = version.replace(/^.*(\d\d\d(\.\d+)?$)/, "$1");

    try {
        if (Object.keys(repoVers).length !== Object.keys(repoName).length) return;
        console.log(`got installed ${installedVer} - local ${localVer} - remote ${testVer} (${vinstalled} - ${version})`);
        if (testVer !== localVer || (testVer === installedVer && version <= vinstalled)) return;
        remoteVer = testVer;

        $('#popupDialog').popup("open");
        $('#popupDialog a').on("click", function (e) {
            if (this.innerText === "Yes") InstallUpdate(repo);
            $('#popupDialog').popup("close");
        });
    } catch (e) {
        alert(e);
    }
}

function InstallUpdate(repo) {
    try {
        console.log(`installing ${remoteVer} over ${installedVer}`);

        const dl = app.CreateDownloader();
        dl.SetOnCancel(P(function (f) { app.ShowPopup("Download aborted"); }));

        const url = `https://github.com/${repoName[repo]}/Docs/archive/master.zip`;
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

    app.ShowProgress("Removing old " + name);
    app.ListFolder(sourceDir).forEach(function (d) { app.DeleteFolder(docsPath + name + "/" + d) });

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

function P(func) {
    var name = _Cbm(func).replace(/_cbMap\['(.*)'\]/g, '_cb$1');
    if (!useWebIDE || window == window.parent) return func;
    window.parent[name] = window[name] = func.bind();
    return { name };
}
