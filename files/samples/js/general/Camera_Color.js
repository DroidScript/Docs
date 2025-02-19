//This demo attempts shows how to get the color of a point at the center
//of the camera image using the 'ReportColors' method of the camera
//control. The ReportColors method can actually be used to get the colors
//of a number of pixels but we only need one for this demo.

//Init global variables.
var count = 0;
	
//Called when application is started.
function OnStart()
{   
	//Fix orientation to landscape since
	//most phones cameras work this way.   
	app.SetOrientation( "Landscape" )
	  
	//Stop screen turning off.
    app.PreventScreenLock( true )
    
	//Create horizontal layout that fills the screen.
	lay = app.CreateLayout( "Linear", "Horizontal,FillXY" )
 
	//Create frame layout on left for camera view.
	layLeft = app.CreateLayout( "Frame" )	
	layLeft.SetMargins( 0,0.1,0.02,0 )
	lay.AddChild( layLeft ) 
   
	//Create camera view control.
	//(Reduce to 'QVGA' resolution for performance reasons)
	cam = app.CreateCameraView( 0.4, 0.8, "QVGA" )
	cam.SetOnReady( cam_OnReady )
	layLeft.AddChild( cam )  

	//Create vertical layout on right for other stuff.
	layRight = app.CreateLayout( "Linear", "Vertical" )
	lay.AddChild( layRight ) 
    
    //Create 'Use Flash' check box.
	chkFlash = app.CreateCheckBox( "Use Flash" )
	chkFlash.SetMargins( 0,0.1,0,0 )
	chkFlash.SetOnTouch( chkFlash_OnTouch )
    layRight.AddChild( chkFlash )
	
	//Create image control for graph display.
    imgGraph = app.CreateImage( null, 0.3, 0.4 )
    imgGraph.SetMargins( 0.05,0.1,0,0 )
    imgGraph.SetBackColor( "#222222" )
    imgGraph.SetTextSize( 12 )
    imgGraph.SetAutoUpdate( false )
    layRight.AddChild( imgGraph )
  
	//Add main layout to app.
	app.AddLayout( lay )
}

//Called when camera is ready.
function cam_OnReady()
{	
    //Create an image control over the top of the 
	//camera view with transparency (alpha) so
	//we can show a target area.
	img = app.CreateImage( null, 0.4, 0.8 )  
	img.SetAlpha( 0.5 )  
	layLeft.AddChild( img )     
	img.SetPaintColor( "#ff0000"  )
	img.SetPaintStyle( "Line" )
	img.SetLineWidth( 2.5 )
	img.DrawRectangle( 0.45, 0.45, 0.55, 0.55 )
	
	//Enable color reporting for a single point at the center  
	//of the image with a sample size of 8 pixels and a max report 
	//rate of roughly 3x a second. 
	cam.ReportColors( "0.5,0.5", OnColor, 16, 300 )
	
	//Note: You can use the '|' separator to report 
	//a list of points like this:- "0.1,0.1|0.2,0.2"
	
	//Start preview.
	cam.StartPreview()
	
	//Tell user we are ready.
	app.TextToSpeech( "Ready" )
}

//Handle reported colors.
function OnColor( colors )
{
    //Get pixel colors.
    var red = colors[0][0];
    var green = colors[0][1];
    var blue = colors[0][2];
    
    //Draw color graph.
    DrawGraph( red, green, blue )
    
    //Speak color name every 6 samples.
    if( count++ % 6 == 0 )
    {
        var name = GetColorName( red, green, blue )
        app.TextToSpeech( name )
    }
}

//Convert decimal to two digit hex number.
function dec2hex(i) 
{
   return (i+0x100).toString(16).substr(-2).toUpperCase()
}

//Draw a simple graph of color values.
function DrawGraph( red, green, blue )
{
    var xr=0.2, xg=0.4, xb=0.6;
    imgGraph.Clear()
    
    //Draw red bar and value.
    imgGraph.SetPaintColor( "#ff0000" )
    imgGraph.DrawRectangle( xr, 1, xr+0.1, 1-red/255 )
    hex = red.toString(16).toUpperCase()
    imgGraph.DrawText( hex, xr, 0.1 )
    
    //Draw green bar and value.
    imgGraph.SetPaintColor( "#00ff00" )
    imgGraph.DrawRectangle( xg, 1, xg+0.1, 1-green/255 )
    hex = green.toString(16).toUpperCase()
    imgGraph.DrawText( hex, xg, 0.1 )
    
    //Draw blue bar and value.
    imgGraph.SetPaintColor( "#0000ff" )
    imgGraph.DrawRectangle( xb, 1, xb+0.1, 1-blue/255 )
    hex = blue.toString(16).toUpperCase()
    imgGraph.DrawText( hex, xb, 0.1 )
    
    //Update image.
    imgGraph.Update()
}

//Handle 'Use Flash' checkbox touch
function chkFlash_OnTouch( value )
{
    cam.SetFlash( value )
}

//Get a color name from rgb values.
function GetColorName( red, green, blue )
{
    var minDiff = 1000;
    var best = 0;
    
    //Find closest matching color.
    for( var i=0; i<colors.length; i++ )
    {
        var diff = Math.pow( red - colors[i][0], 2 )
        diff += Math.pow( green - colors[i][1], 2 )
        diff += Math.pow( blue - colors[i][2], 2 )
        diff = Math.sqrt( diff )
        if( diff < minDiff ) { minDiff = diff; best = i; }
    }
    return colors[best][3];
}

//Create an array of well known colors.
//(Add more colors here to make it more accurate)
var colors = 
 [
    [0xFF,0x00,0x00, "Red"],
    [0xD0,0x40,0x40, "Red"],
    [0xBB,0x22,0xBB, "Pink"],
    [0xA5,0x3A,0xA5, "Pink"],
    [0xBB,0x66,0x77, "Pink"],
    [0xFF,0x85,0x00, "Orange"],
    [0xBB,0xAA,0x00, "Yellow"],
    [0xBB,0xAA,0x44, "Yellow"],
    [0x00,0x80,0x00, "Green"],
    [0x55,0xAA,0x55, "Green"],
    [0x22,0x66,0x44, "Green"],
    [0x40,0x8E,0xD0, "Turquoise"],
    [0x00,0x00,0xAA, "Blue"],
    [0x33,0x33,0x66, "Blue"],
    [0x22,0x66,0x44, "Blue"],
    [0x11,0x11,0x22, "Blue"],
    [0x00,0x00,0x11, "Blue"],
    [0x6F,0x00,0xFF, "Indigo"],
    [0xEE,0x82,0xEE, "Violet"],
    [0x85,0x3A,0x3A, "Brown"],
    [0x44,0x22,0x11, "Brown"],
    [0x00,0x00,0x00, "Black"],
    [0x11,0x11,0x11, "Grey"],
    [0x22,0x22,0x22, "Grey"],
    [0x88,0x88,0x88, "Grey"],
    [0xAA,0xAA,0xAA, "White"],
    [0xFF,0xFF,0xFF, "White"]
] 


