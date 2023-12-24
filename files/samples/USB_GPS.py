import native

def OnStart():
    lay = native.app.CreateLayout( "linear", "VCenter,FillXY")
    native.app.AddLayout(lay)

    txtLog = native.app.CreateText("", 0.95, 0.9, "Log,MonoSpace")
    txtLog.SetBackColor("#333333")
    txtLog.SetTextSize(12)
    lay.AddChild(txtLog)

    usb = native.app.CreateUSBSerial()
    if not usb:
        native.app.ShowPopup("Please connect your GPS and restart")
        return
    usb.SetOnReceive(usb_OnReceive)
    usb.SetSplitMode("End", "\n")
    native.app.ShowPopup("Connected")

def usb_OnReceive(data):
    native.console.log(data)
    if data[:6] == "$GPRMC":
        txtLog.Log(data.replace("\n", ""))