from native import app

# Called when application is started.
def OnStart():
    global net, edt, txt
    # Create main layout.
    lay = app.CreateLayout("linear", "VCenter,FillXY")

    # Set default message to send (HTTP Get command).
    msg = "GET / HTTP/1.1\r\n"

    # Create text edit (for outgoing message).
    edt = app.CreateTextEdit(msg, 0.9, 0.1)
    edt.SetBackColor("#111111")
    lay.AddChild(edt)

    # Create text edit (for incoming message).
    txt = app.CreateTextEdit("", 0.9, 0.5, "ReadOnly,NoKeyboard")
    txt.SetTextSize(12)
    txt.SetMargins(0, 0.02, 0, 0)
    txt.SetBackColor("#111111")
    lay.AddChild(txt)

    # Create 'Connect' button.
    btnConnect = app.CreateButton("Connect", 0.4, -1)
    btnConnect.SetOnTouch(btnConnect_OnTouch)
    btnConnect.SetMargins(0, 0.02, 0, 0)
    lay.AddChild(btnConnect)

    # Create 'Send' button.
    btnSend = app.CreateButton("Send", 0.4, -1)
    btnSend.SetOnTouch(btnSend_OnTouch1)
    lay.AddChild(btnSend)

    # Create 'Disconnect' button.
    btnDiscon = app.CreateButton("Disconnect", 0.4, -1)
    btnDiscon.SetOnTouch(btnDiscon_OnTouch)
    lay.AddChild(btnDiscon)

    # Add layouts to app.
    app.AddLayout(lay)

    # Create network object.
    net = app.CreateNetClient("TCP,Raw")
    net.SetOnConnect(net_OnConnect)

# Handle connect button.
def btnConnect_OnTouch():
    # Connect to server (use name or IP).
    net.Connect("www.google.com", 80)

# Called when we connect (or fail to connect).
def net_OnConnect(connected):
    if connected:
        app.ShowPopup("Connected!")
    else:
        app.ShowPopup("Failed to connect!")

# Handle Send button press.
def btnSend_OnTouch1():
    # Check connection.
    if not net.IsConnected():
        app.ShowPopup("Please connect")
        return

    # Send message in UTF-8 text format.
    # modes: "US-ASCII", "UTF-16LE", "UTF-16BE", "UTF-16", "UTF-8"
    net.SendText(edt.GetText() + "\r\n", "UTF-8")

    # Read response.
    # (Large responses may need multiple reads)
    msg = net.ReceiveText("UTF-8")
    if msg:
        txt.SetText(msg)

# Handle disconnect button.
def btnDiscon_OnTouch():
    # Disconnect from server.
    net.Disconnect()

    if not net.IsConnected():
        app.ShowPopup("Disconnected")