
/** # CreateBluetoothList #
 * @abbrev btl
 * CreateBluetoothList shows an Android dialog which allows the user to select a Bluetooth device from paired and discovered devices. See Also: @GetPairedBtDevices, @DiscoverBtDevices.
 * $$ btl = app.CreateBluetoothList(filter) $$ 
 * @param {str} filter 
 * @returns dso-BluetoothList
*/


/** ## Methods ##
 * These are the methods available for CreateBluetoothList
 */


/** ### Batch ###
 * Batch method calls to be able to set all object's properties at once. * Note that you need to specify each parameter (use “” or <js nobox>null</js> to leave some out) * Inherited methods can be called by appending an underscore to the function name (ie. <js nobox>txt.Batch({ SetBackColor_: [“red”] })</js>
 * $$ btl.Batch(properties) $$
 * @param {obj} properties { COMMAND:lst
 */


/** ### GetType ###
 * Returns the control class name.
 * $$ btl.GetType() $$
 * @returns str-BluetoothList
 */


/** ### SetOnTouch ###
 * Define a callback function that is called when the user selects an element.
 * $$ btl.SetOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["name","address"],"pTypes":["str","str"]}
 */

// CreateBluetoothList.txt --> All the sample codes

/** @Sample
<sample Basic>
function OnStart()
{
    lst = app.CreateBluetoothList();
    lst.SetOnTouch( OnBtList );
}

function OnBtList(name, address)
{
    app.Alert("Name: " + name + "\nAddress: " + address, "Result");
}
</sample>

 */

