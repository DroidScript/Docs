from native import app
import app

# Called when application is started.
def OnStart():
    global cam, btn, recFolder
    # Fix orientation to landscape since
    # most phones cameras work this way.
    app.SetOrientation("Landscape")

    # Create horizontal layout that fills the screen.
    lay = app.CreateLayout("Linear", "Horizontal,FillXY,VCenter")
    lay.SetBackground("/res/drawable/pattern_carbon", "repeat")

    # Create camera view control.
    cam = app.CreateCameraView(0.6, 0.8)
    cam.SetOnReady(cam_OnReady)
    cam.SetMargins(0, 0, 0.04, 0)
    lay.AddChild(cam)

    # Create vertical layout on right for other stuff.
    layRight = app.CreateLayout("Linear", "Vertical")
    lay.AddChild(layRight)

    # Create record button.
    btn = app.CreateButton("Record", 0.2, 0.15, "Alum")
    btn.SetMargins(0, 0.06, 0, 0)
    btn.SetOnTouch(btn_OnTouch)
    layRight.AddChild(btn)

    # Add main layout to app.
    app.AddLayout(lay)

    # Create a folder for recordings.
    recFolder = "/sdcard/Videos"
    app.MakeFolder(recFolder)

# Called when camera is ready.
def cam_OnReady():
    # Set focus mode and start preview.
    cam.SetFocusMode("Video")
    cam.StartPreview()

# Handle record button.
def btn_OnTouch():
    if cam.IsRecording():
        # Stop recording and update button.
        cam.Stop()
        btn.SetText("Record")
    else:
        # Start recording and update button.
        cam.Record(recFolder + "/test.mp4")
        btn.SetText("Stop")