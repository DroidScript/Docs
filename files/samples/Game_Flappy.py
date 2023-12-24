from native import app
import random

# Set frame rate.
fps = 30

# Set size of canvas bitmap.
#(We set it lower than the screen resolution to improve
#performance and make it 1.5 x wider than the screen
#so objects can disappear off the screen cleanly).
bmpW = 1.5 * 480
bmpH = 800

# Init physics variables.
gravity = 4/bmpH
impulse = 35/bmpH

# Init background image variables.
backGroundX = 0
backGroundShift = 4/bmpW

# Init bird variables.
charX = 0.25
charY = 0.3
charW = 0.18
charH = 0.18
flap = 0
charSpeedY = 0
angle = 0

# Init pillar variables.
#(We set speeds to a multiple of the width of one pixel
#which gives nice smooth (non flickering) motion.
capHeight = 0.08
gap = 0.5
donePass = False
pill1X = 1.3
pill1Y = 0
pill1W = 0.14
pill1H = 0.4
pill2X = 1.3
pill2Y = 0.6
pill2W = 0.14
pill2H = 0.5
pillars = 0
pillarSpeed = 4/bmpW

# Called when application is started.
def OnStart():
    global canvas, imgBackground, imgFlapUp, imgFlapDown, imgPillarTop, imgPillar, synthFly, gameOver
    # Lock screen orientation to Portrait and
    # stop screen turning off while playing.
    app.SetOrientation("Portrait")
    app.PreventScreenLock(True)

    # Create the main layout.
    lay = app.CreateLayout("Absolute", "FillXY")

    # Create our scene layout.
    #(This layout is 1.5 times wider than the screen)
    layScene = app.CreateLayout("Absolute")
    layScene.SetPosition(-0.25, 0, 1.5, 1)
    lay.AddChild(layScene)

    # Create an blank image to act as our drawing canvas.
    sw = app.GetScreenWidth()
    canvas = app.CreateImage(None, 1.5, 1.0, "fix", bmpW, bmpH)
    canvas.SetAutoUpdate(False)
    canvas.SetPaintColor("#ff2222")
    canvas.SetOnTouchDown(canvas_OnTouchMove)
    layScene.AddChild(canvas)

    # Create a background image in memory (not added to layout).
    imgBackground = app.CreateImage("/Sys/Img/Sky.jpg")

    # Create our character images in memory.
    imgFlapUp = app.CreateImage("/Sys/Img/Eagle1.png")
    imgFlapDown = app.CreateImage("/Sys/Img/Eagle2.png")
    imgCharDead = app.CreateImage("/Sys/Img/Splat.png")
    imgChar = imgFlapUp

    # Create our pillar images in memory.
    imgPillarTop = app.CreateImage("/Sys/Img/PillarTop.png")
    imgPillar = app.CreateImage("/Sys/Img/Pillar.png")

    # Create Synth synthCrashect for flying sounds.
    synthFly = app.CreateSynth("VCA,VCF")
    synthFly.SetWaveShape("White")
    synthFly.SetVca(260, 230, 0.08, 100)
    synthFly.SetVcf(340, 510, 0.26, 210, 500, 0.45)
    synthFly.SetVolume(0.9, 0.9)

    # Create Synth object for passing pillar sounds.
    synthPass = app.CreateSynth("VCA,VCF")
    synthPass.SetWaveShape("Square")
    synthPass.SetVca(10, 400, 0.8, 100)
    synthPass.SetVcf(10, 400, 0.8, 100, 1000, 0.85, 2.0)

    # Create Synth object for collision sounds.
    synthCrash = app.CreateSynth("VCA,VCF")
    synthCrash.SetWaveShape("White")
    synthCrash.SetVca(0, 130, 0, 0)
    synthCrash.SetVcf(110, 870, 0.45, 450, 2000, 0.4)

    # Create a Start Again button.
    btn = app.CreateButton("Start Again", 0.5, 0.1)
    btn.SetPosition(0.24, 0.5)
    btn.SetVisibility("Gone")
    btn.SetOnTouch(btnStart_OnTouch)
    lay.AddChild(btn)

    # Add layout to app.
    app.AddLayout(lay)

    # Switch off debugging for max performance.
    app.SetDebugEnabled(False)

    # Drawing the game frame 30x a second.
    app.Animate(DrawFrame, fps)
    gameOver = False

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
    if(backGroundX <= -1):
        backGroundX = 0

    # Move the bird and limit its vertical range.
    charY += charSpeedY
    charSpeedY += gravity
    if(charY > 0.85):
        charY = 0.85
    elif(charY < -0.1):
        charY = -0.1

    # Adjust an limit birds angle.
    if(angle < 45):
        angle += 3
    if(charY >= 0.85):
        angle -= 30
    if(angle < 0):
        angle = 0

    # Draw our bird.
    if(flap < 2):
        imgChar = imgFlapUp
    elif(flap > 2):
        imgChar = imgFlapDown
    canvas.DrawImage(imgChar, charX, charY, charW, -1, angle)
    if(flap > 4):
        flap = 0
    else:
        flap += 1

    # Change top pillars height every time it goes off screen.
    if(pill1X <= 0):
        pill1H = 0.1 + random.random() * 0.5
        donePass = False

    # Move and draw pillar 1.
    if(pill1X <= 0):
        pill1X = 1.0
    else:
        pill1X -= pillarSpeed
    canvas.DrawImage(imgPillar, pill1X, pill1Y, pill1W, pill1H - capHeight)
    canvas.DrawImage(imgPillarTop, pill1X, pill1H - capHeight, pill1W, capHeight)

    # Move and draw pillar 2.
    if(pill2X <= 0):
        pill2X = 1.0
    else:
        pill2X -= pillarSpeed
    pill2Y = pill1H + gap
    canvas.DrawImage(imgPillarTop, pill2X, pill2Y, pill2W, capHeight, 180)
    canvas.DrawImage(imgPillar, pill2X, pill2Y + capHeight, pill2W, pill2H)

    # Check for collisions by comparing x and y coordinates.
    hit1 = IsCollision(charX, charY, charW, charH, pill1X, pill1Y, pill1W, pill1H, 0.06)
    hit2 = IsCollision(charX, charY, charW, charH, pill2X, pill2Y, pill2W, pill2H, 0.06)

    # Deal with collisions.
    if(hit1 or hit2):
        GameOver()

    # Play little tune if we pass a pillar.
    if(charX > pill1X + pill1W and not donePass):
        PassedPillar()

    # Draw the score.
    canvas.SetTextSize(11)
    canvas.DrawText(pillars, 0.77, 0.04)

    # Update the canvas.
    canvas.Update()

# Handle touching the screen.
def canvas_OnTouchMove(ev):
    # Reverse direction of bird.
    charSpeedY = -impulse
    angle = 0

    # Play flying sound.
    if(not gameOver):
        synthFly.PlayTone(0, 3000)

# Check for a collision between two objects.
#(d is the depth of impact required)
def IsCollision(x1, y1, w1, h1, x2, y2, w2, h2, d):
    if...