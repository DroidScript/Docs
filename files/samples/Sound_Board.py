Translated code:

```python
from native import app, gfx, ui, MUI

def OnStart():
    lay = app.CreateLayout("Linear", "FillXY,VCenter")

    img1 = app.CreateImage("/Sys/Img/Spring.png", 0.4, 0.2)
    img1.SetOnTouch(img1_OnTouch)
    lay.AddChild(img1)

    img2 = app.CreateImage("/Sys/Img/Xylophone.png", 0.5, 0.2)
    img2.SetMargins(0, 0.1, 0, 0)
    img2.SetOnTouch(img2_OnTouch)
    lay.AddChild(img2)

    app.AddLayout(lay)

    player1 = app.CreateMediaPlayer()
    player2 = app.CreateMediaPlayer()

    player1.SetFile("/Sys/Snd/Poing.ogg")
    player2.SetFile("/Sys/Snd/Trill.ogg")


def img1_OnTouch(ev):
    if ev.action == "Down":
        player1.SeekTo(0)
        player1.Play()
        img1.Scale(0.8, 0.8)
    elif ev.action == "Up":
        img1.Reset(1.0, 1.0)


def img2_OnTouch(ev):
    if ev.action == "Down":
        player2.SeekTo(0)
        player2.Play()
        img2.Scale(0.8, 0.8)
    elif ev.action == "Up":
        img2.Reset(1.0, 1.0)

```