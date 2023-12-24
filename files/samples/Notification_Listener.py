```python
# Called when application is started.
def OnStart():
    # Create a layout with objects vertically centered.
    lay = app.CreateLayout("linear", "VCenter,FillXY")

    # Create permissions button.
    btnShowPerms = app.AddButton(lay, "Show Permissions", 0.6)
    btnShowPerms.SetOnTouch(btnShowPerms_OnTouch)

    # Add layout to app.
    app.AddLayout(lay)

    # Create notification component.
    # (This also works in a background service)
    notify = app.CreateNotification()
    notify.SetOnNotify(notify_OnNotify)

    # Listen for notifications (and check permissions).
    notify.Listen("CheckPerms")
    app.ShowPopup("Listening...")


# Handle notifications.
def notify_OnNotify(source, title, message, extra, type, id):
    app.ShowPopup(source + "\n" + title + "\n" + message + "\n" + extra + "\n" + type + "\n" + id)

    # You can cancel the notification(s) like this -
    # notify.Cancel(id)
    # notify.Cancel('*')


# Show the notification listener permissions.
# (Notes: The 'CheckPerms' option will do this automatically for you if required
# You may need to toggle this option on and off when re-installing APKs)
def btnShowPerms_OnTouch():
    app.SendIntent(None, None, "android.settings.ACTION_NOTIFICATION_LISTENER_SETTINGS")


OnStart()
```