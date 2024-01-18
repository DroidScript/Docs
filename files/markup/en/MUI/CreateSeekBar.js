// ------------- HEADER SECTION -------------


/** # CreateSeekBar #
 * @abbrev skb
 * An MUI implementation of a basic seekbar.
 * $$ skb = MUI.CreateSeekBar(value, range=100, width?, color?) $$
 * @param {num} value Must be between 0 and range
 * @param {num} [range=100] The maximum value of your seekbar
 * @param {num} [width]
 * @param {str_col} [color]
 * @returns obj
*/




// ------------- VISIBLE METHODS & PROPERTIES -------------


/** ### GetValue ###
 * Get the current value of the seekbar.
 * $$ skb.GetValue() $$
 * @returns num
 */


/** ### SetDecimals ###
 * Set the number of decimals to the value
 * $$ skb.SetDecimals(decimals) $$
 * @param {num_int} decimals The number of decimals
 */


/** ### SetOnTouch ###
 * @brief Calls a function when the seekbar is touch
 * Calls a function when the seekbar is touch. Returns the value to the callback.
 * $$ skb.SetOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["value"],"pTypes":["num"]}
 */


/** ### SetValue ###
 * Sets a new value to the seekbar.
 * $$ skb.SetValue(value) $$
 * @param {num} value Must be between 0 and range
 */


/** @extern Animate */

/** @extern ClearFocus */

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
 * $$ skb.GetType() $$
 * @returns str-Seekbar
 */


/** @extern GetWidth */

/** @extern Gone */

/** @extern IsEnabled */

/** @extern IsOverlap */

/** @extern IsVisible */

/** @extern SetEnabled */

/** @extern SetPosition */

/** @extern SetSize */

/** @extern SetVisibility */

/** @extern Tween */


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

        skb = MUI.CreateSeekBar(25, 100, 0.9)
        skb.SetOnTouch(OnTouch)
        lay.AddChild(skb)

    app.AddLayout(lay)
}

function OnTouch(value) 
{
    app.ShowPopup(value)
}
 */



/**
@sample Python Basic
# cfg.Light, cfg.MUI

from native import app

def OnStart():
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

    skb = MUI.CreateSeekBar(25, 100, 0.9)
    skb.SetOnTouch(OnTouch)
    lay.AddChild(skb)

    app.AddLayout(lay)

def OnTouch(value):
    app.ShowPopup(value)
 */
