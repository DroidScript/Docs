from native import app

# Called when application is started.
def OnStart():
    global loc, log, txt

    # Create vertical layout that fills the screen.
    lay = app.CreateLayout( "Linear", "FillXY,VCenter" )

    # Create a text control to show data log.
    txt = app.CreateText( "", 0.9, 0.9, "Multiline,Left" )
    txt.SetTextColor( "#ffffffff" )
    lay.AddChild( txt )

    # Create and start location sensor.
    # (Achievable update rate is hardware specific)
    loc = app.CreateLocator( "GPS,Network" )
    loc.SetOnChange( loc_OnChange )
    loc.SetRate( 10 ) # 10 seconds.
    loc.Start()

    # Add main layout to app.
    app.AddLayout( lay )

    # Create list to hold log messages.
    log = []

    Log( "Locating..." )

# Called when we get a change in location.
def loc_OnChange( data ):
    Log( data.provider+": Lat "+str(data.latitude)+", Lng "+str(data.longitude)
        +", Spd "+str(data.speed)+", Bear "+str(data.bearing)
        +", Alt "+str(data.altitude)+", Accu "+str(data.accuracy)+"" )

    # Calculate our distance in meters from Greenwich London.
    dist = loc.GetDistanceTo( 51.4778, 0.0 )
    Log( "Distance to London: "+str(dist/1000)+" km" )

    # Calculate our bearing to Greenwich London.
    bearing = loc.GetBearingTo( 51.4778, 0.0 )
    Log( "Bearing to London: "+str(bearing)+" degrees\n" )

# Add messages to log.
def Log( msg ):
    if( txt.GetLineTop( txt.GetLineCount() ) >= 0.8 ):
        log.pop(0)

    log.append( msg + "\n" )
    txt.SetText( "".join(log) )