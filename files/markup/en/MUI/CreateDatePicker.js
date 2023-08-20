// ------------- HEADER SECTION ------------- 


/** # CreateDatePicker #
 * @abbrev dtp

 * Creates a materialize date picker dialog.
 * $$ dtp = MUI.CreateDatePicker(yyyy, mm, dd, color) $$ 
 * @param {num_int} yyyy Full year
 * @param {num_int} mm [0-11]
 * @param {num_int} dd [1-31]
 * @param {str_col} color 
 * @returns obj
*/




// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### SetOnSelect ###
 * Calls a function when a user click the OK button
 * $$ dtp.SetOnSelect(callback) $$
 * @param {fnc_json} callback {"pNames":["yyyy-mm-dd","yyyy","mm","dd"],"pTypes":["str","num_int","num_int","num_int"]}
 */


/** @extern Show */

/** @extern Hide */

/** @extern GetVisibility */

/** @extern IsVisible */

/** @extern GetAbsHeight */

/** @extern GetAbsWidth */

/** @extern GetHeight */

/** @extern GetLeft */

/** @extern GetParent */

/** @extern GetPosition */

/** @extern GetTop */

/** @extern GetWidth */

/** @extern IsEnabled */

/** @extern IsOverlap */

/** @extern SetTextEdit */


// ------------- SAMPLES ------------- 


    
/**
@sample Default
cfg.Light
cfg.MUI

function OnStart()
{
    colors = MUI.colors.teal
    app.InitializeUIKit(colors.teal)

    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

        btn = MUI.CreateButtonRaised("SHOW PICKER", 0.5)
        btn.SetOnTouch(ShowDatePicker)
        lay.AddChild(btn)

    app.AddLayout(lay)

    pck = MUI.CreateDatePicker()
    pck.SetOnSelect(OnSelect)
}

function ShowDatePicker()
{
    pck.Show()
}

function OnSelect(date, yyyy, mm, dd)
{
    app.ShowPopup(date)
}
 */
    
            
    
/**
@sample With Custom Date
cfg.Dark
cfg.MUI

function OnStart()
{
    colors = MUI.colors.teal
    app.InitializeUIKit(colors.teal)

    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

        btn = MUI.CreateButtonRaised("SHOW PICKER", 0.5)
        btn.SetOnTouch(ShowDatePicker)
        lay.AddChild(btn)

    app.AddLayout(lay)

    //September 1, 2020
    pck = MUI.CreateDatePicker(2020, 8, 1)
    pck.SetOnSelect(OnSelect)
}

function ShowDatePicker()
{
    pck.Show()
}

function OnSelect(date, yyyy, mm, dd)
{
    app.ShowPopup(date)
}
 */
    
            