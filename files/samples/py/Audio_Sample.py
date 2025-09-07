from native import app

# Create global variables.
timer = 0

# Called when the application is started.
def OnStart():
    global rec, imgBack, imgData
    # Lock screen orientation to Landscape.
    app.SetOrientation("Landscape")

    # Create a layout with objects vertically centered.
    lay = app.CreateLayout("linear", "VCenter,FillXY")
    lay.SetBackGradient("#888888", "#666666")

    # Create a layout with two images one above
    # the other to draw the graph background and data.
    layGraph = app.CreateLayout("Frame")
    lay.AddChild(layGraph)
    imgBack = app.CreateImage(None, 0.95, 0.75)
    imgBack.SetAutoUpdate(False)
    layGraph.AddChild(imgBack)
    imgData = app.CreateImage(None, 0.95, 0.75)
    imgData.SetAutoUpdate(False)
    layGraph.AddChild(imgData)

    # Create a horizontal layout for buttons.
    layHoriz = app.CreateLayout("Linear", "Horizontal")
    layHoriz.SetMargins(0, 0.02, 0, 0)
    lay.AddChild(layHoriz)

    # Create a Start button.
    btnStart = app.CreateButton("Start", 0.3, -1, "Alum,NoSound")
    btnStart.SetMargins(0, 0, 0, 0)
    btnStart.SetOnTouch(btnStart_OnTouch)
    layHoriz.AddChild(btnStart)

    # Create a Stop button.
    btnStop = app.CreateButton("Stop", 0.3, -1, "Alum,NoSound")
    btnStop.SetMargins(0.04, 0, 0, 0)
    btnStop.SetOnTouch(btnStop_OnTouch)
    layHoriz.AddChild(btnStop)

    # Add layout to the app.
    app.AddLayout(lay)

    # Create an Audio Recorder.
    # Frequencies: 8000, 11025, 22050 44100 or 48000
    rec = app.CreateAudioRecorder()
    rec.SetFrequency(8000)

    # Draw our sample graph background.
    DrawGraph()

    # Switch off to speed things up.
    app.SetDebugEnabled(False)

# Called when the user touches our Start button.
def btnStart_OnTouch():
    global timer
    rec.Start()
    timer = app.SetInterval(GetSamples, 10)

# Called when the user touches our Stop button.
def btnStop_OnTouch():
    rec.Stop()
    app.ClearInterval(timer)

# Get samples from the current data buffer.
def GetSamples():
    global data
    data = rec.GetData()
    DisplaySamples(data)

# Draw graph display background.
def DrawGraph():
    # Fill image with solid black.
    imgBack.SetColor("#ff000000")

    # Set drawing color to blue.
    # Format is (#alpha:red:green:blue) in hex.
    imgBack.SetPaintColor("#ff4444ff")

    # Draw x and y axis.
    imgBack.SetLineWidth(4.0)
    imgBack.DrawLine(0, 1.0, 1.0, 1.0)
    imgBack.DrawLine(0, 0, 0, 1.0)

    # Horizontal lines.
    imgBack.SetLineWidth(0.5)
    imgBack.DrawLine(0, 0.25, 1.0, 0.25)
    imgBack.SetLineWidth(1.0)
    imgBack.DrawLine(0, 0.5, 1.0, 0.5)
    imgBack.SetLineWidth(0.5)
    imgBack.DrawLine(0, 0.75, 1.0, 0.75)

    # Draw top and right lines.
    imgBack.SetLineWidth(4.0)
    imgBack.DrawLine(0, 0, 1.0, 0)
    imgBack.DrawLine(1.0, 0, 1.0, 1.0)

    # Change paint color and line width.
    imgBack.SetLineWidth(1.0)
    imgBack.SetPaintColor("#ff44ff44")

    # Update the background image.
    imgBack.Update()

    # Set properties for foreground image (sample data).
    imgData.SetLineWidth(1.0)
    imgData.SetPaintColor("#ff4444ff")

# Display audio samples on the graph.
def DisplaySamples(data):
    # Clear screen.
    imgData.SetColor("#00000000")

    # Draw samples.
    imgData.DrawSamples(data, 32768)

    """
    Alternative (slower) drawing method.
    y = 0.5
    lasty = 0.5
    x = 0
    lastx = 0
    length = len(data)

    for i in range(length):
        x = i / length
        y = 0.5 + data[i] / 32768 / 2
        imgData.DrawLine(lastx, lasty, x, y)
        lastx = x
        lasty = y
    """

    # Update image.
    imgData.Update()