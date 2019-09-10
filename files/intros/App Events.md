In your app you can use various event functions which will be automatically called by DroidScript.

### OnStart()
This is probably the most popular one. It will be called when DroidScript has initialized and it is the last function which will be called from global scope. That means every timeout you might have set will be called **after** OnStart was called.
When OnStart has returned, the apps '**started**' state will be set to <js nobox>true</js>. Therefore **app.@IsStarted()** method will return <js nobox>true</js> as well.

<sample OnStart>
setTimeout(OnLoad);

<b>function OnStart() {
    alert("called OnStart\nApp Started: " + app.IsStarted());
}</b>

function OnLoad() {
    alert("called OnLoad\nApp Started: " + app.IsStarted());
}
</sample OnStart>

### OnMenu(name)
This event is called when the user selects an item from the in-app menu.
See Also: @../app/SetMenu, @../app/ShowMenu

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

function yndExit_OnTouch(reply) {
    if(reply == "Yes") app.Exit();
}

<b>function OnBack() {
	yndExit.Show();
}</b>
</sample Confirm Exit>

### OnPause()
The OnPause event will be called when the user sends the app to the background, ie. when pressing the home button.
<sample Detect Pause>
//Called when application is paused.
function OnPause()
{
	app.ShowPopup( "OnPause" );
}
</sample Detect Pause>

### OnResume()
The OnPause event will be called when the user returns to your app after sending it to the background.
<sample Detect Resume>
//Called when application is resumed.
function OnResume()
{
	app.ShowPopup( "OnResume" );
}
</sample Detect Resume>

### OnConfig()
OnConfig is called when a device configuration changes, especially the screen orientation. This can be used to rearrange your layouts on orientatino change.
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

### OnAlarm()
If you have set up an app [Alarm](../app/SetAlarm) and it is triggered it will call the OnAlarm event.
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
