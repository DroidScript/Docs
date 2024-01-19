
//Init background variables.
var backGroundY = 0;
var backGroundShift = 0.005;

//Init character variables.
var charX=0.5, charY=0.8;
var charW=0.16, charH=0.115;

//Called when application is started.
function OnStart()
{
    //Lock screen orientation to Portrait and
    //stop screen turning off while playing.
    app.SetOrientation( "Portrait" )
    app.PreventScreenLock( true )

    //Create the main layout.
    lay = app.CreateLayout( "Linear", "FillXY" ) 
   
    //Create an blank image to act as our drawing canvas.
    //(For performance reasons, we limit the internal bitmap to 
    //480x800 and set screen updating to manual mode).
    canvas = app.CreateImage( null, 1.0, 1.0, "fix", 480, 800 )
    canvas.SetAutoUpdate( false )
    canvas.SetTextSize( 14 )
    canvas.SetPaintColor( "#ffff0000" )
    canvas.SetOnTouchMove( canvas_OnTouchMove )
    lay.AddChild( canvas )

    //Create a background image in memory (not added to layout).
    imgBackground = app.CreateImage("/Sys/Img/StarField.jpg")

    //Create our character image in memory.
    imgChar = app.CreateImage( "/Sys/Img/Droid1.png" )

    //Add layout to app.    
    app.AddLayout( lay )
    
    //Switch off debugging for max speed.
    app.SetDebugEnabled( false )

    //Drawing the game frame 30x a second.
    //(Slow this down if you get black flashes)
    timer = setInterval( DrawFrame, 1000/30 )
}

//Update and redraw all game graphics.
function DrawFrame()
{
    //Clear the canvas.
    canvas.Clear()
    
    //Draw two copies of the background image with one drawn off screen 
    //above the other in the Y direction.
    canvas.DrawImage( imgBackground, 0, -1.0 + backGroundY, 1.0, 1.0 )
    canvas.DrawImage( imgBackground, 0, backGroundY, 1.0, 1.0 )
    
    //Shift the background images down slightly each frame
    //until the lower image is off screen, then we start again.
    backGroundY += backGroundShift;
    if( backGroundY >= 1.0 ) backGroundY -= 1.0;
    
    //Uncomment the lines below to test the vairous
    //types of transform.
    
    //See here for a nice matrix description:-
    // http://apike.ca/prog_svg_transform.html
    
    //Identity.
    //var mtx = [ 1,0,0, 0,1,0, 0,0,1 ];
    
    //Translate.
    //var mtx = [ 1,0,0.3, 0,1,0.3, 0,0,1 ];
    
    //SkewX.
    //var a = Math.PI/4;
    //var mtx = [ 1,Math.tan(a),0, 0,1,0, 0,0,1 ];
    
    //Scale.
    //var mtx = [ 2.5,0,0, 0,2.5,0, 0,0,1 ];
    
    //Rotate 45 degrees.
    var a = 45 * Math.PI/180;
    var mtx = [ Math.cos(a),-Math.sin(a),0, Math.sin(a),Math.cos(a),0, 0,0,1 ];
    
    //Draw image with matrix transform.
    canvas.DrawImageMtx( imgChar, mtx )
    
    //Update the canvas.
    canvas.Update()
}

//Handle moving finger on screen.
function canvas_OnTouchMove( ev )
{
    //Move character.
    if( ev.Y > 0.8 )
        charX = ev.X - charW/2;
}







