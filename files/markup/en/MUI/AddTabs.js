// ------------- HEADER SECTION ------------- 


/** # AddTabs #
 * @abbrev tbf
 * Adds an MUI tab on a given layout. See @CreateTabFixed for a full documentation.
 * $$ tbf = MUI.AddTabs(parent, title, width, height, options, color, animation) $$ 
 * @param {obj} parent MUI Layout or DS Layout control
 * @param {str_com} title titles
 * @param {num} width 
 * @param {num} height 
 * @param {str_com} options DS layout options|Fix
 * @param {str_col} color 
 * @param {bin} animation 
 * @returns obj
*/




// ------------- SAMPLES ------------- 


    
/**
@sample AddPicker
cfg.Light
cfg.MUI

function OnStart()
{
    lay = MUI.CreateLayout("Linear", "FillXY")
    
    tab = MUI.AddTabs(lay, "Movies,Games,Books", 1, 1, "fix")
    
    app.AddLayout( lay )
}
 */
    
            
    
/**
@sample Python 
# cfg.Light, cfg.MUI

from native import app

def OnStart():
    lay = MUI.CreateLayout("Linear", "FillXY")

    tab = MUI.AddTabs(lay, "Movies,Games,Books", 1, 1, "fix")

    app.AddLayout(lay)
 */
    
            