Translated Python code:

```python
# Called when application is started.
def OnStart():
    # Lock orientation while we create initial layout.
    app.SetOrientation("Landscape")
    
    # Create a layout with objects vertically centered.
    lay = app.CreateLayout("linear", "VCenter,FillXY")    
    lay.SetBackground("/res/drawable/pattern_carbon", "repeat")
    
    # Create image with fixed internal size (must match transmit size)
    img = app.CreateImage(None, 0.9, 0.9, "fix", 640, 480)
    lay.AddChild(img)
    
    # Add layout to app.    
    app.AddLayout(lay)
    
    # Create UDP network object and enable receive.
    net = app.CreateNetClient("UDP")
    net.ReceiveVideoStream(11055, img)
```