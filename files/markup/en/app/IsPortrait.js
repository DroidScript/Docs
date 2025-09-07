// ------------- HEADER SECTION -------------


/** # IsPortrait #
 * @brief Check if device is in portrait mode
 * Checks if the device is in portrait mode.
 * $$ app.IsPortrait() $$
 * @returns bin
*/




// ------------- SAMPLES -------------



/**
@sample Check Portrait
function OnStart()
{
    <b>var isPortrait = app.IsPortrait();</b>
    app.Alert( isPortrait, "is Portrait:" );
}
 */



/**
@sample Python Check Portrait
from native import app

def OnStart():
    <b>isPortrait = app.IsPortrait()</b>
    app.Alert(isPortrait, "is Portrait:")
 */
