from native import app

# Called when application is started.
def OnStart():
    global img
    # Create a layout with objects vertically centered.
    lay = app.CreateLayout("linear", "VCenter,FillXY")

    # Create image.
    img = app.CreateImage("/Sys/Img/Hello.png", 0.1)
    lay.AddChild(img)

    # Create a 'Send File' button
    btnSend = app.CreateButton("Send File to another App", 0.8)
    btnSend.SetMargins(0, 0.05, 0, 0)
    btnSend.SetOnTouch(btnSend_OnTouch)
    lay.AddChild(btnSend)

    # Create a 'Send Image' button
    btnImg = app.CreateButton("Send Image to Google Drive", 0.8)
    btnImg.SetMargins(0, 0.05, 0, 0)
    btnImg.SetOnTouch(btnImg_OnTouch)
    lay.AddChild(btnImg)

    # Create a 'Send Text' button
    btnTxt = app.CreateButton("Send Text to Google Drive", 0.8)
    btnTxt.SetMargins(0, 0.05, 0, 0)
    btnTxt.SetOnTouch(btnTxt_OnTouch)
    lay.AddChild(btnTxt)

    # Add layout to app.
    app.AddLayout(lay)

# Send a file to another App (user's choice).
def btnSend_OnTouch():
    file = "/sdcard/sftest.txt"
    app.WriteFile(file, "Hello World")
    app.SendFile(file, "sftest.txt", "Send File")

# Send an image to Google Drive.
def btnImg_OnTouch():
    file = "/sdcard/MyDroid.jpg"
    img.Save(file)

    packageName = "com.google.android.apps.docs"
    className = "com.google.android.apps.docs.shareitem.UploadSharedItemActivity"
    action = "android.intent.action.SEND"
    category = "android.intent.category.DEFAULT"
    uri = None
    type = "multipart/*"
    extras = [
        {"name": "android.intent.extra.STREAM", "type": "file", "value": file},
        {"name": "android.intent.extra.SUBJECT", "type": "string", "value": "MyDroid.jpg"},
    ]

    extras = JSON.stringify(extras)
    app.SendIntent(packageName, className, action, category, uri, type, extras)

# Send text to Google Drive.
def btnTxt_OnTouch():
    textData = "The cat sat on the mat"
    packageName = "com.google.android.apps.docs"
    className = "com.google.android.apps.docs.shareitem.UploadSharedItemActivity"
    action = "android.intent.action.SEND"
    category = "android.intent.category.DEFAULT"
    uri = None
    type = "text/plain"
    extras = [
        {"name": "android.intent.extra.TEXT", "type": "string", "value": textData},
    ]

    extras = JSON.stringify(extras)
    app.SendIntent(packageName, className, action, category, uri, type, extras)