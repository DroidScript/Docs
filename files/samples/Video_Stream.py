from native import app, ui

# Translated Python Code

# Called when application is started.
def OnStart():
    global player, skb
    # Create layout that fills the screen.
    lay = ui.createLayout( "Linear", "FillXY,VCenter" )

    # Create video view.
    player = app.createVideoView( 0.9, 0.4 )
    lay.addChild( player )
    player.setOnReady( player_OnReady )
    player.setOnComplete( player_OnComplete )
    player.setOnError( player_OnError )

    # Create video list.
    spin = ui.createSpinner( "...,NASA,BUNNY" )
    spin.setSize( 0.8, -1 )
    spin.setOnTouch( spn_OnTouch )
    lay.addChild( spin )

    # Create Play button.
    btnPlay = ui.createButton( "Play", 0.4, 0.1 )
    btnPlay.setMargins( 0, 0.05, 0, 0 )
    btnPlay.setOnTouch( btnPlay_OnTouch )
    lay.addChild( btnPlay )

    # Create Pause button.
    btnPause = ui.createButton( "Pause", 0.4, 0.1 )
    btnPause.setOnTouch( btnPause_OnTouch )
    lay.addChild( btnPause )

    # Create seek bar and add to layout.
    skb = ui.createSeekBar( 0.8, -1 )
    skb.setMargins( 0, 0.05, 0, 0 )
    skb.setRange( 1.0 )
    skb.setOnTouch( skb_OnTouch )
    lay.addChild( skb )

    # Add main layout to app.
    app.addLayout( lay )

    # Start timer to update seek bar every second.
    setInterval( "Update()", 1000 )

# Handle file select.
def spn_OnTouch(item):
    if item == "NASA":
        app.showProgress( "Buffering..." )
        setTimeout( "app.hideProgress()", 7000 )
        player.setFile( "https://archive.org/download/NASAMissions/NASA Missions.mp4" )
    elif item == "BUNNY":
        app.showProgress( "Buffering..." )
        setTimeout( "app.hideProgress()", 10000 )
        player.setFile( "rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mov" )
        skb.setVisibility( "Show" )

# Called when file is ready to play.
def player_OnReady():
    app.hideProgress()
    player.play()

# Called when playback has finished.
def player_OnComplete():
    app.showPopup( "Finished" )

# Called when an error occurs.
def player_OnError():
    app.showPopup( "Error" )

# Handle Play button.
def btnPlay_OnTouch():
    player.play()

# Handle Pause button.
def btnPause_OnTouch():
    player.pause()

# Called when user touches the seek bar.
def skb_OnTouch(value):
    player.seekTo( dur * value )

# Update seek bar.
def Update():
    dur = player.getDuration()
    prog = player.getPosition()
    if dur:
        skb.setValue( prog / dur )