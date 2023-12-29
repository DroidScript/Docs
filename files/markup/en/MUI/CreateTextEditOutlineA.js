// ------------- HEADER SECTION ------------- 


/** # CreateTextEditOutlineA #
 * @abbrev teo
 * Creates an active outlined material text input.
 * $$ teo = MUI.CreateTextEditOutlineA(width, options, hint, label, color, backColor) $$ 
 * @param {num} width 
 * @param {str} options Comma separated DS TextEdit options with additional 'Round' option.
 * @param {str} hint Hint|Label text
 * @param {bin} label Show or hide label
 * @param {str_col} color 
 * @param {str_col} backColor 
 * @returns obj
*/




// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** @extern ClearFocus */

/** ### ClearHistory ###
 * Clear input history
 * $$ teo.ClearHistory() $$
 */


/** @extern Focus */

/** ### GetCursorLine ###
 * Get cursor line
 * $$ teo.GetCursorLine() $$
 * @returns num
 */


/** ### GetCursorPos ###
 * Get cursor position
 * $$ teo.GetCursorPos() $$
 */


/** ### GetSelectedText ###
 * 
 * $$ teo.GetSelectedText() $$
 */


/** ### GetSelectionEnd ###
 * 
 * $$ teo.GetSelectionEnd() $$
 */


/** ### GetSelectionStart ###
 * 
 * $$ teo.GetSelectionStart() $$
 */


/** @extern GetText */

/** @extern GetType */

/** @extern GetVisibility */

/** @extern Gone */

/** ### InsertText ###
 * Inserts a string at a given position.
 * $$ teo.InsertText(text, start) $$
 * @param {str} text 
 * @param {num_int} start 
 */


/** @extern IsEnabled */

/** @extern IsOverlap */

/** @extern IsVisible */

/** ### Redo ###
 * Redo an undone action.
 * $$ teo.Redo() $$
 */


/** ### ReplaceText ###
 * Replaces a given range in the text with some string.
 * $$ teo.ReplaceText(text, start, end) $$
 * @param {str} text 
 * @param {num_int} start 
 * @param {num_int} end 
 */


/** ### SetCursorPos ###
 * Change the curernt cursor position.
 * $$ teo.SetCursorPos(position) $$
 * @param {num_int} position 
 */


/** @extern SetMargins */

/** @extern SetOnChange */

/** ### SetOnEnter ###
 * @brief %cb% the user pressed 'Done' or 'Enter' on the keyboard
 * %cb% the user pressed 'Done' or 'Enter' on the keyboard
 * $$ teo.SetOnEnter(callback) $$
 * @param {fnc_json} callback {}
 */


/** @extern SetPosition */

/** @extern SetText */

/** ### Undo ###
 * Undo an action
 * $$ teo.Undo() $$
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

        tef = MUI.CreateTextEditOutlineA(0.8, "Left", "Type your name")
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

        tef = MUI.CreateTextEditOutlineA(0.8, "Left", "Username", true)
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

        tef = MUI.CreateTextEditOutlineA(0.8, "Left", "Type your name", true)
        tef.SetOnEnter(OnEnter)
        lay.AddChild(tef)

    app.AddLayout(lay)
}

function OnEnter()
{
    app.ShowPopup(this.GetText())
}
 */
    
            
    
/**
@sample Python No Label
# cfg.Light, cfg.MUI

from native import app
from native import cfg

def OnStart():
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")

    tef = MUI.CreateTextEditOutlineA(0.8, "Left", "Type your name")
    lay.AddChild(tef)

    app.AddLayout(lay)
 */
    
            
    
/**
@sample Python With Label
# cfg.Light, cfg.MUI

from native import app
from native import cfg

def OnStart():
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")

    tef = MUI.CreateTextEditOutlineA(0.8, "Left", "Username", True)
    lay.AddChild(tef)

    app.AddLayout(lay)
 */
    
            
    
/**
@sample Python SetOnEnter Callback
# cfg.Dark, cfg.MUI

from native import app
from native import cfg

def OnStart():
    global tef
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")

    tef = MUI.CreateTextEditOutlineA(0.8, "Left", "Type your name", True)
    tef.SetOnEnter(OnEnter)
    lay.AddChild(tef)

    app.AddLayout(lay)

def OnEnter():
    app.ShowPopup(tef.GetText())
 */
    
            