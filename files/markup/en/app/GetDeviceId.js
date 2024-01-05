// ------------- HEADER SECTION -------------


/** # GetDeviceId #
 * @brief Get device ID
 * Returns the alphanumeric ID of the device which is different for each device
 * $$ app.GetDeviceId() $$ 
 * @returns str
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Show Devide ID
function OnStart()
{
    <b>var id = app.GetDeviceId();</b>
    app.Alert( id );
}
 */
    
            
    
/**
@sample Python 
from native import app

def OnStart():
    id = app.GetDeviceId()
    app.Alert(id)
 */
    
            