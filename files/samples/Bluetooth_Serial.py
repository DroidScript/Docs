from native import app

def OnStart():
    lay = app.CreateLayout("linear", "VCenter,FillXY")

    btn = app.CreateButton("Connect", 0.4, 0.15)
    btn.SetOnTouch(btn_OnTouch)
    lay.AddChild(btn)
    app.AddLayout(lay)

    bt = app.CreateBluetoothSerial()
    bt.SetOnConnect(bt_OnConnect)
    bt.SetOnReceive(bt_OnReceive)
    bt.SetSplitMode("End", "\n")

def btn_OnTouch():
    bt.Connect("HC-05")

def bt_OnConnect(ok):
    if ok:
        bt.Write("digitalWrite(LED1,1)\n")
    else:
        app.ShowPopup("Failed to connect!")

def bt_OnReceive(data):
    app.ShowPopup(data)