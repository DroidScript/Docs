# cfg.Game, cfg.Portrait

# Configure app for landscape game mode.
# Called when game starts, so we can load our assets.
def OnLoad():
    global sky, bunny, floor
    # Enable physics with gravity of 20.
    gfx.AddPhysics(20)

    # Enclose screen with invisible walls.
    gfx.Enclose(-1, "left,right")

    # Create our sprite images.
    sky = gfx.CreateBackground("/Sys/Img/Sky.jpg", "stretch")
    bunny = gfx.CreateSprite("/Sys/Img/Bunny.png", "bunnies")
    floor = gfx.CreateRectangle(1, 0.05, 0x338833, 0, 0, 1, "floor")

# Called when game assets have loaded.
def OnReady():
    # Add background.
    gfx.AddBackground(sky)

    # Add floor.
    gfx.AddGraphic(floor, 0, 0.95)
    floor.SetPhysics(2, "fixed", 0.9, 0.8, 0.1)

    # Add character and set physics properties.
    #(groupId, type, density, bounce, friction)
    gfx.AddSprite(bunny, 0.2, 0.2, 0.05)
    bunny.SetPhysics(1, "Dynamic", 0.5, 0.9, 0.1)
    bunny.SetVelocity(0.7, 0)

    # Start game.
    gfx.Play()