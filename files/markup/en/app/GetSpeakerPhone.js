// ------------- HEADER SECTION -------------


/** # GetSpeakerPhone #
 * Checks if the speaker is enabled for phone calls. Returns false if no call is active.
 *
 * See also: @SetSpeakerPhone.
 * $$ app.GetSpeakerPhone() $$
 * @returns bin
*/




// ------------- SAMPLES -------------



/**
@sample Show if Speaker is Enabled
function OnStart()
{
    var speaker = app.GetSpeakerPhone();
    app.Alert( speaker );
}
 */



/**
@sample Python Show if Speaker is Enabled
from native import app

def OnStart():
    speaker = app.GetSpeakerPhone()
    app.Alert(str(speaker))
 */
