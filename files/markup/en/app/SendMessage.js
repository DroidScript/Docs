// ------------- HEADER SECTION -------------


/** # SendMessage #
 * @brief Send message from Service to main app
 * Send a message from a Service to the main app.
 * $$ app.SendMessage(message) $$ 
 * @param {str} message 
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
    <b>app.SendMessage( count );</b>
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
    
            
    
/**
@sample Python Services
from native import app

servicejs = """
#Init variables.
count = 0
diff = 1

#Called when service is started.
def OnStart():
    app.ShowPopup( "Hello from Service!" )

    #Start a timer to do some regular work.
    setInterval( DoWork, 500 )

#Called when we get a message from main app.
def OnMessage( msg ):
    global diff
    app.Debug( msg )

    #Handle commands from main App.
    if msg == "change":
        diff = -1 if diff > 0 else 1

#This is where we do some regular background task
#(here we just modify a counter and send it back to the app, if its running).
def DoWork():
    count += diff
    app.SendMessage( count )
"""

def OnStart():
    global txt
    #Create the Service.js file
    #(In regular usage create the file yourself)
    app.WriteFile("Service.js", servicejs )

    #Create a layout.
    lay = app.CreateLayout( "linear", "VCenter,FillXY" )

    #Create text control to display data from the service.
    txt = app.CreateText( "", 0.4 )
    txt.SetTextSize( 22 )
    lay.AddChild( txt )

    #Create an 'Send Message' button.
    btn = app.CreateButton( "Send Message to Service", 0.6, 0.1 )
    lay.AddChild( btn )
    btn.SetOnTouch( lambda: svc.SendMessage("change") )

    #Create a 'Stop Service' button.
    btn = app.CreateButton( "Stop Service", 0.6, 0.1 )
    lay.AddChild( btn )
    btn.SetOnTouch( lambda: svc.Stop() )

    #Add layout to app.
    app.AddLayout( lay )

    #Start/connect to our service.
    svc = app.CreateService( "this", "this", OnServiceReady )
    svc.SetOnMessage( OnServiceMessage )

    #This will cause your service to start at boot.
    #(Set it to "none" if you need to stop it starting)
    #app.SetAutoBoot( "Service" )

#Called after our service has started.
def OnServiceReady():
    app.Debug( "Service Ready" )

#Called when messages comes from our service.
def OnServiceMessage( msg ):
    txt.SetText( "Count: " + msg )
 */
    
            