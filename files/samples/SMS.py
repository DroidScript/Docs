"""
WARNING: Google Play no longer allows SMS apps to be
uploaded, except in certain special circumstances.
"""

#Called when application is started.
def OnStart():
    #Create layout that fills the screen.
    lay = native.app.CreateLayout("linear", "FillXY,VCenter")
    
    #Create text edit control for phone number.
    txtNum = native.app.CreateTextEdit("5550101", 0.8, -1)
    lay.AddChild(txtNum)

    #Create text edit control for message.
    txtMsg = native.app.CreateTextEdit("Hello from Android!", 0.8, 0.3)
    lay.AddChild(txtMsg)

    #Create 'Send' button.
    btn = native.app.CreateButton("Send", 0.4, 0.1)
    btn.SetOnTouch(btn_OnTouch)
    lay.AddChild(btn)

    #Add main layout to app.
    native.app.AddLayout(lay)

    #Create SMS object and set callbacks.
    sms = native.app.CreateSMS()
    sms.SetOnStatus(sms_OnStatus)
    sms.SetOnMessage(sms_OnMessage)

#Handle 'Send' button.
def btn_OnTouch():
    #Send the SMS message.
    sms.Send(txtNum.GetText(), txtMsg.GetText())

#Show SMS send status/progress.
def sms_OnStatus(status):
    native.app.ShowPopup(status)

#Show incoming SMS messages.
def sms_OnMessage(number, msg):
    native.app.ShowPopup(number + ": " + msg)
"""