Translated code:

```python
def OnStart():
    # Create a layout with objects vertically centered.
    lay = native.app.CreateLayout("linear", "VCenter,FillXY")
    lay.SetBackColor("black")

    # Create tabs.
    tabs = native.app.CreateTabs("FRED,BILL,MARK", 0.8, 0.8, "VCenter")
    tabs.SetOnChange(tabs_OnChange)
    lay.AddChild(tabs)

    # Add button to first tab.
    layFred = tabs.GetLayout("FRED")
    btn = native.app.CreateButton("Button")
    layFred.AddChild(btn)

    # Add button to second tab.
    layBill = tabs.GetLayout("BILL")
    chk = native.app.CreateCheckBox("CheckBox")
    layBill.AddChild(chk)

    # Add layout to app.
    native.app.AddLayout(lay)


def tabs_OnChange(name):
    native.app.ShowPopup(name)
```