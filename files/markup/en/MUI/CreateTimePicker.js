// ------------- HEADER SECTION -------------


/** # CreateTimePicker #
 * @abbrev tmp
 * Creates a material design time picker.
 * $$ tmp = MUI.CreateTimePicker(hour, minute, color) $$ 
 * @param {num} hour [0-24]
 * @param {num} minute 0-59
 * @param {str_col} color 
 * @returns obj
*/




// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### SetOnSelect ###
 * @brief Calls a function when the user selects a time.
 * Calls a function when the user selects a time.
 * $$ tmp.SetOnSelect(callback) $$
 * @param {fnc_json} callback {"pNames":["hh:mm AM|PM","hour","minute","pos"],"pTypes":["str","num_int-[0 to 24]","num_int-[0 to 59]","str-AM|PM"]}
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
@sample Default Time
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
 */
    
            
    
/**
@sample Custom Time
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
 */
    
            
    
/**
@sample Python Default Time
# cfg.Light, cfg.MUI

from native import app
from native import cfg

def OnStart():
    global tmp
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

    btn = MUI.CreateButtonRaised("SHOW PICKER")
    btn.SetOnTouch(ShowPicker)
    lay.AddChild(btn)

    app.AddLayout(lay)

    tmp = MUI.CreateTimePicker()
    tmp.SetOnSelect(OnSelect)

def ShowPicker():
    tmp.Show()

def OnSelect(time, hh, mm, pos):
    app.ShowPopup(hh+":"+mm+":"+pos)
 */
    
            
    
/**
@sample Python Custom Time
# cfg.Dark, cfg.MUI

from native import app
from native import cfg

def OnStart():
    global tmp
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

    btn = MUI.CreateButtonRaised("SHOW PICKER")
    btn.SetOnTouch(ShowPicker)
    lay.AddChild(btn)

    app.AddLayout(lay)

    tmp = MUI.CreateTimePicker(13, 24, MUI.colors.deepOrange.deepOrange)
    tmp.SetOnSelect(OnSelect)

def ShowPicker():
    tmp.Show()

def OnSelect(time, hh, mm, pos):
    app.ShowPopup(hh+":"+mm+":"+pos)
 */
    
            