// ------------- HEADER SECTION -------------


/** # CreateTextH6 #
 * @abbrev txh
 * Creates a heading text 6
 * $$ txh = MUI.CreateTextH6(text, width=-1, height=-1, options?, color?, fontWeight?) $$ 
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
 * $$ txh.Log(msg, options?) $$
 * @param {str} msg 
 * @param {str_com} [options] 
 */


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

        h6 = MUI.AddText(lay, "Some Heading", 0.8, 0.2, "h6,Medium,Multiline")

        h6 = MUI.AddTextH6(lay, "Some Heading", 0.8, 0.2, "Multiline", null, "Medium")

        h6 = MUI.CreateTextH6("Some Heading", 0.8, 0.2, "Multiline", null, "Medium")
        lay.AddChild(h6)

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

    h6 = MUI.AddText(lay, "Some Heading", 0.8, 0.2, "h6,Medium,Multiline")

    h6 = MUI.AddTextH6(lay, "Some Heading", 0.8, 0.2, "Multiline", None, "Medium")

    h6 = MUI.CreateTextH6("Some Heading", 0.8, 0.2, "Multiline", None, "Medium")
    lay.AddChild(h6)

    app.AddLayout(lay)
 */
    
            