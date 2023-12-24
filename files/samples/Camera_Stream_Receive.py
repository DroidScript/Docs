from native import app

def OnStart():
    app.SetOrientation("Landscape")

    lay = app.CreateLayout("linear", "VCenter,FillXY")
    lay.SetBackgroundImage("/res/drawable/pattern_carbon", "repeat")

    img = app.CreateImage(None, 0.9, 0.9, "fix", 640, 480)
    lay.AddChild(img)

    app.AddLayout(lay)

    net = app.CreateNetClient("UDP")
    net.ReceiveVideoStream(11055, img)