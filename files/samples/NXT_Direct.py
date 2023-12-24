```python
import androidscript.native as native

def OnStart():
    lay = native.app.CreateLayout("linear", "VCenter,FillXY")
    
    btnCon = native.app.CreateButton("Connect", 0.4, 0.15)
    btnCon.SetOnTouch(btnCon_OnTouch)
    lay.AddChild(btnCon)
    
    btnBeep = native.app.CreateButton("Beep", 0.4, 0.15)
    btnBeep.SetOnTouch(btnBeep_OnTouch)
    lay.AddChild(btnBeep)
    
    btnBat = native.app.CreateButton("Get Battery", 0.4, 0.15)
    btnBat.SetOnTouch(btnBat_OnTouch)
    lay.AddChild(btnBat)
    
    native.app.AddLayout(lay)
    
    bt = native.app.CreateBluetoothSerial()
    bt.SetOnConnect(bt_OnConnect)
    bt.SetOnReceive(bt_OnReceive)
    
    bt.SetTimeout(3000)
    
    bt.SetDataMode("Hex")
    bt.SetSplitMode("Head", 2, "LE")

def btnCon_OnTouch():
    bt.Connect("NXT")

def btnBeep_OnTouch():
    bt.Write("06,00,80,03,0B,02,F4,01")

def btnBat_OnTouch():
    bt.Write("02,00,00,0B")

def bt_OnConnect(ok):
    native.app.ShowPopup("Connected")

def bt_OnReceive(data):
    native.ui.console.log(data)
    
    ss = data.split(",")
    
    if ss[3] == "0B":
        volts = int(ss[6] + ss[5], 16)
        native.app.ShowPopup(str(volts) + " mV")
```