// ------------- HEADER SECTION -------------


/** # GetTop #
 * Returns the upper border distance from the app display to the device screen as height relative float or in pixels with the **px** option.
 * $$ app.GetTop(options) $$ 
 * @param {str} options px
 * @returns num_frc
*/




// ------------- SAMPLES ------------- 


    
/**
@sample GetTop
function OnStart()
{
    var top = app.GetTop();
    app.Alert(top, "Top");
}
 */
    
            
    
/**
@sample Python GetTop
from native import app

def OnStart():
    top = app.GetTop()
    app.Alert(top, "Top")
 */
    
            