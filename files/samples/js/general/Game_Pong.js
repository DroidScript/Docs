//Set initial x, y, width, height etc of bat.
var xBat=0.4, yBat=0.9, wBat=0.3, hBat=0.02;

//Set x, y, radius, direction, speed of ball.
var xBall=0.4, yBall=0.02, rBall=0.04, 
xDir=1, yDir=1, xDrift=0.005, speed=0.01;


//Called when application is started.
function OnStart()
{
    //Lock screen orientation to Portrait.
    app.SetOrientation( "Portrait" )
    
    //Stop screen turning off.
    app.PreventScreenLock( true )
    
    //Create the main layout with a background image.
    lay = app.CreateLayout( "Linear", "FillXY" ) 
    lay.SetBackground( "/Sys/Img/BlackBack.jpg" )
    
    //Create an blank image to act as our drawing canvas.
    //(For performance reasons, we limit the internal bitmap to 
    //480x800 and set screen updating to manual mode).
    canvas = app.CreateImage( null, 1.0, 1.0, "fix", 480, 800 )
    canvas.SetAutoUpdate( false )
    lay.AddChild( canvas )
	
    //Add layout to app. 
    app.AddLayout( lay )
    
    //Create Synth object for ball sounds.
    synthBall = app.CreateSynth( "VCA" )
    synthBall.SetWaveShape( "Square" )
    synthBall.SetVca( 1, 30, 0, 0 ) 
    
    //Create and start sensor object in Orientation mode.
    orient = app.CreateSensor( "Orientation", "Fast" )
    orient.Start()
    
    //Play a tone.
    synthBall.PlayTone( 560, 100 )
    
    //Init start time and quit flag.
    tstart = new Date()
    quit = false;
    
    //Switch off debugging for max speed.
    //(keep this on during developement)
    app.SetDebugEnabled( false )
    
    //Call DrawFrame function 60x a second.
    app.Animate( DrawFrame, 60 )
} 

//Update and redraw all game graphics.
function DrawFrame()
{
    //Clear the canvas.
    canvas.Clear()
    
    //Draw objects.
    DrawBat()
    DrawBall()
    DrawScore()
    
    //Update the canvas.
    canvas.Update()
    
    //Quit game if required.
    if( quit ) return; 
}

//Draw the bat.
function DrawBat()
{
    //Get current roll angle.
    roll = orient.GetRoll()
    
    if( Math.abs( roll ) > 5 )
    {
        //Alter x posn of bat.
        if( roll > 0 ) xBat += 0.02; 
        else xBat -= 0.02; 
        
        //Limit range of bats x posn.
        if( xBat < 0.05 ) xBat = 0.05;
        else if( xBat > 0.8 ) xBat = 0.8;
    }
    //Draw the bat.
    //(it wont be seen until canvas.Update is called)
    canvas.SetPaintColor( "#ffffff")
    canvas.DrawRectangle( xBat, yBat, xBat+wBat, yBat+hBat, 0.03 )
}

//Draw the ball.
function DrawBall()
{
    var playWallSnd = false;
    
    //Alter x and y coordinates of ball.
    yBall += speed * yDir; 
    xBall += xDrift * xDir; 
    
    //Draw the ball.
    canvas.SetPaintColor( "#56AEF2")
    canvas.DrawCircle( xBall, yBall, rBall )
    
    //Get distance between centers of bat and ball.
    var xDist = Math.abs( xBall - (xBat+wBat/2) )
    var yDist = Math.abs( yBall - (yBat+hBat/2) )
    
    //Check for collision with bat.
    if( xDist < wBat/2 && yDist < hBat*1.5  ) 
    { 
        //Alter ball direction and add random xDrift.
        yDir = -1;
        xDrift = Math.random() * 0.01;
        if( Math.random() > 0.5 ) xDir = 1; else xDir = -1;
        
        //Play bat sound.
	    synthBall.PlayTone( 560, 100 )
    }
    //Check for collision with top wall.
    else if( yBall < 0.04 ) { 
        yDir = 1; playWallSnd = true; 
        speed += 0.001;
    }
    //Check for missed ball.
    else if( yBall > 1.0 ) {
        app.ShowPopup( "You missed!" )
        quit = true;
        app.Animate( null )
        return;
    }
        
    //Check for collision with side walls.
    else if( xBall < 0.04 ) { xDir = 1; playWallSnd = true; }
    else if( xBall > 0.90 ) { xDir = -1; playWallSnd = true; }

    //Play wall sound if required.
    if( playWallSnd ) synthBall.PlayTone( 400, 100 )
}

//Draw game score (duration in secs).
function DrawScore()
{
    //Calc number of seconds played.
    var tnow = new Date()
    var millisecs = tnow.getTime() - tstart.getTime()
    var secs = millisecs/1000;
    
    //Draw time.
    canvas.SetTextSize( 16 )
    canvas.SetPaintColor( "#ffff0000"  )
    canvas.DrawText( secs.toFixed(2), 0.02, 0.06 )
}


