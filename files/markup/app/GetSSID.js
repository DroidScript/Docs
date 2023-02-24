
/** # GetSSID #
 * Returns the name (SSID) of the current network the user is connected with. If WiFi is disabled “<unknown ssid>” is returned.
 * 
 * See Also: @IsWifiEnabled, @SetWifiEnabled, @WifiConnect
 * $$ app.GetSSID() $$ 
 * @returns str
*/


// GetSSID.txt --> All the sample codes

/** @Sample
<sample Show SSID>
function OnStart()
{
    var ssid = app.GetSSID();
    app.Alert( ssid );
}
</sample>

 */

