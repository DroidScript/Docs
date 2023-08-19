
/** # ShowMenu #
 * @abbrev smu

 * Show a menu on a given control.
 * $$ smu = MUI.ShowMenu(control, list, width) $$ 
 * @param {dso} control 
 * @param {str_lst} list 
 * @param {num_frc} width 
 * @returns obj
*/




// -------- VISIBLE METHODS & PROPERTIES --------- 


/** ### SetOnSelect ###
 * Calls a function when the user selects an item.
 * $$ smu.SetOnSelect(callback) $$
 * @param {fnc_json} callback {"pNames":["title"],"pTypes":["str-The title of the selected item."]}
 */

// ShowMenu.txt --> All the sample codes

/** @Sample
<sample Basic usage>
cfg.Light
cfg.MUI

function OnStart()
{
    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")

        btn = MUI.CreateFabOutline("more_vert")
        btn.SetOnTouch(btn_OnTouch)
        lay.AddChild(btn)
    app.AddLayout(lay)
}

function btn_OnTouch() {
    menu = MUI.ShowMenu(this, "Item 1, Item 2, Item 3")
    menu.SetOnSelect(function(item) {
        app.ShowPopup(item)
    })
}
</sample>
 */

