// ------------- HEADER SECTION -------------


/** # WifiConnect #
 * Connect to a WiFi network by specifying the ssid and a password. See Also: @WifiScan, @SetOnWifiChange, @SetWifiApEnabled
 * $$ app.WifiConnect(ssid, key) $$
 * @param {str} ssid
 * @param {str} key
*/




// ------------- SAMPLES -------------



/**
@sample Conect to DS WiFi AP
function OnStart()
{
	<b>app.WifiConnect( "DS WiFi AP", "mypass" );</b>
	app.SetOnWifiChange( OnWifiChange );
}

function OnWifiChange( state, ssid )
{
    app.ShowPopup( ssid + " " + state );
}
 */



/**
@sample Python Conect to DS WiFi AP
from native import app

def OnStart():
    app.WifiConnect("DS WiFi AP", "mypass")
    app.SetOnWifiChange(OnWifiChange)

def OnWifiChange(state, ssid):
    app.ShowPopup(ssid + " " + state)
 */
