// ------------- HEADER SECTION -------------


/** # SetScreenBrightness #
 * @brief Change screen brightness
 * Change the screen brightness to a value between 0 and 1, where 0 is the lowest and 1 the highest possible brightness value.
 * $$ app.SetScreenBrightness(level) $$ 
 * @param {num_frc} level 
*/




// ------------- SAMPLES ------------- 


    
/**
@sample SetScreenBrightness Demo
function OnStart()
{
	lay = app.CreateLayout( "linear", "VCenter,FillXY" );
    lay.SetBackColor( "white" );

    spn = app.CreateSeekBar( 1 );
    spn.SetOnChange( SetScreenBrightness );
    spn.SetRange( 1 );
    lay.AddChild( spn );

	app.AddLayout( lay );
}

function SetScreenBrightness( level )
{
    app.SetScreenBrightness( level );
}
 */
    
            
    
/**
@sample Python SetScreenBrightness Demo
from native import app

def OnStart():
    lay = app.CreateLayout( "linear", "VCenter,FillXY" )
    lay.SetBackColor( "white" )

    spn = app.CreateSeekBar( 1 )
    spn.SetOnChange( SetScreenBrightness )
    spn.SetRange( 1 )
    lay.AddChild( spn )

    app.AddLayout( lay )

def SetScreenBrightness( level ):
    app.SetScreenBrightness( level )
 */
    
            