// ------------- HEADER SECTION -------------


/** # IsDebugging #
 * @brief Check whether app is debugging
 * Checks if the app is currently debugging.
 * See also @SetDebug, @Debug
 * $$ app.IsDebugging() $$
 * @returns bin
*/




// ------------- SAMPLES -------------



/**
@sample Check Debugging
function OnStart()
{
    <b>var isDbg = app.IsDebugging();</b>
    app.Alert( isDbg, "now debugging:" );
}
 */



/**
@sample Python Check Debugging
from native import app

def OnStart():
    isDbg = app.IsDebugging()
    app.Alert( isDbg, "now debugging:" )
 */
