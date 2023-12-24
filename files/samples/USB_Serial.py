Translated code:

```python
import native

def OnStart():
    lay = native.app.CreateLayout("linear", "VCenter,FillXY")
    
    btn = native.app.CreateButton("Press Me", 0.3, 0.25)
    lay.AddChild(btn)
    
    btn.SetOnTouch(btn_OnTouch)
    
    native.app.AddLayout(lay)
    
    usb = native.app.CreateUSBSerial()

def btn_OnTouch():
    usb.Write("Hello serial device!")
```