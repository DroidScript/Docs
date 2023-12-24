The translated code is as follows:

```python
from native import app, gfx, ui, MUI

def OnLoad():
    gfx.AddPhysics()


sky = gfx.CreateSprite("/Sys/Img/Sky.jpg")
bird = gfx.CreateSprite("/Sys/Img/Bird_960x687x3x3", "birds")


floor = gfx.CreateRectangle(1.5, 0.1, 0x338833, None, None, None, "ground")
pillar1 = gfx.CreateRectangle(0.04, 0.5, 0xC77300, 4, 0x000000, None, "object")
pillar2 = gfx.CreateRectangle(0.04, 0.5, 0xC77300, 4, 0x000000, None, "object")
plinth = gfx.CreateRectangle(0.24, 0.06, 0xC77300, 4, 0x000000, None, "object")


crash = gfx.CreateSound("/Sys/Snd/Explode.mp3")
bang = gfx.CreateSound("/Sys/Snd/Bullet.mp3")
quack = gfx.CreateSound("/Sys/Snd/Squeak.mp3")


def OnReady():
    gfx.AddSprite(sky, 0, 0, 1, 1)


gfx.AddGraphic(floor, 0, 0.9)
floor.SetPhysics(2, "fixed", 0.9, 0.7, 0.1)


gfx.AddSprite(bird, 0.06, 0.84, 0.07, None, -0.1)
bird.SetPhysics(1, "dynamic", 0.5, 0.1, 0.3)
bird.SetShape("round")


gfx.AddGraphic(pillar1, 0.6, 1 - pillar1.height - floor.height - 0.05)
pillar1.SetPhysics(2, "dynamic", 0.6, 0.3, 0.5)
gfx.AddGraphic(pillar2, 0.8, 1 - pillar2.height - floor.height - 0.05)
pillar2.SetPhysics(2, "dynamic", 0.6, 0.3, 0.5)
gfx.AddGraphic(plinth, 0.6, 0.3)
plinth.SetPhysics(2, "dynamic", 0.6, 0.3, 0.1)


def fire():
    bird.SetVelocity(0.8, 0.8)
    bird.PlayRange(0, 7, 0.3, True)
    bird.data.fired = True
    bang.Play()


def OnCollide(a, b):
    if a.group == "birds" and b.group == "object":
        if bird.data.fired and not bird.data.dead:
            quack.Play()
            bird.data.dead = True
        crash.Play()


def OnStart():
    lay = app.CreateLayout("linear", "VCenter,FillXY")


img = app.AddImage(lay, "/Sys/Img/Hello.png", 0.2)


btn = app.AddButton(lay, "Press Me", 0.3)
btn.SetMargins(0, 0.05, 0, 0)


btn.SetOnTouch(btn_OnTouch)


app.AddLayout(lay)


def btn_OnTouch():
    app.ShowPopup("Hello World!")
    app.Vibrate("0,100,30,100,50,300")
```