from native import app

def OnStart():
    global sys
    lay = app.CreateLayout("linear", "VCenter,FillXY")

    txt = app.CreateText("Banana-Pi UART")
    txt.SetTextSize(32)
    lay.AddChild(txt)

    btn = app.CreateButton("Send Serial", 0.4, 0.15)
    btn.SetMargins(0, 0.05, 0, 0)
    btn.SetOnTouch(btn_OnTouch)
    lay.AddChild(btn)

    app.AddLayout(lay)

    sys = app.CreateSysProc("su")

def btn_OnTouch():
    sys.Out("echo hello > /dev/ttyS0\n")