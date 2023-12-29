// ------------- HEADER SECTION ------------- 


/** # CreateTextH1 #
 * @abbrev txh
 * Creates a heading text 1
 * $$ txh = MUI.CreateTextH1(text, width, height, options, color, fontWeight) $$ 
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

        h1 = MUI.AddText(lay, "Some Heading", 0.8, 0.2, "h1,Medium,Multiline")

        h1 = MUI.AddTextH1(lay, "Some Heading", 0.8, 0.2, "Multiline", null, "Medium")

        h1 = MUI.CreateTextH1("Some Heading", 0.8, 0.2, "Multiline", null, "Medium")
        lay.AddChild(h1)

    app.AddLayout(lay)
}
 */
    
            
    
/**
@sample Python Sample
# cfg.Light, cfg.MUI

from native import app

def OnStart():
    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")

    h1 = MUI.AddText(lay, "Some Heading", 0.8, 0.2, "h1,Medium,Multiline")

    h1 = MUI.AddTextH1(lay, "Some Heading", 0.8, 0.2, "Multiline", None, "Medium")

    h1 = MUI.CreateText("Some Heading", 0.8, 0.2, "Multiline", None, "Medium")
    lay.AddChild(h1)

    app.AddLayout(lay)
 */
    
            