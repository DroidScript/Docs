from native import app

def OnStart():
    global img
    lay = app.CreateLayout("linear", "VCenter,FillXY")
    btn = app.AddButton(lay, "Get all Images", 0.4, 0.1)
    btn.SetOnTouch(btn_OnTouch)
    img = app.AddImage(lay, "/Sys/Img/Hello.png", 0.6)
    app.AddLayout(lay)

def btn_OnTouch():
    uri = "content://media/external/images/media"
    columns = "_data"
    rows = app.QueryContent(uri, columns)
    app.Alert(str(rows))
    img.SetImage(app.Path2Uri(rows[0]["_data"]))