//Create global variables.
var timer = 0;

//Called when application is started.
function OnStart()
{
    //Lock screen orientation to Landscape.
    app.SetOrientation( "Landscape" )
  
	//Create a layout with objects vertically centered.
	lay = app.CreateLayout( "linear", "VCenter,FillXY" )	
	lay.SetBackGradient( "#888888", "#666666" )

    //Create a layout with two images one above
    //the other to draw the graph background and data.
    layGraph = app.CreateLayout( "Frame" )
    lay.AddChild( layGraph )
    imgBack = app.CreateImage( null, 0.95, 0.75 )
    imgBack.SetAutoUpdate( false )
    layGraph.AddChild( imgBack )
    imgData = app.CreateImage( null, 0.95, 0.75 )
    imgData.SetAutoUpdate( false )
    layGraph.AddChild( imgData )
	
	//Create horizontal layout for buttons.
	layHoriz = app.CreateLayout( "Linear", "Horizontal" )
	layHoriz.SetMargins( 0, 0.02, 0, 0 )
	lay.AddChild( layHoriz )
	
	//Create a Start button.
	btnStart = app.CreateButton( "Start", 0.3, -1, "Alum,NoSound" )
	btnStart.SetMargins( 0, 0, 0, 0 )
	btnStart.SetOnTouch( btnStart_OnTouch )
	layHoriz.AddChild( btnStart )
	
    //Create a Stop button.
	btnStop = app.CreateButton( "Stop", 0.3, -1, "Alum,NoSound" )
	btnStop.SetMargins( 0.04, 0, 0, 0 )
	btnStop.SetOnTouch( btnStop_OnTouch )
	layHoriz.AddChild( btnStop )
	
	//Add layout to app.	
	app.AddLayout( lay )
	
	//Create Audio Recorder.
	//frequencies: 8000, 11025, 22050 44100 or 48000
	rec = app.CreateAudioRecorder()
	rec.SetFrequency( 8000 )
	
    //Draw our sample graph background.
    DrawGraph()
    
    //Switch off to speed things up.
    app.SetDebugEnabled( false )
}

//Called when user touches our Start button.
function btnStart_OnTouch()
{
	rec.Start()
	clearInterval( timer )
	timer = setInterval( GetSamples, 10 ) 
}

//Called when user touches our Stop button.
function btnStop_OnTouch()
{
	rec.Stop()
	clearInterval( timer )
}

//Get samples from the current data buffer.
function GetSamples()
{
    var data = rec.GetData()
    DisplaySamples( data )
}

//Draw graph display background.
function DrawGraph()
{
    //Fill image with solid black.
    imgBack.SetColor( "#ff000000" )
    
    //Set drawing color to blue.
    //format is (#alpha:red:green:blue) in hex.
    imgBack.SetPaintColor( "#ff4444ff" )
    
    //Draw x and y axis.
    imgBack.SetLineWidth( 4.0 )
    imgBack.DrawLine( 0, 1.0, 1.0, 1.0 )
    imgBack.DrawLine( 0, 0, 0, 1.0 )
    
    //Horizontal lines.
    imgBack.SetLineWidth( 0.5 )
    imgBack.DrawLine( 0, 0.25, 1.0, 0.25 )
    imgBack.SetLineWidth( 1.0 )
    imgBack.DrawLine( 0, 0.5, 1.0, 0.5 )
    imgBack.SetLineWidth( 0.5 )
    imgBack.DrawLine( 0, 0.75, 1.0, 0.75 )
    
    //Draw top and right lines.
    imgBack.SetLineWidth( 4.0 )
    imgBack.DrawLine( 0, 0, 1.0, 0 )
    imgBack.DrawLine( 1.0, 0, 1.0, 1.0 )
    
    //Change paint color and line width.
    imgBack.SetLineWidth( 1.0 )
    imgBack.SetPaintColor( "#ff44ff44" )
    
    //Update the background image.
    imgBack.Update()

    //Set properties for forground image (sample data).
    imgData.SetLineWidth( 1.0 )
    imgData.SetPaintColor( "#ff4444ff" )
}

//Display audio samples on graph.
function DisplaySamples( data )
{
    //Clear screen.
    imgData.SetColor( "#00000000" )

    //Draw samples.    
    imgData.DrawSamples( data, 32768 )
    
    /* Alternative (slower) drawing method.
    var y = lasty = 0.5;
    var x = lastx = 0; 
    var len = data.length;
    
    for( var i=0; i<len; i++ )
    {
       x =  i/len; 
       y = 0.5 + data[i]/32768/2;
       imgData.DrawLine( lastx, lasty, x, y )
       lastx = x; lasty = y;
    }
    */
    
    //Update image.
    imgData.Update()
}

