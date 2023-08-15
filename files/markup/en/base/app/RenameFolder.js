
/** # RenameFolder #
 * Renames a folder on the local filesystem. This method can also be used to move a folder to a whole other destination.
 * 
 * See Also: @MakeFolder, @CopyFolder, @DeleteFolder
 * $$ app.RenameFolder(source, destination) $$ 
 * @param {str_pth} source 
 * @param {str_pth} destination 
*/


// RenameFolder.txt --> All the sample codes

/** @Sample
<sample Rename>
function OnStart()
{
	<b>app.RenameFolder( "/sdcard/MyFolder", "/sdcard/YourFolder" );</b>
}
</sample>

<sample Move>
function OnStart()
{
	<b>app.RenameFolder( "/sdcard/MyFolder", "/sdcard/DroidScript/MyFolder" );</b>
}
</sample>

 */

