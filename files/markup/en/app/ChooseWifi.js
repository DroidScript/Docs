// ------------- HEADER SECTION ------------- 


/** # ChooseWifi #
 * @brief Let the user choose a WiFi network
 * 
 * $$ app.ChooseWifi(title1, title2, callback, options, extra) $$ 
 * @param {str} title1 
 * @param {str} title2 
 * @param {fnc_json} callback {"pNames":["ssid"],"pTypes":["str"]}
 * @param {str_com} options force|large
 * @param {str} extra ssids
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
ChooseWifi lets the user select a WiFi network in range.

**title1** and **title2** are the titles for the scanning and the selection process. They default to “Scanning” and “Select WiFi”.

The **callback** function returns the name and the ssid of the selected network.

You can set the _force_ option so that the dialog cannot be closed until the user has selected an item.

Finally you can add extra items as pipe “|” separated string - ie. to add a default “[None]” entry to select no wifi network.

See Also:  @WifiConnect
 */



// ------------- SAMPLES ------------- 


    
/**
@sample Choose WiFi Network
function OnStart()
{
    lay = app.CreateLayout( "linear", "VCenter,FillXY" );

	btnChoose = app.CreateButton( "Choose WiFi", 0.5, 0.1 );
	btnChoose.SetOnTouch( btnChoose_OnTouch );
	lay.AddChild( btnChoose );

	app.AddLayout( lay );
}

function btnChoose_OnTouch()
{
	<b>app.ChooseWifi( "", "", OnWifiChoose );</b>
}

function OnWifiChoose( ssid )
{
     app.ShowPopup( "User selected " + ssid );
}
 */
    
            