
// window.onload = function() { if(!isDS && !isAndroid) hidecopy(); }

// Remove 'Copy' buttons on PC.
function hidecopy() {
	$("div[name=divCopy] > a:contains(Copy)").hide();
}

function copy(div) {
	var txt = div.innerText || div.textContent;
	txt = txt.replace(/\xa0/g, " ");
	if (navigator.userAgent.indexOf("Android") > -1) //
	{
		app.SetClipboardText(txt); //replace nbsp chars
		ShowPopup("Text copied to clipboard");
	}
	else
		copyToClipboard(txt);
}

function demo(div) {
	var fld = "/sdcard/DroidScript/~DocSamp/";
	if (isMobileIDE) {
		if (!app.FolderExists(fld)) app.MakeFolder(fld);
		app.WriteFile(fld + "~DocSamp.js", div.innerText || div.textContent);
		app.Execute("RunDemo( '" + fld + "/~DocSamp.js' );");
		//app.Execute( "try { StartApp('" + fld + "/~DocSamp.js') } catch(e) { ShowPopup('Whoops! Something went wrong.'); }" );
	}
	else
		parent.postMessage("demo:" + (div.innerText || div.textContent), "*")
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
