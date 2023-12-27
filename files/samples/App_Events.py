from native import app
import json

# Called when application is created.
def OnStart():
    app.ShowPopup("OnStart")
    app.EnableBackKey(False)

# Called when the back key is pressed.
def OnBack():
    app.ShowPopup("OnBack")
    app.Exit()

# Called when application is paused.
# (eg. When user switches to home screen)
def OnPause():
    app.ShowPopup("OnPause")

# Called when application is resumed.
# (eg. When user returns from home screen)
def OnResume():
    app.ShowPopup("OnResume")

# Called when configuration changes.
# (eg. When user rotates phone)
def OnConfig():
    app.ShowPopup("OnConfig")

# Handle data sent from other apps.
def OnData(isStartUp):
    intent = app.GetIntent()
    if intent:
        app.ShowPopup(json.dumps(intent))