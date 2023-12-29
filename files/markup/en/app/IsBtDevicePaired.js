// ------------- HEADER SECTION ------------- 


/** # IsBtDevicePaired #
 * @brief Check bt paired state to other device
 * Checks if a given bluetooth device was paired with the user device.
 * 
 * See Also: @GetPairedBtDevices, @UnpairBtDevice
 * $$ app.IsBtDevicePaired(name) $$ 
 * @param {str} name 
 * @returns bin
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Check Paired
function OnStart()
{
    app.ShowProgress( "enabling Bluetooth" );
    app.SetBluetoothEnabled( true );
    while( !app.IsBluetoothOn() ) app.Wait( 0.2 );
    app.HideProgress();

    if( devices.length )
    {
        paired =  app.IsBtDevicePaired( devices[0].name );
        app.Alert( paired, devices[0].name + " paired" );
    } else
        <b>app.ShowPopup( "No Paired devices found" );</b>
}
 */
    
            
    
/**
@sample Check Paired from Available
function OnStart()
{
    app.ShowProgress( "enabling Bluetooth" );
    app.SetBluetoothEnabled( true );
    while( !app.IsBluetoothOn() ) app.Wait( 0.2 );
    app.HideProgress();

    app.DiscoverBtDevices( "", bt_OnFound, bt_OnComplete );
    app.ShowProgress( "Discovering bt devices" );
}

function bt_OnFound( name, address )
{
    <b>var paired = app.IsBtDevicePaired( name );
    app.ShowPopup( name + ": paired: " + paired );</b>
}

function bt_OnComplete() {
    app.HideProgress();
}
 */
    
            
    
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
@sample Python Check Paired
from native import app

def OnStart():
    app.ShowProgress("enabling Bluetooth")
    app.SetBluetoothEnabled(True)
    while not app.IsBluetoothOn():
        app.Wait(0.2)
    app.HideProgress()

    if devices:
        paired = app.IsBtDevicePaired(devices[0].name)
        app.Alert(paired, devices[0].name + " paired")
    else:
        app.ShowPopup("No Paired devices found")
 */
    
            
    
/**
@sample Python Check Paired from Available
from native import app

def OnStart():
    app.ShowProgress("enabling Bluetooth")
    app.SetBluetoothEnabled(True)
    while not app.IsBluetoothOn():
        app.Wait(0.2)
    app.HideProgress()

    app.DiscoverBtDevices("", bt_OnFound, bt_OnComplete)
    app.ShowProgress("Discovering bt devices")

def bt_OnFound(name, address):
    paired = app.IsBtDevicePaired(name)
    app.ShowPopup(name + ": paired: " + str(paired))

def bt_OnComplete():
    app.HideProgress()
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

def OnUnpair():
    app.Alert(name + "  " + address, "Unpairing successful!")
 */
    
            