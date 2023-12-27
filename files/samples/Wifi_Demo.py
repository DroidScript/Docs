from native import app

# Global variables
ip = None
pc = None
net = None
net2 = None

# Called when application is created.
def OnStart():
    global net
    # Create the main graphical layout.
    CreateLayout()

    # Create network object for communication with PC.
    net = app.CreateNetClient("TCP")
    net.SetOnConnect(net_OnConnect)

# Create the graphical layout.
def CreateLayout():
    global btnCon, edt
    # Create main layout.
    lay = app.CreateLayout("linear", "VCenter,FillXY")

    # Create 'Connect' toggle button.
    btnCon = app.CreateToggle("Connect")
    btnCon.SetOnTouch(btnCon_OnTouch)
    lay.AddChild(btnCon)

    # Create text edit.
    edt = app.CreateTextEdit("Hello PC", 0.8, 0.3)
    edt.SetMargins(0, 0.1, 0, 0)
    lay.AddChild(edt)

    # Create 'Send' button.
    btnSend = app.CreateButton("Send", 0.2, -1)
    btnSend.SetMargins(0, 0.02, 0, 0)
    btnSend.SetOnTouch(btnSend_OnTouch)
    lay.AddChild(btnSend)

    # Add layouts.
    app.AddLayout(lay)

# Handle 'Connect' button press.
def btnCon_OnTouch(value):
    # Un-check button until we've connected.
    btnCon.SetChecked(False)

    if not net.IsConnected():
        # Start scanning for PC.
        FindPC()
    else:
        # Disconnect from PC.
        net.Disconnect()

# Handle 'Send' button press.
def btnSend_OnTouch():
    if net.IsConnected():
        net.SendText(edt.GetText(), "UTF-16LE")

# Called when we get a message from the PC.
def net_OnReceive(text):
    app.ShowPopup(text, "Short")

# Find PC by broadcasting a UDP
# message and waiting for a response.
def FindPC():
    global ip
    # Check wifi is enabled.
    if not net.IsEnabled():
        app.ShowPopup("Please Enable Wifi")
        return

    # Show progress.
    app.ShowProgress("Searching...")

    # Broadcast 'Hello' message to PC(s).
    if net2 is None:
        net2 = app.CreateNetClient("UDP")
    addr = net2.GetBroadcastAddress()
    net2.SendDatagram("wdemo:hello", "UTF-16LE", addr, 11088)

    # Checking for a response 10 times.
    for i in range(10):
        # Check for a response (read for 300 millisecs).
        s = net2.ReceiveDatagram("UTF-16LE", 11088, 300)
        if s is not None and s != "wdemo:hello":
            # Extract PC's name and ip address.
            ss = s.split(":")
            pc = ss[1]
            ip = ss[2]
            break

    # Hide progress and check if we found the PC.
    app.HideProgress()
    if ip:
        Connect()
    else:
        app.Alert("No PC's Found!\n\nCheck that WifiDemo is running on your PC and that you are in Wifi range.")

# Connects to PC and wait for commands.
# (Automatically maintains the connection)
def Connect():
    # Start listening for commands.
    net.SetOnReceive(net_OnReceive)
    net.AutoReceive(ip, 11077, "UTF-16LE")

# Called when we successfully connect to PC.
def net_OnConnect(connected):
    # Check toggle button if we connected.
    if connected:
        btnCon.SetChecked(True)