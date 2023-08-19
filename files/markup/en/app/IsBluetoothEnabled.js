// ------------- HEADER SECTION ------------- 


/** # IsBluetoothEnabled #
 * @brief Check bluetooth enabled
 * Return whether bluetooth was enabled. 
 * 
 * See Also: @SetBluetoothEnabled
 * $$ app.IsBluetoothEnabled() $$ 
 * @returns bin
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Check Bluetooth Status
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
 */
    
            