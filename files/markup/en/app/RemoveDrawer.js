// ------------- HEADER SECTION -------------


/** # RemoveDrawer #
 * @brief Remove drawer layout from a given side
 * Removes a drawer layout from a given side.
 *
 * See also: @AddDrawer
 * $$ app.RemoveDrawer(side) $$
 * @param {str} side left|right
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

	btn = app.CreateButton( "Remove" );
	btn.SetOnTouch( RemoveDrawer );
	layDrawer.AddChild( btn );

	app.AddDrawer( layDrawer, "left", 0.8 );
}

function RemoveDrawer() {
    <b>app.RemoveDrawer( "left" );</b>
}
 */



/**
@sample Python left
from native import app

def OnStart():
    lay = app.CreateLayout("Linear", "FillXY,VCenter")

    txt1 = app.CreateText("<-- swipe")
    txt1.SetTextSize(30)
    lay.AddChild(txt1)

    app.AddLayout(lay)

    layDrawer = app.CreateLayout("Linear", "FillXY,VCenter")
    layDrawer.SetBackground("/Sys/Img/BlueBack.jpg")

    btn = app.CreateButton("Remove")
    btn.SetOnTouch(RemoveDrawer)
    layDrawer.AddChild(btn)

    app.AddDrawer(layDrawer, "left", 0.8)

def RemoveDrawer():
    <b>app.RemoveDrawer("left")</b>
 */
