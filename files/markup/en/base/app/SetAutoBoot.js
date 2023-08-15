
/** # SetAutoBoot #
 * Causes the current running APK or its Service to be started automatically when your device boots.
 * 
 * See Also: @SetAutoStart
 * $$ app.SetAutoBoot(auto) $$ 
 * @param {string} auto App|Service|None
*/


// SetAutoBoot.txt --> All the sample codes

/** @Sample
<sample Set Auto Boot>
function OnStart()
{
    app.SetAutoBoot( true );
    app.ShowPopup( "You may reboot your phone now." );
}
</sample>

<sample Unset Auto Boot>
function OnStart()
{
    app.SetAutoBoot( false );
    app.ShowPopup( "AutoBoot Disabled." );
}
</sample>

 */

