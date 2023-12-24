//Create global variables.
var destFile = "/sdcard/test.wav"
var timer = 0;

//Called when application is started.
function OnStart()
{
	//Create a layout with objects vertically centered.
	lay = app.CreateLayout( "linear", "VCenter,FillXY" )	
	lay.SetBackGradient( "#888888", "#555555" )

	//Create a text control to show data log.
	txt = app.CreateText( "Level: 0%", 0.8 )
	txt.SetTextColor( "#222222" )
	txt.SetTextShadow( 1, 0,1, "#88ffffff" )
	txt.SetTextSize( 24 )
	lay.AddChild( txt )
	
	//Create a 'Start' button.
	btnStart = app.CreateButton( "Start", 0.6, -1, "Alum,NoSound" )
	btnStart.SetMargins( 0, 0.05, 0, 0 )
	btnStart.SetOnTouch( btnStart_OnTouch )
	lay.AddChild( btnStart )
	
	//Create a 'Pause' button.
	btnPause = app.CreateButton( "Pause", 0.6, -1, "Alum,NoSound" )
	btnPause.SetMargins( 0, 0.05, 0, 0 )
	btnPause.SetOnTouch( btnPause_OnTouch )
	lay.AddChild( btnPause )
	
	//Create a 'Stop' button.
	btnStop = app.CreateButton( "Stop", 0.6, -1, "Alum,NoSound" )
	btnStop.SetMargins( 0, 0.05, 0, 0 )
	btnStop.SetOnTouch( btnStop_OnTouch )
	lay.AddChild( btnStop )
	
	//Create a 'Play' button.
	btnPlay = app.CreateButton( "Play File", 0.6, -1, "Alum,NoSound" )
	btnPlay.SetMargins( 0, 0.1, 0, 0 )
	btnPlay.SetOnTouch( btnPlay_OnTouch )
	lay.AddChild( btnPlay )
	
	//Add layout to app.	
	app.AddLayout( lay )
	
	//Create Audio Recorder and set dest file.
	rec = app.CreateAudioRecorder()
	rec.SetFile( destFile )
	
	//Create media player.
	player = app.CreateMediaPlayer()
	player.SetOnReady( player_OnReady )
	
	//Switch off debug so we don't fill the log.
    app.SetDebugEnabled( false )
}

//Called when user touches our 'Start' button.
function btnStart_OnTouch()
{
	rec.Start()
	txt.SetTextColor( "#aa2222" )
	clearInterval( timer )
	timer = setInterval( GetLevel, 250 )
}

//Called when user touches our 'Pause' button.
function btnPause_OnTouch()
{
	rec.Pause()
	txt.SetTextColor( "#222222" )
}

//Called when user touches our 'Stop' button.
function btnStop_OnTouch()
{
	rec.Stop()
	txt.SetTextColor( "#222222" )
	txt.SetText( "Level: 0%" )
	clearInterval( timer )
}

//Get the current RMS signal level.
//(A max of about 0.7 for sine waves)
function GetLevel()
{
    var level = rec.GetRMS()
    txt.SetText( "Level: " + Math.round(100*level/0.72) + "%" )
}

//Called when user touches our 'Play' button.
function btnPlay_OnTouch()
{
    player.SetFile( destFile )
}

//Called when the WAV file is loaded.
function player_OnReady()
{
     player.Play()
}


