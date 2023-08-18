
/** # KillApp #
 * @brief Kill an app by its pid
 * Kills a running app by its process ID. You can retreive a list of all running apps with their pids using the @GetRunningApps function of the **app** object.
 * $$ app.KillApp(pid) $$ 
 * @param {num_int} pid 
*/


// KillApp.txt --> All the sample codes

/** @Sample
<sample Demo>
function OnStart()
{
	<b>var apps = app.GetRunningApps();
	var curApps = apps.filter( function(v) { return v.foreground; });
    var pid = curApps[0].pid;

    alert( "Kill app " + curApps[0].name );
    app.KillApp( pid );</b>
    app.ShowPopup( "Done" ); // not shown
}
</sample>

 */

