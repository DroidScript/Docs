
/** # GetIPAddress #
 * GetIPAddress returns the current network ip address. It should look like “0.0.0.0” which is the default value for disabled internet connection. The individual numbers can have values between 0 and 255.
 * $$ app.GetIPAddress() $$ 
 * @returns str
*/


// GetIPAddress.txt --> All the sample codes

/** @Sample
<sample Show Device IP>
function OnStart()
{
    var ip = app.GetIPAddress();
    app.Alert( ip );
}
</sample>

 */

