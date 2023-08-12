
/** # SetAutoStart #
 * Set a DroidScript project name which will be launched automatically when DroidScript starts.
 * 
 * <deprecated in favour of ide.AutoStart>
 * 
 * See Also: @SetSharedApp, @SetAutoBoot
 * $$ app.SetAutoStart(appName) $$ 
 * @param {str} appName 
*/


// SetAutoStart.txt --> All the sample codes

/** @Sample
<sample Auto Start 'Hello World'>
function OnStart()
{
    app.SetAutoStart( "Hello World" );
    app.ShowPopup( "You may now restart DroidScript." );
}
</sample>

<sample Unset Autostart>
function OnStart()
{
    app.SetAutoStart( "" );
    app.ShowPopup( "Autostart unset." );
}
</sample>


 */

