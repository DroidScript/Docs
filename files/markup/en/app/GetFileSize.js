// ------------- HEADER SECTION -------------


/** # GetFileSize #
 * @brief Get the size of a file or folder
 * GetFileSize returns the size of a file or folder in bytes
 * $$ app.GetFileSize(file) $$ 
 * @param {str_ptf} file 
 * @returns num_flt
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Show /sdcard/ folder size
function OnStart()
{
    var size = app.GetFileSize( "/sdcard/" );
    app.Alert( size / 1024 + " kB" );
}
 */
    
            
    
/**
@sample Python Show /sdcard/ folder size
from native import app

def OnStart():
    size = app.GetFileSize("/sdcard/")
    app.Alert(size / 1024 + " kB")
 */
    
            