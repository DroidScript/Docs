```python
import native.app as app
import native.gfx as gfx
import native.ui as ui
import native.MUI as MUI

def OnStart():
    lay = app.CreateLayout("linear", "VCenter,FillXY")
    lay.SetBackColor("#333333")
    
    scroll = app.CreateScroller(0.95, 0.9)
    scroll.SetBackColor("black")
    lay.AddChild(scroll)
    
    txt = app.CreateText("", 2, -1, "Log,Monospace")
    txt.SetBackColor("black")
    txt.SetLog(500)
    scroll.AddChild(txt)
    
    edt = app.CreateTextEdit("netstat", 0.95, -1, "SingleLine")
    edt.SetMargins(0,8,0,0, "dip")
    edt.SetBackColor("black")
    edt.SetHint(">")
    edt.SetOnEnter(edt_OnEnter)
    lay.AddChild(edt)
    
    app.AddLayout(lay)
    
    sys = app.CreateSysProc("sh")
    sys.SetOnInput(sys_OnInput)
    sys.SetOnError(sys_OnError)
    
    app.SetOnShowKeyboard(app_OnShowKeyBoard)
    
    app.SetDebugEnabled(False)
    
    setTimeout(edt_OnEnter, 1000)

def sys_OnInput(data):
    txt.Log(data)
    setTimeout(Scroll, 100)

def sys_OnError(data):
    txt.Log(data, "Red")
    setTimeout(Scroll, 100)

def edt_OnEnter():
    cmd = edt.GetText()
    txt.Log(cmd+"\n", "Green")
    sys.Out(cmd+"\n")

def app_OnShowKeyBoard(shown):
    kbh = app.GetKeyboardHeight() / app.GetDisplayHeight()

    if shown:
        scroll.SetSize(0.95, 0.9-kbh)
    else:
        scroll.SetSize(0.95, 0.9)
    Scroll()

def Scroll():
    scroll.ScrollTo(0, 999)
```