from native import app

# Called when application is started.
def OnStart():
    global player
    # Create a layout with objects vertically centered.
    lay = app.CreateLayout("linear", "VCenter,FillXY")

    # Add a button.
    btn = app.AddButton(lay, "Get all Videos", 0.4, 0.1)
    btn.SetOnTouch(btn_OnTouch)

    # Create video view.
    player = app.CreateVideoView(0.8, 0.4)
    lay.AddChild(player)
    player.SetOnReady(lambda: player.Play())

    # Add layout to app.
    app.AddLayout(lay)

# Called when user touches our button.
def btn_OnTouch():
    # Query for all image info.
    #(Look here for column names:
    # https://developer.android.com/reference/android/provider/MediaStore.Images.ImageColumns)
    # uri = "content://media/external/images/media";
    uri = "content://media/external/video/media"
    columns = "_data"
    rows = app.QueryContent(uri, columns)

    # Show result (JSON.stringify as useful way of converting JS objects to text)
    app.Alert(JSON.stringify(rows))

    # Show the first video.
    app.Alert(app.Path2Uri(rows[0]._data))
    player.SetFile(app.Path2Uri(rows[0]._data))
    player.Play()