// ------------- HEADER SECTION ------------- 


/** # CreateTextEditSearch #
 * @abbrev tes
 * Creates a customize search style text input.
 * $$ tes = MUI.CreateTextEditSearch(width, options, hint, color, backColor) $$ 
 * @param {num} width 
 * @param {str} options Comma separated DS TextEdit options
 * @param {str} hint Hint text
 * @param {str_col} color 
 * @param {str_col} backColor 
 * @returns obj
*/




// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** @extern ClearFocus */

/** ### ClearHistory ###
 * Clear input history
 * $$ tes.ClearHistory() $$
 */


/** @extern Focus */

/** ### GetCursorLine ###
 * Get cursor line
 * $$ tes.GetCursorLine() $$
 * @returns num
 */


/** ### GetCursorPos ###
 * Get cursor position
 * $$ tes.GetCursorPos() $$
 */


/** ### GetSelectedText ###
 * 
 * $$ tes.GetSelectedText() $$
 */


/** ### GetSelectionEnd ###
 * 
 * $$ tes.GetSelectionEnd() $$
 */


/** ### GetSelectionStart ###
 * 
 * $$ tes.GetSelectionStart() $$
 */


/** @extern GetText */

/** @extern GetType */

/** @extern GetVisibility */

/** @extern Gone */

/** ### InsertText ###
 * Inserts a string at a given position.
 * $$ tes.InsertText(text, start) $$
 * @param {str} text 
 * @param {num_int} start 
 */


/** @extern IsEnabled */

/** @extern IsOverlap */

/** @extern IsVisible */

/** ### Redo ###
 * Redo an undone action.
 * $$ tes.Redo() $$
 */


/** ### ReplaceText ###
 * Replaces a given range in the text with some string.
 * $$ tes.ReplaceText(text, start, end) $$
 * @param {str} text 
 * @param {num_int} start 
 * @param {num_int} end 
 */


/** ### SetCursorPos ###
 * Change the curernt cursor position.
 * $$ tes.SetCursorPos(position) $$
 * @param {num_int} position 
 */


/** @extern SetMargins */

/** @extern SetOnChange */

/** ### SetOnEnter ###
 * @brief %cb% the user pressed 'Done' or 'Enter' on the keyboard
 * %cb% the user pressed 'Done' or 'Enter' on the keyboard
 * $$ tes.SetOnEnter(callback) $$
 * @param {fnc_json} callback {}
 */


/** @extern SetPosition */

/** @extern SetText */

/** ### Undo ###
 * Undo an action
 * $$ tes.Undo() $$
 */


/** ### SetOnIconTouch ###
 * @brief Calls a function when icon is touch
 * Calls a function when icon is touch
 * $$ tes.SetOnIconTouch(callback) $$
 * @param {fnc_json} callback {}
 */



// ------------- SAMPLES ------------- 


    
/**
@sample Search
cfg.Light
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")

        tef = MUI.CreateTextEditSearch(0.8, "Left", "Search for something")
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

        tef = MUI.CreateTextEditSearch(0.8, "Left", "Search for something")
        tef.SetOnEnter(OnEnter)
        lay.AddChild(tef)

    app.AddLayout(lay)
}

function OnEnter()
{
    app.ShowPopup(this.GetText())
}
 */
    
            