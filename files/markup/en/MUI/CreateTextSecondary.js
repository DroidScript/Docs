// ------------- HEADER SECTION ------------- 


/** # CreateTextSecondary #
 * @abbrev txs
 * Creates a secondary text
 * $$ txs = MUI.CreateTextSecondary(text, width, height, options, color, fontWeight) $$ 
 * @param {str} text 
 * @param {num} width 
 * @param {num} height 
 * @param {str} options DS text options
 * @param {str_col} color 
 * @param {str} fontWeight Thin|Light|Regular|Medium|Bold
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

/** ### GetHtml ###
 * 
 * $$ txs.GetHtml() $$
 * @returns obj
 */


/** @extern GetLeft */

/** ### GetLineCount ###
 * 
 * $$ txs.GetLineCount() $$
 * @returns num_int
 */


/** ### GetLineStart ###
 * 
 * $$ txs.GetLineStart(line) $$
 * @param {num_int} line 
 * @returns num_int
 */


/** ### GetLineTop ###
 * 
 * $$ txs.GetLineTop(line) $$
 * @param {num_int} line 
 * @returns num
 */


/** ### GetMaxLines ###
 * 
 * $$ txs.GetMaxLines() $$
 * @returns num_int
 */


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

/** ### Log ###
 * 
 * $$ txs.Log(msg, options) $$
 * @param {str} msg 
 * @param {str_com} options 
 */


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

/** ### SetLog ###
 * 
 * $$ txs.SetLog(maxLines) $$
 * @param {num_int} maxLines 
 */


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
    
            