// ------------- HEADER SECTION -------------


/** # GetSSID #
 * @brief Get WiFi network SSID (name)
 * Returns the name (SSID) of the current network the user is connected with. If WiFi is disabled “<unknown ssid>” is returned.
 *
 * See Also: @IsWifiEnabled, @SetWifiEnabled, @WifiConnect
 * $$ app.GetSSID() $$
 * @returns str
*/




// ------------- SAMPLES -------------



/**
@sample Show SSID
function OnStart()
{
    var ssid = app.GetSSID();
    app.Alert( ssid );
}
 */



/**
@sample Python Show SSID
from native import app

def OnStart():
    ssid = app.GetSSID()
    app.Alert(ssid)
 */
