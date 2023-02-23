
/** # GetVolume #
 * Returns the volume level of a given audio type as a number between 0 and 1. By default the “System” volume is returned.
 * 
 * See Also: @SetVolume
 * $$ app.GetVolume(stream) $$ 
 * @param {str} stream alarm|dtmf|music|notification|ring|system|voicecall
 * @returns num_frc
*/


// GetVolume.txt --> All the sample codes

/** @Sample
<sample Get System Volume>
function OnStart()
{
    <b>var vol = app.GetVolume();</b>
    app.Alert( vol, "System Volume:" );
}
</sample>

 */

