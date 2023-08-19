// ------------- HEADER SECTION ------------- 


/** # CreateNotification #
 * @abbrev ntf
 * @brief Returns a new Notification object
 * 
 * $$ ntf = app.CreateNotification(options) $$ 
 * @param {str_com} options Ongoing,AutoCancel,FullScreen,NoVibrate,Low:priority
 * @returns dso-Notification
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
The Notification object can be used to put messages in the notification drawer. The “AutoCancel” **option** will automatically dismiss the notificatin if the user touches it. “FullScreen” tries to create a larger notification on the screen. And “OnGoing” makes the Notification closeable by your app only.

Use the SetMessage method to tell the object what to display
<js>notify.SetMessage( ticker, title, text );</js>
The Notify method tells it to send the notification:
<js>notify.Notify( id );</js>
When the user touches your notification, your app will come to the front, even if it was not running.

If you use more than one notification, **app.GetNotifyId** can be used to check which notification was pressed by the user.
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** @extern Batch */

/** ### Cancel ###
 * Cancel a notification with a specific id.
 * $$ ntf.Cancel(id) $$
 * @param {str} id id|*
 */


/** ### GetType ###
 * Returns the control class name.
 * $$ ntf.GetType() $$
 * @returns str-Notification
 */


/** ### Listen ###
 * Listens for any notification the user gets. Requires notification access by granted by android.settings.ACTION_NOTIFICATION_LISTENER_SETTINGS.
 * $$ ntf.Listen(options) $$
 * @param {str} options CheckPerms
 */


/** ### Notify ###
 * Send the notification to the user.
 * $$ ntf.Notify(id) $$
 * @param {str} id 
 */


/** ### SetLargeImage ###
 * Set an image which will be displayed bigger than usual.
 * $$ ntf.SetLargeImage(image) $$
 * @param {str_ptf} image 
 */


/** ### SetLights ###
 * Activate the device notification LEDs.
 * $$ ntf.SetLights(color, onMs, offMs) $$
 * @param {str_col} color 
 * @param {num_mls} onMs 
 * @param {num_mls} offMs 
 */


/** ### SetMessage ###
 * Set notification texts.
 * $$ ntf.SetMessage(ticker, title, text, extra) $$
 * @param {str} ticker 
 * @param {str} title 
 * @param {str} text 
 * @param {str} extra 
 */


/** ### SetOnNotify ###
 * Called when a notification has been intercepted.
 * $$ ntf.SetOnNotify(callback) $$
 * @param {fnc_json} callback {"pNames":["source","title","message","extra","type"],"pTypes":["str","str","str","str","str-Normal"]}
 */


/** ### SetSmallImage ###
 * Set a small image in your notification.
 * $$ ntf.SetSmallImage(image) $$
 * @param {str_ptf} image 
 */



// ------------- SAMPLES ------------- 


    
/**
@sample Notification
function OnStart()
{
	app.ShowPopup( "Sending notification" );
	<b>notify = app.CreateNotification();
	notify.SetMessage( "Ticker", "Title", "Text" );
	notify.Notify( "testID" );
	setTimeout( cancel, 5000 );</b>
}

function cancel()
{
	notify.Cancel( "testID" );
	app.ShowPopup( "Notification cancelled" );
}
 */
    
            