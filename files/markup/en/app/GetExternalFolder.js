// ------------- HEADER SECTION -------------


/** # GetExternalFolder #
 * @brief Get external sdcard folder
 * GetExternalFolder returns the path to the external micro sdcard of the device. Normally it is something like “/storage/extsd” or “/storage/extSdCard”
 *
 * See Also: @GetInternalFolder
 * $$ app.GetExternalFolder() $$
 * @returns str_pth
*/




// ------------- SAMPLES -------------



/**
@sample Show External Folder
function OnStart()
{
    <b>var dir = app.GetExternalFolder();</b>
    app.Alert( dir );
}
 */



/**
@sample Python Show External Folder
from native import app

def OnStart():
    dir = app.GetExternalFolder()
    app.Alert(dir)
 */
