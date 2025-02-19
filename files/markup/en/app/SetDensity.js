// ------------- HEADER SECTION -------------


/** # SetDensity #
 * @brief Changes the dpi value for any control creatred afterwards
 * Changes the dpi value (dots per inch) that affects the content of any control created afterwards. The smaller the value, the smaller the scaling.
 *
 * See Also: @GetScreenDensity
 * $$ app.SetDensity(dpi) $$
 * @param {num_int} dpi
*/




// ------------- SAMPLES -------------



/**
@sample Demonstration
function OnStart() {
	var dens = app.GetScreenDensity();

	lay = app.CreateLayout( "linear", "VCenter,FillXY" );

	<b>app.SetDensity(dens / 2);</b>
	btn = app.CreateButton( "Press Me", -1, .1 );
	lay.AddChild( btn );

	app.SetDensity(dens);
	btn = app.CreateButton( "Press Me", -1, .1 );
	lay.AddChild( btn );

	app.SetDensity(dens * 2);
	btn = app.CreateButton( "Press Me", -1, .1 );
	lay.AddChild( btn );

	app.AddLayout( lay );
}
 */



/**
@sample Python Demonstration
from native import app

def OnStart():
    dens = app.GetScreenDensity()

    lay = app.CreateLayout("linear", "VCenter,FillXY")

    app.SetDensity(dens / 2)
    btn = app.CreateButton("Press Me", -1, .1)
    lay.AddChild(btn)

    app.SetDensity(dens)
    btn = app.CreateButton("Press Me", -1, .1)
    lay.AddChild(btn)

    app.SetDensity(dens * 2)
    btn = app.CreateButton("Press Me", -1, .1)
    lay.AddChild(btn)

    app.AddLayout(lay)
 */
