
/** # IsAppInstalled #
 * @brief Check if package is installed
 * Checks if an app given by a package name is installed.
 * 
 * See also: @GetPackageName, @GetInstalledApps
 * $$ app.IsAppInstalled(packageName) $$ 
 * @param {str} packageName 
 * @returns bin
*/


// IsAppInstalled.txt --> All the sample codes

/** @Sample
<sample Check App Installed>
function OnStart()
{
    var pkg = app.GetPackageName();
    <b>var isInstalled = app.IsAppInstalled( pkg );</b>
    app.Alert( isInstalled, pkg + " installed:" );
}
</sample>

 */

