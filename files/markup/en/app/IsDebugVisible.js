// ------------- HEADER SECTION -------------


/** # IsDebugVisible #
 * @brief Check if debug view is currently shown
 * Returns if the debug view is currently visible to the user.
 *
 * See Also: @Debug, @ShowDebug
 * $$ app.IsDebugVisible() $$
 * @returns bin
*/




// ------------- SAMPLES -------------



/**
@sample Toggle Debug
function OnStart()
{
    app.CreateDebug();

	lay = app.CreateLayout( "linear", "VCenter,FillXY" );

	tgl = app.CreateToggle( "WiFi Access Point", -1, 0.1 );
	tgl.SetOnTouch( ShowDebug );
	tgl.SetChecked( true );
	lay.AddChild( tgl );

	app.AddLayout( lay );
}

function ShowDebug( show )
{
	app.ShowDebug( show );
	<b>var vis = app.IsDebugVisible();</b>
    app.ShowPopup( vis );
}
 */



/**
@sample Python Toggle Debug
from native import app

def OnStart():
    app.CreateDebug()

    lay = app.CreateLayout("linear", "VCenter,FillXY")

    tgl = app.CreateToggle("WiFi Access Point", -1, 0.1)
    tgl.SetOnTouch(ShowDebug)
    tgl.SetChecked(True)
    lay.AddChild(tgl)

    app.AddLayout(lay)

def ShowDebug(show):
    app.ShowDebug(show)
    vis = app.IsDebugVisible()
    app.ShowPopup(vis)
 */
