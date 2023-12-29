// ------------- HEADER SECTION ------------- 


/** # SetWifiApEnabled #
 * @brief En/Disable the mobile Wifi Access Point of the device
 * 
 * $$ app.SetWifiApEnabled(enable, ssid, key) $$ 
 * @param {bin} enable 
 * @param {str} ssid 
 * @param {str} key 
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
En/Disable the mobile Wifi Access Point of the device. You can define a custom WiFi AP name and a password as credentials for other people.
It automatically disabled WiFi if it was enabled.

<red>**This method is available for Android 6 or older only!**</red>

See Also: @IsWifiApEnabled, @IsWifiEnabled
 */



// ------------- SAMPLES ------------- 


    
/**
@sample WiFi Access Point
function OnStart()
{
	lay = app.CreateLayout( "linear", "VCenter,FillXY" );

	tgl = app.CreateToggle( "WiFi Access Point", -1, 0.1 );
	tgl.SetOnTouch( tgl_OnTouch );
	lay.AddChild( tgl );

	app.AddLayout( lay );
}

function tgl_OnTouch( enable )
{
    <b>if( enable ) app.SetWifiApEnabled( true, "DS Wifi AP", "mypass" );
    else app.SetWifiApEnabled( false );</b>
}
 */
    
            
    
/**
@sample Python WiFi Access Point
from native import app

def OnStart():
    lay = app.CreateLayout( "linear", "VCenter,FillXY" )

    tgl = app.CreateToggle( "WiFi Access Point", -1, 0.1 )
    tgl.SetOnTouch( tgl_OnTouch )
    lay.AddChild( tgl )

    app.AddLayout( lay )

def tgl_OnTouch( enable ):
    if enable:
        app.SetWifiApEnabled( True, "DS Wifi AP", "mypass" )
    else:
        app.SetWifiApEnabled( False )
 */
    
            