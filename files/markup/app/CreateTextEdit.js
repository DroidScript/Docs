
/** # CreateTextEdit #
 * @abbrev edt
 * 
 * $$ edt = app.CreateTextEdit(text, width, height, options) $$ 
 * @param {str} text 
 * @param {num_frc} width 
 * @param {num_frc} height 
 * @param {str_com} options AutoSelect:Select all Text if user enter the Textedit,AutoSize:Expand or shrink the control automatically so the text fits in the Textedit,Bold:Write bold text,Extract:enables full screen keyboard in landscape mode,Left:Justify the text to the left|Center:Justify the text in the middle|Right:Justify the text to the right|Monospace,NoSpell:Disable the spell
 * @returns dso-TextEdit
*/


// CreateTextEdit.md --> Complete documentation. Sample codes is at the bottom of this file.

/** @Description
If you want the user to enter custom data you probably need the **TextEdit** control. For number input only you can apply the “numbers” **option**.

You can use the **SetOnChange** method of the TextEdit to set the name of a function you want to be called when a the text is changed.

Use the **SetText** and **GetText** functions to set and get the text in the TextEdit.
<sample Using OnChange>

You can change the look of a TextEdit using the **SetBackColor** and **SetTextColor** functions on the TextEdit object.
<sample Blue on White>

You can also set a background image/pattern or background gradient for the List using the **SetBackground** and **SetBackGradient** functions. See [Layouts](CreateLayout.htm) for examples of how to use these functions.

 */

/** ## Methods ##
 * These are the methods available for CreateTextEdit
 */


/** ### AdjustColor ###
 * Adjust the visual color effect of the control by setting the Hue (by angle in degrees in a color circle), the saturation, brightness and contrast of the control.
 * $$ edt.AdjustColor(hue, saturation, brightness, contrast) $$
 * @param {num} hue 
 * @param {num} saturation 
 * @param {num} brightness 
 * @param {num} contrast 0..100
 */


/** ### Animate ###
 * Animates the control. *  * There are * 	“in”-Animations which are used to show objects from hidden state * 	“out”-animations which are used to hide objects in visible state and * 	“static”-animations which keep the visible state.
 * $$ edt.Animate(type, callback, time) $$
 * @param {str} type NewsPaper|Jelly|Flash|RubberBand|Swing|TaDa|Bounce|Fall|FallRotate|<br><img width='300px' src='../animate.png'></img>
 * @param {fnc_json} callback {"pNames":["type"],"pTypes":["str"]}
 * @param {num_mls} time 
 */


/** ### Batch ###
 * Batch method calls to be able to set all object's properties at once. * Note that you need to specify each parameter (use “” or <js nobox>null</js> to leave some out) * Inherited methods can be called by appending an underscore to the function name (ie. <js nobox>txt.Batch({ SetBackColor_: [“red”] })</js>
 * $$ edt.Batch(properties) $$
 * @param {obj} properties { COMMAND:lst
 */


/** ### ClearFocus ###
 * Removes the focus of the control so that the user no longer has immediate access to it.
 * $$ edt.ClearFocus() $$
 */


/** ### ClearHistory ###
 * Clears the undo/redo history.
 * $$ edt.ClearHistory() $$
 */


/** ### Focus ###
 * Set the focus to the control so that the user can interact with it immediately.
 * $$ edt.Focus() $$
 */


/** ### GetAbsHeight ###
 * Get the absolute height of the control in pixels. * Note that unlike the objects margins its padding does change this value.
 * $$ edt.GetAbsHeight() $$
 * @returns num_int
 */


/** ### GetAbsWidth ###
 * Get the absolute width of the control in pixels. * Note that unlike the objects margins its padding does change this value.
 * $$ edt.GetAbsWidth() $$
 * @returns num_int
 */


/** ### GetCursorLine ###
 * Returns the current line index where the cursor is located.
 * $$ edt.GetCursorLine() $$
 * @returns num_int
 */


/** ### GetCursorPos ###
 * Returns the index of the character where the cursor is currently located.
 * $$ edt.GetCursorPos() $$
 * @returns num_int
 */


/** ### GetHeight ###
 * Get the height of the control as screen height relative float or in pixels with the `px` option. * Note that unlike the objects margins its padding does change this value.
 * $$ edt.GetHeight(options) $$
 * @param {str} options px
 * @returns num
 */


/** ### GetHtml ###
 * Returns the html formatted content.
 * $$ edt.GetHtml() $$
 * @returns str_htm
 */


/** ### GetLeft ###
 * Get the distance from the control to the left parent border as width relative float or in pixels with the `px` option.
 * $$ edt.GetLeft(options) $$
 * @param {str} options px
 * @returns num
 */


/** ### GetLineCount ###
 * Returns the amount of lines in the text even with html formatting
 * $$ edt.GetLineCount() $$
 * @returns num_int
 */


/** ### GetLineStart ###
 * Returns at which character in the text a certain line begins.
 * $$ edt.GetLineStart(line) $$
 * @param {num_int} line 
 * @returns num_int
 */


/** ### GetLineTop ###
 * Returns the top position of a given line on the screen.
 * $$ edt.GetLineTop(line) $$
 * @param {num_int} line 
 * @returns num_frc
 */


/** ### GetMaxLines ###
 * Returns the maximum amount of lines the control can hold with the current control and font height
 * $$ edt.GetMaxLines() $$
 * @returns num_int
 */


/** ### GetParent ###
 * Returns the parent control object where the object was added to - commonly a layout.
 * $$ edt.GetParent() $$
 * @returns dso
 */


/** ### GetPosition ###
 * Returns data about the position and size of the control. * If the `screen` option is given the position on the screen will be returned. Otherwise relative to the parent control. * The `px` options turns the relative values into pixels.
 * $$ edt.GetPosition(options) $$
 * @param {str} options screen,px
 * @returns obj-{ left:num, top:num, width:num, height:num }
 */


/** ### GetSelectedText ###
 * Returns the currently selected text.
 * $$ edt.GetSelectedText() $$
 * @returns str
 */


/** ### GetSelectionEnd ###
 * Returns the position of where the user selection ends.
 * $$ edt.GetSelectionEnd() $$
 * @returns num_int
 */


/** ### GetSelectionStart ###
 * Returns the position of where the user selection begins.
 * $$ edt.GetSelectionStart() $$
 * @returns num_int
 */


/** ### GetText ###
 * Returns the current1605064214 displayed text of the control.
 * $$ edt.GetText() $$
 * @returns str
 */


/** ### GetTextSize ###
 * Returns the current size of the contained text. If the `px` option is given the size will be retured in pixels.
 * $$ edt.GetTextSize(mode) $$
 * @param {str} mode px
 * @returns num
 */


/** ### GetTop ###
 * Get the distance from the control to the upper parent border as height relative float or in pixels with the `px` option.
 * $$ edt.GetTop(options) $$
 * @param {str} options px
 * @returns num
 */


/** ### GetType ###
 * Returns the control class name.
 * $$ edt.GetType() $$
 * @returns str-TextEdit
 */


/** ### GetVisibility ###
 * Returns the current visibility state of the control. The Values are: * `Show`: visible * `Hide`: invisible but still consuming space * `Gone`: invisible and not consuming space
 * $$ edt.GetVisibility() $$
 * @returns str-Show|Hide|Gone
 */


/** ### GetWidth ###
 * Get the width of the control as screen width relative float or in pixels with the `px` option. * Note that unlike the objects margins its padding does change this value.
 * $$ edt.GetWidth(options) $$
 * @param {str} options px
 * @returns num
 */


/** ### Gone ###
 * Hides the control without consuming any more layout space as if it were never there.
 * $$ edt.Gone() $$
 */


/** ### Hide ###
 * Hide the control but keep the layout space free.
 * $$ edt.Hide() $$
 */


/** ### InsertText ###
 * Inserts a string at a given position.
 * $$ edt.InsertText(text, start) $$
 * @param {str} text 
 * @param {num_int} start 
 */


/** ### IsEnabled ###
 * Returns whether the control is currently useable by the user.
 * $$ edt.IsEnabled() $$
 * @returns bin
 */


/** ### IsOverlap ###
 * Returns whether the control overlaps with another by a given distance.
 * $$ edt.IsOverlap(obj, depth) $$
 * @param {dso} obj 
 * @param {num_frc} depth 
 * @returns bin
 */


/** ### IsVisible ###
 * Returns whether the control is currently visible to the user, ignoring overlaying controls.
 * $$ edt.IsVisible() $$
 * @returns bin
 */


/** ### Method ###
 * Allows access to other functions defined on the object in Java via reflection. *  * <premium>
 * $$ edt.Method(name, types, p1, p2, p3, p4) $$
 * @param {str} name 
 * @param {lst} types boolean,char,byte,short,int,long,float,double,String,CharSequence,...
 * @param {str} p1 
 * @param {str} p2 
 * @param {str} p3 
 * @param {str} p4 
 * @returns all
 */


/** ### Redo ###
 * Redo an undone action.
 * $$ edt.Redo() $$
 */


/** ### ReplaceText ###
 * Replaces a given range in the text with some string.
 * $$ edt.ReplaceText(text, start, end) $$
 * @param {str} text 
 * @param {num_int} start 
 * @param {num_int} end 
 */


/** ### SetBackAlpha ###
 * Set the transparency of the background by an alpha value between `0` (_no transparency_) and `0.99` (_full transparent_) or `1` (_no transparency_) and `256` (_full transparent_)
 * $$ edt.SetBackAlpha(alpha) $$
 * @param {num} alpha 0..0.99|1..256
 */


/** ### SetBackColor ###
 * Changes the background color of the control.
 * $$ edt.SetBackColor(color) $$
 * @param {str_col} color 
 */


/** ### SetBackGradient ###
 * Define the background color of the control with a gradient. The default gradient direction is from top to bottom, but you can change it from left to right and the reversed versions of course.
 * $$ edt.SetBackGradient(color1, color2, color3, options) $$
 * @param {str_col} color1 
 * @param {str_col} color2 
 * @param {?} color3 
 * @param {str} options left
 */


/** ### SetBackGradientRadial ###
 * Define a radial color gradient for the background of control.
 * $$ edt.SetBackGradientRadial(x, y, radius, color1, color2, color3, options) $$
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
 * $$ edt.SetBackground(file, options) $$
 * @param {str_ptf} file 
 * @param {str} options repeat
 */


/** ### SetColorFilter ###
 * Adjust the visual color effect with a color and a given BlendMode. More information about BlendMode can be found in the [Android Developer page](https://developer.android.com/reference/android/graphics/BlendMode.html).
 * $$ edt.SetColorFilter(color, mode) $$
 * @param {str_col} color 
 * @param {str} mode Add|Multiply|clear|darken|lighten|overlay|screen|xor|color|color_burn|color_dodge|difference|exclusion|hard_light|hue|luminosity|modulate|saturation|soft_light|src|dst|src_in|src_out|src_atop|src_over|dst_in|dst_out|dst_atop|dst_over
 */


/** ### SetCursorColor ###
 * Changes the cursor color.
 * $$ edt.SetCursorColor(color) $$
 * @param {str_col} color 
 */


/** ### SetCursorPos ###
 * Change the current cursor position.
 * $$ edt.SetCursorPos(position) $$
 * @param {num_int} position 
 */


/** ### SetDescription ###
 * Set a control description for accessibility
 * $$ edt.SetDescription(desc) $$
 * @param {str} desc 
 */


/** ### SetEnabled ###
 * En/Disable the control physically and visually so that the user can/can not access the control. Events like OnTouch will still be fired.
 * $$ edt.SetEnabled(enable) $$
 * @param {bin} enable 
 */


/** ### SetHint ###
 * Set a grey default which is shown when the edit is empty
 * $$ edt.SetHint(text) $$
 * @param {str} text 
 */


/** ### SetHtml ###
 * Change the current text of the control to html-formatted text.
 * $$ edt.SetHtml(str) $$
 * @param {str_htm} str 
 */


/** ### SetMargins ###
 * Define a distance to other controls on each side of the control.
 * $$ edt.SetMargins(left, top, right, bottom, mode) $$
 * @param {num_frc} left 
 * @param {num_frc} top 
 * @param {num_frc} right 
 * @param {num_frc} bottom 
 * @param {str} mode px|sp|dip|mm|pt
 */


/** ### SetOnChange ###
 * Called when the containing data has been changed by the user.
 * $$ edt.SetOnChange(callback) $$
 * @param {fnc_json} callback {}
 */


/** ### SetOnEnter ###
 * %cb% the user pressed 'Done' or 'Enter' on the keyboard (line can still be inserted via Shift+Enter) * Along with the “SingleLine” option it changes the keyboards _'Enter'_ key to _'Done'_ or _'Ok'_
 * $$ edt.SetOnEnter(callback) $$
 * @param {fnc_json} callback {}
 */


/** ### SetOnFocus ###
 * Define a callback function called when the user focuses the control.
 * $$ edt.SetOnFocus(callback) $$
 * @param {fnc_json} callback {}
 */


/** ### SetSelection ###
 * Selects part of the text in a given range.
 * $$ edt.SetSelection(start, stop) $$
 * @param {num_int} start 
 * @param {num_int} stop 
 */


/** ### SetSize ###
 * Change the size of the control in either screen relative values or in pixels if the `px` option was given.
 * $$ edt.SetSize(width, height, options) $$
 * @param {num} width 
 * @param {num} height 
 * @param {str} options px|sp|dip|dp|mm|pt
 */


/** ### SetText ###
 * Change the currently displayed text in the control.
 * $$ edt.SetText(text) $$
 * @param {str} text 
 */


/** ### SetTextColor ###
 * Change the text color of the contained text.
 * $$ edt.SetTextColor(color) $$
 * @param {str_col} color 
 */


/** ### SetTextSize ###
 * Change the size of the contained text.
 * $$ edt.SetTextSize(size, mode) $$
 * @param {num} size 
 * @param {str} mode px|dip|sp|mm|pt|pl:scales text in proportion with device resolution|ps:scales text in proportion with device resolution
 */


/** ### SetVisibility ###
 * Change the visibility of the control to one of the available modes: * `Show:` visible * `Hide:` invisible but still consuming space * `Gone:` invisible and not consuming space
 * $$ edt.SetVisibility(mode) $$
 * @param {str} mode Show|Hide|Gone
 */


/** ### Show ###
 * Set the visibility of the control to “Show”.
 * $$ edt.Show() $$
 */


/** ### Tween ###
 * Performs an animation on the control. * The `target` object is for the position, size and rotation that the control has at the end of the animation. *  * The `type` specifies the behavior and the speed of the animation. Separated by a dot, you must also specify whether you want to apply this behavior to the beginning (In), end (Out), or to both (InOut) times of the animation. *  * With the amount of `repeat`s you can control how many times you want to play the animation. *  * If you have `jojo` activated, the animation will alternate between forward and backward playback, so that if the repetition value is odd, the control will be at the start position again at the end of the animation. *  * Finally the `callback` function will be called after the animation has finished. Well, it's about time!
 * $$ edt.Tween(target, duration, type, repeat, yoyo, callback) $$
 * @param {obj} target { x:num_frc, y:num_frc, w:num_frc, h:num_frc, sw:num_frc
 * @param {num_mls} duration 
 * @param {str} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
 * @param {num_int} repeat 
 * @param {bin} yoyo 
 * @param {fnc_json} callback {}
 */


/** ### Undo ###
 * Undo an action.
 * $$ edt.Undo() $$
 */

// CreateTextEdit.txt --> All the sample codes

/** @Sample
<sample Using OnChange>
function OnStart()
{
	lay = app.CreateLayout( "Linear", "VCenter,FillXY" );

	<b>edt = app.CreateTextEdit( "Edit me", 0.8, 0.3 );
	edt.SetOnChange( edt_OnChange );
	lay.AddChild( edt );</b>

	txt = app.CreateText( "", 0.8, 0.3 );
	txt.SetMargins( 0, 0.02, 0, 0 );
	lay.AddChild( txt );

	app.AddLayout( lay );
}

function edt_OnChange()
{
	txt.SetText( edt.GetText() );
}
</sample>

<sample Blue on White>
function OnStart()
{
	lay = app.CreateLayout( "Linear", "VCenter,FillXY" );

	<b>edt = app.CreateTextEdit( "Hello", 0.8, 0.4  );
	edt.SetTextColor( "#ff6666ff" );
	edt.SetBackColor( "#ffffffff" );
	lay.AddChild( edt );</b>

	app.AddLayout( lay );
}
</sample>

<sample Password>
function OnStart()
{
	lay = app.CreateLayout( "Linear", "VCenter,FillXY" );

	<b>edt = app.CreateTextEdit( "", 0.8, 0.4, "Password,Singleline"  );
    edt.SetHint( "Password" );
    edt.SetOnEnter( edt_OnEnter );
	lay.AddChild( edt );</b>

	app.AddLayout( lay );
}

function edt_OnEnter()
{
    var password = edt.GetText();
    app.ShowPopup( password );
}
</sample>

 */

