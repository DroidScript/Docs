
/** # CreateBluetoothSerial #
 * @abbrev bls
 * The CreateBluetoothSerial object is used for communicating with other Bluetooth devices.The 'Text' mode is set by default, but **int**eger and **hex**adecimal values can also be sent.
 * $$ bls = app.CreateBluetoothSerial(mode) $$ 
 * @param {str} mode Text|Int|Hex
 * @returns dso-BluetoothSerial
*/


/** ## Methods ##
 * These are the methods available for CreateBluetoothSerial
 */


/** ### Batch ###
 * Batch method calls to be able to set all object's properties at once. * Note that you need to specify each parameter (use “” or <js nobox>null</js> to leave some out) * Inherited methods can be called by appending an underscore to the function name (ie. <js nobox>txt.Batch({ SetBackColor_: [“red”] })</js>
 * $$ bls.Batch(properties) $$
 * @param {obj} properties { COMMAND:lst
 */


/** ### Clear ###
 * Clears the Bluetooth buffer of the serial connection.
 * $$ bls.Clear() $$
 */


/** ### Connect ###
 * Connect to a Bluetooth device via its address. The oppenent must have called bt.Listen before.
 * $$ bls.Connect(name, channel) $$
 * @param {str} name 
 * @param {str} channel 
 */


/** ### Disconnect ###
 * Disconnect your device from an eventually existant connection. Calls the OnDisconnect callback function on both devices.
 * $$ bls.Disconnect() $$
 */


/** ### GetType ###
 * Returns the control class name.
 * $$ bls.GetType() $$
 * @returns str-BluetoothSerial
 */


/** ### IsBluetoothEnabled ###
 * Checks if Bluetooth is enabled or not.
 * $$ bls.IsBluetoothEnabled() $$
 * @returns bin
 */


/** ### IsConnected ###
 * Checks if a Bluetooth connection exists to another device.
 * $$ bls.IsConnected() $$
 * @returns bin
 */


/** ### IsPaired ###
 * Checks if a specific device is paired using its Bt name.
 * $$ bls.IsPaired(name) $$
 * @param {str} name 
 * @returns bin
 */


/** ### Listen ###
 * Listen to your serial connection for any incoming mesages by passing <i>true</i> as first argument, <s>or stop listening by passing false</s>. It has to be called before an other device can connect with yours via bt.Connect.
 * $$ bls.Listen(enabled) $$
 * @param {bin} enabled 
 */


/** ### Method ###
 * Allows access to other functions defined on the object in Java via reflection. *  * <premium>
 * $$ bls.Method(name, types, p1, p2, p3, p4) $$
 * @param {str} name 
 * @param {lst} types boolean,char,byte,short,int,long,float,double,String,CharSequence,...
 * @param {str} p1 
 * @param {str} p2 
 * @param {str} p3 
 * @param {str} p4 
 * @returns all
 */


/** ### RequestEnable ###
 * If Bluetooth is disabled, shows an android dialog which asks the user to enable bluetooth connection. If granted, bluetooth will be enabled automatically. No callback fired.
 * $$ bls.RequestEnable() $$
 */


/** ### SetDataMode ###
 * Enable sending data in several modes.
 * $$ bls.SetDataMode(mode) $$
 * @param {str} mode Hex:comma separated text value|Int:comma separated byte numbers|Text:string of text characters|&lt;encoding:"UTF
 */


/** ### SetOnConnect ###
 * If the device has sent the connection request * 	name is of type boolean (true if the connection was established successful) * 	and address is your BluetoothSerial object *  * if the device has received the connection request * 	name is a string with the clients bluetooth name * 	and address includes the bluetooth address.
 * $$ bls.SetOnConnect(callback) $$
 * @param {fnc_json} callback {"pNames":["name","address"],"pTypes":["str","str"]}
 */


/** ### SetOnDisconnect ###
 * SetOnDisconnect will be called on both devices after disconnecting from an existing bluetooth connection.
 * $$ bls.SetOnDisconnect() $$
 */


/** ### SetOnReceive ###
 * The SetOnReceive callback is called automatically after data has been received via the Bluetooth serial connection.
 * $$ bls.SetOnReceive(callback) $$
 * @param {fnc_json} callback {"pNames":["data"],"pTypes":["str"]}
 */


/** ### SetSplitMode ###
 * Tells the serial listener how to split received data. Splitted data will result in multiple OnReceive calls. * p2 and p3 have different purposes for different modes: * <style type='text/css'>th{align:center;}td{padding:0 10px 0 10px;}</style><table><tr><th>mode</th><th>p1</th><th>p2</th></tr><tr><td>Size</td><td>Size of one data package</td><td>-</td></tr><tr><td>End</td><td>Byte indicating end of data</td><td>-</td></tr><tr><td>Start-End</td><td>Byte indicating start of data</td><td>Byte indicating end of data</td></tr></table>
 * $$ bls.SetSplitMode(mode, p2, p3) $$
 * @param {str} mode End|Start
 * @param {str||num_int} p2 
 * @param {str||num_int} p3 
 */


/** ### SetTimeout ###
 * 
 * $$ bls.SetTimeout(milliseconds) $$
 * @param {num_mls} milliseconds 
 */


/** ### Write ###
 * Send data over the Bluetooth serial connection to the other device.
 * $$ bls.Write(data) $$
 * @param {str} data 
 */

// CreateBluetoothSerial.txt --> All the sample codes

/** @Sample
<sample Connect to Device>

function OnStart()
{
    app.ShowProgress( "Enabling Bluetooth" );
    if( !app.IsBluetoothEnabled() )
        app.SetBluetoothEnabled( true );

	while( !app.IsBluetoothOn() ) app.Wait(.4);
	app.HideProgress();

    <b>bt = app.CreateBluetoothSerial();
    bt.SetOnConnect( bt_OnConnect );
    bt.SetSplitMode( "End", "\n" );
    bt.Listen( true );</b>

    lst = app.CreateBluetoothList();
    lst.SetOnTouch(lst_OnTouch);
}

function lst_OnTouch( name, address )
{
    app.ShowProgress( "Connecting..." );
    bt.Connect( address );
}

function bt_OnConnect( ok, data )
{
    app.HideProgress();

    if( ok ) {
        if( typeof data == "object" )
            app.ShowPopup( "Connected!" );
        else
            alert( "Connected to " + ok + " (" + data + ")" );

        bt.Write("hello from " + app.GetBluetoothName());
    } else
        app.ShowPopup( "Failed to connect!" );
}
</sample>

 */

