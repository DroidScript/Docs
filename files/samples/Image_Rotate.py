from native import app

# Initialise some variables
angle = 0
global angle

# Called when application is started
def OnStart():
    global img
    # Create a layout with objects vertically centered
    lay = app.CreateLayout("linear", "VCenter,FillXY")

    # Create a frame layout so we can put one image over another
    layFrame = app.CreateLayout("frame", "")

    # Create first image
    img = app.CreateImage("/Sys/Img/Droid1.png", 0.4, -1)
    layFrame.AddChild(img)

    # Create second image
    img = app.CreateImage("/Sys/Img/Hello.png", 0.4, -1)
    img.Scale(0.3, 0.3)
    img.Move(0, 0.15)
    layFrame.AddChild(img)

    # Add layouts to app
    lay.AddChild(layFrame)
    app.AddLayout(lay)

    # Start timer to rotate top image
    app.setInterval(RotateImage, 10)

def RotateImage():
    img.Rotate(angle)
    angle += 3