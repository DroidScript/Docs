
//Called when application is started.
function OnStart()
{
	//Create a layout with objects vertically centered.
	lay = app.CreateLayout( "linear", "VCenter,FillXY" )	

	//Create an text edit box.
	edt = app.CreateTextEdit( "Hello World!", 0.8, 0.3 )
	lay.AddChild( edt )
	
	//Create a button..
	btn = app.CreateButton( "Press Me", 0.3 )
	
	//Set function to call when button pressed.
	btn.SetOnTouch( btn_OnTouch )
	
	//Add button to layout.
	lay.AddChild( btn )

	//Add layout to app.	
	app.AddLayout( lay )
}

//Called when user touches our button.
function btn_OnTouch()
{
	//Speak the text at default pitch and speed.
	var pitch = 1.0, speed = 1.0;
	app.TextToSpeech( edt.GetText(), pitch, speed )
}
