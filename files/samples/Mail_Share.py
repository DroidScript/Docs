```python
# Called when application is started.
def OnStart():
    # Create layout that fills the screen.
    lay = app.CreateLayout("linear", "FillXY,VCenter")

    # Create Send button.
    btn = app.CreateButton("Send Email", 0.4, 0.1)
    btn.SetOnTouch(btn_OnTouch)
    lay.AddChild(btn)

    # Add main layout to app.
    app.AddLayout(lay)


# Handle Send button.
def btn_OnTouch():
    # Send the email message via built in email app.
    # (Leave 4th parameter out if attachment is not required)
    file = "/sdcard/MyPic.jpg"
    app.SendMail("myfriend@gmail.com", "MySubject", "Hello", file)


OnStart()
```