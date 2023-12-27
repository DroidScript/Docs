from native import app

#This demo attempts shows how to get the color of a point at the center
#of the camera image using the 'ReportColors' method of the camera
#control. The ReportColors method can actually be used to get the colors
#of a number of pixels but we only need one for this demo.

#Init global variables.
count = 0

#Called when application is started.
def OnStart():
    global layLeft, cam, imgGraph

    #Fix orientation to landscape since
    #most phones cameras work this way.
    app.SetOrientation( "Landscape" )

    #Stop screen turning off.
    app.PreventScreenLock( True )

    #Create horizontal layout that fills the screen.
    lay = app.CreateLayout( "Linear", "Horizontal,FillXY" )

    #Create frame layout on left for camera view.
    layLeft = app.CreateLayout( "Frame" )
    layLeft.SetMargins( 0,0.1,0.02,0 )
    lay.AddChild( layLeft )

    #Create camera view control.
    #(Reduce to 'QVGA' resolution for performance reasons)
    cam = app.CreateCameraView( 0.4, 0.8, "QVGA" )
    cam.SetOnReady( cam_OnReady )
    layLeft.AddChild( cam )

    #Create vertical layout on right for other stuff.
    layRight = app.CreateLayout( "Linear", "Vertical" )
    lay.AddChild( layRight )

    #Create 'Use Flash' check box.
    chkFlash = app.CreateCheckBox( "Use Flash" )
    chkFlash.SetMargins( 0,0.1,0,0 )
    chkFlash.SetOnTouch( chkFlash_OnTouch )
    layRight.AddChild( chkFlash )

    #Create image control for graph display.
    imgGraph = app.CreateImage( None, 0.3, 0.4 )
    imgGraph.SetMargins( 0.05,0.1,0,0 )
    imgGraph.SetBackColor( "#222222" )
    imgGraph.SetTextSize( 12 )
    imgGraph.SetAutoUpdate( False )
    layRight.AddChild( imgGraph )

    #Add main layout to app.
    app.AddLayout( lay )

#Called when camera is ready.
def cam_OnReady():
    #Create an image control over the top of the
    #camera view with transparency (alpha) so
    #we can show a target area.
    img = app.CreateImage( None, 0.4, 0.8 )
    img.SetAlpha( 0.5 )
    layLeft.AddChild( img )
    img.SetPaintColor( "#ff0000"  )
    img.SetPaintStyle( "Line" )
    img.SetLineWidth( 2.5 )
    img.DrawRectangle( 0.45, 0.45, 0.55, 0.55 )

    #Enable color reporting for a single point at the center
    #of the image with a sample size of 8 pixels and a max report
    #rate of roughly 3x a second.
    cam.ReportColors( "0.5,0.5", OnColor, 16, 300 )

    #Note: You can use the '|' separator to report
    #a list of points like this:- "0.1,0.1|0.2,0.2"

    #Start preview.
    cam.StartPreview()

    #Tell user we are ready.
    app.TextToSpeech( "Ready" )

#Handle reported colors.
def OnColor( colors ):
    global red, green, blue, name
    #Get pixel colors.
    red = colors[0][0]
    green = colors[0][1]
    blue = colors[0][2]

    #Draw color graph.
    DrawGraph( red, green, blue )

    #Speak color name every 6 samples.
    if count % 6 == 0:
        name = GetColorName( red, green, blue )
        app.TextToSpeech( name )
    count += 1

#Convert decimal to two digit hex number.
def dec2hex( i ):
    return (i+0x100).toString(16).substr(-2).upper()

#Draw a simple graph of color values.
def DrawGraph( red, green, blue ):
    xr = 0.2
    xg = 0.4
    xb = 0.6
    imgGraph.Clear()

    #Draw red bar and value.
    imgGraph.SetPaintColor( "#ff0000" )
    imgGraph.DrawRectangle( xr, 1, xr+0.1, 1-red/255 )
    hex = red.toString(16).upper()
    imgGraph.DrawText( hex, xr, 0.1 )

    #Draw green bar and value.
    imgGraph.SetPaintColor( "#00ff00" )
    imgGraph.DrawRectangle( xg, 1, xg+0.1, 1-green/255 )
    hex = green.toString(16).upper()
    imgGraph.DrawText( hex, xg, 0.1 )

    #Draw blue bar and value.
    imgGraph.SetPaintColor( "#0000ff" )
    imgGraph.DrawRectangle( xb, 1, xb+0.1, 1-blue/255 )
    hex = blue.toString(16).upper()
    imgGraph.DrawText( hex, xb, 0.1 )

    #Update image.
    imgGraph.Update()

#Handle 'Use Flash' checkbox touch
def chkFlash_OnTouch( value ):
    cam.SetFlash( value )

#Get a color name from rgb values.
def GetColorName( red, green, blue ):
    minDiff = 1000
    best = 0

    #Find closest matching color.
    for i in range(len(colors)):
        diff = (red - colors[i][0])**2
        diff += (green - colors[i][1])**2
        diff += (blue - colors[i][2])**2
        diff = diff**0.5
        if diff < minDiff:
            minDiff = diff
            best = i
    return colors[best][3]

#Create an array of well known colors.
#(Add more colors here to make it more accurate)
colors = [
    [0xFF,0x00,0x00, "Red