// ------------- HEADER SECTION -------------


/** # CreateTESearchElegant #
 * @abbrev tes
 * 
 * $$ tes = MUI.CreateTESearchElegant(width, hint?, icon?, iconPos?, color?, option?) $$ 
 * @param {num} width 
 * @param {str} [hint] Hint text
 * @param {str} [icon] Material icon font
 * @param {str} [iconPos] Right|Left
 * @param {str_col} [color] 
 * @param {str} [option] Small|Normal|Border
 * @returns obj
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Creates a customizable elegant text input.

Basic implementation.
<sample Basic>

By default icon is displayed on the left, you can place the icon to the right by passing **Right** to the _iconPos_ argument.
<sample RightIcon>

To make a smaller input, just pass **small** to the _option_ argument.
<sample Small>

To make a bordered input, you can pass **border** to the _option_ argument.
<sample Border>
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** @extern ClearFocus */

/** @extern ClearHistory */

/** @extern Focus */

/** @extern GetCursorLine */

/** @extern GetCursorPos */

/** @extern GetSelectedText */

/** @extern GetSelectionEnd */

/** @extern GetSelectionStart */

/** @extern GetText */

/** @extern GetType */

/** @extern GetVisibility */

/** @extern Gone */

/** @extern InsertText */

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


/** ### SetIconOnTouch ###
 * @brief %cb% the user pressed the icon.
 * %cb% the user pressed the icon.
 * $$ tes.SetIconOnTouch(callback) $$
 * @param {fnc_json} callback {}
 */


/** @extern SetPosition */

/** @extern SetText */

/** ### Undo ###
 * Undo an action
 * $$ tes.Undo() $$
 */


/** @extern SetOnIconTouch */

/** @extern SetOnTouch */


// ------------- SAMPLES ------------- 


    
/**
@sample Basic
cfg.Light
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")

        tef = MUI.CreateTESearchElegant(0.8, "Search for music", "music_note")
        lay.AddChild(tef)

    app.AddLayout(lay)
}
 */
    
            
    
/**
@sample RightIcon
cfg.Dark
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")

        tef = MUI.CreateTESearchElegant(0.8, "Search for music", "music_note", "Right")
        lay.AddChild(tef)

    app.AddLayout(lay)
}
 */
    
            
    
/**
@sample Small
cfg.Light
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")

        tef = MUI.CreateTESearchElegant(0.8, "Search for music", "music_note", "Right", "#673ab7", "Small")
        lay.AddChild(tef)

    app.AddLayout(lay)
}
 */
    
            
    
/**
@sample Border
cfg.Dark
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")

        tef = MUI.CreateTESearchElegant(0.8, "Search for music", "music_note", "Right", null, "Small,Border")
        lay.AddChild(tef)

    app.AddLayout(lay)
}
 */
    
            
    
/**
@sample Python Border
# cfg.Dark, cfg.MUI

from native import app

def OnStart():
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")

    tef = MUI.CreateTESearchElegant(0.8, "Search for music", "music_note", "Right", None, "Small,Border")
    lay.AddChild(tef)

    app.AddLayout(lay)
 */
    
            