// Simple serial transmit example.
//
// Note: this application only works on devices that support 
// OTG and allow access to external serial devices.
//
// Known to work: Nexus7, GalaxyS3/S4, ExperiaZUltra, TescoHudl    
// Don't work: Nexus4, GalaxyS1, AsusMemo

//Called when application is started.
function OnStart()
{
	//Create a layout with objects vertically centered.
	lay = app.CreateLayout( "linear", "VCenter,FillXY" )	

	//Create a button 1/3 of screen width and 1/4 screen height.
	btn = app.CreateButton( "Press Me", 0.3, 0.25 )
	lay.AddChild( btn )
	
	//Set function to call when button pressed.
	btn.SetOnTouch( btn_OnTouch )
	
	//Add layout to app.	
	app.AddLayout( lay )
	
	//Create USB serial object.
	usb = app.CreateUSBSerial()
}

//Called when user touches our button.
function btn_OnTouch()
{
	//Send serial text to device.
	usb.Write( "Hello serial device!" )
}
