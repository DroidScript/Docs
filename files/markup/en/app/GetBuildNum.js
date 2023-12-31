// ------------- HEADER SECTION -------------


/** # GetBuildNum #
 * @brief Get APK build number
 * GetBuildNum returns the build number of an APK.
 * $$ app.GetBuildNum() $$ 
 * @returns num_int
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Show build number
function OnStart()
{
    <b>var num = app.GetBuildNum();</b>
    app.Alert( num );
}
 */
    
            
    
/**
@sample Python Show build number
from native import app

def OnStart():
    num = app.GetBuildNum()
    app.Alert(num)
 */
    
            