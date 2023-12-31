// ------------- HEADER SECTION -------------


/** # WakeUp #
 * @brief Wake the screen up
 * Forces the screen to turn on the screen. (This has the same effect as pressing the power button in sleep mode)
 * 
 * See Also: @GoToSleep
 * $$ app.WakeUp() $$ 
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Sleep and Wake
function OnStart()
{
    app.GoToSleep();
    <b>setTimeout("app.WakeUp()", 5000)</b>
}
 */
    
            
    
/**
@sample Python Sleep and Wake
from native import app

def OnStart():
    app.GoToSleep()
    app.SetTimeout("app.WakeUp()", 5000)
 */
    
            