The Notification object can be used to put messages in the notification drawer. The “AutoCancel” **option** will automatically dismiss the notificatin if the user touches it. “FullScreen” tries to create a larger notification on the screen. And “OnGoing” makes the Notification closeable by your app only.

Use the SetMessage method to tell the object what to display
<js>notify.SetMessage( ticker, title, text );</js>
The Notify method tells it to send the notification:
<js>notify.Notify( id );</js>
When the user touches your notification, your app will come to the front, even if it was not running.

If you use more than one notification, **app.GetNotifyId** can be used to check which notification was pressed by the user.