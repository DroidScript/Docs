
/** # GetFreeSpace #
 * @brief Get remaining storage size
 * Returns the free space of the internal or external storage in GigaBytes.
 * $$ app.GetFreeSpace(mode) $$ 
 * @param {str} mode internal|external
 * @returns num_gbt
*/


// GetFreeSpace.txt --> All the sample codes

/** @Sample
<sample Show remaining internal and external storage>
function OnStart()
{
    <b>var intSize = Math.round(app.GetFreeSpace("internal") * 1024);
    var extSize = Math.round(app.GetFreeSpace("external") * 1024);</b>

    var text =
        "internal: " + intSize + " MB\n" +
        "external: " + extSize + " MB";

    app.Alert( text );
}
</sample>

 */

