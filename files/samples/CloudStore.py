Translated code:

```python
import native

# Called when application is started
def OnStart():
    # Create a layout with objects vertically centered
    lay = native.app.CreateLayout("linear", "VCenter,FillXY")

    # Add a button to save data to cloud
    btnSave = native.app.AddButton(lay, "Save", 0.3, 0.1)
    btnSave.SetOnTouch(btnSave_OnTouch)

    # Add a button to load data from cloud
    btnLoad = native.app.AddButton(lay, "Load", 0.3, 0.1)
    btnLoad.SetOnTouch(btnLoad_OnTouch)

    # Add a button to merge data to cloud
    btnSave = native.app.AddButton(lay, "Merge", 0.3, 0.1)
    btnSave.SetOnTouch(btnMerge_OnTouch)

    # Add layout to app
    native.app.AddLayout(lay)

    # Create CloudStore component
    #(Note: this is a dummy key and will show an error)
    cloud = native.app.CreateCloudStore("L994uhSixfh8UBgUb66T")

# Called when user touches our Save button
def btnSave_OnTouch():
    # Save a new shopping list to the cloud
    native.app.ShowProgress()
    cloud.Save("Shopping_List", {"Apples":8,"Oranges":6}, OnSave)

# Handle the CloudStore response
def OnSave(response):
    native.app.HideProgress()
    if response['error']:
        native.app.ShowPopup("Error: " + response['error'] + ", " + response['message'])
    else:
        native.app.ShowPopup(response['message'])

# Called when user touches our Load button
def btnLoad_OnTouch():
    # Load a shopping list from the cloud
    native.app.ShowProgress()
    cloud.Load("Shopping_List", OnLoad)

# Handle the CloudStore response
def OnLoad(response):
    native.app.HideProgress()
    if response['error']:
        native.app.ShowPopup("Error: " + response['error'] + ", " + response['message'])
    else:
        native.app.ShowPopup(str(response['data']))

# Called when user touches our Merge button
def btnMerge_OnTouch():
    # Update our shopping list with a new item and change the value of existing items
    native.app.ShowProgress()
    cloud.Merge("Shopping_List", {"Apples":8,"Oranges":10,"Bananas":8}, OnMerge)

# Handle the CloudStore response
def OnMerge(response):
    native.app.HideProgress()
    if response['error']:
        native.app.ShowPopup("Error: " + response['error'] + ", " + response['message'])
    else:
        native.app.ShowPopup(response['message'])
```

Please note that the translation assumes that the functions `app.CreateLayout()`, `app.AddButton()`, `app.SetOnTouch()`, `app.AddLayout()`, `app.CreateCloudStore()`, `app.ShowProgress()`, `app.HideProgress()`, `app.ShowPopup()`, `cloud.Save()`, `cloud.Load()` and `cloud.Merge()` are available in the `native` module.