
/** # GetEnv #
 * Returns the value of an environment variable defined on the device.
 * $$ app.GetEnv(name) $$ 
 * @param {str} name PATH|...
 * @returns str
*/


// GetEnv.txt --> All the sample codes

/** @Sample
<sample Show PATH environment variable>
function OnStart()
{
    <b>var envPath = app.GetEnv("PATH");</b>
    app.Alert( envPath );
}
</sample>

 */

