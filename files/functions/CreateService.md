Services run in the background and can be used to monitor online databases, local communication ports or changes in data on the file system. They can also trigger notifications to the user and launch apps when changes or timeouts occur.

DroidScript Services run in a separate process and can take advantage of multi-CPU devices, this allows CPU intensive calculations or slow procedures to be done in the background without slowing down or interfering with the main application.

Any file in your project with the filename “Service.js” will run as a hidden background service.

A service can be created and started using the **CreateService** method of the app object in your main application file:
%c
Use “this” for the _packageName_ and _className_ parameters.

Your service will start running when it's created and a foreground app must exist to manage the service and this foreground app must be run at least one time by the user.

You can set the service to start automatically when the device is booted if required; with the **SetAutoBoot** method of the **app** object.
<js>app.SetAutoBoot( "Service" );</js>

Stop a service using the Stop method.
<js>svc.Stop();</js>

Messages can be sent from your app to the service using the SendMessage method on the service object:
<js>svc.SendMessage( msg );</js>

You will need to provide a message handler to receive and process the messages (see example below).

Send messages from the service to the main app by using the SendMessage method of the app object:
<js>app.SendMessage( msg );</js>

This will also need a message handler on the application (see example below).

Adding services to your application is best done working with the WiFi editor (browser IDE) because you will need to edit more than one file and also see debug message from the service. Debug and error messages are shown in gray on the debug tab of the WiFi editor. Pressing the stop button in this IDE will stop both the service and the app, but pressing the back button on your device will stop the app but leave the service running.
<sample Services>

Inspect the debug console and see the log messages from the service in gray.
