// ------------- HEADER SECTION ------------- 


/** # AddRadio #
 * @abbrev rd
 * 
 * $$ rd = MUI.AddRadio(parent, list, width, height, options, p1, color, backColor) $$ 
 * @param {dso} parent @../app/CreateLayout
 * @param {str_com} list strings
 * @param {num} width 
 * @param {num} height 
 * @param {str_com} options Buttons|Material|Normal
 * @param {str} p1 color|orientation
 * @param {str_col} color 
 * @param {str_col} backColor 
 * @returns obj
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Adds a radio material input. See @CreateRadio, @CreateRadioButtons and @CreateRadioMaterial for a full documentation. The param p1 depends on the type of an MUI button. It can be a color for normal radio or orientation 'vertical or horizontal' for material and button type.
 */



// ------------- SAMPLES ------------- 


    
/**
@sample AddPicker
cfg.Light
cfg.MUI

function OnStart()
{
    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")
    
    scr = app.AddScroller(lay, 1, 1, "")
    lay2 = MUI.CreateLayout("Linear")

        lst = "Orange,Banana,Mango,Apple"

        rad1 = MUI.AddRadio(lay, lst, 0.75, null, "Default")
        rad2 = MUI.AddRadio(lay, lst, 0.75, null, "Material")
        rad3 = MUI.AddRadio(lay, lst, 0.75, null, "Material", true)
        rad4 = MUI.AddRadio(lay, lst, 0.75, null, "Button")
        rad5 = MUI.AddRadio(lay, lst, 0.75, null, "Button", true)

    scr.AddChild( lay2 )
    app.AddLayout( lay )
}
 */
    
            
    
/**
@sample Python AddPicker
# cfg.Light, cfg.MUI

from native import app

def OnStart():
    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")

    scr = app.AddScroller(lay, 1, 1, "")
    lay2 = MUI.CreateLayout("Linear")

    lst = "Orange,Banana,Mango,Apple"

    rad1 = MUI.AddRadio(lay, lst, 0.75, None, "Default")
    rad2 = MUI.AddRadio(lay, lst, 0.75, None, "Material")
    rad3 = MUI.AddRadio(lay, lst, 0.75, None, "Material", True)
    rad4 = MUI.AddRadio(lay, lst, 0.75, None, "Button")
    rad5 = MUI.AddRadio(lay, lst, 0.75, None, "Button", True)

    scr.AddChild(lay2)
    app.AddLayout(lay)
 */
    
            