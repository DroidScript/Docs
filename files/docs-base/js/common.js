
var baseFolder = "/sdcard/DroidScript/.edit/docs/";
var extDocsFolder = baseFolder + "external/";
var pluginFolder = baseFolder + "plugins/"; //app.GetPrivateFolder( "Plugins" );

if (!String.prototype.startsWith) {
	Object.defineProperty(String.prototype, 'startsWith', {
		value: function (search, pos) {
			pos = pos | 0;
			return this.substring(pos, pos + search.length) === search;
		}
	});
}

//Get navigator type.
var agent = navigator.userAgent;
console.log("agent = " + agent);

var isChromeOS = (!!agent.match(/Chrome OS|Chromebook|PixelBook/));
var useWebIDE = (has(agent, "Remix") || isChromeOS);
var isAndroid = (has(agent, "Android"));

var isDS = (location.href.match(/\bds=true\b/) != null);
isDS = isDS || getCookie("isDS") == 'true';
setCookie("isDS", isDS);

var isWebIDE = isDS && !isAndroid;
var isMobileIDE = isDS && isAndroid;
var curPage = "";
var serverAddress = "";

// set current theme
var curTheme = location.href.match(/\btheme=([-\w]*)/);
if (curTheme && history.replaceState)
	try { history.replaceState({}, "Documentation", "Docs.htm"); } catch (e) { }
setTheme(curTheme ? curTheme[1] : getCookie("dsDocsTheme", "dark"));


//Hook into cross frame messaging
window.addEventListener("message", function (event) {
	console.log("msg: " + event)
	if (typeof event.data != "string") return;
	var params = event.data.split("|");
	var cmd = params[0];
	console.log("cmd: " + cmd)

	if (cmd == "address") {
		serverAddress = params[1];
		OnAddress()
	}
	else if (cmd == "setTheme")
		setTheme(params[1]);
});

//Change defaults.
//Note: I have also modified animation-duration:350ms->100ms in JQM css files;
$(document).on("mobileinit", function () {
	//$.extend( $.mobile , { ajaxEnabled: false }); //<-- so #bookmarks work.
	$.mobile.defaultPageTransition = 'none'; //'fade';
	$.mobile.buttonMarkup.hoverDelay = 10;

	if (navigator.userAgent.indexOf("Android") == -1) {
		$.mobile.page.prototype.options.addBackBtn = true;
		$.mobile.page.prototype.options.backBtnTheme = "c";
	}
	//$.mobile.activeBtnClass = 'unused';
	//$.mobile.removeClass("ui-btn-hover-c").addClass("ui-btn-up-c");

	if (navigator.userAgent.indexOf("Android") == -1)
		$.mobile.ignoreContentEnabled = true;

	if (!isMobileIDE) app.ShowPopup = ShowPopup;
});

$(document).ready(function () {
});

$(document).live('pageshow', function (event, ui) {
	//try
	{
		//Remove IOIO links if not relevent.
		//if( document.getElementById("ioio") ) {
		//	if( app.GetName()!="IOIOScript") ioio.innerHTML = "";
		//}
		//Remove NXT links if not relevent.
		//if( document.getElementById("nxt") ) {
		//	if( app.GetName()!="NxtScript") nxt.innerHTML = "";
		//}

		//Set appropriate body style.
		if (!isAndroid || useWebIDE) document.body.className = "bodyPC";

		//Remove 'Copy' and 'Run' buttons on PC.
		// if(!isDS && !isAndroid) hidecopy();
		if (!isDS) $("div[name=divCopy] > a:contains(Run)").hide();

		// hide theme switch button inside DS
		if (isDS) $(".ui-header > .ui-btn-right").hide();

		//If on Android, save current page.
		if (isMobileIDE)
			setTimeout("app.SetData( 'CurWebDoc', document.title )", 1); //<-- to stop HTC crash.

		//Get current page id.
		curPage = $.mobile.activePage.attr('id');

		//Show plugins list if 'plugins' page is loading.
		if (curPage == "plugins") ShowPluginsPage()
		else if (curPage == "extensions") ShowExtensionsPage()

		//Append popup div in plugin docs if not exists
		if (!$(".androidPopup").parent().is(":visible"))
			$(".ui-content").append($(".androidPopup:first").parent().clone());

		$('.onlyinclude a:not(data-ajax)').attr("data-ajax", "false");
		$("a#extLink").attr("onclick", "return OpenUrl(this.href);");

		// sequential popups
		var nextPop = null, updated = false;
		$("a[data-rel=popup]").click(function () { nextPop = this; updated = 2; })
		$(window).click(function () { updated--; $("div.ui-popup-active > div").popup("close"); })
		$("div[data-role=popup]").on({
			popupafterclose: function () { if (updated > 0) nextPop?.click(); }
		}).click(function (e) { e.stopPropagation(); e.preventDefault(); });

		//Ask parent for DS adddress
		if (!isMobileIDE) {
			parent.postMessage("getaddress:", "*")
			setTimeout(function () { parent.postMessage("getaddress:", "*") }, 3000) //<-- needed for first time load.
		}
	}
	//catch( e ) {}
});

//Handle address message (Wifi ide)
function OnAddress() {
	console.log("address: " + serverAddress)

	//Timeout required to allow time for page to fully rendeder.
	//setTimeout( function()
	//{
	if (curPage == "main") {
		var link = document.querySelector("#docsLink")
		if (link) link.setAttribute("href", serverAddress + "/.edit/docs/Plugins.htm")

		link = document.querySelector("#extsLink")
		if (link) link.setAttribute("href", serverAddress + "/.edit/docs/Extensions.htm")
	}
	//}, 3000 )
}


function makeLink(name, path) {
	var btnRem = '<a href="#" data-icon="delete" data-iconpos="notext" onclick="RemovePlugin(\'$1\')"></a>';
	var link = '<a href="$1">$2</a>';
	return "<li>" + link.replace("$2", name).replace("$1", path) +
		btnRem.replace("$1", name) + "</li>\n"
}

function addList(parent, list, getPath) {
	var html = '<ul data-role="listview" data-inset="true" data-filter="false">\n';

	for (var i in list)
		if (list[i])
			html += makeLink(list[i], getPath(list[i]));

	html += "</ul>";
	$(parent).html(html);
	$(parent).trigger("create");
}

//Get list from device.
function getIdeList(cmd, cb) {
	//Get list from device.
	xmlHttp = new XMLHttpRequest();
	xmlHttp.onload = function () {
		//Extract plugins list.
		var data = JSON.parse(xmlHttp.responseText);
		if (data.status == "access denied") data.status = "IDE not connected";
		if (!data.plugins) return app.ShowPopup(data.status || xmlHttp.responseText);
		cb(data);
	};
	xmlHttp.open("get", "/ide?cmd=" + cmd, true);
	xmlHttp.send();
}

//Dynamically create plugins page.
function ShowPluginsPage() {
	var getPath = name => "plugins/" + name.toLowerCase() + "/" + name + ".html";
	try {
		//If on device.
		if (isMobileIDE) {
			var list = app.ListFolder(pluginFolder, null, null, "folders");

			for (var i in list) {
				//Get main docs file
				var files = app.ListFolder(pluginFolder + list[i],
					"(?i)" + list[i] + "\\.html", null, "RegExp");
				list[i] = list[i] && files.length > 0 ? files[0].slice(0, -5) : false;
			}
			addList('#divPlugs', list, getPath);
		}
		//If on PC.
		else {
			getplugins("getplugins", data =>
				addList('#divPlugs', data.plugins.split(","), getPath)
			);
		}
	}
	catch (e) { }
}

//Dynamically create extensions page.
function ShowExtensionsPage() {
	try {
		//If on device.
		if (isMobileIDE) {
			var fldr = "/sdcard/DroidScript/Extensions";
			var list = app.ListFolder(fldr, null, null, "folders");
			var getPath = name => "/sdcard/DroidScript/Extensions/" + name + "/Docs.html";
			addList('#divExts', list, getPath);
		}
		//If on PC.
		else {
			var getPath = name => "/Extensions/" + name + "/Docs.html";
			getplugins("getextensions", data =>
				addList('#divExts', data.extensions.split(","), getPath)
			);
		}
	}
	catch (e) { }
}

$(window).load(function () {
	//Jump to html anchors from url
	var anchor = location.href.match(/(#|\ba=)([\w%]+)/i);
	if (anchor) jumpTo(decodeURI(anchor[2]));

	var search = location.href.match(/(#|\bsearch=)([^&#]+)/i);
	var flags = location.href.match(/(#|\bflags=)(\d+)/i) || 0;
	if (search) {
		search = decodeURIComponent(search[2]);
		flags &&= Number(flags[2]);
		console.log("search", search, flags)
		/** @type {import("mark.js").MarkOptions} */
		const options = {
			acrossElements: true, caseSensitive: flags & 1, ignoreJoiners: true,
			ignorePunctuation: ":;.,-–—‒_(){}[]!'\"+=".split("")
		};
		if (flags & 2) $(".ui-content").markRegExp(RegExp(search, flags & 1 ? "sui" : "su"), options);
		else $(".ui-content").mark(search, options);
	}
});

function jumpTo(contains) {
	//Control popup
	var popup = $("div.samp > a.ui-link:contains(" + contains + ")");
	if (popup.length) {
		$("html").clearQueue()
			.animate({ scrollTop: popup.offset().top - 100 }, 300)
			.delay(350).queue(_ => popup.click());
		return false;
	}

	//Header
	var header = $(":header:contains(" + contains + ")");
	if (header.length) {
		$("html").clearQueue()
			.animate({ scrollTop: header.offset().top - 50 }, 300);

		if (has(header[0].className, "ui-collapsible-heading-collapsed"))
			header.click();
		else
			header.clearQueue().delay(100)
				.animate({ opacity: 0.1 }, 400)
				.animate({ opacity: 1.0 }, 400);

		return false;
	}
}

//Toggles between dark and default theme
function tglTheme() {
	var thm = getCookie("dsDocsTheme", "dark");
	if (has(thm, 'dark'))
		setTheme(thm.replace("dark", "default"));
	else setTheme(thm.replace("default", "dark"));
}

//Set the current theme. ([mo]default, [mo]dark)
function setTheme(theme, holo) {
	if (holo == true && !theme.startsWith("holo")) theme = "holo" + theme;
	if (curTheme == theme) return;

	console.log("setTheme('" + theme + "')");
	setCookie("dsDocsTheme", curTheme = theme);

	var lnkJQuery = document.getElementById('themeJQ');
	if (lnkJQuery) lnkJQuery.href = lnkJQuery.href.replace(/(.*\/).*/, "$1theme-" + theme + ".min.css");

	var lnkDocs = document.getElementById('themeDocs');
	if (lnkDocs) lnkDocs.href = lnkDocs.href.replace(/(.*\/).*/, "$1docs-" + theme + ".min.css");

	var lnkPrism = document.getElementById('themePrism');
	if (lnkPrism) lnkPrism.href = lnkPrism.href.replace(/(.*\/).*/, "$1" + theme + ".min.css");
}

var indexContent = [];
function fetchIndex(cb) {
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onload = function () {
		indexContent = xmlHttp.responseText.split("\n");
		cb();
	}
	xmlHttp.open("get", "index.txt", true);
	xmlHttp.send();
}

//Get list from device.
function searchDocs(filterName, filterContent, fetched) {
	if (fetched && !indexContent) return;
	if (!indexContent.length) {
		fetchIndex(function () {
			searchDocs(filterName, filterContent, true)
		});
		return;
	}

	var nameFilter = $("#nameFilter").css("border-color", "");
	var contentFilter = $("#contentFilter").css("border-color", "");
	if (!filterName) filterName = nameFilter.val();
	if (!filterContent) filterContent = contentFilter.val();
	if (!filterName && !filterContent) return;

	var useReg = $("#regex-toggle").prop("checked");
	var useCase = $("#case-toggle").prop("checked");

	if (useReg) {
		try { RegExp(filterName); }
		catch (e) { nameFilter.css("border-color", "red"); return; }
		try { RegExp(filterContent); }
		catch (e) { contentFilter.css("border-color", "red"); return; }
	}

	function match(s, m) {
		if (!m) return true;
		if (useReg) return s.match(RegExp(m, useCase ? "i" : ""))
		if (useCase) return s.includes(m);
		return s.toLowerCase().includes(m.toLowerCase());
	}

	var max = 100;
	var items = indexContent
		.filter(s => match(s, filterContent))
		.map(s => s.slice(0, s.indexOf(" := ")))
		.filter(s => match(s, filterName))
		.map(url => [url, `?search=${encodeURIComponent(filterContent)}&flags=${2 * useReg + useCase}`])
		.map(([url, flags]) => `<li><a href='${url}${flags}'>${url.replace('.htm', '')}</a></li>`);

	var list = $("#listview");
	if (!items.length) return $("#results").text("Results: 0");
	$("#results").text(`Results: ${Math.min(items.length, max)} of ${items.length}`);

	list.empty().append(items.slice(0, max).join('\n')).listview("refresh");
}

//Shortcut for string.contains
function has(s, t) { return s.indexOf(t) > -1; }

function setCookie(name, val) {
	name = name.replace(/\W+/g, '');
	window.name = window.name.replace(new RegExp(";" + name + "=[^;]*;|$"), ";" + name + "=" + val + ";");
}

function getCookie(name, dflt) {
	name = name.replace(/\W+/g, '');
	return (window.name.match(new RegExp(";" + name + "=([^;]*);")) || [null, dflt])[1];
}

function OpenUrl(url, type, choose) {
	if (isMobileIDE) app.OpenUrl(url, type, choose);
	else window.open(url);
	return false;
}

function IsApp() {
	if (isDS || useWebIDE) return true;
	ShowPopup("Not running in DroidScript app.");
	return false;
}

function OpenSamples() {
	if (isDS) app.Execute("if(typeof btnSamp_OnTouch == 'function') btnSamp_OnTouch();");
	else {
		var e = parent.$(".nav-tabs > li > a:contains(Samples)");
		if (e.length) e.click()
		else IsApp();
	}
}

function OpenSample(name) {
	OpenSamples();
	if (isMobileIDE)
		app.Execute("if(typeof lstSamp_OnTouch == 'function') lstSamp_OnTouch('" + name + "', '', 'x')");
	else if (isWebIDE) {
		var e = parent.$("#samplesContentList > div:contains(" + name + ") > a")
		if (e.length) e.click();
	}
	else IsApp();
}

function RemovePlugin(plugName) {
	if (isMobileIDE) {
		app.Execute("if(typeof AskRemovePlugin == 'function') AskRemovePlugin('" + plugName + "');" +
			"else if(typeof RemovePlugin == 'function') RemovePlugin('" + plugName + "');");
	}
	else if (isWebIDE)
		RemoteExec('ide', "RemovePlugin('" + plugName + "')")

	setTimeout(function () { location.reload() }, 1000)
}

function RemoveExtension(extName) {
	if (isMobileIDE)
		app.Execute("AskRemoveExtension('" + extName + "');");
	else if (isWebIDE)
		RemoteExec('ide', "RemoveExtension('" + extName + "')")

	setTimeout(function () { location.reload() }, 1000)
}

//Execute code on the connected device.
//'app' mode runs as a stand-alone app.
//'ide' mode runs inside ide.
//'usr' mode runs inside current user app.
//'file' mode runs as a stand-alone app from a file.
function RemoteExec(mode, code) {
	var xhr = new XMLHttpRequest();
	xhr.open("get", serverAddress + "/ide?cmd=execute&mode=" + mode + "&code=" + encodeURIComponent(btoa(code)), true);
	xhr.send();
}

// app.ShowPopup equivalent for browsers
function ShowPopup(msg) {
	var apop = $(".androidPopup");
	// .animate() works as cancelable delay
	apop.stop(true).fadeOut(100, function () { apop.text(msg); })
		.fadeIn(200).animate({ opacity: 1 }, 1500).fadeOut(400);
}

function switchPopup(old, newId) {
	$(old.parentNode).one({
		popupafterclose: function () {
			var o = $(newId);
			if (!o.length) return jumpTo(newId);
			o.popup("open", { transition: "pop" });
		}
	}).popup("close");
}
