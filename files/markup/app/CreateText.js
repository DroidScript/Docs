
/** # CreateText #
 * @abbrev txt
 * 
 * $$ txt = app.CreateText(text, width, height, options) $$ 
 * @param {str} text 
 * @param {num_frc} width 
 * @param {num_frc} height 
 * @param {str_com} options AutoScale,AutoSize,Multiline,Left|Right|Bottom|VCenter,Html,Bold,Monospace,AutoShrink:Auto
 * @returns dso-Text
*/


// CreateText.md --> Complete documentation. Sample codes is at the bottom of this file.

/** @Description
If you want to display text in your app you can use the Text object. You can use the “Multiline” **option** to allow multi-line text and the “Left” or “Right” options to align the text. The default is single line centered text.
Other options you will see used in the samples include “AutoScale”, “Bold”, “Html” and “FontAwesome”.
Use the **SetText** and **GetText** functions of the Text object to set and get it's text.
<sample Single line>

You can change the look of a Text using the **SetBackColor** and **SetTextColor** functions on the Text object.
<sample Multi line>

Text can be shortened using ellipsis (...) when the size of the control is too small to show all the text. Use the **SetEllipsize** to control where the ellipsis is placed. Available modes are “start”, “middle”, “end” and “marq”.
<sample Ellipsize>

You can also set a background image/pattern or background gradient for the Text using the **SetBackground** and **SetBackGradient** functions. See [Layouts](CreateLayout.htm) for examples of how to use these functions.

 */

/** ## Methods ##
 * These are the methods available for CreateText
 */


/** ### AdjustColor ###
 * Adjust the visual color effect of the control by setting the Hue (by angle in degrees in a color circle), the saturation, brightness and contrast of the control.
 * $$ txt.AdjustColor(hue, saturation, brightness, contrast) $$
 * @param {num} hue 
 * @param {num} saturation 
 * @param {num} brightness 
 * @param {num} contrast 0..100
 */


/** ### Animate ###
 * Animates the control. *  * There are * 	“in”-Animations which are used to show objects from hidden state * 	“out”-animations which are used to hide objects in visible state and * 	“static”-animations which keep the visible state.
 * $$ txt.Animate(type, callback, time) $$
 * @param {str} type NewsPaper|Jelly|Flash|RubberBand|Swing|TaDa|Bounce|Fall|FallRotate|<br><img width='300px' src='../animate.png'></img>
 * @param {fnc_json} callback {"pNames":["type"],"pTypes":["str"]}
 * @param {num_mls} time 
 */


/** ### Batch ###
 * Batch method calls to be able to set all object's properties at once. * Note that you need to specify each parameter (use “” or <js nobox>null</js> to leave some out) * Inherited methods can be called by appending an underscore to the function name (ie. <js nobox>txt.Batch({ SetBackColor_: [“red”] })</js>
 * $$ txt.Batch(properties) $$
 * @param {obj} properties { COMMAND:lst
 */


/** ### ClearFocus ###
 * Removes the focus of the control so that the user no longer has immediate access to it.
 * $$ txt.ClearFocus() $$
 */


/** ### Focus ###
 * Set the focus to the control so that the user can interact with it immediately.
 * $$ txt.Focus() $$
 */


/** ### GetAbsHeight ###
 * Get the absolute height of the control in pixels. * Note that unlike the objects margins its padding does change this value.
 * $$ txt.GetAbsHeight() $$
 * @returns num_int
 */


/** ### GetAbsWidth ###
 * Get the absolute width of the control in pixels. * Note that unlike the objects margins its padding does change this value.
 * $$ txt.GetAbsWidth() $$
 * @returns num_int
 */


/** ### GetHeight ###
 * Get the height of the control as screen height relative float or in pixels with the `px` option. * Note that unlike the objects margins its padding does change this value.
 * $$ txt.GetHeight(options) $$
 * @param {str} options px
 * @returns num
 */


/** ### GetHtml ###
 * Returns the html formatted content.
 * $$ txt.GetHtml() $$
 * @returns str_htm
 */


/** ### GetLeft ###
 * Get the distance from the control to the left parent border as width relative float or in pixels with the `px` option.
 * $$ txt.GetLeft(options) $$
 * @param {str} options px
 * @returns num
 */


/** ### GetLineCount ###
 * Returns the amount of lines in the text even with html formatting
 * $$ txt.GetLineCount() $$
 * @returns num_int
 */


/** ### GetLineStart ###
 * Returns at which character in the text a certain line begins.
 * $$ txt.GetLineStart(line) $$
 * @param {num_int} line 
 * @returns num_int
 */


/** ### GetLineTop ###
 * Returns the top position of a given line on the screen.
 * $$ txt.GetLineTop(line) $$
 * @param {num_int} line 
 * @returns num_frc
 */


/** ### GetMaxLines ###
 * Returns the maximum amount of lines the control can hold with the current control and font height
 * $$ txt.GetMaxLines() $$
 * @returns num_int
 */


/** ### GetParent ###
 * Returns the parent control object where the object was added to - commonly a layout.
 * $$ txt.GetParent() $$
 * @returns dso
 */


/** ### GetPosition ###
 * Returns data about the position and size of the control. * If the `screen` option is given the position on the screen will be returned. Otherwise relative to the parent control. * The `px` options turns the relative values into pixels.
 * $$ txt.GetPosition(options) $$
 * @param {str} options screen,px
 * @returns obj-{ left:num, top:num, width:num, height:num }
 */


/** ### GetText ###
 * Returns the current1605064214 displayed text of the control.
 * $$ txt.GetText() $$
 * @returns str
 */


/** ### GetTextSize ###
 * Returns the current size of the contained text. If the `px` option is given the size will be retured in pixels.
 * $$ txt.GetTextSize(mode) $$
 * @param {str} mode px
 * @returns num
 */


/** ### GetTop ###
 * Get the distance from the control to the upper parent border as height relative float or in pixels with the `px` option.
 * $$ txt.GetTop(options) $$
 * @param {str} options px
 * @returns num
 */


/** ### GetType ###
 * Returns the control class name.
 * $$ txt.GetType() $$
 * @returns str-Text
 */


/** ### GetVisibility ###
 * Returns the current visibility state of the control. The Values are: * `Show`: visible * `Hide`: invisible but still consuming space * `Gone`: invisible and not consuming space
 * $$ txt.GetVisibility() $$
 * @returns str-Show|Hide|Gone
 */


/** ### GetWidth ###
 * Get the width of the control as screen width relative float or in pixels with the `px` option. * Note that unlike the objects margins its padding does change this value.
 * $$ txt.GetWidth(options) $$
 * @param {str} options px
 * @returns num
 */


/** ### Gone ###
 * Hides the control without consuming any more layout space as if it were never there.
 * $$ txt.Gone() $$
 */


/** ### Hide ###
 * Hide the control but keep the layout space free.
 * $$ txt.Hide() $$
 */


/** ### IsEnabled ###
 * Returns whether the control is currently useable by the user.
 * $$ txt.IsEnabled() $$
 * @returns bin
 */


/** ### IsOverlap ###
 * Returns whether the control overlaps with another by a given distance.
 * $$ txt.IsOverlap(obj, depth) $$
 * @param {dso} obj 
 * @param {num_frc} depth 
 * @returns bin
 */


/** ### IsVisible ###
 * Returns whether the control is currently visible to the user, ignoring overlaying controls.
 * $$ txt.IsVisible() $$
 * @returns bin
 */


/** ### Log ###
 * Append a string to the text separated with a line break
 * $$ txt.Log(message, options) $$
 * @param {str} message 
 * @param {str_com} options Clear:Clears the log before writing,Red|Green|Blue
 */


/** ### Method ###
 * Allows access to other functions defined on the object in Java via reflection. *  * <premium>
 * $$ txt.Method(name, types, p1, p2, p3, p4) $$
 * @param {str} name 
 * @param {lst} types boolean,char,byte,short,int,long,float,double,String,CharSequence,...
 * @param {str} p1 
 * @param {str} p2 
 * @param {str} p3 
 * @param {str} p4 
 * @returns all
 */


/** ### SetBackAlpha ###
 * Set the transparency of the background by an alpha value between `0` (_no transparency_) and `0.99` (_full transparent_) or `1` (_no transparency_) and `256` (_full transparent_)
 * $$ txt.SetBackAlpha(alpha) $$
 * @param {num} alpha 0..0.99|1..256
 */


/** ### SetBackColor ###
 * Changes the background color of the control.
 * $$ txt.SetBackColor(color) $$
 * @param {str_col} color 
 */


/** ### SetBackGradient ###
 * Define the background color of the control with a gradient. The default gradient direction is from top to bottom, but you can change it from left to right and the reversed versions of course.
 * $$ txt.SetBackGradient(color1, color2, color3, options) $$
 * @param {str_col} color1 
 * @param {str_col} color2 
 * @param {?} color3 
 * @param {str} options left
 */


/** ### SetBackGradientRadial ###
 * Define a radial color gradient for the background of control.
 * $$ txt.SetBackGradientRadial(x, y, radius, color1, color2, color3, options) $$
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
 * $$ txt.SetBackground(file, options) $$
 * @param {str_ptf} file 
 * @param {str} options repeat
 */


/** ### SetColorFilter ###
 * Adjust the visual color effect with a color and a given BlendMode. More information about BlendMode can be found in the [Android Developer page](https://developer.android.com/reference/android/graphics/BlendMode.html).
 * $$ txt.SetColorFilter(color, mode) $$
 * @param {str_col} color 
 * @param {str} mode Add|Multiply|clear|darken|lighten|overlay|screen|xor|color|color_burn|color_dodge|difference|exclusion|hard_light|hue|luminosity|modulate|saturation|soft_light|src|dst|src_in|src_out|src_atop|src_over|dst_in|dst_out|dst_atop|dst_over
 */


/** ### SetEllipsize ###
 * Will cause the inner text to be broken with ... at the start or the end if it cannot fit in the control.
 * $$ txt.SetEllipsize(mode) $$
 * @param {str} mode start|middle|end
 */


/** ### SetDescription ###
 * Set a control description for accessibility
 * $$ txt.SetDescription(desc) $$
 * @param {str} desc 
 */


/** ### SetEnabled ###
 * En/Disable the control physically and visually so that the user can/can not access the control. Events like OnTouch will still be fired.
 * $$ txt.SetEnabled(enable) $$
 * @param {bin} enable 
 */


/** ### SetFontFile ###
 * Change the font style by defining a font file.
 * $$ txt.SetFontFile(file) $$
 * @param {str_ptf} file 
 */


/** ### SetHtml ###
 * Change the current text of the control to html-formatted text.
 * $$ txt.SetHtml(str) $$
 * @param {str_htm} str 
 */


/** ### SetLog ###
 * Define a maximum amount of log lines
 * $$ txt.SetLog(maxLines) $$
 * @param {num_int} maxLines 
 */


/** ### SetMargins ###
 * Define a distance to other controls on each side of the control.
 * $$ txt.SetMargins(left, top, right, bottom, mode) $$
 * @param {num_frc} left 
 * @param {num_frc} top 
 * @param {num_frc} right 
 * @param {num_frc} bottom 
 * @param {str} mode px|sp|dip|mm|pt
 */


/** ### SetOnLongTouch ###
 * %cb% the object has been long pressed.
 * $$ txt.SetOnLongTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["src"],"pTypes":["dso"]}
 */


/** ### SetOnTouch ###
 * Define a callback function that is called when the user touches the control. In addition, an `event` object is passed to the callback function to obtain information about the touch `type`, the touch `position(s)`, the `amount` of touches and the `control` that was touched.
 * $$ txt.SetOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["event"],"pTypes":["obj-{ source:dso, action:str-\"Down|Move|Up\", count:num_int, x:\"Multitouch positions\"&colon; [ x1:num_frc&comma; x2:num_frc&comma; x3:num_frc ], y:\"Multitouch positions\"&colon; [ y1:num_frc&comma; y2:num_frc&comma; y3:num_frc ] }"]}
 */


/** ### SetOnTouchDown ###
 * %cb% the user started toching the control.
 * $$ txt.SetOnTouchDown(callback) $$
 * @param {fnc_json} callback {"pNames":["event"],"pTypes":["obj-{ source:dso, action:str-Down, count:num_int, x:\"Multitouch positions\"&colon; [ x1:num_frc&comma; x2:num_frc&comma; x3:num_frc ], y:\"Multitouch positions\"&colon; [ y1:num_frc&comma; y2:num_frc&comma; y3:num_frc ] }"]}
 */


/** ### SetOnTouchMove ###
 * %cb% the user drags a finger over the screen.
 * $$ txt.SetOnTouchMove(callback) $$
 * @param {fnc_json} callback {"pNames":["event"],"pTypes":["obj-{ source:dso, action:str-Move, count:num_int, x:\"Multitouch positions\"&colon; [ x1:num_frc&comma; x2:num_frc&comma; x3:num_frc ], y:\"Multitouch positions\"&colon; [ y1:num_frc&comma; y2:num_frc&comma; y3:num_frc ] }"]}
 */


/** ### SetOnTouchUp ###
 * %cb% the users finger leaves the screen.
 * $$ txt.SetOnTouchUp(callback) $$
 * @param {fnc_json} callback {"pNames":["event"],"pTypes":["obj-{ source:dso, action:str-Up, count:num_int, x:\"Multitouch positions\"&colon; [ x1:num_frc&comma; x2:num_frc&comma; x3:num_frc ], y:\"Multitouch positions\"&colon; [ y1:num_frc&comma; y2:num_frc&comma; y3:num_frc ] }"]}
 */


/** ### SetPadding ###
 * Define distances that elements within the control are to maintain from the control borders.
 * $$ txt.SetPadding(left, top, right, bottom, mode) $$
 * @param {num_frc} left 
 * @param {num_frc} top 
 * @param {num_frc} right 
 * @param {num_frc} bottom 
 * @param {str} mode px|sp|dip|mm|pt
 */


/** ### SetPosition ###
 * Defines the position and size for the control if the parent is an absolute layout.
 * $$ txt.SetPosition(left, top, width, height, options) $$
 * @param {num} left 
 * @param {num} top 
 * @param {num} width 
 * @param {num} height 
 * @param {str} options px
 */


/** ### SetScale ###
 * Scales the control along with its contents by the factors passed to the function.
 * $$ txt.SetScale(x, y) $$
 * @param {num_fac} x 
 * @param {num_fac} y 
 */


/** ### SetSize ###
 * Change the size of the control in either screen relative values or in pixels if the `px` option was given.
 * $$ txt.SetSize(width, height, options) $$
 * @param {num} width 
 * @param {num} height 
 * @param {str} options px|sp|dip|dp|mm|pt
 */


/** ### SetText ###
 * Change the currently displayed text in the control.
 * $$ txt.SetText(text) $$
 * @param {str} text 
 */


/** ### SetTextColor ###
 * Change the text color of the contained text.
 * $$ txt.SetTextColor(color) $$
 * @param {str_col} color 
 */


/** ### SetTextShadow ###
 * Define a shadow displayed around the control. * The sun is always shining so there has to be one. Always.
 * $$ txt.SetTextShadow(radius, dx, dy, color) $$
 * @param {num_int} radius 
 * @param {num_int} dx 
 * @param {num_int} dy 
 * @param {str_col} color 
 */


/** ### SetTextSize ###
 * Change the size of the contained text.
 * $$ txt.SetTextSize(size, mode) $$
 * @param {num} size 
 * @param {str} mode px|dip|sp|mm|pt|pl:scales text in proportion with device resolution|ps:scales text in proportion with device resolution
 */


/** ### SetTouchable ###
 * En/Disables touch events to be fired on the control. Other events like OnChange will still be fired.
 * $$ txt.SetTouchable(touchable) $$
 * @param {bin} touchable 
 */


/** ### SetVisibility ###
 * Change the visibility of the control to one of the available modes: * `Show:` visible * `Hide:` invisible but still consuming space * `Gone:` invisible and not consuming space
 * $$ txt.SetVisibility(mode) $$
 * @param {str} mode Show|Hide|Gone
 */


/** ### Show ###
 * Set the visibility of the control to “Show”.
 * $$ txt.Show() $$
 */


/** ### Tween ###
 * Performs an animation on the control. * The `target` object is for the position, size and rotation that the control has at the end of the animation. *  * The `type` specifies the behavior and the speed of the animation. Separated by a dot, you must also specify whether you want to apply this behavior to the beginning (In), end (Out), or to both (InOut) times of the animation. *  * With the amount of `repeat`s you can control how many times you want to play the animation. *  * If you have `jojo` activated, the animation will alternate between forward and backward playback, so that if the repetition value is odd, the control will be at the start position again at the end of the animation. *  * Finally the `callback` function will be called after the animation has finished. Well, it's about time!
 * $$ txt.Tween(target, duration, type, repeat, yoyo, callback) $$
 * @param {obj} target { x:num_frc, y:num_frc, w:num_frc, h:num_frc, sw:num_frc
 * @param {num_mls} duration 
 * @param {str} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
 * @param {num_int} repeat 
 * @param {bin} yoyo 
 * @param {fnc_json} callback {}
 */

// CreateText.txt --> All the sample codes

/** @Sample
<sample Single line>
function OnStart()
{
	lay = app.CreateLayout( "Linear", "VCenter,FillXY" );

	<b>txt = app.CreateText( "Hello" );
	txt.SetTextSize( 22 );
	lay.AddChild( txt );</b>

	app.AddLayout( lay );
}</sample>

<sample Multi line>
function OnStart()
{
	lay = app.CreateLayout( "Linear", "VCenter,FillXY" );

	<b>txt = app.CreateText( "Hello\nWorld", 0.8, 0.2, "Multiline"  );
	txt.SetTextSize( 12 );
	txt.SetTextColor( "#ff6666ff" );
	txt.SetBackColor( "#ffffffff" );
	lay.AddChild( txt );</b>

	app.AddLayout( lay );
}
</sample>

<sample Ellipsize>
function OnStart()
{
	lay = app.CreateLayout( "Linear", "VCenter,FillXY" );

	<b>txt = app.CreateText( "The quick brown fox jumps over the lazy dog", 0.75 );
	txt.SetTextSize( 28 );
	txt.SetEllipsize( "end" );
	lay.AddChild( txt );</b>

	app.AddLayout( lay );
}
</sample>

 */

