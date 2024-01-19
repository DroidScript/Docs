// ------------- HEADER SECTION -------------


/** # CreateTextJumbo #
 * @abbrev txj
 * Creates an extra large text
 * $$ txj = MUI.CreateTextJumbo(text, width=-1, height=-1, options?, color?) $$
 * @param {str} text
 * @param {num} [width=-1]
 * @param {num} [height=-1]
 * @param {str} [options] DS text options
 * @param {str_col} [color]
 * @returns obj
*/




// ------------- VISIBLE METHODS & PROPERTIES -------------


/** @extern AdjustColor */

/** @extern Animate */

/** @extern ClearFocus */

/** @extern Batch */

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
 * $$ txj.GetType() $$
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
@sample Sample
cfg.Light
cfg.MUI

function OnStart()
{
    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")

        jum = MUI.AddText(lay, "Some jumbo text", 0.8, 0.3, "Jumbo,Multiline")

        jum = MUI.AddTextJumbo(lay, "Some jumbo text", 0.8, 0.3, "Multiline", null, "Medium")

        jum = MUI.CreateTextJumbo("Some jumbo text", 0.8, 0.3, "Multiline", null, "Medium")
        lay.AddChild(jum)

    app.AddLayout(lay)
}
 */



/**
@sample Python Sample
# cfg.Light, cfg.MUI

from native import app

def OnStart():
    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")

    jum = MUI.AddText(lay, "Some jumbo text", 0.8, 0.3, "Jumbo,Multiline")

    jum = MUI.AddTextJumbo(lay, "Some jumbo text", 0.8, 0.3, "Multiline", None, "Medium")

    jum = MUI.CreateText("Some jumbo text", 0.8, 0.3, "Multiline", None, "Medium")
    lay.AddChild(jum)

    app.AddLayout(lay)
 */
