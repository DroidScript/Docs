// ------------- HEADER SECTION -------------


/** # ChooseImage #
 * @brief Let the user choose an image
 * ChooseImage opens the photo gallery for user to select an image.
 *
 * See Also: @CreateImage
 * $$ app.ChooseImage(options, callback) $$
 * @param {str_com} options |internal|external
 * @param {fnc_json} callback {"pNames":["path"],"pTypes":["str_pth"]}
*/




// ------------- SAMPLES -------------



/**
@sample Choose Image
function OnStart()
{
    lay = app.CreateLayout( "linear", "VCenter,FillXY" );

    btnChoose = app.CreateButton( "Choose Image", 0.5, 0.1 );
	btnChoose.SetOnTouch( btnChoose_OnTouch );
	lay.AddChild( btnChoose );

	app.AddLayout( lay );
}

function btnChoose_OnTouch()
{
	<b>app.ChooseImage( "internal", OnChoose );</b>
}

function OnChoose( path )
{
    alert( "image path: " + path );
}
 */



/**
@sample Python Choose Image
from native import app

def OnStart():
    lay = app.CreateLayout( "linear", "VCenter,FillXY" )

    btnChoose = app.CreateButton("Choose Image", 0.5, 0.1)
    btnChoose.SetOnTouch(btnChoose_OnTouch)
    lay.AddChild(btnChoose)

    app.AddLayout(lay)

def btnChoose_OnTouch():
    app.ChooseImage("internal", OnChoose)

def OnChoose(path):
    app.Alert("image path: " + path)
 */


