//Simple example of using a Joystick or Gamepad.
//(Works with NVidia Shield and Xbox 360 game pad via OTG cable
//and should works with other USB HID devices too).

//Called when application is started.
function OnStart()
{
	//Create a layout with objects vertically centered.
	lay = app.CreateLayout( "linear", "VCenter,FillXY" )	

	//Add a text control to show data log.
	txt = app.AddText( lay, "", 1.0, null, "MultiLine" )
	txt.SetTextSize( 18 )
	
	//Add layout to app.	
	app.AddLayout( lay )
	
	//Enabling the ForwardKeys option will allow users
	//to navigate your App using the d-pad, X and B key.
	//app.SetJoystickOptions( "ForwardKeys" )
	
	//Start timer to show joystick state.
	setInterval( ShowState, 200 )
}

//Called 5x as second.
function ShowState()
{
    //Get the first connected joysticks name.
    //(only available after joystick is used)
    var name = app.GetJoystickName( 0 )
    
    //Show state.
    var joy = app.GetJoystickStates( 0 )
	txt.SetText( JSON.stringify( joy ) )
}
