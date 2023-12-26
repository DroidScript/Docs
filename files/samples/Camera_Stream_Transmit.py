from native import app

# Set the IP of your target Android device here.
# (Note: A dedicated WiFi router is recommended for highest speed)
ip = "192.168.1.221"
global ip

# Called when application is created.
def OnStart():
    global cam
    # Lock orientation while we create initial layout.
    app.SetOrientation("Landscape")

    # Create horizontal layout for camera view and buttons.
    lay = app.CreateLayout("linear", "Horizontal,VCenter,FillXY")

    # Create camera view.
    cam = app.CreateCameraView(0.5, 0.7, "VGA,UseABGR")
    cam.SetOnReady(cam_OnReady)
    lay.AddChild(cam)

    # Add layouts.
    app.AddLayout(lay)

# Called when camera is ready.
def cam_OnReady():
    # Set focus mode and start preview.
    cam.SetFocusMode("Video")
    cam.StartPreview()

    # Start video stream.
    cam.Stream(ip, 11055, 80, 30, 32000)