// ------------- HEADER SECTION -------------


/** # CreateList #
 * @abbrev lst
 * A manipulation of the DroidScript list object.
 * $$ lst = MUI.CreateList(list, width=-1, height=-1, options?) $$
 * @param {str} list
 * @param {num} [width=-1]
 * @param {num} [height=-1]
 * @param {str} [options]
 * @returns obj
*/




// ------------- VISIBLE METHODS & PROPERTIES -------------


/** ### AddItem ###
 *
 * $$ lst.AddItem(title, body?, image?) $$
 * @param {str} title
 * @param {str} [body]
 * @param {str_ptf} [image]
 */


/** @extern AdjustColor */

/** @extern Animate */

/** @extern ClearFocus */

/** @extern Focus */

/** @extern GetAbsHeight */

/** @extern GetAbsWidth */

/** @extern GetHeight */

/** ### GetItem ###
 *
 * $$ lst.GetItem(title) $$
 * @param {str} title
 * @returns obj
 */


/** ### GetItemByIndex ###
 *
 * $$ lst.GetItemByIndex(index) $$
 * @param {num} index
 * @returns obj
 */


/** @extern GetLeft */

/** ### GetLength ###
 *
 * $$ lst.GetLength() $$
 * @returns num_int
 */


/** ### GetList ###
 *
 * $$ lst.GetList(delim) $$
 * @param {str} delim
 * @returns obj
 */


/** @extern GetParent */

/** @extern GetPosition */

/** @extern GetTextSize */

/** @extern GetTop */

/** ### GetType ###
 *
 * $$ lst.GetType() $$
 * @returns str-List
 */


/** @extern GetVisibility */

/** @extern GetWidth */

/** @extern Gone */

/** @extern Hide */

/** ### InsertItem ###
 *
 * $$ lst.InsertItem(index, title, body?, image?) $$
 * @param {num} index
 * @param {str} title
 * @param {str} [body]
 * @param {str_ptf} [image]
 */


/** @extern IsEnabled */

/** @extern IsOverlap */

/** @extern IsVisible */

/** @extern Method */

/** ### RemoveAll ###
 *
 * $$ lst.RemoveAll() $$
 */


/** ### RemoveItem ###
 *
 * $$ lst.RemoveItem(title) $$
 * @param {str} title
 */


/** ### RemoveItemByIndex ###
 *
 * $$ lst.RemoveItemByIndex(index) $$
 * @param {num} index
 */


/** ### ScrollToItem ###
 *
 * $$ lst.ScrollToItem(title, body?) $$
 * @param {str} title
 * @param {str} [body]
 */


/** ### ScrollToItemByIndex ###
 *
 * $$ lst.ScrollToItemByIndex(index) $$
 * @param {num} index
 */


/** ### SelectItem ###
 *
 * $$ lst.SelectItem(title, body?, scroll=false) $$
 * @param {str} title
 * @param {str} [body]
 * @param {bin} [scroll=false]
 */


/** ### SelectItemByIndex ###
 *
 * $$ lst.SelectItemByIndex(index, scroll?) $$
 * @param {num} index
 * @param {bin} [scroll]
 */


/** @extern SetBackAlpha */

/** @extern Resize */

/** @extern SetBackColor */

/** @extern SetBackGradient */

/** @extern SetBackGradientRadial */

/** @extern SetBackground */

/** @extern SetColorFilter */

/** ### SetColumnWidths ###
 *
 * $$ lst.SetColumnWidths(icon, title?, body?, mode?) $$
 * @param {?} icon
 * @param {str} [title]
 * @param {str} [body]
 * @param {?} [mode]
 */


/** ### SetDivider ###
 *
 * $$ lst.SetDivider(height, color?) $$
 * @param {num} height
 * @param {str_col} [color]
 */


/** @extern SetEllipsize */

/** ### SetEllipsize1 ###
 *
 * $$ lst.SetEllipsize1(mode) $$
 * @param {?} mode
 */


/** ### SetEllipsize2 ###
 *
 * $$ lst.SetEllipsize2(mode) $$
 * @param {?} mode
 */


/** @extern SetEnabled */

/** @extern SetFontFile */

/** ### SetHiTextColor1 ###
 *
 * $$ lst.SetHiTextColor1(clr) $$
 * @param {?} clr
 */


/** ### SetHiTextColor2 ###
 *
 * $$ lst.SetHiTextColor2(clr) $$
 * @param {?} clr
 */


/** ### SetIconMargins ###
 *
 * $$ lst.SetIconMargins(left=0, top=0, right=0, bottom=0, mode='px') $$
 * @param {?} [left=0]
 * @param {?} [top=0]
 * @param {?} [right=0]
 * @param {?} [bottom=0]
 * @param {?} [mode='px']
 */


/** ### SetIconSize ###
 *
 * $$ lst.SetIconSize(size, mode?) $$
 * @param {?} size
 * @param {?} [mode]
 */


/** ### SetItem ###
 *
 * $$ lst.SetItem(title, newTitle, newBody?, newImage?) $$
 * @param {str} title
 * @param {?} newTitle
 * @param {num} [newBody]
 * @param {?} [newImage]
 */


/** ### SetItemByIndex ###
 *
 * $$ lst.SetItemByIndex(index, newTitle, newBody?, newImage?) $$
 * @param {num} index
 * @param {?} newTitle
 * @param {num} [newBody]
 * @param {?} [newImage]
 */


/** ### SetList ###
 *
 * $$ lst.SetList(list, delim=',') $$
 * @param {?} list
 * @param {str} [delim=',']
 */


/** @extern SetMargins */

/** @extern SetOnLongTouch */

/** @extern SetOnTouch */

/** @extern SetPadding */

/** @extern SetPosition */

/** @extern SetScale */

/** @extern SetSize */

/** @extern SetTextColor */

/** ### SetTextColor1 ###
 *
 * $$ lst.SetTextColor1(clr) $$
 * @param {str_col} clr
 */


/** ### SetTextColor2 ###
 *
 * $$ lst.SetTextColor2(clr) $$
 * @param {str_col} clr
 */


/** ### SetTextMargins ###
 *
 * $$ lst.SetTextMargins(left=0, top=0, right=0, bottom=0, mode?, options?) $$
 * @param {?} [left=0]
 * @param {?} [top=0]
 * @param {?} [right=0]
 * @param {?} [bottom=0]
 * @param {?} [mode]
 * @param {str_com} [options]
 */


/** @extern SetTextShadow */

/** ### SetTextShadow1 ###
 *
 * $$ lst.SetTextShadow1(radius, dx?, dy?, color?) $$
 * @param {num} radius
 * @param {num} [dx]
 * @param {num} [dy]
 * @param {str_col} [color]
 */


/** ### SetTextShadow2 ###
 *
 * $$ lst.SetTextShadow2(radius, dx?, dy?, color?) $$
 * @param {num} radius
 * @param {num} [dx]
 * @param {num} [dy]
 * @param {str_col} [color]
 */


/** @extern SetTextSize */

/** ### SetTextSize1 ###
 *
 * $$ lst.SetTextSize1(size, mode?) $$
 * @param {?} size
 * @param {?} [mode]
 */


/** ### SetTextSize2 ###
 *
 * $$ lst.SetTextSize2(size, mode?) $$
 * @param {?} size
 * @param {?} [mode]
 */


/** @extern SetVisibility */

/** @extern Show */

/** @extern Tween */


// ------------- SAMPLES -------------



/**
@sample Basic
cfg.Light
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

        var list = ["Downloads", "Images", "Videos"]
        lst = MUI.CreateList(list, 0.95, 0.4)
        lst.SetOnTouch(OnTouch)
        lay.AddChild(lst)

    app.AddLayout(lay)
}

function OnTouch(title)
{
    app.ShowPopup(title)
}
 */



/**
@sample With-Icon
cfg.Light
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "FillXY")

        var list = ["Downloads:[fa-cloud-download]", "Images:[fa-image]", "Videos:[fa-youtube-play]"]
        lst = MUI.CreateList(list, 0.95, 0.4)
        lst.SetOnTouch(OnTouch)
        lay.AddChild(lst)

    app.AddLayout(lay)
}

function OnTouch(title)
{
    app.ShowPopup(title)
}
 */



/**
@sample Dark With Body & Icon
cfg.Dark
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

        var list = [
            "Downloads:Some body text:[fa-cloud-download]",
            "Images:Some body text:[fa-image]",
            "Videos:Some body text:[fa-youtube-play]"
        ]
        lst = MUI.CreateList(list, 0.95, 0.4)
        lst.SetOnTouch(OnTouch)
        lay.AddChild(lst)

    app.AddLayout(lay)
}

function OnTouch(title, body)
{
    app.ShowPopup(title+" : "+body)
}
 */



/**
@sample Python Basic
# cfg.Light, cfg.MUI

from native import app
from native import cfg

def OnStart():
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

    list = ["Downloads", "Images", "Videos"]
    lst = MUI.CreateList(list, 0.95, 0.4)
    lst.SetOnTouch(OnTouch)
    lay.AddChild(lst)

    app.AddLayout(lay)

def OnTouch(title):
    app.ShowPopup(title)
 */



/**
@sample Python With-Icon
# cfg.Light, cfg.MUI

from native import app
from native import cfg

def OnStart():
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "FillXY")

    list = ["Downloads:[fa-cloud-download]", "Images:[fa-image]", "Videos:[fa-youtube-play]"]
    lst = MUI.CreateList(list, 0.95, 0.4)
    lst.SetOnTouch(OnTouch)
    lay.AddChild(lst)

    app.AddLayout(lay)

def OnTouch(title):
    app.ShowPopup(title)
 */



/**
@sample Python Dark With Body & Icon
# cfg.Dark, cfg.MUI

from native import app
from native import cfg

def OnStart():
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

    list = [
        "Downloads:Some body text:[fa-cloud-download]",
        "Images:Some body text:[fa-image]",
        "Videos:Some body text:[fa-youtube-play]"
    ]
    lst = MUI.CreateList(list, 0.95, 0.4)
    lst.SetOnTouch(OnTouch)
    lay.AddChild(lst)

    app.AddLayout(lay)

def OnTouch(title, body):
    app.ShowPopup(title+" : "+body)
 */
