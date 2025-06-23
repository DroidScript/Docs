// ------------- HEADER SECTION -------------


/** # CreateWebView #
 * @abbrev web
 * @brief Returns a new WebView object
 *
 * $$ web = app.CreateWebView(width=-1, height=-1, options='', zoom?) $$
 * @param {num_frc} [width=-1]
 * @param {num_frc} [height=-1]
 * @param {str_com} [options=''] AllowZoom:Allows the user to zoom the page,AutoZoom,ClearCookies:Clear all webview cookies at startup,FillX/Y,Local:loads URLs starting with / from /Storage/[AppName\]/ instead,NoAccel:for OrangePi support,NoActionBar:prevents copy/paste popup,IgnoreErrors,IgnoreSSLErrors,NoApp:prevent app&period;* calls,NoCapture:Disable camera,NoCors:attempts to disable CORS and i-frame restrictions,NoLocate:Disable location sensor,NoLongTouch,NoPause:Dont pause WebView when app in background,NoScrollBars,Overview:Zoom to full width of page,Persist:keeps file cache\, history and form data between re-loads/startups,Progress:Shows a progress indicator when loading,ScrollFade,UseBasicInput:makes softkeyboard useful for html code editors,UseBrowser:Open links in external browser,Wide:"force page using “wide” viewport"
 * @param {num_prc} [zoom]
 * @returns dso-WebView
*/


// ------------- LONG DESCRIPTION -------------

/** @Description
You can create a control to display local or remote web pages in your App using the **CreateWebView** method.
If you are loading remote web pages, then you might want to use the **SetOnProgress** method to set the name of a callback function that you want called to report the progress of loading the page.

You can use the **LoadUrl** method to load an internal or external web page or the **LoadHtml** method to load text directly from within your App.
<js>web.LoadUrl( url, options );</js>
<js> web.LoadHtml( html, baseFolder, options );</js>

If you need to, you can use the **Execute** method to execute JavaScript code within the WebView.
<js>web.Execute( text );</js>
 */



// ------------- VISIBLE METHODS & PROPERTIES -------------


/** @extern AdjustColor */

/** @extern Animate */

/** ### Back ###
 * @brief Load previous page
 * Loads the previous page from history.
 * $$ web.Back() $$
 */


/** @extern Batch */

/** @extern data */

/** ### CanGoBack ###
 * @brief Check if history contains a previous page
 * Check whether the user can travel back in history.
 * $$ web.CanGoBack() $$
 * @returns bin
 */


/** ### CanGoForward ###
 * @brief Check if history has a following page
 * Check whether the user can travel forward in history.
 * $$ web.CanGoForward() $$
 * @returns bin
 */


/** ### Capture ###
 * @brief Capture WebView as png
 * Captures the visible area of the web view to a file.
 * $$ web.Capture(file) $$
 * @param {str_ptf} file
 */


/** ### ClearCookies ###
 * @brief Clear all cookies
 * Clears all cookies that are currently defined within that webview instance.
 * $$ web.ClearCookies() $$
 */


/** @extern ClearFocus */

/** ### ClearHistory ###
 * Clears the page history for Back() and Forward()
 * $$ web.ClearHistory() $$
 */


/** ### Execute ###
 * @brief Execute JS code inside the WebView
 * Executes JavaScript code inside the WebView and passes the result to the callback
 * $$ web.Execute(code, callback?) $$
 * @param {str_jsc} code
 * @param {fnc_json} [callback] {"pNames":["result"],"pTypes":["all"]}
 */


/** @extern Focus */

/** ### Forward ###
 * @brief Load following page
 * Loads the following page from history.
 * $$ web.Forward() $$
 */


/** ### Func ###
 * Call functions defined inside a webview
 * $$ web.Func(name, ...args) $$
 * @param {str} name
 * @param {all} ...args
 */


/** @extern GetAbsHeight */

/** @extern GetAbsWidth */

/** @extern GetHeight */

/** @extern GetLeft */

/** @extern GetParent */

/** @extern GetPosition */

/** @extern GetTop */

/** ### GetType ###
 * Returns the control class name.
 * $$ web.GetType() $$
 * @returns str-WebView
 */


/** ### GetUrl ###
 * @brief Get current url
 * Returns the current website url.
 * $$ web.GetUrl() $$
 * @returns str_url
 */


/** ### GetHomeUrl ###
 * @brief Get starting url
 * Returns the starting website url.
 * $$ web.GetHomeUrl() $$
 * @returns str_url
 */


/** @extern GetVisibility */

/** @extern GetWidth */

/** @extern Gone */

/** @extern Hide */

/** @extern IsEnabled */

/** @extern IsOverlap */

/** @extern IsVisible */

/** ### LoadFailed ###
 * @brief Returns if the page failed to load
 * Returns if the currently loaded page had a loading error.
 * $$ web.LoadFailed() $$
 * @returns bin
 */


/** ### LoadHtml ###
 * @brief Load html to WebView
 * Loads html code to the WebView.
 * $$ web.LoadHtml(html, baseFolder?, options?) $$
 * @param {str_htm} html
 * @param {str_ptd} [baseFolder]
 * @param {str_com} [options] AllowZoom:Allows the user to zoom the page,AutoZoom,Wide:"force page using “wide” viewport",FillX/Y,NoActionBar:prevents copy/paste popup,IgnoreErrors,IgnoreSSLErrors,NoApp:prevent app&period;* calls,NoCapture:Disable camera,NoLocate:Disable location sensor,NoLongTouch,NoPause:Dont pause WebView when app in background,NoRedirect:blocks assert redirect,NoScrollBars,Overview:Zoom to full width of page,Progress:Shows a progress indicator when loading,ScrollFade,UseBasicInput:makes softkeyboard useful for html code editors,UseBrowser:Open links in external browser
 */


/** ### LoadUrl ###
 * @brief Load url to WebView
 * Loads an url to the WebView
 * $$ web.LoadUrl(url, options?) $$
 * @param {str_url} url
 * @param {str_com} [options] AllowZoom:Allows the user to zoom the page,AutoZoom,Wide:"force page using “wide” viewport",FillX/Y,NoActionBar:prevents copy/paste popup,IgnoreErrors,IgnoreSSLErrors,NoApp:prevent app&period;* calls,NoCapture:Disable camera,NoLocate:Disable location sensor,NoLongTouch,NoPause:Dont pause WebView when app in background,NoRedirect:blocks assert redirect,NoScrollBars,Overview:Zoom to full width of page,Progress:Shows a progress indicator when loading,ScrollFade,UseBasicInput:makes softkeyboard useful for html code editors,UseBrowser:Open links in external browser
 */


/** @extern Method */

/** ### Print ###
 * @brief Print webpage via anddroid printer dialog
 * Print current page via the builtin android printer dialog.
 *
 * Note: Available since Android 4.4 KitKat
 * $$ web.Print() $$
 */


/** ### Reload ###
 * @brief Reload current page
 * Reloads the current page
 * $$ web.Reload() $$
 */


/** @extern SetBackAlpha */

/** @extern Resize */

/** @extern SetBackColor */

/** @extern SetBackGradient */

/** @extern SetBackGradientRadial */

/** @extern SetBackground */

/** ### SetBlockedUrls ###
 * @brief Block urls from loading
 * Define a list of urls that are blocked for loading.
 * $$ web.SetBlockedUrls(urls) $$
 * @param {lst} urls [ urls:str ]||str-urls
 */


/** ### SetContextMenus ###
 * @brief Define context menus to listen for
 * Define which context menus are available for SetOnContextMenu.
 * $$ web.SetContextMenus(links?, images?) $$
 * @param {str} [links] Copy URL\,Open URL
 * @param {str} [images] Download Image
 */


/** @extern SetColorFilter */

/** @extern SetDescription */

/** @extern SetEnabled */

/** ### SetErrorPage ###
 * @brief Define error page
 * Define a url loaded when an error occured.
 * $$ web.SetErrorPage(url) $$
 * @param {str_url} url
 */


/** ### SetInject ###
 * @brief Inject scripts on page load
 * Define a javscript file that is immediately executed after a page was loaded inside the webview.
 * This is useful for modifying elements on a webpage.
 * 
 * <premium>
 * $$ web.SetInject(file) $$
 * @param {str_pth} file
 */


/** @extern SetMargins */

/** ### SetTextZoom ###
 * Scales the html text by a given factor.
 * $$ web.SetTextZoom(zoom) $$
 * @param {num_frc} zoom
 */

/** ### SetOnBlob ###
 * @brief Handle objectUrls/blobs
 * %cb% recieved an objectUrls/blobs
 * $$ web.SetOnBlob(callback) $$
 * @param {fnc_json} callback {"pNames":["objectUrls"],"pTypes":["str"]}
 */


/** ### SetOnConsole ###
 * @brief Called when message logged to console
 * %cb% a message was logged to the console.
 * $$ web.SetOnConsole(callback) $$
 * @param {fnc_json} callback {"pNames":["msg"],"pTypes":["str"]}
 */


/** ### SetOnContextMenu ###
 * @brief Called when a context menu was used
 * %cb% a context menu defined by SetContextMenus was used.
 * $$ web.SetOnContextMenu(callback) $$
 * @param {fnc_json} callback {"pNames":["item","url","img","type"],"pTypes":["str","str","str","str"]}
 */


/** ### SetOnError ###
 * @brief Called when an error occured
 * %cb% an error occured.
 * $$ web.SetOnError(callback) $$
 * @param {fnc_json} callback {"pNames":["error"],"pTypes":["str"]}
 */


/** ### SetOnProgress ###
 * @brief Called when loading progress changed
 * %cb% the webpage loading progress changed
 * $$ web.SetOnProgress(callback) $$
 * @param {fnc_json} callback {"pNames":["progress"],"pTypes":["num_prc"]}
 */


/** ### SetOnRequest ###
 * @brief Traps HTTP Requests
 * Called when a HTTP Request was made in the webview.
 * $$ web.SetOnRequest(callback) $$
 * @param {fnc_json} callback {"pNames":["url","method","isMain","isRedirect"],"pTypes":["str","str","bin","bin"]}
 */


/** @extern SetOnTouch #2088093920 */

/** ### SetOnUrl ###
 * @brief Called when link clicked
 * %cb% the user clicked a link.
 * $$ web.SetOnUrl(callback) $$
 * @param {fnc_json} callback {"pNames":["url"],"pTypes":["str_url"]}
 */

/** ### SetOptions ###
 * @brief Set WebView options
 * Set WebView options at runtime. Refer to "options" param for available options.
 * $$ web.SetOptions( options ) $$
 * @param {str_com} options
 */

/** @extern SetPadding */

/** @extern SetPosition */

/** ### SetRedirect ###
 * @brief Add url redirection rule
 * Add a url redirection rule.
 * $$ web.SetRedirect(urlFrom, urlTo) $$
 * @param {str_url} urlFrom Uses regex url matching
 * @param {str_url} urlTo
 */


/** @extern SetScale */

/** @extern SetSize */

/** ### SetTouchMode ###
 * @brief En/Disable touchmode on the control
 * Set the control in touch mode.
 * $$ web.SetTouchMode(mode) $$
 * @param {bin} mode
 */


/** ### SetUseBrowser ###
 * @brief Define which URLs open in browser
 * Gives control over which URLs open a browser when clicked by the user.
 * $$ web.SetUseBrowser(urlFilter) $$
 * @param {str} urlFilter
 */


/** ### SetUserAgent ###
 * @brief Set/Add custom user agent
 * Defines a custom user agent or add to the default one
 * $$ web.SetUserAgent(agent, options?) $$
 * @param {str} agent
 * @param {str} [options] Add-appends to default user agent
 */


/** ### SetUserCreds ###
 * @brief Set authentication/login data
 * Set login data for websites that require authentication.
 * $$ web.SetUserCreds(name, password) $$
 * @param {str} name
 * @param {str} password
 */


/** @extern SetVisibility */

/** @extern SetWeight */

/** @extern Show */

/** ### SimulateKey ###
 * @brief Simulate key event
 * Simulates a key event on an app object.
 *
 * You can find the complete list of key names on the [Android Developer Page](https://developer.android.com/reference/android/view/KeyEvent#KEYCODE_0).
 * $$ web.SimulateKey(keyName, modifiers?, pause?) $$
 * @param {str} keyName
 * @param {str} [modifiers] META_META_ON,META_RIGHT_ON,NUM_LOCK_ON,SCROLL_LOCK_ON,SHIFT_LEFT_ON,SHIFT_MASK,SHIFT_ON,SHIFT_RIGHT_ON,SYM_ON
 * @param {num} [pause]
 */


/** ### Stop ###
 * @brief Stop loading processes
 * Stops any web loading.
 * $$ web.Stop() $$
 */


/** @extern Tween */


// ------------- SAMPLES -------------



/**
@sample Remote
function OnStart()
{
    lay = app.CreateLayout( "linear", "VCenter,FillXY" );

     <b>web = app.CreateWebView( 1, 1, "Progress" );
     web.SetOnProgress( web_OnProgess );
     lay.AddChild( web );</b>

     app.AddLayout( lay );

     web.LoadUrl( "http:///www.google.com" );
}

function web_OnProgess( progress )
{
     app.Debug( "progress = " + progress );
}
 */



/**
@sample Local File
function OnStart()
{
    lay = app.CreateLayout( "linear", "VCenter,FillXY" );

     <b>web = app.CreateWebView( 0.8, 0.8 );
     web.SetBackColor( "#00000000" );
     lay.AddChild( web );</b>

     app.AddLayout( lay );

     web.LoadUrl( "file:///Sys/Html/Page.htm" );
}
 */



/**
@sample Direct Html
function OnStart()
{
    lay = app.CreateLayout( "linear", "VCenter,FillXY" );

    <b>web = app.CreateWebView( 0.8, 0.8 );
    web.SetBackColor( "#00000000" );
    lay.AddChild( web );</b>

    app.AddLayout( lay );

    html = "<html><body><center>" +
        "    <img src='Img/Droid2.png'>" +
        "    <div style='color:white; font-size:30;'>" +
        "    Hello World!</div><br>" +
        "</center></body></html>";

    web.LoadHtml( html, "file:///Sys/" );
}
 */



/**
@sample Python Remote
from native import app

def OnStart():
    lay = app.CreateLayout( "linear", "VCenter,FillXY" )

    <b>web = app.CreateWebView( 1, 1, "Progress" )
    web.SetOnProgress( web_OnProgess )
    lay.AddChild( web )</b>

    app.AddLayout( lay )

    web.LoadUrl( "http:///www.google.com" )

def web_OnProgess( progress ):
    app.Debug( "progress = " + str(progress) )
 */



/**
@sample Python Local File
from native import app

def OnStart():
    lay = app.CreateLayout( "linear", "VCenter,FillXY" )

    <b>web = app.CreateWebView( 0.8, 0.8 )
    web.SetBackColor( "#00000000" )
    lay.AddChild( web )</b>

    app.AddLayout( lay )

    web.LoadUrl( "file:///Sys/Html/Page.htm" )
 */



/**
@sample Python Direct Html
from native import app

from native import app

def OnStart():
    lay = app.CreateLayout( "linear", "VCenter,FillXY" )

    <b>web = app.CreateWebView( 0.8, 0.8 )
    web.SetBackColor( "#00000000" )
    lay.AddChild( web )</b>

    app.AddLayout( lay )

    html = """
<html>
  <body>
    <center>
      <img src='Img/Droid2.png'>
      <div style='color:white; font-size:30;'>Hello World!</div>
      <br>
      </center>
    </body>
</html>
"""

    web.LoadHtml( html, "file:///Sys/" )
 */

