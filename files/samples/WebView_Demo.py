Translated code:

```python
import native

def OnStart():
    lay = native.app.CreateLayout("linear", "VCenter,FillXY")
    
    web = native.app.CreateWebView(0.8, 0.8)
    web.SetOnProgress(web_OnProgess)
    lay.AddChild(web)
    
    layHoriz = native.app.CreateLayout("linear", "Horizontal")
    
    btnLocal = native.app.CreateButton("Local")
    btnLocal.SetOnTouch(btnLocal_OnTouch)
    layHoriz.AddChild(btnLocal)
    
    btnDynamic = native.app.CreateButton("Dynamic")
    btnDynamic.SetOnTouch(btnDynamic_OnTouch)
    layHoriz.AddChild(btnDynamic)
    
    btnRemote = native.app.CreateButton("Remote")
    btnRemote.SetOnTouch(btnRemote_OnTouch)
    layHoriz.AddChild(btnRemote)
    
    lay.AddChild(layHoriz)
    
    native.app.AddLayout(lay)

def btnLocal_OnTouch():
    web.LoadUrl("file:///Sys/Html/Page.htm")

def btnDynamic_OnTouch():
    html = "<html><head>"
    html += "<meta name='viewport' content='width=device-width'>"
    html += "</head><body>Hello Dynamic World!<br>"
    html += "<img src='Img/Droid2.png'>"
    html += "</body></html>"
    web.LoadHtml(html, "file:///Sys/")

def btnRemote_OnTouch():
    native.app.ShowProgress("Loading...")
    web.LoadUrl("http://www.bbc.co.uk")

def web_OnProgess(progress):
    native.app.Debug("progress = " + str(progress))
    if progress == 100:
        native.app.HideProgress()
```