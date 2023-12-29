// ------------- HEADER SECTION ------------- 


/** # IsNewVersion #
 * @brief Check if apk version increased
 * Checks if the apk version number increased compared to the last time started.
 * $$ app.IsNewVersion() $$ 
 * @returns bin
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Check Version Number increased
function OnStart()
{
    <b>var newVersion = app.IsNewVersion();</b>
    app.Alert( newVersion, "Is new version:" );
}
 */
    
            
    
/**
@sample Python 
from native import app

def OnStart():
    newVersion = app.IsNewVersion()
    app.Alert(newVersion, "Is new version:")
 */
    
            