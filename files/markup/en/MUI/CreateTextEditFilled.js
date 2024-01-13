// ------------- HEADER SECTION -------------


/** # CreateTextEditFilled #
 * @abbrev tef
 * Creates the most common type of material text input.
 * $$ tef = MUI.CreateTextEditFilled(width?, options?, hint?, label?, color?) $$ 
 * @param {num} [width] 
 * @param {str} [options] DS TextEdit options
 * @param {str} [hint] Hint|Label text
 * @param {bin} [label] Show or hide label
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

        tef = MUI.CreateTextEditFilled(0.8, "Left", "Type your name")
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

        tef = MUI.CreateTextEditFilled(0.8, "Left", "Username", true)
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

        tef = MUI.CreateTextEditFilled(0.8, "Left", "Type your name", true)
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

    tef = MUI.CreateTextEditFilled(0.8, "Left", "Type your name")
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

    tef = MUI.CreateTextEditFilled(0.8, "Left", "Username", True)
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

    tef = MUI.CreateTextEditFilled(0.8, "Left", "Type your name", True)
    tef.SetOnEnter(OnEnter)
    lay.AddChild(tef)

    app.AddLayout(lay)

def OnEnter():
    app.ShowPopup(this.GetText())
 */
    
            