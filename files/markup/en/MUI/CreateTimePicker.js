
/** # CreateTimePicker #
 * @abbrev tmp

 * Creates a material design time picker.
 * $$ tmp = MUI.CreateTimePicker(hour, minute, color) $$ 
 * @param {num} hour [0
 * @param {num} minute 0
 * @param {str_col} color 
 * @returns obj
*/




// -------- VISIBLE METHODS & PROPERTIES --------- 


/** ### SetOnSelect ###
 * Calls a function when the user selects a time.
 * $$ tmp.SetOnSelect(callback) $$
 * @param {fnc_json} callback {"pNames":["hh:mm AM|PM","hour","minute","pos"],"pTypes":["str","num_int-[0 to 24]","num_int-[0 to 59]","str-AM|PM"]}
 */


/**
 * @extern Show
 */

/**
 * @extern Hide
 */

/**
 * @extern GetVisibility
 */

/**
 * @extern IsVisible
 */

/**
 * @extern GetAbsHeight
 */

/**
 * @extern GetAbsWidth
 */

/**
 * @extern GetHeight
 */

/**
 * @extern GetLeft
 */

/**
 * @extern GetParent
 */

/**
 * @extern GetPosition
 */

/**
 * @extern GetTop
 */

/**
 * @extern GetWidth
 */

/**
 * @extern IsEnabled
 */

/**
 * @extern IsOverlap
 */

/**
 * @extern SetTextEdit
 */
// CreateTimePicker.txt --> All the sample codes

/** @Sample
<sample Default Time>
cfg.Light
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

        btn = MUI.CreateButtonRaised("SHOW PICKER")
        btn.SetOnTouch(ShowPicker)
        lay.AddChild(btn)

    app.AddLayout(lay)

    tmp = MUI.CreateTimePicker()
    tmp.SetOnSelect(OnSelect)
}

function ShowPicker()
{
    tmp.Show()
}

function OnSelect(time, hh, mm, pos) 
{
    app.ShowPopup(hh+":"+mm+":"+pos)
}
</sample>



<sample Custom Time>
cfg.Dark
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

        btn = MUI.CreateButtonRaised("SHOW PICKER")
        btn.SetOnTouch(ShowPicker)
        lay.AddChild(btn)

    app.AddLayout(lay)

    tmp = MUI.CreateTimePicker(13, 24, MUI.colors.deepOrange.deepOrange)
    tmp.SetOnSelect(OnSelect)
}

function ShowPicker()
{
    tmp.Show()
}

function OnSelect(time, hh, mm, pos) 
{
    app.ShowPopup(hh+":"+mm+":"+pos)
}
</sample>
 */

