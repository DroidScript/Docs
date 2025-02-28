// ------------- HEADER SECTION -------------


/** # SetBluetoothEnabled #
 * @brief Enable Bluetooth on the device
 * Enables Bluetooth on the device.
 *
 * See Also: @IsBluetoothEnabled, @IsBluetoothOn, @CreateBluetoothSerial
 * $$ app.SetBluetoothEnabled(enable) $$
 * @param {bin} enable
*/




// ------------- SAMPLES -------------



/**
@sample Enabling Bluetooth
function OnStart()
{
    app.ShowProgress( "Enabling Bluetooth" );
    <b>if( !app.IsBluetoothEnabled() )
        app.SetBluetoothEnabled( true );</b>

    var cnt = 0;
    while( !app.IsBluetoothOn() && ++cnt < 10 ) app.Wait( 0.3 );
    app.HideProgress();
}
 */



/**
@sample En/Disable Bluetooth
var itv = 0;

function OnStart()
{
    lay = app.CreateLayout( "linear", "VCenter,FillXY" );

    btnSave = app.CreateButton( "Enable", 0.5, 0.1 );
	btnSave.SetOnTouch( btn_OnTouch );
	lay.AddChild( btnSave );

    btnLoad = app.CreateButton( "Disable", 0.5, 0.1 );
	btnLoad.SetOnTouch( btn_OnTouch );
	lay.AddChild( btnLoad );

	app.AddLayout( lay );
}

function btn_OnTouch()
{
    if( itv ) return;
    var op = this.GetText();

	if( op == "Enable" )
	{
	    app.ShowProgress( "Enabling Bluetooth" );

        if( !app.IsBluetoothEnabled() )
            app.SetBluetoothEnabled( true );

        itv = setInterval( checkBtOn, 200 );
	}
	else
	{
	    app.ShowProgress( "Disabling Bluetooth" );

        if( app.IsBluetoothEnabled() )
	        app.SetBluetoothEnabled( false );

        itv = setInterval( checkBtOff, 200 );
	}
}

function checkBtOn()
{
    if( app.IsBluetoothOn() )
    {
        app.HideProgress();
        app.ShowPopup( "Bluetooth is on" );
        clearInterval( itv );
        itv = 0;
    }
}


function checkBtOff()
{
    if( !app.IsBluetoothOn() )
    {
        app.HideProgress();
        app.ShowPopup( "Bluetooth is off" );
        clearInterval( itv );
        itv = 0;
    }
}
 */



/**
@sample Python Enabling Bluetooth
from native import app

def OnStart():
    app.ShowProgress( "Enabling Bluetooth" )
    <b>if not app.IsBluetoothEnabled():
        app.SetBluetoothEnabled( True )</b>

    cnt = 0
    while not app.IsBluetoothOn() and cnt < 10:
        app.Wait( 0.3 )
        cnt += 1
    app.HideProgress()
 */



/**
@sample Python En/Disable Bluetooth
from native import app
from browser import timer

itv = 0

def OnStart():
    lay = app.CreateLayout( "linear", "VCenter,FillXY" )

    btnSave = app.CreateButton( "Enable", 0.5, 0.1 )
    btnSave.SetOnTouch( btn_OnTouch )
    lay.AddChild( btnSave )

    btnLoad = app.CreateButton( "Disable", 0.5, 0.1 )
    btnLoad.SetOnTouch( btn_OnTouch )
    lay.AddChild( btnLoad )

    app.AddLayout( lay )

def btn_OnTouch():
    global itv

    if itv:
        return
    op = app.GetLastButton().GetText()

    if op == "Enable":
        app.ShowProgress( "Enabling Bluetooth" )

        if not app.IsBluetoothEnabled():
            app.SetBluetoothEnabled( True )

        itv = timer.set_interval( checkBtOn, 200 )
    else:
        app.ShowProgress( "Disabling Bluetooth" )

        if app.IsBluetoothEnabled():
            app.SetBluetoothEnabled( False )

        itv = timer.set_interval( checkBtOff, 200 )

def checkBtOn():
    global itv

    if app.IsBluetoothOn():
        app.HideProgress()
        app.ShowPopup( "Bluetooth is on" )
        timer.clear_interval( itv )
        itv = 0

def checkBtOff():
    global itv

    if not app.IsBluetoothOn():
        app.HideProgress()
        app.ShowPopup( "Bluetooth is off" )
        timer.clear_interval( itv )
        itv = 0

 */
