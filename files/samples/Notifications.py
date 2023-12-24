from native import app

# Called when application is started.
def OnStart():
    global notify1, notify2, notify3
    # Create a layout with objects vertically centered.
    lay = app.CreateLayout("linear", "VCenter,FillXY")

    # Create first button.
    btn1 = app.CreateButton("Notify Me", 0.6)
    btn1.SetOnTouch(btn1_OnTouch)
    lay.AddChild(btn1)

    # Create second button.
    btn2 = app.CreateButton("Update Me", 0.6)
    btn2.SetMargins(0, 0.05, 0, 0)
    btn2.SetOnTouch(btn2_OnTouch)
    lay.AddChild(btn2)

    # Create third button.
    btn3 = app.CreateButton("Notify Me (with image)", 0.6)
    btn3.SetMargins(0, 0.05, 0, 0)
    btn3.SetOnTouch(btn3_OnTouch)
    lay.AddChild(btn3)

    # Create fifth button.
    btn4 = app.CreateButton("Cancel All", 0.6)
    btn4.SetMargins(0, 0.05, 0, 0)
    btn4.SetOnTouch(btn4_OnTouch)
    lay.AddChild(btn4)

    # Add layout to app.
    app.AddLayout(lay)

    # Create notification objects.
    notify1 = app.CreateNotification()
    notify2 = app.CreateNotification("AutoCancel")
    notify3 = app.CreateNotification("AutoCancel,FullScreen")

# Called when user presses notify button.
# Note: Lights only show when device screen is turned off.
def btn1_OnTouch():
    notify1.SetMessage("You have a notification!", "My Title", "My Details")
    notify1.SetSmallImage("/Sys/Img/Notify.png")
    notify1.SetLights("#00ffff", 500, 500)
    notify1.Notify()

# Called when user presses the udate button.
def btn2_OnTouch():
    notify1.SetMessage("An Update!", "Updated Title", "Updated Details")
    notify1.Notify()

# Called when user presses notify with image button.
# Note: The small icon cannot be changed when running with
# the DroidScript IDE, but it will pickup your app icon when
# if you build an APK.
def btn3_OnTouch():
    notify2.SetMessage("You have a notification!", "My Title", "My Details")
    notify2.SetSmallImage("/Sys/Img/Notify.png")
    notify2.SetLargeImage("/Sys/Img/Hello.png")
    notify2.Notify()

# Set (delayed) notification.
def DelayedNotify():
    notify3.SetMessage("Full screen notification!", "My Title", "My Details")
    notify3.SetSmallImage("/Sys/Img/Notify.png")
    notify3.Notify()

# Called when user presses cancel button.
def btn4_OnTouch():
    notify1.Cancel()
    notify2.Cancel()
    notify3.Cancel()