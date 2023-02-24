
/** # ListFolder #
 * 
 * $$ app.ListFolder(path, filter, limit, options) $$ 
 * @param {str_pth} path 
 * @param {str} filter 
 * @param {num_int} limit 
 * @param {str_com} options Alphasort:sorts the paths in alphabetical order,FullPath:returns absolute paths to the listed items,RegEx:accepts regexp patterns,Folders:list folders only,Files:list files only,NoEmpty:hide empty folders,project:Shows DS project folders only
 * @returns lst-[ paths:str_pth ]
*/


// ListFolder.md --> Complete documentation. Sample codes is at the bottom of this file.

/** @Description
The ListFolder method returns a list of all files and folders in a given folder.
The _filter_ **parameter** is an can be used to specify a filter pattern. For example to find only mp3 files, you would specify “.mp3” as a filter

The You can also **option**ally sort the list in alphabetica order with the “alphasort” option.

See Also: @WalkFolder, @IsFolder, @CreateList

 */

// ListFolder.txt --> All the sample codes

/** @Sample
<sample List home directory>
function OnStart()
{
	<b>var list = app.ListFolder( "/sdcard/" );</b>

	ldg = app.CreateListDialog( "/sdcard/*", list );
	ldg.Show();
}
</sample>

<sample List .jpg assets>
function OnStart()
{
	<b>var list = app.ListFolder( "/Sys/Img", ".jpg" );</b>

	ldg = app.CreateListDialog( "/Sys/Img/*.jpg", list );
	ldg.Show();
}
</sample>

 */

