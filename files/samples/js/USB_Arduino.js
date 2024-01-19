
// Example showing how to control an Arduino Uno via OTG cable.
//
// This demo requires the following sketch on your Uno:-
// http://androidscript.org/demos/arduino/DS_USB_Uno.ino
//
// Note: Some older devices do not support OTG.

//Called when application is started.
function OnStart()
{
	//Create a layout with objects vertically centered.
	lay = app.CreateLayout( "linear", "VCenter,FillXY" )	

	//Create a toggle button.
	btn = app.CreateToggle( "LED On/Off", 0.4 )
	btn.SetOnTouch( btn_OnTouch )
	lay.AddChild( btn )

	//Add layout to app.	
	app.AddLayout( lay )

	//Create USB serial object.
	usb = app.CreateUSBSerial() 
	if( !usb ) 
	{
		app.ShowPopup( "Please connect your Arduino and restart" )
		return;
	}
	usb.SetOnReceive( usb_OnReceive )
	app.ShowPopup( "Connected" )
}

//Called when user touches our toggle button.
function btn_OnTouch( isChecked  )
{
    if( !usb ) return;
   
    //Send LED command to Uno.
    if( isChecked ) usb.Write( "ledh")
    else usb.Write( "ledl")
}

//Called when we get data from Espruino.
function usb_OnReceive( data )
{
   console.log( data )
}

