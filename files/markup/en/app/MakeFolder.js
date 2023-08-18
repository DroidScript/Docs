
/** # MakeFolder #
 * @brief Create new folder in the local fs
 * Creates a new folder in the local filesystem recursively.
 * 
 * See Also: @FolderExists
 * $$ app.MakeFolder(folder) $$ 
 * @param {str_ptd} folder 
*/


// MakeFolder.txt --> All the sample codes

/** @Sample
<sample Create folder>
function OnStart()
{
    <b>app.MakeFolder("myFolder");</b>

	if(app.FolderExists("myFolder"))
	    app.ShowPopup("myFolder exists!");
    else
	    app.ShowPopup("myFolder does not exist!");
}
</sample>

 */

