// ------------- HEADER SECTION ------------- 


/** # CreateButtonRoundO #
 * @abbrev bro
 * An outlined material round button
 * $$ bro = MUI.CreateButtonRoundO(text, width, height, color, backColor) $$ 
 * @param {str} text 
 * @param {num_frc} width 
 * @param {num_frc} height 
 * @param {str_col} color 
 * @param {str_col} backColor 
 * @returns obj
*/




// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** @extern AdjustColor */

/** @extern Animate */

/** @extern ClearFocus */

/** ### data
 * @prop
 * 
 * @returns obj
 */

                    
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
 * $$ bro.GetType() $$
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

/** @extern SetOnTouch */

/** @extern SetPadding */

/** @extern SetPosition */

/** @extern SetScale */

/** @extern SetSize */

/** ### SetStyle ###
 * 
 * $$ bro.SetStyle(clr1, clr2, radius, strokeClr, strokeWidth, shadow) $$
 * @param {str_col} clr1 
 * @param {str_col} clr2 
 * @param {num} radius 
 * @param {str_col} strokeClr 
 * @param {num} strokeWidth 
 * @param {num} shadow 
 */


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
    app.InitializeUIKit(color.lighten1)

    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")
    	
    	btn = MUI.CreateButtonRoundO("BUTTON", 0.35)
    	lay.AddChild(btn)

    	btn = MUI.CreateButtonRoundO("[fa-android] ANDROID", 0.35)
    	lay.AddChild(btn)

    	btn = MUI.CreateButtonRoundO("CUSTOM COLOR", 0.5, 0.1, MUI.colors.blue.blue)
    	lay.AddChild(btn)

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
    app.InitializeUIKit(color.lighten1)

    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")
    	
    	btn = MUI.CreateButtonRoundO("BUTTON", 0.35)
    	lay.AddChild(btn)

    	btn = MUI.CreateButtonRoundO("[fa-android] ANDROID", 0.35)
    	lay.AddChild(btn)

    	btn = MUI.CreateButtonRoundO("CUSTOM COLOR", 0.5, 0.1, MUI.colors.blue.blue)
    	lay.AddChild(btn)

    app.AddLayout(lay)
}
 */
    
            
    
/**
@sample Add Method
cfg.Light
cfg.MUI

function OnStart()
{
    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")
    
        btn1 = MUI.AddButtonRoundO(lay, "BUTTON 1", 0.35)
        btn2 = MUI.AddButtonRoundO(lay, "[fa-heart] BUTTON 2", 0.35)
        btn3 = MUI.AddButtonRoundO(lay, "BUTTON 3", 0.35, 0.1, MUI.colors.green.darken2)

    app.AddLayout(lay)
}
 */
    
            