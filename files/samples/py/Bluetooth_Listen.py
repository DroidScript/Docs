from native import app

# Called when application is started.
def OnStart():
    global bt
    # Create a layout with objects vertically centered.
    lay = app.CreateLayout("linear", "VCenter,FillXY")

    # Create a listen button.
    btnListen = app.CreateButton("Listen", 0.4, 0.1)
    btnListen.SetOnTouch(btnListen_OnTouch)
    lay.AddChild(btnListen)
    app.AddLayout(lay)

    # Create a send button.
    btnSend = app.CreateButton("Send", 0.4, 0.1)
    btnSend.SetMargins(0, 0.02, 0, 0)
    btnSend.SetOnTouch(btnSend_OnTouch)
    lay.AddChild(btnSend)

    # Create Bluetooth serial object.
    bt = app.CreateBluetoothSerial()
    bt.SetOnConnect(bt_OnConnect)
    bt.SetOnDisconnect(bt_OnDisconnect)
    bt.SetOnReceive(bt_OnReceive)
    bt.SetSplitMode("End", "\n")

# Called when user touches the listen button.
def btnListen_OnTouch():
    bt.Listen(True)

# Called when user touches send button.
def btnSend_OnTouch():
    bt.Write("Hello!\n")

# Called when a client connects to us.
def bt_OnConnect(name, address):
    print(name + " connected @ " + address)
    bt.Write("Welcome!\n")

# Called when a client disconnects from us.
def bt_OnDisconnect(name, address):
    print(name + " disconnected @ " + address)

# Called when we get data from a client.
def bt_OnReceive(data):
    app.ShowPopup(data)