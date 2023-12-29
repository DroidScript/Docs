// ------------- HEADER SECTION ------------- 


/** # KillApp #
 * @brief Kill an app by its pid
 * Kills a running app by its process ID. You can retreive a list of all running apps with their pids using the @GetRunningApps function of the **app** object.
 * $$ app.KillApp(pid) $$ 
 * @param {num_int} pid 
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Demo
function OnStart()
{
	<b>var apps = app.GetRunningApps();
	var curApps = apps.filter( function(v) { return v.foreground; });
    var pid = curApps[0].pid;

    alert( "Kill app " + curApps[0].name );
    app.KillApp( pid );</b>
    app.ShowPopup( "Done" ); // not shown
}
 */
    
            
    
/**
@sample Python Demo
from native import app

def OnStart():
    <b>apps = app.GetRunningApps()
    curApps = list(filter(lambda v: v.foreground, apps))
    pid = curApps[0].pid

    app.Alert( "Kill app " + curApps[0].name )
    app.KillApp( pid )</b>
    app.ShowPopup( "Done" ) # not shown
 */
    
            