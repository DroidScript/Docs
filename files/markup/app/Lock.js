
/** # Lock #
 * Locks the device.
 * 
 * <red>**Requires Root**</red>
 * 
 * See Also: @Unlock
 * $$ app.Lock() $$ 
*/


// Lock.txt --> All the sample codes

/** @Sample
<sample Demo>
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
	app.Lock();
	app.ShowPopup( "Locked" );
}
</sample>

 */

