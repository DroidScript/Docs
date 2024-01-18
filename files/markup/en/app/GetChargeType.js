// ------------- HEADER SECTION -------------


/** # GetChargeType #
 * @brief Get current charge type
 * Returns the current charge type. If the device isn't charging the result is “None”.
 *
 * See Also: @GetBatteryLevel, @IsCharging
 * $$ app.GetChargeType() $$
 * @returns str-AC|USB|Wireless|None
*/




// ------------- SAMPLES -------------



/**
@sample Show Charge Type
function OnStart()
{
    <b>var type = app.GetChargeType();</b>
    app.Alert( type );
}
 */



/**
@sample Python Show Charge Type
from native import app

def OnStart():
    type = app.GetChargeType()
    app.Alert(type)
 */
