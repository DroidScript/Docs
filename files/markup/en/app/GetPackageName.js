// ------------- HEADER SECTION ------------- 


/** # GetPackageName #
 * @brief Get APK package name
 * Returns the package name of the APK.
 * $$ app.GetPackageName() $$ 
 * @returns str
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Show Package Name
function OnStart()
{
    <b>var pkg = app.GetPackageName();</b>
    app.Alert( pkg );
}
 */
    
            
    
/**
@sample Python Show Package Name
from native import app

def OnStart():
    pkg = app.GetPackageName()
    app.Alert( pkg )
 */
    
            