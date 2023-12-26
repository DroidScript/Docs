from native import app
import androidhelper
import math

#Translated Python code
global droid, count

droid = androidhelper.Android()

#Init
count = 0

#Called when application is started.
def OnStart():
    global layLeft, cam, imgGraph
    #Fix orientation to landscape since
    #most phones cameras work this way.
    droid.setOrientation("Landscape")

    #Stop screen turning off.
    droid.setScreenBrightness(255)

    #Create horizontal layout that fills the screen.
    lay = droid.createLayout("Linear", "Horizontal,FillXY")

    #Create frame layout on left for camera view.
    layLeft = droid.createLayout("Frame")
    layLeft.setMargins(0,0.1,0.02,0)
    lay.addChild(layLeft)

    #Create camera view control.
    #(Reduce to 'QVGA' resolution for performance reasons)
    cam = droid.createCameraView(0.4, 0.8, "QVGA")
    cam.setOnReady(cam_OnReady)
    layLeft.addChild(cam)

    #Create vertical layout on right for other stuff.
    layRight = droid.createLayout("Linear", "Vertical")
    lay.addChild(layRight)

    #Create 'Use Flash' check box.
    chkFlash = droid.createCheckBox("Use Flash")
    chkFlash.setMargins(0,0.1,0,0)
    chkFlash.setOnCheckedChangeListener(chkFlash_OnTouch)
    layRight.addChild(chkFlash)

    #Create image control for graph display.
    imgGraph = droid.createImage(None, 0.3, 0.4)
    imgGraph.setMargins(0.05,0.1,0,0)
    imgGraph.setBackgroundColor("#222222")
    imgGraph.setTextSize(12)
    imgGraph.setAutoUpdate(False)
    layRight.addChild(imgGraph)

    #Add main layout to app.
    droid.addLayout(lay)

#Called when camera is ready.
def cam_OnReady():
    #Create an image control over the top of the
    #camera view with transparency (alpha) so
    #we can show a target area.
    img = droid.createImage(None, 0.4, 0.8)
    img.setAlpha(0.5)
    layLeft.addChild(img)
    img.setPaintColor("#ff0000")
    img.setPaintStyle("Line")
    img.setLineWidth(2.5)
    img.drawRectangle(0.45, 0.45, 0.55, 0.55)

    #Enable color reporting for a single point at the center
    #of the image with a sample size of 8 pixels and a max report
    #rate of roughly 3x a second.
    cam.reportColors("0.5,0.5", OnColor, 16, 300)

    #Note: You can use the '|' separator to report
    #a list of points like this:- "0.1,0.1|0.2,0.2"

    #Start preview.
    cam.startPreview()

    #Tell user we are ready.
    droid.ttsSpeak("Ready")

#Handle reported colors.
def OnColor(colors):
    global red, green, blue, name
    #Get pixel colors.
    red = colors[0][0]
    green = colors[0][1]
    blue = colors[0][2]

    #Draw color graph.
    DrawGraph(red, green, blue)

    #Speak color name every 6 samples.
    if count % 6 == 0:
        name = GetColorName(red, green, blue)
        droid.ttsSpeak(name)
    count += 1

#Convert decimal to two digit hex number.
def dec2hex(i):
    return format(i, '02X')

#Draw a simple graph of color values.
def DrawGraph(red, green, blue):
    xr = 0.2
    xg = 0.4
    xb = 0.6
    imgGraph.clear()

    #Draw red bar and value.
    imgGraph.setPaintColor("#ff0000")
    imgGraph.drawRectangle(xr, 1, xr + 0.1, 1 - red / 255)
    hex = dec2hex(red)
    imgGraph.drawText(hex, xr, 0.1)

    #Draw green bar and value.
    imgGraph.setPaintColor("#00ff00")
    imgGraph.drawRectangle(xg, 1, xg + 0.1, 1 - green / 255)
    hex = dec2hex(green)
    imgGraph.drawText(hex, xg, 0.1)

    #Draw blue bar and value.
    imgGraph.setPaintColor("#0000ff")
    imgGraph.drawRectangle(xb, 1, xb + 0.1, 1 - blue / 255)
    hex = dec2hex(blue)
    imgGraph.drawText(hex, xb, 0.1)

    #Update image.
    imgGraph.update()

#Handle 'Use Flash' checkbox touch
def chkFlash_OnTouch(value):
    cam.setFlash(value)

#Get a color name from rgb values.
def GetColorName(red, green, blue):
    minDiff = 1000
    best = 0

    #Find closest matching color.
    for i in range(len(colors)):
        diff = math.pow(red - colors[i][0], 2)
        diff += math.pow(green - colors[i][1], 2)
        diff += math.pow(blue - colors[i][2], 2)
        diff = math.sqrt(diff)
        if diff < minDiff:
            minDiff = diff
            best = i
    return colors[best][3]

#Create an array of well known colors.
#(Add more colors here to make it more accurate