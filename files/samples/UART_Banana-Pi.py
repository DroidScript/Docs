Translated code:

```python
import native

def OnStart():
    lay = native.app.CreateLayout("linear", "VCenter,FillXY")
    
    txt = native.app.CreateText("Banana-Pi UART")
    txt.SetTextSize(32)
    lay.AddChild(txt)
    
    btn = native.app.CreateButton("Send Serial", 0.4, 0.15)
    btn.SetMargins(0, 0.05, 0, 0)
    btn.SetOnTouch(btn_OnTouch)
    lay.AddChild(btn)
    
    native.app.AddLayout(lay)

    sys = native.app.CreateSysProc("su")

def btn_OnTouch():
    sys.Out("echo hello > /dev/ttyS0\n")
```