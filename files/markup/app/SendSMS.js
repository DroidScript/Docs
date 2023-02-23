
/** # SendSMS #
 * Send an SMS to someone using the default SMS application. The passed argumets will be auto-filled or requested by the SMS app otherwise. %c
 * 
 * See Also: @SendMail, @SendText, @SendFile
 * $$ app.SendSMS(msg, number) $$ 
 * @param {str} msg 
 * @param {str_num} number 
*/


// SendSMS.txt --> All the sample codes

/** @Sample
<sample Send SMS>
function OnStart()
{
    app.SendSMS( "Hello World!", "0123456789" );
}
</sample>

 */

