// ------------- HEADER SECTION -------------


/** # CreateTextSecondary #
 * @abbrev txs
 * Creates a secondary text
 * $$ txs = MUI.CreateTextSecondary(text, width=-1, height=-1, options?, color?, fontWeight?) $$ 
 * @param {str} text 
 * @param {num} [width=-1] 
 * @param {num} [height=-1] 
 * @param {str} [options] DS text options
 * @param {str_col} [color] 
 * @param {str} [fontWeight] Thin|Light|Regular|Medium|Bold
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

/** @extern GetHtml */

/** @extern GetLeft */

/** @extern GetLineCount */

/** @extern GetLineStart */

/** @extern GetLineTop */

/** @extern GetMaxLines */

/** @extern GetParent */

/** @extern GetPosition */

/** @extern GetText */

/** @extern GetTextSize */

/** @extern GetTop */

/** ### GetType ###
 * 
 * $$ txs.GetType() $$
 * @returns str-Text
 */


/** @extern GetVisibility */

/** @extern GetWidth */

/** @extern Gone */

/** @extern Hide */

/** @extern IsEnabled */

/** @extern IsOverlap */

/** @extern IsVisible */

/** @extern Log */

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

/** @extern SetLog */

/** @extern SetMargins */

/** @extern SetOnLongTouch */

/** @extern SetOnTouch */

/** @extern SetOnTouchDown */

/** @extern SetOnTouchMove */

/** @extern SetOnTouchUp */

/** @extern SetPadding */

/** @extern SetPosition */

/** @extern SetScale */

/** @extern SetSize */

/** @extern SetText */

/** @extern SetTextColor */

/** @extern SetTextShadow */

/** @extern SetTextSize */

/** @extern SetTouchable */

/** @extern SetVisibility */

/** @extern Show */

/** @extern Tween */


// ------------- SAMPLES ------------- 


    
/**
@sample All Headings
cfg.Light
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal, "Light")

    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")

        var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."

        sec1 = MUI.AddText(lay, text, 0.9, null, "Secondary,Multiline,Light")

        sec2 = MUI.AddTextSecondary(lay, text, 0.9, null, "Multiline", null, "Light")

        sec3 = MUI.CreateTextSecondary(text, 0.9, null, "Multiline", null, "Light")
        lay.AddChild(sec3)

    app.AddLayout(lay)
}
 */
    
            
    
/**
@sample Python All Headings
from native import app

def OnStart():
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal, "Light")

    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")

    text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."

    sec1 = MUI.AddText(lay, text, 0.9, None, "Secondary,Multiline,Light")

    sec2 = MUI.AddTextSecondary(lay, text, 0.9, None, "Multiline", None, "Light")

    sec3 = MUI.CreateTextSecondary(text, 0.9, None, "Multiline", None, "Light")
    lay.AddChild(sec3)

    app.AddLayout(lay)
 */
    
            