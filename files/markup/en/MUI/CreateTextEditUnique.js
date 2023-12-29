// ------------- HEADER SECTION ------------- 


/** # CreateTextEditUnique #
 * @abbrev teu
 * Creates a unique textedit customization.
 * $$ teu = MUI.CreateTextEditUnique(width, hint, icon, iconCOlor) $$ 
 * @param {num} width 
 * @param {str} hint Hint text
 * @param {str} icon Material icon font
 * @param {str_col} iconCOlor Icon color
 * @returns obj
*/




// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** @extern ClearFocus */

/** ### ClearHistory ###
 * Clear input history
 * $$ teu.ClearHistory() $$
 */


/** @extern Focus */

/** ### GetCursorLine ###
 * Get cursor line
 * $$ teu.GetCursorLine() $$
 * @returns num
 */


/** ### GetCursorPos ###
 * Get cursor position
 * $$ teu.GetCursorPos() $$
 */


/** ### GetSelectedText ###
 * 
 * $$ teu.GetSelectedText() $$
 */


/** ### GetSelectionEnd ###
 * 
 * $$ teu.GetSelectionEnd() $$
 */


/** ### GetSelectionStart ###
 * 
 * $$ teu.GetSelectionStart() $$
 */


/** @extern GetText */

/** @extern GetType */

/** @extern GetVisibility */

/** @extern Gone */

/** ### InsertText ###
 * Inserts a string at a given position.
 * $$ teu.InsertText(text, start) $$
 * @param {str} text 
 * @param {num_int} start 
 */


/** @extern IsEnabled */

/** @extern IsOverlap */

/** @extern IsVisible */

/** ### Redo ###
 * Redo an undone action.
 * $$ teu.Redo() $$
 */


/** ### ReplaceText ###
 * Replaces a given range in the text with some string.
 * $$ teu.ReplaceText(text, start, end) $$
 * @param {str} text 
 * @param {num_int} start 
 * @param {num_int} end 
 */


/** ### SetCursorPos ###
 * Change the curernt cursor position.
 * $$ teu.SetCursorPos(position) $$
 * @param {num_int} position 
 */


/** @extern SetMargins */

/** @extern SetOnChange */

/** ### SetOnEnter ###
 * @brief %cb% the user pressed 'Done' or 'Enter' on the keyboard
 * %cb% the user pressed 'Done' or 'Enter' on the keyboard
 * $$ teu.SetOnEnter(callback) $$
 * @param {fnc_json} callback {}
 */


/** @extern SetPosition */

/** @extern SetText */

/** ### Undo ###
 * Undo an action
 * $$ teu.Undo() $$
 */


/** @extern SetOnTouch */


// ------------- SAMPLES ------------- 


    
/**
@sample Unique Text Input
cfg.Light
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")

        tef = MUI.CreateTextEditUnique(0.8, "Left", "Search for something")
        lay.AddChild(tef)

    app.AddLayout(lay)
}
 */
    
            
    
/**
@sample Python Unique Text Input
# cfg.Light, cfg.MUI

from native import app

def OnStart():
    color = app.gfx.teal
    app.InitializeUIKit(color.teal)

    lay = app.MUI.CreateLayout("Linear", "VCenter,FillXY")

        tef = app.MUI.CreateTextEditUnique(0.8, "Left", "Search for something")
        lay.AddChild(tef)

    app.AddLayout(lay)
 */
    
            