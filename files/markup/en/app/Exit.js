
/** # Exit #
 * @brief Close and stop the app
 * With Exit you can cancel and completely stop the app. You can also forcefully **kill** the app by passing true as first argument.
 * $$ app.Exit(kill) $$ 
 * @param {bin} kill 
*/


// Exit.txt --> All the sample codes

/** @Sample
<sample Exit dialog>
function OnStart()
{
    app.EnableBackKey( false );
    app.ShowPopup( "Press the back key" );
}

function OnBack()
{
    var yesNo = app.CreateYesNoDialog( "Exit App?" );
    yesNo.SetOnTouch( yesNo_OnTouch );
}

function yesNo_OnTouch( result )
{
    if( result == "Yes" ) app.Exit();
}
</sample>

 */

