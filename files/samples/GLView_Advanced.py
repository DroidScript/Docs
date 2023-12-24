# Initialise variables
horizDroidCount = 8
frameCounter = 0
rotateDroids = True
pulseDroids = False
moveDroids = False

# Called when application is started
def OnStart():
    # Set full screen game mode
    app.SetScreenMode("Game")

    # Create the main layout
    lay = app.CreateLayout("Linear", "FillXY")

    # Create a GLView and add it to main layout
    glview = app.CreateGLView(1, 1, "Fast2d")
    lay.AddChild(glview)

    # Add the main layout to app
    app.AddLayout(lay)

    # Create a layout to contain the controls
    layControls = app.CreateLayout("Linear", "Horizontal, FillX, VCenter")
    layControls.SetPadding(0.005, 0.005, 0.005, 0.005)
    layControls.SetBackColor("#EE444444")

    # Create a SeekBar used to change the number of droids
    skb = app.CreateSeekBar(0.4)
    skb.SetOnTouch(skb_OnTouch)
    skb.SetRange(20)
    skb.SetValue(horizDroidCount)
    skb.SetMargins(0, 0, 0.05, 0)

    # Create a Toggle button to turn droid rotation on/off
    btnRotate = app.CreateToggle("Rotate")
    btnRotate.SetOnTouch(btnRotate_OnTouch)
    btnRotate.SetChecked(rotateDroids)

    # Create a Toggle button to turn droid pulsing on/off
    btnPulse = app.CreateToggle("Pulse")
    btnPulse.SetOnTouch(btnPulse_OnTouch)
    btnPulse.SetChecked(pulseDroids)

    # Create a Toggle button to turn droid movement on/off
    btnMove = app.CreateToggle("Move")
    btnMove.SetOnTouch(btnMove_OnTouch)
    btnMove.SetChecked(moveDroids)

    # Add the controls to the layout
    layControls.AddChild(skb)
    layControls.AddChild(btnRotate)
    layControls.AddChild(btnPulse)
    layControls.AddChild(btnMove)

    # Add the controls layout to the app
    app.AddLayout(layControls)

    # Now the GLView has been added to the layout,
    # we can get its size in pixels
    glviewWidth = glview.GetAbsWidth()
    glviewHeight = glview.GetAbsHeight()

    # Work out how many droids we can fit on screen
    droidWidth = 1.0 / horizDroidCount
    droidHeight = (droidWidth * glviewWidth) / glviewHeight
    vertDroidCount = round(1.0 / droidHeight)

    # Create 2 droid images to draw in the GLView
    # Call StartRendering once Hello.png has finished loading
    imgDroidGreen = glview.CreateImage("/Sys/Img/Icon.png")
    imgDroidBlue = glview.CreateImage("/Sys/Img/Hello.png", StartRendering)

    app.SetDebugEnabled(False)


def StartRendering():
    # Render at 30 frames per second
    setInterval(DrawFrame, 1000 / 30)


def DrawFrame():
    # Note: DrawFrameSimple and DrawFrameAdvanced illustrate the 2
    # different ways of using GLView to achieve the same result

    # DrawFrameSimple uses GLView.DrawImage
    DrawFrameSimple()

    # DrawFrameAdvanced uses the GLView context
    # DrawFrameAdvanced()

    # Render the graphics
    glview.Render()

    frameCounter += 1


def DrawFrameSimple():
    # DrawFrameSimple uses the GLView.DrawImage
    # function to draw the grid of droids.

    # Draw the grid of droids, alternative between green and blue
    for row in range(vertDroidCount):
        # Start each row with alternating green and blue droids
        drawGreenDroid = (row % 2 == 0)

        for col in range(horizDroidCount):
            x = col * droidWidth
            y = row * droidHeight
            angle = 0
            scaledDroidWidth = droidWidth
            scaledDroidHeight = droidHeight
            droidImg = imgDroidGreen

            if drawGreenDroid:
                # Setup the position, rotation and scale of the Green droid
                droidImg = imgDroidGreen

                if rotateDroids:
                    angle = (frameCounter * 10)

                if moveDroids:
                    # Offset maximum +-1/4 of the width & height of the GLView
                    x += Math.sin(frameCounter / 10) * 0.25
                    y += Math.sin(frameCounter / 20) * 0.25

                if pulseDroids:
                    scale = 0.5 + Math.abs(Math.sin(frameCounter / 10))
                    scaledDroidWidth = droidWidth * scale
                    scaledDroidHeight = droidHeight * scale

                    # Offset x and y so that the droid center remains at
                    # the same position no matter how much is it scaled
                    x -= (scaledDroidWidth / 2) - (droid