// ------------- HEADER SECTION -------------


/** # GetSpecialFolder #
 * @brief Get full path to a special media folder
 * Returns the full path to a special folder commonly used for images, videos, music etc.
 * 
 * See Also: @GetPath, @GetAppPath, @WriteFile
 * $$ app.GetSpecialFolder(name) $$ 
 * @param {str} name DCIM|Pictures|Movies|Downloads|Documents|Music
 * @returns str_pth
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Get Pictures folder
function OnStart()
{
    var fld = app.GetSpecialFolder( "Pictures" );
    app.Alert( fld );
}
 */
    
            
    
/**
@sample Python 
from native import app

def OnStart():
    fld = app.GetSpecialFolder("Pictures")
    app.Alert(fld)
 */
    
            