In your app you can use various event functions which will be automatically called by DroidScript.

### OnStart()
This function will be called shortly after your app has initialized and is normally where you add code to create the main user interface (UI) of your app.

<sample OnStart>

<b>function OnStart()
{
    app.Alert( "App started!" )
}</b>

</sample OnStart>

<sample Python OnStart>

from native import app

<b>def OnStart():
    app.Alert( "App started!" )
</b>

</sample>

### OnBack()
By default the app closes if the user presses the devices back-button. However, you can disable that behaviour by calling <js nobox>app.</js>@../app/EnableBackKey<js nobox>(false)</js>.
In this case the OnBack event will be called instead of closing the app. This can be useful to create a confirmation dialog before exiting:

<sample Confirm Exit>

function OnStart()
{
	app.EnableBackKey( false );

	yndExit = app.CreateYesNoDialog("Exit App?");
	yndExit.SetOnTouch( yndExit_OnTouch );

	app.ShowPopup( "Press the back button" );
}

function yndExit_OnTouch(reply)
{
	if(reply == "Yes") app.Exit();
}

<b>function OnBack()
{
	yndExit.Show();
}</b>

</sample Confirm Exit>

<sample Python Confirm Exit>
from native import app

def OnStart():
    app.EnableBackKey(False)

    global yndExit

    yndExit = app.CreateYesNoDialog("Exit App?")
    yndExit.SetOnTouch(yndExit_OnTouch)

    app.ShowPopup("Press the back button")

def yndExit_OnTouch(reply):
    if reply == "Yes":
        app.Exit()

<b>def OnBack():
    global yndExit
    yndExit.Show()</b>
</sample>

### OnPause()
The OnPause event will be called when the user sends the app to the background, ie. when pressing the home button.

<sample Detect Pause>

//Called when application is paused.
function OnPause()
{
	app.ShowPopup( "OnPause" );
}

</sample Detect Pause>

<sample Python Detect Pause>
from native import app

#Called when application is paused.
def OnPause():
    app.ShowPopup( "OnPause" )

</sample>

### OnResume()
The OnResume event will be called when the user returns to your app after sending it to the background.

<sample Detect Resume>

//Called when application is resumed.
function OnResume()
{
	app.ShowPopup( "OnResume" );
}

</sample Detect Resume>

<sample Python Detect Resume>
from native import app

#Called when application is resumed.
def OnResume():
    app.ShowPopup( "OnResume" )

</sample>

### OnConfig()
OnConfig is called when a device configuration changes, especially the screen orientation. This can be used to rearrange your layouts on orientation change.

<sample Layout Orientation>

function OnStart()
{
	lay = app.CreateLayout( "linear", "VCenter,FillXY" );

	txt1 = app.CreateText( "" );
	txt1.SetTextSize( 64 );
	lay.AddChild( txt1 );

	txt2 = app.CreateText( "" );
	txt2.SetTextSize( 64 );
	lay.AddChild( txt2 );
	OnConfig();

	app.AddLayout( lay );
}

<b>//Called when screen rotates
function OnConfig()
{
	var orient = app.GetOrientation();
	txt1.SetText(orient);

	if(orient == "Portrait") orient = "Vertical";
	else orient = "Horizontal";

	lay.SetOrientation( orient );
	txt2.SetText( orient );
}</b>

</sample Layout Orientation>

<sample Python Layout Orientation>
from native import app

def OnStart():
    global lay, txt1, txt2

    lay = app.CreateLayout("linear", "VCenter,FillXY")

    txt1 = app.CreateText("")
    txt1.SetTextSize(64)
    lay.AddChild(txt1)

    txt2 = app.CreateText("")
    txt2.SetTextSize(64)
    lay.AddChild(txt2)

    OnConfig()

    app.AddLayout(lay)

# Called when screen rotates
<b>def OnConfig():
    global lay, txt1, txt2

    orient = app.GetOrientation()
    txt1.SetText(orient)

    if orient == "Portrait":
        orient = "Vertical"
    else:
        orient = "Horizontal"

    lay.SetOrientation(orient)
    txt2.SetText(orient)
</b>
</sample>

### OnAlarm()
If you have set up an app [Alarm](../app/SetAlarm.htm) and it is triggered it will call the OnAlarm event.

<sample OnAlarm>

function OnStart()
{
	var now = Date.now();
	app.SetAlarm( "Set", 1234, OnAlarm, Date.now() + 3000 );
	// app.ToBack();
	// app.Exit();
}

//Called when alarm is triggered.
//(Even if your app is closed)
<b>function OnAlarm( id )
{
	app.ShowPopup( "Got Alarm: id = " + id );
}</b>

</sample OnAlarm>

<sample Python OnAlarm>
from native import app
import time

def OnStart():
    now = int(time.time() * 1000)
    app.SetAlarm("Set", 1234, OnAlarm, now + 3000)
    # app.ToBack()
    # app.Exit()

# Called when alarm is triggered.
# (Even if your app is closed)
<b>def OnAlarm(id):
    app.ShowPopup("Got Alarm: id = " + str(id))
<b>
</sample>

### OnData()
When an other app has sent an intent to your app you will get notified by the OnData event. Then you can retrieve the intent object using the app.@../app/GetIntent() method.

<sample Received Intent Data>

//Handle data sent from other apps.
function OnData( isStartUp )
{
	//Display intent data.
	var intent = app.GetIntent();
	if( intent )
	{
		//Extract main data.
		var s = "action: " + intent.action + "\n";
		s += "type: " + intent.type + "\n";
		s += "data: " + intent.data + "\n\n";

		//Extract extras.
		s += "extras:\n";
		for( var key in intent.extras )
			s += key+": "+intent.extras[key] + "\n";

		app.Alert( s, "OnData" );
	}
}

</sample Received Intent Data>


<sample Python Received Intent Data>
from native import app

def OnData(isStartUp):
    # Display intent data.
    intent = app.GetIntent()
    if intent:
        # Extract main data.
        s = "action: " + intent.action + "\n"
        s += "type: " + intent.type + "\n"
        s += "data: " + intent.data + "\n\n"

        # Extract extras.
        s += "extras:\n"
        try:
            for key, value in intent.extras.items():
                s += key + ": " + str(value) + "\n"
        except AttributeError: #intent.extras may be None
            s += "No extras found.\n"

        app.Alert(s, "OnData")
</sample>


### OnDrawer(side, state)
When the user opens or closes a drawer the OnDrawer callback is called.
state can be “Open” or “Closed”
side can be “Left” or “Right”
