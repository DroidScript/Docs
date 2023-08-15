
/** # CreateCodeEdit #
 * @abbrev cde
 * CreateCodeEdit is a control for premium users which is like a TextEdit but it has advanced methods.
 * 
 * <premium>
 * $$ cde = app.CreateCodeEdit(text, width, height, options) $$ 
 * @param {str} text 
 * @param {num_frc} width 
 * @param {num_frc} height 
 * @param {str_com} options FillX/Y
 * @returns dso-CodeEdit
*/


/** ## Methods ##
 * These are the methods available for CreateCodeEdit
 */


/** ### AdjustColor ###
 * Adjust the visual color effect of the control by setting the Hue (by angle in degrees in a color circle), the saturation, brightness and contrast of the control.
 * $$ cde.AdjustColor(hue, saturation, brightness, contrast) $$
 * @param {num} hue 
 * @param {num} saturation 
 * @param {num} brightness 
 * @param {num} contrast 0..100
 */


/** ### Animate ###
 * Animates the control. *  * There are * 	“in”-Animations which are used to show objects from hidden state * 	“out”-animations which are used to hide objects in visible state and * 	“static”-animations which keep the visible state.
 * $$ cde.Animate(type, callback, time) $$
 * @param {str} type NewsPaper|Jelly|Flash|RubberBand|Swing|TaDa|Bounce|Fall|FallRotate|<br><img width='300px' src='../animate.png'></img>
 * @param {fnc_json} callback {"pNames":["type"],"pTypes":["str"]}
 * @param {num_mls} time 
 */


/** ### Batch ###
 * Batch method calls to be able to set all object's properties at once. * Note that you need to specify each parameter (use “” or <js nobox>null</js> to leave some out) * Inherited methods can be called by appending an underscore to the function name (ie. <js nobox>txt.Batch({ SetBackColor_: [“red”] })</js>
 * $$ cde.Batch(properties) $$
 * @param {obj} properties { COMMAND:lst
 */


/** ### ClearFocus ###
 * Removes the focus of the control so that the user no longer has immediate access to it.
 * $$ cde.ClearFocus() $$
 */


/** ### ClearHistory ###
 * Clears the undo/redo history.
 * $$ cde.ClearHistory() $$
 */


/** ### Copy ###
 * Copies the selected text to the device clipboard.
 * $$ cde.Copy() $$
 */


/** ### Cut ###
 * Cut selected text and copies it to the device clipboard.
 * $$ cde.Cut() $$
 */


/** ### Focus ###
 * Set the focus to the control so that the user can interact with it immediately.
 * $$ cde.Focus() $$
 */


/** ### GetAbsHeight ###
 * Get the absolute height of the control in pixels. * Note that unlike the objects margins its padding does change this value.
 * $$ cde.GetAbsHeight() $$
 * @returns num_int
 */


/** ### GetAbsWidth ###
 * Get the absolute width of the control in pixels. * Note that unlike the objects margins its padding does change this value.
 * $$ cde.GetAbsWidth() $$
 * @returns num_int
 */


/** ### GetCursorLine ###
 * Returns the current line index where the cursor is located.
 * $$ cde.GetCursorLine() $$
 * @returns num_int
 */


/** ### GetCursorPos ###
 * Returns the index of the character where the cursor is currently located.
 * $$ cde.GetCursorPos() $$
 * @returns num_int
 */


/** ### GetHeight ###
 * Get the height of the control as screen height relative float or in pixels with the `px` option. * Note that unlike the objects margins its padding does change this value.
 * $$ cde.GetHeight(options) $$
 * @param {str} options px
 * @returns num
 */


/** ### GetLeft ###
 * Get the distance from the control to the left parent border as width relative float or in pixels with the `px` option.
 * $$ cde.GetLeft(options) $$
 * @param {str} options px
 * @returns num
 */


/** ### GetLineStart ###
 * Returns at which character in the text a certain line begins.
 * $$ cde.GetLineStart(line) $$
 * @param {num_int} line 
 * @returns num_int
 */


/** ### GetParent ###
 * Returns the parent control object where the object was added to - commonly a layout.
 * $$ cde.GetParent() $$
 * @returns dso
 */


/** ### GetPosition ###
 * Returns data about the position and size of the control. * If the `screen` option is given the position on the screen will be returned. Otherwise relative to the parent control. * The `px` options turns the relative values into pixels.
 * $$ cde.GetPosition(options) $$
 * @param {str} options screen,px
 * @returns obj-{ left:num, top:num, width:num, height:num }
 */


/** ### GetSelectedText ###
 * Returns the currently selected text.
 * $$ cde.GetSelectedText() $$
 * @returns str
 */


/** ### GetSelectionEnd ###
 * Returns the position of where the user selection ends.
 * $$ cde.GetSelectionEnd() $$
 * @returns num_int
 */


/** ### GetSelectionStart ###
 * Returns the position of where the user selection begins.
 * $$ cde.GetSelectionStart() $$
 * @returns num_int
 */


/** ### GetSelectMode ###
 * Checks if there is currently some text selected.
 * $$ cde.GetSelectMode() $$
 * @returns bin
 */


/** ### GetText ###
 * Returns the current1605064214 displayed text of the control.
 * $$ cde.GetText() $$
 * @returns str
 */


/** ### GetTop ###
 * Get the distance from the control to the upper parent border as height relative float or in pixels with the `px` option.
 * $$ cde.GetTop(options) $$
 * @param {str} options px
 * @returns num
 */


/** ### GetType ###
 * Returns the control class name.
 * $$ cde.GetType() $$
 * @returns str-CodeEdit
 */


/** ### GetVisibility ###
 * Returns the current visibility state of the control. The Values are: * `Show`: visible * `Hide`: invisible but still consuming space * `Gone`: invisible and not consuming space
 * $$ cde.GetVisibility() $$
 * @returns str-Show|Hide|Gone
 */


/** ### GetWidth ###
 * Get the width of the control as screen width relative float or in pixels with the `px` option. * Note that unlike the objects margins its padding does change this value.
 * $$ cde.GetWidth(options) $$
 * @param {str} options px
 * @returns num
 */


/** ### Gone ###
 * Hides the control without consuming any more layout space as if it were never there.
 * $$ cde.Gone() $$
 */


/** ### Hide ###
 * Hide the control but keep the layout space free.
 * $$ cde.Hide() $$
 */


/** ### HighlightLine ###
 * Highlights a specific line in the text with a thin red underline.
 * $$ cde.HighlightLine(line) $$
 * @param {num_int} line 
 */


/** ### InsertText ###
 * Inserts a string at the current cursor position.
 * $$ cde.InsertText(text) $$
 * @param {str} text 
 */


/** ### IsEnabled ###
 * Returns whether the control is currently useable by the user.
 * $$ cde.IsEnabled() $$
 * @returns bin
 */


/** ### IsOverlap ###
 * Returns whether the control overlaps with another by a given distance.
 * $$ cde.IsOverlap(obj, depth) $$
 * @param {dso} obj 
 * @param {num_frc} depth 
 * @returns bin
 */


/** ### IsVisible ###
 * Returns whether the control is currently visible to the user, ignoring overlaying controls.
 * $$ cde.IsVisible() $$
 * @returns bin
 */


/** ### Method ###
 * Allows access to other functions defined on the object in Java via reflection. *  * <premium>
 * $$ cde.Method(name, types, p1, p2, p3, p4) $$
 * @param {str} name 
 * @param {lst} types boolean,char,byte,short,int,long,float,double,String,CharSequence,...
 * @param {str} p1 
 * @param {str} p2 
 * @param {str} p3 
 * @param {str} p4 
 * @returns all
 */


/** ### Paste ###
 * Paste text from the clipboard at the current cursor position.
 * $$ cde.Paste() $$
 */


/** ### Redo ###
 * Redo an undone action.
 * $$ cde.Redo() $$
 */


/** ### Replace ###
 * Replaces the current selection with the passed text.
 * $$ cde.Replace(text) $$
 * @param {str} text 
 */


/** ### ReplaceAll ###
 * Replace all occurances of a string in the text.
 * $$ cde.ReplaceAll(text, newText, matchCase, wholeWord) $$
 * @param {str} text 
 * @param {str} newText 
 * @param {bin} matchCase 
 * @param {bin} wholeWord 
 */


/** ### ReplaceText ###
 * Replaces a given range in the text with some string.
 * $$ cde.ReplaceText(text, start, end) $$
 * @param {str} text 
 * @param {num_int} start 
 * @param {num_int} end 
 */


/** ### Search ###
 * Search for a string in the text in a given direction and selects it.
 * $$ cde.Search(text, direction, matchCase, wholeWord) $$
 * @param {str} text 
 * @param {str} direction Up|Down
 * @param {bin} matchCase 
 * @param {bin} wholeWord 
 */


/** ### SelectAll ###
 * Selects the whole text.
 * $$ cde.SelectAll() $$
 */


/** ### SetBackAlpha ###
 * Set the transparency of the background by an alpha value between `0` (_no transparency_) and `0.99` (_full transparent_) or `1` (_no transparency_) and `256` (_full transparent_)
 * $$ cde.SetBackAlpha(alpha) $$
 * @param {num} alpha 0..0.99|1..256
 */


/** ### SetBackColor ###
 * Changes the background color of the control.
 * $$ cde.SetBackColor(color) $$
 * @param {str_col} color 
 */


/** ### SetBackGradient ###
 * Define the background color of the control with a gradient. The default gradient direction is from top to bottom, but you can change it from left to right and the reversed versions of course.
 * $$ cde.SetBackGradient(color1, color2, color3, options) $$
 * @param {str_col} color1 
 * @param {str_col} color2 
 * @param {?} color3 
 * @param {str} options left
 */


/** ### SetBackGradientRadial ###
 * Define a radial color gradient for the background of control.
 * $$ cde.SetBackGradientRadial(x, y, radius, color1, color2, color3, options) $$
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
 * $$ cde.SetBackground(file, options) $$
 * @param {str_ptf} file 
 * @param {str} options repeat
 */


/** ### SetColorFilter ###
 * Adjust the visual color effect with a color and a given BlendMode. More information about BlendMode can be found in the [Android Developer page](https://developer.android.com/reference/android/graphics/BlendMode.html).
 * $$ cde.SetColorFilter(color, mode) $$
 * @param {str_col} color 
 * @param {str} mode Add|Multiply|clear|darken|lighten|overlay|screen|xor|color|color_burn|color_dodge|difference|exclusion|hard_light|hue|luminosity|modulate|saturation|soft_light|src|dst|src_in|src_out|src_atop|src_over|dst_in|dst_out|dst_atop|dst_over
 */


/** ### SetColorScheme ###
 * Changes the color scheme of the CodeEdit.
 * $$ cde.SetColorScheme(scheme) $$
 * @param {str} scheme Dark|Light
 */


/** ### SetCursorPos ###
 * Change the current cursor position.
 * $$ cde.SetCursorPos(position) $$
 * @param {num_int} position 
 */


/** ### SetDescription ###
 * Set a control description for accessibility
 * $$ cde.SetDescription(desc) $$
 * @param {str} desc 
 */


/** ### SetEnabled ###
 * En/Disable the control physically and visually so that the user can/can not access the control. Events like OnTouch will still be fired.
 * $$ cde.SetEnabled(enable) $$
 * @param {bin} enable 
 */


/** ### SetHtml ###
 * Change the current text of the control to html-formatted text.
 * $$ cde.SetHtml(str) $$
 * @param {str_htm} str 
 */


/** ### SetLanguage ###
 * Change the highlighted language syntax.
 * $$ cde.SetLanguage(ext) $$
 * @param {str} ext .js,.java,.php,.c,.cpp,.cs,.rb,.m,.py,.txt
 */


/** ### SetMargins ###
 * Define a distance to other controls on each side of the control.
 * $$ cde.SetMargins(left, top, right, bottom, mode) $$
 * @param {num_frc} left 
 * @param {num_frc} top 
 * @param {num_frc} right 
 * @param {num_frc} bottom 
 * @param {str} mode px|sp|dip|mm|pt
 */


/** ### SetNavigationMethod ###
 * Select between navigating using the Yoyo or standard touch.
 * $$ cde.SetNavigationMethod(method) $$
 * @param {str} method Yoyo|Touch
 */


/** ### SetOnChange ###
 * Called when the containing data has been changed by the user.
 * $$ cde.SetOnChange(callback) $$
 * @param {fnc_json} callback {}
 */


/** ### SetOnDoubleTap ###
 * Defines a callback function which is called when the user double-taps the Yoyo.
 * $$ cde.SetOnDoubleTap(callback) $$
 * @param {fnc_json} callback {}
 */


/** ### SetOnKey ###
 * %cb% a key event appears.
 * $$ cde.SetOnKey(callback) $$
 * @param {fnc_json} callback {"pNames":["action","keyname","keycode","extra"],"pTypes":["str-Down|Move|Up","str-VOLUME_DOWN|VOLUME_UP|BACK|MENU","num_int","str-Shift,Ctrl,Alt,Meta"]}
 */


/** ### SetPadding ###
 * Define distances that elements within the control are to maintain from the control borders.
 * $$ cde.SetPadding(left, top, right, bottom, mode) $$
 * @param {num_frc} left 
 * @param {num_frc} top 
 * @param {num_frc} right 
 * @param {num_frc} bottom 
 * @param {str} mode px|sp|dip|mm|pt
 */


/** ### SetPosition ###
 * Defines the position and size for the control if the parent is an absolute layout.
 * $$ cde.SetPosition(left, top, width, height, options) $$
 * @param {num} left 
 * @param {num} top 
 * @param {num} width 
 * @param {num} height 
 * @param {str} options px
 */


/** ### SetScale ###
 * Scales the control along with its contents by the factors passed to the function.
 * $$ cde.SetScale(x, y) $$
 * @param {num_fac} x 
 * @param {num_fac} y 
 */


/** ### SetSelection ###
 * Selects part of the text in a given range.
 * $$ cde.SetSelection(start, stop) $$
 * @param {num_int} start 
 * @param {num_int} stop 
 */


/** ### SetSelectMode ###
 * En/Disables the selection mode for the cursor.
 * $$ cde.SetSelectMode(onOff) $$
 * @param {bin} onOff 
 */


/** ### SetSize ###
 * Change the size of the control in either screen relative values or in pixels if the `px` option was given.
 * $$ cde.SetSize(width, height, options) $$
 * @param {num} width 
 * @param {num} height 
 * @param {str} options px|sp|dip|dp|mm|pt
 */


/** ### SetText ###
 * Change the currently displayed text in the control.
 * $$ cde.SetText(text) $$
 * @param {str} text 
 */


/** ### SetTextColor ###
 * Change the text color of the contained text.
 * $$ cde.SetTextColor(color) $$
 * @param {str_col} color 
 */


/** ### SetTextSize ###
 * Change the size of the contained text.
 * $$ cde.SetTextSize(size, mode) $$
 * @param {num} size 
 * @param {str} mode px|dip|sp|mm|pt|pl:scales text in proportion with device resolution|ps:scales text in proportion with device resolution
 */


/** ### SetUseKeyboard ###
 * En/Disable usage of the device keyboard.
 * $$ cde.SetUseKeyboard(onOff) $$
 * @param {bin} onOff 
 */


/** ### SetVisibility ###
 * Change the visibility of the control to one of the available modes: * `Show:` visible * `Hide:` invisible but still consuming space * `Gone:` invisible and not consuming space
 * $$ cde.SetVisibility(mode) $$
 * @param {str} mode Show|Hide|Gone
 */


/** ### Show ###
 * Set the visibility of the control to “Show”.
 * $$ cde.Show() $$
 */


/** ### Tween ###
 * Performs an animation on the control. * The `target` object is for the position, size and rotation that the control has at the end of the animation. *  * The `type` specifies the behavior and the speed of the animation. Separated by a dot, you must also specify whether you want to apply this behavior to the beginning (In), end (Out), or to both (InOut) times of the animation. *  * With the amount of `repeat`s you can control how many times you want to play the animation. *  * If you have `jojo` activated, the animation will alternate between forward and backward playback, so that if the repetition value is odd, the control will be at the start position again at the end of the animation. *  * Finally the `callback` function will be called after the animation has finished. Well, it's about time!
 * $$ cde.Tween(target, duration, type, repeat, yoyo, callback) $$
 * @param {obj} target { x:num_frc, y:num_frc, w:num_frc, h:num_frc, sw:num_frc
 * @param {num_mls} duration 
 * @param {str} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
 * @param {num_int} repeat 
 * @param {bin} yoyo 
 * @param {fnc_json} callback {}
 */


/** ### Undo ###
 * Undo an action.
 * $$ cde.Undo() $$
 */

// CreateCodeEdit.txt --> All the sample codes

/** @Sample
<sample dark scheme>
function OnStart()
{
	lay = app.CreateLayout( "linear", "VCenter,FillXY" );

	<b>cde = app.CreateCodeEdit( "", 1, 1 );
	cde.SetText(app.ReadFile("/assets/templates/js/Simple.js"))
	cde.SetLanguage(".js");
	cde.SetColorScheme( "dark" );
	lay.AddChild( cde );</b>

	app.AddLayout( lay );
}
</sample>

 */

