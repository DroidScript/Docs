
//Called when application is started.
function OnStart()
{
	//Lock screen orientation to Landscape.
	app.SetOrientation( "Landscape" )

    //Set full screen mode
    app.SetScreenMode( "Full")
    
	//Create the screen layout.
	CreateLayout()

	//Create NXT controller object.
	nxt = app.CreateNxt()   
}

//Create the screen layout.
function CreateLayout()
{
	//Create the main background layout.
	lay = app.CreateLayout( "Linear", "Horizontal,VCenter,FillXY" )
	lay.SetBackground( "/Sys/Img/Tile.png", "repeat" )
	     
	//Create 'A' bar.
	var hmarg = 0.06; var vmarg = 0.03;
	imgBarA = app.CreateImage( "/Sys/Img/VBarA.png", -1, 0.76, "" )
	imgBarA.SetMargins( hmarg, vmarg, hmarg, vmarg )
	imgBarA.SetOnTouch( imgBarA_OnTouch )
	lay.AddChild( imgBarA )

	//Create joy pad.    
	imgPad = app.CreateImage( "/Sys/Img/JoyPad.png", -1, 0.76, "" )
	imgPad.SetOnTouch( imgPad_OnTouch )     
	lay.AddChild( imgPad )  

	//Create a sub layout to contain 'sound' and 'bulb' images.
	laySub2 = app.CreateLayout( "linear", "Vertical,Wrap,VCenter" )  
	lay.AddChild( laySub2 )  

    //Create Connect button.
	btn = app.CreateButton( "Connect", 0.15,0.1, "Lego" )
	btn.SetMargins( hmarg, vmarg, hmarg, vmarg )
	btn.SetOnTouch( btn_OnTouch )  
	laySub2.AddChild( btn )
	
	//Create 'sound' image.
	var size = 0.14; 
	imgSnd = app.CreateImage( "/Sys/Img/Sound.png", size, -1, "" )    
	imgSnd.SetMargins( hmarg, vmarg, hmarg, vmarg )
	imgSnd.SetOnTouch( imgSnd_OnTouch )     
	laySub2.AddChild( imgSnd ) 
	      
	//Create 'bulb' image.
	imgLight = app.CreateImage( "/Sys/Img/Bulb.png", size, -1, "" )
	imgLight.SetMargins( hmarg, vmarg, hmarg, vmarg )
	imgLight.SetOnTouch( imgLight_OnTouch )  
	laySub2.AddChild( imgLight )  
	    
	//Add main layout to app.
	app.AddLayout( lay )
}

//Called when user presses connect.
function btn_OnTouch()
{        
	//Show list of NXT devices.
	nxt.ShowDevices()
}

//Called when joypad image is touched.
function imgPad_OnTouch( e )
{          	
	if( !nxt.CheckConnection() ) return;

	//Drive motors when finger is down.	
	if( e.action=="Move" || e.action=="Down" ) {
	   CircleDrive( imgPad, e.x[0], e.y[0] )       
	}
	//Stop motors when finger is lifted.
	//(We add a slight delay because too many commands in 
	//the NXT queue can cause commands to be missed)
	else {
	   setTimeout( "nxt.Stop('BC')", 100 )	 
	}
}

//Called when horizontal 'A' bar image is touched.
function imgBarA_OnTouch( e )
{                 
	if( !nxt.CheckConnection() ) return;

	//Drive motor when finger is down.
	if( e.action=="Move" || e.action=="Down" ) 
	{
		//Adjust x value so it ranges from -1.0 to +1.0
		v = 2 *( e.y[0] - 0.5 )
	   
		//Set motor speed/direction.
		nxt.Drive( "A", v * 100, 0 ) 
	}
	//Stop motors when finger is lifted.
	else {
	   setTimeout( "nxt.Stop('A')", 100 )	 	   
	} 
}

//Called when sound image is touched.
function imgSnd_OnTouch( e )
{                           
	if( !nxt.CheckConnection() ) return;

	if( e.action=="Down" )
		nxt.Beep( 100, 10000 )
	else if( e.action=="Up" )
		nxt.Beep( 0, 0 )
}

//Called when light/bulb image is touched.
function imgLight_OnTouch( e )
{                  
	if( !nxt.CheckConnection() ) return;

	if( e.action=="Down" ) {
		nxt.SetLampColor( 3, "red" )
	} 
	else if( e.action=="Up" ){
		 nxt.SetLampColor( 3, "off" )
	}
}

//Drive C and D motors using x/y posn within a circle.
function CircleDrive( obj, x, y )
{
	//Adjust x and y values so they range from -1.0 to +1.0    
	x = 2 * (x-0.5)  y = -2 * (y-0.5)    

	//Calc velocity using distance from center.
	var vel = Math.sqrt( x*x + y*y )

	//Get direction (fwd or rev).
	var dir = (y > 0 ? 1 : -1 )

	//Set turn ratio.
	var turnB = 1, turnC = 1;
	if( x < 0 ) turnB = 1+x;
	else if( x > 0 ) turnC = 1-x;

	//Special case for fast turn.
	if( y > -0.1 && y < 0.1 ) {
		turnB = x;  turnC = -x;  dir = 1;
	}
	//Set motor speed/direction.
	nxt.Drive( "B", dir * vel * turnB * 100, 0 ) 
	nxt.Drive( "C", dir * vel * turnC * 100, 0 )
}

