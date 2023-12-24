from native import app

def OnStart():
    app.SetOrientation("Landscape")

    lay = app.CreateLayout("Absolute", "FillXY")

    img = app.CreateImage("/Sys/Img/Hello.png", 0.2)
    lay.AddChild(img)

    app.AddLayout(lay)

    Tween1(img)

def Tween1(img):
    target = {"x": 0.5, "y": 0.5, "sw": 0.5, "sh": 0.5, "rot": 360}
    img.Tween(target, 1500, "Exponential.Out", 1, True, Tween2)

def Tween2():
    target = {"x": 0.8, "y": [0.6, 0.3, 0.6], "rot": 360 * 3}
    img.Tween(target, 1000)