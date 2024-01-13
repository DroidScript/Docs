// ------------- HEADER SECTION -------------


/** # AddLayout #
 * @brief Adds a layout to the app
 * AddLayout adds a layout to the screen so that it is visible (if not hidden with SetVisibility)
 * When @CreateLayout arguments are passed it will create the layout just like app.CreateLayout and also add it.
 * 
 * See Also: @RemoveLayout
 * $$ app.AddLayout(layout, type, options?) $$ 
 * @param {dso} layout CreateLayout
 * @param {str} type Linear|Absolute|Frame|Card
 * @param {str} [options] TouchThrough:forwards touch events to underlying children,TouchSpy:spies for touch events on all children,Left|Top|Right|Bottom|Center|H/VCenter,Wrap,Horizontal|Vertical,FillX/Y
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Vertical
function OnStart()
{
	lay = app.CreateLayout( "Linear", "FillXY,VCenter" );

	txt = app.CreateText( "Hello" );
	txt.SetTextSize( 50 );
	lay.AddChild( txt );

	<b>app.AddLayout( lay );</b>
}
 */
    
            
    
/**
@sample Python Vertical
from native import app

def OnStart():
    lay = app.CreateLayout( "Linear", "FillXY,VCenter" )

    txt = app.CreateText( "Hello" )
    txt.SetTextSize( 50 )
    lay.AddChild( txt )

    <b>app.AddLayout( lay )</b>
 */
    
            