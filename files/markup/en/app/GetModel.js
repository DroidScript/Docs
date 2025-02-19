// ------------- HEADER SECTION -------------


/** # GetModel #
 * @brief Get device model name
 * Returns the model name of the device.
 * $$ app.GetModel() $$
 * @returns str
*/




// ------------- SAMPLES -------------



/**
@sample Get Device Model
function OnStart()
{
	<b>model = app.GetModel();</b>
	app.ShowPopup( model );
}
 */



/**
@sample Python
from native import app

def OnStart():
    model = app.GetModel()
    app.ShowPopup( model )
 */
