// ------------- HEADER SECTION -------------


/** # CreateTextAreaFilled #
 * @abbrev taf
 * Creates a material filled textarea
 * $$ taf = MUI.CreateTextAreaFilled(width=-1, height=-1, hint?, label?, color?) $$
 * @param {num} [width=-1]
 * @param {num} [height=-1]
 * @param {str} [hint] Hint text
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

        tef = MUI.CreateTEFilledIconLeft(0.8, "Left", "person", "Type your name")
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

        tef = MUI.CreateTEFilledIconLeft(0.8, "Left,Password", "lock", "Type your password", true)
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

        tef = MUI.CreateTEFilledIconLeft(0.8, "Left,Number", "call", "Type your number", true)
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

    tef = MUI.CreateTEFilledIconLeft(0.8, "Left", "person", "Type your name")
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

    tef = MUI.CreateTEFilledIconLeft(0.8, "Left,Password", "lock", "Type your password", True)
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

    tef = MUI.CreateTEFilledIconLeft(0.8, "Left,Number", "call", "Type your number", True)
    tef.SetOnEnter(OnEnter)
    lay.AddChild(tef)

    app.AddLayout(lay)

def OnEnter():
    app.ShowPopup(this.GetText())
 */
