
/** # GetNotifyId #
 * If the app was started by a notification, this function will return the id of that notification.
 * 
 * See Also: @CreateNotification
 * $$ app.GetNotifyId() $$ 
 * @returns str
*/


// GetNotifyId.txt --> All the sample codes

/** @Sample
<sample Example>
function OnStart()
{
    <b>var id = app.GetNotifyId();</b>

	if( id ) app.Alert( id, "Notification ID" );
	else
	{
        not = app.CreateNotification();
        not.SetMessage(
            "You have an urgent notification",
            "Press me!", "Do as the title says."
        );
        not.Notify( 1234 );
        setTimeout( app.Exit,  2000 );
	}
}
</sample>

 */

