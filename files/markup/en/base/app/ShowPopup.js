
/** # ShowPopup #
 * Shows a simple popup message on the screen. It automatically disappears after about 5 secods or after an even shorter time if you pass the “Short” **option**, or when the user touches the screen.
 * $$ app.ShowPopup(message, options) $$ 
 * @param {str} message 
 * @param {str_com} options Bottom,Short|Long
*/


// ShowPopup.txt --> All the sample codes

/** @Sample
<sample Top>
function OnStart()
{
	<b>app.ShowPopup( "Hello World!" );</b>
}
</sample>

<sample Bottom>
function OnStart()
{
	<b>app.ShowPopup( "Hello World!", "Bottom,Short" );</b>
}
</sample>

 */

