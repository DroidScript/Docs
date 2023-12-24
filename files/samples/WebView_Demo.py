from native import app

def OnStart():
    lay = app.CreateLayout("linear", "VCenter,FillXY")

    web = app.CreateWebView(0.8, 0.8)
    web.SetOnProgress(web_OnProgess)
    lay.AddChild(web)

    layHoriz = app.CreateLayout("linear", "Horizontal")

    btnLocal = app.CreateButton("Local")
    btnLocal.SetOnTouch(btnLocal_OnTouch)
    layHoriz.AddChild(btnLocal)

    btnDynamic = app.CreateButton("Dynamic")
    btnDynamic.SetOnTouch(btnDynamic_OnTouch)
    layHoriz.AddChild(btnDynamic)

    btnRemote = app.CreateButton("Remote")
    btnRemote.SetOnTouch(btnRemote_OnTouch)
    layHoriz.AddChild(btnRemote)

    lay.AddChild(layHoriz)

    app.AddLayout(lay)

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
    app.ShowProgress("Loading...")
    web.LoadUrl("http://www.bbc.co.uk")

def web_OnProgess(progress):
    app.Debug("progress = " + str(progress))
    if progress == 100:
        app.HideProgress()