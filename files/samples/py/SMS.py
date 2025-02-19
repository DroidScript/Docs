from native import app

"""
WARNING: Google Play no longer allows SMS apps to be
uploaded, except in certain special circumstances.
"""

#Called when application is started.
def OnStart():
    global txtNum, txtMsg, sms
    #Create layout that fills the screen.
    lay = app.CreateLayout("linear", "FillXY,VCenter")

    #Create text edit control for phone number.
    txtNum = app.CreateTextEdit("5550101", 0.8, -1)
    lay.AddChild(txtNum)

    #Create text edit control for message.
    txtMsg = app.CreateTextEdit("Hello from Android!", 0.8, 0.3)
    lay.AddChild(txtMsg)

    #Create 'Send' button.
    btn = app.CreateButton("Send", 0.4, 0.1)
    btn.SetOnTouch(btn_OnTouch)
    lay.AddChild(btn)

    #Add main layout to app.
    app.AddLayout(lay)

    #Create SMS object and set callbacks.
    sms = app.CreateSMS()
    sms.SetOnStatus(sms_OnStatus)
    sms.SetOnMessage(sms_OnMessage)

#Handle 'Send' button.
def btn_OnTouch():
    #Send the SMS message.
    sms.Send(txtNum.GetText(), txtMsg.GetText())

#Show SMS send status/progress.
def sms_OnStatus(status):
    app.ShowPopup(status)

#Show incoming SMS messages.
def sms_OnMessage(number, msg):
    app.ShowPopup(number + ": " + msg)
"""