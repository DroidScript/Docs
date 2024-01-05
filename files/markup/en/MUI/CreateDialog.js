// ------------- HEADER SECTION -------------


/** # CreateDialog #
 * @abbrev dlg
 * Creates a customizable materialize dialog.
 * $$ dlg = MUI.CreateDialog(title, body, okText, cancelText, divider) $$ 
 * @param {str} title Title
 * @param {str} body Body text
 * @param {str} okText Truthy button text
 * @param {str} cancelText Falsey button text
 * @param {bin} divider Show divider or hide
 * @returns obj
*/




// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### SetOnTouch ###
 * Calls a function when buttons are click (prev. SetOnTouchOK)
 * $$ dlg.SetOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["isOkBtnClick","btnText"],"pTypes":["bin","str"]}
 */


/** @extern Show */

/** @extern SetText */

/** @extern SetHtml */

/** @extern SetTextColor */

/** @extern SetTextSize */

/** @extern SetTitle */

/** @extern SetTitleColor */

/** @extern Hide */

/** @extern ClearFocus */

/** @extern Focus */

/** @extern GetAbsHeight */

/** @extern GetAbsWidth */

/** @extern GetHeight */

/** @extern GetLeft */

/** @extern GetParent */

/** @extern GetPosition */

/** @extern GetTop */

/** @extern GetVisibility */

/** @extern GetWidth */

/** @extern Gone */

/** @extern IsEnabled */

/** @extern IsOverlap */

/** @extern IsVisible */

/** @extern SetEnabled */

/** @extern SetVisibility */

/** @extern SetOnClose */


// ------------- SAMPLES ------------- 


    
/**
@sample Basic & Light
cfg.Light
cfg.MUI

function OnStart()
{
    colors = MUI.colors.teal
    app.InitializeUIKit(colors.teal)

    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")

        btn = MUI.CreateButtonRaised("SHOW DIALOG", 0.5)
        btn.SetOnTouch(ShowDialog)
        lay.AddChild(btn)

    app.AddLayout(lay)

    var text = "You can undone this process."
    dlg = MUI.CreateDialog("Remove message", text, "REMOVE")
}

function ShowDialog()
{
    dlg.Show()
}
 */
    
            
    
/**
@sample Customize & Dark
cfg.Dark
cfg.MUI

function OnStart()
{
    colors = MUI.colors.teal
    app.InitializeUIKit(colors.teal)

    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")

        btn = MUI.CreateButtonRaised("SHOW DIALOG", 0.5)
        btn.SetOnTouch(ShowDialog)
        lay.AddChild(btn)

    app.AddLayout(lay)

    var text = "You can undone this process."
    dlg = MUI.CreateDialog("Remove message", text, "REMOVE", "CLOSE", true)
    dlg.SetOnTouch(OnTouch)
}

function ShowDialog()
{
    dlg.Show()
}

function OnTouch(val, btnTxt)
{
    if(val && btnTxt == "REMOVE")
        app.ShowPopup("Confirmed. Proceed an action")
    else
        app.ShowPopup("You decline the confirmation.")
}
 */
    
            
    
/**
@sample Python Basic & Light
# cfg.Light, cfg.MUI

from native import app

def OnStart():
    global dlg
    colors = MUI.colors.teal
    app.InitializeUIKit(colors.teal)

    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")

    btn = MUI.CreateButtonRaised("SHOW DIALOG", 0.5)
    btn.SetOnTouch(ShowDialog)
    lay.AddChild(btn)

    app.AddLayout(lay)

    text = "You can undone this process."
    dlg = MUI.CreateDialog("Remove message", text, "REMOVE")

def ShowDialog():
    dlg.Show()
 */
    
            
    
/**
@sample Python Customize & Dark
# cfg.Dark, cfg.MUI

from native import app

def OnStart():
    global dlg
    colors = MUI.colors.teal
    app.InitializeUIKit(colors.teal)

    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")

    btn = MUI.CreateButtonRaised("SHOW DIALOG", 0.5)
    btn.SetOnTouch(ShowDialog)
    lay.AddChild(btn)

    app.AddLayout(lay)

    text = "You can undone this process."
    dlg = MUI.CreateDialog("Remove message", text, "REMOVE", "CLOSE", True)
    dlg.SetOnTouch(OnTouch)

def ShowDialog():
    dlg.Show()

def OnTouch(val, btnTxt):
    if val and btnTxt == "REMOVE":
        app.ShowPopup("Confirmed. Proceed an action")
    else:
        app.ShowPopup("You decline the confirmation.")
 */
    
            