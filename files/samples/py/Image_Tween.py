from native import app

# Called when application is started.
def OnStart():
    global img
    # Lock screen orientation to Landscape
    app.SetOrientation("Landscape")

    # Create an Absolute layout so we can position images precisely.
    lay = app.CreateLayout("Absolute", "FillXY")

    # Create image.
    img = app.CreateImage("/Sys/Img/Hello.png", 0.2)
    lay.AddChild(img)

    # Add layout to app.
    app.AddLayout(lay)

    # Start Tween animation.
    Tween1()

def Tween1():
    target = { "x": 0.5, "y": 0.5, "sw": 0.5, "sh": 0.5, "rot": 360 }
    img.Tween(target, 1500, "Exponential.Out", 1, True, Tween2)

def Tween2():
    target = { "x": 0.8, "y": [0.6, 0.3, 0.6], "rot": 360 * 3 }
    img.Tween(target, 1000)