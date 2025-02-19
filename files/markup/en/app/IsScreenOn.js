// ------------- HEADER SECTION -------------


/** # IsScreenOn #
 * @brief Check if device screen is on
 * Checks if the device screen is currently on.
 * $$ app.IsScreenOn() $$
 * @returns bin
*/




// ------------- SAMPLES -------------



/**
@sample Check Screen On
function OnStart()
{
    app.ShowPopup( "You may now disable your screen." )
    setTimeout( checkScreenOn, 5000 );
}

function checkScreenOn()
{
    <b>screenOn = app.IsScreenOn();</b>
    app.ShowPopup( screenOn, "Screen On:" );
}
 */



/**
@sample Python Check Screen On
from native import app

def OnStart():
    app.ShowPopup("You may now disable your screen.")
    app.SetScreenBrightness(-1)  # Disable screen timeout
    app.SetScreenOrientation("portrait")  # Set screen orientation to portrait
    app.SetScreenOn()  # Keep screen on
    app.SetOnScreenOff(checkScreenOn)

def checkScreenOn():
    screenOn = app.IsScreenOn()
    app.ShowPopup(screenOn, "Screen On:")
 */
