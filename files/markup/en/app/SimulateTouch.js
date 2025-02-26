// ------------- HEADER SECTION -------------


/** # SimulateTouch #
 * @brief Simulate a touch event on a reachable control
 * Simulates a touch event on a reachable control.
 * $$ app.SimulateTouch(obj, x, y, dir) $$
 * @param {dso} obj
 * @param {num_frc} x
 * @param {num_frc} y
 * @param {str} dir Down|Move|Up
*/




// ------------- SAMPLES -------------



/**
@sample Pressing Buttons
function OnStart()
{
	lay = app.CreateLayout( "linear", "VCenter,FillXY" );

	btn = app.CreateButton( "Press Me", 0.3, 0.1 );
	btn.SetOnTouch( btn_OnTouch );
	lay.AddChild( btn );

	app.AddLayout( lay );

	app.Animate( SimulateTouch, 1/2 );
}

function SimulateTouch()
{
    app.SimulateTouch( btn, 0.5, 0.5, "down" );
}

var i = 1;
function btn_OnTouch()
{
	app.ShowPopup( "Hello World " + i++ );
}
 */



/**
@sample Python Pressing Buttons
from native import app

def OnStart():
    global btn
    lay = app.CreateLayout( "linear", "VCenter,FillXY" )

    btn = app.CreateButton( "Press Me", 0.3, 0.1 )
    btn.SetOnTouch( btn_OnTouch )
    lay.AddChild( btn )

    app.AddLayout( lay )

    app.Animate( SimulateTouch, 1/2 )

def SimulateTouch(time, dtime):
    app.SimulateTouch( btn, 0.5, 0.5, "down" )

i = 1
def btn_OnTouch():
    global i
    app.ShowPopup( "Hello World " + str(i) )
    i += 1
 */
