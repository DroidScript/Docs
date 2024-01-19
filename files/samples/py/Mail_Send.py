from native import app

# Called when application is started.
def OnStart():
    global txtSubj, txtMsg, email
    # Create layout that fills the screen.
    lay = app.CreateLayout("linear", "FillXY,VCenter")

    # Create text edit control for subject.
    txtSubj = app.CreateTextEdit("MyScript", 0.8, -1)
    lay.AddChild(txtSubj)

    # Create text edit control for message.
    txtMsg = app.CreateTextEdit("Hello from Android!", 0.8, 0.3)
    lay.AddChild(txtMsg)

    # Create 'Send' button.
    btn = app.CreateButton("Send", 0.4, 0.1)
    btn.SetOnTouch(btn_OnTouch)
    lay.AddChild(btn)

    # Add main layout to app.
    app.AddLayout(lay)

    # Create email object and set SMTP gateway.
    # Note: Gmail SMTP servers now require use of an 'App Password'. To get one, enable 2-step
    # verification on your Google account and then go to this link:
    #  https://myaccount.google.com/apppasswords
    email = app.CreateEmail("mymail@gmail.com", "MyPass")
    email.SetSMTP("smtp.gmail.com", 465)
    #email.SetSMTP("smtp.mail.yahoo.com", 465)
    email.SetOnStatus(email_OnStatus)

# Handle 'Send' button.
def btn_OnTouch():
    # Set attachment name.
    attach = "/sdcard/DroidScript/Hello World/Img/Hello World.png"

    # Send the email message.
    app.ShowProgress("Sending...")
    email.Send(txtSubj.GetText(), txtMsg.GetText(),
               "mymail@gmail.com", "myfriend@blob.com", attach)

# Handle status messages.
def email_OnStatus(status):
    app.HideProgress()
    app.ShowPopup(status)