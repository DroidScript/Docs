// ------------- HEADER SECTION -------------


/** # DiscoverBtDevices #
 * @brief Search for nearby bluetooth devices
 *
 * $$ app.DiscoverBtDevices(filter, onFound?, onComplete?) $$
 * @param {str} filter
 * @param {fnc_json} [onFound] {"pNames":["name","address"],"pTypes":["str","str"]}
 * @param {fnc_json} [onComplete] {}
*/


// ------------- LONG DESCRIPTION -------------

/** @Description
Use DiscoverBtDevices to search for other bluetooth devices which are not paired with the current device. If any was found it will be forwarded directly to the **onFound** callback. If the search has finished **onComplete** function will be called.

See Also: @CreateBluetoothSerial, @PairBtDevice, @IsBtDevicePaired
 */



// ------------- SAMPLES -------------



/**
@sample Discover Bluetooth Devices
function OnStart()
{
    app.SetBluetoothEnabled(true);
    lay = app.CreateLayout( "linear", "VCenter,FillXY" );

    lst = app.CreateList( "", 0.8, 0.4 );
    lst.SetBackColor("#11ffffff");
    lay.AddChild( lst );

    app.AddLayout( lay );

    app.ShowProgress();
    
    <b>app.DiscoverBtDevices( "", OnFound, OnComplete );</b>
}

function OnFound( name, address)
{
    lst.AddItem( name, address );
}

function OnComplete()
{
    app.HideProgress();
}
 */



/**
@sample Python
from native import app

def OnStart():
    global lst
    app.SetBluetoothEnabled(True)
    lay = app.CreateLayout( "linear", "VCenter,FillXY" )

    lst = app.CreateList( "", 0.8, 0.4 )
    lst.SetBackColor("#11ffffff")
    lay.AddChild( lst )

    app.AddLayout( lay )

    app.ShowProgress()

    app.DiscoverBtDevices( "", OnFound, OnComplete )

def OnFound( name, address):
    lst.AddItem( name, address )

def OnComplete():
    app.HideProgress()
 */
