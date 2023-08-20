// ------------- HEADER SECTION ------------- 


/** # CreateService #
 * @abbrev srv
 * @brief Returns a new Service object
 * 
 * $$ srv = app.CreateService(packageName, className, callback, options) $$ 
 * @param {str} packageName this|&lt;package&gt;
 * @param {str} className this|&lt;class&gt;
 * @param {fnc_json} callback {}
 * @param {str_com} options Persist:attempts to force restart if service killed
 * @returns dso-Service
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
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
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** @extern Batch */

/** ### GetType ###
 * Returns the control class name.
 * $$ srv.GetType() $$
 * @returns str-Service
 */


/** ### SendMessage ###
 * Sends a message to the service.
 * $$ srv.SendMessage(message) $$
 * @param {str} message 
 */


/** ### SetInBackground ###
 * Run service in background.
 * $$ srv.SetInBackground() $$
 */


/** ### SetInForeground ###
 * Run service in foreground.
 * $$ srv.SetInForeground(title, text, largeIcon, smallIcon, importance) $$
 * @param {str} title 
 * @param {str} text 
 * @param {str_ptf} largeIcon 
 * @param {str_ptf} smallIcon 
 * @param {str} importance none|min|low|high
 */


/** ### SetOnMessage ###
 * %cb% a message arrived from the service.
 * $$ srv.SetOnMessage(callback) $$
 * @param {fnc_json} callback {"pNames":["message"],"pTypes":["str"]}
 */


/** ### Stop ###
 * Stop the service.
 * $$ srv.Stop() $$
 */



// ------------- SAMPLES ------------- 


    
/**
@sample Services
//our Service.js code.
//In regular usage move this code to a separate Service.js file
var servicejs = `
//Init variables.
var count = 0;
var diff = 1;

//Called when service is started.
function OnStart()
{
    app.ShowPopup( "Hello from Service!" );

    //Start a timer to do some regular work.
    setInterval( DoWork, 500 );
}

//Called when we get a message from main app.
function OnMessage( msg )
{
    app.Debug( msg );

    //Handle commands from main App.
    if( msg == "change" ) diff = (diff > 0 ? -1 : 1);
}

//This is where we do some regular background task
//(here we just modify a counter and send it back to the app, if its running).
function DoWork()
{
    count += diff;
    app.SendMessage( count );
}`

function OnStart()
{
    //Create the Service.js file
    //(In regular usage create the file yourself)
    app.WriteFile("Service.js", servicejs );

    //Create a layout.
    lay = app.CreateLayout( "linear", "VCenter,FillXY" );

    //Create text control to display data from the service.
    txt = app.CreateText( "", 0.4 );
    txt.SetTextSize( 22 );
    lay.AddChild( txt );

    //Create an 'Send Message' button.
    btn = app.CreateButton( "Send Message to Service", 0.6, 0.1 );
    lay.AddChild( btn );
    btn.SetOnTouch( function(){ svc.SendMessage("change"); } );

    //Create a 'Stop Service' button.
    btn = app.CreateButton( "Stop Service", 0.6, 0.1 );
    lay.AddChild( btn );
    btn.SetOnTouch( function(){ svc.Stop(); } );

    //Add layout to app.
    app.AddLayout( lay );

    //Start/connect to our service.
    svc = app.CreateService( "this", "this", OnServiceReady );
    svc.SetOnMessage( OnServiceMessage );

    //This will cause your service to start at boot.
    //(Set it to "none" if you need to stop it starting)
    //app.SetAutoBoot( "Service" );
}

//Called after our service has started.
function OnServiceReady()
{
    app.Debug( "Service Ready" );
}

//Called when messages comes from our service.
function OnServiceMessage( msg )
{
    txt.SetText( "Count: " + msg );
}
 */
    
            