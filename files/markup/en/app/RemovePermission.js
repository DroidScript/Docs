// ------------- HEADER SECTION ------------- 


/** # RemovePermission #
 * Removes a granted permission
 * $$ app.RemovePermission(uri) $$ 
 * @param {str_uri} uri 
*/




// ------------- SAMPLES ------------- 


    
/**
@sample 
function OnStart()
{
	var lay = app.CreateLayout( "linear", "VCenter,FillXY" )

	spn = app.AddSpinner(lay, app.ListPermissions(), .5);
	btn = app.AddButton( lay, "Remove", 0.3 )
	btn.SetOnTouch( btn_OnTouch )
	
	app.AddLayout( lay )
}

function btn_OnTouch()
{
    var perm = spn.GetText();
    if(perm) {
        app.RemovePermission(perm);
        app.ShowPopup("Removed " + perm);
    }
}
 */
    
            