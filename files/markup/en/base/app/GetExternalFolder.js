
/** # GetExternalFolder #
 * GetExternalFolder returns the path to the external micro sdcard of the device. Normally it is something like “/storage/extsd” or “/storage/extSdCard”
 * 
 * See Also: @GetInternalFolder
 * $$ app.GetExternalFolder() $$ 
 * @returns str_pth
*/


// GetExternalFolder.txt --> All the sample codes

/** @Sample
<sample Show External Folder>
function OnStart()
{
    <b>var dir = app.GetExternalFolder();</b>
    app.Alert( dir );
}
</sample>

 */

