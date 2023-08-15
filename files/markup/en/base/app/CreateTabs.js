
/** # CreateTabs #
 * @abbrev tab
 * 
 * $$ tab = app.CreateTabs(list, width, height, options) $$ 
 * @param {str_com} list 
 * @param {num_frc} width 
 * @param {num_frc} height 
 * @param {str} options NoMargins
 * @returns dso-Tabs
*/


// CreateTabs.md --> Complete documentation. Sample codes is at the bottom of this file.

/** @Description
Tabs are useful if you have multiple subsections in your app. The user can then press the title of a tab and the control will automatically switch to the corresponding layout.
%c
To add children to a tab layout you have to retreive it first (because they were already created by the control):
<js>var layTab1 = tab.GetLayout( "TabName1" );</js>
Then you canuse it as every normal layout:dso-"CreateLayout" control
 */

/** ## Methods ##
 * These are the methods available for CreateTabs
 */


/** ### _AddChild ###
 * Adds a control to the layout.
 * $$ tab._AddChild(child, order) $$
 * @param {dso} child 
 * @param {num_int} order 
 */


/** ### AdjustColor ###
 * Adjust the visual color effect of the control by setting the Hue (by angle in degrees in a color circle), the saturation, brightness and contrast of the control.
 * $$ tab.AdjustColor(hue, saturation, brightness, contrast) $$
 * @param {num} hue 
 * @param {num} saturation 
 * @param {num} brightness 
 * @param {num} contrast 0..100
 */


/** ### Animate ###
 * Animates the control. *  * There are * 	“in”-Animations which are used to show objects from hidden state * 	“out”-animations which are used to hide objects in visible state and * 	“static”-animations which keep the visible state.
 * $$ tab.Animate(type, callback, time) $$
 * @param {str} type NewsPaper|Jelly|Flash|RubberBand|Swing|TaDa|Bounce|Fall|FallRotate|<br><img width='300px' src='../animate.png'></img>
 * @param {fnc_json} callback {"pNames":["type"],"pTypes":["str"]}
 * @param {num_mls} time 
 */


/** ### Batch ###
 * Batch method calls to be able to set all object's properties at once. * Note that you need to specify each parameter (use “” or <js nobox>null</js> to leave some out) * Inherited methods can be called by appending an underscore to the function name (ie. <js nobox>txt.Batch({ SetBackColor_: [“red”] })</js>
 * $$ tab.Batch(properties) $$
 * @param {obj} properties { COMMAND:lst
 */


/** ### _ChildToFront ###
 * Moves a child in front of all other children.
 * $$ tab._ChildToFront(child) $$
 * @param {dso} child 
 */


/** ### ClearFocus ###
 * Removes the focus of the control so that the user no longer has immediate access to it.
 * $$ tab.ClearFocus() $$
 */


/** ### _DestroyChild ###
 * Destroys and removes a child from the layout.
 * $$ tab._DestroyChild(child) $$
 * @param {dso} child 
 */


/** ### Focus ###
 * Set the focus to the control so that the user can interact with it immediately.
 * $$ tab.Focus() $$
 */


/** ### GetAbsHeight ###
 * Get the absolute height of the control in pixels. * Note that unlike the objects margins its padding does change this value.
 * $$ tab.GetAbsHeight() $$
 * @returns num_int
 */


/** ### GetAbsWidth ###
 * Get the absolute width of the control in pixels. * Note that unlike the objects margins its padding does change this value.
 * $$ tab.GetAbsWidth() $$
 * @returns num_int
 */


/** ### _GetChildOrder ###
 * Returns the z order of a child.
 * $$ tab._GetChildOrder(child) $$
 * @param {dso} child 
 * @returns num_int
 */


/** ### GetCurrentTabName ###
 * Returns the currently displayed tab name
 * $$ tab.GetCurrentTabName() $$
 * @returns str
 */


/** ### GetHeight ###
 * Get the height of the control as screen height relative float or in pixels with the `px` option. * Note that unlike the objects margins its padding does change this value.
 * $$ tab.GetHeight(options) $$
 * @param {str} options px
 * @returns num
 */


/** ### GetLayout ###
 * Returns the content layout of a given tab.
 * $$ tab.GetLayout(name) $$
 * @param {str} name 
 * @returns dso-CreateLayout
 */


/** ### GetLeft ###
 * Get the distance from the control to the left parent border as width relative float or in pixels with the `px` option.
 * $$ tab.GetLeft(options) $$
 * @param {str} options px
 * @returns num
 */


/** ### GetParent ###
 * Returns the parent control object where the object was added to - commonly a layout.
 * $$ tab.GetParent() $$
 * @returns dso
 */


/** ### GetPosition ###
 * Returns data about the position and size of the control. * If the `screen` option is given the position on the screen will be returned. Otherwise relative to the parent control. * The `px` options turns the relative values into pixels.
 * $$ tab.GetPosition(options) $$
 * @param {str} options screen,px
 * @returns obj-{ left:num, top:num, width:num, height:num }
 */


/** ### GetTop ###
 * Get the distance from the control to the upper parent border as height relative float or in pixels with the `px` option.
 * $$ tab.GetTop(options) $$
 * @param {str} options px
 * @returns num
 */


/** ### GetType ###
 * Returns the control class name.
 * $$ tab.GetType() $$
 * @returns str-Tabs
 */


/** ### GetVisibility ###
 * Returns the current visibility state of the control. The Values are: * `Show`: visible * `Hide`: invisible but still consuming space * `Gone`: invisible and not consuming space
 * $$ tab.GetVisibility() $$
 * @returns str-Show|Hide|Gone
 */


/** ### GetWidth ###
 * Get the width of the control as screen width relative float or in pixels with the `px` option. * Note that unlike the objects margins its padding does change this value.
 * $$ tab.GetWidth(options) $$
 * @param {str} options px
 * @returns num
 */


/** ### Gone ###
 * Hides the control without consuming any more layout space as if it were never there.
 * $$ tab.Gone() $$
 */


/** ### Hide ###
 * Hide the control but keep the layout space free.
 * $$ tab.Hide() $$
 */


/** ### IsEnabled ###
 * Returns whether the control is currently useable by the user.
 * $$ tab.IsEnabled() $$
 * @returns bin
 */


/** ### IsOverlap ###
 * Returns whether the control overlaps with another by a given distance.
 * $$ tab.IsOverlap(obj, depth) $$
 * @param {dso} obj 
 * @param {num_frc} depth 
 * @returns bin
 */


/** ### IsVisible ###
 * Returns whether the control is currently visible to the user, ignoring overlaying controls.
 * $$ tab.IsVisible() $$
 * @returns bin
 */


/** ### Method ###
 * Allows access to other functions defined on the object in Java via reflection. *  * <premium>
 * $$ tab.Method(name, types, p1, p2, p3, p4) $$
 * @param {str} name 
 * @param {lst} types boolean,char,byte,short,int,long,float,double,String,CharSequence,...
 * @param {str} p1 
 * @param {str} p2 
 * @param {str} p3 
 * @param {str} p4 
 * @returns all
 */


/** ### parent.AddTab ###
 * Adds a new tab to the tabs control.
 * $$ tab.parent.AddTab(name) $$
 * @param {str} name 
 */


/** ### _RemoveChild ###
 * Removes a child from the layout.
 * $$ tab._RemoveChild(child) $$
 * @param {dso} child 
 */


/** ### SetBackAlpha ###
 * Set the transparency of the background by an alpha value between `0` (_no transparency_) and `0.99` (_full transparent_) or `1` (_no transparency_) and `256` (_full transparent_)
 * $$ tab.SetBackAlpha(alpha) $$
 * @param {num} alpha 0..0.99|1..256
 */


/** ### SetBackColor ###
 * Changes the background color of the control.
 * $$ tab.SetBackColor(color) $$
 * @param {str_col} color 
 */


/** ### SetBackGradient ###
 * Define the background color of the control with a gradient. The default gradient direction is from top to bottom, but you can change it from left to right and the reversed versions of course.
 * $$ tab.SetBackGradient(color1, color2, color3, options) $$
 * @param {str_col} color1 
 * @param {str_col} color2 
 * @param {?} color3 
 * @param {str} options left
 */


/** ### SetBackGradientRadial ###
 * Define a radial color gradient for the background of control.
 * $$ tab.SetBackGradientRadial(x, y, radius, color1, color2, color3, options) $$
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
 * $$ tab.SetBackground(file, options) $$
 * @param {str_ptf} file 
 * @param {str} options repeat
 */


/** ### SetColorFilter ###
 * Adjust the visual color effect with a color and a given BlendMode. More information about BlendMode can be found in the [Android Developer page](https://developer.android.com/reference/android/graphics/BlendMode.html).
 * $$ tab.SetColorFilter(color, mode) $$
 * @param {str_col} color 
 * @param {str} mode Add|Multiply|clear|darken|lighten|overlay|screen|xor|color|color_burn|color_dodge|difference|exclusion|hard_light|hue|luminosity|modulate|saturation|soft_light|src|dst|src_in|src_out|src_atop|src_over|dst_in|dst_out|dst_atop|dst_over
 */


/** ### SetCornerRadius ###
 * Applies a corner radius to card layouts.
 * $$ tab.SetCornerRadius(radius) $$
 * @param {num_pxl} radius 
 */


/** ### SetDescription ###
 * Set a control description for accessibility
 * $$ tab.SetDescription(desc) $$
 * @param {str} desc 
 */


/** ### SetEnabled ###
 * En/Disable the control physically and visually so that the user can/can not access the control. Events like OnTouch will still be fired.
 * $$ tab.SetEnabled(enable) $$
 * @param {bin} enable 
 */


/** ### _SetGravity ###
 * Adjust the placing of contained children.
 * $$ tab._SetGravity(gravity) $$
 * @param {str} gravity Left,Top,Right,Bottom,VCenter,HCenter,FillX,FillY,FillXY
 */


/** ### SetMargins ###
 * Define a distance to other controls on each side of the control.
 * $$ tab.SetMargins(left, top, right, bottom, mode) $$
 * @param {num_frc} left 
 * @param {num_frc} top 
 * @param {num_frc} right 
 * @param {num_frc} bottom 
 * @param {str} mode px|sp|dip|mm|pt
 */


/** ### SetOnChange ###
 * %cb% the tab has been changed by the user.
 * $$ tab.SetOnChange(callback) $$
 * @param {fnc_json} callback {"pNames":["name"],"pTypes":["str"]}
 */


/** ### SetOnChildChange ###
 * Defines a callback function which is called when the content of a child control has been changed by the user.
 * $$ tab.SetOnChildChange(callback) $$
 * @param {fnc_json} callback {"pNames":["src"],"pTypes":["dso"]}
 */


/** ### SetOnLongTouch ###
 * %cb% the object has been long pressed.
 * $$ tab.SetOnLongTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["src"],"pTypes":["dso"]}
 */


/** ### SetOnTouch ###
 * Define a callback function that is called when the user touches the control. In addition, an `event` object is passed to the callback function to obtain information about the touch `type`, the touch `position(s)`, the `amount` of touches and the `control` that was touched.
 * $$ tab.SetOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["event"],"pTypes":["obj-{ source:dso, action:str-\"Down|Move|Up\", count:num_int, x:\"Multitouch positions\"&colon; [ x1:num_frc&comma; x2:num_frc&comma; x3:num_frc ], y:\"Multitouch positions\"&colon; [ y1:num_frc&comma; y2:num_frc&comma; y3:num_frc ] }"]}
 */


/** ### _SetOnTouchDown ###
 * %cb% the user started toching the control.
 * $$ tab._SetOnTouchDown(callback) $$
 * @param {fnc_json} callback {"pNames":["event"],"pTypes":["obj-{ source:dso, action:str-Down, count:num_int, x:\"Multitouch positions\"&colon; [ x1:num_frc&comma; x2:num_frc&comma; x3:num_frc ], y:\"Multitouch positions\"&colon; [ y1:num_frc&comma; y2:num_frc&comma; y3:num_frc ] }"]}
 */


/** ### _SetOnTouchMove ###
 * %cb% the user drags a finger over the screen.
 * $$ tab._SetOnTouchMove(callback) $$
 * @param {fnc_json} callback {"pNames":["event"],"pTypes":["obj-{ source:dso, action:str-Move, count:num_int, x:\"Multitouch positions\"&colon; [ x1:num_frc&comma; x2:num_frc&comma; x3:num_frc ], y:\"Multitouch positions\"&colon; [ y1:num_frc&comma; y2:num_frc&comma; y3:num_frc ] }"]}
 */


/** ### _SetOnTouchUp ###
 * %cb% the users finger leaves the screen.
 * $$ tab._SetOnTouchUp(callback) $$
 * @param {fnc_json} callback {"pNames":["event"],"pTypes":["obj-{ source:dso, action:str-Up, count:num_int, x:\"Multitouch positions\"&colon; [ x1:num_frc&comma; x2:num_frc&comma; x3:num_frc ], y:\"Multitouch positions\"&colon; [ y1:num_frc&comma; y2:num_frc&comma; y3:num_frc ] }"]}
 */


/** ### _SetOrientation ###
 * Change the children orientation.
 * $$ tab._SetOrientation(orient) $$
 * @param {str} orient Horizontal|Vertical
 */


/** ### SetPadding ###
 * Define distances that elements within the control are to maintain from the control borders.
 * $$ tab.SetPadding(left, top, right, bottom, mode) $$
 * @param {num_frc} left 
 * @param {num_frc} top 
 * @param {num_frc} right 
 * @param {num_frc} bottom 
 * @param {str} mode px|sp|dip|mm|pt
 */


/** ### SetPosition ###
 * Defines the position and size for the control if the parent is an absolute layout.
 * $$ tab.SetPosition(left, top, width, height, options) $$
 * @param {num} left 
 * @param {num} top 
 * @param {num} width 
 * @param {num} height 
 * @param {str} options px
 */


/** ### SetScale ###
 * Scales the control along with its contents by the factors passed to the function.
 * $$ tab.SetScale(x, y) $$
 * @param {num_fac} x 
 * @param {num_fac} y 
 */


/** ### SetSize ###
 * Change the size of the control in either screen relative values or in pixels if the `px` option was given.
 * $$ tab.SetSize(width, height, options) $$
 * @param {num} width 
 * @param {num} height 
 * @param {str} options px|sp|dip|dp|mm|pt
 */


/** ### SetTextSize ###
 * 
 * $$ tab.SetTextSize(size, mode) $$
 * @param {num} size 
 * @param {str} mode px|sp|dip|mm|pt
 */


/** ### SetTouchable ###
 * En/Disables touch events to be fired on the control. Other events like OnChange will still be fired.
 * $$ tab.SetTouchable(touchable) $$
 * @param {bin} touchable 
 */


/** ### SetTouchThrough ###
 * Define whether the layout should forward OnTouch events to underlying controls.
 * $$ tab.SetTouchThrough(through) $$
 * @param {bin} through 
 */


/** ### SetVisibility ###
 * Change the visibility of the control to one of the available modes: * `Show:` visible * `Hide:` invisible but still consuming space * `Gone:` invisible and not consuming space
 * $$ tab.SetVisibility(mode) $$
 * @param {str} mode Show|Hide|Gone
 */


/** ### Show ###
 * Set the visibility of the control to “Show”.
 * $$ tab.Show() $$
 */


/** ### ShowTab ###
 * Switch to a given tab name
 * $$ tab.ShowTab(name) $$
 * @param {str} name 
 */


/** ### Tween ###
 * Performs an animation on the control. * The `target` object is for the position, size and rotation that the control has at the end of the animation. *  * The `type` specifies the behavior and the speed of the animation. Separated by a dot, you must also specify whether you want to apply this behavior to the beginning (In), end (Out), or to both (InOut) times of the animation. *  * With the amount of `repeat`s you can control how many times you want to play the animation. *  * If you have `jojo` activated, the animation will alternate between forward and backward playback, so that if the repetition value is odd, the control will be at the start position again at the end of the animation. *  * Finally the `callback` function will be called after the animation has finished. Well, it's about time!
 * $$ tab.Tween(target, duration, type, repeat, yoyo, callback) $$
 * @param {obj} target { x:num_frc, y:num_frc, w:num_frc, h:num_frc, sw:num_frc
 * @param {num_mls} duration 
 * @param {str} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
 * @param {num_int} repeat 
 * @param {bin} yoyo 
 * @param {fnc_json} callback {}
 */

// CreateTabs.txt --> All the sample codes

/** @Sample
<sample Basic>
function OnStart()
{
	lay = app.CreateLayout( "linear", "VCenter,FillXY" );

    var tabs = app.CreateTabs( "Tab 1,Tab 2,Tab 3", 0.8, 0.8, "VCenter" );
    lay.AddChild( tabs );

    tab1 = tabs.GetLayout( "Tab 1" );
    tab1.SetBackGradient( "red", "green", "", "left-right" );

    tab1 = tabs.GetLayout( "Tab 2" );
    tab1.SetBackGradient( "green", "blue", "", "left-right" );

    tab1 = tabs.GetLayout( "Tab 3" );
    tab1.SetBackGradient( "blue", "red", "", "left-right" );

	app.AddLayout( lay );
}
</sample>

 */

