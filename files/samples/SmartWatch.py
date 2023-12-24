from native import app

dotPos = 0.2

#Called when phone application is started.
def OnStart():
    global watch, player
    #Create app layout.
    lay = app.CreateLayout("linear", "VCenter,FillXY")

    #Create a text label and add it to layout.
    txt = app.CreateText("Sony SmartWatch Sample")
    txt.SetTextSize(22)
    lay.AddChild(txt)

    #Add layout to app.
    app.AddLayout(lay)

    #Create a layout for the SmartWatch.
    CreateWatchLayout()

    #Create SmartWatch object and set callbacks.
    watch = app.CreateSmartWatch()
    watch.SetOnShow(watch_OnShow)
    watch.SetOnHide(watch_OnHide)
    watch.SetOnSwipe(watch_OnSwipe)
    watch.SetOnMenu(watch_OnMenu)
    watch.SetOnBack(watch_OnBack)

    #Create media player and load a soundfile.
    player = app.CreateMediaPlayer()
    player.SetFile("/Sys/Snd/Poing.ogg")

#Create a layout for the SmartWatch.
#(Only Text and Image controls are supported)
def CreateWatchLayout():
    global layWatch, img
    #Create a layout.
    layWatch = app.CreateLayout("Linear", "SmartWatch")

    #Create a blank image 220x80 pixels.
    img = app.CreateImage(None, 220, 100, "px")
    layWatch.AddChild(img)

    #Create 'Play' text object.
    btnPlay = app.CreateText("Play", 180, 60, "px")
    btnPlay.SetBackColor("#ff444488")
    btnPlay.SetOnTouchDown(btnPlay_OnTouchDown)
    layWatch.AddChild(btnPlay)

    #Hide watch layout so we don't see it on the phone.
    layWatch.SetVisibility("Gone")

    #Add watch layout to app.
    app.AddLayout(layWatch)

#Draw a picture on the watch.
def DrawPicture():
    #Fill image with solid black.
    img.SetColor("#ff000000")

    #Draw circle with radius 0.1 of image width.
    img.SetPaintColor("#ff992299")
    img.DrawCircle(dotPos, 0.3, 0.1)

    #Move dot along screen.
    if dotPos > 0.8:
        dotPos = 0.2
    else:
        dotPos += 0.2

    #Draw some red text.
    img.SetTextSize(6)
    img.SetPaintColor("#ffff0000")
    img.DrawText("Hello World", 0.1, 0.8)

    #Send layout to watch.
    watch.ShowLayout(layWatch)

#Called when SmartWatch 'Play' button is pressed.
def btnPlay_OnTouchDown(ev):
    #Play a sound on phone.
    player.SeekTo(0)
    player.Play()

    #Vibate watch.
    watch.Vibrate(50, 50, 1)

    #Redraw picture.
    DrawPicture()

#Called when SmartWatch app is shown.
def watch_OnShow():
    app.ShowPopup("watch_OnShow")
    DrawPicture()

#Called when SmartWatch app is hidden.
def watch_OnHide():
    app.ShowPopup("watch_OnHide")

#Called when SmartWatch screen is swiped.
def watch_OnSwipe(dir):
    #Show a message on the watch.
    watch.ShowMessage("watch_OnSwipe:" + dir)

#Called when SmartWatch menu button is touched.
def watch_OnMenu():
    app.ShowPopup("watch_OnMenu")

#Called when SmartWatch back button is touched.
def watch_OnBack():
    #Stop the watch app.
    watch.StopApp()