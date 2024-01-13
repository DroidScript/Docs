// ------------- HEADER SECTION -------------


/** # AddDrawer #
 * @brief Adds a slide-able layout on given side
 * AddDrawer adds layout as drawer on a given side. If the user swipes from this side to the other the layout will slide out.
 * 
 * See Also: @OpenDrawer, @CloseDrawer, @RemoveDrawer
 * $$ app.AddDrawer(layout, side, width=-1, grabWidth?) $$ 
 * @param {dso} layout CreateLayout
 * @param {str} side left|right
 * @param {num_frc} [width=-1] 
 * @param {num_frc} [grabWidth] 
*/




// ------------- SAMPLES ------------- 


    
/**
@sample left
function OnStart()
{
	lay = app.CreateLayout( "Linear", "FillXY,VCenter" );

	txt1 = app.CreateText( "<-- swipe" );
	txt1.SetTextSize( 30 );
	lay.AddChild( txt1 );

	app.AddLayout( lay );

	layDrawer = app.CreateLayout( "Linear", "FillXY,VCenter" );
	layDrawer.SetBackground( "/Sys/Img/BlueBack.jpg" );

	txt2 = app.CreateText( "Hello" );
	txt2.SetTextSize( 40 );
	layDrawer.AddChild( txt2 );

	<b>app.AddDrawer( layDrawer, "left", 0.8 );</b>
}
 */
    
            
    
/**
@sample Python left
from native import app

def OnStart():
    lay = app.CreateLayout( "Linear", "FillXY,VCenter" )

    txt1 = app.CreateText( "<-- swipe" )
    txt1.SetTextSize( 30 )
    lay.AddChild( txt1 )

    app.AddLayout( lay )

    layDrawer = app.CreateLayout( "Linear", "FillXY,VCenter" )
    layDrawer.SetBackground( "/Sys/Img/BlueBack.jpg" )

    txt2 = app.CreateText( "Hello" )
    txt2.SetTextSize( 40 )
    layDrawer.AddChild( txt2 )

    <b>app.AddDrawer( layDrawer, "left", 0.8 )</b>
 */
    
            