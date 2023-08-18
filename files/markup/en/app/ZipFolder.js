
/** # ZipFolder #
 * @brief Compress a folder to zip
 * Recursively compresses a local folder to a zip file.
 * 
 * See Also: @ZipFile, @UnzipFile
 * $$ app.ZipFolder(source, destination) $$ 
 * @param {str_pth} source 
 * @param {str_pth} destination 
*/


// ZipFolder.txt --> All the sample codes

/** @Sample
<sample Zip Folder>
function OnStart()
{
    var folder = "/sdcard/DroidScript/Hello World";
	app.ZipFolder( folder, folder + ".zip" );
	app.ShowPopup( "Compressed to " + folder + ".zip" );
}
</sample>

 */

