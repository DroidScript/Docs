
/** # GetOrientation #
 * Returns the current device orientation. The result modes can be “Portrait” if the device width is smaller than the device height, or “Landscape” vice versa.
 * 
 * See Also: @SetOrientation, @GetDefaultOrientation, @GetRotation
 * $$ app.GetOrientation() $$ 
 * @returns str-Portrait|Landscape
*/


// GetOrientation.txt --> All the sample codes

/** @Sample
<sample Example>
function OnStart()
{
	<b>orient = app.GetOrientation();
	app.Alert( orient );</b>
}
</sample>

 */

