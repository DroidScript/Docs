// ------------- HEADER SECTION -------------


/** # HasSoftNav #
 * @brief Checks if device has soft keys
 * Checks if the device has a soft navigation bar on the screen.
 * $$ app.HasSoftNav() $$ 
 * @returns bin
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Check Softkeys
function OnStart()
{
    <b>var hasSoftNav = app.HasSoftNav();</b>
    app.Alert( hasSoftNav, "Has Soft Keys:" );
}
 */
    
            
    
/**
@sample Python Check Softkeys
from native import app

def OnStart():
    hasSoftNav = app.HasSoftNav()
    app.Alert(hasSoftNav, "Has Soft Keys:")
 */
    
            