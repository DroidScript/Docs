//Initialise some variables.
var sensitivity = 50; //percent.
var minPeriod = 500;  //millisecs.
var mosaic = "3x3";
var snapFolder = "/sdcard/Snaps";
	
//Called when application is started.
function OnStart()
{   
	//Fix orientation to landscape since
	//most phone's cameras work this way.   
	app.SetOrientation( "Landscape" )
	  
	//Create horizontal layout that fills the screen.
	lay = app.CreateLayout( "Linear", "Horizontal,FillXY" )
 
	//Create frame layout on left for camera view.
	layLeft = app.CreateLayout( "Frame" )	
	layLeft.SetMargins( 0,0.1,0.02,0 )
	lay.AddChild( layLeft ) 
   
	//Create camera view control.
	cam = app.CreateCameraView( 0.4, 0.8 )	
	cam.SetOnReady( StartDetection )
	layLeft.AddChild( cam )  

	//Create vertical layout on right for other stuff.
	layRight = app.CreateLayout( "Linear", "Vertical" )
	lay.AddChild( layRight )
	
	//Create a text control to show logs.
	txt = app.CreateText( "", 0.5, 0.4, "Multiline,Left" )
	txt.SetMargins( 0,0.1,0,0 )
	txt.SetPadding( 0.01,0.01,0.01,0.01 )
	txt.SetTextColor( "#ffffffff" )
	txt.SetBackColor( "#ff222222" )
	layRight.AddChild( txt )

	//Create sensitivity seek bar label.
	txtSens = app.CreateText( "Sensitivity" )
	txtSens.SetMargins( 0,0.05,0,0 )
	layRight.AddChild( txtSens )
	
	//Create sensitivity seek bar.
	skb = app.CreateSeekBar( 0.3, -1 )
	skb.SetOnTouch( skb_OnTouch )
	skb.SetValue( sensitivity )
	layRight.AddChild( skb )
	
	//Create 'mosaic' spinner label.
	txtTiles = app.CreateText( "Mosaic" )
	txtTiles.SetMargins( 0,0.05,0,0 )
	layRight.AddChild( txtTiles )
	
	//Create 'mosaic' spinner.
	var layouts = "3x2,3x3,5x5,10x10";
	spin = app.CreateSpinner( layouts, 0.2, -1 )
	spin.SetOnTouch( spin_OnTouch )
	spin.SetText( "3x3" )
	layRight.AddChild( spin )
	
	//Set menus.
	app.SetMenu( "Snap,Exit" )    
	
	//Add main layout to app.
	app.AddLayout( lay )
}

//Start motion detection.
function StartDetection()
{	
	//Create an image control over the top of the 
	//camera view with transparency (alpha) and with a
	//fixed internal bitmap the same size as camera view.
	var w = cam.GetImageWidth()
	var h = cam.GetImageHeight()
	img = app.CreateImage( null, 0.4, 0.8, "Fix", w, h )  
	img.SetAlpha( 0.5 )  
	layLeft.AddChild( img )        
    
	//Enable 3x3 matrix motion detection and mark
	//motion detections in the image control.
	cam.MotionMosaic( 3, 3, (100-sensitivity)/5, minPeriod, img )
	cam.SetOnMotion( OnMotion )
	
	//Create folder for saved pictures and
	//set image size, counters etc.
	app.MakeFolder( snapFolder )
	cam.SetPictureSize( 1024, 768 )
	maxPics = 10; count = 1; 
	
	//Create array to hold log messages.
	log = new Array() 
	Log( "Ready" )
	
	//Start preview.
	cam.StartPreview()
}


//Handle menu selections.
function OnMenu( name )
{           
    if( name=="Snap" ) 
		Snap()
    else if( name=="Exit" ) 
        app.Exit()   
}

//Called when motion is detected.
//(data contains an array of detection strength 
//values corresponding to each mosaic tile)
function OnMotion( data )
{
	//Show info in log.
	Log( data )
	
	//Snap a photo.
	Snap()
}

//Take a picture and store to sdcard.
function Snap()
{
	//Limit number of pictures by recycling
	//the file names.
	if( count >= maxPics ) count = 1;
	else count++;
	
	//Save picture to sdcard.
	var file = snapFolder+"/Snap"+count+".jpg";
    cam.TakePicture( file )
    Log( file )
}

//Called when user touches 'sensitivity' seek bar.
//( value ranges from 0 to 100 )
function skb_OnTouch( value )
{
	sensitivity = value;
	ChangeSettings()
}

//Called when user touches mosaic spinner.
function spin_OnTouch( item )
{
	mosaic = item;
	ChangeSettings()
}

//Change the motion detection settings.
function ChangeSettings()
{
	var x=3, y=2;
	if( mosaic=="3x3" ) { x = 3; y = 3; }
	else if( mosaic=="5x5" ) { x = 5; y = 5; }
	else if( mosaic=="10x10" ) { x = 10; y = 10; }
	
	cam.MotionMosaic( x, y, (100-sensitivity)/5, minPeriod, img )
}

//Add messages to log.
function Log( msg )
{
	var maxLines = txt.GetMaxLines()-1;
	if( log.length >= maxLines ) log.shift()
	log.push( msg + "\n" )
	txt.SetText( log.join("") )
}
