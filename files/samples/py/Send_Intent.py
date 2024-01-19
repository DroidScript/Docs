from native import app
import json

#Called when application is started.
def OnStart():
    #Create a layout with objects vertically centered.
    lay = app.CreateLayout("linear", "VCenter,FillXY")

    #Create a button 1/3 of screen width and 1/10 screen height.
    btn = app.CreateButton("Send Intent", 0.3, 0.1)
    btn.SetOnTouch(btn_OnTouch)
    lay.AddChild(btn)

    #Add layout to app.
    app.AddLayout(lay)

#Called when user touches our button.
def btn_OnTouch():
    packageName = "com.google.android.gm"
    className = "com.google.android.gm.ComposeActivityGmailExternal"
    action = "android.intent.action.VIEW"
    category = None
    uri = "mailto:myfriend@gmail.com"
    type = "message/rfc822"

    extras = [
        {"name": "android.intent.extra.EMAIL", "type": "list", "value": ["fred@gmail.com"]},
        {"name": "android.intent.extra.SUBJECT", "type": "string", "value": "My subject"},
        {"name": "android.intent.extra.TEXT", "type": "string", "value": "Hello!"}
    ]
    extras = json.dumps(extras)

    app.SendIntent(packageName, className, action, category, uri, type, extras)