
/** # CreateButtonToggle #
 * @abbrev btt

 * 
 * $$ btt = MUI.CreateButtonToggle(text, width, height, value, callback, color, backColor) $$ 
 * @param {str} text 
 * @param {num_frc} width 
 * @param {num_frc} height 
 * @param {bin} value 
 * @param {str_col} color 
 * @param {str_col} backColor 
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
 * $$ btt.GetType() $$
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
 * $$ btt.SetStyle(clr1, clr2, radius, strokeClr, strokeWidth, shadow) $$
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
// CreateButtonToggle.txt --> All the sample codes

/** @Sample
<sample Light>
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
</sample>
 */

