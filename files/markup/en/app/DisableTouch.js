// ------------- HEADER SECTION -------------


/** # DisableTouch #
 * @brief Suppress all touch events
 * Use this method to prevent any user interaction with the app.
 * You could use this for a safe mode for a slideshow.
 * $$ app.DisableTouch(disable) $$
 * @param {bin} disable
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
	<b>app.DisableTouch( true );</b>
	app.ShowPopup( "Touch Disabled." );
}
 */



/**
@sample Python Demo
from native import app

def OnStart():
    lay = app.CreateLayout( "linear", "VCenter,FillXY,touchspy" )

    btn = app.CreateButton( "Disable", 0.3, 0.1 )
    btn.SetOnTouch( btn_OnTouch )
    lay.AddChild( btn )

    app.AddLayout( lay )

def btn_OnTouch():
    app.DisableTouch( True )
    app.ShowPopup( "Touch Disabled." )

 */
