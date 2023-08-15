
/** # ToFront #
 * Brings the app back to the foreground.
 * 
 * See Also: @ToBack.
 * $$ app.ToFront() $$ 
*/


// ToFront.txt --> All the sample codes

/** @Sample
<sample Hide and Peek>
function OnStart()
{
    app.ToBack();
    setTimeout("app.ToFront()", 5000);
}

function OnPause()
{
    app.ShowPopup( "OnPause" );
}

function OnResume()
{
    app.ShowPopup( "OnResume" );
}
</sample>

 */

