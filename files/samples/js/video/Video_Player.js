
//Change this to your video folder.
var folder = "/sdcard/DCIM/Camera";

//Called when application is started.
function OnStart()
{   
	//Show a progress dialog.
	app.ShowProgress("Loading...")
	
	//Create layout that fills the screen.
	lay = app.CreateLayout( "Linear", "FillXY,VCenter" )
		
	//Create video view.
	player = app.CreateVideoView( 0.8, 0.4 )
	lay.AddChild( player )
	player.SetOnReady( player_OnReady )
	player.SetOnComplete( player_OnComplete )
	
	//Create video list.
	spin = app.CreateSpinner( "[No videos found]" )
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
	
	//Add main layout to app.
	app.AddLayout( lay )
	
	//Find first ten mp4 files on internal sdcard.
	mp4List = app.ListFolder( folder, ".mp4", 10 )
	spin.SetList( mp4List )
	app.HideProgress()
	
	//Load the first file found.
	player.SetFile( folder + "/" + spin.GetText() )
	dur = null;
	
	//Start timer to update seek bar every second.
	setInterval( "Update()", 1000 )
}

//Called when file is ready to play.
function player_OnReady()
{
	player.Play()
}

//Called when playback has finished.
function player_OnComplete()
{
	app.ShowPopup( "Finished" )
}

//Handle file select.
function spn_OnTouch( item )
{
	player.SetFile( folder + "/" + item )
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
	dur = player.GetDuration()
	prog = player.GetPosition()
	if( dur ) skb.SetValue( prog / dur )
}


