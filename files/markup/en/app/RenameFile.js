
/** # RenameFile #
 * @brief Rename or move a local file
 * Renames a file on the local filesystem. This method can also be used to move a file to a whole other destination.
 * 
 * See Also: @WriteFile, @CopyFile, @DeleteFile
 * $$ app.RenameFile(source, destination) $$ 
 * @param {str_pth} source 
 * @param {str_pth} destination 
*/


// RenameFile.txt --> All the sample codes

/** @Sample
<sample Example>
function OnStart()
{
	var oldfile = "test.txt";
    var newfile = "test2.txt";
	app.WriteFile( file, "Created: " + new Date() );
	<b>app.RenameFile( file, "/sdcard/wftest2.txt" );</b>
}</sample>

 */

