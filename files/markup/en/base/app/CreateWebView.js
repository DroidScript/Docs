
/** # CreateWebView #
 * @abbrev web
 * 
 * $$ web = app.CreateWebView(width, height, options, zoom) $$ 
 * @param {num_frc} width 
 * @param {num_frc} height 
 * @param {str_com} options AllowZoom:Allows the user to zoom the page,AutoZoom,Wide:"force page using “wide” viewport",FillX/Y,NoActionBar:prevents copy/paste popup,IgnoreErrors,IgnoreSSLErrors,NoApp:prevent app&period;* calls,NoCapture:Disable camera,NoLocate:Disable location sensor,NoLongTouch,NoPause:Dont pause WebView when app in background,NoScrollBars,Overview:Zoom to full width of page,Progress:Shows a progress indicator when loading,ScrollFade,UseBasicInput:makes softkeyboard useful for html code editors,UseBrowser:Open links in external browser
 * @param {num_prc} zoom 
 * @returns dso-WebView
*/


// CreateWebView.md --> Complete documentation. Sample codes is at the bottom of this file.

/** @Description
You can create a control to display local or remote web pages in your App using the **CreateWebView** method.
If you are loading remote web pages, then you might want to use the **SetOnProgress** method to set the name of a callback function that you want called to report the progress of loading the page.

You can use the **LoadUrl** method to load an internal or external web page or the **LoadHtml** method to load text directly from within your App.
<js>web.LoadUrl( url, options );</js>
<js> web.LoadHtml( html, baseFolder, options );</js>

If you need to, you can use the **Execute** method to execute JavaScript code within the WebView.
<js>web.Execute( text );</js>
 */

/** ## Methods ##
 * These are the methods available for CreateWebView
 */


/** ### AdjustColor ###
 * Adjust the visual color effect of the control by setting the Hue (by angle in degrees in a color circle), the saturation, brightness and contrast of the control.
 * $$ web.AdjustColor(hue, saturation, brightness, contrast) $$
 * @param {num} hue 
 * @param {num} saturation 
 * @param {num} brightness 
 * @param {num} contrast 0..100
 */


/** ### Animate ###
 * Animates the control. *  * There are * 	“in”-Animations which are used to show objects from hidden state * 	“out”-animations which are used to hide objects in visible state and * 	“static”-animations which keep the visible state.
 * $$ web.Animate(type, callback, time) $$
 * @param {str} type NewsPaper|Jelly|Flash|RubberBand|Swing|TaDa|Bounce|Fall|FallRotate|<br><img width='300px' src='../animate.png'></img>
 * @param {fnc_json} callback {"pNames":["type"],"pTypes":["str"]}
 * @param {num_mls} time 
 */


/** ### Back ###
 * Loads the previous page from history.
 * $$ web.Back() $$
 */


/** ### Batch ###
 * Batch method calls to be able to set all object's properties at once. * Note that you need to specify each parameter (use “” or <js nobox>null</js> to leave some out) * Inherited methods can be called by appending an underscore to the function name (ie. <js nobox>txt.Batch({ SetBackColor_: [“red”] })</js>
 * $$ web.Batch(properties) $$
 * @param {obj} properties { COMMAND:lst
 */


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


/** ### ClearFocus ###
 * Removes the focus of the control so that the user no longer has immediate access to it.
 * $$ web.ClearFocus() $$
 */


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


/** ### Focus ###
 * Set the focus to the control so that the user can interact with it immediately.
 * $$ web.Focus() $$
 */


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


/** ### GetAbsHeight ###
 * Get the absolute height of the control in pixels. * Note that unlike the objects margins its padding does change this value.
 * $$ web.GetAbsHeight() $$
 * @returns num_int
 */


/** ### GetAbsWidth ###
 * Get the absolute width of the control in pixels. * Note that unlike the objects margins its padding does change this value.
 * $$ web.GetAbsWidth() $$
 * @returns num_int
 */


/** ### GetHeight ###
 * Get the height of the control as screen height relative float or in pixels with the `px` option. * Note that unlike the objects margins its padding does change this value.
 * $$ web.GetHeight(options) $$
 * @param {str} options px
 * @returns num
 */


/** ### GetLeft ###
 * Get the distance from the control to the left parent border as width relative float or in pixels with the `px` option.
 * $$ web.GetLeft(options) $$
 * @param {str} options px
 * @returns num
 */


/** ### GetParent ###
 * Returns the parent control object where the object was added to - commonly a layout.
 * $$ web.GetParent() $$
 * @returns dso
 */


/** ### GetPosition ###
 * Returns data about the position and size of the control. * If the `screen` option is given the position on the screen will be returned. Otherwise relative to the parent control. * The `px` options turns the relative values into pixels.
 * $$ web.GetPosition(options) $$
 * @param {str} options screen,px
 * @returns obj-{ left:num, top:num, width:num, height:num }
 */


/** ### GetTop ###
 * Get the distance from the control to the upper parent border as height relative float or in pixels with the `px` option.
 * $$ web.GetTop(options) $$
 * @param {str} options px
 * @returns num
 */


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


/** ### GetVisibility ###
 * Returns the current visibility state of the control. The Values are: * `Show`: visible * `Hide`: invisible but still consuming space * `Gone`: invisible and not consuming space
 * $$ web.GetVisibility() $$
 * @returns str-Show|Hide|Gone
 */


/** ### GetWidth ###
 * Get the width of the control as screen width relative float or in pixels with the `px` option. * Note that unlike the objects margins its padding does change this value.
 * $$ web.GetWidth(options) $$
 * @param {str} options px
 * @returns num
 */


/** ### Gone ###
 * Hides the control without consuming any more layout space as if it were never there.
 * $$ web.Gone() $$
 */


/** ### Hide ###
 * Hide the control but keep the layout space free.
 * $$ web.Hide() $$
 */


/** ### IsEnabled ###
 * Returns whether the control is currently useable by the user.
 * $$ web.IsEnabled() $$
 * @returns bin
 */


/** ### IsOverlap ###
 * Returns whether the control overlaps with another by a given distance.
 * $$ web.IsOverlap(obj, depth) $$
 * @param {dso} obj 
 * @param {num_frc} depth 
 * @returns bin
 */


/** ### IsVisible ###
 * Returns whether the control is currently visible to the user, ignoring overlaying controls.
 * $$ web.IsVisible() $$
 * @returns bin
 */


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


/** ### Method ###
 * Allows access to other functions defined on the object in Java via reflection. *  * <premium>
 * $$ web.Method(name, types, p1, p2, p3, p4) $$
 * @param {str} name 
 * @param {lst} types boolean,char,byte,short,int,long,float,double,String,CharSequence,...
 * @param {str} p1 
 * @param {str} p2 
 * @param {str} p3 
 * @param {str} p4 
 * @returns all
 */


/** ### Print ###
 * Print current page via the builtin android printer dialog. *  * Note: Available since Android 4.4 KitKat
 * $$ web.Print() $$
 */


/** ### Reload ###
 * Reloads the current page
 * $$ web.Reload() $$
 */


/** ### SetBackAlpha ###
 * Set the transparency of the background by an alpha value between `0` (_no transparency_) and `0.99` (_full transparent_) or `1` (_no transparency_) and `256` (_full transparent_)
 * $$ web.SetBackAlpha(alpha) $$
 * @param {num} alpha 0..0.99|1..256
 */


/** ### SetBackColor ###
 * Changes the background color of the control.
 * $$ web.SetBackColor(color) $$
 * @param {str_col} color 
 */


/** ### SetBackGradient ###
 * Define the background color of the control with a gradient. The default gradient direction is from top to bottom, but you can change it from left to right and the reversed versions of course.
 * $$ web.SetBackGradient(color1, color2, color3, options) $$
 * @param {str_col} color1 
 * @param {str_col} color2 
 * @param {?} color3 
 * @param {str} options left
 */


/** ### SetBackGradientRadial ###
 * Define a radial color gradient for the background of control.
 * $$ web.SetBackGradientRadial(x, y, radius, color1, color2, color3, options) $$
 * @param {num_frc} x 
 * @param {num_frc} y 
 * @param {num_frc} radius 
 * @param {str_col} color1 
 * @param {str_col} color2 
 * @param {?} color3 
 * @param {str_com} options 
 */


/** ### SetBackground ###
 * Changes the background to an image which can be repeated using the `repeat` option. * An image which is often used with that option is '/res/drawable/pattern_carbon' - try it out!
 * $$ web.SetBackground(file, options) $$
 * @param {str_ptf} file 
 * @param {str} options repeat
 */


/** ### SetBlockedUrls ###
 * Define a list of urls that are blocked for loading.
 * $$ web.SetBlockedUrls(urls) $$
 * @param {lst} urls [ urls:str ]||str
 */


/** ### SetColorFilter ###
 * Adjust the visual color effect with a color and a given BlendMode. More information about BlendMode can be found in the [Android Developer page](https://developer.android.com/reference/android/graphics/BlendMode.html).
 * $$ web.SetColorFilter(color, mode) $$
 * @param {str_col} color 
 * @param {str} mode Add|Multiply|clear|darken|lighten|overlay|screen|xor|color|color_burn|color_dodge|difference|exclusion|hard_light|hue|luminosity|modulate|saturation|soft_light|src|dst|src_in|src_out|src_atop|src_over|dst_in|dst_out|dst_atop|dst_over
 */


/** ### SetDescription ###
 * Set a control description for accessibility
 * $$ web.SetDescription(desc) $$
 * @param {str} desc 
 */


/** ### SetEnabled ###
 * En/Disable the control physically and visually so that the user can/can not access the control. Events like OnTouch will still be fired.
 * $$ web.SetEnabled(enable) $$
 * @param {bin} enable 
 */


/** ### SetErrorPage ###
 * Define a url loaded when an error occured.
 * $$ web.SetErrorPage(url) $$
 * @param {str_url} url 
 */


/** ### SetMargins ###
 * Define a distance to other controls on each side of the control.
 * $$ web.SetMargins(left, top, right, bottom, mode) $$
 * @param {num_frc} left 
 * @param {num_frc} top 
 * @param {num_frc} right 
 * @param {num_frc} bottom 
 * @param {str} mode px|sp|dip|mm|pt
 */


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


/** ### SetOnTouch ###
 * Define a callback function that is called when the user touches the control. In addition, an `event` object is passed to the callback function to obtain information about the touch `type`, the touch `position(s)`, the `amount` of touches and the `control` that was touched.
 * $$ web.SetOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["event"],"pTypes":["obj-{ source:dso, action:str-\"Down|Move|Up\", count:num_int, x:\"Multitouch positions\"&colon; [ x1:num_frc&comma; x2:num_frc&comma; x3:num_frc ], y:\"Multitouch positions\"&colon; [ y1:num_frc&comma; y2:num_frc&comma; y3:num_frc ] }"]}
 */


/** ### SetOnUrl ###
 * %cb% the user clicked a link.
 * $$ web.SetOnUrl(callback) $$
 * @param {fnc_json} callback {"pNames":["url"],"pTypes":["str_url"]}
 */


/** ### SetPadding ###
 * Define distances that elements within the control are to maintain from the control borders.
 * $$ web.SetPadding(left, top, right, bottom, mode) $$
 * @param {num_frc} left 
 * @param {num_frc} top 
 * @param {num_frc} right 
 * @param {num_frc} bottom 
 * @param {str} mode px|sp|dip|mm|pt
 */


/** ### SetPosition ###
 * Defines the position and size for the control if the parent is an absolute layout.
 * $$ web.SetPosition(left, top, width, height, options) $$
 * @param {num} left 
 * @param {num} top 
 * @param {num} width 
 * @param {num} height 
 * @param {str} options px
 */


/** ### SetRedirect ###
 * Add a url redirection rule.
 * $$ web.SetRedirect(urlFrom, urlTo) $$
 * @param {str_url} urlFrom 
 * @param {str_url} urlTo 
 */


/** ### SetScale ###
 * Scales the control along with its contents by the factors passed to the function.
 * $$ web.SetScale(x, y) $$
 * @param {num_fac} x 
 * @param {num_fac} y 
 */


/** ### SetSize ###
 * Change the size of the control in either screen relative values or in pixels if the `px` option was given.
 * $$ web.SetSize(width, height, options) $$
 * @param {num} width 
 * @param {num} height 
 * @param {str} options px|sp|dip|dp|mm|pt
 */


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


/** ### SetVisibility ###
 * Change the visibility of the control to one of the available modes: * `Show:` visible * `Hide:` invisible but still consuming space * `Gone:` invisible and not consuming space
 * $$ web.SetVisibility(mode) $$
 * @param {str} mode Show|Hide|Gone
 */


/** ### Show ###
 * Set the visibility of the control to “Show”.
 * $$ web.Show() $$
 */


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


/** ### Tween ###
 * Performs an animation on the control. * The `target` object is for the position, size and rotation that the control has at the end of the animation. *  * The `type` specifies the behavior and the speed of the animation. Separated by a dot, you must also specify whether you want to apply this behavior to the beginning (In), end (Out), or to both (InOut) times of the animation. *  * With the amount of `repeat`s you can control how many times you want to play the animation. *  * If you have `jojo` activated, the animation will alternate between forward and backward playback, so that if the repetition value is odd, the control will be at the start position again at the end of the animation. *  * Finally the `callback` function will be called after the animation has finished. Well, it's about time!
 * $$ web.Tween(target, duration, type, repeat, yoyo, callback) $$
 * @param {obj} target { x:num_frc, y:num_frc, w:num_frc, h:num_frc, sw:num_frc
 * @param {num_mls} duration 
 * @param {str} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
 * @param {num_int} repeat 
 * @param {bin} yoyo 
 * @param {fnc_json} callback {}
 */

// CreateWebView.txt --> All the sample codes

/** @Sample
<sample Remote>
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
</sample>

<sample Local File>
function OnStart()
{
	lay = app.CreateLayout( "linear", "VCenter,FillXY" );

	 <b>web = app.CreateWebView( 0.8, 0.8 );
	 web.SetBackColor( "#00000000" );
	 lay.AddChild( web );</b>

	 app.AddLayout( lay );

	 web.LoadUrl( "file:///Sys/Html/Page.htm" );
}
</sample>

<sample Direct Html>
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
</sample>

 */

