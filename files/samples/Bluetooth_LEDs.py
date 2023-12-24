from native import app
import random

def OnStart():
    lay = app.CreateLayout("linear", "VCenter,FillXY")

    btn = app.CreateButton("Connect", 0.4, 0.1)
    btn.SetOnTouch(btn_OnTouch)
    lay.AddChild(btn)
    app.AddLayout(lay)

    skbRed = app.CreateSeekBar(0.8, -1)
    skbRed.SetMargins(0, 0.05, 0, 0)
    skbRed.SetRange(1.0)
    skbRed.SetOnTouch(skbRed_OnTouch)
    lay.AddChild(skbRed)

    skbGreen = app.CreateSeekBar(0.8, -1)
    skbGreen.SetMargins(0, 0.05, 0, 0)
    skbGreen.SetRange(1.0)
    skbGreen.SetOnTouch(skbGreen_OnTouch)
    lay.AddChild(skbGreen)

    skbBlue = app.CreateSeekBar(0.8, -1)
    skbBlue.SetMargins(0, 0.05, 0, 0)
    skbBlue.SetRange(1.0)
    skbBlue.SetOnTouch(skbBlue_OnTouch)
    lay.AddChild(skbBlue)

    btnRand = app.CreateButton("Random", 0.4, 0.1)
    btnRand.SetMargins(0, 0.05, 0, 0)
    btnRand.SetOnTouch(btnRand_OnTouch)
    lay.AddChild(btnRand)
    app.AddLayout(lay)

    bt = app.CreateBluetoothSerial()
    bt.SetOnConnect(bt_OnConnect)

def btn_OnTouch():
    bt.Connect("HC-05")

def bt_OnConnect(ok):
    if ok:
        bt.Write("digitalWrite(LED1,1)\n")
        app.ShowPopup("Connected!")
    else:
        app.ShowPopup("Failed to connect!")

def skbRed_OnTouch(value):
    bt.Write("analogWrite(C6," + str(round(value*value, 2)) + ")\n")

def skbGreen_OnTouch(value):
    bt.Write("analogWrite(C7," + str(round(value*value, 2)) + ")\n")

def skbBlue_OnTouch(value):
    bt.Write("analogWrite(C8," + str(round(value*value, 2)) + ")\n")

def btnRand_OnTouch():
    if btnRand.GetText() == "Random":
        val = 0
        timer = setInterval(RandomFlash, 500)
        btnRand.SetText("Stop")
    else:
        SwitchOff()
        clearInterval(timer)
        btnRand.SetText("Random")

def RandomFlash():
    red = (random.random() > 0.5)
    green = (random.random() > 0.5)
    blue = (random.random() > 0.5)
    if not red and not green and not blue:
        red = green = blue = True
    bt.Write("analogWrite(C6," + str(int(red)) + ")\n")
    bt.Write("analogWrite(C7," + str(int(green)) + ")\n")
    bt.Write("analogWrite(C8," + str(int(blue)) + ")\n")

def SwitchOff():
    bt.Write("analogWrite(C6,0)\n")
    bt.Write("analogWrite(C7,0)\n")
    bt.Write("analogWrite(C8,0)\n")