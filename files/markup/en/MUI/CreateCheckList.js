// ------------- HEADER SECTION ------------- 


/** # CreateCheckList #
 * @abbrev chl
 * Check list is a dialog type checkbox list. Let the user select items in a nice popup
 * $$ chl = MUI.CreateCheckList(title, list, color, bottom) $$ 
 * @param {str} title 
 * @param {lst} list An array of objects of the form {name: string, check: boolean}
 * @param {str_col} color 
 * @param {bin} bottom 
 * @returns obj
*/




// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### SetOnSubmit ###
 * Calls a function when the checklist is submitted
 * $$ chl.SetOnSubmit(callback) $$
 * @param {fnc_json} callback {"pNames":["list"],"pTypes":["lst"]}
 */


/** @extern Show */

/** @extern SetHeight */

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

/** @extern SetTextEdit */


// ------------- SAMPLES ------------- 


    
/**
@sample Light
cfg.Light
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")

        btn = MUI.CreateButtonRaised("SHOW CHECKLIST", 0.6)
        btn.SetOnTouch(ShowCheckList)
        lay.AddChild(btn)
    
    app.AddLayout(lay)

    lst = [
        {name: "Apple", check: false},
        {name: "Mango", check: true},
        {name: "Orange", check: true},
        {name: "Banana"}
    ]
    chk = MUI.CreateCheckList("Choose a fruit", lst)
    chk.SetOnSubmit(OnSubmit)
}

function ShowCheckList()
{
    chk.Show()
}

function OnSubmit(lst)
{
    app.ShowPopup(JSON.stringify(lst))   
}
 */
    
            
    
/**
@sample Dark, Bottom
cfg.Dark
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")
        
        btn = MUI.CreateButtonRaised("SHOW CHECKLIST", 0.6)
        btn.SetOnTouch(ShowCheckList)
        lay.AddChild(btn)

    app.AddLayout(lay)

    lst = [
        {name: "Apple", check: false},
        {name: "Mango", check: true},
        {name: "Orange", check: true},
        {name: "Banana"}
    ]
    chk = MUI.CreateCheckList("Choose a fruit", lst, null, true)
    chk.SetOnSubmit(OnSubmit)
}

function ShowCheckList()
{
    chk.Show()
}

function OnSubmit(lst)
{
    app.ShowPopup(JSON.stringify(lst))   
}
 */
    
            