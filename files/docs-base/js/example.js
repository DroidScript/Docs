
// window.onload = function() { if(!isDS && !isAndroid) hidecopy(); }

// Remove 'Copy' buttons on PC.
function hidecopy() {
	$("div[name=divCopy] > a:contains(Copy)").hide();
}

function copy(id) {
	var codeClass = curMode === "py" ? '.code-py' : '.code-js';
	var div = document.querySelector('#' + id + codeClass);
	var txt = (div.innerText || div.textContent).replace(/\xa0/g, " ");
	if (isMobileIDE) {
		app.SetClipboardText(txt);
		ShowPopup("Text copied to clipboard");
	} else
		copyToClipboard(txt);
}

function demo(id) {
	var codeClass = curMode === "py" ? '.code-py' : '.code-js';
	var div = document.querySelector('#' + id + codeClass);
	var code = (div.innerText || div.textContent).replace(/\xa0/g, ' ');
	if (isMobileIDE) {
		const dir = "/sdcard/.DroidScript/Example/";
		app.DeleteFolder(dir);
		app.MakeFolder(dir);
		var file = dir + "Example." + curMode;
		app.WriteFile(file, code);
		app.Execute("RunDemo( '" + file + "' );");
		// app.Execute( "try { StartApp('" + file + "') } catch(e) { ShowPopup('Whoops! Something went wrong.'); }" );
	}
	else {
		var cmd = curMode == "py" ? "demo:python:" : "demo:";
		parent.postMessage(cmd + code, "*")
	}
}

function run(file) {
	if (isMobileIDE)
		app.Execute("RunDemo( \"" + file + "\" );");
	else
		parent.postMessage("run:" + file, "*");
}

function copyToClipboard(text) {
	if (window.clipboardData) window.clipboardData.setData("Text", text); //IE
	else if (window.unsafeWindow) {
		unsafeWindow.netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
		const clipboardHelperClass = Components.classes["@mozilla.org/widget/clipboardhelper;1"]
		const clipboardHelper = clipboardHelperClass.getService(Components.interfaces.nsIClipboardHelper);
		clipboardHelper.copyString(text);
	}
	else if (navigator.clipboard && navigator.clipboard.writeText)
		navigator.clipboard.writeText(text)
			.then(function () { ShowPopup("Text copied to clipboard"); },
				function (ex) { fallbackCopyTextToClipboard(text); });
	else fallbackCopyTextToClipboard(text);
}

var _cbTA = null;
function fallbackCopyTextToClipboard(text) {
	if (_cbTA == null) {
		_cbTA = document.createElement("textarea");
		_cbTA.setAttribute("style", "top:0;left:0;width:0;height:0;position:fixed");
		document.body.appendChild(_cbTA);
	}

	_cbTA.value = text;
	_cbTA.focus();
	_cbTA.select();

	try {
		const status = document.execCommand('copy');
		if (status) ShowPopup("Text copied to clipboard");
		else ShowPopup('Copying was unsuccessful');
		return status;
	} catch (err) {
		ShowPopup('Failed to copy: ' + err);
	}
	return false;
}
