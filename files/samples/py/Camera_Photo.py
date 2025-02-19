from native import app
import json

def OnStart():
    global img
    # Create a layout with objects vertically centered.
    lay = app.CreateLayout("linear", "VCenter,FillXY")

    # Add an image.
    img = app.AddImage(lay, None, 0.8, 0.6)
    img.SetBackColor("#222222")

    # Add a button.
    btn = app.AddButton(lay, "Take Photo", 0.4)
    btn.SetMargins(0, 0.05, 0, 0)
    btn.SetOnTouch(btn_OnTouch)

    # Add layout to app.
    app.AddLayout(lay)

# Called when user touches our button.
def btn_OnTouch():
    global file
    # Create a placeholder file.
    file = "/Private/photo.jpg"
    app.WriteFile(file, "")

    # Get a public URI for the file.
    uri = app.Path2Uri(file)

    # Send intent to built-in photo app.
    extras = [{"name": "output", "type": "uri", "value": uri}]
    extras = json.dumps(extras)
    app.SendIntent(None, None, "android.media.action.IMAGE_CAPTURE",
                   None, None, None, extras, "result", OnResult)

# Handle the photo result.
def OnResult(code, data):
    if code < 0:
        img.SetImage(file)