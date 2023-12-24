from native import app
import random

xBat, yBat, wBat, hBat = 0.4, 0.9, 0.3, 0.02
xBall, yBall, rBall = 0.4, 0.02, 0.04
xDir, yDir, xDrift, speed = 1, 1, 0.005, 0.01

def OnStart():
    global canvas, quit, orient, synthBall, tstart
    app.SetOrientation("Portrait")
    app.PreventScreenLock(True)
    lay = app.CreateLayout("Linear", "FillXY")
    lay.SetBackground("/Sys/Img/BlackBack.jpg")
    canvas = app.CreateImage(None, 1.0, 1.0, "fix", 480, 800)
    canvas.SetAutoUpdate(False)
    lay.AddChild(canvas)
    app.AddLayout(lay)
    synthBall = app.CreateSynth("VCA")
    synthBall.SetWaveShape("Square")
    synthBall.SetVca(1, 30, 0, 0)
    orient = app.CreateSensor("Orientation", "Fast")
    orient.Start()
    synthBall.PlayTone(560, 100)
    tstart = Date()
    quit = False
    app.SetDebugEnabled(False)
    app.Animate(DrawFrame, 60)

def DrawFrame():
    canvas.Clear()
    DrawBat()
    DrawBall()
    DrawScore()
    canvas.Update()
    if quit:
        return

def DrawBat():
    global xBat
    roll = orient.GetRoll()

    if abs(roll) > 5:
        if roll > 0:
            xBat += 0.02
        else:
            xBat -= 0.02

        if xBat < 0.05:
            xBat = 0.05
        elif xBat > 0.8:
            xBat = 0.8

    canvas.SetPaintColor("#ffffff")
    canvas.DrawRectangle(xBat, yBat, xBat+wBat, yBat+hBat, 0.03)

def DrawBall():
    playWallSnd = False
    yBall += speed * yDir
    xBall += xDrift * xDir
    canvas.SetPaintColor("#56AEF2")
    canvas.DrawCircle(xBall, yBall, rBall)
    xDist = abs(xBall - (xBat+wBat/2))
    yDist = abs(yBall - (yBat+hBat/2))

    if xDist < wBat/2 and yDist < hBat*1.5:
        yDir = -1
        xDrift = random.random() * 0.01
        if random.random() > 0.5:
            xDir = 1
        else:
            xDir = -1

        synthBall.PlayTone(560, 100)
    elif yBall < 0.04:
        yDir = 1
        playWallSnd = True
        speed += 0.001
    elif yBall > 1.0:
        app.ShowPopup("You missed!")
        quit = True
        app.Animate(None)
        return
    elif xBall < 0.04:
        xDir = 1
        playWallSnd = True
    elif xBall > 0.90:
        xDir = -1
        playWallSnd = True

    if playWallSnd:
        synthBall.PlayTone(400, 100)

def DrawScore():
    tnow = Date()
    millisecs = tnow.getTime() - tstart.getTime()
    secs = millisecs/1000
    canvas.SetTextSize(16)
    canvas.SetPaintColor("#ffff0000")
    canvas.DrawText(secs.toFixed(2), 0.02, 0.06)