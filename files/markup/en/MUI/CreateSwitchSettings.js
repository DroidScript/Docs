// ------------- HEADER SECTION -------------


/** # CreateSwitchSettings #
 * @abbrev sws
 * Creates a switchable settings that can be toggled on and off.
 * $$ sws = MUI.CreateSwitchSettings(text, width?, height?, value?, color?, backColor?) $$ 
 * @param {str} text 
 * @param {num_frc} [width] 
 * @param {num_frc} [height] 
 * @param {bin} [value] 
 * @param {str_col} [color] 
 * @param {str_col} [backColor] 
 * @returns obj
*/




// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### GetValue ###
 * Get the current value of the switch
 * $$ sws.GetValue() $$
 * @returns bin
 */


/** ### SetOnTouch ###
 * @brief Calls a function when switch is click
 * Calls a function when switch is click
 * $$ sws.SetOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["text","value"],"pTypes":["str-Settings text","bin-Settings value"]}
 */


/** ### SetValue ###
 * Sets the value of the switch
 * $$ sws.SetValue(value) $$
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
 * $$ sws.GetType() $$
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

        skb = MUI.CreateSwitchSettings("Enable Sound", 1)
        skb.SetOnTouch(OnTouch)
        lay.AddChild(skb)

    app.AddLayout(lay)
}

function OnTouch(text, value)
{
    app.ShowPopup(text+" : "+value)
}
 */
    
            
    
/**
@sample More Settings
cfg.Dark
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

        var settings = [
            "Enable sound",
            "Enable dark mode",
            "Disable full screen"
        ]

        for(var i=0; i<settings.length; i++)
        {
            skb = MUI.CreateSwitchSettings(settings[i], 1)
            skb.SetOnTouch(OnTouch)
            lay.AddChild(skb)
            lay.AddChild(MUI.CreateDivider())
        }

    app.AddLayout(lay)
}

function OnTouch(text, value)
{
    app.ShowPopup(text+" : "+value)
}
 */
    
            
    
/**
@sample Python More Settings
# cfg.Dark, cfg.MUI

from native import app

def OnStart():
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

    settings = [
        "Enable sound",
        "Enable dark mode",
        "Disable full screen"
    ]

    for setting in settings:
        skb = MUI.CreateSwitchSettings(setting, 1)
        skb.SetOnTouch(OnTouch)
        lay.AddChild(skb)
        lay.AddChild(MUI.CreateDivider())

    app.AddLayout(lay)

def OnTouch(text, value):
    app.ShowPopup(text+" : "+value)
 */
    
            