from native import app, gfx, ui, MUI
import json

# Called when application is started.
def OnStart():
    # Create a layout with objects vertically centered.
    lay = app.CreateLayout("linear", "VCenter,FillXY")

    # Create a button to show popup list.
    btn = app.CreateButton("Show List", 0.3)
    btn.SetOnTouch(btn_OnTouch)
    lay.AddChild(btn)

    # Add layout to app.
    app.AddLayout(lay)


# Called when user touches our button.
def btn_OnTouch():
    # Try to load list data from previous check list.
    lst = app.ReadFile("/sdcard/checklist.json")

    # Use previous list data or create new data if none found.
    if lst:
        lst = json.loads(lst)
    else:
        lst = [{"title": "Sheep", "check": True},
               {"title": "Cows", "check": False},
               {"title": "Pigs", "check": True},
               {"title": "Goats", "check": True}]

    app.ShowCheckList("Select Animals", lst, OnFinish)


# Returns data when user has finished with checklist
def OnFinish(data):
    if data:
        app.ShowPopup(json.dumps(data))
        app.WriteFile("/sdcard/checklist.json", json.dumps(data))