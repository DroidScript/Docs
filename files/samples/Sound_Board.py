Translated code:

```python
# Called when application is started.
def OnStart():
    # Create layout that fills the screen.
    lay = app.CreateLayout("Linear", "FillXY,VCenter")
    
    # Create image 1.
    img1 = app.CreateImage("/Sys/Img/Spring.png", 0.4, 0.2)
    img1.SetOnTouch(img1_OnTouch)
    lay.AddChild(img1)
    
    # Create image 2.
    img2 = app.CreateImage("/Sys/Img/Xylophone.png", 0.5, 0.2)
    img2.SetMargins(0,0.1,0,0)
    img2.SetOnTouch(img2_OnTouch)
    lay.AddChild(img2)
    
    # Add main layout to app.
    app.AddLayout(lay)
    
    # Create media players.
    player1 = app.CreateMediaPlayer()
    player2 = app.CreateMediaPlayer()
    
    # Load files (can be ogg or mp3).
    player1.SetFile("/Sys/Snd/Poing.ogg")
    player2.SetFile("/Sys/Snd/Trill.ogg")

# Called when touching image1.
def img1_OnTouch(ev):
    if ev.action == "Down":
        player1.SeekTo(0)
        player1.Play()
        img1.Scale(0.8, 0.8)
    elif ev.action == "Up":
        img1.Reset(1.0, 1.0)

# Called when touching image2.
def img2_OnTouch(ev):
    if ev.action == "Down":
        player2.SeekTo(0)
        player2.Play()
        img2.Scale(0.8, 0.8)
    elif ev.action == "Up":
        img2.Reset(1.0, 1.0)
```