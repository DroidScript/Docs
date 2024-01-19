
//Called when application is started.
function OnStart()
{   
	//Create vertical layout that fills the screen.
	lay = app.CreateLayout( "Linear", "FillXY,VCenter" )
 
	//Create a text control to show data log.
	txt = app.CreateText( "", 0.9, 0.9, "Multiline,Left" )
	txt.SetTextColor( "#ffffffff" )
	lay.AddChild( txt )
	
	//Create and start location sensor.
	//(Achievable update rate is hardware specific)
	loc = app.CreateLocator( "GPS,Network" )
	loc.SetOnChange( loc_OnChange ) 
	loc.SetRate( 10 ) //10 seconds.
	loc.Start()
	
	//Add main layout to app.
	app.AddLayout( lay )
	
	//Create array to hold log messages.
	log = new Array() 
	Log( "Locating..." )
}

//Called when we get a change in location.
function loc_OnChange( data )
{
	Log( data.provider+": Lat "+data.latitude+", Lng "+data.longitude 
		+", Spd "+data.speed+", Bear "+data.bearing
		+", Alt "+data.altitude+", Accu "+data.accuracy+"" )
		
	//Calculate our distance in meters from Greenwich London.
	var dist = loc.GetDistanceTo( 51.4778, 0.0 )
	Log( "Distance to London: "+(dist/1000).toFixed(2)+" km" )
	
	//Calculate our bearing to Greenwich London.
	var bearing = loc.GetBearingTo( 51.4778, 0.0 )	
	Log( "Bearing to London: "+bearing.toFixed(2)+" degrees\n" )
}

//Add messages to log.
function Log( msg )
{
	if( txt.GetLineTop( txt.GetLineCount() ) >= 0.8 ) 
		log.shift()
	log.push( msg + "\n" )
	txt.SetText( log.join("") )
}
