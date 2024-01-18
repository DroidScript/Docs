// ------------- HEADER SECTION -------------


/** # HideProgress #
 * @brief Hide progress indicator
 * Hides a previously shown progress indicator.
 * See also @ShowProgress.
 * $$ app.HideProgress() $$
*/




// ------------- SAMPLES -------------



/**
@sample Show and Hide Progress
function OnStart()
{
	<b>app.ShowProgress( "Loading..." );
	setTimeout( "app.HideProgress()", 3000 );</b>
}
 */



/**
@sample Python Show and Hide Progress
from native import app

def OnStart():
    app.ShowProgress("Loading...")
    app.SetTimeout("app.HideProgress()", 3000)
 */
