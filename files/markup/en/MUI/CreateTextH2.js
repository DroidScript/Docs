// ------------- HEADER SECTION ------------- 


/** # CreateTextH2 #
 * @abbrev txh
 * @brief Creates a heading text 2
 * Creates a heading text
 * $$ txh = MUI.CreateTextH2(text, width, height, options, color, fontWeight) $$ 
 * @param {str} text 
 * @param {num} width 
 * @param {num} height 
 * @param {str} options DS text options
 * @param {str_col} color 
 * @param {str} fontWeight Can be Thin|Light|Regular|Medium|Bold
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
 * $$ txh.GetHtml() $$
 * @returns obj
 */


/** @extern GetLeft */

/** ### GetLineCount ###
 * 
 * $$ txh.GetLineCount() $$
 * @returns num_int
 */


/** ### GetLineStart ###
 * 
 * $$ txh.GetLineStart(line) $$
 * @param {num_int} line 
 * @returns num_int
 */


/** ### GetLineTop ###
 * 
 * $$ txh.GetLineTop(line) $$
 * @param {num_int} line 
 * @returns num
 */


/** ### GetMaxLines ###
 * 
 * $$ txh.GetMaxLines() $$
 * @returns num_int
 */


/** @extern GetParent */

/** @extern GetPosition */

/** @extern GetText */

/** @extern GetTextSize */

/** @extern GetTop */

/** ### GetType ###
 * 
 * $$ txh.GetType() $$
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
 * $$ txh.Log(msg, options) $$
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
 * $$ txh.SetLog(maxLines) $$
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
@sample Sample
cfg.Light
cfg.MUI

function OnStart()
{
    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")

        h2 = MUI.AddText(lay, "Some Heading", 0.8, 0.2, "h2,Medium,Multiline")

        h2 = MUI.AddTextH2(lay, "Some Heading", 0.8, 0.2, "Multiline", null, "Medium")

        h2 = MUI.CreateTextH2("Some Heading", 0.8, 0.2, "Multiline", null, "Medium")
        lay.AddChild(h2)

    app.AddLayout(lay)
}
 */
    
            
    
/**
@sample Python Sample
# cfg.Light, cfg.MUI

from native import app
from native import cfg

def OnStart():
    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")

    h2 = MUI.AddText(lay, "Some Heading", 0.8, 0.2, "h2,Medium,Multiline")

    h2 = MUI.AddTextH2(lay, "Some Heading", 0.8, 0.2, "Multiline", None, "Medium")

    h2 = MUI.CreateTextH2("Some Heading", 0.8, 0.2, "Multiline", None, "Medium")
    lay.AddChild(h2)

    app.AddLayout(lay)
 */
    
            