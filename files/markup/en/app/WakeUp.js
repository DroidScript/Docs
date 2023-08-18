
/** # WakeUp #
 * @brief Wake the screen up
 * Forces the screen to turn on the screen. (This has the same effect as pressing the power button in sleep mode)
 * 
 * See Also: @GoToSleep
 * $$ app.WakeUp() $$ 
*/


// WakeUp.txt --> All the sample codes

/** @Sample
<sample Sleep and Wake>
function OnStart()
{
    app.GoToSleep();
    <b>setTimeout("app.WakeUp()", 5000)</b>
}
</sample>

 */

