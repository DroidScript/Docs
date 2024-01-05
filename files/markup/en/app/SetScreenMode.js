// ------------- HEADER SECTION -------------


/** # SetScreenMode #
 * Changes the screen mode of your application. If null is passed, the [app menu](SetMenu.htm) will be dismissed. When called, the global OnConfig function will be called (if defined).
 * $$ app.SetScreenMode(mode) $$ 
 * @param {str} mode Default|Normal|Full|Game
*/




// ------------- SAMPLES ------------- 


    
/**
@sample SetScreenMode Demo
function OnStart()
{
	lay = app.CreateLayout( "Linear", "Vertical,VCenter,FillXY" );

	spn = app.CreateSpinner( "Default,Normal,Full,Game" );
	spn.SetOnChange( SetScreenMode );
	lay.AddChild( spn );

	app.AddLayout( lay );
}

function SetScreenMode( mode )
{
    <b>app.SetScreenMode( mode );</b>
}
 */
    
            
    
/**
@sample Python SetScreenMode Demo
from native import app

def OnStart():
    lay = app.CreateLayout("Linear", "Vertical,VCenter,FillXY")

    spn = app.CreateSpinner("Default,Normal,Full,Game")
    spn.SetOnChange(SetScreenMode)
    lay.AddChild(spn)

    app.AddLayout(lay)

def SetScreenMode(mode, index):
    app.SetScreenMode(mode)
 */
    
            