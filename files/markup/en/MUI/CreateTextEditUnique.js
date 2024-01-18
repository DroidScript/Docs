// ------------- HEADER SECTION -------------


/** # CreateTextEditUnique #
 * @abbrev teu
 * Creates a unique textedit customization.
 * $$ teu = MUI.CreateTextEditUnique(width?, hint?, icon?, iconColor?) $$
 * @param {num} [width]
 * @param {str} [hint] Hint text
 * @param {str} [icon] Material icon font
 * @param {str_col} [iconColor] Icon color
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
@sample Unique Text Input
cfg.Light
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")

        tef = MUI.CreateTextEditUnique(0.8, "Left", "Search for something")
        lay.AddChild(tef)

    app.AddLayout(lay)
}
 */



/**
@sample Python Unique Text Input
# cfg.Light, cfg.MUI

from native import app

def OnStart():
    color = app.gfx.teal
    app.InitializeUIKit(color.teal)

    lay = app.MUI.CreateLayout("Linear", "VCenter,FillXY")

        tef = app.MUI.CreateTextEditUnique(0.8, "Left", "Search for something")
        lay.AddChild(tef)

    app.AddLayout(lay)
 */
