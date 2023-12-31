// ------------- HEADER SECTION -------------


/** # GetOSVersion #
 * @brief Get API target level
 * GetOSVersion returns the API target level  of the android version.
 * $$ app.GetOSVersion() $$ 
 * @returns num_int
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Show Android API Level
function OnStart()
{
	<b>version = app.GetOSVersion();</b>
	app.Alert( version );
}
 */
    
            
    
/**
@sample Python Show Android API Level
from native import app

def OnStart():
    version = app.GetOSVersion()
    app.Alert(version)
 */
    
            