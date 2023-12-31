// ------------- HEADER SECTION -------------


/** # CreateDivider #
 * @abbrev dvd
 * Creates a divider which you can add to your layout
 * $$ dvd = MUI.CreateDivider(height) $$ 
 * @param {num_px} height Optional
 * @returns obj
*/




// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** @extern Show */

/** @extern Hide */

/** @extern GetVisibility */

/** @extern IsEnabled */

/** @extern IsVisible */

/** @extern SetEnabled */

/** @extern SetVisibility */


// ------------- SAMPLES ------------- 


    
/**
@sample Basic & Light
cfg.Light
cfg.MUI

function OnStart()
{
    colors = MUI.colors.teal
    app.InitializeUIKit(colors.teal)

    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")

        div = MUI.CreateDivider()
        lay.AddChild(div)

    app.AddLayout(lay)

    var text = "You can undone this process."
    dlg = MUI.CreateDialog("Remove message", text, "REMOVE")
}
 */
    
            
    
/**
@sample Python Basic & Light
# cfg.Light, cfg.MUI

from native import app

def OnStart():
    colors = app.gfx.teal
    app.InitializeUIKit(colors.teal)

    lay = app.MUI.CreateLayout("Linear", "VCenter,FillXY")

        div = app.MUI.CreateDivider()
        lay.AddChild(div)

    app.AddLayout(lay)

    text = "You can undone this process."
    dlg = app.MUI.CreateDialog("Remove message", text, "REMOVE")
 */
    
            