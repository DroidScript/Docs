// ------------- HEADER SECTION -------------


/** # GoToSleep #
 * @brief Puts the phone into sleep mode
 * Forces the screen to turn off and puts the device to sleep. (This has the same effect as pressing the power button)
 * 
 * See Also: @WakeUp
 * $$ app.GoToSleep() $$ 
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Sleep and Wake
function OnStart()
{
    <b>app.GoToSleep();</b>
    setTimeout("app.WakeUp()", 5000)
}
 */
    
            
    
/**
@sample Python 
from native import app
import time

def OnStart():
    app.GoToSleep()
    time.sleep(5)
    app.WakeUp()
 */
    
            