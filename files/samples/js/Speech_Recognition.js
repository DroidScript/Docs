//Speech recognition sample.
//Note: The speech recognition engine for some 
//languages can be downloaded for off-line use.

//Called when application is started.
function OnStart()
{
	//Create a layout with objects vertically centered.
	lay = app.CreateLayout( "linear", "VCenter,FillXY" )	

	//Create a button.
	btn = app.CreateButton( "Talk To Me", 0.3, 0.1 )
	btn.SetMargins( 0, 0.05, 0, 0 )
	btn.SetOnTouch( btn_OnTouch )
	lay.AddChild( btn )
	
	//Add layout to app.	
	app.AddLayout( lay )
	
	//Create recognition object and set callbacks.
	speech = app.CreateSpeechRec()
	speech.SetOnReady( speech_OnReady )
	speech.SetOnResult( speech_OnResult )
	speech.SetOnError( speech_OnError )
}

//Called when user touches our button.
function btn_OnTouch()
{
    //Start recognizing.
	speech.Recognize()
}

//Called when speech engine is ready.
function speech_OnReady()
{
    app.ShowPopup( "Listening...", "Short" )
}

//Called with the recognition result(s).
function speech_OnResult( results )
{
    //An array of recognition results is returned
    //here, with the most probable at the front
    //of the array.
    
    //Show the top result.
    app.ShowPopup( results[0] )
}

//Called if recognition fails.
function speech_OnError()
{
    app.ShowPopup( "Please speak more clearly!" )
}

