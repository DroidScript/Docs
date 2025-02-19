// ------------- HEADER SECTION -------------


/** # SetWifiEnabled #
 * En/Disable Wifi on the device.
 *
 * See Also: @SetWifiEnabled, @IsWifiApEnabled, @WifiScan
 * $$ app.SetWifiEnabled(enable) $$
 * @param {bin} enable
*/




// ------------- SAMPLES -------------



/**
@sample Toggle WiFi
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
 */



/**
@sample Python Toggle WiFi
from native import app

def OnStart():
    lay = app.CreateLayout( "linear", "VCenter,FillXY" )

    tgl = app.CreateToggle( "WiFi", -1, 0.1 )
    tgl.SetOnTouch( tgl_OnTouch )
    lay.AddChild( tgl )

    app.AddLayout( lay )

def tgl_OnTouch( enable ):
    <b>app.SetWifiEnabled( enable )</b>
 */
