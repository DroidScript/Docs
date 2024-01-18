// ------------- HEADER SECTION -------------


/** # CreateAlertSimple #
 * @abbrev als
 * Create a simple alert with a single button.
 * $$ als = MUI.CreateAlertSimple(text, btnText?, color?) $$
 * @param {str} text Text of the alert
 * @param {str} [btnText] Button text. Default is OKAY
 * @param {str_col} [color]
 * @returns obj
*/




// ------------- VISIBLE METHODS & PROPERTIES -------------


/** @extern GetVisibility */

/** @extern Hide */

/** ### SetOnTouch ###
 * Calls a function when button is click
 * $$ als.SetOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["isBtnClick"],"pTypes":["bin"]}
 */


/** @extern SetText */

/** @extern SetTextColor */

/** @extern SetHtml */

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

/** @extern SetEnabled */

/** @extern SetVisibility */


// ------------- SAMPLES -------------



/**
@sample Simple
cfg.Light
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    var text = "This is a sample alert text."
    als = MUI.CreateAlertSimple(text)
    als.Show()
}
 */



/**
@sample Custom
cfg.Light
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    var text = "This is a sample alert text."
    als = MUI.CreateAlertSimple(text, "GOT IT", color.darken2)
    als.Show()

    setTimeout(CloseAlert, 4000)
}

function CloseAlert()
{
    als.Hide()
}
 */



/**
@sample Dark
cfg.Dark
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")

        btnShow = MUI.CreateButtonRound("SHOW ALERT")
        btnShow.SetOnTouch(ShowAlert)
        lay.AddChild(btnShow)

    app.AddLayout(lay)

    var text = "This is a sample alert text."
    als = MUI.CreateAlertSimple(text, "GOT IT", MUI.colors.green.darken2)
    als.SetOnTouch(AlertOnTouch)
}

function ShowAlert()
{
    als.Show()
}

function AlertOnTouch(val)
{
    app.ShowPopup(val)
}
 */



/**
@sample Python Simple
# cfg.Light, cfg.MUI

from native import app
from native import cfg

def OnStart():
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    text = "This is a sample alert text."
    als = MUI.CreateAlertSimple(text)
    als.Show()
 */



/**
@sample Python Custom
# cfg.Light, cfg.MUI

from native import app
from native import cfg

def OnStart():
    global als
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    text = "This is a sample alert text."
    als = MUI.CreateAlertSimple(text, "GOT IT", color.darken2)
    als.Show()

    app.SetTimeout(CloseAlert, 4000)

def CloseAlert():
    als.Hide()
 */



/**
@sample Python Dark
# cfg.Dark, cfg.MUI

from native import app
from native import cfg

def OnStart():
    global als
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")

    btnShow = MUI.CreateButtonRound("SHOW ALERT")
    btnShow.SetOnTouch(ShowAlert)
    lay.AddChild(btnShow)

    app.AddLayout(lay)

    text = "This is a sample alert text."
    als = MUI.CreateAlertSimple(text, "GOT IT", MUI.colors.green.darken2)
    als.SetOnTouch(AlertOnTouch)

def ShowAlert():
    als.Show()

def AlertOnTouch(val):
    app.ShowPopup(val)
 */
