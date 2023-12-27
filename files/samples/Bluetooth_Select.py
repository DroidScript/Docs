Here is the translated code in Python:

```python
from native import app

# Called when application is started.
def OnStart():
    # Create a layout with objects vertically centered.
    lay = app.CreateLayout("linear", "VCenter,FillXY")
    lay.SetBackColor("#222222")

    # Create a list view.
    lst = app.CreateList("", 0.9, 0.5)
    lst.SetBackColor("black")
    lst.SetOnTouch(lst_OnTouch)
    lay.AddChild(lst)

    # Get a list of paired devices into listview.
    devices = app.GetPairedBtDevices()
    for d in devices:
        lst.AddItem(devices[d].name, devices[d].address)

    # Create an edit with commands to send.
    edt = app.CreateTextEdit("Hello from Android!", 0.9, 0.2, "NoSpell")
    edt.SetMargins(0, 0.04, 0, 0)
    edt.SetBackColor("black")
    lay.AddChild(edt)

    # Create a send button.
    btnSend = app.CreateButton("Send", 0.4, 0.1)
    btnSend.SetMargins(0, 0.02, 0, 0)
    btnSend.SetOnTouch(btnSend_OnTouch)
    lay.AddChild(btnSend)

    # Create Bluetooth serial object.
    #(also set a newline as command separator)
    bt = app.CreateBluetoothSerial()
    bt.SetOnConnect(bt_OnConnect)
    bt.SetOnReceive(bt_OnReceive)
    bt.SetSplitMode("End", "\n")

    # Add main layout to app.
    app.AddLayout(lay)

# Handle list selection.
def lst_OnTouch(title, body, type, index):
    app.ShowProgress("Connecting...")
    bt.Connect(body)
    lst.SelectItemByIndex(index)

# Called when we are connected.
def bt_OnConnect(ok):
    app.HideProgress()

    if(ok):
        app.ShowPopup("Connected!")
    else:
        app.ShowPopup("Failed to connect!")
        lst.SelectItemByIndex(-1)

# Called when the user touches the send button.
def btnSend_OnTouch():
    s = edt.GetText()
    bt.Write(s + "\n")

# Called when we receive data from the remote device.
def bt_OnReceive(data):
    app.ShowPopup(data)
```