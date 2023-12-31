// ------------- HEADER SECTION -------------


/** # AddPicker #
 * @abbrev pck
 * Adds a picker dialog such as time, date or color. See @CreateDatePicker, @CreateTimePicker and @CreateColorPicker for a full documentation.
 * $$ pck = MUI.AddPicker(textEdit, options) $$ 
 * @param {obj} textEdit MUI TextEdit or DS TextEdit control
 * @param {str} options Date|Color|Time
 * @returns obj
*/




// ------------- SAMPLES ------------- 


    
/**
@sample AddPicker
cfg.Light
cfg.MUI

function OnStart()
{
    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")
    	
    ttime = MUI.AddTextEdit(lay, 0.7, "outline", "Enter time", true)
    ttime.SetOnTouch( ShowTimePicker )

    tdate = MUI.AddTextEdit(lay, 0.7, "outline", "Enter date", true)
    tdate.SetOnTouch( ShowDatePicker )

    tcolor = MUI.AddTextEdit(lay, 0.7, "outline", "Enter color", true)
    tcolor.SetOnTouch( ShowColorPicker )

    app.AddLayout( lay )

    tPkr = MUI.AddPicker(ttime, "time")
    dPkr = MUI.AddPicker(tdate, "date")
    cPkr = MUI.AddPicker(tcolor, "color")
}

function ShowTimePicker()
{
    tPkr.Show()
}

function ShowDatePicker()
{
    dPkr.Show()
}

function ShowColorPicker()
{
    cPkr.Show()
}
 */
    
            
    
/**
@sample Python AddPicker
# cfg.Light, cfg.MUI

from native import app
from native import cfg

def OnStart():
    global tPkr, dPkr, cPkr
    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")

    ttime = MUI.AddTextEdit(lay, 0.7, "outline", "Enter time", True)
    ttime.SetOnTouch(ShowTimePicker)

    tdate = MUI.AddTextEdit(lay, 0.7, "outline", "Enter date", True)
    tdate.SetOnTouch(ShowDatePicker)

    tcolor = MUI.AddTextEdit(lay, 0.7, "outline", "Enter color", True)
    tcolor.SetOnTouch(ShowColorPicker)

    app.AddLayout(lay)

    tPkr = MUI.AddPicker(ttime, "time")
    dPkr = MUI.AddPicker(tdate, "date")
    cPkr = MUI.AddPicker(tcolor, "color")

def ShowTimePicker():
    tPkr.Show()

def ShowDatePicker():
    dPkr.Show()

def ShowColorPicker():
    cPkr.Show()
 */
    
            