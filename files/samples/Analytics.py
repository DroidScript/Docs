import native

# Called when application is started.
def OnStart():
    # Create a layout with objects vertically centered.
    lay = native.app.CreateLayout("linear", "VCenter,FillXY")

    # Create a text label and add it to layout.
    txt = native.app.CreateText("Analytics Demo")
    txt.SetTextSize(32)
    lay.AddChild(txt)

    # Add layout to app.
    native.app.AddLayout(lay)

    # Send data to Google Analytics.
    #(the UA code is your unique Analytics code)
    ver = native.app.GetVersion()
    native.app.GA("create", "UA-12345678-1")
    native.app.GA("send", "screenview",
        {"appName": "droidscript", "appVersion": ver, "screenName": "main"})