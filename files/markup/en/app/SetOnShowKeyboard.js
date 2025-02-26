// ------------- HEADER SECTION -------------


/** # SetOnShowKeyboard #
 * @brief Called on keyboard visibility changes
 * Define a callback function to detect when keyboard visible state has changed.
 *
 * See Also: @ShowKeyboard, @HideKeyboard
 * $$ app.SetOnShowKeyboard(callback) $$
 * @param {fnc_json} callback {"pNames":["shown"],"pTypes":["bin"]}
*/




// ------------- SAMPLES -------------



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

	app.SetOnShowKeyboard( OnKeyboardShown );
}

function tgl_OnTouch( show )
{
	if( show ) app.ShowKeyboard( edt );
	else app.HideKeyboard();
}

<b>function OnKeyboardShown( shown )
{
    app.ShowPopup( "Keyboard shown: " + shown );
}</b>
 */



/**
@sample Python Toggle Keyboard
from native import app

def OnStart():
    global edt
    lay = app.CreateLayout( "linear", "VCenter,FillXY" )

    tgl = app.CreateToggle( "Keyboard", 0.3, 0.1 )
    tgl.SetOnTouch( tgl_OnTouch )
    lay.AddChild( tgl )

    edt = app.CreateTextEdit( "Text", .8, .1 )
    edt.Focus()
    lay.AddChild(edt)

    app.AddLayout( lay )

    app.SetOnShowKeyboard( OnKeyboardShown )

def tgl_OnTouch( show ):
    if show:
        app.ShowKeyboard( edt )
    else:
        app.HideKeyboard()

<b>def OnKeyboardShown( shown ):
    app.ShowPopup( "Keyboard shown: " + str(shown) )</b>
 */
