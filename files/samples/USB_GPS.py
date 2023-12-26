from native import app

def OnStart():
    global txtLog
    lay = app.CreateLayout( "linear", "VCenter,FillXY")
    app.AddLayout(lay)

    txtLog = app.CreateText("", 0.95, 0.9, "Log,MonoSpace")
    txtLog.SetBackColor("#333333")
    txtLog.SetTextSize(12)
    lay.AddChild(txtLog)

    usb = app.CreateUSBSerial()
    if not usb:
        app.ShowPopup("Please connect your GPS and restart")
        return
    usb.SetOnReceive(usb_OnReceive)
    usb.SetSplitMode("End", "\n")
    app.ShowPopup("Connected")

def usb_OnReceive(data):
    native.console.log(data)
    if data[:6] == "$GPRMC":
        txtLog.Log(data.replace("\n", ""))