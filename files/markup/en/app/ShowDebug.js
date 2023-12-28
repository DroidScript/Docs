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
	} else {
		app.Exit();
	}
}
 */
    
            