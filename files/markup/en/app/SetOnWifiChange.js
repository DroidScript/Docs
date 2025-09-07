// ------------- HEADER SECTION -------------


/** # SetOnWifiChange #
 * @brief Called on WiFi connected state changes
 * Define a callback function to detect when the WiFi connected state has changed. The **state** parameter can be “CONNECTING”, “CONNECTED”, or “DISCONNECTED”. The WiFi ssid is passed on “CONNECTED” only.
 *
 * See Also: @WifiConnect, @WifiScan
 * $$ app.SetOnWifiChange(callback) $$
 * @param {fnc_json} callback {"pNames":["state","ssid"],"pTypes":["str-CONNECTING|CONNECTED|DISCONNECTED","str"]}
*/




// ------------- SAMPLES -------------



/**
@sample Detect WiFi Changes
function OnStart()
{
    app.SetOnWifiChange( OnWifiChange );
}

<b>function OnWifiChange( state, ssid )
{
    if( state.EndsWith( "ED" ))
    {
        app.ShowPopup( state + "\n" + ssid );
        app.HideProgress();
    }
    else app.ShowProgress( state )
}</b>
 */



/**
@sample Python Detect WiFi Changes
from native import app

def OnStart():
    app.SetOnWifiChange(OnWifiChange)

def OnWifiChange(state, ssid):
    if state.endswith("ED"):
        app.ShowPopup(state + "\n" + ssid)
        app.HideProgress()
    else:
        app.ShowProgress(state)
 */
