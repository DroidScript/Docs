# Spritesheet variables.
spriteCount = 8
spriteIndex = 0
spriteSrcWidth = 50
spriteSrcHeight = 60
spriteSrcAspectRatio = spriteSrcWidth/spriteSrcHeight
frameCount = 0

# Called when application is started.
def OnStart():
    # Set full screen mode.
    app.SetScreenMode("Full")

    # Create the main layout.
    lay = app.CreateLayout("Linear", "FillXY")

    # Create a GLView and add to layout.
    glview = app.CreateGLView(1, 1, "Fast2d")
    lay.AddChild(glview)

    # Add the main layout.
    app.AddLayout(lay)

    # Create the spritesheet image and call StartRendering
    # once imgSpritesheet has finished loading.
    imgSpritesheet = glview.CreateImage("/Sys/Img/Sprint.png", StartRendering)

def StartRendering():
    # Now the GLView is visible we can get its size in pixels.
    viewWidth = glview.GetAbsWidth()
    viewHeight = glview.GetAbsHeight()

    # Set starting position and size of the sprite in pixels.
    # (sprite takes up 1/10 of the glview height)
    spriteDstX = 0
    spriteDstY = 0
    spriteDstHeight = viewHeight / 10
    spriteDstWidth = spriteDstHeight * spriteSrcAspectRatio

    # Convert width and height into the DroidScript fractional
    # system (makes it work on all screen resolutions).
    spriteDstHeight = spriteDstHeight / viewHeight
    spriteDstWidth = spriteDstWidth / viewWidth

    # Render at 30 frames per second.
    setInterval(DrawFrame, 1000/30)

def DrawFrame():
    # Work out the source position within the spritesheet.
    sx = spriteIndex * spriteSrcWidth
    sy = 0

    # Copy character sprite from sprite sheet to screen.
    glview.DrawSprite(
        imgSpritesheet, sx, sy, spriteSrcWidth, spriteSrcHeight, 
        spriteDstX, spriteDstY, spriteDstWidth, spriteDstHeight)

    # Render the graphics to screen.
    glview.Render()

    # Change to next sprite every 2nd frame.
    if frameCount % 2 == 0:
        spriteIndex += 1
        if spriteIndex >= spriteCount:
            spriteIndex = 0

    # Update the sprite position, wrapping
    # horizontally and vertically.
    spriteDstX += 0.015
    if spriteDstX > 1.0:
        spriteDstX = -spriteDstWidth
        spriteDstY += spriteDstHeight

        if (spriteDstY + spriteDstHeight) > 1.0:
            spriteDstY = 0
    frameCount += 1