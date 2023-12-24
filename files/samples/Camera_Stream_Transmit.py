Translated code (Python):

```python
# Set the IP of your target Android device here.
# (Note: A dedicated WiFi router is recommended for highest speed)
ip = "192.168.1.221"

# Called when application is created.
def OnStart():
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
```

Note: To make this code work properly in Python, you would need to have the necessary app module imported and the appropriate methods and functions available.