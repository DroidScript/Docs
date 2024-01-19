from native import app

# This WiFi messaging sample broadcasts UDP network
# messages to every device inside your WiFi network (that
# is running this sample).  This sample could easily be
# extended to create a WiFi-Chat Application or used as
# starting point for a multi-player Wifi game.
# (Note: A few routers block fast UDP messages by default)

# Called when application is started.
def OnStart():
    global net, address, thisId
    # Create a layout with objects vertically centered.
    lay = app.CreateLayout("linear", "VCenter,FillXY")

    # Create a button.
    btn = app.CreateButton("Send", 0.3, 0.1)
    btn.SetMargins(0, 0.05, 0, 0)
    lay.AddChild(btn)
    btn.SetOnTouch(btn_OnTouch)

    # Add layout to app.
    app.AddLayout(lay)

    # Create UDP network object.
    net = app.CreateNetClient("UDP")
    net.SetOnReceive(net_OnReceive)

    # Get the UDP broadcast address and set our port number.
    address = net.GetBroadcastAddress()

    # Watch for incoming messages.
    net.ReceiveDatagrams(19700, "UTF-8")

    # Get our device id.
    thisId = app.GetDeviceId()

# Called when user touches our button.
def btn_OnTouch():
    # Broadcast our Datagram (UDP) packet.
    msg = "Hello"
    packet = thisId + "|" + msg
    net.SendDatagram(packet, "UTF-8", address, 19700)

# Handle in-comming UDP messages.
def net_OnReceive(data):
    print(address + ": " + data)

    # Extract original parts.
    parts = data.split("|")
    id = parts[0]
    msg = parts[1]

    # Show the message (that don't come from us).
    if id != thisId:
        app.ShowPopup(msg)