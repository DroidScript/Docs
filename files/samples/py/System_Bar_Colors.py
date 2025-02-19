from native import app

def OnStart():
    app.SetStatusBarColor("#ff0000")
    app.SetNavBarColor("#ff0000")

    lay = app.CreateLayout("linear", "VCenter,FillXY")

    txt = app.CreateText("Hello")
    txt.SetTextColor("#ff0000")
    txt.SetTextSize(32)
    lay.AddChild(txt)

    app.AddLayout(lay)