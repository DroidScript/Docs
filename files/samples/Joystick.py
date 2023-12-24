I apologize for the confusion. It seems there was an error in executing the translated code. Let me try again.

```python
from native import app

def OnStart():
    lay = app.CreateLayout("linear", "VCenter, FillXY")
    
    txt = app.AddText(lay, "", 1.0, None, "MultiLine")
    txt.SetTextSize(18)
    
    app.AddLayout(lay)
    
    setInterval(ShowState, 200)

def ShowState():
    name = app.GetJoystickName(0)
    
    joy = app.GetJoystickStates(0)
    txt.SetText(str(joy))
```

Please note that the translation of the `app` object may be different in the Python module you are using. Please update the code accordingly.