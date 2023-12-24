from native import app

def OnStart():
    lay = app.CreateLayout("linear", "VCenter,FillXY")
    txt = app.CreateText("Banana-Pi GPIO")
    txt.SetTextSize(32)
    lay.AddChild(txt)
    tgl = app.CreateToggle("GPIO", 0.4)
    tgl.SetMargins(0, 0.02, 0, 0)
    tgl.SetOnTouch(tgl_OnTouch)
    lay.AddChild(tgl)
    app.AddLayout(lay)
    sys = app.CreateSysProc("su")

def tgl_OnTouch(isChecked):
    if isChecked:
        sys.Out("echo 1 > /sys/class/gpio_sw/PA6/data\n")
    else:
        sys.Out("echo 0 > /sys/class/gpio_sw/PA6/data\n")