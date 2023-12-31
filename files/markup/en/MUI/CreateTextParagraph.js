// ------------- HEADER SECTION ------------- 


/** # CreateTextParagraph #
 * @abbrev txp
 * Creates a paragraph text
 * $$ txp = MUI.CreateTextParagraph(text, width, height, options, color, fontWeight) $$ 
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
 * $$ txp.GetHtml() $$
 * @returns obj
 */


/** @extern GetLeft */

/** ### GetLineCount ###
 * 
 * $$ txp.GetLineCount() $$
 * @returns num_int
 */


/** ### GetLineStart ###
 * 
 * $$ txp.GetLineStart(line) $$
 * @param {num_int} line 
 * @returns num_int
 */


/** ### GetLineTop ###
 * 
 * $$ txp.GetLineTop(line) $$
 * @param {num_int} line 
 * @returns num
 */


/** ### GetMaxLines ###
 * 
 * $$ txp.GetMaxLines() $$
 * @returns num_int
 */


/** @extern GetParent */

/** @extern GetPosition */

/** @extern GetText */

/** @extern GetTextSize */

/** @extern GetTop */

/** ### GetType ###
 * 
 * $$ txp.GetType() $$
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
 * $$ txp.Log(msg, options) $$
 * @param {str} msg 
 * @param {str_com} options 
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
 * $$ txp.SetLog(maxLines) $$
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
@sample Paragraph-Sample
cfg.Light
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal, "Light")

    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")

        var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis nunc nec orci finibus blandit. Nam nec consectetur odio. Sed a erat ultrices lectus volutpat malesuada. Aliquam id dictum metus."
        
        p1 = MUI.AddText(lay, text, 0.9, null, "Multiline,Paragraph,Light")

        p2 = MUI.AddTextParagraph(lay, text, 0.9, null, "Multiline", null, "Light")
        
        p3 = MUI.CreateTextParagraph(text, 0.9, null, "Multiline", null, "Light")
        lay.AddChild(p3)

    app.AddLayout(lay)
}
 */
    
            
    
/**
@sample Python Paragraph-Sample
# cfg.Light, cfg.MUI

from native import app

def OnStart():
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal, "Light")

    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")

        text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis nunc nec orci finibus blandit. Nam nec consectetur odio. Sed a erat ultrices lectus volutpat malesuada. Aliquam id dictum metus."

        p1 = MUI.AddText(lay, text, 0.9, None, "Multiline,Paragraph,Light")

        p2 = MUI.AddTextParagraph(lay, text, 0.9, None, "Multiline", None, "Light")

        p3 = MUI.CreateTextParagraph(text, 0.9, None, "Multiline", None, "Light")
        lay.AddChild(p3)

    app.AddLayout(lay)
 */
    
            