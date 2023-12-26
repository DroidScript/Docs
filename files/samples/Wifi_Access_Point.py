from native import app
import native.MUI as MUI
import native.app as app
import native.gfx as gfx
import native.ui as ui

def OnStart():
    if app.GetOSVersion() > 24:
        app.Quit("Sorry, only Nougat or older supported!")

    lay = app.CreateLayout("linear", "VCenter,FillXY")

    tgl = app.CreateToggle("WiFi AP", 0.3)
    tgl.SetMargins(0, 0.02, 0, 0)
    tgl.SetOnTouch(tgl_OnTouch)
    tgl.SetChecked(app.IsWifiApEnabled())
    lay.AddChild(tgl)

    app.AddLayout(lay)

def tgl_OnTouch(value):
    if not app.IsWifiApEnabled():
        app.SetWifiApEnabled(True, "MyAp", "MyPassword")
    else:
        app.SetWifiApEnabled(False)
        app.SetWifiEnabled(True)