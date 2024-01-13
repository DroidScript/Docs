// ------------- HEADER SECTION -------------


/** # AddFAB #
 * @abbrev fab
 * Adds a floating action button. See @CreateFAB, @CreateFABElegant and @CreateFABOutline for a full documentation.
 * $$ fab = MUI.AddFAB(parent, icon?, color?, options?) $$ 
 * @param {dso} parent @../app/CreateLayout
 * @param {str} [icon] Material icon fonts
 * @param {str_col} [color] 
 * @param {str_com} [options] outline|elegant|default
 * @returns obj
*/




// ------------- SAMPLES ------------- 


    
/**
@sample AddFAB
cfg.Light
cfg.MUI

function OnStart()
{
    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")
    	
    fab1 = MUI.AddFAB(lay, "favorite", null, "default")
    fab2 = MUI.AddFAB(lay, "favorite", MUI.colors.deepPurple.lighten1, "outline")
    fab3 = MUI.AddFAB(lay, "favorite", MUI.colors.teal.darken1, "elegant")

    app.AddLayout(lay)
}
 */
    
            
    
/**
@sample Python AddFAB
# cfg.Light, cfg.MUI

from native import app

def OnStart():
    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")

    fab1 = MUI.AddFAB(lay, "favorite", None, "default")
    fab2 = MUI.AddFAB(lay, "favorite", MUI.colors.deepPurple.lighten1, "outline")
    fab3 = MUI.AddFAB(lay, "favorite", MUI.colors.teal.darken1, "elegant")

    app.AddLayout(lay)
 */
    
            