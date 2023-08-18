
/** # SetBluetoothEnabled #
 * @brief Enable Bluetooth on the device
 * Enables Bluetooth on the device.
 * 
 * See Also: @IsBluetoothEnabled, @IsBluetoothOn, @CreateBluetoothSerial
 * $$ app.SetBluetoothEnabled(enable) $$ 
 * @param {bin} enable 
*/


// SetBluetoothEnabled.txt --> All the sample codes

/** @Sample
<sample Enabling Bluetooth>
function OnStart()
{
    app.ShowProgress( "Enabling Bluetooth" );
    <b>if( !app.IsBluetoothEnabled() )
        app.SetBluetoothEnabled( true );</b>

    var cnt = 0;
    while( !app.IsBluetoothOn() && ++cnt < 10 ) app.Wait( 0.3 );
    app.HideProgress();
}
</sample>

<sample En/Disable Bluetooth>
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
</sample>

 */

