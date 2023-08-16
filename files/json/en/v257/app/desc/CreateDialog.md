Custom dialogs appear on top of the app and thus can be used to show temporary information or collect data from the user. They are also useful for displaying configuration or settings controls.
%c
Dialogs are resizeable and you can also change the look of them so that they fit in with the theme of your application.

A custom dialog needs a layout to add the controls to. Use the @CreateLayout method of the **app** object to add a layout.
<js>
layDlg = app.CreateLayout( type, options );
dlg.AddLayout( layDlg );
</js>
If you have added all your controls to the dialog layout you can use the **Show** method to show the dialog.

Normally the user can cancel the dialog by pressing the _BACK_ button of the device, but you can disable that option by using the “NoCancel” **option**. In order to close the dialog now, you have to call **Dismiss**.
