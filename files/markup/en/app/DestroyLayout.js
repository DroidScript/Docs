// ------------- HEADER SECTION -------------


/** # DestroyLayout #
 * @brief Destroy a layout
 * DestroyLayout destroys a layout and all its contents so it can't be used any more. As a result, all memory occupied by these objects will be released.
 *
 * See Also: @CreateLayout, @AddLayout
 * $$ app.DestroyLayout(layout) $$
 * @param {dso} layout CreateLayout
*/




// ------------- SAMPLES -------------



/**
@sample Destroy layout and check if deleted
//Called when application is started.
function OnStart()
{
	lay = app.CreateLayout( "linear", "VCenter,FillXY" );

	btn = app.CreateButton( "Don't Press Me", 0.3, 0.1 );
	btn.SetOnTouch( btn_OnTouch );
	lay.AddChild( btn );

	app.AddLayout( lay );
}

function btn_OnTouch()
{
    <b>app.DestroyLayout(lay);</b>

    var text = this.GetText() || "nothing in here!";
	app.ShowPopup(text);
}
 */



/**
@sample Python Destroy layout and check if deleted
from native import app

def OnStart():
    global lay, btn
    lay = app.CreateLayout( "linear", "VCenter,FillXY" )

    btn = app.CreateButton( "Don't Press Me", 0.3, 0.1 )
    btn.SetOnTouch( btn_OnTouch )
    lay.AddChild( btn )

    app.AddLayout( lay )

def btn_OnTouch():
    app.DestroyLayout(lay)

    text = this.GetText() or "nothing in here!"
    app.ShowPopup(text)
 */
