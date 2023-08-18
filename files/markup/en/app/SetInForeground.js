
/** # SetInForeground #
 * @brief Set services to run in the foreground
 * Set the current service to run in the foreground.
 * 
 * See Also: @StartService, @SetInBackground
 * $$ app.SetInForeground(title, text, largeIcon, smallIcon, importance) $$ 
 * @param {str} title 
 * @param {str} text 
 * @param {str_ptf} largeIcon 
 * @param {str_ptf} smallIcon 
 * @param {str} importance min|low|default|high|none
*/


// SetInForeground.txt --> All the sample codes

/** @Sample
var serviceJS = `
function OnStart()
{
    var i = 0;
    setInterval( function() { app.ShowPopup(i++); }, 2000 );
}

function OnMessage( msg)
{
    <b>if( msg == "fg" ) app.SetInForeground( "My Service", "Service is running", "/Sys/Img/Hello.png", "/Sys/Img/Icon.png", "low");
    else if( msg == "bg" ) app.SetInBackground();</b>
}`;

function OnStart()
{
    app.WriteFile( "Service.js", serviceJS );

	lay = app.CreateLayout( "linear", "VCenter,FillXY" );

	tgl = app.CreateToggle( "Foreground", 0.3, 0.1 );
	tgl.SetOnTouch( tgl_OnTouch );
	lay.AddChild( tgl );

	app.AddLayout( lay );

	svc = app.CreateService( "this", "this", OnSvcStart );
}

function tgl_OnTouch( fg )
{
    if( fg ) svc.SendMessage( "fg" );
    else svc.SendMessage( "bg" );
}

 */

