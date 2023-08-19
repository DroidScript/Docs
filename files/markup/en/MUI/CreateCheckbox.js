// ------------- HEADER SECTION ------------- 


/** # CreateCheckbox #
 * @abbrev chc

 * Checkbox is a powerful control when you want the user to select multiple items in a group
 * $$ chc = MUI.CreateCheckbox(list, width, height, color) $$ 
 * @param {lst} list A comma separated string
 * @param {num_frc} width 
 * @param {num_frc} height 
 * @param {str_col} color 
 * @returns obj
*/




// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### SetOnTouch ###
 * Calls a function when the checkbox is click
 * $$ chc.SetOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["index","checked"],"pTypes":["num_int","bin"]}
 */


/** ### GetCheckItem ###
 * Get the check items in the list
 * $$ chc.GetCheckItem() $$
 * @returns lst-List of indexes for slected items
 */


/** ### CheckItemByIndex ###
 * Checks the corresponding item/items in the checkbox list
 * $$ chc.CheckItemByIndex(index) $$
 * @param {num_int} index You can also pass an array of indexes e.g. [1, 3]
 */


/** ### UncheckItemByIndex ###
 * Unchecks the corresponding item/items in the checkbox list
 * $$ chc.UncheckItemByIndex(index) $$
 * @param {num_int} index You can also pass an array of indexes e.g. [1, 3]
 */


/** @extern SetHeight */

/** @extern ClearFocus */

/** @extern Focus */

/** @extern GetAbsHeight */

/** @extern GetAbsWidth */

/** @extern GetHeight */

/** @extern GetLeft */

/** @extern GetParent */

/** @extern GetPosition */

/** @extern GetTop */

/** @extern GetType */

/** @extern GetVisibility */

/** @extern GetWidth */

/** @extern Gone */

/** @extern Hide */

/** @extern IsEnabled */

/** @extern IsOverlap */

/** @extern IsVisible */

/** @extern SetEnabled */

/** @extern SetMargins */

/** @extern SetPosition */

/** @extern SetVisibility */

/** @extern Show */

/** @extern Tween */


// ------------- SAMPLES ------------- 


    
/**
@sample Light
cfg.Light
cfg.MUI

function OnStart()
{
    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")
    	
    	lst = "Apple,Mango,Orange,Banana"
    	chk = MUI.CreateCheckbox(lst, 0.7)
    	lay.AddChild(chk)

    app.AddLayout(lay)
}
 */
    
            
    
/**
@sample Dark
cfg.Dark
cfg.MUI

function OnStart()
{
    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")
    	
    	lst = "Apple,Mango,Orange,Banana"
    	chk = MUI.CreateCheckbox(lst, 0.7)
    	chk.SetOnTouch(OnCheckBox)
    	lay.AddChild(chk)

    app.AddLayout(lay)
}

function OnCheckBox(index, value)
{
	app.ShowPopup(lst[index] + " is "+value)
}
 */
    
            