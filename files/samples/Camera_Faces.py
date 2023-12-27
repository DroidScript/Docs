from native import app
import time

# Init global variables.
width = 320
height = 240
tLast = None

# Called when application is started.
def OnStart():
    global cam, img
    # Fix orientation to landscape since
    # most phones cameras work this way.
    app.SetOrientation("Landscape")

    # Stop screen turning off.
    app.PreventScreenLock(True)

    # Create frame layout that fills the screen.
    lay = app.CreateLayout("Frame", "Horizontal,FillXY")

    # Create camera view control.
    #(Reduce to QVGA-widthxheight resolution for performance reasons)
    cam = app.CreateCameraView(1, 1, "QVGA,UseBitmap,NoRotate,Front")
    cam.SetOnReady(cam_OnReady)
    lay.AddChild(cam)

    # Create an image control over the top of the
    # camera view with transparency (alpha).
    img = app.CreateImage(None, 1, 1)
    img.SetAlpha(0.5)
    lay.AddChild(img)
    img.SetPaintColor("#ff0000")
    img.SetPaintStyle("Line")
    img.SetLineWidth(2)
    img.SetTextSize(16)
    img.SetAutoUpdate(False)

    # Add main layout to app.
    app.AddLayout(lay)

# Called when camera is ready.
def cam_OnReady():
    # Start preview.
    cam.StartPreview()

    # Start image processing.
    ProcessImage()

# Extract and process image data.
def ProcessImage():
    global faces
    # Get faces list.
    faces = cam.FindFaces(10)

    # Mark found faces over camera preview.
    DrawFaces(faces)

    # Call this function again ASAP.
    time.sleep(0)
    ProcessImage()

# Draw area where face detected.
def DrawFaces(faces):

    # Clear image.
    img.Clear()

    # Loop through faces list.
    for i in range(len(faces)):
        # Get face info.
        face = faces[i]

        # Mark face boundaries.
        img.DrawRectangle(face.midPoint.x/width - face.eyeDistance/width,
                          face.midPoint.y/height - face.eyeDistance/height,
                          face.midPoint.x/width + face.eyeDistance/width,
                          face.midPoint.y/height + face.eyeDistance/height)

    # Draw frame rate.
    tNow = time.time()
    img.DrawText(int(1000/(tNow-tLast)), 0.03, 0.06)
    tLast = tNow

    # Update image canvas.
    img.Update()