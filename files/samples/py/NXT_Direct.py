from native import app

# See the following link for info on NXT Bluetooth commands
# http://androidscript.org/docs/nxt

# Called when application is started.
def OnStart():
    global bt
    # Create a layout with objects vertically centered.
    lay = app.CreateLayout("linear", "VCenter,FillXY")

    # Create a connect button.
    btnCon = app.CreateButton("Connect", 0.4, 0.15)
    btnCon.SetOnTouch(btnCon_OnTouch)
    lay.AddChild(btnCon)

    # Create a Beep button.
    btnBeep = app.CreateButton("Beep", 0.4, 0.15)
    btnBeep.SetOnTouch(btnBeep_OnTouch)
    lay.AddChild(btnBeep)

    # Create a Get Battery button.
    btnBat = app.CreateButton("Get Battery", 0.4, 0.15)
    btnBat.SetOnTouch(btnBat_OnTouch)
    lay.AddChild(btnBat)

    # Add layout to app.
    app.AddLayout(lay)

    # Create Bluetooth serial object.
    bt = app.CreateBluetoothSerial()
    bt.SetOnConnect(bt_OnConnect)
    bt.SetOnReceive(bt_OnReceive)

    # Set timeout so partial/bad responses
    # don't clog up the packet splitter.
    bt.SetTimeout(3000)

    # Set Hex mode and split responses using a
    # 2 byte header (little endian).
    bt.SetDataMode("Hex")
    bt.SetSplitMode("Head", 2, "LE")

# Called when user touches the connect button.
def btnCon_OnTouch():
    # Put the Bluetooth name of your NXT here.
    bt.Connect("NXT")

# Handle Beep button.
def btnBeep_OnTouch():
    # Send beep message to NXT.
    bt.Write("06,00,80,03,0B,02,F4,01")

# Handle Battery button.
def btnBat_OnTouch():
    #Send battery level request message to NXT.
    bt.Write("02,00,00,0B")

# Called when we are connected.
def bt_OnConnect(ok):
    app.ShowPopup("Connected")

# Called when we get data from device.
def bt_OnReceive(data):
    print(data)

    # Split hex values into an array.
    ss = data.split(",")

    # Handle battery message response.
    if ss[3] == "0B":
        # Get voltage bytes and convert to decimal.
        # (little endian so we swap byte order).
        volts = int(ss[6] + ss[5], 16)
        app.ShowPopup(str(volts) + " mV")