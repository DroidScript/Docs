
/** # SetOnWifiChange #
 * Define a callback function to detect when the WiFi connected state has changed. The **state** parameter can be “CONNECTING”, “CONNECTED”, or “DISCONNECTED”. The WiFi ssid is passed on “CONNECTED” only.
 * 
 * See Also: @WifiConnect, @WifiScan
 * $$ app.SetOnWifiChange(callback) $$ 
*/


// SetOnWifiChange.txt --> All the sample codes

/** @Sample
<sample Detect WiFi Changes>
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
</sample>

 */

