from native import app

def OnStart():
    # Create a layout with objects vertically centered.
    lay = app.CreateLayout("linear", "VCenter,FillXY")
    lay.SetBackColor("black")

    # Create tabs.
    tabs = app.CreateTabs("FRED,BILL,MARK", 0.8, 0.8, "VCenter")
    tabs.SetOnChange(tabs_OnChange)
    lay.AddChild(tabs)

    # Add button to first tab.
    layFred = tabs.GetLayout("FRED")
    btn = app.CreateButton("Button")
    layFred.AddChild(btn)

    # Add button to second tab.
    layBill = tabs.GetLayout("BILL")
    chk = app.CreateCheckBox("CheckBox")
    layBill.AddChild(chk)

    # Add layout to app.
    app.AddLayout(lay)

def tabs_OnChange(name):
    app.ShowPopup(name)