
//Called when application is started.
function OnStart()
{
    //Set status and nav bar colors.
	//(Works on Lollipop or newer.)
    app.SetStatusBarColor( "#ff0000" )
    app.SetNavBarColor( "#ff0000" )
    
	//Create a layout with objects vertically centered.
	lay = app.CreateLayout( "linear", "VCenter,FillXY" )	

	//Create a text label and add it to layout.
	txt = app.CreateText( "Hello" )
	txt.SetTextColor( "#ff0000" )
	txt.SetTextSize( 32 )
	lay.AddChild( txt )
	
	//Add layout to app.	
	app.AddLayout( lay )
}

