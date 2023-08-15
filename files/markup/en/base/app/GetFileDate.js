
/** # GetFileDate #
 * GetFileDate returns a Date object containing the last modified date of a file or folder.
 * $$ app.GetFileDate(file) $$ 
 * @param {str_ptf} file 
 * @returns jso-Date
*/


// GetFileDate.txt --> All the sample codes

/** @Sample
<sample Show /sdcard/ last modifies date>
function OnStart()
{
    var date = app.GetFileDate("/sdcard/");
    app.Alert( date.toLocaleString() );
}
</sample>

 */

