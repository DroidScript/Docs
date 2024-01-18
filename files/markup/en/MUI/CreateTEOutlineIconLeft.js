// ------------- HEADER SECTION -------------


/** # CreateTEOutlineIconLeft #
 * @abbrev teo
 * Creates a material outlined text input with icon on the left.
 * $$ teo = MUI.CreateTEOutlineIconLeft(width, options?, icon?, hint?, label?, color?, backColor?) $$
 * @param {num} width
 * @param {str_com} [options] DS TextEdit options|Round
 * @param {str} [icon] Material icon font
 * @param {str} [hint] Hint|Label text
 * @param {bin} [label] Show or hide label
 * @param {str_col} [color]
 * @param {str_col} [backColor]
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

/** @extern SetOnIconTouch */

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
