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
    
            