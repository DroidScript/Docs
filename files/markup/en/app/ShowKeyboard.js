// ------------- HEADER SECTION -------------


/** # ShowKeyboard #
 * @brief Show keyboard on a focussed control
 * Shows the keyboard on a focussed control.
 *
 * See Also: @HideKeyboard
 * $$ app.ShowKeyboard(obj) $$
 * @param {dso} obj
 * @returns bin
*/




// ------------- SAMPLES -------------



/**
@sample Basic
function OnStart()
{
	lay = app.CreateLayout( "linear", "VCenter,FillXY" );

	edt = app.CreateTextEdit( "Hell World" );
    edt.Focus();
	lay.AddChild( edt );

	app.AddLayout( lay );

	app.ShowKeyboard( edt );
}
 */



/**
@sample Toggle Keyboard
function OnStart()
{
	lay = app.CreateLayout( "linear", "VCenter,FillXY" );

	tgl = app.CreateToggle( "Keyboard", 0.3, 0.1 );
	tgl.SetOnTouch( tgl_OnTouch );
	lay.AddChild( tgl );

	edt = app.CreateTextEdit( "Text", .8, .1 );
    edt.Focus();
	lay.AddChild(edt);

	app.AddLayout( lay );
}

function tgl_OnTouch( show )
{
	<b>if( show ) app.ShowKeyboard( edt );
	else app.HideKeyboard();</b>
}
 */



/**
@sample Python Basic
from native import app

def OnStart():
    lay = app.CreateLayout("linear", "VCenter,FillXY")

    edt = app.CreateTextEdit("Hello World")
    edt.Focus()
    lay.AddChild(edt)

    app.AddLayout(lay)

    app.ShowKeyboard(edt)
 */



/**
@sample Python Toggle Keyboard
from native import app

def OnStart():
    global edt
    lay = app.CreateLayout("linear", "VCenter,FillXY")

    tgl = app.CreateToggle("Keyboard", 0.3, 0.1)
    tgl.SetOnTouch(tgl_OnTouch)
    lay.AddChild(tgl)

    edt = app.CreateTextEdit("Text", .8, .1)
    edt.Focus()
    lay.AddChild(edt)

    app.AddLayout(lay)

def tgl_OnTouch(show):
    if show:
        app.ShowKeyboard(edt)
    else:
        app.HideKeyboard()
 */
