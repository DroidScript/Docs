// ------------- HEADER SECTION -------------


/** # GetBatteryLevel #
 * @brief Get current battery level
 * Returns the current battery level of the device in percent.
 *
 * See Also: @GetChargeType, @IsCharging
 * $$ app.GetBatteryLevel() $$
 * @returns num_prc
*/




// ------------- SAMPLES -------------



/**
@sample Show Battery Level
function OnStart()
{
    <b>var lvl = app.GetBatteryLevel();</b>
    app.Alert( lvl );
}
 */



/**
@sample Python Show Battery Level
from native import app

def OnStart():
    lvl = app.GetBatteryLevel()
    app.Alert( lvl )
 */
