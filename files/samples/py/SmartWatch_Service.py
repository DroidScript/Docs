from native import app

def OnStart():
    global watch
    watch = app.CreateSmartWatch("Sony")
    watch.SetOnShow(watch_OnShow)
    watch.SetOnHide(watch_OnHide)
    watch.SetOnTouch(watch_OnTouch)
    watch.SetOnSwipe(watch_OnSwipe)
    watch.SetOnStop(watch_OnStop)
    watch.SetOnMenu(watch_OnMenu)
    watch.SetOnBack(watch_OnBack)

    watch.ShowMessage("Hello")

    lay = watch.CreateLayout("Linear", "fillxy")

    txt = watch.CreateText("ABC", 1.0, 0.3, "")
    txt.SetBackColor("#ff006666")
    txt.SetMargins(0, 0.1, 0, 0)
    txt.SetTextSize(8)
    txt.SetTextColor("#ffffffff")
    lay.AddChild(txt)

    img = watch.CreateImage("/Sys/Img/Icon.png", 0.3)
    lay.AddChild(img)

    watch.AddLayout(lay)
    watch.ShowLayout()

def watch_OnShow():
    app.ShowPopup("OnShow")
    watch.ShowLayout()

def watch_OnHide():
    app.ShowPopup("OnHide")

def watch_OnStop():
    app.ShowPopup("OnStop")

def watch_OnTouch(dir, x, y):
    app.ShowPopup("OnTouch dir=" + dir + " x=" + x + " y=" + y)

def watch_OnSwipe(dir):
    app.ShowPopup("OnSwipe dir=" + dir)

def watch_OnMenu():
    app.ShowPopup("watch_OnMenu")

def watch_OnBack():
    watch.StopApp()