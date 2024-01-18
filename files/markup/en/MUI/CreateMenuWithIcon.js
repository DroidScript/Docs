// ------------- HEADER SECTION -------------


/** # CreateMenuWithIcon #
 * @abbrev mwi
 * Advance MUI implementation of material design menu with additional icon using material icon font.
 * $$ mwi = MUI.CreateMenuWithIcon(list, width?, height?, position?) $$
 * @param {lst} list str
 * @param {num_frc} [width]
 * @param {num_frc} [height]
 * @param {str} [position] Top,Left|Top,Right|Bottom,Left|Bottom,Right
 * @returns obj
*/




// ------------- VISIBLE METHODS & PROPERTIES -------------


/** ### SetOnSelect ###
 * Calls a function when item is click
 * $$ mwi.SetOnSelect(callback) $$
 * @param {fnc_json} callback {"pNames":["text","index"],"pTypes":["str","num_int"]}
 */


/** @extern Show */

/** @extern Hide */

/** @extern GetVisibility */

/** @extern IsVisible */

/** @extern SetEnabled */

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

/** @extern SetVisibility */


// ------------- SAMPLES -------------



/**
@sample Basic
cfg.Light
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

        btn = MUI.CreateButtonRaised("SHOW MENU", 0.35)
        btn.SetOnTouch(ShowMenu)
        lay.AddChild(btn)

    app.AddLayout(lay)

    var list = ["Settings:settings", "Location:location_on", "Camera:camera", "Account:person"]
    lst = MUI.CreateMenuWithIcon(list, null, null, "Top, Right")
    lst.SetOnSelect(OnSelect)
}

function ShowMenu()
{
    lst.Show()
}

function OnSelect(choice)
{
    app.ShowPopup(choice)
}
 */



/**
@sample Dark & Bottom,Right
cfg.Light
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

        btn = MUI.CreateButtonRaised("SHOW MENU", 0.35)
        btn.SetOnTouch(ShowMenu)
        lay.AddChild(btn)

    app.AddLayout(lay)

    var list = ["Settings:settings", "Location:location_on", "Camera:camera", "Account:person"]
    lst = MUI.CreateMenuWithIcon(list, null, null, "Bottom, Right")
    lst.SetOnSelect(OnSelect)
}

function ShowMenu()
{
    lst.Show()
}

function OnSelect(choice, index)
{
    app.ShowPopup(choice+" : "+index)
}
 */



/**
@sample Python Basic
# cfg.Light, cfg.MUI

from native import app

def OnStart():
    global lst
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

    btn = MUI.CreateButtonRaised("SHOW MENU", 0.35)
    btn.SetOnTouch(ShowMenu)
    lay.AddChild(btn)

    app.AddLayout(lay)

    list = ["Settings:settings", "Location:location_on", "Camera:camera", "Account:person"]
    lst = MUI.CreateMenuWithIcon(list, None, None, "Top, Right")
    lst.SetOnSelect(OnSelect)

def ShowMenu():
    lst.Show()

def OnSelect(choice, index):
    app.ShowPopup(choice)
 */



/**
@sample Python Dark & Bottom,Right
# cfg.Light, cfg.MUI

from native import app

def OnStart():
    global lst
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

    btn = MUI.CreateButtonRaised("SHOW MENU", 0.35)
    btn.SetOnTouch(ShowMenu)
    lay.AddChild(btn)

    app.AddLayout(lay)

    list = ["Settings:settings", "Location:location_on", "Camera:camera", "Account:person"]
    lst = MUI.CreateMenuWithIcon(list, None, None, "Bottom, Right")
    lst.SetOnSelect(OnSelect)

def ShowMenu():
    lst.Show()

def OnSelect(choice, index):
    app.ShowPopup(choice + " : " + str(index))
 */
