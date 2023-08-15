
/** # CreateSMS #
 * @abbrev sms
 * Returns a new SMS object to send and retreive SMS messages.
 * <xfeature>
 * $$ sms = app.CreateSMS() $$ 
 * @returns dso-SMS
*/


/** ## Methods ##
 * These are the methods available for CreateSMS
 */


/** ### Batch ###
 * Batch method calls to be able to set all object's properties at once. * Note that you need to specify each parameter (use “” or <js nobox>null</js> to leave some out) * Inherited methods can be called by appending an underscore to the function name (ie. <js nobox>txt.Batch({ SetBackColor_: [“red”] })</js>
 * $$ sms.Batch(properties) $$
 * @param {obj} properties { COMMAND:lst
 */


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
 * @param {str} options MultiPart:multi
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

// CreateSMS.txt --> All the sample codes

/** @Sample
 
 */

