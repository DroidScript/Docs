// ------------- HEADER SECTION -------------


/** # ShowDebug #
 * @brief Opens the in-app debug console as black overlay
 * Show/Hide the debug console as black overlay in your app.
 * 
 * See Also: @Debug, @IsDebugVisible
 * $$ app.ShowDebug(show, options) $$ 
 * @param {bin} show 
 * @param {str} options dialog-Show the debug log as black overlay dialog|clear-Clear content before showing
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Debug Overlay
function OnStart()
{
	lay = app.CreateLayout( "linear", "VCenter,FillXY" );

	tgl = app.AddToggle( lay, "Toggle Debug", -1, 0.1 );
	tgl.SetOnTouch( ShowDebug );

	app.AddLayout( lay );
}

function ShowDebug( show )
{
    <b>app.ShowDebug( show );</b>
}
 */
    
            
    
/**
@sample Debug Dialog
function OnStart()
{
	lay = app.CreateLayout( "linear", "VCenter,FillXY" );

	tgl = app.AddButton( lay, "Show Debug Dialog", -1, 0.1 );
	tgl.SetOnTouch( ShowDebug );

    app.EnableBackKey( false );
	app.AddLayout( lay );
}

function ShowDebug()
{
    <b>app.ShowDebug( true, "dialog" );</b>
    app.ShowPopup( "Press [BACK] to close." );
}

function OnBack()
{
	if( app.IsDebugVisible() ) {
	    app.ShowDebug( false );
	}
}
 */
    
            
    
/**
@sample Python Debug Overlay
from native import app

def OnStart():
    lay = app.CreateLayout("linear", "VCenter,FillXY")

    tgl = app.AddToggle(lay, "Toggle Debug", -1, 0.1)
    tgl.SetOnTouch(ShowDebug)

    app.AddLayout(lay)

def ShowDebug(show):
    app.ShowDebug(show)
 */
    
            
    
/**
@sample Python Debug Dialog
from native import app

def OnStart():
    lay = app.CreateLayout("linear", "VCenter,FillXY")

    tgl = app.AddButton(lay, "Show Debug Dialog", -1, 0.1)
    tgl.SetOnTouch(ShowDebug)

    app.EnableBackKey(False)
    app.AddLayout(lay)

def ShowDebug():
    app.ShowDebug(True, "dialog")
    app.ShowPopup("Press [BACK] to close.")

def OnBack():
    if app.IsDebugVisible():
        app.ShowDebug(False)
    else:
        app.Exit()
 */
    
            