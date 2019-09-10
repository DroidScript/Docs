
//Get navigator type.
var agent = navigator.userAgent;
console.log( "agent = " + agent );

var isChromeOS = ( agent.indexOf("Chrome OS") > -1 || agent.indexOf("Chromebook") > -1 || agent.indexOf("PixelBook") > -1 );
var useWebIDE = ( agent.indexOf("Remix") > -1 || isChromeOS );
var isAndroid = ( agent.indexOf("Android") > -1 );
var isDS = ( agent.indexOf("; wv)") > -1 );
var serverAddress = "";

// set current theme
var curTheme = location.href.match(/[^?]*[?&]theme=([^&]*)/);
if(curTheme && history.replaceState)
	try { history.replaceState({}, "Documentation", "Docs.htm"); } catch(e) {}
setTheme(curTheme ? curTheme[1] : getTheme());

//Hook into cross frame messaging
window.addEventListener("message", function(event)
{
	console.log("msg: "+event)
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

	if(!isDS) app.ShowPopup = ShowPopup;

	//Ask parent for DS adddress.
	parent.postMessage( "getaddress:", "*" );

	// check theme in other browsers after history fwd/bck
	// workaround for pages being loaded from cache
	if(false && !isDS && !useWebIDE) setInterval(function()
	{
		if(curTheme != getTheme()) setTheme(getTheme());
	}, 200);
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
		if( !isAndroid || useWebIDE && !isChromeOS )
			hidecopy();

		//If on Android, save current page.
		if( isDS && !useWebIDE ) {
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
		if( isAndroid && !useWebIDE )
		{
			//Create a list of plugins.
			var html = "<ul data-role=\"listview\" data-inset=\"true\" data-filter=\"false\">";
			var fldr = app.GetPrivateFolder( "Plugins" );
			var list = app.ListFolder( fldr, "");
			for( var i = 0; i < list.length && list[0] != ""; i++ )
			{
				//Filter for folders.
				var plugName = list[i];
				if( app.IsFolder( fldr+"/"+plugName ) )
				{
					//Get case sensitive title of plugin from inc file.
					var incFiles = app.ListFolder( fldr + "/" + plugName, ".inc", 1 );
					if( incFiles.length > 0 ) {
						var jarName = incFiles[0];
						var plugTitle = jarName.split(".")[0];
						var url = "file://" + fldr + "/" + plugName + "/" + plugTitle + ".html";
						html += "<li><a href=\"" + url + "\">" + plugTitle + "</a></li>";
					}
				}
			}
			html += "</ul>";
			$('#divPlugs').html(html);
			$('#divPlugs').trigger("create")
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

$(window).load(function() {
	var popup = location.href.match(/#([a-z]+)/i);
	if(popup)
	{
		popup = $("a.ui-link:contains(" + popup[1] + ")");
		$("html").animate({ scrollTop: popup.offset().top - 100 }, 300)
			.delay(350).queue(function(){ popup.click(); });
	}
	else if(sessionStorage.scrollPosition)
	{
		$("html").animate({scrollTop: sessionStorage.scrollPosition}, 300);
	}
});

$(window).unload(function() {
	var scrollPosition = $(document).scrollTop();
	sessionStorage.scrollPosition = scrollPosition;
	console.log("set: " + sessionStorage.scrollPosition)
});

// set the current theme. (default, dark)
function setTheme( theme )
{
	if(curTheme == theme) return;
	curTheme = theme;
	window.name = window.name.replace(/\bdsDocsTheme=.*?;|^/, "dsDocsTheme=" + theme + ";");
	console.log("setTheme('" + theme + "')");

	var lnkJQuery = document.getElementById('themeJQ');
	if(lnkJQuery) lnkJQuery.href = lnkJQuery.href.replace(/(.*\/).*/, "$1theme-" + theme + ".min.css");

	var lnkDocs = document.getElementById('themeDocs');
	if(lnkDocs) lnkDocs.href = lnkDocs.href.replace(/(.*\/).*/, "$1docs-" + theme + ".min.css");

	var lnkPrism = document.getElementById('themePrism');
	if(lnkPrism) lnkPrism.href = lnkPrism.href.replace(/(.*\/).*/, "$1" + theme + ".min.css");
}

// get current theme from localStorage
function getTheme() {
	return window.name.replace(/\bdsDocsTheme=(.*?);/, "$1") || "default";
}

function OpenUrl( url, type, choose ) {
	if(isAndroid) app.OpenUrl(url, type, choose );
	else window.open(url);
	return false;
}
			
// app.ShowPopup equivalent for browsers
function ShowPopup(msg) {
	var apop = $("#appPopup");
	// .animate() works as cancelable delay
	apop.stop(true).fadeOut(100, function() { apop.text(msg); })
		.fadeIn(200).animate({opacity:1}, 1500).fadeOut(400);
}

function switchPopup(old, newId) {
	$(old.parentNode).one({
		popupafterclose: function() {
			$(newId).popup("open", {transition: "pop"});
		}
	}).popup("close");
}

