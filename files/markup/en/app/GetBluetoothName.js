// ------------- HEADER SECTION -------------


/** # GetBluetoothName #
 * @brief Get the bluetooth name
 * Returns the Bluetooth name of the device.
 *
 * See Also: @CreateBluetoothSerial
 * $$ app.GetBluetoothName() $$
 * @returns str
*/




// ------------- SAMPLES -------------



/**
@sample Show Bluetooth Name
function OnStart()
{
    <b>var name = app.GetBluetoothName();</b>
    app.Alert( name );
}
 */



/**
@sample Python Show Bluetooth Name
from native import app

def OnStart():
    name = app.GetBluetoothName()
    app.Alert( name )
 */
