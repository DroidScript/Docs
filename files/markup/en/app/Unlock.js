// ------------- HEADER SECTION -------------


/** # Unlock #
 * Unlocks the device.
 *
 * <red>**Requires Root**</red>
 *
 * See Also: @Lock
 * $$ app.Unlock() $$
*/




// ------------- SAMPLES -------------



/**
@sample Demo
function OnStart()
{
	lay = app.CreateLayout( "linear", "VCenter,FillXY,touchspy" );

	btn = app.CreateButton( "Disable", 0.3, 0.1 );
	btn.SetOnTouch( btn_OnTouch );
	lay.AddChild( btn );

	app.AddLayout( lay );
}

function btn_OnTouch()
{
	app.Lock();
	app.ShowPopup( "Locked. Wait 5 secs" );

	<b>setTimeout(app.Unlock, 5000);</b>
}
 */



/**
@sample Python Demo
from native import app

def OnStart():
    lay = app.CreateLayout("linear", "VCenter,FillXY,touchspy")

    btn = app.CreateButton("Disable", 0.3, 0.1)
    btn.SetOnTouch(btn_OnTouch)
    lay.AddChild(btn)

    app.AddLayout(lay)

def btn_OnTouch():
    app.Lock()
    app.ShowPopup("Locked. Wait 5 secs")

    app.SetTimeout(app.Unlock, 5000)
 */
