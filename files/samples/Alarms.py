def OnStart():
    lay = app.CreateLayout("linear", "VCenter,FillXY")
    btnSet = app.CreateButton("Set Alarm", 0.4, 0.1)
    btnSet.SetMargins(0, 0.05, 0, 0)
    btnSet.SetOnTouch(btnSet_OnTouch)
    lay.AddChild(btnSet)
    
    btnRepeat = app.CreateButton("Set Repeat", 0.4, 0.1)
    btnRepeat.SetMargins(0, 0.05, 0, 0)
    btnRepeat.SetOnTouch(btnRepeat_OnTouch)
    lay.AddChild(btnRepeat)
    
    btnCancel = app.CreateButton("Cancel Repeat", 0.4, 0.1)
    btnCancel.SetMargins(0, 0.05, 0, 0)
    btnCancel.SetOnTouch(btnCancel_OnTouch)
    lay.AddChild(btnCancel)
    
    app.AddLayout(lay)
    
    player = app.CreateMediaPlayer()
    player.SetFile("/Sys/Snd/Poing.ogg")
    
def btnSet_OnTouch():
    now = int(time.time()*1000)
    app.SetAlarm("Set", 1234, OnAlarm, now + 3000)

def OnAlarm(id):
    app.ShowPopup("Got Alarm: id = " + str(id))
    player.SeekTo(0)
    player.Play()
    
def btnRepeat_OnTouch():
    now = int(time.time()*1000)
    app.SetAlarm("Repeat", 4321, OnAlarm, now + 3000, 10000)
    
def btnCancel_OnTouch():
    app.SetAlarm("Cancel", 4321)