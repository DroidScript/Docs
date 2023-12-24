
//Called when application is started.
function OnStart()
{
	//Create a layout with objects vertically centered.
	lay = app.CreateLayout( "linear", "VCenter,FillXY" )

	//Add an image 20% of screen width.
	img = app.AddImage( lay, "/Sys/Img/Hello.png", 0.2 )
	
	//Add a button 30% of screen width.
	btn = app.AddButton( lay, "Press Me", 0.3 )
	btn.SetMargins( 0, 0.05, 0, 0 )
	btn.SetOnTouch( btn_OnTouch )
	
	//Add layout to app.	
	app.AddLayout( lay )
}

//Called when user touches our button.
function btn_OnTouch()
{
	//Show a popup message.
	app.ShowPopup( "Hello World!" )
	
	//Vibrate phone with a pattern (in milliseconds).
	//pause,vibrate,pause,vibrate...
	app.Vibrate( "0,100,30,100,50,300" )
}
