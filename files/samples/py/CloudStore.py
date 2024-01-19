from native import app

# Called when application is started
def OnStart():
    global cloud
    # Create a layout with objects vertically centered
    lay = app.CreateLayout("linear", "VCenter,FillXY")

    # Add a button to save data to cloud
    btnSave = app.AddButton(lay, "Save", 0.3, 0.1)
    btnSave.SetOnTouch(btnSave_OnTouch)

    # Add a button to load data from cloud
    btnLoad = app.AddButton(lay, "Load", 0.3, 0.1)
    btnLoad.SetOnTouch(btnLoad_OnTouch)

    # Add a button to merge data to cloud
    btnSave = app.AddButton(lay, "Merge", 0.3, 0.1)
    btnSave.SetOnTouch(btnMerge_OnTouch)

    # Add layout to app
    app.AddLayout(lay)

    # Create CloudStore component
    #(Note: this is a dummy key and will show an error)
    cloud = app.CreateCloudStore("L994uhSixfh8UBgUb66T")

# Called when user touches our Save button
def btnSave_OnTouch():
    # Save a new shopping list to the cloud
    app.ShowProgress()
    cloud.Save("Shopping_List", {"Apples":8,"Oranges":6}, OnSave)

# Handle the CloudStore response
def OnSave(response):
    app.HideProgress()
    if response['error']:
        app.ShowPopup("Error: " + response['error'] + ", " + response['message'])
    else:
        app.ShowPopup(response['message'])

# Called when user touches our Load button
def btnLoad_OnTouch():
    # Load a shopping list from the cloud
    app.ShowProgress()
    cloud.Load("Shopping_List", OnLoad)

# Handle the CloudStore response
def OnLoad(response):
    app.HideProgress()
    if response['error']:
        app.ShowPopup("Error: " + response['error'] + ", " + response['message'])
    else:
        app.ShowPopup(str(response['data']))

# Called when user touches our Merge button
def btnMerge_OnTouch():
    # Update our shopping list with a new item and change the value of existing items
    app.ShowProgress()
    cloud.Merge("Shopping_List", {"Apples":8,"Oranges":10,"Bananas":8}, OnMerge)

# Handle the CloudStore response
def OnMerge(response):
    app.HideProgress()
    if response['error']:
        app.ShowPopup("Error: " + response['error'] + ", " + response['message'])
    else:
        app.ShowPopup(response['message'])