from native import app
import time

frameCounter = 0

def OnStart():
    global glview, droidWidth, droidHeight, imgDroid
    app.SetScreenMode("Game")
    lay = app.CreateLayout("Linear", "FillXY")
    glview = app.CreateGLView(1, 1, "Fast2d")
    lay.AddChild(glview)
    app.AddLayout(lay)
    droidWidth = 1.0
    droidHeight = droidWidth * glview.aspect
    imgDroid = glview.CreateImage("/Sys/Img/Hello.png", StartRendering)

def StartRendering():
    while True:
        DrawFrame()
        time.sleep(1/30)

def DrawFrame():
    x = 0.5 - (droidWidth/2)
    y = 0.5 - (droidHeight/2)
    angle = (frameCounter*10)

    scale = 0.1 + abs(math.sin(frameCounter/10))
    scaledDroidWidth = droidWidth * scale
    scaledDroidHeight = droidHeight * scale

    x = x - ((scaledDroidWidth/2) - (droidWidth/2))
    y = y - ((scaledDroidHeight/2) - (droidHeight/2))

    glview.DrawImage(imgDroid, x, y, scaledDroidWidth, scaledDroidHeight, angle)
    glview.Render()
    frameCounter += 1