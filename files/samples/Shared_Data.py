from native import app

def OnStart():
    lay = app.CreateLayout("linear", "VCenter,FillXY")

    txt = app.CreateText("Shared Text:")
    lay.AddChild(txt)

    txt1 = app.CreateText("", 0.9, 0.4, "multiline")
    txt1.SetBackColor("#ff222222")
    txt1.SetTextSize(18)
    lay.AddChild(txt1)

    txt = app.CreateText("Shared Files:")
    txt.SetMargins(0, 0.05, 0, 0)
    lay.AddChild(txt)

    txt2 = app.CreateText("", 0.9, 0.4, "multiline")
    txt2.SetBackColor("#ff222222")
    txt2.SetTextSize(18)
    lay.AddChild(txt2)

    app.AddLayout(lay)

    sharedText = app.GetSharedText()
    if sharedText:
        txt1.SetText(sharedText)

    sharedFiles = app.GetSharedFiles()
    if sharedFiles:
        txt2.SetText(sharedFiles[0])

    # Uncomment the code below to register your program to handle all shared data.
    # app.SetSharedApp("My AppName")