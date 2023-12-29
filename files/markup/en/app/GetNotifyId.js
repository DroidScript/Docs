// ------------- HEADER SECTION ------------- 


/** # GetNotifyId #
 * @brief Get the caller notification id
 * If the app was started by a notification, this function will return the id of that notification.
 * 
 * See Also: @CreateNotification
 * $$ app.GetNotifyId() $$ 
 * @returns str
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Example
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
 */
    
            
    
/**
@sample Python Example
from native import app

def OnStart():
    <b>id = app.GetNotifyId()</b>

    if id:
        app.Alert(id, "Notification ID")
    else:
        not = app.CreateNotification()
        not.SetMessage(
            "You have an urgent notification",
            "Press me!", "Do as the title says."
        )
        not.Notify(1234)
        app.SetTimeout(app.Exit, 2000)
 */
    
            