// ------------- HEADER SECTION ------------- 


/** # SetOrientation #
 * @brief Fix display orientation
 * Set the display orientation to a fixed value. You can unlock it again passing “Default” as **orientation**.
 * 
 * See Also: @GetOrientation
 * $$ app.SetOrientation(orient, callback) $$ 
 * @param {str} orient Default|Landscape|ReverseLandscape|Portrait|ReversePortrait
 * @param {fnc_json} callback {}
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Change Orientation
function OnStart()
{
	lay = app.CreateLayout( "linear", "VCenter,FillXY" );

	spn = app.CreateSpinner( "Default,Landscape,ReverseLandscape,Portrait,ReversePortrait", 0.3, 0.1 );
	spn.SetOnChange( SetOrientation );
	lay.AddChild( spn );

	app.AddLayout( lay );
}

function SetOrientation( orient )
{
    <b>app.SetOrientation( orient )</b>
}
 */
    
            
    
/**
@sample Python Change Orientation
from native import app

def OnStart():
    lay = app.CreateLayout( "linear", "VCenter,FillXY" )

    spn = app.CreateSpinner( "Default,Landscape,ReverseLandscape,Portrait,ReversePortrait", 0.3, 0.1 )
    spn.SetOnChange( SetOrientation )
    lay.AddChild( spn )

    app.AddLayout( lay )

def SetOrientation( orient, index):
    app.SetOrientation( orient )
 */
    
            