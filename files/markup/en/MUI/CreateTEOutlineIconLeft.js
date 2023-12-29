// ------------- HEADER SECTION ------------- 


/** # CreateTEOutlineIconLeft #
 * @abbrev teo
 * Creates a material outlined text input with icon on the left.
 * $$ teo = MUI.CreateTEOutlineIconLeft(width, options, icon, hint, label, color, backColor) $$ 
 * @param {num} width 
 * @param {str_com} options DS TextEdit options with additional 'Round' option.
 * @param {str} icon Material icon font
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


/** ### SetOnIconTouch ###
 * @brief Calls a function when icon is touch
 * Calls a function when icon is touch
 * $$ teo.SetOnIconTouch(callback) $$
 * @param {fnc_json} callback {}
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

        tef = MUI.CreateTEOutlineIconLeft(0.8, "Left", "person", "Type your name")
        lay.AddChild(tef)

    app.AddLayout(lay)
}
 */
    
            
    
/**
@sample Dark With Label
cfg.Dark
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")

        tef = MUI.CreateTEOutlineIconLeft(0.8, "Left,Password", "lock", "Type your password", true)
        lay.AddChild(tef)

    app.AddLayout(lay)
}
 */
    
            
    
/**
@sample Round
cfg.Light
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")

        tef = MUI.CreateTEOutlineIconLeft(0.8, "Left,Number,Round", "call", "Type your number", true)
        lay.AddChild(tef)

    app.AddLayout(lay)
}
 */
    
            
    
/**
@sample SetOnEnter Callback
cfg.Light
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")

        tef = MUI.CreateTEOutlineIconLeft(0.8, "Left,Number", "call", "Type your number", true)
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

def OnStart():
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")

    tef = MUI.CreateTEOutlineIconLeft(0.8, "Left", "person", "Type your name")
    lay.AddChild(tef)

    app.AddLayout(lay)
 */
    
            
    
/**
@sample Python Dark With Label
# cfg.Dark, cfg.MUI

from native import app

def OnStart():
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")

    tef = MUI.CreateTEOutlineIconLeft(0.8, "Left,Password", "lock", "Type your password", True)
    lay.AddChild(tef)

    app.AddLayout(lay)
 */
    
            
    
/**
@sample Python Round
# cfg.Light, cfg.MUI

from native import app

def OnStart():
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")

    tef = MUI.CreateTEOutlineIconLeft(0.8, "Left,Number,Round", "call", "Type your number", True)
    lay.AddChild(tef)

    app.AddLayout(lay)
 */
    
            
    
/**
@sample Python SetOnEnter Callback
# cfg.Light, cfg.MUI

from native import app

def OnStart():
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")

    tef = MUI.CreateTEOutlineIconLeft(0.8, "Left,Number", "call", "Type your number", True)
    tef.SetOnEnter(OnEnter)
    lay.AddChild(tef)

    app.AddLayout(lay)

def OnEnter():
    app.ShowPopup(this.GetText())
 */
    
            