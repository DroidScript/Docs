
/** # CreateButtonRound #
 * @abbrev btr

 * A round material button
 * $$ btr = MUI.CreateButtonRound(text, width, height, color, txtcolor) $$ 
 * @param {str} text 
 * @param {num_frc} width 
 * @param {num_frc} height 
 * @param {str_col} color 
 * @param {str_col} txtcolor 
 * @returns obj
*/




// -------- VISIBLE METHODS & PROPERTIES --------- 


/**
 * @extern AdjustColor
 */

/**
 * @extern Animate
 */

/**
 * @extern ClearFocus
 */

/** ### data
 * @prop
 * 
 * @returns obj
 */

                    
/**
 * @extern Focus
 */

/**
 * @extern GetAbsHeight
 */

/**
 * @extern GetAbsWidth
 */

/**
 * @extern GetHeight
 */

/**
 * @extern GetLeft
 */

/**
 * @extern GetParent
 */

/**
 * @extern GetPosition
 */

/**
 * @extern GetText
 */

/**
 * @extern GetTextSize
 */

/**
 * @extern GetTop
 */

/** ### GetType ###
 * 
 * $$ btr.GetType() $$
 * @returns str-Button
 */


/**
 * @extern GetVisibility
 */

/**
 * @extern GetWidth
 */

/**
 * @extern Gone
 */

/**
 * @extern Hide
 */

/**
 * @extern IsEnabled
 */

/**
 * @extern IsOverlap
 */

/**
 * @extern IsVisible
 */

/**
 * @extern Method
 */

/**
 * @extern SetBackAlpha
 */

/**
 * @extern SetBackColor
 */

/**
 * @extern SetBackGradient
 */

/**
 * @extern SetBackGradientRadial
 */

/**
 * @extern SetBackground
 */

/**
 * @extern SetColorFilter
 */

/**
 * @extern SetEllipsize
 */

/**
 * @extern SetEnabled
 */

/**
 * @extern SetFontFile
 */

/**
 * @extern SetHtml
 */

/**
 * @extern SetMargins
 */

/**
 * @extern SetOnLongTouch
 */

/**
 * @extern SetOnTouch
 */

/**
 * @extern SetPadding
 */

/**
 * @extern SetPosition
 */

/**
 * @extern SetScale
 */

/**
 * @extern SetSize
 */

/** ### SetStyle ###
 * 
 * $$ btr.SetStyle(clr1, clr2, radius, strokeClr, strokeWidth, shadow) $$
 * @param {str_col} clr1 
 * @param {str_col} clr2 
 * @param {num} radius 
 * @param {str_col} strokeClr 
 * @param {num} strokeWidth 
 * @param {num} shadow 
 */


/**
 * @extern SetText
 */

/**
 * @extern SetTextColor
 */

/**
 * @extern SetTextShadow
 */

/**
 * @extern SetTextSize
 */

/**
 * @extern SetVisibility
 */

/**
 * @extern Show
 */

/**
 * @extern Tween
 */

/**
 * @extern SetColor
 */
// CreateButtonRound.txt --> All the sample codes

/** @Sample
<sample Light>
cfg.Light
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.lighten1)

    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")
    	
    	btn = MUI.CreateButtonRound("BUTTON", 0.35)
    	lay.AddChild(btn)

    	btn = MUI.CreateButtonRound("[fa-android] ANDROID", 0.35)
    	lay.AddChild(btn)

    	btn = MUI.CreateButtonRound("CUSTOM COLOR", 0.5, 0.1, MUI.colors.blue.blue)
    	lay.AddChild(btn)

    app.AddLayout(lay)
}
</sample>

<sample Dark>
cfg.Dark
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.lighten1)

    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")
    	
    	btn = MUI.CreateButtonRound("BUTTON", 0.35)
    	lay.AddChild(btn)

    	btn = MUI.CreateButtonRound("[fa-android] ANDROID", 0.35)
    	lay.AddChild(btn)

    	btn = MUI.CreateButtonRound("CUSTOM COLOR", 0.5, 0.1, MUI.colors.blue.blue)
    	lay.AddChild(btn)

    app.AddLayout(lay)
}
</sample>

<sample Add Method>
cfg.Light
cfg.MUI

function OnStart()
{
    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")
    
        btn1 = MUI.AddButtonRound(lay, "BUTTON 1", 0.35)
        btn2 = MUI.AddButtonRound(lay, "[fa-heart] BUTTON 2", 0.35)
        btn3 = MUI.AddButtonRound(lay, "BUTTON 3", 0.35, 0.1, MUI.colors.green.darken2)

    app.AddLayout(lay)
}
</sample>
 */

