from native import app

#Called when application is started.
def OnStart():
    global edt
    #Create a layout with objects vertically centered.
    lay = app.CreateLayout("linear", "VCenter,FillXY")

    #Create an edit box.
    edt = app.CreateTextEdit("", 0.96, 0.8)
    edt.SetBackColor("#333333")
    lay.AddChild(edt)

    #Create a horizontal layout for buttons.
    layBut = app.CreateLayout("Linear", "Horizontal")
    lay.AddChild(layBut)

    #Create a Load button.
    btnLoad = app.CreateButton("Load", 0.23, 0.1)
    btnLoad.SetOnTouch(btnLoad_OnTouch)
    layBut.AddChild(btnLoad)

    #Create a save button.
    btnSave = app.CreateButton("Save", 0.23, 0.1)
    btnSave.SetOnTouch(btnSave_OnTouch)
    layBut.AddChild(btnSave)

    #Add layout to app.
    app.AddLayout(lay)

#Called when user touches Load button.
def btnLoad_OnTouch():
    txt = app.ReadFile("/sdcard/testfile.txt")
    edt.SetText(txt)

#Called when user touches save button.
def btnSave_OnTouch():
    txt = edt.GetText()
    app.WriteFile("/sdcard/testfile.txt", txt)