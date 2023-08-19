// ------------- HEADER SECTION ------------- 


/** # CreateTextEditFilledA #
 * @abbrev tef

 * Creates an active filled material text input.
 * $$ tef = MUI.CreateTextEditFilledA(width, options, hint, label, color) $$ 
 * @param {num} width 
 * @param {str} options Comma separated DS TextEdit options
 * @param {str} hint Hint|Label text
 * @param {bin} label Show or hide label
 * @param {str_col} color 
 * @returns obj
*/




// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** @extern ClearFocus */

/** ### ClearHistory ###
 * Clear input history
 * $$ tef.ClearHistory() $$
 */


/** @extern Focus */

/** ### GetCursorLine ###
 * Get cursor line
 * $$ tef.GetCursorLine() $$
 * @returns num
 */


/** ### GetCursorPos ###
 * Get cursor position
 * $$ tef.GetCursorPos() $$
 */


/** ### GetSelectedText ###
 * 
 * $$ tef.GetSelectedText() $$
 */


/** ### GetSelectionEnd ###
 * 
 * $$ tef.GetSelectionEnd() $$
 */


/** ### GetSelectionStart ###
 * 
 * $$ tef.GetSelectionStart() $$
 */


/** @extern GetText */

/** @extern GetType */

/** @extern GetVisibility */

/** @extern Gone */

/** ### InsertText ###
 * Inserts a string at a given position.
 * $$ tef.InsertText(text, start) $$
 * @param {str} text 
 * @param {num_int} start 
 */


/** @extern IsEnabled */

/** @extern IsOverlap */

/** @extern IsVisible */

/** ### Redo ###
 * Redo an undone action.
 * $$ tef.Redo() $$
 */


/** ### ReplaceText ###
 * Replaces a given range in the text with some string.
 * $$ tef.ReplaceText(text, start, end) $$
 * @param {str} text 
 * @param {num_int} start 
 * @param {num_int} end 
 */


/** ### SetCursorPos ###
 * Change the curernt cursor position.
 * $$ tef.SetCursorPos(position) $$
 * @param {num_int} position 
 */


/** @extern SetMargins */

/** @extern SetOnChange */

/** ### SetOnEnter ###
 * %cb% the user pressed 'Done' or 'Enter' on the keyboard
 * $$ tef.SetOnEnter(callback) $$
 * @param {fnc_json} callback {}
 */


/** @extern SetPosition */

/** @extern SetText */

/** ### Undo ###
 * Undo an action
 * $$ tef.Undo() $$
 */


/** @extern SetOnTouch */


// ------------- SAMPLES ------------- 


    
/**
@sample No Label
cfg.Light
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")

        tef = MUI.CreateTextEditFilledA(0.8, "Left", "Type your name")
        lay.AddChild(tef)

    app.AddLayout(lay)
}
 */
    
            
    
/**
@sample With Label
cfg.Light
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")

        tef = MUI.CreateTextEditFilledA(0.8, "Left", "Username", true)
        lay.AddChild(tef)

    app.AddLayout(lay)
}
 */
    
            
    
/**
@sample SetOnEnter Callback
cfg.Dark
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")

        tef = MUI.CreateTextEditFilledA(0.8, "Left", "Type your name", true)
        tef.SetOnEnter(OnEnter)
        lay.AddChild(tef)

    app.AddLayout(lay)
}

function OnEnter()
{
    app.ShowPopup(this.GetText())
}
 */
    
            