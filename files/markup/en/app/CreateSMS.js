// ------------- HEADER SECTION ------------- 


/** # CreateSMS #
 * @abbrev sms

 * Returns a new SMS object to send and retreive SMS messages.
 * <xfeature>
 * $$ sms = app.CreateSMS() $$ 
 * @returns dso-SMS
*/




// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** @extern Batch */

/** ### GetType ###
 * Returns the control class name.
 * $$ sms.GetType() $$
 * @returns str-SMS
 */


/** ### Send ###
 * Send SMS message.
 * $$ sms.Send(number, message, options) $$
 * @param {str} number 
 * @param {str} message 
 * @param {str} options MultiPart:multi-part SMS messaging
 */


/** ### SetOnMessage ###
 * %cb% the user received a SMS
 * $$ sms.SetOnMessage(callback) $$
 * @param {fnc_json} callback {"pNames":["message"],"pTypes":["str"]}
 */


/** ### SetOnStatus ###
 * %cb% a status has changed.
 * $$ sms.SetOnStatus(callback) $$
 * @param {fnc_json} callback {"pNames":["status"],"pTypes":["str"]}
 */



// ------------- SAMPLES ------------- 

