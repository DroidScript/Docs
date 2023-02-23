
/** # IsFolder #
 * Checks if the passed fs path leads to a folder.
 * 
 * See Also: @FolderExists, @FileExists
 * $$ app.IsFolder(folder) $$ 
 * @param {str_ptd} folder 
 * @returns bin
*/


// IsFolder.txt --> All the sample codes

/** @Sample
<sample Check /sdcard/ available>
function OnStart()
{
    <b>var isFolder = app.IsFolder("/sdcard/");</b>
    app.Alert( isFolder, "/sdcard/ is Folder:" );
}
</sample>

 */

