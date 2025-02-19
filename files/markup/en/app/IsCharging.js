// ------------- HEADER SECTION -------------


/** # IsCharging #
 * @brief Check whether device is charging
 * Checks if phone is currently charging or not.
 *
 * See Also: @GetBatteryLevel, @GetChargeType
 * $$ app.IsCharging() $$
 * @returns bin
*/




// ------------- SAMPLES -------------



/**
@sample Check Charging State
function OnStart()
{
    <b>var charging = app.IsCharging();</b>
    app.Alert( charging, "is charging:" );
}
 */



/**
@sample Python Check Charging State
from native import app

def OnStart():
    charging = app.IsCharging()
    app.Alert(charging, "is charging:")
 */
