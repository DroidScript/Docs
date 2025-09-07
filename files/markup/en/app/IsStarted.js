// ------------- HEADER SECTION -------------


/** # IsStarted #
 * @brief Check if app has finished loading
 * Checks if the app has finished loading. It will return true after OnStart has returned.
 * $$ app.IsStarted() $$
 * @returns bin
*/




// ------------- SAMPLES -------------



/**
@sample Check Started
setTimeout('app.Alert( app.IsStarted(), "Started in global:" );');

function OnStart()
{
    <b>var started = app.IsStarted();</b>
    app.Alert( started, "Started in OnStart:" );
}
 */



/**
@sample Python Check Started
from native import app

app.SetTimeout(lambda: app.Alert( app.IsStarted(), "Started in global:" ), 1)

def OnStart():
    <b>started = app.IsStarted()</b>
    app.Alert( started, "Started in OnStart:" )

 */
