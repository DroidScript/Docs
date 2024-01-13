// ------------- HEADER SECTION -------------


/** # CreateMenu #
 * @abbrev mn
 * @brief Creates a simple menu
 * A simple MUI implementation of material design menu.
 * $$ mn = MUI.CreateMenu(list, width?, height?, position?) $$ 
 * @param {str_com} list list
 * @param {num_frc} [width] 
 * @param {num_frc} [height] 
 * @param {str} [position] Top,Left|Top,Right|Bottom,Left|Bottom,Right
 * @returns obj
*/




// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### SetOnSelect ###
 * Calls a function when item is click
 * $$ mn.SetOnSelect(callback) $$
 * @param {fnc_json} callback {"pNames":["title","index"],"pTypes":["str","num_int"]}
 */


/** ### SetList ###
 * Set a new list of options
 * $$ mn.SetList(list) $$
 * @param {lst} list A comma separated options
 */


/** @extern Show */

/** @extern Hide */

/** @extern GetVisibility */

/** @extern IsVisible */

/** @extern SetEnabled */

/** @extern ClearFocus */

/** @extern Focus */

/** @extern GetAbsHeight */

/** @extern GetAbsWidth */

/** @extern GetHeight */

/** @extern GetLeft */

/** @extern GetParent */

/** @extern GetPosition */

/** @extern GetTop */

/** @extern GetWidth */

/** @extern Gone */

/** @extern IsEnabled */

/** @extern IsOverlap */

/** @extern SetVisibility */


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

        btn = MUI.CreateButtonRaised("SHOW MENU", 0.35)
        btn.SetOnTouch(ShowMenu)
        lay.AddChild(btn)

    app.AddLayout(lay)

    var list = "Find, Edit, Share, Settings, About"
    lst = MUI.CreateMenu(list, null, null, "Top, Right")
    lst.SetOnSelect(OnSelect)
}

function ShowMenu()
{
    lst.Show()
}

function OnSelect(choice)
{
    app.ShowPopup(choice)
}
 */
    
            
    
/**
@sample Dark & Bottom,Right
cfg.Dark
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

        btn = MUI.CreateButtonRaised("SHOW MENU", 0.35)
        btn.SetOnTouch(ShowMenu)
        lay.AddChild(btn)

    app.AddLayout(lay)

    var list = "Find, Edit, Share, Settings, About"
    lst = MUI.CreateMenu(list, null, null, "Bottom, Right")
    lst.SetOnSelect(OnSelect)
}

function ShowMenu()
{
    lst.Show()
}

function OnSelect(choice)
{
    app.ShowPopup(choice)
}
 */
    
            
    
/**
@sample Python Basic
# cfg.Light, cfg.MUI

from native import app
from native import cfg

def OnStart():
    global lst
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

    btn = MUI.CreateButtonRaised("SHOW MENU", 0.35)
    btn.SetOnTouch(ShowMenu)
    lay.AddChild(btn)

    app.AddLayout(lay)

    list = "Find, Edit, Share, Settings, About"
    lst = MUI.CreateMenu(list, None, None, "Top, Right")
    lst.SetOnSelect(OnSelect)

def ShowMenu():
    lst.Show()

def OnSelect(choice, index):
    app.ShowPopup(choice)
 */
    
            
    
/**
@sample Python Dark & Bottom,Right
# cfg.Dark, cfg.MUI

from native import app
from native import cfg

def OnStart():
    global lst
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

    btn = MUI.CreateButtonRaised("SHOW MENU", 0.35)
    btn.SetOnTouch(ShowMenu)
    lay.AddChild(btn)

    app.AddLayout(lay)

    list = "Find, Edit, Share, Settings, About"
    lst = MUI.CreateMenu(list, None, None, "Bottom, Right")
    lst.SetOnSelect(OnSelect)

def ShowMenu():
    lst.Show()

def OnSelect(choice, index):
    app.ShowPopup(choice)
 */
    
            