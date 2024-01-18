// ------------- HEADER SECTION -------------


/** # CreateTESearchUnique #
 * @abbrev tes
 * Creates a unique text input
 * $$ tes = MUI.CreateTESearchUnique(width?, hint?, icon?, iconColor?) $$
 * @param {num} [width]
 * @param {str} [hint] Hint text
 * @param {str} [icon] Material icon font
 * @param {str_col} [iconColor]
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


// ------------- SAMPLES -------------



/**
@sample Search
cfg.Light
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")

        tef = MUI.CreateTESearchUnique(0.8, "Search for music", "search")
        lay.AddChild(tef)

    app.AddLayout(lay)
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

        tef = MUI.CreateTESearchUnique(0.8, "Search for music", "search")
        lay.AddChild(tef)

    app.AddLayout(lay)
}
 */



/**
@sample Python Search
# cfg.Light, cfg.MUI

from native import app
from native import cfg

def OnStart():
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")

    tef = MUI.CreateTESearchUnique(0.8, "Search for music", "search")
    lay.AddChild(tef)

    app.AddLayout(lay)
 */



/**
@sample Python Dark
# cfg.Dark, cfg.MUI

from native import app
from native import cfg

def OnStart():
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")

    tef = MUI.CreateTESearchUnique(0.8, "Search for music", "search")
    lay.AddChild(tef)

    app.AddLayout(lay)
 */
