from native import app

# This basic template is a good starting
# point for simple vertical scrolling games.

# Init background variables.
backGroundY = 0
backGroundShift = 0.005

# Init character variables.
charX = 0.5
charY = 0.8
charW = 0.16
charH = 0.115

# Called when application is started.
def OnStart():
    global canvas, imgBackground, imgChar
    # Lock screen orientation to Portrait and
    # stop screen turning off while playing.
    app.SetOrientation("Portrait")
    app.PreventScreenLock(True)

    # Create the main layout.
    lay = app.CreateLayout("Linear", "FillXY")

    # Create an blank image to act as our drawing canvas.
    # (For performance reasons, we limit the internal bitmap to
    # 480x800 and set screen updating to manual mode).
    canvas = app.CreateImage(None, 1.0, 1.0, "fix", 480, 800)
    canvas.SetAutoUpdate(False)
    canvas.SetTextSize(14)
    canvas.SetPaintColor("#ffff0000")
    canvas.SetOnTouchMove(canvas_OnTouchMove)
    lay.AddChild(canvas)

    # Create a background image in memory (not added to layout).
    imgBackground = app.CreateImage("/Sys/Img/StarField.jpg")

    # Create our character image in memory.
    imgChar = app.CreateImage("/Sys/Img/Droid1.png")

    # Add layout to app.
    app.AddLayout(lay)

    # Switch off debugging for max speed.
    app.SetDebugEnabled(False)

    # Drawing the game frame 60x a second.
    app.Animate(DrawFrame, 60)

# Update and redraw all game graphics.
def DrawFrame(time, dtime):
    # Clear the canvas.
    canvas.Clear()

    # Draw two copies of the background image with one drawn off screen
    # above the other in the Y direction.
    canvas.DrawImage(imgBackground, 0, -1.0 + backGroundY, 1.0, 1.0)
    canvas.DrawImage(imgBackground, 0, backGroundY, 1.0, 1.0)

    # Shift the background images down slightly each frame
    # until the lower image is off screen, then we start again.
    backGroundY += backGroundShift
    if backGroundY >= 1.0:
        backGroundY -= 1.0

    # Draw our character.
    canvas.DrawImage(imgChar, charX, charY, charW, charH)

    # Update the canvas.
    canvas.Update()

# Handle moving finger on screen.
def canvas_OnTouchMove(ev):
    # Move character.
    if ev.Y > 0.8:
        charX = ev.X - charW / 2