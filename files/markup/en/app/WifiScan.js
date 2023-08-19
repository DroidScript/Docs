// ------------- HEADER SECTION ------------- 


/** # WifiScan #
 * @brief Scan for any available Wifi networks
 * Scans the surroundings for any available Wifi networks.
 * $$ app.WifiScan(callback, options) $$ 
 * @param {str} options detail
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Conect to DS WiFi AP
function OnStart()
{
	lay = app.CreateLayout( "linear", "VCenter,FillXY" );
	lst = app.CreateList( "", 1, 1 );
	lay.AddChild( lst );
	app.AddLayout( lay );

	<b>app.ShowProgress();
	app.WifiScan( OnWifi );</b>
}

function OnWifi( ssid )
{
    lst.SetList( ssid, "\\|" )
    app.HideProgress();
}
 */
    
            