// ------------- HEADER SECTION -------------


/** # SetInBackground #
 * @brief Set services to run in the background
 * Set the current service to run in the background.
 *
 * See Also: @StartService, @SetInForeground.
 * $$ app.SetInBackground() $$
*/




// ------------- SAMPLES -------------



/**
@sample
var serviceJS = `
function OnStart()
{
    var i = 0;
    setInterval( function() { app.ShowPopup(i++); }, 2000 );
}

function OnMessage( msg)
{
    <b>if( msg == "fg" ) app.SetInForeground( "My Service", "Service is running", "/Sys/Img/Hello.png", "/Sys/Img/Icon.png", "low");
    else if( msg == "bg" ) app.SetInBackground();</b>
}`;

function OnStart()
{
    app.WriteFile( "Service.js", serviceJS );

	lay = app.CreateLayout( "linear", "VCenter,FillXY" );

	tgl = app.CreateToggle( "Foreground", 0.3, 0.1 );
	tgl.SetOnTouch( tgl_OnTouch );
	lay.AddChild( tgl );

	app.AddLayout( lay );

	svc = app.CreateService( "this", "this", OnSvcStart );
}

function tgl_OnTouch( fg )
{
    if( fg ) svc.SendMessage( "fg" );
    else svc.SendMessage( "bg" );
}
 */



/**
@sample Python
from native import app

serviceJS = """
def OnStart():
    i = 0
    def show_popup():
        nonlocal i
        app.ShowPopup(i)
        i += 1
    app.SetInterval(show_popup, 2000)

def OnMessage(msg):
    if msg == "fg":
        app.SetInForeground("My Service", "Service is running", "/Sys/Img/Hello.png", "/Sys/Img/Icon.png", "low")
    elif msg == "bg":
        app.SetInBackground()
"""

def OnStart():
    app.WriteFile("Service.js", serviceJS)

    lay = app.CreateLayout("linear", "VCenter,FillXY")

    tgl = app.CreateToggle("Foreground", 0.3, 0.1)

    def tgl_OnTouch(fg):
        if fg:
            svc.SendMessage("fg")
        else:
            svc.SendMessage("bg")

    tgl.SetOnTouch(tgl_OnTouch)
    lay.AddChild(tgl)

    app.AddLayout(lay)

    svc = app.CreateService("this", "this", OnSvcStart)
 */
