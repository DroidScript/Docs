// ------------- HEADER SECTION -------------


/** # CreateFAB #
 * @abbrev fab
 * Creates a floating action button
 * $$ fab = MUI.CreateFAB(icon, color?) $$
 * @param {str} icon Material icon fonts
 * @param {str_col} [color]
 * @returns obj
*/




// ------------- VISIBLE METHODS & PROPERTIES -------------


/** @extern SetOnLongTouch */

/** @extern SetOnTouch */

/** ### SetIcon ###
 * Sets a new material icon
 * $$ fab.SetIcon(icon) $$
 * @param {str} icon Material icon font
 */


/** ### SetIconColor ###
 * Sets the text color
 * $$ fab.SetIconColor(color?) $$
 * @param {str_col} [color]
 */


/** ### GetIcon ###
 * Returns the icon.
 * $$ fab.GetIcon() $$
 * @returns str-Material icon font
 */


/** @extern Animate */

/** @extern ClearFocus */

/** @extern Batch */

/** @extern data */

/** @extern Focus */

/** @extern GetAbsHeight */

/** @extern GetAbsWidth */

/** @extern GetHeight */

/** @extern GetLeft */

/** @extern GetParent */

/** @extern GetPosition */

/** @extern GetTop */

/** ### GetType ###
 *
 * $$ fab.GetType() $$
 * @returns str-Button
 */


/** @extern GetVisibility */

/** @extern GetWidth */

/** @extern Gone */

/** @extern Hide */

/** @extern IsEnabled */

/** @extern IsOverlap */

/** @extern IsVisible */

/** @extern SetEnabled */

/** @extern SetMargins */

/** @extern SetPosition */

/** @extern SetVisibility */

/** @extern Show */

/** @extern Tween */

/** @extern SetColor */

/** @extern SetText */


// ------------- SAMPLES -------------



/**
@sample
cfg.Light
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Absolute", "FillXY,VCenter")

        fab = MUI.CreateFAB("add")
        fab.SetOnTouch(OnClick)
        lay.AddChild(fab)

    app.AddLayout(lay)
}

function OnClick()
{
    app.ShowPopup("You click FAB")
}
 */



/**
@sample Python
# cfg.Light, cfg.MUI

from native import app
from native import cfg

def OnStart():
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Absolute", "FillXY,VCenter")

    fab = MUI.CreateFAB("add")
    fab.SetOnTouch(OnClick)
    lay.AddChild(fab)

    app.AddLayout(lay)

def OnClick():
    app.ShowPopup("You clicked FAB")
 */
