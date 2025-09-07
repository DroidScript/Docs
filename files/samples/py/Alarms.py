from native import app
import time

#Called when application is started.
def OnStart():
    global player
    #Create a layout with objects vertically centered.
    lay = app.CreateLayout("linear", "VCenter,FillXY")

    #Create a 'Set Alarm' button.
    btnSet = app.CreateButton("Set Alarm", 0.4, 0.1)
    btnSet.SetMargins(0, 0.05, 0, 0)
    btnSet.SetOnTouch(btnSet_OnTouch)
    lay.AddChild(btnSet)

    #Create a 'Set Repeat' button.
    btnRepeat = app.CreateButton("Set Repeat", 0.4, 0.1)
    btnRepeat.SetMargins(0, 0.05, 0, 0)
    btnRepeat.SetOnTouch(btnRepeat_OnTouch)
    lay.AddChild(btnRepeat)

    #Create a 'Cancel Repeat' button.
    btnCancel = app.CreateButton("Cancel Repeat", 0.4, 0.1)
    btnCancel.SetMargins(0, 0.05, 0, 0)
    btnCancel.SetOnTouch(btnCancel_OnTouch)
    lay.AddChild(btnCancel)

    #Add layout to app.
    app.AddLayout(lay)

    #Create media player and load file.
    player = app.CreateMediaPlayer()
    player.SetFile("/Sys/Snd/Poing.ogg")

#Called when user touches our 'Set Alarm' button.
def btnSet_OnTouch():
    #Get current time in milliseconds.
    now = int(time.time() * 1000)

    #Set alarm for 3 seconds time.
    app.SetAlarm("Set", 1234, OnAlarm, now + 3000)

#Called when alarm is triggered.
#(Even if your app is closed)
def OnAlarm(id):
    global id
    app.ShowPopup("Got Alarm: id = " + str(id))
    player.SeekTo(0)
    player.Play()

#Called when user touches our 'Set Repeating' button.
def btnRepeat_OnTouch():
    #Get current time in milliseconds.
    now = int(time.time() * 1000)

    #Set alarm for 3 seconds time and repeat every 10 secs.
    app.SetAlarm("Repeat", 4321, OnAlarm, now + 3000, 10000)

#Called when user touches our 'Cancel Repeat' button.
def btnCancel_OnTouch():
    #Cancel the alarm with id 4321.
    #(All alarms will be cancelled by a reboot)
    app.SetAlarm("Cancel", 4321)