// ------------- HEADER SECTION ------------- 


/** # PreventScreenLock #
 * @brief Prevent screen from locking after some time
 * The _PreventScreenLock_ method prevents the device screen from dimming and locking while your app is in the foreground.
 * $$ app.PreventScreenLock(mode) $$ 
 * @param {bin||str} mode Full:Device can sleep, Screen and Keyboard on|Partial:CPU always on, Screen and Keyboard off
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Example
function OnStart()
{
	<b>app.PreventScreenLock( true );</b>
}
 */
    
            
    
/**
@sample Python Example
from native import app

def OnStart():
    app.PreventScreenLock( True )
 */
    
            