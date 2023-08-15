
/** # CreateButton #
 * @abbrev btn
 * 
 * $$ btn = app.CreateButton(text, width, height, options) $$ 
 * @param {str} text 
 * @param {num_frc} width 
 * @param {num_frc} height 
 * @param {str_com} options FontAwesome,Html,Monospace,Normal|Aluminium|Gray|Lego,SingleLine,Custom,AutoShrink:Auto
 * @returns dso-Button
*/


// CreateButton.md --> Complete documentation. Sample codes is at the bottom of this file.

/** @Description
Buttons created with the **CreateButton** method are used for interacting with the app. This is done by calling a callback function after clicking on the button. You can specify such a callback function with the **SetOnTouch** Method:
<js>
btn.SetOnTouch( btn\_OnTouch );

function btn\_OnTouch()
{
	// your OnTouch code goes here
}
</js>

### Styling
You can allow the button to auto-size by leaving out the dimensions
<sample Default Size>

or you can specify a **width** and **height** as decimal fractions.
<sample Fixed Size>

Setting the width and height to _-1_ whilst using the “FillX” option will allow it to fill the layout width.
<sample Fill Layout Width>

You can customize the visual look in many ways by either using one of the existing style **options** “Alum” or “Gray”, or you can use “Custom” and define a custom style with the **SetStyle** method.
<sample Change Style>

 */

/** ## Methods ##
 * These are the methods available for CreateButton
 */


/** ### AdjustColor ###
 * Adjust the visual color effect of the control by setting the Hue (by angle in degrees in a color circle), the saturation, brightness and contrast of the control.
 * $$ btn.AdjustColor(hue, saturation, brightness, contrast) $$
 * @param {num} hue 
 * @param {num} saturation 
 * @param {num} brightness 
 * @param {num} contrast 0..100
 */


/** ### Animate ###
 * Animates the control. *  * There are * 	“in”-Animations which are used to show objects from hidden state * 	“out”-animations which are used to hide objects in visible state and * 	“static”-animations which keep the visible state.
 * $$ btn.Animate(type, callback, time) $$
 * @param {str} type NewsPaper|Jelly|Flash|RubberBand|Swing|TaDa|Bounce|Fall|FallRotate|<br><img width='300px' src='../animate.png'></img>
 * @param {fnc_json} callback {"pNames":["type"],"pTypes":["str"]}
 * @param {num_mls} time 
 */


/** ### Batch ###
 * Batch method calls to be able to set all object's properties at once. * Note that you need to specify each parameter (use “” or <js nobox>null</js> to leave some out) * Inherited methods can be called by appending an underscore to the function name (ie. <js nobox>txt.Batch({ SetBackColor_: [“red”] })</js>
 * $$ btn.Batch(properties) $$
 * @param {obj} properties { COMMAND:lst
 */


/** ### ClearFocus ###
 * Removes the focus of the control so that the user no longer has immediate access to it.
 * $$ btn.ClearFocus() $$
 */


/** ### Focus ###
 * Set the focus to the control so that the user can interact with it immediately.
 * $$ btn.Focus() $$
 */


/** ### GetAbsHeight ###
 * Get the absolute height of the control in pixels. * Note that unlike the objects margins its padding does change this value.
 * $$ btn.GetAbsHeight() $$
 * @returns num_int
 */


/** ### GetAbsWidth ###
 * Get the absolute width of the control in pixels. * Note that unlike the objects margins its padding does change this value.
 * $$ btn.GetAbsWidth() $$
 * @returns num_int
 */


/** ### GetHeight ###
 * Get the height of the control as screen height relative float or in pixels with the `px` option. * Note that unlike the objects margins its padding does change this value.
 * $$ btn.GetHeight(options) $$
 * @param {str} options px
 * @returns num
 */


/** ### GetLeft ###
 * Get the distance from the control to the left parent border as width relative float or in pixels with the `px` option.
 * $$ btn.GetLeft(options) $$
 * @param {str} options px
 * @returns num
 */


/** ### GetParent ###
 * Returns the parent control object where the object was added to - commonly a layout.
 * $$ btn.GetParent() $$
 * @returns dso
 */


/** ### GetPosition ###
 * Returns data about the position and size of the control. * If the `screen` option is given the position on the screen will be returned. Otherwise relative to the parent control. * The `px` options turns the relative values into pixels.
 * $$ btn.GetPosition(options) $$
 * @param {str} options screen,px
 * @returns obj-{ left:num, top:num, width:num, height:num }
 */


/** ### GetText ###
 * Returns the current1605064214 displayed text of the control.
 * $$ btn.GetText() $$
 * @returns str
 */


/** ### GetTextSize ###
 * Returns the current size of the contained text. If the `px` option is given the size will be retured in pixels.
 * $$ btn.GetTextSize(mode) $$
 * @param {str} mode px
 * @returns num
 */


/** ### GetTop ###
 * Get the distance from the control to the upper parent border as height relative float or in pixels with the `px` option.
 * $$ btn.GetTop(options) $$
 * @param {str} options px
 * @returns num
 */


/** ### GetType ###
 * Returns the control class name.
 * $$ btn.GetType() $$
 * @returns str-Button
 */


/** ### GetVisibility ###
 * Returns the current visibility state of the control. The Values are: * `Show`: visible * `Hide`: invisible but still consuming space * `Gone`: invisible and not consuming space
 * $$ btn.GetVisibility() $$
 * @returns str-Show|Hide|Gone
 */


/** ### GetWidth ###
 * Get the width of the control as screen width relative float or in pixels with the `px` option. * Note that unlike the objects margins its padding does change this value.
 * $$ btn.GetWidth(options) $$
 * @param {str} options px
 * @returns num
 */


/** ### Gone ###
 * Hides the control without consuming any more layout space as if it were never there.
 * $$ btn.Gone() $$
 */


/** ### Hide ###
 * Hide the control but keep the layout space free.
 * $$ btn.Hide() $$
 */


/** ### IsEnabled ###
 * Returns whether the control is currently useable by the user.
 * $$ btn.IsEnabled() $$
 * @returns bin
 */


/** ### IsOverlap ###
 * Returns whether the control overlaps with another by a given distance.
 * $$ btn.IsOverlap(obj, depth) $$
 * @param {dso} obj 
 * @param {num_frc} depth 
 * @returns bin
 */


/** ### IsVisible ###
 * Returns whether the control is currently visible to the user, ignoring overlaying controls.
 * $$ btn.IsVisible() $$
 * @returns bin
 */


/** ### Method ###
 * Allows access to other functions defined on the object in Java via reflection. *  * <premium>
 * $$ btn.Method(name, types, p1, p2, p3, p4) $$
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
 * $$ btn.SetBackAlpha(alpha) $$
 * @param {num} alpha 0..0.99|1..256
 */


/** ### SetBackColor ###
 * Changes the background color of the control.
 * $$ btn.SetBackColor(color) $$
 * @param {str_col} color 
 */


/** ### SetBackGradient ###
 * Define the background color of the control with a gradient. The default gradient direction is from top to bottom, but you can change it from left to right and the reversed versions of course.
 * $$ btn.SetBackGradient(color1, color2, color3, options) $$
 * @param {str_col} color1 
 * @param {str_col} color2 
 * @param {?} color3 
 * @param {str} options left
 */


/** ### SetBackGradientRadial ###
 * Define a radial color gradient for the background of control.
 * $$ btn.SetBackGradientRadial(x, y, radius, color1, color2, color3, options) $$
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
 * $$ btn.SetBackground(file, options) $$
 * @param {str_ptf} file 
 * @param {str} options repeat
 */


/** ### SetColorFilter ###
 * Adjust the visual color effect with a color and a given BlendMode. More information about BlendMode can be found in the [Android Developer page](https://developer.android.com/reference/android/graphics/BlendMode.html).
 * $$ btn.SetColorFilter(color, mode) $$
 * @param {str_col} color 
 * @param {str} mode Add|Multiply|clear|darken|lighten|overlay|screen|xor|color|color_burn|color_dodge|difference|exclusion|hard_light|hue|luminosity|modulate|saturation|soft_light|src|dst|src_in|src_out|src_atop|src_over|dst_in|dst_out|dst_atop|dst_over
 */


/** ### SetDescription ###
 * Set a control description for accessibility
 * $$ btn.SetDescription(desc) $$
 * @param {str} desc 
 */


/** ### SetEllipsize ###
 * Will cause the inner text to be broken with ... at the start or the end if it cannot fit in the control.
 * $$ btn.SetEllipsize(mode) $$
 * @param {str} mode start|middle|end
 */


/** ### SetEnabled ###
 * En/Disable the control physically and visually so that the user can/can not access the control. Events like OnTouch will still be fired.
 * $$ btn.SetEnabled(enable) $$
 * @param {bin} enable 
 */


/** ### SetFontFile ###
 * Change the font style by defining a font file.
 * $$ btn.SetFontFile(file) $$
 * @param {str_ptf} file 
 */


/** ### SetHtml ###
 * Change the current text of the control to html-formatted text.
 * $$ btn.SetHtml(str) $$
 * @param {str_htm} str 
 */


/** ### SetMargins ###
 * Define a distance to other controls on each side of the control.
 * $$ btn.SetMargins(left, top, right, bottom, mode) $$
 * @param {num_frc} left 
 * @param {num_frc} top 
 * @param {num_frc} right 
 * @param {num_frc} bottom 
 * @param {str} mode px|sp|dip|mm|pt
 */


/** ### SetOnTouch ###
 * Define a callback function that is called when the user touches the control.
 * $$ btn.SetOnTouch(callback) $$
 * @param {fnc_json} callback {}
 */


/** ### SetOnLongTouch ###
 * %cb% the button has been long pressed.
 * $$ btn.SetOnLongTouch(callback) $$
 * @param {fnc_json} callback {}
 */


/** ### SetPadding ###
 * Define distances that elements within the control are to maintain from the control borders.
 * $$ btn.SetPadding(left, top, right, bottom, mode) $$
 * @param {num_frc} left 
 * @param {num_frc} top 
 * @param {num_frc} right 
 * @param {num_frc} bottom 
 * @param {str} mode px|sp|dip|mm|pt
 */


/** ### SetPosition ###
 * Defines the position and size for the control if the parent is an absolute layout.
 * $$ btn.SetPosition(left, top, width, height, options) $$
 * @param {num} left 
 * @param {num} top 
 * @param {num} width 
 * @param {num} height 
 * @param {str} options px
 */


/** ### SetScale ###
 * Scales the control along with its contents by the factors passed to the function.
 * $$ btn.SetScale(x, y) $$
 * @param {num_fac} x 
 * @param {num_fac} y 
 */


/** ### SetSize ###
 * Change the size of the control in either screen relative values or in pixels if the `px` option was given.
 * $$ btn.SetSize(width, height, options) $$
 * @param {num} width 
 * @param {num} height 
 * @param {str} options px|sp|dip|dp|mm|pt
 */


/** ### SetStyle ###
 * Customize the look of the button.
 * $$ btn.SetStyle(color1, color2, radius, strokeClr, strokeWidth, shadow) $$
 * @param {str_col} color1 
 * @param {str_col} color2 
 * @param {num_pxl} radius 
 * @param {str_col} strokeClr 
 * @param {num_pxl} strokeWidth 
 * @param {num_frc} shadow 
 */


/** ### SetText ###
 * Change the currently displayed text in the control.
 * $$ btn.SetText(text) $$
 * @param {str} text 
 */


/** ### SetTextColor ###
 * Change the text color of the contained text.
 * $$ btn.SetTextColor(color) $$
 * @param {str_col} color 
 */


/** ### SetTextShadow ###
 * Define a shadow displayed around the control. * The sun is always shining so there has to be one. Always.
 * $$ btn.SetTextShadow(radius, dx, dy, color) $$
 * @param {num_int} radius 
 * @param {num_int} dx 
 * @param {num_int} dy 
 * @param {str_col} color 
 */


/** ### SetTextSize ###
 * Change the size of the contained text.
 * $$ btn.SetTextSize(size, mode) $$
 * @param {num} size 
 * @param {str} mode px|dip|sp|mm|pt|pl:scales text in proportion with device resolution|ps:scales text in proportion with device resolution
 */


/** ### SetVisibility ###
 * Change the visibility of the control to one of the available modes: * `Show:` visible * `Hide:` invisible but still consuming space * `Gone:` invisible and not consuming space
 * $$ btn.SetVisibility(mode) $$
 * @param {str} mode Show|Hide|Gone
 */


/** ### Show ###
 * Set the visibility of the control to “Show”.
 * $$ btn.Show() $$
 */


/** ### Tween ###
 * Performs an animation on the control. * The `target` object is for the position, size and rotation that the control has at the end of the animation. *  * The `type` specifies the behavior and the speed of the animation. Separated by a dot, you must also specify whether you want to apply this behavior to the beginning (In), end (Out), or to both (InOut) times of the animation. *  * With the amount of `repeat`s you can control how many times you want to play the animation. *  * If you have `jojo` activated, the animation will alternate between forward and backward playback, so that if the repetition value is odd, the control will be at the start position again at the end of the animation. *  * Finally the `callback` function will be called after the animation has finished. Well, it's about time!
 * $$ btn.Tween(target, duration, type, repeat, yoyo, callback) $$
 * @param {obj} target { x:num_frc, y:num_frc, w:num_frc, h:num_frc, sw:num_frc
 * @param {num_mls} duration 
 * @param {str} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
 * @param {num_int} repeat 
 * @param {bin} yoyo 
 * @param {fnc_json} callback {}
 */

// CreateButton.txt --> All the sample codes

/** @Sample
<sample Default Size>
function OnStart()
{
	lay = app.CreateLayout( "Linear", "VCenter,FillXY" );

<b>	btn = app.CreateButton( "Press Me" );
	btn.SetOnTouch( SayHello );
	lay.AddChild( btn );</b>

	app.AddLayout( lay );
}

function SayHello()
{
	app.ShowPopup("Hello World!");
}
</sample>

<sample Fixed Size>
function OnStart()
{
	lay = app.CreateLayout( "Linear", "VCenter,FillXY" );

<b>	btn = app.CreateButton( "Press Me", 0.5, 0.2 );
	btn.SetOnTouch( SayHello );
	lay.AddChild( btn );</b>

	app.AddLayout( lay );
}

function SayHello()
{
	app.ShowPopup("Hello World!");
}
</sample>

<sample Fill Layout Width>
function OnStart()
{
	lay = app.CreateLayout( "Linear", "VCenter,FillXY" );
	lay.SetPadding( 0.02, 0.02, 0.02, 0.02 );

<b>	btn = app.CreateButton( "Press Me", -1, -1, "FillX" );
	btn.SetOnTouch( SayHello );
	lay.AddChild( btn );</b>

	app.AddLayout( lay );
}

function SayHello()
{
	app.ShowPopup("Hello World!");
}
</sample>

<sample Change Style>
function OnStart()
{
	lay = app.CreateLayout( "Linear", "Vertical,FillXY" );
	lay.SetPadding( 0.1, 0.1, 0.1, 0 );

<b>	b1 = app.CreateButton( "Normal", -1, -1, "FillX" );
	lay.AddChild( b1 );

	b2 = app.CreateButton( "Gray", -1, -1, "FillX,Gray" );
	lay.AddChild( b2 );

	b3 = app.CreateButton( "Alum", -1, -1, "FillX,Alum" );
	lay.AddChild( b3 );</b>

	app.AddLayout( lay );
}
</sample>

 */

