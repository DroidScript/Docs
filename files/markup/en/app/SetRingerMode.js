// ------------- HEADER SECTION ------------- 


/** # SetRingerMode #
 * @brief Set current device ringer mode
 * Change the current ringer mode of the device which can be “Normal”, “Vibrate” or “Silent”.
 * 
 * See Also: @GetRingerMode
 * $$ app.SetRingerMode(mode) $$ 
 * @param {str} mode Normal|Vibrate|Silent
*/




// ------------- SAMPLES ------------- 


    
/**
@sample SetRingerMode Demo
function OnStart()
{
	lay = app.CreateLayout( "linear", "VCenter,FillXY" );

    spn = app.CreateSpinner( "Normal,Vibrate,Silent" );
    spn.SetOnChange( SetRingerMode );
    lay.AddChild( spn );

	btn = app.CreateButton( "Press Me", 0.3, 0.1 );
	btn.SetOnTouch( Notify );
	lay.AddChild( btn );

	app.AddLayout( lay );
}

function SetRingerMode( mode )
{
    <b>app.SetRingerMode( mode );</b>
}

function Notify()
{
    var ntf = app.CreateNotification();
    ntf.SetMessage( "RingerMode Demo", "RingerMode Demo notifies:", "Helo World" );
    ntf.Notify();
}
 */
    
            
    
/**
@sample Python SetRingerMode Demo
from native import app

def OnStart():
    lay = app.CreateLayout( "linear", "VCenter,FillXY" )

    spn = app.CreateSpinner( "Normal,Vibrate,Silent" )
    spn.SetOnChange( SetRingerMode )
    lay.AddChild( spn )

    btn = app.CreateButton( "Press Me", 0.3, 0.1 )
    btn.SetOnTouch( Notify )
    lay.AddChild( btn )

    app.AddLayout( lay )

def SetRingerMode( mode, index):
    app.SetRingerMode( mode )

def Notify():
    ntf = app.CreateNotification()
    ntf.SetMessage( "RingerMode Demo", "RingerMode Demo notifies:", "Hello World" )
    ntf.Notify()
 */
    
            