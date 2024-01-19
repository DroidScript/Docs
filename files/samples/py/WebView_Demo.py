from native import app

# Called when application is started.
def OnStart():
    global web
    # Create a layout with objects vertically centered.
    lay = app.CreateLayout("linear", "VCenter,FillXY")

    # Create a web control.
    web = app.CreateWebView(0.8, 0.8)
    web.SetOnProgress(web_OnProgress)
    lay.AddChild(web)

    # Create horizontal sub-layout for buttons.
    layHoriz = app.CreateLayout("linear", "Horizontal")

    # Create 'Local' button.
    btnLocal = app.CreateButton("Local")
    btnLocal.SetOnTouch(btnLocal_OnTouch)
    layHoriz.AddChild(btnLocal)

    # Create 'Dynamic' button.
    btnDynamic = app.CreateButton("Dynamic")
    btnDynamic.SetOnTouch(btnDynamic_OnTouch)
    layHoriz.AddChild(btnDynamic)

    # Create 'Remote' button.
    btnRemote = app.CreateButton("Remote")
    btnRemote.SetOnTouch(btnRemote_OnTouch)
    layHoriz.AddChild(btnRemote)

    # Add horizontal layout to main layout.
    lay.AddChild(layHoriz)

    # Add layout to app.
    app.AddLayout(lay)

# Called when user touches 'Local' button.
# (We could use a url like "file:///sdcard/MyPage.htm")
def btnLocal_OnTouch():
    web.LoadUrl("file:///Sys/Html/Page.htm")

# Called when user touches 'Dynamic' button.
def btnDynamic_OnTouch():
    html = "<html><head>"
    html += "<meta name='viewport' content='width=device-width'>"
    html += "</head><body>Hello Dynamic World!<br>"
    html += "<img src='Img/Droid2.png'>"
    html += "</body></html>"
    web.LoadHtml(html, "file:///Sys/")

# Called when user touches 'Remote' button.
def btnRemote_OnTouch():
    app.ShowProgress("Loading...")
    web.LoadUrl("http://www.bbc.co.uk")

# Show page load progress.
def web_OnProgress(progress):
    app.Debug("progress = " + progress)
    if progress == 100:
        app.HideProgress()