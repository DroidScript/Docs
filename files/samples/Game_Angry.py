The provided code can be translated to Python as follows:

```python
from native import app, gfx, ui, MUI

# Configure app for game mode.
app.Game

# Handle game loading.
def OnLoad():
    # Enable physics and enclose scene with walls.
    gfx.AddPhysics()
    
    # Create sprites.
    sky = gfx.CreateSprite("/Sys/Img/Sky.jpg")
    bird = gfx.CreateSprite("/Sys/Img/Bird_960x687x3x3", "birds")

    # Create graphical objects.
    floor = gfx.CreateRectangle(1.5, 0.1, 0x338833, None, None, None, "ground")
    pillar1 = gfx.CreateRectangle(0.04, 0.5, 0xC77300, 4, 0x000000, None, "object")
    pillar2 = gfx.CreateRectangle(0.04, 0.5, 0xC77300, 4, 0x000000, None, "object")
    plinth = gfx.CreateRectangle(0.24, 0.06, 0xC77300, 4, 0x000000, None, "object")

    # Create sounds.
    crash = gfx.CreateSound("/Sys/Snd/Explode.mp3")
    bang = gfx.CreateSound("/Sys/Snd/Bullet.mp3")
    quack = gfx.CreateSound("/Sys/Snd/Squeak.mp3")

# Called when game has loaded.
def OnReady():
    # Add sky image.
    gfx.AddSprite(sky, 0, 0, 1, 1)

    # Add floor.
    gfx.AddGraphic(floor, 0, 0.9)
    floor.SetPhysics(2, "fixed", 0.9, 0.7, 0.1)

    # Add bird image (with physics).
    # group, type, density, bounce, friction, linearDamp, angularDamp.
    gfx.AddSprite(bird, 0.06, 0.84, 0.07, None, -0.1)
    bird.SetPhysics(1, "dynamic", 0.5, 0.1, 0.3)
    bird.SetShape("round")

    # Add target objects.
    gfx.AddGraphic(pillar1, 0.6, 1 - pillar1.height - floor.height - 0.05)
    pillar1.SetPhysics(2, "dynamic", 0.6, 0.3, 0.5)
    gfx.AddGraphic(pillar2, 0.8, 1 - pillar2.height - floor.height - 0.05)
    pillar2.SetPhysics(2, "dynamic", 0.6, 0.3, 0.5)
    gfx.AddGraphic(plinth, 0.6, 0.3)
    plinth.SetPhysics(2, "dynamic", 0.6, 0.3, 0.1)

    # Shoot bird after 2 seconds.
    def fire():
        bird.SetVelocity(0.8, 0.8)
        bird.PlayRange(0, 7, 0.3, True)
        bird.data.fired = True
        bang.Play()

    setTimeout(fire, 2000)

    # Start game.
    gfx.Play()

# Update game objects.
# (called for every frame)
def OnAnimate(t, dt):
    # Show bird when on screen.
    if bird.x > 0:
        bird.visible = True

# Handle sprite collisions.
def OnCollide(a, b):
    # Handle bird and object collision.
    # Note: collision groups are sorted alphabetically.
    if a.group == "birds" and b.group == "object":
        # bird.Goto(8)
        if bird.data.fired and not bird.data.dead:
            quack.Play()
            bird.data.dead = True
        crash.Play()
```