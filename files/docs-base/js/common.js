
if(!String.prototype.startsWith) {
	Object.defineProperty(String.prototype, 'startsWith', {
		value: function(search, pos) {
			pos = pos | 0;
			return this.substring(pos, pos + search.length) === search;
		}
	});
}

//Get navigator type.
var agent = navigator.userAgent;
console.log( "agent = " + agent );

var isChromeOS = ( !!agent.match(/Chrome OS|Chromebook|PixelBook/) );
var useWebIDE  = ( has(agent, "Remix") || isChromeOS );
var isAndroid  = ( has(agent, "Android") );
var isDS       = ( location.href.match(/\bds=true\b/) != null );

var isWebIDE = isDS && !isAndroid;
var isMobileIDE = isDS && isAndroid;
var serverAddress = "";

isDS = isDS || getCookie("isDS") == 'true';
setCookie("isDS", isDS);

// set current theme
var curTheme = location.href.match(/\btheme=([-\w]*)/);
if(curTheme && history.replaceState)
	try { history.replaceState({}, "Documentation", "Docs.htm"); } catch(e) {}
setTheme(curTheme ? curTheme[1] : getCookie("dsDocsTheme", "dark"));


//Hook into cross frame messaging
window.addEventListener("message", function(event)
{
	console.log("msg: " + event)
	var params = event.data.split("|");
	var cmd = params[0];

	if( cmd == "address" )
		serverAddress = params[1];
	else if( cmd == "setTheme" )
		setTheme(params[1]);
} );

//Change defaults.
//Note: I have also modified animation-duration:350ms->100ms in JQM css files;
$(document).on("mobileinit", function()
{
	//$.extend( $.mobile , { ajaxEnabled: false }); //<-- so #bookmarks work.
	$.mobile.defaultPageTransition = 'none'; //'fade';
	$.mobile.buttonMarkup.hoverDelay = 10;

	if( navigator.userAgent.indexOf("Android")==-1 ) {
		$.mobile.page.prototype.options.addBackBtn = true;
		$.mobile.page.prototype.options.backBtnTheme  = "c";
	}
	//$.mobile.activeBtnClass = 'unused';
	//$.mobile.removeClass("ui-btn-hover-c").addClass("ui-btn-up-c");

	if( navigator.userAgent.indexOf("Android")==-1 )
		$.mobile.ignoreContentEnabled = true;

	if(!isMobileIDE) app.ShowPopup = ShowPopup;

	//Ask parent for DS adddress.
	parent.postMessage( "getaddress:", "*" );
});

$(document).ready(function() {
});

$(document).live( 'pageshow',function(event, ui)
{
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
		if( !isAndroid || useWebIDE )
			document.body.className = "bodyPC";

		//Remove 'Copy' and 'Run' buttons on PC.
		// if(!isDS && !isAndroid) hidecopy();
		if( !isDS ) $("div[name=divCopy] > a:contains(Run)").hide();

		// hide theme switch button inside DS
		if( isDS ) $(".ui-header > .ui-btn-right").hide();

		//If on Android, save current page.
		if( isMobileIDE ) {
			setTimeout( "app.SetData( 'CurWebDoc', document.title )", 1 ); //<-- to stop HTC crash.
		}

		//Get current page id.
		var curPage = $.mobile.activePage.attr('id');

		//Show plugins list if 'plugins' page is loading.
		if( curPage == "plugins" ) {
			OnPageShow();
		}
	}
	//catch( e ) {}
});

//Dynamically create plugins page.
function OnPageShow()
{
	try
	{
		//If on device.
		if( isMobileIDE )
		{
			var html = "<ul data-role=\"listview\" data-inset=\"true\" data-filter=\"false\">\n";
			var fldr = "/sdcard/DroidScript/.edit/docs/plugins"; //app.GetPrivateFolder( "Plugins" );
			var list = app.ListFolder( fldr, null, null, "folders");

			for( var i = 0; i < list.length && list[0] != ""; i++ )
			{
				//Get main docs file
				var plgdir = list[i];
				var files = app.ListFolder( fldr + "/" + plgdir, "(?i)" + plgdir + "\\.html", null, "RegExp" );
                if(files.length == null) continue;
				var url = "plugins/" + plgdir + "/" + files[0];
				html += "<li><a href=\"" + url + "\">" + files[0] + "</a></li>\n";
			}

			html += "</ul>";
			$('#divPlugs').html(html);
			$('#divPlugs').trigger("create");
		}
		//If on PC.
		else
		{
			//Get list from device.
			xmlHttp = new XMLHttpRequest();
			xmlHttp.onload = function()
			{
				//Extract plugins list.
				var list = JSON.parse(xmlHttp.responseText).plugins.split(",");

				//Build html list.
				var html = "<ul data-role=\"listview\" data-inset=\"true\" data-filter=\"false\">";
				for( var i = 0; i < list.length && list[0] != ""; i++ )
				{
					var plugTitle = list[i];
					var url = "plugins/" + plugTitle.toLowerCase() + "/" + plugTitle + ".html";
					html += "<li><a href=\"" + url + "\">" + plugTitle + "</a></li>";
				}
				html += "</ul>";
				$('#divPlugs').html(html);
				$('#divPlugs').trigger("create");
			};
			xmlHttp.open( "get", "/ide?cmd=getplugins", true );
			xmlHttp.send();
		}
	}
	catch( e ) {}
}

$(window).load(function()
{
	//Jump to html anchors from url
	var anchor = location.href.match(/#([\w%]+)/i);
	if(anchor) jumpTo(decodeURI(anchor[1]));
	else if(sessionStorage.scrollPosition)
		$("html").animate({scrollTop: sessionStorage.scrollPosition}, 300);
});

$(window).unload(function()
{
	//Scroll to last page y position
	var scrollPosition = $(document).scrollTop();
	sessionStorage.scrollPosition = scrollPosition;
});

function jumpTo(contains)
{
	//Control popup
	var popup = $("div.samp > a.ui-link:contains(" + contains + ")");
	if(popup.length) {
		$("html").animate({ scrollTop: popup.offset().top - 100 }, 300)
			.delay(350).queue(function(){ popup.click(); });
		return false;
	}

	//Header
	var header = $(":header:contains(" + contains + ")");
	if(header.length) {
		$("html").animate({ scrollTop: header.offset().top - 50 }, 300);

		if(has(header[0].className, "ui-collapsible-heading-collapsed"))
			header.click();
		else
			header.delay(100)
				.animate({opacity: 0.1}, 400)
				.animate({opacity: 1.0}, 400);

		return false;
	}
}

//Toggles between dark and default theme
function tglTheme() {
	var thm = getCookie("dsDocsTheme", "dark");
	if(has(thm, 'dark'))
		 setTheme(thm.replace("dark", "default"));
	else setTheme(thm.replace("default" , "dark"));
}

//Set the current theme. ([mo]default, [mo]dark)
function setTheme( theme, holo )
{
	if(holo == true && !theme.startsWith("holo")) theme = "holo" + theme;
	if(curTheme == theme) return;

	console.log("setTheme('" + theme + "')");
	setCookie("dsDocsTheme", curTheme = theme);

	var lnkJQuery = document.getElementById('themeJQ');
	if(lnkJQuery) lnkJQuery.href = lnkJQuery.href.replace(/(.*\/).*/, "$1theme-" + theme + ".min.css");

	var lnkDocs = document.getElementById('themeDocs');
	if(lnkDocs) lnkDocs.href = lnkDocs.href.replace(/(.*\/).*/, "$1docs-" + theme + ".min.css");

	var lnkPrism = document.getElementById('themePrism');
	if(lnkPrism) lnkPrism.href = lnkPrism.href.replace(/(.*\/).*/, "$1" + theme + ".min.css");
}

//Shortcut for string.contains
function has(s, t) { return s.indexOf(t) > -1; }

function setCookie(name, val)
{
	name = name.replace(/\W+/g, '');
	window.name = window.name.replace(new RegExp(";"+name+"=[^;]*;|$"), ";"+name+"="+val+";");
}

function getCookie(name, dflt)
{
	name = name.replace(/\W+/g, '');
	return (window.name.match(new RegExp(";"+name+"=([^;]*);")) || [null, dflt])[1];
}

function OpenUrl( url, type, choose )
{
	if(isDS) app.OpenUrl(url, type, choose );
	else window.open(url);
	return false;
}

function IsApp()
{
	if(isDS || useWebIDE) return true;
	ShowPopup("Not running in DroidScript app.");
	return false;
}

function OpenSamples()
{
	if(isDS) app.Execute("if(typeof btnSamp_OnTouch == 'function') btnSamp_OnTouch();");
	else {
		var e = parent.$(".nav-tabs > li > a:contains(Samples)");
		if(e.length) e.click()
		else IsApp();
	}
}

function OpenSample(name)
{
	OpenSamples();
	if(isDS) app.Execute("if(typeof lstSamp_OnTouch == 'function') lstSamp_OnTouch('" + name + "', '', 'x')");
	else {
		var e = parent.$("#samplesContentList > div:contains(" + name + ") > a")
		if(e.length) e.click();
		else IsApp();
	}
}

// app.ShowPopup equivalent for browsers
function ShowPopup(msg)
{
	var apop = $("#appPopup");
	// .animate() works as cancelable delay
	apop.stop(true).fadeOut(100, function() { apop.text(msg); })
		.fadeIn(200).animate({opacity:1}, 1500).fadeOut(400);
}

function switchPopup(old, newId)
{
	$(old.parentNode).one({
		popupafterclose: function()
		{
			$(newId).popup("open", {transition: "pop"});
		}
	}).popup("close");
}
