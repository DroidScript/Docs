from native import app

# This basic template is a good starting
# point for simple horizontal scrolling games.

# Set size of canvas bitmap.
# (We set it lower than the screen resolution to improve
# performance and make it 1.5 x wider than the screen
# so objects can disappear off the screen cleanly).
bmpW = 1.5 * 800
bmpH = 480

# Init background variables.
backGroundX = 0
backGroundShift = 0.001

# Init character variables.
charX = 0.25
charY = 0.5
charW = 0.07
charH = 0.18

# Set flying object positions and speed.
obj1X = 1.0
obj1Y = 0.1
obj1W = 0.06
obj1H = 0.3
obj1Speed = 2 / bmpW
obj2X = 1.3
obj2Y = 0.6
obj2W = 0.06
obj2H = 0.3
obj2Speed = 4 / bmpW

# Called when application is started.
def OnStart():
    global canvas, imgBackground, imgChar, imgobj, imgCharDead, synthExp
    # Lock screen orientation to Landscape and
    # stop screen turning off while playing.
    app.SetOrientation("Landscape")
    app.PreventScreenLock(True)

    # Create the main layout.
    lay = app.CreateLayout("Absolute", "FillXY")

    # Create our scene layout wider than the screen
    # so objects can slide on and off screen cleanly.
    layScene = app.CreateLayout("Absolute")
    layScene.SetPosition(-0.25, 0, 1.5, 1)
    lay.AddChild(layScene)

    # Create a blank image to act as our drawing canvas.
    sw = app.GetScreenWidth()
    canvas = app.CreateImage(None, 1.5, 1.0, "fix", bmpW, bmpH)
    canvas.SetAutoUpdate(False)
    canvas.SetTextSize(14)
    canvas.SetPaintColor("#ff0000")
    canvas.SetOnTouchMove(canvas_OnTouchMove)
    layScene.AddChild(canvas)

    # Create a background image in memory (not added to layout).
    imgBackground = app.CreateImage("/Sys/Img/Sky.jpg")

    # Create our character images in memory.
    imgCharAlive = app.CreateImage("/Sys/Img/Icon.png")
    imgCharDead = app.CreateImage("/Sys/Img/Explode1.png")
    imgChar = imgCharAlive

    # Create our flying object image in memory.
    imgobj = app.CreateImage("/Sys/Img/Xylophone.png")

    # Create Synth object for collision sounds.
    synthExp = app.CreateSynth("VCA,VCF")
    synthExp.SetWaveShape("White")
    synthExp.SetVca(1, 1, 0.8, 800)
    synthExp.SetVcf(1, 1, 0, 400, 1000, 0.85, 2.0)

    # Add layout to app.
    app.AddLayout(lay)

    # Switch off debugging for max performance.
    app.SetDebugEnabled(False)

    # Drawing the game frame 60x a second.
    app.Animate(DrawFrame, 60)

# Update and redraw all game graphics.
def DrawFrame():
    # Clear the canvas.
    canvas.Clear()

    # Draw two copies of the background image side by side.
    canvas.DrawImage(imgBackground, backGroundX, 0, 1.0, 1.0)
    canvas.DrawImage(imgBackground, 1.0 + backGroundX, 0, 1.0, 1.0)

    # Shift the background images left slightly each frame
    # until the left image is off screen, then we start again.
    backGroundX -= backGroundShift
    if backGroundX <= -1:
        backGroundX = 0

    # Draw our character.
    canvas.DrawImage(imgChar, charX, charY, charW, charH)

    # Move and draw object 1.
    if obj1X <= 0:
        obj1X -= 1.0
    else:
        obj1X -= obj1Speed
    canvas.DrawImage(imgobj, obj1X + 0.015, obj1Y, obj1W, obj1H)

    # Move and draw object 2.
    if obj2X <= 0:
        obj2X -= 1.0
    else:
        obj2X -= obj2Speed
    canvas.DrawImage(imgobj, obj2X, obj2Y, obj2W, obj2H)

    # Check for collisions by comparing x and y coordinates.
    hit1 = IsCollision(charX, charY, charW, charH, obj1X, obj1Y, obj1W, obj1H, 0.03)
    hit2 = IsCollision(charX, charY, charW, charH, obj2X, obj2Y, obj2W, obj2H, 0.03)

    # Deal with collisions.
    if hit1 or hit2:
        GameOver()

    # Update the canvas.
    canvas.Update()

# Handle moving finger on screen.
def canvas_OnTouchMove(ev):
    global charY
    # Move our character.
    if ev.X < 0.3:
        charY = ev.Y

# Check for a collision between two objects.
# (d is the depth of impact required)
def IsCollision(x1, y1, w1, h1, x2, y2, w2, h2, d):
    if (x2 < x1 + w1 - d and x2 + w2 > x1 + d and y2 + h2 > y1 + d and y2 < y1 + h1 - d):
        return True
    else:
        return False

# Handle game over situation.
def GameOver():
    # Draw dead character and play sound.
    imgChar = imgCharDead
    canvas.DrawImage(imgChar, charX, charY, charW, charH)
    synthExp.PlayTone(100, 1000)

    # Show message and stop game animation.
    canvas.DrawText