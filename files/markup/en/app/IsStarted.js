
/** # IsStarted #
 * @brief Check if app has finished loading
 * Checks if the app has finished loading. It will return true after OnStart has returned.
 * $$ app.IsStarted() $$ 
 * @returns bin
*/


// IsStarted.txt --> All the sample codes

/** @Sample
<sample Check Started>

setTimeout('app.Alert( app.IsStarted(), "Started in global:" );');

function OnStart()
{
    <b>var started = app.IsStarted();</b>
    app.Alert( started, "Started in OnStart:" );
}
</sample>

 */

