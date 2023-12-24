
// Simple USB serial GPS receiver.
// Note: You need a (cheap) OTG cable for this sample.
//
// Devices known to work: Ublox-7

//Called when application is started.
function OnStart()
{
	//Create a layout with objects vertically centered.
	lay = app.CreateLayout( "linear", "VCenter,FillXY" )		
	app.AddLayout( lay )
	
	//Create a read-only edit box to show GPS responses. 
    txtLog = app.CreateText( "", 0.95, 0.9, "Log,MonoSpace" ) 
    txtLog.SetBackColor( "#333333" )
    txtLog.SetTextSize( 12 ) 
    lay.AddChild( txtLog ) 

	//Create USB serial object.
	usb = app.CreateUSBSerial() 
	if( !usb ) 
	{
		app.ShowPopup( "Please connect your GPS and restart" )
		return;
	}
	usb.SetOnReceive( usb_OnReceive )
	usb.SetSplitMode( "End", "\n" )
	app.ShowPopup( "Connected" )
}

//Called when we get data from GPS.
function usb_OnReceive( data )
{
   console.log( data )
   
   //Filter for the info we want.
   if( data.substr(0,6)=="$GPRMC" ) txtLog.Log( data.replace("\n","") )
}

