// ------------- HEADER SECTION ------------- 


/** # AddTextArea #
 * @abbrev txa
 * @brief Adds a material filled textarea
 * Adds a material textarea on a given layout. See @CreateTextAreaFilled, @CreateTextAreaFilledA, @CreateTextAreaOutline and @CreateTextAreaOutlineA for a full documentation on each corresponding type.
 * $$ txa = MUI.AddTextArea(parent, width, height, options, hint, label, color, backColor) $$ 
 * @param {dso} parent @../app/CreateLayout
 * @param {num} width 
 * @param {num} height 
 * @param {str_com} options filled|outline|active
 * @param {str} hint Hint text
 * @param {bin} label Show or hide label
 * @param {str_col} color 
 * @param {str_col} backColor 
 * @returns obj
*/




// ------------- SAMPLES ------------- 


    
/**
@sample AddTextArea
cfg.Light
cfg.MUI

function OnStart()
{
    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")
        ted1 = MUI.AddTextArea(lay, 0.8, "filled", "Enter message", true)
        ted1 = MUI.AddTextArea(lay, 0.8, "filled,active", "Enter message", true)
        ted1 = MUI.AddTextArea(lay, 0.8, "outlined", "Enter message", true)
        ted1 = MUI.AddTextArea(lay, 0.8, "outlined,active", "Enter message", true)
    app.AddLayout(lay)
}
 */
    
            
    
/**
@sample Python AddTextArea
# cfg.Light, cfg.MUI

from native import app
from native import cfg

def OnStart():
    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")
        ted1 = MUI.AddTextArea(lay, 0.8, "filled", "Enter message", True)
        ted1 = MUI.AddTextArea(lay, 0.8, "filled,active", "Enter message", True)
        ted1 = MUI.AddTextArea(lay, 0.8, "outlined", "Enter message", True)
        ted1 = MUI.AddTextArea(lay, 0.8, "outlined,active", "Enter message", True)
    app.AddLayout(lay)
 */
    
            