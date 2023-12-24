I apologize for the mistake in the previous translation. It seems like I missed the initialization of the "app" object and some function calls that were not translated properly. Here is the corrected translation:

```python
import native

# Called when application is started.
def OnStart():
    # Create our screen layout.
    CreateLayout()

    # Create NXT controller object.
    nxt = native.app.CreateNxt()   

# Create the screen layout.
def CreateLayout():
    # Create the layout (with repeating pattern background).
    lay = native.app.CreateLayout("linear", "VCenter,FillXY")
    lay.SetBackground("/Sys/Img/Tile.png", "repeat")

    # Create Connect button.
    btn = native.app.CreateButton("Connect", 0.3, 0.1, "Lego")
    btn.SetMargins(0, 0, 0, 0.1)
    btn.SetOnTouch(btn_OnTouch)
    lay.AddChild(btn)

    # Create 'sound' image (square image, 0.3 of screen width).
    imgSnd = native.app.CreateImage("/Sys/Img/Sound.png", 0.3)

    # Set the function to be called when image is touched.
    imgSnd.SetOnTouch(imgSnd_OnTouch)

    # Add the image to our layout.
    lay.AddChild(imgSnd)

    # Add layout to the app.
    native.app.AddLayout(lay)

# Called when user presses connect.
def btn_OnTouch():
    # Show list of NXT devices.
    native.nxt.ShowDevices()

# Called when sound image is touched.
def imgSnd_OnTouch(e):
    if e.action == "Down":
        # Play a 100Hz tone for 500 milliseconds.
        native.nxt.Beep(100, 500)
```

Note: The translated code assumes that the `app` and `nxt` objects are imported from the `native` module. Make sure to import the necessary objects from the `native` module in your environment.