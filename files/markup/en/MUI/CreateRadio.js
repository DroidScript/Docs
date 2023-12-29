// ------------- HEADER SECTION ------------- 


/** # CreateRadio #
 * @abbrev rd
 * @brief Creates a radio control. A radio control allows the user to select only one item in a list.
 * Creates a radio control by manipulation of the DroidScript's list control. A radio control allows the user to select only one item in a list. For selecting multiple items in a list, use checkbox.
 * $$ rd = MUI.CreateRadio(list, width, height, color) $$ 
 * @param {str_com} list strings
 * @param {num} width 
 * @param {num} height 
 * @param {str_col} color 
 * @returns obj
*/




// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### SetOnSelect ###
 * @brief Calls a function when the user selects an item in the list
 * Calls a function when the user selects an item in the list
 * $$ rd.SetOnSelect(callback) $$
 * @param {fnc_json} callback {"pNames":["name","index"],"pTypes":["str","num_int"]}
 */


/** ### CheckItemByIndex ###
 * Checks a corresponding item
 * $$ rd.CheckItemByIndex(index) $$
 * @param {num_int} index 
 */


/** ### GetCheckItem ###
 * Gets the checked item in the list
 * $$ rd.GetCheckItem() $$
 * @returns str-title,index
 */


/** @extern Animate */

/** @extern ClearFocus */

/** @extern Focus */

/** @extern GetAbsHeight */

/** @extern GetAbsWidth */

/** @extern GetHeight */

/** ### GetItem ###
 * 
 * $$ rd.GetItem(title) $$
 * @param {str} title 
 * @returns obj
 */


/** ### GetItemByIndex ###
 * 
 * $$ rd.GetItemByIndex(index) $$
 * @param {num} index 
 * @returns obj
 */


/** @extern GetLeft */

/** ### GetLength ###
 * 
 * $$ rd.GetLength() $$
 * @returns num_int
 */


/** ### GetList ###
 * 
 * $$ rd.GetList(delim) $$
 * @param {str} delim 
 * @returns obj
 */


/** @extern GetParent */

/** @extern GetPosition */

/** @extern GetTextSize */

/** @extern GetTop */

/** ### GetType ###
 * 
 * $$ rd.GetType() $$
 * @returns str-List
 */


/** @extern GetVisibility */

/** @extern GetWidth */

/** @extern Gone */

/** @extern Hide */

/** ### InsertItem ###
 * 
 * $$ rd.InsertItem(index, title, body, image) $$
 * @param {num} index 
 * @param {str} title 
 * @param {str} body 
 * @param {str_ptf} image 
 */


/** @extern IsEnabled */

/** @extern IsOverlap */

/** @extern IsVisible */

/** @extern Method */

/** ### RemoveAll ###
 * 
 * $$ rd.RemoveAll() $$
 */


/** ### RemoveItem ###
 * 
 * $$ rd.RemoveItem(title) $$
 * @param {str} title 
 */


/** ### RemoveItemByIndex ###
 * 
 * $$ rd.RemoveItemByIndex(index) $$
 * @param {num} index 
 */


/** ### ScrollToItem ###
 * 
 * $$ rd.ScrollToItem(title, body) $$
 * @param {str} title 
 * @param {str} body 
 */


/** ### ScrollToItemByIndex ###
 * 
 * $$ rd.ScrollToItemByIndex(index) $$
 * @param {num} index 
 */


/** ### SelectItem ###
 * 
 * $$ rd.SelectItem(title, body, scroll) $$
 * @param {str} title 
 * @param {str} body 
 * @param {?} scroll 
 */


/** ### SelectItemByIndex ###
 * 
 * $$ rd.SelectItemByIndex(index, scroll) $$
 * @param {num} index 
 * @param {?} scroll 
 */


/** @extern SetBackAlpha */

/** @extern SetBackColor */

/** @extern SetBackGradient */

/** @extern SetBackGradientRadial */

/** @extern SetBackground */

/** @extern SetColorFilter */

/** ### SetColumnWidths ###
 * 
 * $$ rd.SetColumnWidths(icon, title, body, mode) $$
 * @param {?} icon 
 * @param {str} title 
 * @param {str} body 
 * @param {?} mode 
 */


/** ### SetDivider ###
 * 
 * $$ rd.SetDivider(height, color) $$
 * @param {num} height 
 * @param {str_col} color 
 */


/** @extern SetEllipsize */

/** ### SetEllipsize1 ###
 * 
 * $$ rd.SetEllipsize1(mode) $$
 * @param {?} mode 
 */


/** ### SetEllipsize2 ###
 * 
 * $$ rd.SetEllipsize2(mode) $$
 * @param {?} mode 
 */


/** @extern SetEnabled */

/** @extern SetFontFile */

/** ### SetHiTextColor1 ###
 * 
 * $$ rd.SetHiTextColor1(clr) $$
 * @param {?} clr 
 */


/** ### SetHiTextColor2 ###
 * 
 * $$ rd.SetHiTextColor2(clr) $$
 * @param {?} clr 
 */


/** ### SetList ###
 * 
 * $$ rd.SetList(list, delim) $$
 * @param {?} list 
 * @param {str} delim 
 */


/** @extern SetMargins */

/** @extern SetOnLongTouch */

/** @extern SetOnTouch */

/** @extern SetPosition */

/** @extern SetScale */

/** @extern SetSize */

/** @extern SetTextColor */

/** ### SetTextColor1 ###
 * 
 * $$ rd.SetTextColor1(clr) $$
 * @param {?} clr 
 */


/** ### SetTextColor2 ###
 * 
 * $$ rd.SetTextColor2(clr) $$
 * @param {?} clr 
 */


/** ### SetTextMargins ###
 * 
 * $$ rd.SetTextMargins(left, top, right, bottom, mode, options) $$
 * @param {?} left 
 * @param {?} top 
 * @param {?} right 
 * @param {?} bottom 
 * @param {?} mode 
 * @param {str_com} options 
 */


/** @extern SetTextShadow */

/** ### SetTextShadow1 ###
 * 
 * $$ rd.SetTextShadow1(radius, dx, dy, color) $$
 * @param {num} radius 
 * @param {num} dx 
 * @param {num} dy 
 * @param {str_col} color 
 */


/** ### SetTextShadow2 ###
 * 
 * $$ rd.SetTextShadow2(radius, dx, dy, color) $$
 * @param {num} radius 
 * @param {num} dx 
 * @param {num} dy 
 * @param {str_col} color 
 */


/** @extern SetTextSize */

/** ### SetTextSize1 ###
 * 
 * $$ rd.SetTextSize1(size, mode) $$
 * @param {?} size 
 * @param {?} mode 
 */


/** ### SetTextSize2 ###
 * 
 * $$ rd.SetTextSize2(size, mode) $$
 * @param {?} size 
 * @param {?} mode 
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

        var list  = "Apple, Mango, Banana"
        rad = MUI.CreateRadio(list)
        lay.AddChild(rad)

    app.AddLayout(lay)
}
 */
    
            
    
/**
@sample With callback
cfg.Light
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

        var list  = "Apple, Mango, Banana"
        rad = MUI.CreateRadio(list)
        rad.SetOnTouch(OnTouch)
        lay.AddChild(rad)

    app.AddLayout(lay)
}

function OnTouch(name, index)
{
    app.ShowPopup(name+" : "+index)
}
 */
    
            
    
/**
@sample Python Basic
# cfg.Light, cfg.MUI

from native import app

def OnStart():
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

    list = "Apple, Mango, Banana"
    rad = MUI.CreateRadio(list)
    lay.AddChild(rad)

    app.AddLayout(lay)
 */
    
            
    
/**
@sample Python With callback
# cfg.Light, cfg.MUI

from native import app

def OnStart():
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

    list = "Apple, Mango, Banana"
    rad = MUI.CreateRadio(list)
    rad.SetOnTouch(OnTouch)
    lay.AddChild(rad)

    app.AddLayout(lay)

def OnTouch(name, index):
    app.ShowPopup(name + " : " + str(index))
 */
    
            