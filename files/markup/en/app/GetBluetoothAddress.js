// ------------- HEADER SECTION ------------- 


/** # GetBluetoothAddress #
 * @brief Get the bluetooth address
 * Returns the hexadecimal Bluetooth address of the device, following the pattern “00&colon;00&colon;00&colon;00&colon;00&colon;00”.
 * 
 * See Also: @CreateBluetoothSerial
 * $$ app.GetBluetoothAddress() $$ 
 * @returns str
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Show Bluetooth Address
function OnStart()
{
    <b>var addr = app.GetBluetoothAddress();</b>
    app.Alert( addr );
}
 */
    
            