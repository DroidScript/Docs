Sorry about that, it seems I made a mistake. The correct translation is as follows:

```python
from native import app

# Called when application is started.
def OnStart():
    # Create layout that fills the screen.
    lay = app.CreateLayout("linear", "FillXY,VCenter")
    
    # Create 'Play' button.
    btn = app.CreateButton("Play", 0.4, 0.1)
    btn.SetOnTouch(btn_OnTouch)
    lay.AddChild(btn)
    
    # Add main layout to app.
    app.AddLayout(lay)
    
    # Create media player.
    player = app.CreateMediaPlayer()
    
    # Load a file (can be ogg or mp3).
    player.SetFile("/Sys/Snd/Poing.ogg")

# Handle 'Play' button.
def btn_OnTouch():
    player.SeekTo(0)
    player.Play()
```