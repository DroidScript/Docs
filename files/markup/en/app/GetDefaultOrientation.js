
/** # GetDefaultOrientation #
 * @brief Get devces default orientation
 * Returns the default Orientation of the device. The result modes can be “Portrait” if the device width is smaller than the device height, or “Landscape” vice versa.
 * 
 * See Also: @SetOrientation, @GetOrientation
 * $$ app.GetDefaultOrientation() $$ 
 * @returns str-Portrait|Landscape
*/


// GetDefaultOrientation.txt --> All the sample codes

/** @Sample
<sample Show Default Orientation>
function OnStart()
{
    <b>var orient = app.GetDefaultOrientation();</b>
    app.Alert( orient );
}
</sample>

 */

