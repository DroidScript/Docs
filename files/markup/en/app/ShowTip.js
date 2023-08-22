// ------------- HEADER SECTION ------------- 


/** # ShowTip #
 * Shows a tooltip message on the screen.
 * $$ app.ShowTip(message, left, top, timeOut, options) $$ 
 * @param {str} message 
 * @param {num_frc} left 
 * @param {num_frc} top 
 * @param {num_mls} timeOut 
 * @param {str} options Down
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Show Tool-Tip
function OnStart()
{
	lay = app.CreateLayout( "linear", "VCenter,FillXY" );

    edt = app.CreateTextEdit( "", 0.5 );
	lay.AddChild( edt );

	app.AddLayout( lay );

    <b>var pos = edt.GetPosition( "screen" );
    app.ShowTip( "Type some text here", pos.left, pos.top, 3000, "Down" );</b>
}
 */
    
            