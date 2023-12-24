from native import app

#Global variables.
usb = None
reply = ""

#Called when application is started.
def OnStart():
    global edt, txtReply, txt
    #Create a layout with objects vertically centered.
    lay = app.CreateLayout("linear", "VCenter,FillXY")

    #Create title text.
    txt = app.CreateText("Espruino")
    txt.SetTextSize(22)
    txt.SetMargins(0, 0, 0, 0.01)
    lay.AddChild(txt)

    #Create a read-only edit box to show espruino responses.
    txtReply = app.CreateText("", 0.96, 0.4, "Log,MonoSpace")
    txtReply.SetMargins(0, 0, 0, 0.01)
    txtReply.SetBackColor("#333333")
    txtReply.SetTextSize(12)
    lay.AddChild(txtReply)

    #Create an edit box containing an example espruino program.
    edt = app.CreateTextEdit("", 0.96, 0.4, "NoSpell")
    lay.AddChild(edt)

    #Create program spinner.
    spin = app.CreateSpinner("[Clear],Flash,PWM,Servo,Move-0,Move-1", 0.6)
    spin.SetOnTouch(spin_OnTouch)
    spin.SetText("[Clear]")
    lay.AddChild(spin)

    #Create a horizontal layout for buttons.
    layBut = app.CreateLayout("Linear", "Horizontal")
    lay.AddChild(layBut)

    #Create an connect button.
    btnConnect = app.CreateButton("Connect", 0.23, 0.1)
    btnConnect.SetOnTouch(btnConnect_OnTouch)
    layBut.AddChild(btnConnect)

    #Create an send button.
    btnSend = app.CreateButton("Send", 0.23, 0.1)
    btnSend.SetOnTouch(btnSend_OnTouch)
    layBut.AddChild(btnSend)

    #Create a reset button.
    btnReset = app.CreateButton("Reset", 0.23, 0.1)
    btnReset.SetOnTouch(btnReset_OnTouch)
    layBut.AddChild(btnReset)

    #Create an save button.
    btnSave = app.CreateButton("Save", 0.23, 0.1)
    btnSave.SetOnTouch(btnSave_OnTouch)
    layBut.AddChild(btnSave)

    #Add layout to app.
    app.AddLayout(lay)

#Called when user touches connect button.
def btnConnect_OnTouch():
    global usb
    #Create USB serial object.
    usb = app.CreateUSBSerial()
    if not usb:
        app.ShowPopup("Please connect a USB device")
        return
    usb.SetOnReceive(usb_OnReceive)
    app.ShowPopup("Connected")

#Called when user touches send button.
def btnSend_OnTouch():
    global s
    #Get rid of blank lines, spaces etc that cause
    #a problem for Espruino.
    s = edt.GetText()
    s = s.replace("\n\n+", "\n")
    s = s.replace("\n +", "\n")
    s = s.replace("\\)\\s*\\{", "\)\{")
    s = s.replace(", +", ",")
    s = s.replace("\\( +", "\(")
    s = s.replace(" +\\)", "\)")

    #Send program to Espruino.
    Send(s)

#Called when user touches reset button.
def btnReset_OnTouch():
    global s
    #Clear log.
    reply = ""
    txtReply.SetText(reply)

    #Send reset and turn leds off.
    s = "reset()\n"
    s += "analogWrite(A1, 0.0)\n"
    s += "digitalWrite(LED1, 0)\n"
    s += "digitalWrite(LED2, 0)\n"
    Send(s)

#Called when user touches save button.
def btnSave_OnTouch():
    global s
    s = "save()\n"
    Send(s)

#Called when user touches program spinner.
def spin_OnTouch(item):
    global s
    s = ""
    if item == "Flash":
        s = "state=0;\n\nfunction flash()\n{\n"
        s += " digitalWrite(LED1, state)\n"
        s += " state = !state;\n"
        s += "}\n"
        s += "setInterval(flash, 200)\n"
    elif item == "PWM":
        s += "analogWrite(A1, 0.5)\n"
    elif item == "Servo":
        s += "function setServo(pin,pos)\n"
        s += "{\n"
        s += " if (pos<0) pos=0;\n"
        s += " if (pos>1) pos=1;\n"
        s += " analogWrite(pin, (1+pos)/50.0, {freq:20})\n"
        s += "}\n"
        s += "setServo(C7, 0.5)\n"
    elif item == "Move-0":
        s += "setServo(C7, 0.0)\n"
    elif item == "Move-1":
        s += "setServo(C7, 1.0)\n"
    edt.SetText(s)

#Check connection and send data.
def Send(s):
    if usb:
        usb.Write(s)
    else:
        app.ShowPopup("Please connect")

#Called when we get data from Espruino.
def usb_OnReceive(txt):
    txtReply.Log(txt)