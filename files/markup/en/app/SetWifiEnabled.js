
/** # SetWifiEnabled #
 * En/Disable Wifi on the device.
 * 
 * See Also: @SetWifiEnabled, @IsWifiApEnabled, @WifiScan
 * $$ app.SetWifiEnabled(enable) $$ 
 * @param {bin} enable 
*/


// SetWifiEnabled.txt --> All the sample codes

/** @Sample
<sample Toggle WiFi>
function OnStart()
{
	lay = app.CreateLayout( "linear", "VCenter,FillXY" );

	tgl = app.CreateToggle( "WiFi", -1, 0.1 );
	tgl.SetOnTouch( tgl_OnTouch );
	lay.AddChild( tgl );

	app.AddLayout( lay );
}

function tgl_OnTouch( enable )
{
    <b>app.SetWifiEnabled( enable );</b>
}
</sample>

 */

