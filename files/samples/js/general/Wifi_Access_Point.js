
//Note: You may need to allow DroidScript to Change System Settings
//in the Android Permissions Settings.

//Called when application is started.
function OnStart()
{
	//Check this Android version supports hotspot control.
	if( app.GetOSVersion() > 24 ) 
		app.Quit( "Sorry, only Nougat or older supported!" )
		
	//Create a layout with objects vertically centered.
	lay = app.CreateLayout( "linear", "VCenter,FillXY" )	

    //Create a toggle button.
    tgl = app.CreateToggle( "WiFi AP", 0.3 )
    tgl.SetMargins( 0, 0.02, 0, 0 )
    tgl.SetOnTouch( tgl_OnTouch )
    tgl.SetChecked( app.IsWifiApEnabled() )
    lay.AddChild( tgl )
	
	//Add layout to app.	
	app.AddLayout( lay )
}

//Called when user touches our button.
function tgl_OnTouch()
{
    if( !app.IsWifiApEnabled() ) 
    {
        //Note: The ssid and key parameters are optional.
		//(It can take upto 20 seconds to toggle the AP)
        app.SetWifiApEnabled( true, "MyAp", "MyPassword" )
    }
    else 
    {
        app.SetWifiApEnabled( false )
        app.SetWifiEnabled( true )
    }
}
