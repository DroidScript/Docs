
//Called when application is started.
function OnStart()
{   
    //Create layout that fills the screen.
    lay = app.CreateLayout( "Linear", "FillXY,VCenter" )
        
    //Create video view.
    player = app.CreateVideoView( 0.9, 0.4 )
    lay.AddChild( player )
    player.SetOnReady( player_OnReady )
    player.SetOnComplete( player_OnComplete )
	player.SetOnError( player_OnError )
    
    //Create video list.
    spin = app.CreateSpinner( "...,NASA,BUNNY" )
    spin.SetSize( 0.8, -1 )
    spin.SetOnTouch( spn_OnTouch )
    lay.AddChild( spin )
    
    //Create Play button.
    btnPlay = app.CreateButton( "Play", 0.4, 0.1 )
    btnPlay.SetMargins( 0, 0.05, 0, 0 )
    btnPlay.SetOnTouch( btnPlay_OnTouch )
    lay.AddChild( btnPlay ) 
    
    //Create Pause button.
    btnPause = app.CreateButton( "Pause", 0.4, 0.1 )
    btnPause.SetOnTouch( btnPause_OnTouch )
    lay.AddChild( btnPause ) 
	
	//Create seek bar and add to layout.
	skb = app.CreateSeekBar( 0.8, -1 )
	skb.SetMargins( 0, 0.05, 0, 0 )
	skb.SetRange( 1.0 )
	skb.SetOnTouch( skb_OnTouch )
	lay.AddChild( skb )
    
    //Add main layout to app.
    app.AddLayout( lay )
	
	//Start timer to update seek bar every second.
	setInterval( "Update()", 1000 )
}

//Handle file select.
function spn_OnTouch( item )
{
    if( item=="NASA" ) {
		app.ShowProgress( "Buffering..." )
		setTimeout( "app.HideProgress()", 7000 )
		player.SetFile( "https://archive.org/download/NASAMissions/NASA Missions.mp4" )
	}
	else if( item=="BUNNY" ) {
		app.ShowProgress( "Buffering..." )
		setTimeout( "app.HideProgress()", 10000 )
		player.SetFile( "rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mov")
		skb.SetVisibility( "Show" )
	}
}

//Called when file is ready to play.
function player_OnReady()
{
	app.HideProgress()
    player.Play()
}

//Called when playback has finished.
function player_OnComplete()
{
    app.ShowPopup( "Finished" )
}

//Called when an error occurs.
function player_OnError()
{
    app.ShowPopup( "Error" )
}

//Handle Play button.
function btnPlay_OnTouch() 
{
    player.Play()
}

//Handle Pause button.
function btnPause_OnTouch() 
{
    player.Pause()
}

//Called when user touches the seek bar.
function skb_OnTouch( value )
{
	player.SeekTo( dur * value )
}

//Update seek bar.
function Update()
{
	dur = player.GetDuration()
	prog = player.GetPosition()
	if( dur ) skb.SetValue( prog / dur )
}

