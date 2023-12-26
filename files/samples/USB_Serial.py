from native import app

def OnStart():
    global usb
    lay = app.CreateLayout("linear", "VCenter,FillXY")

    btn = app.CreateButton("Press Me", 0.3, 0.25)
    lay.AddChild(btn)

    btn.SetOnTouch(btn_OnTouch)

    app.AddLayout(lay)

    usb = app.CreateUSBSerial()

def btn_OnTouch():
    usb.Write("Hello serial device!")