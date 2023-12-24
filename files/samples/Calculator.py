from native import app

sum = ""

def OnStart():
    global txtSum
    layMain = app.CreateLayout("linear", "FillXY")

    keys = [7, 8, 9, "/", 4, 5, 6, "*", 1, 2, 3, "-", 0, ".", "C", "+"]

    txtSum = app.CreateText("", 0.8, 0.1)
    txtSum.SetTextSize(42)
    txtSum.SetBackColor("#ff222222")
    txtSum.SetMargins(0, 0.1, 0, 0.05)
    layMain.AddChild(txtSum)

    lay1st = app.CreateLayout("linear", "Horizontal")
    for i in range(4):
        AddButton(lay1st, keys[i])
    layMain.AddChild(lay1st)

    lay2nd = app.CreateLayout("linear", "Horizontal")
    for i in range(4, 8):
        AddButton(lay2nd, keys[i])
    layMain.AddChild(lay2nd)

    lay3rd = app.CreateLayout("linear", "Horizontal")
    for i in range(8, 12):
        AddButton(lay3rd, keys[i])
    layMain.AddChild(lay3rd)

    lay4th = app.CreateLayout("linear", "Horizontal")
    for i in range(12, 16):
        AddButton(lay4th, keys[i])
    layMain.AddChild(lay4th)

    lay5th = app.CreateLayout("linear", "Horizontal")
    AddButton(lay5th, "=")
    layMain.AddChild(lay5th)

    app.AddLayout(layMain)

def AddButton(lay, name):
    if name == "=":
        w = 0.8
    else:
        w = 0.2
    btn = app.CreateButton(name, w, 0.1, "Alum")
    btn.SetOnTouch(btns_OnTouch)
    lay.AddChild(btn)

def btns_OnTouch():
    app.Vibrate("0,100")
    btn = this
    txt = btn.GetText()

    if txt=="=":
        CalcResult()
    elif txt=="C":
        sum = ""
    else:
        sum += txt

    txtSum.SetText(sum)

def CalcResult():
    try:
        sum = round(eval(sum), 2)
    except:
        sum = "Error"