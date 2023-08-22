// ------------- HEADER SECTION ------------- 


/** # EnableBackKey #
 * 
 * $$ app.EnableBackKey(enable) $$ 
 * @param {bin} enable 
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Allows to en- or disable the devices back key. When it is disabled the global _OnBack_ app event will called when the user presses the back button - otherwise the app exits.

You can use this method to create a custom _BACK_ command that allows you to navigate between your layouts.
 */



// ------------- SAMPLES ------------- 


    
/**
@sample Example
function OnStart()
{
	<b>app.EnableBackKey( false );</b>
}

function OnBack()
{
	var yesNo = app.CreateYesNoDialog( "Exit App?" );
	yesNo.SetOnTouch( yesNo_OnTouch );
	yesNo.Show();
}

function yesNo_OnTouch( result )
{
	if( result=="Yes" ) app.Exit();
}
 */
    
            