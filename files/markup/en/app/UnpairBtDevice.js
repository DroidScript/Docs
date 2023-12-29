// ------------- HEADER SECTION ------------- 


/** # UnpairBtDevice #
 * @brief Unpair a paired Bluetooth device
 * Unpairs a paired Bluetooth device by its bt address. The _callback_ argument is called when the device was successfully unpaired.
 * 
 * See Also: @PairBtDevice, @GetPairedBtDevices, @DiscoverBtDevices, @CreateBluetoothSerial
 * $$ app.UnpairBtDevice(address, callback) $$ 
 * @param {str} address 
 * @param {fnc_json} callback {}
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Pairing and Unpairing bluetooth devices
function OnStart()
{
    app.ShowProgress( "enabling Bluetooth" );
    app.SetBluetoothEnabled( true );
    while( !app.IsBluetoothOn() ) app.Wait( 0.2 );
    app.HideProgress();

    app.DiscoverBtDevices( "", bt_OnFound, bt_OnComplete );
    app.ShowProgress( "Discovering bt devices" );

    lay = app.CreateLayout( "linear" );

    lst = app.CreateList( "", 1, 1, "fontawesome" );
    lst.SetOnTouch( pair );
    lay.AddChild( lst );

    app.AddLayout( lay );
}

function bt_OnFound( name, address )
{
    var image = "";
    if( app.IsBtDevicePaired( name )) image = "[fa-bluetooth]";
    lst.AddItem( name, address, image );
}

function bt_OnComplete() {
    app.HideProgress();
}

function pair( name, address )
{
    if(!app.IsBtDevicePaired( name ))
    {
        app.ShowProgress( "Pairing " + name );
        app.PairBtDevice( address, OnPair );
        lst.SetItem( name, name, address, "");
    }
    else
    {
        app.ShowProgress( "Unpairing " + name );
        app.UnpairBtDevice( address, OnUnpair );
        lst.SetItem( name, name, address, "");
    }
}

function OnPair( name, address ) {
    app.Alert( name + "  " + address, "Pairing successful!" );
}

function OnUnpair() {
    app.Alert( name + "  " + address, "Unpairing successful!" );
}
 */
    
            
    
/**
@sample Python Pairing and Unpairing bluetooth devices
from native import app

def OnStart():
    global lst
    app.ShowProgress("enabling Bluetooth")
    app.SetBluetoothEnabled(True)
    while not app.IsBluetoothOn():
        app.Wait(0.2)
    app.HideProgress()

    app.DiscoverBtDevices("", bt_OnFound, bt_OnComplete)
    app.ShowProgress("Discovering bt devices")

    lay = app.CreateLayout("linear")

    lst = app.CreateList("", 1, 1, "fontawesome")
    lst.SetOnTouch(pair)
    lay.AddChild(lst)

    app.AddLayout(lay)

def bt_OnFound(name, address):
    image = ""
    if app.IsBtDevicePaired(name):
        image = "[fa-bluetooth]"
    lst.AddItem(name, address, image)

def bt_OnComplete():
    app.HideProgress()

def pair(name, address, icon, index):
    if not app.IsBtDevicePaired(name):
        app.ShowProgress("Pairing " + name)
        app.PairBtDevice(address, OnPair)
        lst.SetItem(name, name, address, "")
    else:
        app.ShowProgress("Unpairing " + name)
        app.UnpairBtDevice(address, OnUnpair)
        lst.SetItem(name, name, address, "")

def OnPair(name, address):
    app.Alert(name + "  " + address, "Pairing successful!")

def OnUnpair(name, address):
    app.Alert(name + "  " + address, "Unpairing successful!")
 */
    
            