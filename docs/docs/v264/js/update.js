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

let localVer = -1, remoteVer = -1, installedVer = -1;
const tmpPath = "/sdcard/.DroidScript/Temp";
const docsPath = app.GetPath() + "/.edit/";

$(window).load(function () {
    if (!isMobileIDE) return;
    try {
        HttpRequest("get", "https://raw.githubusercontent.com",
            "/DroidScript/Docs/master/docs/version.txt",
            null, OnRemoteVersion);

        localVer = (app.GetDSVersion() + "000").replace(/\D/g, '').slice(0, 3) + '.' + app.GetDSBuild();
        const docsHtm = app.ReadFile(docsPath + "docs/Docs.htm") + "";
        const docsVer = docsHtm.slice(docsHtm.indexOf("Docs version: ") + 14);
        installedVer = docsVer.slice(0, docsVer.indexOf("<br>"));
        OnRemoteVersion(); // for safety
    } catch (e) {
        alert(e);
    }
});

function OnRemoteVersion(remote) {
    try {
        if (remote) remoteVer = remote.replace(/^.*(\d\d\d(\.\d+)?$)/, "$1");
        if (remoteVer === -1 || installedVer === -1) return;
        console.log(`got installed ${installedVer} - local ${localVer} - remote ${remoteVer}`);
        if (remoteVer === installedVer || remoteVer !== localVer) return;

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
        dl.SetOnCancel(function (f) { app.ShowPopup("Download aborted"); });
        dl.SetOnError(app.ShowPopup);

        const url = "https://github.com/DroidScript/Docs/archive/master.zip";
        dl.Download(url, tmpPath, "docs-master.zip");
        dl.SetOnDownload(ExtractDocs);
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
        ynd.SetOnTouch(function (res) {
            if (res !== "Yes") return Updated();
            localVer = latest.pop().slice(1);
            cntDocs--;
            ExtractLang(file);
        });
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