Translated Python code:

```python
def OnStart():
    # Create a layout with objects vertically centered.
    lay = app.CreateLayout('linear', 'VCenter,FillXY')
    
    # Add a text control to show data log.
    txt = app.AddText(lay, '', 1.0, None, 'MultiLine')
    txt.SetTextSize(18)
    
    # Add layout to app.
    app.AddLayout(lay)
    
    # Enabling the ForwardKeys option will allow users
    # to navigate your App using the d-pad, X and B key.
    # app.SetJoystickOptions('ForwardKeys')
    
    # Start timer to show joystick state.
    setInterval(ShowState, 200)

# Called 5x as second.
def ShowState():
    # Get the first connected joysticks name.
    # (only available after joystick is used)
    name = app.GetJoystickName(0)
    
    # Show state.
    joy = app.GetJoystickStates(0)
    txt.SetText(str(joy))
```