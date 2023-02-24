
/** # GetSpeakerPhone #
 * Checks if the speaker is enabled for phone calls. Returns false if no call is active.
 * 
 * See also: @SetSpeakerPhone.
 * $$ app.GetSpeakerPhone() $$ 
 * @returns bin
*/


// GetSpeakerPhone.txt --> All the sample codes

/** @Sample
<sample Show if Speaker is Enabled>
function OnStart()
{
    var speaker = app.GetSpeakerPhone();
    app.Alert( speaker );
}</sample>

 */

