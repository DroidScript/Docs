// ------------- HEADER SECTION ------------- 


/** # HideKeyboard #
 * @brief Hide the device keyboard
 * Hides the device keyboard if it is currently shown.
 * 
 * See Also: @ShowKeyboard, @SetOnShowKeyboard
 * $$ app.HideKeyboard() $$ 
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
}

function tgl_OnTouch( show )
{
	<b>if( show ) app.ShowKeyboard( edt );
	else app.HideKeyboard();</b>
}
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

def tgl_OnTouch( show ):
    if show:
        app.ShowKeyboard( edt )
    else:
        app.HideKeyboard()
 */
    
            