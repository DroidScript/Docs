// ------------- HEADER SECTION -------------


/** # IsConnected #
 * @brief Check if device is connected to any network
 * Checks if the device is connected to any network.
 *
 * See Also: @SetWifiEnabled, @WifiConnect, @SetOnWifiChange
 * $$ app.IsConnected() $$
 * @returns bin
*/




// ------------- SAMPLES -------------



/**
@sample Check Connected
function OnStart()
{
    <b>var isConnected = app.IsConnected();</b>
    app.Alert( isConnected, "is Connected:" );
}
 */



/**
@sample Python Check Connected
from native import app

def OnStart():
    isConnected = app.IsConnected()
    app.Alert(isConnected, "is Connected:")
 */
