// ------------- HEADER SECTION ------------- 


/** # IsService #
 * @brief Check id app is a service
 * Checks if the currently running app instance is a service.
 * $$ app.IsService() $$ 
 * @returns bin
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Check if App is Service
function OnStart()
{
    <b>var isSvc = app.IsService();</b>
    app.Alert( isSvc, "IsService" );
}
 */
    
            
    
/**
@sample Python 
from native import app

def OnStart():
    isSvc = app.IsService()
    app.Alert(isSvc, "IsService")
 */
    
            