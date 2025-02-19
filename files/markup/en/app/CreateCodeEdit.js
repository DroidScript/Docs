// ------------- HEADER SECTION -------------


/** # CreateCodeEdit #
 * @abbrev cde
 * @brief Returns a new CodeEdit object
 * CreateCodeEdit is a control for premium users which is like a TextEdit but it has advanced methods.
 *
 * <premium>
 * $$ cde = app.CreateCodeEdit(text, width=-1, height=-1, options?) $$
 * @param {str} text
 * @param {num_frc} [width=-1]
 * @param {num_frc} [height=-1]
 * @param {str_com} [options] FillX/Y
 * @returns dso-CodeEdit
*/




// ------------- VISIBLE METHODS & PROPERTIES -------------


/** @extern AdjustColor */

/** @extern Animate */

/** @extern Batch */

/** @extern data */

/** @extern ClearFocus */

/** ### ClearHistory ###
 * Clears the undo/redo history.
 * $$ cde.ClearHistory() $$
 */


/** ### Copy ###
 * @brief Copy selected text to the clipboard
 * Copies the selected text to the device clipboard.
 * $$ cde.Copy() $$
 */


/** ### Cut ###
 * @brief Cut selected text to the clipboard
 * Cut selected text and copies it to the device clipboard.
 * $$ cde.Cut() $$
 */


/** @extern Focus */

/** @extern GetAbsHeight */

/** @extern GetAbsWidth */

/** ### GetCursorLine ###
 * @brief Get the current cursor line index
 * Returns the current line index where the cursor is located.
 * $$ cde.GetCursorLine() $$
 * @returns num_int
 */


/** ### GetCursorPos ###
 * @brief Get the cursor position in the text
 * Returns the index of the character where the cursor is currently located.
 * $$ cde.GetCursorPos() $$
 * @returns num_int
 */


/** @extern GetHeight */

/** @extern GetLeft */

/** ### GetLineStart ###
 * @brief Get the start character index of a line
 * Returns at which character in the text a certain line begins.
 * $$ cde.GetLineStart(line) $$
 * @param {num_int} line
 * @returns num_int
 */


/** @extern GetParent */

/** @extern GetPosition */

/** ### GetSelectedText ###
 * @brief Get the selected text
 * Returns the currently selected text.
 * $$ cde.GetSelectedText() $$
 * @returns str
 */


/** ### GetSelectionEnd ###
 * @brief Get selection end position
 * Returns the position of where the user selection ends.
 * $$ cde.GetSelectionEnd() $$
 * @returns num_int
 */


/** ### GetSelectionStart ###
 * @brief Get selection start position
 * Returns the position of where the user selection begins.
 * $$ cde.GetSelectionStart() $$
 * @returns num_int
 */


/** ### GetSelectMode ###
 * @brief Get current selection state
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
 * @brief Underlines a certain line in the text
 * Highlights a specific line in the text with a thin red underline.
 * $$ cde.HighlightLine(line) $$
 * @param {num_int} line
 */


/** ### InsertText ###
 * @brief Insert text at the cursor
 * Inserts a string at the current cursor position.
 * $$ cde.InsertText(text) $$
 * @param {str} text
 */


/** @extern IsEnabled */

/** @extern IsOverlap */

/** @extern IsVisible */

/** @extern Method */

/** ### Paste ###
 * @brief Paste clipboard to the current cursor position
 * Paste text from the clipboard at the current cursor position.
 * $$ cde.Paste() $$
 */


/** ### Redo ###
 * Redo an undone action.
 * $$ cde.Redo() $$
 */


/** ### Replace ###
 * @brief Replace the selected text
 * Replaces the current selection with the passed text.
 * $$ cde.Replace(text) $$
 * @param {str} text
 */


/** ### ReplaceAll ###
 * Replace all occurances of a string in the text.
 * $$ cde.ReplaceAll(text, newText, matchCase=false, wholeWord=false) $$
 * @param {str} text
 * @param {str} newText
 * @param {bin} [matchCase=false]
 * @param {bin} [wholeWord=false]
 */


/** ### ReplaceText ###
 * @brief Replace a range of the text with a string
 * Replaces a given range in the text with some string.
 * $$ cde.ReplaceText(text, start, end) $$
 * @param {str} text
 * @param {num_int} start
 * @param {num_int} end
 */


/** ### Search ###
 * @brief Search and select a string in the text
 * Search for a string in the text in a given direction and selects it.
 * $$ cde.Search(text, direction='Down', matchCase=false, wholeWord=false) $$
 * @param {str} text
 * @param {str} [direction='Down'] Up|Down
 * @param {bin} [matchCase=false]
 * @param {bin} [wholeWord=false]
 */


/** ### SelectAll ###
 * @brief Select the whole text
 * Selects the whole text.
 * $$ cde.SelectAll() $$
 */


/** @extern SetBackAlpha */

/** @extern Resize */

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
 * @brief Select between Yoyo or Touch mode
 * Select between navigating using the Yoyo or standard touch.
 * $$ cde.SetNavigationMethod(method) $$
 * @param {str} method Yoyo|Touch
 */


/** @extern SetOnChange */

/** ### SetOnDoubleTap ###
 * @brief Define a Yoyo double-tap callback function
 * Defines a callback function which is called when the user double-taps the Yoyo.
 * $$ cde.SetOnDoubleTap(callback) $$
 * @param {fnc_json} callback {}
 */


/** ### SetOnKey ###
 * @brief Define a key-event callback function
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
 * @brief En/Disable cursor selection mode
 * En/Disables the selection mode for the cursor.
 * $$ cde.SetSelectMode(onOff) $$
 * @param {bin} onOff
 */


/** @extern SetSize */

/** @extern SetText */

/** @extern SetTextColor */

/** @extern SetTextSize */

/** ### SetUseKeyboard ###
 * @brief En/Disable device keyboard
 * En/Disable usage of the device keyboard.
 * $$ cde.SetUseKeyboard(onOff) $$
 * @param {bin} onOff
 */


/** @extern SetVisibility */

/** @extern SetWeight */

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



/**
@sample Python dark scheme
from hybrid import ui
from native import app

def OnStart():
    lay = app.CreateLayout( "Linear", "VCenter,FillXY" )

    cde = ui.CodeEdit("", 1, 1)
    cde.SetText(app.ReadFile("/assets/templates/js/Simple.js"))
    cde.SetLanguage(".js")
    cde.SetColorScheme("dark")
    lay.AddChild(cde)

    app.AddLayout(lay)
 */

