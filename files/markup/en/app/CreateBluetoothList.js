// ------------- HEADER SECTION ------------- 


/** # CreateBluetoothList #
 * @abbrev btl
 * @brief Returns a new BluetoothList object with selectable list of paired and discovered Bluetooth devices
 * CreateBluetoothList shows an Android dialog which allows the user to select a Bluetooth device from paired and discovered devices. See Also: @GetPairedBtDevices, @DiscoverBtDevices.
 * $$ btl = app.CreateBluetoothList(filter) $$ 
 * @param {str} filter 
 * @returns dso-BluetoothList
*/




// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** @extern Batch */

/** ### GetType ###
 * Returns the control class name.
 * $$ btl.GetType() $$
 * @returns str-BluetoothList
 */


/** ### SetOnTouch ###
 * @brief Define a callback function for touch events
 * Define a callback function that is called when the user selects an element.
 * $$ btl.SetOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["name","address"],"pTypes":["str","str"]}
 */



// ------------- SAMPLES ------------- 


    
/**
@sample Basic
function OnStart()
{
    lst = app.CreateBluetoothList();
    lst.SetOnTouch( OnBtList );
}

function OnBtList(name, address)
{
    app.Alert("Name: " + name + "\nAddress: " + address, "Result");
}
 */
    
            
    
/**
@sample Python Basic
from native import app

def OnStart():
    lst = app.CreateBluetoothList()
    lst.SetOnTouch( OnBtList )

def OnBtList(name, address):
    app.Alert("Name: " + name + "\nAddress: " + address, "Result")
 */
    
            