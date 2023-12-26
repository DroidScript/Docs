from native import app
import native.MUI as MUI
import native.app as app
import native.gfx as gfx
import native.ui as ui

def OnStart():
    global nxt
    CreateLayout()

    nxt = app.CreateNxt()
    nxt.SetOnConnected(nxt_OnConnected)

def CreateLayout():
    global txtTouch1, txtTouch2, txtColor, txtDist
    lay = app.CreateLayout("linear", "Vertical,Fillxy")
    lay.SetBackground("/Sys/Img/Tile.png", "repeat")

    txt = app.CreateText("Mindstorms Sensors", 0.8, -1)
    txt.SetMargins(0,0.05,0,0.05)
    txt.SetTextSize(24)
    txt.SetTextColor("#ff444444")
    lay.AddChild(txt)

    txtTouch1 = app.CreateText("", 0.7, -1, "lego")
    txtTouch1.SetMargins(0,0,0,0.05)
    txtTouch1.SetTextSize(20)
    lay.AddChild(txtTouch1)

    txtTouch2 = app.CreateText("", 0.7, -1, "lego")
    txtTouch2.SetMargins(0,0,0,0.05)
    txtTouch2.SetTextSize(20)
    lay.AddChild(txtTouch2)

    txtColor = app.CreateText("", 0.7, -1, "lego")
    txtColor.SetMargins(0,0,0,0.05)
    txtColor.SetTextSize(20)
    lay.AddChild(txtColor)

    txtDist = app.CreateText("", 0.7, -1, "lego")
    txtDist.SetTextSize(20)
    lay.AddChild(txtDist)

    btn = app.CreateButton("Connect", 0.3, 0.1, "Lego")
    btn.SetMargins(0,0.1,0,0)
    btn.SetOnTouch(btn_OnTouch)
    lay.AddChild(btn)

    app.AddLayout(lay)

def btn_OnTouch():
    nxt.ShowDevices()

def nxt_OnConnected():
    UpdateSensors()

def UpdateSensors():
    if nxt.IsConnected():
        val = nxt.ReadTouchSensor(1)
        txtTouch1.SetText("Touch Sensor 1: " + ("On" if val else "Off"))

        val = nxt.ReadTouchSensor(2)
        txtTouch2.SetText("Touch Sensor 2: " + ("On" if val else "Off"))

        val = nxt.ReadColorSensor(3, "ColorDetect")
        val = nxt.ToColorName(val)
        txtColor.SetText("Color: " + val)

        val = nxt.ReadDistanceSensor(4)
        txtDist.SetText("Distance: " + val + " cm")

    timer = setTimeout("UpdateSensors()", 300)