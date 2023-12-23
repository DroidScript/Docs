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
const repo = true ? "DroidScript" : "SymDSTools";

$(window).load(function () {
    if (!isMobileIDE) return;
    try {
        HttpRequest("get", "https://raw.githubusercontent.com/",
            repo + "/Docs/master/docs/version.txt",
            null, OnRemoteVersion);

        const localBuild = app.GetDSBuild();
        localVer = (app.GetDSVersion() + "000").replace(/\D/g, '').slice(0, 3);
        if (localBuild) localVer += '.' + localBuild;

        const docsHtm = app.ReadFile(docsPath + "docs/Docs.htm") + "";
        const docsVer = docsHtm.slice(docsHtm.indexOf("Docs version: ") + 14);
        installedVer = docsVer.slice(0, docsVer.indexOf("<"));
        [_, vinstalled] = docsHtm.match(/version.txt: ([\d.]+)/) || [];
        OnRemoteVersion(); // for safety
    } catch (e) {
        alert(e);
    }
});

function OnRemoteVersion(vremote) {
    try {
        if (vremote) remoteVer = vremote.replace(/^.*(\d\d\d(\.\d+)?$)/, "$1");
        if (!remoteVer || !installedVer) return;
        console.log(`got installed ${installedVer} - local ${localVer} - remote ${remoteVer} (${vinstalled} - ${vremote})`);
        if ((remoteVer === installedVer && vremote <= vinstalled) || remoteVer !== localVer) return;

        $('#popupDialog').popup("open");
        $('#popupDialog a').on("click", function (e) {
            if (this.innerText === "Yes") InstallUpdate();
            $('#popupDialog').popup("close");
        });
    } catch (e) {
        alert(e);
    }
}

function InstallUpdate() {
    try {
        console.log(`installing ${remoteVer} over ${installedVer}`);

        const dl = app.CreateDownloader();
        dl.SetOnCancel(P(function (f) { app.ShowPopup("Download aborted"); }));

        const url = `https://github.com/${repo}/Docs/archive/master.zip`;
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
    const verDir = file + "/v" + localVer;
    if (!app.FolderExists(verDir)) {
        const latest = app.ListFolder(file, "v", null, "Folders,AlphaSort");
        const ynd = app.CreateYesNoDialog(`v${localVer} ${name} not found. Latest docs is ${latest[latest.length - 1]}. Install?`);
        ynd.SetOnTouch(P(function (res) {
            if (res !== "Yes") return Updated();
            localVer = latest.pop().slice(1);
            cntDocs--;
            ExtractLang(file);
        }));
        return ynd.Show();
    }

    app.ShowProgress("Removing old " + name);
    app.ListFolder(verDir).forEach(function (d) { app.DeleteFolder(docsPath + name + "/" + d) });

    app.ShowProgress("Copying new " + name);
    app.ListFolder(verDir).forEach(function (d) { app.RenameFolder(verDir + "/" + d, docsPath + name + "/" + d) });
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
