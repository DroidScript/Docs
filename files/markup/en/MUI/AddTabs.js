// ------------- HEADER SECTION -------------


/** # AddTabs #
 * @abbrev tbf
 * Adds an MUI tab on a given layout. See @CreateTabFixed for a full documentation.
 * $$ tbf = MUI.AddTabs(parent, title, width=-1, height=-1, options?, color?, animation?) $$
 * @param {dso} parent @../app/CreateLayout
 * @param {str_com} title titles
 * @param {num} [width=-1]
 * @param {num} [height=-1]
 * @param {str_com} [options] DS layout options|Fix
 * @param {str_col} [color]
 * @param {bin} [animation]
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
