```python
def OnStart():
    lay = native.app.CreateLayout("Linear", "VCenter,FillXY")
    spin = native.app.AddSpinner(lay, "Internal,External,USB", 0.5)
    spin.SelectItem("Internal")
    btnWrite = native.app.AddButton(lay, "Write to Storage", 0.5)
    btnWrite.SetOnTouch(btnWrite_OnTouch)
    btnWrite.SetMargins(0, 0.05, 0, 0)
    btnRemove = native.app.AddButton(lay, "Remove Permissions", 0.5)
    btnRemove.SetOnTouch(btnRemove_OnTouch)
    btnRemove.SetMargins(0, 0.05, 0, 0)
    native.app.AddLayout(lay)

def btnWrite_OnTouch():
    WriteToStorage()

def btnRemove_OnTouch():
    native.app.RemovePermission("*")

def WriteToStorage():
    if spin.GetText() == "Internal":
        fldr = "/Internal/Documents/MyData"
        perm = "internal"
    elif spin.GetText() == "External":
        fldr = "/External/Documents/MyData"
        perm = "external"
    else:
        fldr = "/USB/MyData"
        perm = "usb"

    if not native.app.CheckPermission(fldr):
        native.app.alert(f"Please give permission to access the {fldr} folder or a parent folder")
        native.app.GetPermission(perm, OnPermission)
        return

    native.app.MakeFolder(fldr)
    native.app.WriteFile(fldr + "/file.txt", "Hello")

    s = native.app.ReadFile(fldr + "/file.txt")
    if s == "Hello":
        native.app.ShowPopup(f"written: {s}")
    else:
        native.app.ShowPopup("write failed!")

def OnPermission(path, uri):
    if not path:
        native.app.ShowPopup("Permission not granted!")
    else:
        WriteToStorage()
```