// ------------- HEADER SECTION -------------


/** # GetVersion #
 * @brief Get apk version number
 * Returns the app version number of the currently running apk.
 * $$ app.GetVersion() $$
 * @returns num
*/




// ------------- SAMPLES -------------



/**
@sample Show App Version
function OnStart()
{
    <b>var version = app.GetVersion();</b>
    app.Alert( version, "App Version:" );
}
 */



/**
@sample Python Show App Version
from native import app

def OnStart():
    version = app.GetVersion()
    app.Alert( version, "App Version:" )
 */
