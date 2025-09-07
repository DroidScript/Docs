
//Init global variables.
var width = 320;
var height = 240;
var tLast = new Date()

//Called when application is started.
function OnStart()
{   
	//Fix orientation to landscape since
	//most phones cameras work this way.   
	app.SetOrientation( "Landscape" )
	  
	//Stop screen turning off.
    app.PreventScreenLock( true )
    
	//Create frame layout that fills the screen.
	lay = app.CreateLayout( "Frame", "Horizontal,FillXY" )
   
	//Create camera view control.
	//(Reduce to QVGA-widthxheight resolution for performance reasons)
	cam = app.CreateCameraView( 1, 1, "QVGA,UseBitmap,NoRotate,Front" )
	cam.SetOnReady( cam_OnReady )
	lay.AddChild( cam )  

    //Create an image control over the top of the 
	//camera view with transparency (alpha).
	img = app.CreateImage( null, 1, 1 )  
	img.SetAlpha( 0.5 )  
	lay.AddChild( img )     
	img.SetPaintColor( "#ff0000"  )
	img.SetPaintStyle( "Line" )
	img.SetLineWidth( 2 )
	img.SetTextSize( 16 )
	img.SetAutoUpdate( false )
	
	//Add main layout to app.
	app.AddLayout( lay )
}

//Called when camera is ready.
function cam_OnReady()
{	
	//Start preview.
	cam.StartPreview()

	//Start image processing.
	ProcessImage()
}

//Extract and process image data.
function ProcessImage()
{
    //Get faces list.
    var faces = cam.FindFaces( 10 ) 
    
    //Mark found faces over camera preview.
    DrawFaces( faces )
    
    //Call this function again ASAP.
    setTimeout( ProcessImage, 0 )
}
        
//Draw area where face detected.
function DrawFaces( faces )
{
    var corners, i, j, len;
    
    //Clear image.
    img.Clear()
    
    //Loop through faces list.
    for( i=0; i < faces.length; i++ )
    {
        //Get face info.
        var face = faces[i];
        
        //Mark face boundaries.      
        img.DrawRectangle( face.midPoint.x/width - face.eyeDistance/width, 
            face.midPoint.y/height - face.eyeDistance/height, 
            face.midPoint.x/width + face.eyeDistance/width, 
            face.midPoint.y/height + face.eyeDistance/height )
    }
    
    //Draw frame rate.
    var tNow = new Date()
    img.DrawText( Math.round(1000/(tNow-tLast)), 0.03, 0.06 ) 
    tLast = tNow;
    
    //Update image canvas.
    img.Update()
}

