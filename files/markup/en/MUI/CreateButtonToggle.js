// ------------- HEADER SECTION -------------


/** # CreateButtonToggle #
 * @abbrev btt
 * 
 * $$ btt = MUI.CreateButtonToggle(text, width?, height?, value?, callback?, color?, backColor?) $$ 
 * @param {str} text 
 * @param {num_frc} [width] 
 * @param {num_frc} [height] 
 * @param {bin} [value] 
 * @param {fnc_json} [callback] {}
 * @param {str_col} [color] 
 * @param {str_col} [backColor] 
 * @returns obj
*/




// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** @extern AdjustColor */

/** @extern Animate */

/** @extern ClearFocus */

/** @extern data */

/** @extern Focus */

/** @extern GetAbsHeight */

/** @extern GetAbsWidth */

/** @extern GetHeight */

/** @extern GetLeft */

/** @extern GetParent */

/** @extern GetPosition */

/** @extern GetText */

/** @extern GetTextSize */

/** @extern GetTop */

/** ### GetType ###
 * 
 * $$ btt.GetType() $$
 * @returns str-Button
 */


/** @extern GetVisibility */

/** @extern GetWidth */

/** @extern Gone */

/** @extern Hide */

/** @extern IsEnabled */

/** @extern IsOverlap */

/** @extern IsVisible */

/** @extern Method */

/** @extern SetBackAlpha */

/** @extern Resize */

/** @extern SetBackColor */

/** @extern SetBackGradient */

/** @extern SetBackGradientRadial */

/** @extern SetBackground */

/** @extern SetColorFilter */

/** @extern SetEllipsize */

/** @extern SetEnabled */

/** @extern SetFontFile */

/** @extern SetHtml */

/** @extern SetMargins */

/** @extern SetOnLongTouch */

/** @extern SetPadding */

/** @extern SetPosition */

/** @extern SetScale */

/** @extern SetSize */

/** @extern SetStyle */

/** @extern SetText */

/** @extern SetTextColor */

/** @extern SetTextShadow */

/** @extern SetTextSize */

/** @extern SetVisibility */

/** @extern Show */

/** @extern Tween */

/** @extern SetColor */


// ------------- SAMPLES ------------- 


    
/**
@sample Light
cfg.Light
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.darken1)

    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")
    	
    	btn = MUI.CreateButtonToggle("BUTTON", 0.35, null, false, OnToggle)
    	lay.AddChild(btn)

    app.AddLayout(lay)
}

function OnToggle(v)
{
    app.ShowPopup(v)
}
 */
    
            
    
/**
@sample Python Light
# cfg.Light, cfg.MUI

from native import app

def OnStart():
    color = MUI.colors.teal
    app.InitializeUIKit(color.darken1)

    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")

    btn = MUI.CreateButtonToggle("BUTTON", 0.35, None, False, OnToggle)
    lay.AddChild(btn)

    app.AddLayout(lay)

def OnToggle(v):
    app.ShowPopup(v)
 */
    
            