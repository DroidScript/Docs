from native import app

# Called when application is started.
def OnStart():
    global nxt
    # Create our screen layout.
    CreateLayout()

    # Create NXT controller object.
    nxt = app.CreateNxt()

# Create the screen layout.
def CreateLayout():
    # Create the layout (with repeating pattern background).
    lay = app.CreateLayout("linear", "VCenter,FillXY")
    lay.SetBackground("/Sys/Img/Tile.png", "repeat")

    # Create Connect button.
    btn = app.CreateButton("Connect", 0.3, 0.1, "Lego")
    btn.SetMargins(0, 0, 0, 0.1)
    btn.SetOnTouch(btn_OnTouch)
    lay.AddChild(btn)

    # Create 'sound' image (square image, 0.3 of screen width).
    imgSnd = app.CreateImage("/Sys/Img/Sound.png", 0.3)

    # Set the function to be called when image is touched.
    imgSnd.SetOnTouch(imgSnd_OnTouch)

    # Add the image to our layout.
    lay.AddChild(imgSnd)

    # Add layout to the app.
    app.AddLayout(lay)

# Called when user presses connect.
def btn_OnTouch():
    # Show list of NXT devices.
    native.nxt.ShowDevices()

# Called when sound image is touched.
def imgSnd_OnTouch(e):
    if e.action == "Down":
        # Play a 100Hz tone for 500 milliseconds.
        native.nxt.Beep(100, 500)