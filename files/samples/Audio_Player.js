//Demo of a simple media player.
//Note: This example expects some mp3 files to exist
//in the '/sdcard/music' folder

//Called when application is started.
function OnStart()
{   
	//Create layout that fills the screen.
	lay = app.CreateLayout( "Linear", "FillXY,VCenter" )
		
	//Create music list.
	spin = app.CreateSpinner( "[No tracks found]" )
	spin.SetSize( 0.8, -1 )
	spin.SetOnTouch( spn_OnTouch )
	lay.AddChild( spin )
	
	//Create 'Play' button.
	btnPlay = app.CreateButton( "Play", 0.4, 0.1 )
	btnPlay.SetMargins( 0, 0.05, 0, 0 )
	btnPlay.SetOnTouch( btnPlay_OnTouch )
	lay.AddChild( btnPlay ) 
	
	//Create 'Pause' button.
	btnPause = app.CreateButton( "Pause", 0.4, 0.1 )
	btnPause.SetOnTouch( btnPause_OnTouch )
	lay.AddChild( btnPause ) 
	
	//Create 'Stop' button.
	btnStop = app.CreateButton( "Stop", 0.4, 0.1 )
	btnStop.SetOnTouch( btnStop_OnTouch )
	lay.AddChild( btnStop ) 
	
	//Create seek bar and add to layout.
	skb = app.CreateSeekBar( 0.8, -1 )
	skb.SetMargins( 0, 0.05, 0, 0 )
	skb.SetRange( 1.0 )
	skb.SetOnTouch( skb_OnTouch )
	lay.AddChild( skb )
	
	//Create volume bar and add to layout.
	skbVol = app.CreateSeekBar( 0.8, -1 )
	skbVol.SetMargins( 0, 0.05, 0, 0 )
	skbVol.SetOnTouch( skbVol_OnTouch )
	skbVol.SetRange( 1.0 )
	skbVol.SetValue( 0.5 )
	lay.AddChild( skbVol )
	
	//Add main layout to app.
	app.AddLayout( lay )
	
	//Create media player.
	player = app.CreateMediaPlayer()
	player.SetOnReady( player_OnReady )
	player.SetOnComplete( player_OnComplete )
	
	//Find mp3 files on internal sdcard .
	mp3List = app.ListFolder( "/sdcard/music", ".mp3" )
	spin.SetList( mp3List )
	
	//Load the first file found.
	player.SetFile( "/sdcard/music/" + spin.GetText() )
	dur = null;
	
	//Start timer to update seek bar every second.
	setInterval( "Update()", 1000 )
}

//Called when file is ready to play.
function player_OnReady()
{
	//Get file duration.
	dur = player.GetDuration()
	app.ShowPopup( "Ready" )
}

//Called when playback has finished.
function player_OnComplete()
{
	app.ShowPopup( "Finished" )
}

//Handle file select.
function spn_OnTouch( item )
{
	player.SetFile( "/sdcard/music/" + item )
}

//Handle 'Play' button.
function btnPlay_OnTouch() 
{
	player.Play()
}

//Handle 'Pause' button.
function btnPause_OnTouch() 
{
	player.Pause()
}

//Handle 'Stop' button.
function btnStop_OnTouch() 
{
	player.Stop()
}

//Called when user touches the seek bar.
function skb_OnTouch( value )
{
	player.SeekTo( dur * value )
}

//Update seek bar.
function Update()
{
	prog = player.GetPosition()
	if( dur ) skb.SetValue( prog / dur )
}

//Called when user touches volume bar.
function skbVol_OnTouch( value )
{
	player.SetVolume( value, value )
}

