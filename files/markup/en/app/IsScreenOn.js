
/** # IsScreenOn #
 * @brief Check if device screen is on
 * Checks if the device screen is currently on.
 * $$ app.IsScreenOn() $$ 
 * @returns bin
*/


// IsScreenOn.txt --> All the sample codes

/** @Sample
<sample Check Screen On>
function OnStart()
{
    app.ShowPopup( "You may now disable your screen." )
    setTimeout( checkScreenOn, 5000 );
}

function checkScreenOn()
{
    <b>screenOn = app.IsScreenOn();</b>
    app.ShowPopup( screenOn, "Screen On:" );
}
</sample>

 */

