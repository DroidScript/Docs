// ------------- HEADER SECTION ------------- 


/** # CreateSwitch #
 * @abbrev swt

 * Creates a switch that can be toggled on and off.
 * $$ swt = MUI.CreateSwitch(value, color) $$ 
 * @param {bin} value 
 * @param {str_col} color 
 * @returns obj
*/




// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### GetValue ###
 * Get the current value of the switch
 * $$ swt.GetValue() $$
 * @returns bin
 */


/** ### SetOnTouch ###
 * @brief Calls a function when switch is click
 * Calls a function when switch is click
 * $$ swt.SetOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["value"],"pTypes":["bin"]}
 */


/** ### SetValue ###
 * Sets the value of the switch
 * $$ swt.SetValue(value) $$
 * @param {bin} value 
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
 * $$ swt.GetType() $$
 * @returns str-Seekbar
 */


/** @extern GetWidth */

/** @extern Gone */

/** @extern IsEnabled */

/** @extern IsOverlap */

/** @extern IsVisible */

/** @extern SetEnabled */

/** @extern SetPosition */

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

        skb = MUI.CreateSwitch()
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
@sample With Value & Color
cfg.Light
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal, "Light")

    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

        skb = MUI.CreateSwitch(true, MUI.colors.blue.blue)
        skb.SetOnTouch(OnTouch)
        lay.AddChild(skb)

    app.AddLayout(lay)
}

function OnTouch(value) 
{
    app.ShowPopup(value)
}
 */
    
            