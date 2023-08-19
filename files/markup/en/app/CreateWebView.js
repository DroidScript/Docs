// ------------- HEADER SECTION ------------- 


/** # CreateWebView #
 * @abbrev web
 * @brief Returns a new WebView object
 * 
 * $$ web = app.CreateWebView(width, height, options, zoom) $$ 
 * @param {num_frc} width 
 * @param {num_frc} height 
 * @param {str_com} options AllowZoom:Allows the user to zoom the page,AutoZoom,Wide:"force page using “wide” viewport",FillX/Y,NoActionBar:prevents copy/paste popup,IgnoreErrors,IgnoreSSLErrors,NoApp:prevent app&period;* calls,NoCapture:Disable camera,NoLocate:Disable location sensor,NoLongTouch,NoPause:Dont pause WebView when app in background,NoScrollBars,Overview:Zoom to full width of page,Progress:Shows a progress indicator when loading,ScrollFade,UseBasicInput:makes softkeyboard useful for html code editors,UseBrowser:Open links in external browser
 * @param {num_prc} zoom 
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
 * Loads the previous page from history.
 * $$ web.Back() $$
 */


/** @extern Batch */

/** ### CanGoBack ###
 * Check whether the user can travel back in history.
 * $$ web.CanGoBack() $$
 * @returns bin
 */


/** ### CanGoForward ###
 * Check whether the user can travel forward in history.
 * $$ web.CanGoForward() $$
 * @returns bin
 */


/** ### Capture ###
 * Captures the visible area of the web view to a file.
 * $$ web.Capture(file) $$
 * @param {str_ptf} file 
 */


/** @extern ClearFocus */

/** ### ClearHistory ###
 * Clears the page history for Back() and Forward()
 * $$ web.ClearHistory() $$
 */


/** ### Execute ###
 * Executes JavaScript code inside the WebView and passes the result to the callback
 * $$ web.Execute(code, callback) $$
 * @param {str_jsc} code 
 * @param {fnc_json} callback {"pNames":["result"],"pTypes":["all"]}
 */


/** @extern Focus */

/** ### Forward ###
 * Loads the following page from history.
 * $$ web.Forward() $$
 */


/** ### Func ###
 * Call functions defined inside a webview
 * $$ web.Func(name, args...) $$
 * @param {string} name 
 * @param {all} args... 
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
 * Returns the current website url.
 * $$ web.GetUrl() $$
 * @returns str_url
 */


/** @extern GetVisibility */

/** @extern GetWidth */

/** @extern Gone */

/** @extern Hide */

/** @extern IsEnabled */

/** @extern IsOverlap */

/** @extern IsVisible */

/** ### LoadHtml ###
 * Loads html code to the WebView.
 * $$ web.LoadHtml(html, baseFolder, options) $$
 * @param {str_htm} html 
 * @param {str_ptd} baseFolder 
 * @param {str_com} options AllowZoom:Allows the user to zoom the page,AutoZoom,Wide:"force page using “wide” viewport",FillX/Y,NoActionBar:prevents copy/paste popup,IgnoreErrors,IgnoreSSLErrors,NoApp:prevent app&period;* calls,NoCapture:Disable camera,NoLocate:Disable location sensor,NoLongTouch,NoPause:Dont pause WebView when app in background,NoRedirect:blocks assert redirect,NoScrollBars,Overview:Zoom to full width of page,Progress:Shows a progress indicator when loading,ScrollFade,UseBasicInput:makes softkeyboard useful for html code editors,UseBrowser:Open links in external browser
 */


/** ### LoadUrl ###
 * Loads an url to the WebView
 * $$ web.LoadUrl(url, options) $$
 * @param {str_url} url 
 * @param {str_com} options AllowZoom:Allows the user to zoom the page,AutoZoom,Wide:"force page using “wide” viewport",FillX/Y,NoActionBar:prevents copy/paste popup,IgnoreErrors,IgnoreSSLErrors,NoApp:prevent app&period;* calls,NoCapture:Disable camera,NoLocate:Disable location sensor,NoLongTouch,NoPause:Dont pause WebView when app in background,NoRedirect:blocks assert redirect,NoScrollBars,Overview:Zoom to full width of page,Progress:Shows a progress indicator when loading,ScrollFade,UseBasicInput:makes softkeyboard useful for html code editors,UseBrowser:Open links in external browser
 */


/** @extern Method */

/** ### Print ###
 * Print current page via the builtin android printer dialog. *  * Note: Available since Android 4.4 KitKat
 * $$ web.Print() $$
 */


/** ### Reload ###
 * Reloads the current page
 * $$ web.Reload() $$
 */


/** @extern SetBackAlpha */

/** @extern SetBackColor */

/** @extern SetBackGradient */

/** @extern SetBackGradientRadial */

/** @extern SetBackground */

/** ### SetBlockedUrls ###
 * Define a list of urls that are blocked for loading.
 * $$ web.SetBlockedUrls(urls) $$
 * @param {lst} urls [ urls:str ]||str
 */


/** @extern SetColorFilter */

/** @extern SetDescription */

/** @extern SetEnabled */

/** ### SetErrorPage ###
 * Define a url loaded when an error occured.
 * $$ web.SetErrorPage(url) $$
 * @param {str_url} url 
 */


/** @extern SetMargins */

/** ### SetTextZoom ###
 * Scales the html text by a given factor.
 * $$ web.SetTextZoom(zoom) $$
 * @param {num_frc} zoom 
 */


/** ### SetOnConsole ###
 * %cb% a message was logged to the console.
 * $$ web.SetOnConsole(callback) $$
 * @param {fnc_json} callback {"pNames":["msg"],"pTypes":["str"]}
 */


/** ### SetOnError ###
 * %cb% an error occured.
 * $$ web.SetOnError(callback) $$
 * @param {fnc_json} callback {"pNames":["error"],"pTypes":["str"]}
 */


/** ### SetOnProgress ###
 * %cb% the webpage loading progress changed
 * $$ web.SetOnProgress(callback) $$
 * @param {fnc_json} callback {"pNames":["progress"],"pTypes":["num_prc"]}
 */


/** ### SetOnRequest ###
 * Called when a HTTP Request was made in the webview.
 * $$ web.SetOnRequest(callback) $$
 * @param {fnc_json} callback {"pNames":["url","method","isMain","isRedirect"],"pTypes":["str","str","bin","bin"]}
 */


/** @extern SetOnTouch */

/** ### SetOnUrl ###
 * %cb% the user clicked a link.
 * $$ web.SetOnUrl(callback) $$
 * @param {fnc_json} callback {"pNames":["url"],"pTypes":["str_url"]}
 */


/** @extern SetPadding */

/** @extern SetPosition */

/** ### SetRedirect ###
 * Add a url redirection rule.
 * $$ web.SetRedirect(urlFrom, urlTo) $$
 * @param {str_url} urlFrom 
 * @param {str_url} urlTo 
 */


/** @extern SetScale */

/** @extern SetSize */

/** ### SetTouchMode ###
 * Set the control in touch mode.
 * $$ web.SetTouchMode(mode) $$
 * @param {bin} mode 
 */


/** ### SetUserAgent ###
 * Defines a custom user agent
 * $$ web.SetUserAgent(agent) $$
 * @param {str} agent 
 */


/** ### SetUserCreds ###
 * Set login data for websites that require authentication.
 * $$ web.SetUserCreds(name, password) $$
 * @param {str} name 
 * @param {str} password 
 */


/** @extern SetVisibility */

/** @extern Show */

/** ### SimulateKey ###
 * Simulates a key event on an app object. *  * You can find the complete list of key names on the [Android Developer Page](https://developer.android.com/reference/android/view/KeyEvent#KEYCODE_0).
 * $$ web.SimulateKey(keyName, modifiers, pause) $$
 * @param {str} keyName 
 * @param {str} modifiers META_META_ON,META_RIGHT_ON,NUM_LOCK_ON,SCROLL_LOCK_ON,SHIFT_LEFT_ON,SHIFT_MASK,SHIFT_ON,SHIFT_RIGHT_ON,SYM_ON
 * @param {num} pause 
 */


/** ### Stop ###
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
    
            