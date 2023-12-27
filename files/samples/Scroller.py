from native import app

def OnStart():
    global scroll

    lay = app.CreateLayout("linear", "FillXY")

    scroll = app.CreateScroller(1.0, 1.0)
    lay.AddChild(scroll)

    layScroll = app.CreateLayout("Linear", "Left")
    scroll.AddChild(layScroll)

    img = app.CreateImage("/Sys/Img/Hello.png", 2.0, 2.0)
    layScroll.AddChild(img)

    app.AddLayout(lay)

    scroll.ScrollTo(0.5, 0.5)

    setInterval(ShowScrollPos, 1000)

def ShowScrollPos():
    x = scroll.GetScrollX()
    y = scroll.GetScrollY()
    app.ShowPopup(str(round(x, 2)) + ", " + str(round(y, 2)))