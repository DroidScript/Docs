
/** # CreateDialog #
 * @abbrev dlg
 * 
 * $$ dlg = app.CreateDialog(title, options) $$ 
 * @param {str} title 
 * @param {str_com} options AutoCancel|NoCancel,NoTitle,NoFocus,NoDim,NoKeys,TouchModal,NoTouch,Modal,Kiosk,Old:apply old list style affecting title style and unrounded corners
 * @returns dso-Dialog
*/


// CreateDialog.md --> Complete documentation. Sample codes is at the bottom of this file.

/** @Description
Custom dialogs appear on top of the app and thus can be used to show temporary information or collect data from the user. They are also useful for displaying configuration or settings controls.
%c
Dialogs are resizeable and you can also change the look of them so that they fit in with the theme of your application.

A custom dialog needs a layout to add the controls to. Use the @CreateLayout method of the **app** object to add a layout.
<js>
layDlg = app.CreateLayout( type, options );
dlg.AddLayout( layDlg );
</js>
If you have added all your controls to the dialog layout you can use the **Show** method to show the dialog.

Normally the user can cancel the dialog by pressing the _BACK_ button of the device, but you can disable that option by using the “NoCancel” **option**. In order to close the dialog now, you have to call **Dismiss**.

 */

/** ## Methods ##
 * These are the methods available for CreateDialog
 */


/** ### AddLayout ###
 * Add the content layout to the dialog.
 * $$ dlg.AddLayout(layout) $$
 * @param {dso} layout CreateLayout
 */


/** ### AdjustColor ###
 * Adjust the visual color effect of the control by setting the Hue (by angle in degrees in a color circle), the saturation, brightness and contrast of the control.
 * $$ dlg.AdjustColor(hue, saturation, brightness, contrast) $$
 * @param {num} hue 
 * @param {num} saturation 
 * @param {num} brightness 
 * @param {num} contrast 0..100
 */


/** ### Batch ###
 * Batch method calls to be able to set all object's properties at once. * Note that you need to specify each parameter (use “” or <js nobox>null</js> to leave some out) * Inherited methods can be called by appending an underscore to the function name (ie. <js nobox>txt.Batch({ SetBackColor_: [“red”] })</js>
 * $$ dlg.Batch(properties) $$
 * @param {obj} properties { COMMAND:lst
 */


/** ### ClearFocus ###
 * Removes the focus of the control so that the user no longer has immediate access to it.
 * $$ dlg.ClearFocus() $$
 */


/** ### Dismiss ###
 * Hide the control and remove it from the screen.
 * $$ dlg.Dismiss() $$
 */


/** ### EnableBackKey ###
 * En/Disables the device back key to hide the dialog.
 * $$ dlg.EnableBackKey(enable) $$
 * @param {bin} enable 
 */


/** ### Focus ###
 * Set the focus to the control so that the user can interact with it immediately.
 * $$ dlg.Focus() $$
 */


/** ### GetAbsHeight ###
 * Get the absolute height of the control in pixels. * Note that unlike the objects margins its padding does change this value.
 * $$ dlg.GetAbsHeight() $$
 * @returns num_int
 */


/** ### GetAbsWidth ###
 * Get the absolute width of the control in pixels. * Note that unlike the objects margins its padding does change this value.
 * $$ dlg.GetAbsWidth() $$
 * @returns num_int
 */


/** ### GetHeight ###
 * Get the height of the control as screen height relative float or in pixels with the `px` option. * Note that unlike the objects margins its padding does change this value.
 * $$ dlg.GetHeight(options) $$
 * @param {str} options px
 * @returns num
 */


/** ### GetLeft ###
 * Get the distance from the control to the left parent border as width relative float or in pixels with the `px` option.
 * $$ dlg.GetLeft(options) $$
 * @param {str} options px
 * @returns num
 */


/** ### GetParent ###
 * Returns the parent control object where the object was added to - commonly a layout.
 * $$ dlg.GetParent() $$
 * @returns dso
 */


/** ### GetPosition ###
 * Returns data about the position and size of the control. * If the `screen` option is given the position on the screen will be returned. Otherwise relative to the parent control. * The `px` options turns the relative values into pixels.
 * $$ dlg.GetPosition(options) $$
 * @param {str} options screen,px
 * @returns obj-{ left:num, top:num, width:num, height:num }
 */


/** ### GetTitleHeight ###
 * Returns the height of the title bar.
 * $$ dlg.GetTitleHeight() $$
 * @returns num_pxl
 */


/** ### GetTop ###
 * Get the distance from the control to the upper parent border as height relative float or in pixels with the `px` option.
 * $$ dlg.GetTop(options) $$
 * @param {str} options px
 * @returns num
 */


/** ### GetType ###
 * Returns the control class name.
 * $$ dlg.GetType() $$
 * @returns str-Dialog
 */


/** ### GetVisibility ###
 * Returns the current visibility state of the control. The Values are: * `Show`: visible * `Hide`: invisible but still consuming space * `Gone`: invisible and not consuming space
 * $$ dlg.GetVisibility() $$
 * @returns str-Show|Hide|Gone
 */


/** ### GetWidth ###
 * Get the width of the control as screen width relative float or in pixels with the `px` option. * Note that unlike the objects margins its padding does change this value.
 * $$ dlg.GetWidth(options) $$
 * @param {str} options px
 * @returns num
 */


/** ### Gone ###
 * Hides the control without consuming any more layout space as if it were never there.
 * $$ dlg.Gone() $$
 */


/** ### Hide ###
 * Hide the control but keep the layout space free.
 * $$ dlg.Hide() $$
 */


/** ### IsEnabled ###
 * Returns whether the control is currently useable by the user.
 * $$ dlg.IsEnabled() $$
 * @returns bin
 */


/** ### IsOverlap ###
 * Returns whether the control overlaps with another by a given distance.
 * $$ dlg.IsOverlap(obj, depth) $$
 * @param {dso} obj 
 * @param {num_frc} depth 
 * @returns bin
 */


/** ### IsVisible ###
 * Returns whether the control is currently visible to the user, ignoring overlaying controls.
 * $$ dlg.IsVisible() $$
 * @returns bin
 */


/** ### Method ###
 * Allows access to other functions defined on the object in Java via reflection. *  * <premium>
 * $$ dlg.Method(name, types, p1, p2, p3, p4) $$
 * @param {str} name 
 * @param {lst} types boolean,char,byte,short,int,long,float,double,String,CharSequence,...
 * @param {str} p1 
 * @param {str} p2 
 * @param {str} p3 
 * @param {str} p4 
 * @returns all
 */


/** ### RemoveLayout ###
 * Removes a content layout.
 * $$ dlg.RemoveLayout(layout) $$
 * @param {dso} layout CreateLayout
 */


/** ### SetBackAlpha ###
 * Set the transparency of the background by an alpha value between `0` (_no transparency_) and `0.99` (_full transparent_) or `1` (_no transparency_) and `256` (_full transparent_)
 * $$ dlg.SetBackAlpha(alpha) $$
 * @param {num} alpha 0..0.99|1..256
 */


/** ### SetBackColor ###
 * Changes the background color of the control.
 * $$ dlg.SetBackColor(color, radius) $$
 * @param {str_col} color 
 * @param {num_pxl} radius 
 */


/** ### SetBackGradient ###
 * Define the background color of the control with a gradient. The default gradient direction is from top to bottom, but you can change it from left to right and the reversed versions of course.
 * $$ dlg.SetBackGradient(color1, color2, color3, options) $$
 * @param {str_col} color1 
 * @param {str_col} color2 
 * @param {?} color3 
 * @param {str} options left
 */


/** ### SetBackGradientRadial ###
 * Define a radial color gradient for the background of control.
 * $$ dlg.SetBackGradientRadial(x, y, radius, color1, color2, color3, options) $$
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
 * $$ dlg.SetBackground(file, options) $$
 * @param {str_ptf} file 
 * @param {str} options repeat
 */


/** ### SetColorFilter ###
 * Adjust the visual color effect with a color and a given BlendMode. More information about BlendMode can be found in the [Android Developer page](https://developer.android.com/reference/android/graphics/BlendMode.html).
 * $$ dlg.SetColorFilter(color, mode) $$
 * @param {str_col} color 
 * @param {str} mode Add|Multiply|clear|darken|lighten|overlay|screen|xor|color|color_burn|color_dodge|difference|exclusion|hard_light|hue|luminosity|modulate|saturation|soft_light|src|dst|src_in|src_out|src_atop|src_over|dst_in|dst_out|dst_atop|dst_over
 */


/** ### SetDescription ###
 * Set a control description for accessibility
 * $$ dlg.SetDescription(desc) $$
 * @param {str} desc 
 */


/** ### SetEnabled ###
 * En/Disable the control physically and visually so that the user can/can not access the control. Events like OnTouch will still be fired.
 * $$ dlg.SetEnabled(enable) $$
 * @param {bin} enable 
 */


/** ### SetMargins ###
 * Define a distance to other controls on each side of the control.
 * $$ dlg.SetMargins(left, top, right, bottom, mode) $$
 * @param {num_frc} left 
 * @param {num_frc} top 
 * @param {num_frc} right 
 * @param {num_frc} bottom 
 * @param {str} mode px|sp|dip|mm|pt
 */


/** ### SetOnBack ###
 * %cb% the device's back button was pressed while the dialog was on front.
 * $$ dlg.SetOnBack(callback) $$
 * @param {fnc_json} callback {}
 */


/** ### SetOnCancel ###
 * %cb% the dialog is cancelled.
 * $$ dlg.SetOnCancel(callback) $$
 * @param {fnc_json} callback {}
 */


/** ### SetOnTouch ###
 * Define a callback function that is called when the user touches the control. In addition, an `event` object is passed to the callback function to obtain information about the touch `type`, the touch `position(s)`, the `amount` of touches and the `control` that was touched.
 * $$ dlg.SetOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["event"],"pTypes":["obj-{ source:dso, action:str-\"Down|Move|Up\", count:num_int, x:\"Multitouch positions\"&colon; [ x1:num_frc&comma; x2:num_frc&comma; x3:num_frc ], y:\"Multitouch positions\"&colon; [ y1:num_frc&comma; y2:num_frc&comma; y3:num_frc ] }"]}
 */


/** ### SetPadding ###
 * Define distances that elements within the control are to maintain from the control borders.
 * $$ dlg.SetPadding(left, top, right, bottom, mode) $$
 * @param {num_frc} left 
 * @param {num_frc} top 
 * @param {num_frc} right 
 * @param {num_frc} bottom 
 * @param {str} mode px|sp|dip|mm|pt
 */


/** ### SetPosition ###
 * Defines the position and size for the control if the parent is an absolute layout.
 * $$ dlg.SetPosition(left, top, width, height, options) $$
 * @param {num} left 
 * @param {num} top 
 * @param {num} width 
 * @param {num} height 
 * @param {str} options px
 */


/** ### SetScale ###
 * Scales the control along with its contents by the factors passed to the function.
 * $$ dlg.SetScale(x, y) $$
 * @param {num_fac} x 
 * @param {num_fac} y 
 */


/** ### SetSize ###
 * Change the size of the control in either screen relative values or in pixels if the `px` option was given.
 * $$ dlg.SetSize(width, height, options) $$
 * @param {num} width 
 * @param {num} height 
 * @param {str} options px|sp|dip|dp|mm|pt
 */


/** ### SetTitle ###
 * Changes the title of the dialog.
 * $$ dlg.SetTitle(title) $$
 * @param {str} title 
 */


/** ### SetTitleColor ###
 * Changes the color of the title divider.
 * $$ dlg.SetTitleColor(clr) $$
 * @param {str_col} clr 
 */


/** ### SetTitleDividerColor ###
 * Changes the title divider color of the dialog.
 * $$ dlg.SetTitleDividerColor(color) $$
 * @param {str_col} color 
 */


/** ### SetTitleDividerHeight ###
 * Changes the divider height of the dialog.
 * $$ dlg.SetTitleDividerHeight(height) $$
 * @param {num_pxl} height 
 */


/** ### SetTitleHeight ###
 * Changes the height of the title bar.
 * $$ dlg.SetTitleHeight(height, options) $$
 * @param {num_pxl} height 
 * @param {str_com} options px|sp|dip|mm|pt
 */


/** ### SetTitleTextSize ###
 * Changes the text size of the dialog title.
 * $$ dlg.SetTitleTextSize(size, options) $$
 * @param {num} size 
 * @param {str} options px|sp|dip|mm|pt
 */


/** ### SetVisibility ###
 * Change the visibility of the control to one of the available modes: * `Show:` visible * `Hide:` invisible but still consuming space * `Gone:` invisible and not consuming space
 * $$ dlg.SetVisibility(mode) $$
 * @param {str} mode Show|Hide|Gone
 */


/** ### Show ###
 * Set the visibility of the control to “Show”.
 * $$ dlg.Show() $$
 */


/** ### Tween ###
 * Performs an animation on the control. * The `target` object is for the position, size and rotation that the control has at the end of the animation. *  * The `type` specifies the behavior and the speed of the animation. Separated by a dot, you must also specify whether you want to apply this behavior to the beginning (In), end (Out), or to both (InOut) times of the animation. *  * With the amount of `repeat`s you can control how many times you want to play the animation. *  * If you have `jojo` activated, the animation will alternate between forward and backward playback, so that if the repetition value is odd, the control will be at the start position again at the end of the animation. *  * Finally the `callback` function will be called after the animation has finished. Well, it's about time!
 * $$ dlg.Tween(target, duration, type, repeat, yoyo, callback) $$
 * @param {obj} target { x:num_frc, y:num_frc, w:num_frc, h:num_frc, sw:num_frc
 * @param {num_mls} duration 
 * @param {str} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
 * @param {num_int} repeat 
 * @param {bin} yoyo 
 * @param {fnc_json} callback {}
 */

// CreateDialog.txt --> All the sample codes

/** @Sample
<sample Demo>

function OnStart()
{
	dlg = app.CreateDialog( "Custom Dialog" );

	layDlg = app.CreateLayout( "linear", "VCenter,FillXY" );
	layDlg.SetSize( 0.7, 0.3 );
	dlg.AddLayout( layDlg );

	chk = app.CreateCheckBox( "Check Box" );
	chk.SetMargins( 0, 0.02, 0, 0.02 );
	layDlg.AddChild( chk );

	btnDlg = app.CreateButton( "Close Dialog", 0.6, 0.1 );
	btnDlg.SetOnTouch( btnDlg_OnTouch );
	layDlg.AddChild( btnDlg );

	dlg.Show();
}

function btnDlg_OnTouch()
{
	dlg.Dismiss();
}
</sample>

 */

