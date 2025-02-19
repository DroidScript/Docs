// ------------- HEADER SECTION -------------


/** # CreateColorPicker #
 * @abbrev clp
 * Creates a color picker dialog where you can select a range of MUI predefined colors.
 * $$ clp = MUI.CreateColorPicker(title) $$
 * @param {str} title
 * @returns obj
*/




// ------------- VISIBLE METHODS & PROPERTIES -------------


/** ### SetOnSelect ###
 * Calls a function when a user click the OK button
 * $$ clp.SetOnSelect(callback) $$
 * @param {fnc_json} callback {"pNames":["color?"],"pTypes":["str_col-The selected color"]}
 */


/** @extern Show */

/** @extern Hide */

/** @extern GetVisibility */

/** @extern IsVisible */

/** @extern GetAbsHeight */

/** @extern GetAbsWidth */

/** @extern GetHeight */

/** @extern GetLeft */

/** @extern GetParent */

/** @extern GetPosition */

/** @extern GetTop */

/** @extern GetWidth */

/** @extern IsEnabled */

/** @extern IsOverlap */

/** @extern SetTextEdit */


// ------------- SAMPLES -------------



/**
@sample Light
cfg.Light
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

        btn = MUI.CreateButtonRaised("PICKER", 0.35)
        btn.SetOnTouch(ShowPicker)
        lay.AddChild(btn)

    app.AddLayout(lay)

    clr = MUI.CreateColorPicker("Choose Color")
    clr.SetOnSelect(OnSelect)
}

function ShowPicker()
{
    clr.Show()
}

function OnSelect(color)
{
    app.ShowPopup(color)
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

    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

        btn = MUI.CreateButtonRaised("PICKER", 0.35)
        btn.SetOnTouch(ShowPicker)
        lay.AddChild(btn)

    app.AddLayout(lay)

    clr = MUI.CreateColorPicker("Choose Color")
    clr.SetOnSelect(OnSelect)
}

function ShowPicker()
{
    clr.Show()
}

function OnSelect(color)
{
    app.ShowPopup(color)
}
 */



/**
@sample Python Dark
# cfg.Dark, cfg.MUI

from native import app

def OnStart():
    global clr, color
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

    btn = MUI.CreateButtonRaised("PICKER", 0.35)
    btn.SetOnTouch(ShowPicker)
    lay.AddChild(btn)

    app.AddLayout(lay)

    clr = MUI.CreateColorPicker("Choose Color")
    clr.SetOnSelect(OnSelect)

def ShowPicker():
    clr.Show()

def OnSelect(color):
    app.ShowPopup(color)
 */
