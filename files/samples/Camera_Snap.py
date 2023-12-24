Here is the translated code:

```python
from native import app, gfx, ui, MUI

# Called when application is started.
def OnStart():
    # Fix orientation to landscape since
    # most phone's cameras work this way.
    app.SetOrientation("Landscape")
  
    # Create horizontal layout that fills the screen.
    lay = app.CreateLayout("linear", "horizontal,fillxy,vcenter")
    lay.SetBackground("/res/drawable/pattern_carbon", "repeat")

    # Create camera view control.
    cam = app.CreateCameraView(0.6, 0.8)
    cam.SetOnReady(cam_OnReady)
    cam.SetMargins(0, 0, 0.04, 0)
    lay.AddChild(cam)

    # Create vertical layout on right for other stuff.
    layRight = app.CreateLayout("linear", "vertical")
    lay.AddChild(layRight)

    # Create image control for previewing pictures.
    img = app.CreateImage(None, 0.18, 0.22)
    img.SetBackColor("#ff000000")
    layRight.AddChild(img)

    # Set target image for picture previews.
    cam.SetPreviewImage(img)

    # Create shutter button.
    btn = app.CreateButton("Snap", 0.2, 0.15, "Alum")
    btn.SetMargins(0, 0.06, 0, 0)
    btn.SetOnTouch(btn_OnTouch)
    layRight.AddChild(btn)

    # Add main layout to app.
    app.AddLayout(lay)

    # Create a folder for snaps.
    snapFolder = "/sdcard/Snaps"
    app.MakeFolder(snapFolder)

# Called when camera is ready.
def cam_OnReady():
    # Start preview.
    cam.StartPreview()

# Handle shutter button.
def btn_OnTouch():
    # Take a picture and store to sdcard.
    cam.TakePicture(snapFolder + "/Snap.jpg")
```