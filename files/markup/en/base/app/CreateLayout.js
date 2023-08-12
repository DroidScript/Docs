
/** # CreateLayout #
 * @abbrev lay
 * 
 * $$ lay = app.CreateLayout(type, options) $$ 
 * @param {str} type Linear|Absolute|Frame|Card
 * @param {str_com} options TouchThrough:forwards touch events to underlying children,TouchSpy:spies for touch events on all children,Left|Top|Right|Bottom|Center|H/VCenter,Wrap,Horizontal|Vertical,FillX/Y
 * @returns dso-Layout
*/


// CreateLayout.md --> Complete documentation. Sample codes is at the bottom of this file.

/** @Description
Layouts are container objects which are used to visually organize graphical objects (controls), such as text, buttons and images on the screen. There are 4 types of layouts: _**“Linear”**_, _**“Absolute”**_, _**“Frame”**_ and _**“Card”**_.

Layouts are transparent by default but you can set a background image which can be tiled or stretched to fill the layout. You can also set a background color or background gradient.

You can add child objects to the Layout using the AddChild function: <js>lay.AddChild( object );</js>
The alignment of chlld objects within a layout can be set by adding the **options** “Left”, “Right”, “Bottom” and “VCenter”, by default objects will be aligned “Top,Center”.

### Linear Layouts
Linear layouts are probably the most useful type and are used to organize controls in either the default “Vertical” or “Horizontal” direction on screen.
<sample Vertical>
<sample Horizontal>

By default Layouts will auto-size to wrap their contents but you have 3 more options as to how a layout sizes within it's parent: “FillX”, “FillY” and “FillXY”.
<sample Combined>

### Frame Layouts
Frame layouts are used to display objects in front or behind each other. Every time the **AddChild** function is called on a Frame layout, the child object is placed in a new layer in front of the previously added object at the top left of the frame.

Frame Layouts are useful if you wish to do **animated Flips** or **Slides** to reveal layers of objects or use **transparency**.
<sample Image Swap>

### Absolute Layouts
Absolute layouts ignore all alignment options and allow the absolute positioning of controls by calling the **SetPosition** and **SetSize** functions of each of the child objects. However, you are encouraged use linear layouts for most of your programs, unless it is _absolute_ly necessary.

### Card Layouts
Card Layouts are just like frame layouts, but with rounded corners and a shadow by default.
They may be used to display offers with an image and optional info text.

 */

/** ## Methods ##
 * These are the methods available for CreateLayout
 */


/** ### AddChild ###
 * Adds a control to the layout.
 * $$ lay.AddChild(child, order) $$
 * @param {dso} child 
 * @param {num_int} order 
 */


/** ### AdjustColor ###
 * Adjust the visual color effect of the control by setting the Hue (by angle in degrees in a color circle), the saturation, brightness and contrast of the control.
 * $$ lay.AdjustColor(hue, saturation, brightness, contrast) $$
 * @param {num} hue 
 * @param {num} saturation 
 * @param {num} brightness 
 * @param {num} contrast 0..100
 */


/** ### Animate ###
 * Animates the control. *  * There are * 	“in”-Animations which are used to show objects from hidden state * 	“out”-animations which are used to hide objects in visible state and * 	“static”-animations which keep the visible state.
 * $$ lay.Animate(type, callback, time) $$
 * @param {str} type NewsPaper|Jelly|Flash|RubberBand|Swing|TaDa|Bounce|Fall|FallRotate|<br><img width='300px' src='../animate.png'></img>
 * @param {fnc_json} callback {"pNames":["type"],"pTypes":["str"]}
 * @param {num_mls} time 
 */


/** ### Batch ###
 * Batch method calls to be able to set all object's properties at once. * Note that you need to specify each parameter (use “” or <js nobox>null</js> to leave some out) * Inherited methods can be called by appending an underscore to the function name (ie. <js nobox>txt.Batch({ SetBackColor_: [“red”] })</js>
 * $$ lay.Batch(properties) $$
 * @param {obj} properties { COMMAND:lst
 */


/** ### ChildToFront ###
 * Moves a child in front of all other children.
 * $$ lay.ChildToFront(child) $$
 * @param {dso} child 
 */


/** ### ClearFocus ###
 * Removes the focus of the control so that the user no longer has immediate access to it.
 * $$ lay.ClearFocus() $$
 */


/** ### DestroyChild ###
 * Destroys and removes a child from the layout.
 * $$ lay.DestroyChild(child) $$
 * @param {dso} child 
 */


/** ### Focus ###
 * Set the focus to the control so that the user can interact with it immediately.
 * $$ lay.Focus() $$
 */


/** ### GetAbsHeight ###
 * Get the absolute height of the control in pixels. * Note that unlike the objects margins its padding does change this value.
 * $$ lay.GetAbsHeight() $$
 * @returns num_int
 */


/** ### GetAbsWidth ###
 * Get the absolute width of the control in pixels. * Note that unlike the objects margins its padding does change this value.
 * $$ lay.GetAbsWidth() $$
 * @returns num_int
 */


/** ### GetChildOrder ###
 * Returns the z order of a child.
 * $$ lay.GetChildOrder(child) $$
 * @param {dso} child 
 * @returns num_int
 */


/** ### GetHeight ###
 * Get the height of the control as screen height relative float or in pixels with the `px` option. * Note that unlike the objects margins its padding does change this value.
 * $$ lay.GetHeight(options) $$
 * @param {str} options px
 * @returns num
 */


/** ### GetLeft ###
 * Get the distance from the control to the left parent border as width relative float or in pixels with the `px` option.
 * $$ lay.GetLeft(options) $$
 * @param {str} options px
 * @returns num
 */


/** ### GetParent ###
 * Returns the parent control object where the object was added to - commonly a layout.
 * $$ lay.GetParent() $$
 * @returns dso
 */


/** ### GetPosition ###
 * Returns data about the position and size of the control. * If the `screen` option is given the position on the screen will be returned. Otherwise relative to the parent control. * The `px` options turns the relative values into pixels.
 * $$ lay.GetPosition(options) $$
 * @param {str} options screen,px
 * @returns obj-{ left:num, top:num, width:num, height:num }
 */


/** ### GetTop ###
 * Get the distance from the control to the upper parent border as height relative float or in pixels with the `px` option.
 * $$ lay.GetTop(options) $$
 * @param {str} options px
 * @returns num
 */


/** ### GetType ###
 * Returns the control class name.
 * $$ lay.GetType() $$
 * @returns str-Layout
 */


/** ### GetVisibility ###
 * Returns the current visibility state of the control. The Values are: * `Show`: visible * `Hide`: invisible but still consuming space * `Gone`: invisible and not consuming space
 * $$ lay.GetVisibility() $$
 * @returns str-Show|Hide|Gone
 */


/** ### GetWidth ###
 * Get the width of the control as screen width relative float or in pixels with the `px` option. * Note that unlike the objects margins its padding does change this value.
 * $$ lay.GetWidth(options) $$
 * @param {str} options px
 * @returns num
 */


/** ### Gone ###
 * Hides the control without consuming any more layout space as if it were never there.
 * $$ lay.Gone() $$
 */


/** ### Hide ###
 * Hide the control but keep the layout space free.
 * $$ lay.Hide() $$
 */


/** ### IsEnabled ###
 * Returns whether the control is currently useable by the user.
 * $$ lay.IsEnabled() $$
 * @returns bin
 */


/** ### IsOverlap ###
 * Returns whether the control overlaps with another by a given distance.
 * $$ lay.IsOverlap(obj, depth) $$
 * @param {dso} obj 
 * @param {num_frc} depth 
 * @returns bin
 */


/** ### IsVisible ###
 * Returns whether the control is currently visible to the user, ignoring overlaying controls.
 * $$ lay.IsVisible() $$
 * @returns bin
 */


/** ### Method ###
 * Allows access to other functions defined on the object in Java via reflection. *  * <premium>
 * $$ lay.Method(name, types, p1, p2, p3, p4) $$
 * @param {str} name 
 * @param {lst} types boolean,char,byte,short,int,long,float,double,String,CharSequence,...
 * @param {str} p1 
 * @param {str} p2 
 * @param {str} p3 
 * @param {str} p4 
 * @returns all
 */


/** ### RemoveChild ###
 * Removes a child from the layout.
 * $$ lay.RemoveChild(child) $$
 * @param {dso} child 
 */


/** ### SetBackAlpha ###
 * Set the transparency of the background by an alpha value between `0` (_no transparency_) and `0.99` (_full transparent_) or `1` (_no transparency_) and `256` (_full transparent_)
 * $$ lay.SetBackAlpha(alpha) $$
 * @param {num} alpha 0..0.99|1..256
 */


/** ### SetBackColor ###
 * Changes the background color of the control.
 * $$ lay.SetBackColor(color) $$
 * @param {str_col} color 
 */


/** ### SetBackGradient ###
 * Define the background color of the control with a gradient. The default gradient direction is from top to bottom, but you can change it from left to right and the reversed versions of course.
 * $$ lay.SetBackGradient(color1, color2, color3, options) $$
 * @param {str_col} color1 
 * @param {str_col} color2 
 * @param {?} color3 
 * @param {str} options left
 */


/** ### SetBackGradientRadial ###
 * Define a radial color gradient for the background of control.
 * $$ lay.SetBackGradientRadial(x, y, radius, color1, color2, color3, options) $$
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
 * $$ lay.SetBackground(file, options) $$
 * @param {str_ptf} file 
 * @param {str} options repeat
 */


/** ### SetColorFilter ###
 * Adjust the visual color effect with a color and a given BlendMode. More information about BlendMode can be found in the [Android Developer page](https://developer.android.com/reference/android/graphics/BlendMode.html).
 * $$ lay.SetColorFilter(color, mode) $$
 * @param {str_col} color 
 * @param {str} mode Add|Multiply|clear|darken|lighten|overlay|screen|xor|color|color_burn|color_dodge|difference|exclusion|hard_light|hue|luminosity|modulate|saturation|soft_light|src|dst|src_in|src_out|src_atop|src_over|dst_in|dst_out|dst_atop|dst_over
 */


/** ### SetChildMargins ###
 * Set margins of top-level children.
 * $$ lay.SetChildMargins(left, top, right, bottom, mode) $$
 * @param {num} left 
 * @param {num} top 
 * @param {num} right 
 * @param {num_frc} bottom 
 * @param {str} mode px|sp|dip|mm|pt
 */


/** ### SetChildTextSize ###
 * Change the text size of top-level children.
 * $$ lay.SetChildTextSize(size, mode) $$
 * @param {num} size 
 * @param {str} mode px|dip|sp|mm|pt|pl:scales text in proportion with device resolution|ps:scales text in proportion with device resolution
 */


/** ### SetCornerRadius ###
 * Applies a corner radius to card layouts.
 * $$ lay.SetCornerRadius(radius) $$
 * @param {num_pxl} radius 
 */


/** ### SetElevation ###
 * Applies a shadow to card layouts.
 * $$ lay.SetElevation(elevation) $$
 * @param {num_pxl} elevation 
 */


/** ### SetDescription ###
 * Set a control description for accessibility
 * $$ lay.SetDescription(desc) $$
 * @param {str} desc 
 */


/** ### SetEnabled ###
 * En/Disable the control physically and visually so that the user can/can not access the control. Events like OnTouch will still be fired.
 * $$ lay.SetEnabled(enable) $$
 * @param {bin} enable 
 */


/** ### SetGravity ###
 * Adjust the placing of contained children.
 * $$ lay.SetGravity(gravity) $$
 * @param {str} gravity Left,Top,Right,Bottom,VCenter,HCenter,FillX,FillY,FillXY
 */


/** ### SetMargins ###
 * Define a distance to other controls on each side of the control.
 * $$ lay.SetMargins(left, top, right, bottom, mode) $$
 * @param {num_frc} left 
 * @param {num_frc} top 
 * @param {num_frc} right 
 * @param {num_frc} bottom 
 * @param {str} mode px|sp|dip|mm|pt
 */


/** ### SetOnChildChange ###
 * Defines a callback function which is called when the content of a child control has been changed by the user.
 * $$ lay.SetOnChildChange(callback) $$
 * @param {fnc_json} callback {"pNames":["src"],"pTypes":["dso"]}
 */


/** ### SetOnLongTouch ###
 * %cb% the object has been long pressed.
 * $$ lay.SetOnLongTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["src"],"pTypes":["dso"]}
 */


/** ### SetOnTouch ###
 * Define a callback function that is called when the user touches the control. In addition, an `event` object is passed to the callback function to obtain information about the touch `type`, the touch `position(s)`, the `amount` of touches and the `control` that was touched.
 * $$ lay.SetOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["event"],"pTypes":["obj-{ source:dso, action:str-\"Down|Move|Up\", count:num_int, x:\"Multitouch positions\"&colon; [ x1:num_frc&comma; x2:num_frc&comma; x3:num_frc ], y:\"Multitouch positions\"&colon; [ y1:num_frc&comma; y2:num_frc&comma; y3:num_frc ] }"]}
 */


/** ### SetOnTouchDown ###
 * %cb% the user started toching the control.
 * $$ lay.SetOnTouchDown(callback) $$
 * @param {fnc_json} callback {"pNames":["event"],"pTypes":["obj-{ source:dso, action:str-Down, count:num_int, x:\"Multitouch positions\"&colon; [ x1:num_frc&comma; x2:num_frc&comma; x3:num_frc ], y:\"Multitouch positions\"&colon; [ y1:num_frc&comma; y2:num_frc&comma; y3:num_frc ] }"]}
 */


/** ### SetOnTouchMove ###
 * %cb% the user drags a finger over the screen.
 * $$ lay.SetOnTouchMove(callback) $$
 * @param {fnc_json} callback {"pNames":["event"],"pTypes":["obj-{ source:dso, action:str-Move, count:num_int, x:\"Multitouch positions\"&colon; [ x1:num_frc&comma; x2:num_frc&comma; x3:num_frc ], y:\"Multitouch positions\"&colon; [ y1:num_frc&comma; y2:num_frc&comma; y3:num_frc ] }"]}
 */


/** ### SetOnTouchUp ###
 * %cb% the users finger leaves the screen.
 * $$ lay.SetOnTouchUp(callback) $$
 * @param {fnc_json} callback {"pNames":["event"],"pTypes":["obj-{ source:dso, action:str-Up, count:num_int, x:\"Multitouch positions\"&colon; [ x1:num_frc&comma; x2:num_frc&comma; x3:num_frc ], y:\"Multitouch positions\"&colon; [ y1:num_frc&comma; y2:num_frc&comma; y3:num_frc ] }"]}
 */


/** ### SetOrientation ###
 * Change the children orientation.
 * $$ lay.SetOrientation(orient) $$
 * @param {str} orient Horizontal|Vertical
 */


/** ### SetPadding ###
 * Define distances that elements within the control are to maintain from the control borders.
 * $$ lay.SetPadding(left, top, right, bottom, mode) $$
 * @param {num_frc} left 
 * @param {num_frc} top 
 * @param {num_frc} right 
 * @param {num_frc} bottom 
 * @param {str} mode px|sp|dip|mm|pt
 */


/** ### SetPosition ###
 * Defines the position and size for the control if the parent is an absolute layout.
 * $$ lay.SetPosition(left, top, width, height, options) $$
 * @param {num} left 
 * @param {num} top 
 * @param {num} width 
 * @param {num} height 
 * @param {str} options px
 */


/** ### SetScale ###
 * Scales the control along with its contents by the factors passed to the function.
 * $$ lay.SetScale(x, y) $$
 * @param {num_fac} x 
 * @param {num_fac} y 
 */


/** ### SetSize ###
 * Change the size of the control in either screen relative values or in pixels if the `px` option was given.
 * $$ lay.SetSize(width, height, options) $$
 * @param {num} width 
 * @param {num} height 
 * @param {str} options px|sp|dip|dp|mm|pt
 */


/** ### SetTouchable ###
 * En/Disables touch events to be fired on the control. Other events like OnChange will still be fired.
 * $$ lay.SetTouchable(touchable) $$
 * @param {bin} touchable 
 */


/** ### SetTouchThrough ###
 * Define whether the layout should forward OnTouch events to underlying controls.
 * $$ lay.SetTouchThrough(through) $$
 * @param {bin} through 
 */


/** ### SetVisibility ###
 * Change the visibility of the control to one of the available modes: * `Show:` visible * `Hide:` invisible but still consuming space * `Gone:` invisible and not consuming space
 * $$ lay.SetVisibility(mode) $$
 * @param {str} mode Show|Hide|Gone
 */


/** ### Show ###
 * Set the visibility of the control to “Show”.
 * $$ lay.Show() $$
 */


/** ### Tween ###
 * Performs an animation on the control. * The `target` object is for the position, size and rotation that the control has at the end of the animation. *  * The `type` specifies the behavior and the speed of the animation. Separated by a dot, you must also specify whether you want to apply this behavior to the beginning (In), end (Out), or to both (InOut) times of the animation. *  * With the amount of `repeat`s you can control how many times you want to play the animation. *  * If you have `jojo` activated, the animation will alternate between forward and backward playback, so that if the repetition value is odd, the control will be at the start position again at the end of the animation. *  * Finally the `callback` function will be called after the animation has finished. Well, it's about time!
 * $$ lay.Tween(target, duration, type, repeat, yoyo, callback) $$
 * @param {obj} target { x:num_frc, y:num_frc, w:num_frc, h:num_frc, sw:num_frc
 * @param {num_mls} duration 
 * @param {str} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
 * @param {num_int} repeat 
 * @param {bin} yoyo 
 * @param {fnc_json} callback {}
 */

// CreateLayout.txt --> All the sample codes

/** @Sample
<sample Vertical>
function OnStart()
{
	<b>lay = app.CreateLayout( "Linear", "Vertical" );</b>

	btnA = app.CreateButton( "A", 0.2, 0.1 );
	lay.AddChild( btnA );

	btnB = app.CreateButton( "B", 0.2, 0.1 );
	lay.AddChild( btnB );

	btnC = app.CreateButton( "C", 0.2, 0.1 );
	lay.AddChild( btnC );

	app.AddLayout( lay );
}
</sample>

<sample Horizontal>
function OnStart()
{
	<b>lay = app.CreateLayout( "Linear", "Horizontal,FillXY" );</b>

	btnA = app.CreateButton( "A", 0.2, 0.1 );
	lay.AddChild( btnA );

	btnB = app.CreateButton( "B", 0.2, 0.1 );
	lay.AddChild( btnB );

	btnC = app.CreateButton( "C", 0.2, 0.1 );
	lay.AddChild( btnC );

	app.AddLayout( lay );
}
</sample>

<sample Combined>
function OnStart()
{
	layVert = app.CreateLayout( "Linear", "Vertical,FillXY" );

	btnA = app.CreateButton( "A", 0.6, 0.1 );
	layVert.AddChild( btnA );

	<b>layHoriz = app.CreateLayout( "Linear", "Horizontal" );
	layVert.AddChild( layHoriz );</b>

	btnB1 = app.CreateButton( "B1", 0.2, 0.1 );
	layHoriz.AddChild( btnB1 );
	btnB2 = app.CreateButton( "B2", 0.2, 0.1 );
	layHoriz.AddChild( btnB2 );
	btnB3 = app.CreateButton( "B3", 0.2, 0.1 );
	layHoriz.AddChild( btnB3 );

	btnC = app.CreateButton( "C", 0.6, 0.1 );
	layVert.AddChild( btnC );

	app.AddLayout( layVert );
}
</sample>

<sample Image Swap>
function OnStart()
{
	lay = app.CreateLayout( "Linear", "VCenter,FillXY" );

	<b>layFrm = app.CreateLayout( "Frame" );</b>
	img1 = app.CreateImage( "/Sys/Img/Droid1.png", 0.5 );
	layFrm.AddChild( img1 );

	img2 = app.CreateImage( "/Sys/Img/Hello.png", 0.5 );
	img2.SetVisibility( "Hide" );
	layFrm.AddChild( img2 );
	lay.AddChild( layFrm );

	btn = app.CreateButton( "Press Me" );
	btn.SetMargins( 0,0.1,0,0 );
	btn.SetOnTouch( btn_OnTouch );
	lay.AddChild( btn );

	app.AddLayout( lay );
}

function btn_OnTouch()
{
	if( img2.GetVisibility() == "Hide" )
    	img2.SetVisibility( "Show" );
	else
	   img2.SetVisibility( "Hide" );
}
</sample>

 */

