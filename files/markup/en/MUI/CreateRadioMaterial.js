// ------------- HEADER SECTION -------------


/** # CreateRadioMaterial #
 * @abbrev rdm
 * Creates a material radio control. A radio control allows the user to select only one item in a list. For selecting multiple items in a list, use checkbox.
 * $$ rdm = MUI.CreateRadioMaterial(list, width, height, orientation, color, backColor) $$ 
 * @param {lst} list A comma separated strings
 * @param {num} width 
 * @param {num} height 
 * @param {str} orientation Vertical|Horizontal
 * @param {str_col} color 
 * @param {str_col} backColor 
 * @returns obj
*/




// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### SetOnSelect ###
 * @brief Calls a function when the user selects an item in the list
 * Calls a function when the user selects an item in the list
 * $$ rdm.SetOnSelect(callback) $$
 * @param {fnc_json} callback {"pNames":["name","index"],"pTypes":["str","num_int"]}
 */


/** ### CheckItemByIndex ###
 * Checks a corresponding item
 * $$ rdm.CheckItemByIndex(index) $$
 * @param {num_int} index 
 */


/** ### GetCheckItem ###
 * Gets the checked item in the list
 * $$ rdm.GetCheckItem() $$
 * @returns str-title,index
 */


/** @extern GetVisibility */

/** @extern Hide */

/** @extern SetMargins */

/** @extern SetPosition */

/** @extern Show */

/** ### Toggle ###
 * Show or Hide the list
 * $$ rdm.Toggle() $$
 */


/** @extern Animate */

/** @extern ClearFocus */

/** @extern Focus */

/** @extern GetAbsHeight */

/** @extern GetAbsWidth */

/** @extern GetHeight */

/** ### GetItem ###
 * Returns the corresponding item
 * $$ rdm.GetItem(index) $$
 * @param {num_int} index 
 * @returns str-title
 */


/** @extern GetLeft */

/** ### GetList ###
 * Gets the list
 * $$ rdm.GetList() $$
 * @returns lst-Array of titles
 */


/** @extern GetParent */

/** @extern GetPosition */

/** @extern GetTop */

/** ### GetType ###
 * 
 * $$ rdm.GetType() $$
 * @returns str-Radio
 */


/** @extern GetWidth */

/** @extern Gone */

/** @extern IsEnabled */

/** @extern IsOverlap */

/** @extern IsVisible */

/** @extern SetEnabled */

/** @extern SetOnLongTouch */

/** @extern SetScale */

/** @extern SetSize */

/** @extern SetVisibility */

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

        var list  = "Apps, Games, Movies, Books"
        rad = MUI.CreateRadioMaterial(list)
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

        var list  = "Apps, Games, Movies, Books"
        rad = MUI.CreateRadioMaterial(list, 1, null, "Vertical")
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
@sample Horizontal
cfg.Dark
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

        var list  = "Apps, Games, Movies, Books"
        rad = MUI.CreateRadioMaterial(list, 1, null, "Horizontal")
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

    list = "Apps, Games, Movies, Books"
    rad = MUI.CreateRadioMaterial(list)
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

    list = "Apps, Games, Movies, Books"
    rad = MUI.CreateRadioMaterial(list, 1, None, "Vertical")
    rad.SetOnTouch(OnTouch)
    lay.AddChild(rad)

    app.AddLayout(lay)

def OnTouch(name, index):
    app.ShowPopup(name + " : " + str(index))
 */
    
            
    
/**
@sample Python Horizontal
# cfg.Dark, cfg.MUI

from native import app

def OnStart():
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

    list = "Apps, Games, Movies, Books"
    rad = MUI.CreateRadioMaterial(list, 1, None, "Horizontal")
    rad.SetOnTouch(OnTouch)
    lay.AddChild(rad)

    app.AddLayout(lay)

def OnTouch(name, index):
    app.ShowPopup(name + " : " + str(index))
 */
    
            