
//Called when application is started.
function OnStart()
{
	//Check wifi is enabled.
	var ip = app.GetIPAddress()
	if( ip == "0.0.0.0" ) { 
		alert( "Please Enable Wi-Fi" ) 
		app.Exit()
	}
	//Create a layout with objects vertically centered.
	lay = app.CreateLayout( "linear", "VCenter,FillXY" )	

	//Create a text label and add it to layout.
	var s = "Type the following address into your" + 
			" browser\n\n" + ip +":8080";
	txt = app.CreateText( s, 0.8, 0.5, "MultiLine" )
	txt.SetTextSize( 22 )
	lay.AddChild( txt )
	
	//Add layout to app.	
	app.AddLayout( lay )
	
	//Create and run web server.
	serv = app.CreateWebServer( 8080, "Upload,ListDir" )
	serv.SetFolder( "/sdcard/DroidScript" )
	serv.AddServlet( "/message", OnServlet )
	serv.Start()
}

//Handle servlet requests.
function OnServlet( request, info )
{
	serv.SetResponse( "Got it!" )
	app.ShowPopup(  info.remoteAddress + " says: " + request.msg )
}

