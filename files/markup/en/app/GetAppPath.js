// ------------- HEADER SECTION -------------


/** # GetAppPath #
 * @brief Get path to app assets
 * Returns the path to the app assets folder. In a DroidScript project the path should be “/sdcard/DroidScript/APPNAME”
 * In an apk it instead returns the absolute path to the “/Assets” folder
 *
 * See Also: @GetPath, @GetPrivateFolder
 * $$ app.GetAppPath() $$
 * @returns str_pth
*/




// ------------- SAMPLES -------------



/**
@sample Show app path
function OnStart()
{
    <b>var path = app.GetAppPath();</b>
    app.Alert( path );
}
 */



/**
@sample Python Show app path
from native import app

def OnStart():
    path = app.GetAppPath()
    app.Alert( path )
 */
