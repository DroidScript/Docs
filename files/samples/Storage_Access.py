from native import app

def OnStart():
    global spin
    lay = app.CreateLayout("Linear", "VCenter,FillXY")
    spin = app.AddSpinner(lay, "Internal,External,USB", 0.5)
    spin.SelectItem("Internal")
    btnWrite = app.AddButton(lay, "Write to Storage", 0.5)
    btnWrite.SetOnTouch(btnWrite_OnTouch)
    btnWrite.SetMargins(0, 0.05, 0, 0)
    btnRemove = app.AddButton(lay, "Remove Permissions", 0.5)
    btnRemove.SetOnTouch(btnRemove_OnTouch)
    btnRemove.SetMargins(0, 0.05, 0, 0)
    app.AddLayout(lay)

def btnWrite_OnTouch():
    WriteToStorage()

def btnRemove_OnTouch():
    app.RemovePermission("*")

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

    if not app.CheckPermission(fldr):
        app.Alert(f"Please give permission to access the {fldr} folder or a parent folder")
        app.GetPermission(perm, OnPermission)
        return

    app.MakeFolder(fldr)
    app.WriteFile(fldr + "/file.txt", "Hello")

    s = app.ReadFile(fldr + "/file.txt")
    if s == "Hello":
        app.ShowPopup(f"written: {s}")
    else:
        app.ShowPopup("write failed!")

def OnPermission(path, uri):
    if not path:
        app.ShowPopup("Permission not granted!")
    else:
        WriteToStorage()