
/** # GetFileSize #
 * GetFileSize returns the size of a file or folder in bytes
 * $$ app.GetFileSize(file) $$ 
 * @param {str_ptf} file 
 * @returns num_flt
*/


// GetFileSize.txt --> All the sample codes

/** @Sample
<sample Show /sdcard/ folder size>
function OnStart()
{
    var size = app.GetFileSize( "/sdcard/" );
    app.Alert( size / 1024 + " kB" );
}
</sample>

 */

