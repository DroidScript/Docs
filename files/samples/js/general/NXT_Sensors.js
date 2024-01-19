
//Called when application is started.
function OnStart()
{
	//Create the screen layout.
	CreateLayout()

	//Create NXT controller object and
	//set function to call when connected.
	nxt = app.CreateNxt() 
	nxt.SetOnConnected( nxt_OnConnected )
}

//Create the screen layout.
function CreateLayout()
{
	//create the main background.
	lay = app.CreateLayout( "linear", "Vertical,Fillxy" )
	lay.SetBackground( "/Sys/Img/Tile.png", "repeat" )  

	//Create text label.
	txt = app.CreateText( "Mindstorms Sensors", 0.8, -1 )
	txt.SetMargins( 0,0.05,0,0.05 )
	txt.SetTextSize( 24 ) 
	txt.SetTextColor( "#ff444444" ) 
	lay.AddChild( txt )

	//Create touch sensor text box.    
	txtTouch1 = app.CreateText( "", 0.7, -1, "lego" )  
	txtTouch1.SetMargins( 0,0,0,0.05 )
	txtTouch1.SetTextSize( 20 )   
	lay.AddChild( txtTouch1 )

	//Create second touch sensor text box.  
	txtTouch2 = app.CreateText( "", 0.7, -1, "lego" )   
	txtTouch2.SetMargins( 0,0,0,0.05 )
	txtTouch2.SetTextSize( 20 )   
	lay.AddChild( txtTouch2 )

	//Create color sensor text box.   
	txtColor = app.CreateText( "", 0.7, -1, "lego" )   
	txtColor.SetMargins( 0,0,0,0.05 )
	txtColor.SetTextSize( 20 )   
	lay.AddChild( txtColor )

	//Create distance sensor text box.
	txtDist = app.CreateText( "", 0.7, -1, "lego" )   
	txtDist.SetTextSize( 20 )   
	lay.AddChild( txtDist )
	
	//Create Connect button.
	btn = app.CreateButton( "Connect", 0.3,0.1, "Lego" )
	btn.SetMargins( 0,0.1,0,0 )
	btn.SetOnTouch( btn_OnTouch )  
	lay.AddChild( btn )
	    
	//Add main layout to app.
	app.AddLayout( lay )
}

//Called when user presses connect.
function btn_OnTouch()
{        
	//Show list of NXT devices.
	nxt.ShowDevices()
}

//Handle successful connection.
function nxt_OnConnected()
{
	//Start updating sensor values.
	UpdateSensors()
}

//Update the sensor values.
function UpdateSensors()
{
	if( nxt.IsConnected() )
	{
		val = nxt.ReadTouchSensor( 1 )
		txtTouch1.SetText( "Touch Sensor 1: " + (val?"On":"Off") )
	    
		val = nxt.ReadTouchSensor( 2 )
		txtTouch2.SetText( "Touch Sensor 2: " + (val?"On":"Off") )
	    
		val = nxt.ReadColorSensor( 3, "ColorDetect" )
		val = nxt.ToColorName( val )
		txtColor.SetText( "Color: " + val )
	    
		val = nxt.ReadDistanceSensor( 4 )
		txtDist.SetText( "Distance: " + val + " cm" )    
	}
    
	//Set a timer to call this function again in 1/3 of a second.
	timer = setTimeout( "UpdateSensors()", 300 )
}
