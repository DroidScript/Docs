
/** # Alert #
 * 
 * $$ app.Alert(message, title, options, hue) $$ 
 * @param {str} message 
 * @param {str} title 
 * @param {str_com} options NoDim,NoFocus
 * @param {num_int} hue 
*/


// Alert.md --> Complete documentation. Sample codes is at the bottom of this file.

/** @Description
Alert shows a simple text dialog with a colored title and a 'Ok' button to exit. If title was not given the dialog looks like a normal alert box.
Without the NoDim option the background behind the dialog will be darkened.

See Also:

See Also: @Error, @ShowTextDialog, @CreateYesNoDialog.

 */

// Alert.txt --> All the sample codes

/** @Sample
<sample No Title>
function OnStart()
{
	<b>app.Alert( "Hello World!" );</b>
}
</sample>

<sample Yellow Title>
function OnStart()
{
	<b>app.Alert( "This is an alert box", "Hello Yellow World!", "", -100 );</b>
}
</sample>

 */

