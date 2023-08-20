// ------------- HEADER SECTION ------------- 


/** # ChooseAccount #
 * @brief Let the user choose an google account
 * Opens an Android dialog and allows the user to select one of the registered Google/Gmail accounts or add one. The selected email address is returned as the first argument in the callback function.
 * 
 * See Also: @GetAccounts
 * $$ app.ChooseAccount(callback) $$ 
 * @param {fnc_json} callback {"pNames":["account"],"pTypes":["str-email"]}
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Choose Account
function OnStart()
{
    lay = app.CreateLayout( "linear", "VCenter,FillXY" );

	btnChoose = app.CreateButton( "Choose Account", 0.5, 0.1 );
	btnChoose.SetOnTouch( btnChoose_OnTouch );
	lay.AddChild( btnChoose );

	app.AddLayout( lay );
}

function btnChoose_OnTouch()
{
	<b>app.ChooseAccount( OnChoose );</b>
}

function OnChoose( account )
{
    alert( "selected account: " + account );
}
 */
    
            