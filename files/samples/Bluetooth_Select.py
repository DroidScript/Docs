from native import app
import androidhelper

#Translated Python code

droid = androidhelper.Android()

#Called when application is started.
def OnStart():
    global lst, bt, edt
    #Create a layout with objects vertically centered.
    lay = droid.fullScrreen().vcard()
    lay.setBackColor("#222222")

    #Create a list view.
    lst = droid.createList("")
    lst.setBackColor("black")
    lst.setOnTouch(lst_OnTouch)
    lay.addChild(lst)

    #Get a list of paired devices into listview.
    devices = droid.getPairedBtDevices()
    for d in devices:
        lst.addItem(devices[d].name, devices[d].address)

    #Create an edit with commands to send.
    edt = droid.createTextEdit("Hello from Android!", 0.9, 0.2, "NoSpell")
    edt.setMargins(0,0.04,0,0)
    edt.setBackColor("black")
    lay.addChild(edt)

    #Create an send button.
    btnSend = droid.createButton("Send", "Send")
    btnSend.setMargins(0,0.02,0,0)
    btnSend.setOnTouch(btnSend_OnTouch)
    lay.addChild(btnSend)

    #Create Bluetooth serial object.
    #(also set newline as command separator)
    bt = droid.createBluetoothSerial()
    bt.setOnConnect(bt_OnConnect)
    bt.setOnReceive(bt_OnReceive)
    bt.setSplitMode("End", "\n")

    #Add main layout to app.
    droid.addLayout(lay)

#Handle list selection.
def lst_OnTouch(title, body, type, index):
    droid.showProgress("Connecting...")
    bt.connect(body)
    lst.SelectItemByIndex(index)

#Called when we are connected.
def bt_OnConnect(ok):
    droid.hideProgress()

    if ok:
        droid.makeToast("Connected!")
    else:
        droid.makeToast("Failed to connect!")
        lst.SelectItemByIndex(-1)

#Called when user touches send button.
def btnSend_OnTouch():
    s = edt.GetText()
    bt.write(s + "\n")

#Called when we get data from remote device.
def bt_OnReceive(data):
    droid.makeToast(data)