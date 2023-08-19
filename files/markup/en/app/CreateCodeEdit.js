// ------------- HEADER SECTION ------------- 


/** # CreateCodeEdit #
 * @abbrev cde
 * @brief Returns a new CodeEdit object
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




// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** @extern AdjustColor */

/** @extern Animate */

/** @extern Batch */

/** @extern ClearFocus */

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


/** @extern Focus */

/** @extern GetAbsHeight */

/** @extern GetAbsWidth */

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


/** @extern GetHeight */

/** @extern GetLeft */

/** ### GetLineStart ###
 * Returns at which character in the text a certain line begins.
 * $$ cde.GetLineStart(line) $$
 * @param {num_int} line 
 * @returns num_int
 */


/** @extern GetParent */

/** @extern GetPosition */

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


/** @extern GetText */

/** @extern GetTop */

/** ### GetType ###
 * Returns the control class name.
 * $$ cde.GetType() $$
 * @returns str-CodeEdit
 */


/** @extern GetVisibility */

/** @extern GetWidth */

/** @extern Gone */

/** @extern Hide */

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


/** @extern IsEnabled */

/** @extern IsOverlap */

/** @extern IsVisible */

/** @extern Method */

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


/** @extern SetBackAlpha */

/** @extern SetBackColor */

/** @extern SetBackGradient */

/** @extern SetBackGradientRadial */

/** @extern SetBackground */

/** @extern SetColorFilter */

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


/** @extern SetDescription */

/** @extern SetEnabled */

/** @extern SetHtml */

/** ### SetLanguage ###
 * Change the highlighted language syntax.
 * $$ cde.SetLanguage(ext) $$
 * @param {str} ext .js,.java,.php,.c,.cpp,.cs,.rb,.m,.py,.txt
 */


/** @extern SetMargins */

/** ### SetNavigationMethod ###
 * Select between navigating using the Yoyo or standard touch.
 * $$ cde.SetNavigationMethod(method) $$
 * @param {str} method Yoyo|Touch
 */


/** @extern SetOnChange */

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


/** @extern SetPadding */

/** @extern SetPosition */

/** @extern SetScale */

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


/** @extern SetSize */

/** @extern SetText */

/** @extern SetTextColor */

/** @extern SetTextSize */

/** ### SetUseKeyboard ###
 * En/Disable usage of the device keyboard.
 * $$ cde.SetUseKeyboard(onOff) $$
 * @param {bin} onOff 
 */


/** @extern SetVisibility */

/** @extern Show */

/** @extern Tween */

/** ### Undo ###
 * Undo an action.
 * $$ cde.Undo() $$
 */



// ------------- SAMPLES ------------- 


    
/**
@sample dark scheme
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
 */
    
            