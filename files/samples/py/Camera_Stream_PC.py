from native import app

#Globals variables.
ip = None
net = None
net2 = None
light = None

#Called when application is created.
def OnStart():
    global net
    #Create the main graphical layout.
    CreateLayout()

    #Create network object for reading commands from PC.
    net = app.CreateNetClient("TCP")
    net.SetOnConnect(net_OnConnect)

#Create the graphical layout.
def CreateLayout():
    global cam, btnCon
    #Lock orientation while we create initial layout.
    app.SetOrientation("Landscape")

    #Create horizontal layout for camera view and buttons.
    lay = app.CreateLayout("linear", "Horizontal,VCenter,FillXY")

    #Create camera view.
    cam = app.CreateCameraView(0.5, 0.7, "CIF")
    cam.SetOnReady(cam_OnReady)
    lay.AddChild(cam)

    #Create 'Connect' toggle button.
    btnCon = app.CreateToggle("Connect", 0.2, -1)
    btnCon.SetMargins(0.05, 0, 0, 0)
    btnCon.SetOnTouch(btnCon_OnTouch)
    lay.AddChild(btnCon)

    #Add layouts.
    app.AddLayout(lay)

#Called when camera is ready.
def cam_OnReady():
    #Set focus mode and start preview.
    cam.SetFocusMode("Video")
    cam.StartPreview()

#Handle 'Connect' button clicks.
def btnCon_OnTouch(value):
    #Un-check button until we've connected.
    btnCon.SetChecked(False)

    if not net.IsConnected():
        #Start scanning for PC.
        FindPC()
    else:
        #Disconnect from PC and stop stream.
        net.Disconnect()
        cam.Stream("")

#Find controller PCs by broadcasting a UDP
#message and waiting for a responses.
def FindPC():
    global serverIPs
    #Check wifi is enabled.
    if not net.IsEnabled():
        app.ShowPopup("Please Enable Wifi")
        return
    #Show progress.
    app.ShowProgress("Searching...")
    servers = ""
    serverIPs = []

    #Broadcast 'Hello' message to PC(s).
    if net2 == None:
        net2 = app.CreateNetClient("UDP")
    addr = net2.GetBroadcastAddress()
    net2.SendDatagram("sdemo:hello", "UTF-16LE", addr, 11088)
    for i in range(10):
        #Check for a response.
        s = net2.ReceiveDatagram("UTF-16LE", 11088, 300)
        if s and s != "sdemo:hello":
            #Extract PC's name and ip address.
            ss = s.split(":")
            serverIPs.append(ss[2])
            if servers:
                servers += ","
            servers += ss[1]

    #Show list of PC's.
    app.HideProgress()
    if servers:
        lstServ = app.CreateListDialog("Viewers", servers, "")
        lstServ.SetOnTouch(lstServ_OnTouch)
        lstServ.Show()
    else:
        app.Alert("No PC's Found!\n\nCheck that VideoStreamDemo " +
                  "is running on your PC and that you are in Wifi range.")

#Handle chosen PC.
def lstServ_OnTouch(item, checked):
    global ip
    #Set ip address and connect to server.
    ip = serverIPs[item]
    Connect()

#Connects to PC and wait for commands.
#(Automatically maintains the connection)
def Connect():
    #Start listening for commands.
    net.SetOnReceive(net_OnReceive)
    net.AutoReceive(ip, 11077, "UTF-16LE")

    #Start video stream.
    quality = 80
    fps = 20
    mtu = 32000
    cam.Stream(ip, 11055, quality, fps, mtu)

#Called when we successfully connect to PC.
def net_OnConnect(connected):
    if connected:
        #Mark toggle button as checked.
        btnCon.SetChecked(True)

        #Send a message to PC.
        net.SendText("Hello from Android!", "UTF-16LE")

#Called when we get a message from the PC.
def net_OnReceive(text):
    app.ShowPopup(text)

    #Allow camera flash/light control.
    if text == "Light":
        if not light:
            cam.SetFlash(True)
            light = True
        else:
            cam.SetFlash(False)
            light = False