// ------------- HEADER SECTION -------------


/** # CreateAlert #
 * @abbrev alr
 * A nice pop-up at the top of your current layout
 * $$ alr = MUI.CreateAlert(text, icon?, color?) $$
 * @param {str} text Popup text
 * @param {str} [icon] Material icon
 * @param {str_col} [color]
 * @returns obj
*/




// ------------- VISIBLE METHODS & PROPERTIES -------------


/** @extern GetVisibility */

/** @extern Hide */

/** ### SetOnClose ###
 * Calls a function when alert is close
 * $$ alr.SetOnClose(callback) $$
 * @param {fnc_json} callback {"pNames":["isBtnClick"],"pTypes":["bin-Is the button click or not"]}
 */


/** @extern SetText */

/** @extern Show */

/** @extern ClearFocus */

/** @extern Focus */

/** @extern GetAbsHeight */

/** @extern GetAbsWidth */

/** @extern GetHeight */

/** @extern GetLeft */

/** @extern GetParent */

/** @extern GetPosition */

/** @extern GetTop */

/** @extern GetWidth */

/** @extern Gone */

/** @extern IsEnabled */

/** @extern IsOverlap */

/** @extern IsVisible */


// ------------- SAMPLES -------------



/**
@sample No icon
cfg.Light
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    var text = "This is a sample text for the popup."
    alr = MUI.CreateAlert(text)
    alr.Show()
}
 */



/**
@sample With icon
cfg.Light
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    var text = "This is a sample text for the popup."
    alr = MUI.CreateAlert(text, "message")
    alr.Show()

    setTimeout(CloseAlert, 4000)
}

function CloseAlert()
{
    alr.Hide()
}
 */



/**
@sample On close function
cfg.Dark
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    var text = "This is a sample text for the popup."
    alr = MUI.CreateAlert(text, "message", MUI.colors.blue.darken2)
    alr.SetOnClose(AlertOnClose)
    alr.Show()
}

function AlertOnClose(val)
{
    if(val)
        app.ShowPopup("You close me!")
}
 */



/**
@sample Python No icon
# cfg.Light, cfg.MUI

from native import app

def OnStart():
    color = MUI.colors.teal
    app.InitializeUIKit(color)

    text = "This is a sample text for the popup."
    alr = MUI.MUI.CreateAlert(text)
    alr.Show()
 */



/**
@sample Python With icon
# cfg.Light, cfg.MUI

from native import app

def OnStart():
    global alr
    color = MUI.colors.teal
    app.InitializeUIKit(color)

    text = "This is a sample text for the popup."
    alr = MUI.MUI.CreateAlert(text, "message")
    alr.Show()

    app.SetTimeout(CloseAlert, 4000)

def CloseAlert():
    alr.Hide()
 */



/**
@sample Python On close function
# cfg.Dark, cfg.MUI

from native import app

def OnStart():
    color = MUI.colors.teal
    app.InitializeUIKit(color)

    text = "This is a sample text for the popup."
    alr = MUI.MUI.CreateAlert(text, "message", MUI.colors.blue.darken2)
    alr.SetOnClose(AlertOnClose)
    alr.Show()

def AlertOnClose(val):
    if val:
        app.ShowPopup("You close me!")
 */
