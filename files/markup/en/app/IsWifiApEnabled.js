// ------------- HEADER SECTION -------------


/** # IsWifiApEnabled #
 * @brief Check if the mobile Wifi Access Point is enabled
 * Checks if the mobile Wifi Access Point is enabled on the user device.
 *
 * See Also: @SetWifiApEnabled
 * $$ app.IsWifiApEnabled() $$
 * @returns bin
*/




// ------------- SAMPLES -------------



/**
@sample Check WifiAccessPoint Enabled
function OnStart()
{
    <b>var wapEnabled = app.IsWifiApEnabled();</b>
    app.Alert( wapEnabled, "Wifi Access Point Enabled:" );
}
 */



/**
@sample Python Check WifiAccessPoint Enabled
from native import app

def OnStart():
    wapEnabled = app.IsWifiApEnabled()
    app.Alert(wapEnabled, "Wifi Access Point Enabled:")
 */
