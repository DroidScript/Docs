from native import app

# Called when application is started.
def OnStart():
    # Create a layout with objects vertically centered.
    lay = app.CreateLayout("linear", "VCenter,FillXY")

    # Create a text label and add it to layout.
    txt = app.CreateText("Analytics Demo")
    txt.SetTextSize(32)
    lay.AddChild(txt)

    # Add layout to app.
    app.AddLayout(lay)

    # Send data to Google Analytics.
    #(the UA code is your unique Analytics code)
    ver = app.GetVersion()
    app.GA("create", "UA-12345678-1")
    app.GA("send", "screenview",
        {"appName": "droidscript", "appVersion": ver, "screenName": "main"})