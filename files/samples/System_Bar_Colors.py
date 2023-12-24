Translated code:

```python
import native

def OnStart():
    native.app.SetStatusBarColor("#ff0000")
    native.app.SetNavBarColor("#ff0000")
    
    lay = native.app.CreateLayout("linear", "VCenter,FillXY")
    
    txt = native.app.CreateText("Hello")
    txt.SetTextColor("#ff0000")
    txt.SetTextSize(32)
    lay.AddChild(txt)
    
    native.app.AddLayout(lay)
```