
/** # GetScreenWidth #
 * @brief Get height of device screen
 * Returns the total screen width of the device in pixels. With the 'Real' **option** softkeys will be included in the value.
 * 
 * See Also: @GetScreenHeight, @GetScreenDensity
 * $$ app.GetScreenWidth(options) $$ 
 * @param {str} options Real
 * @returns num_pxl
*/


// GetScreenWidth.txt --> All the sample codes

/** @Sample
<sample Show Screen Width>
function OnStart()
{
    <b>var width = app.GetScreenWidth();</b>
    app.Alert( width );
}
</sample>

 */

