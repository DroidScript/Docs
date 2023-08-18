
/** # GetMacAddress #
 * @brief Get devices MAC address
 * Returns the alphanumeric **M**edia-**A**ccess-**C**ontrol address of the device. Style should be “00&colon;00&colon;00&colon;00&colon;00&colon;00”. The individual numbers can have hexadecimal values between 00 and FF.
 * $$ app.GetMacAddress() $$ 
 * @returns str
*/


// GetMacAddress.txt --> All the sample codes

/** @Sample
<sample Show MAC Address>
function OnStart()
{
	<b>var mac = app.GetMacAddress();</b>
	app.ShowPopup( mac );
}
</sample>

 */

