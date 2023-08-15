
/** # IsBluetoothEnabled #
 * Return whether bluetooth was enabled. 
 * 
 * See Also: @SetBluetoothEnabled
 * $$ app.IsBluetoothEnabled() $$ 
 * @returns bin
*/


// IsBluetoothEnabled.txt --> All the sample codes

/** @Sample
<sample Check Bluetooth Status>
function OnStart()
{
    <b>var status = app.IsBluetoothEnabled()</b>
    var state = app.IsBluetoothOn();

    app.ShowPopup(
        "Bluetooth is " +
        (status ? "enabled" : "disabled") +
        (status == state ? " and " : " but ") +
        (state ? "on" : "off")
    );
}
</sample>

 */

