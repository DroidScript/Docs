// ------------- HEADER SECTION -------------


/** # SetDebug #
 * @brief Returns the current active debug switches
 *
 * $$ app.GetDebug() $$
 * @returns str_com-console,ds,adb,all
*/


// ------------- LONG DESCRIPTION -------------

/** @Description
%c
The available modes are:
	“console”: allows console.log messages
	“ds”: allows app.Debug messages
	“adb”: allows adb debug messages (ie at apk startup)
	<js nobox>true</js>: enable all debug messages
	<js nobox>false</js> or “” : disable all debug messages

See Also: @Debug, @SetDebug, @IsDebugging
 */



// ------------- SAMPLES ------------- 



/**
@sample
function OnStart()
{
	app.SetDebug("adb");
	var switches = app.GetDebug();
	app.Alert(switches);
}
 */

