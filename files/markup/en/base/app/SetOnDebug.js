
/** # SetOnDebug #
 * Define a callback function for debug messages.
 * 
 * See also: @Debug, @SetDebug
 * $$ app.SetOnDebug(callback) $$ 
*/


// SetOnDebug.txt --> All the sample codes

/** @Sample
<sample OnDebug>
function OnStart()
{
    <b>app.SetOnDebug( OnDebug );</b>
    app.Debug( "app started" );
}

function OnDebug(msg)
{
    app.SetDebug();
    app.Alert( msg, "Received debug message:" );
    app.SetDebug( true );
}
</sample>

 */

