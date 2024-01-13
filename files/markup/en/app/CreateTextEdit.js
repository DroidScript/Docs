// ------------- HEADER SECTION -------------


/** # CreateTextEdit #
 * @abbrev edt
 * @brief Returns a new TextEdit object
 * 
 * $$ edt = app.CreateTextEdit(text, width=-1, height=-1, options?) $$ 
 * @param {str} text 
 * @param {num_frc} [width=-1] 
 * @param {num_frc} [height=-1] 
 * @param {str_com} [options] AutoSelect:Select all Text if user enter the Textedit,AutoSize:Expand or shrink the control automatically so the text fits in the Textedit,Bold:Write bold text,Extract:enables full screen keyboard in landscape mode,Left:Justify the text to the left|Center:Justify the text in the middle|Right:Justify the text to the right|Monospace,NoSpell:Disable the spell-checker,NoKeyboard:Shows no Keyboard|Numbers,ReadOnly:The user cant change the Text,SingleLine:Dont break text for long lines and change 'Enter' key to 'Done',FillX/Y,Password:displays characters as dots
 * @returns dso-TextEdit
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
If you want the user to enter custom data you probably need the **TextEdit** control. For number input only you can apply the “numbers” **option**.

You can use the **SetOnChange** method of the TextEdit to set the name of a function you want to be called when a the text is changed.

Use the **SetText** and **GetText** functions to set and get the text in the TextEdit.
<sample Using OnChange>

You can change the look of a TextEdit using the **SetBackColor** and **SetTextColor** functions on the TextEdit object.
<sample Blue on White>

You can also set a background image/pattern or background gradient for the List using the **SetBackground** and **SetBackGradient** functions. See [Layouts](CreateLayout.htm) for examples of how to use these functions.
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** @extern AdjustColor */

/** @extern Animate */

/** @extern Batch */

/** @extern ClearFocus */

/** ### ClearHistory ###
 * @brief Clear undo/redo history
 * Clears the undo/redo history.
 * $$ edt.ClearHistory() $$
 */


/** @extern Focus */

/** @extern GetAbsHeight */

/** @extern GetAbsWidth */

/** ### GetCursorLine ###
 * @brief Get the current cursor line index
 * Returns the current line index where the cursor is located.
 * $$ edt.GetCursorLine() $$
 * @returns num_int
 */


/** ### GetCursorPos ###
 * @brief Get the cursor position in the text
 * Returns the index of the character where the cursor is currently located.
 * $$ edt.GetCursorPos() $$
 * @returns num_int
 */


/** @extern GetHeight */

/** ### GetHtml ###
 * @brief Return html formatted text
 * Returns the html formatted content.
 * $$ edt.GetHtml() $$
 * @returns str_htm
 */


/** @extern GetLeft */

/** ### GetLineCount ###
 * @brief Get amount of text lines
 * Returns the amount of lines in the text even with html formatting
 * $$ edt.GetLineCount() $$
 * @returns num_int
 */


/** ### GetLineStart ###
 * @brief Get the start character index of a line
 * Returns at which character in the text a certain line begins.
 * $$ edt.GetLineStart(line) $$
 * @param {num_int} line 
 * @returns num_int
 */


/** ### GetLineTop ###
 * @brief Get line top position on screen
 * Returns the top position of a given line on the screen.
 * $$ edt.GetLineTop(line) $$
 * @param {num_int} line 
 * @returns num_frc
 */


/** ### GetMaxLines ###
 * @brief Get amount of lines fitting in the control
 * Returns the maximum amount of lines the control can hold with the current control and font height
 * $$ edt.GetMaxLines() $$
 * @returns num_int
 */


/** @extern GetParent */

/** @extern GetPosition */

/** ### GetSelectedText ###
 * @brief Get the selected text
 * Returns the currently selected text.
 * $$ edt.GetSelectedText() $$
 * @returns str
 */


/** ### GetSelectionEnd ###
 * @brief Get selection end position
 * Returns the position of where the user selection ends.
 * $$ edt.GetSelectionEnd() $$
 * @returns num_int
 */


/** ### GetSelectionStart ###
 * @brief Get selection start position
 * Returns the position of where the user selection begins.
 * $$ edt.GetSelectionStart() $$
 * @returns num_int
 */


/** @extern GetText */

/** @extern GetTextSize */

/** @extern GetTop */

/** ### GetType ###
 * Returns the control class name.
 * $$ edt.GetType() $$
 * @returns str-TextEdit
 */


/** @extern GetVisibility */

/** @extern GetWidth */

/** @extern Gone */

/** @extern Hide */

/** ### InsertText ###
 * @brief Insert text at a given position
 * Inserts a string at a given position.
 * $$ edt.InsertText(text, start) $$
 * @param {str} text 
 * @param {num_int} start 
 */


/** @extern IsEnabled */

/** @extern IsOverlap */

/** @extern IsVisible */

/** @extern Method */

/** ### Redo ###
 * Redo an undone action.
 * $$ edt.Redo() $$
 */


/** ### ReplaceText ###
 * @brief Replace a range of the text with a string
 * Replaces a given range in the text with some string.
 * $$ edt.ReplaceText(text, start, end) $$
 * @param {str} text 
 * @param {num_int} start 
 * @param {num_int} end 
 */


/** @extern SetBackAlpha */

/** @extern Resize */

/** @extern SetBackColor */

/** @extern SetBackGradient */

/** @extern SetBackGradientRadial */

/** @extern SetBackground */

/** @extern SetColorFilter */

/** ### SetCursorColor ###
 * @brief Change cursor color
 * Changes the cursor color.
 * $$ edt.SetCursorColor(color) $$
 * @param {str_col} color 
 */


/** ### SetCursorPos ###
 * Change the current cursor position.
 * $$ edt.SetCursorPos(position) $$
 * @param {num_int} position 
 */


/** @extern SetDescription */

/** @extern SetEnabled */

/** ### SetHint ###
 * @brief Shows a grey default text
 * Set a grey default which is shown when the edit is empty
 * $$ edt.SetHint(text) $$
 * @param {str} text 
 */


/** @extern SetHtml */

/** @extern SetMargins */

/** @extern SetOnChange */

/** ### SetOnEnter ###
 * @brief Called when user pressed 'Done' or 'Enter'
 * %cb% the user pressed 'Done' or 'Enter' on the keyboard (line can still be inserted via Shift+Enter)
 * Along with the “SingleLine” option it changes the keyboards _'Enter'_ key to _'Done'_ or _'Ok'_
 * $$ edt.SetOnEnter(callback) $$
 * @param {fnc_json} callback {}
 */


/** @extern SetOnFocus */

/** ### SetSelectColor ###
 * @brief Set selection color
 * Set the background color for selected text.
 * $$ edt.SetSelectColor(col) $$
 * @param {str_col} col 
 */


/** ### SetSelection ###
 * @brief Select text in a given range
 * Selects part of the text in a given range.
 * $$ edt.SetSelection(start, stop) $$
 * @param {num_int} start 
 * @param {num_int} stop 
 */


/** @extern SetSize */

/** @extern SetText */

/** @extern SetTextColor */

/** @extern SetTextSize */

/** @extern SetVisibility */

/** @extern Show */

/** @extern Tween */

/** ### Undo ###
 * Undo an action.
 * $$ edt.Undo() $$
 */



// ------------- SAMPLES ------------- 


    
/**
@sample Using OnChange
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
 */
    
            
    
/**
@sample Blue on White
function OnStart()
{
    lay = app.CreateLayout( "Linear", "VCenter,FillXY" );

    <b>edt = app.CreateTextEdit( "Hello", 0.8, 0.4  );
    edt.SetTextColor( "#ff6666ff" );
    edt.SetBackColor( "#ffffffff" );
    lay.AddChild( edt );</b>

    app.AddLayout( lay );
}
 */
    
            
    
/**
@sample Password
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
 */
    
            
    
/**
@sample Python Using OnChange
from native import app

def OnStart():
    global edt, txt
    lay = app.CreateLayout( "Linear", "VCenter,FillXY" )

    edt = app.CreateTextEdit( "Edit me", 0.8, 0.3 )
    edt.SetOnChange( edt_OnChange )
    lay.AddChild( edt )

    txt = app.CreateText( "", 0.8, 0.3 )
    txt.SetMargins( 0, 0.02, 0, 0 )
    lay.AddChild( txt )

    app.AddLayout( lay )

def edt_OnChange():
    txt.SetText( edt.GetText() )
 */
    
            
    
/**
@sample Python Blue on White
from native import app

def OnStart():
    lay = app.CreateLayout( "Linear", "VCenter,FillXY" )

    edt = app.CreateTextEdit( "Hello", 0.8, 0.4  )
    edt.SetTextColor( "#ff6666ff" )
    edt.SetBackColor( "#ffffffff" )
    lay.AddChild( edt )

    app.AddLayout( lay )
 */
    
            
    
/**
@sample Python Password
from native import app

def OnStart():
    global edt
    lay = app.CreateLayout( "Linear", "VCenter,FillXY" )

    edt = app.CreateTextEdit( "", 0.8, 0.4, "Password,Singleline"  )
    edt.SetHint( "Password" )
    edt.SetOnEnter( edt_OnEnter )
    lay.AddChild( edt )

    app.AddLayout( lay )

def edt_OnEnter():
    password = edt.GetText()
    app.ShowPopup( password )
 */
    
            