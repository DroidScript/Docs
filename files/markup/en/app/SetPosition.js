// ------------- HEADER SECTION -------------


/** # SetPosition #
 * @brief Change app position and size
 * Change the main app's position and size. Mostly used for transparent apps.
 * $$ app.SetPosition(left, top, width=-1, height=-1, options?) $$
 * @param {num_frc} left
 * @param {num_frc} top
 * @param {num_frc} [width=-1]
 * @param {num_frc} [height=-1]
 * @param {str} [options] px
*/




// ------------- SAMPLES -------------



/**
@sample SetPosition
function OnStart()
{
	<b>app.SetPosition( 0.2, 0.2, .6, .6 );</b>

	lay = app.CreateLayout( "linear", "VCenter,fillxy" );
	lay.SetBackColor("blue")

	btn = app.CreateButton( "Hello World", 0.3, 0.1 ); // 1, 1 will overflow
	lay.AddChild( btn );

	app.AddLayout( lay );
}
 */



/**
@sample Python SetPosition
from native import app

def OnStart():
    app.SetPosition(0.2, 0.2, .6, .6)

    lay = app.CreateLayout("linear", "VCenter,fillxy")
    lay.SetBackColor("blue")

    btn = app.CreateButton("Hello World", 0.3, 0.1)
    lay.AddChild(btn)

    app.AddLayout(lay)
 */
