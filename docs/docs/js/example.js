

window.onload = hidecopy;


// Remove 'Copy' buttons on PC.
function hidecopy()
{
	if( !isAndroid || useWebIDE )
	{
		var divs = document.getElementsByName("divCopy");
		for(var i = 0; i < divs.length; ++i)
		{
			// For each button....
			for(var j = 0; j < divs[i].children.length; ++j)
			{
				// .... if it is a Copy button (i.e. onclick="copy(..)"), then hide it
				var child = divs[i].children[j];
				if(child.getAttribute("onclick").indexOf("copy") == 0)
				{
					child.style.display = "none";
				}
			}
		}
	}
}

function copy( div )
{
	if( navigator.userAgent.indexOf("Android") > -1 ) //
	{
		var txt = div.innerText || div.textContent;
		app.SetClipboardText( txt.replace( /\xa0/g, " " ) ); //replace nbsp chars
		app.ShowPopup("Text copied to clipboard");
	}
	else
		copyToClipboard( div.innerText || div.textContent );
}

function demo( div )
{
	if( isAndroid && !useWebIDE )
	{
		app.WriteFile( "/sdcard/.DroidScript/Temp/~demo.js", div.innerText || div.textContent );
		app.Execute( "RunDemo( '/sdcard/.DroidScript/Temp/~demo.js' );" );
		//app.Execute( "try { StartApp('/sdcard/.DroidScript/Temp/~demo.js') } catch(e) { app.ShowPopup('Whoops! Something went wrong.'); }" );
	}
	else
		parent.postMessage( "demo:" + (div.innerText || div.textContent), "*" )
}

function run( file )
{
	if( isAndroid && !useWebIDE )
		app.Execute( "RunDemo( \""+file+"\" );" );
	else
		parent.postMessage( "run:" + file, "*" )
}

function copyToClipboard(text)
{
	if (window.clipboardData) {
		window.clipboardData.setData("Text", text);  //IE
	}
	else {
		unsafeWindow.netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
		const clipboardHelper = Components.classes["@mozilla.org/widget/clipboardhelper;1"].getService(Components.interfaces.nsIClipboardHelper);
		clipboardHelper.copyString(text);
	}
}
