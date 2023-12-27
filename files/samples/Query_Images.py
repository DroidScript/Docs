Here is the Python translation of the given JavaScript code:

```python
def OnStart():
    # Create a layout with objects vertically centered.
    lay = app.CreateLayout("linear", "VCenter,FillXY")

    # Add a button
    btn = app.CreateButton(lay, "Get all Images", 0.4, 0.1)
    btn.SetOnTouch(btn_OnTouch)

    # Add an image 20% of screen width.
    img = app.CreateImage(lay, "/Sys/Img/Hello.png", 0.6)

    # Add layout to app.
    app.AddLayout(lay)


def btn_OnTouch():
    # Query for all image info.
    # (Look here for column names: 
    # https://developer.android.com/reference/android/provider/MediaStore.Images.ImageColumns)
    uri = "content://media/external/images/media"
    columns = "_data"
    rows = app.QueryContent(uri, columns)

    # Show result (JSON.stringify as useful way of converting JS objects to text)
    app.Alert(str(rows))

    # Show the first image.
    img.SetImage(app.Path2Uri(rows[0]["_data"]))
```

Note: The translation assumes that the `app` object has already been imported or defined. If it is not the case, you need to import or define it properly. Also, the function `app.Alert` is used instead of `alert` to display the result, assuming you have a similar functionality available in your Python environment.