
/** # Wait #
 * @brief Perform a synchronous delay
 * 
 * $$ app.Wait(seconds) $$ 
 * @param {num_sec} seconds 
*/


// Wait.md --> Complete documentation. Sample codes is at the bottom of this file.

/** @Description
Performs a **synchronous** delay in your program which effectively pauses it.

Its main use is for making brief pauses when communicating with external devices so that they get a chance to do work while your app executes.

Be careful when using this method in your code as Android quickly thinks that your app does not respond if used for over about 30 seconds.

 */

// Wait.txt --> All the sample codes

/** @Sample
<sample Synchronous delay>
function OnStart()
{
    alert( "Press Ok to start the delay." )
    <b>app.Wait( 5 );</b>
    app.ShowPopup( "Done." );
}
</sample>

 */

