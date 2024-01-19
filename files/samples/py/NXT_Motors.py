from native import app

#Called when application is started.
def OnStart():
    global nxt
    #Create our screen layout.
    CreateLayout()

    #Create NXT remote controller object.
    nxt = app.CreateNxt()

#Create the screen layout.
def CreateLayout():
    #Create the main layout (with repeating pattern).
    lay = app.CreateLayout("Linear", "VCenter,FillXY")
    lay.SetBackground("/Sys/Img/Tile.png", "repeat")

    #Create Connect button.
    btn = app.CreateButton("Connect", 0.3, 0.1, "Lego")
    btn.SetMargins(0, 0, 0, 0.05)
    btn.SetOnTouch(btn_OnTouch)
    lay.AddChild(btn)

    #Create Forward image (square image 0.3 of screen width).
    imgFwd = app.CreateImage("/Sys/Img/Forward.png", 0.15)
    imgFwd.SetOnTouch(imgFwd_OnTouch)
    lay.AddChild(imgFwd)

    #Create horizontal layout for left and right images.
    layHoriz = app.CreateLayout("Linear", "Horizontal")
    lay.AddChild(layHoriz)

    #Create Left image and set its right margin.
    imgLeft = app.CreateImage("/Sys/Img/Left.png", 0.15)
    imgLeft.SetMargins(0, 0, 0.2, 0)
    imgLeft.SetOnTouch(imgLeft_OnTouch)
    layHoriz.AddChild(imgLeft)

    #Create Right image.
    imgRight = app.CreateImage("/Sys/Img/Right.png", 0.15)
    imgRight.SetOnTouch(imgRight_OnTouch)
    layHoriz.AddChild(imgRight)

    #Create Reverse image.
    imgRev = app.CreateImage("/Sys/Img/Reverse.png", 0.15)
    imgRev.SetOnTouch(imgRev_OnTouch)
    lay.AddChild(imgRev)

    #Add main layout to app.
    app.AddLayout(lay)

#Called when user presses connect.
def btn_OnTouch():
    #Show list of NXT devices.
    nxt.ShowDevices()

#Called when forward image is touched.
def imgFwd_OnTouch(e):
    #If finger is down.
    if e.action == "Down":
        #Drive motors B and C at 80% power
        #until further notice.
        nxt.Drive("BC", 80, 0)
    elif e.action == "Up":
        #Stop motors when finger is lifted.
        nxt.Stop("BC")

#Called when reverse image is touched.
def imgRev_OnTouch(e):
    if e.action == "Down":
        nxt.Drive("BC", -80, 0)
    elif e.action == "Up":
        nxt.Stop("BC")

#Called when left image is touched.
def imgLeft_OnTouch(e):
    if e.action == "Down":
        nxt.Drive("B", -80, 0)
        nxt.Drive("C", 80, 0)
    elif e.action == "Up":
        nxt.Stop("BC")

#Called when right image is touched.
def imgRight_OnTouch(e):
    if e.action == "Down":
        nxt.Drive("B", 80, 0)
        nxt.Drive("C", -80, 0)
    elif e.action == "Up":
        nxt.Stop("BC")