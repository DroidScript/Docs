// ------------- HEADER SECTION -------------


/** # CreateTextAreaFilledA #
 * @abbrev taf
 * Creates an active filled textarea.
 * $$ taf = MUI.CreateTextAreaFilledA(width=-1, height=-1, hint?, label?, color?) $$ 
 * @param {num} [width=-1] 
 * @param {num} [height=-1] 
 * @param {str} [hint] Hint|Label text
 * @param {bin} [label] Hides or show label
 * @param {str_col} [color] 
 * @returns obj
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

/** @extern Redo */

/** @extern ReplaceText */

/** @extern SetCursorPos */

/** @extern SetMargins */

/** @extern SetOnChange */

/** @extern SetOnEnter */

/** @extern SetPosition */

/** @extern SetText */

/** @extern Undo */


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

        tef = MUI.CreateTextAreaFilledA(0.8, 0.2, "Type your name")
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

        tef = MUI.CreateTextAreaFilledA(0.8, 0.2, "Type your name", true)
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

        MUI.CreateTextAreaFilledA(0.8, 0.2, "Type your name", true)
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

    tef = MUI.CreateTextAreaFilledA(0.8, 0.2, "Type your name")
    lay.AddChild(tef)

    app.AddLayout(lay)
 */
    
            
    
/**
@sample Python With Label
# cfg.Light, cfg.MUI

from native import app

def OnStart():
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")

    tef = MUI.CreateTextAreaFilledA(0.8, 0.2, "Type your name", True)
    lay.AddChild(tef)

    app.AddLayout(lay)
 */
    
            
    
/**
@sample Python SetOnEnter Callback
# cfg.Dark, cfg.MUI

from native import app

def OnStart():
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")

    tef = MUI.CreateTextAreaFilledA(0.8, 0.2, "Type your name", True)
    tef.SetOnEnter(OnEnter)
    lay.AddChild(tef)

    app.AddLayout(lay)

def OnEnter():
    app.ShowPopup(this.GetText())
 */
    
            