// ------------- HEADER SECTION -------------


/** # IsBluetoothOn #
 * @brief Check if bluetooth is on
 * Checks if bluetooth is enabled and on.
 * 
 * See Also: @CreateBluetoothSerial, @DiscoverBtDevices
 * $$ app.IsBluetoothOn() $$ 
 * @returns bin
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Check Bluetooth Status
function OnStart()
{
    var status = app.IsBluetoothEnabled()
    <b>var state = app.IsBluetoothOn();</b>

    app.ShowPopup(
        "Bluetooth is " +
        (status ? "enabled" : "disabled") +
        (status == state ? " and " : " but ") +
        (state ? "on" : "off")
    );
}
 */
    
            
    
/**
@sample Python Check Bluetooth Status
from native import app

def OnStart():
    status = app.IsBluetoothEnabled()
    <b>state = app.IsBluetoothOn()</b>

    app.ShowPopup(
        "Bluetooth is " +
        ("enabled" if status else "disabled") +
        (" and " if status == state else " but ") +
        ("on" if state else "off")
    )
 */
    
            