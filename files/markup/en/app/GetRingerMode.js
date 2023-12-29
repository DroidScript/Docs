// ------------- HEADER SECTION ------------- 


/** # GetRingerMode #
 * @brief Get current device ringer mode
 * Returns the current ringer mode of the device which can be “Normal”, “Vibrate” or “Silent”.
 * 
 * See Also: @SetRingerMode
 * $$ app.GetRingerMode() $$ 
 * @returns str-Normal|Vibrate|Silent
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Show Current Ringer Mode
function OnStart()
{
    <b>var mode = app.GetRingerMode();</b>
    app.Alert( mode )
}
 */
    
            
    
/**
@sample Python 
from native import app

def OnStart():
    mode = app.GetRingerMode()
    app.Alert(mode)
 */
    
            