// ------------- HEADER SECTION ------------- 


/** # AddAppBar #
 * @abbrev apb
 * 
 * $$ apb = MUI.AddAppBar(parent, p1, p2, p3, options) $$ 
 * @param {obj} parent MUI Layout or DS Layout control
 * @param {str} p1 Title text|Hint
 * @param {str} p2 Material Icon
 * @param {str} p3 controls|color
 * @param {str_com} options Elegant|Modern|Default and Round|Rectangle for Modern Appbar
 * @returns obj
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Adds an appbar on a given layout. See @CreateAppBar, @CreateAppBarElegant and @CreateAppBarModern for a full documentation. The parameters p1, p2 and p3 depends on the type of appbar. Refer to each type for more info. Example for @CreateAppBar and @CreateAppBarElegant 'ps' is 'title', 'p2' is 'logoIcon' and 'p3' is 'controls'. For @CreateAppBarModern 'p1' is 'hint','p2' is 'controlIcon' and 'p3' is 'color'.
 */



// ------------- SAMPLES ------------- 


    
/**
@sample AddAppBar
cfg.Light
cfg.MUI

function OnStart()
{
    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")
        apb1 = MUI.AddAppBar(lay, "My Appbar", "menu", "search,more_vert", "Default")
        apb2 = MUI.AddAppBar(lay, "My Appbar", "menu", "search,more_vert", "Elegant")
        apb3 = MUI.AddAppBar(lay, "Search product", "search", null, "Modern,Round")
        apb3 = MUI.AddAppBar(lay, "Search product", "search", null, "Modern,Rectangle")
    app.AddLayout(lay)
}
 */
    
            
    
/**
@sample Python AddAppBar
# cfg.Light, cfg.MUI

from native import app

def OnStart():
    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")

    apb1 = MUI.AddAppBar(lay, "My Appbar", "menu", "search,more_vert", "Default")
    apb2 = MUI.AddAppBar(lay, "My Appbar", "menu", "search,more_vert", "Elegant")
    apb3 = MUI.AddAppBar(lay, "Search product", "search", None, "Modern,Round")
    apb4 = MUI.AddAppBar(lay, "Search product", "search", None, "Modern,Rectangle")

    app.AddLayout(lay)
 */
    
            