// ------------- HEADER SECTION ------------- 


/** # ListFolder #
 * @brief Get a list of files ans folders contained in a specific folder
 * 
 * $$ app.ListFolder(path, filter, limit, options) $$ 
 * @param {str_pth-must not have a trailing slash} path 
 * @param {str} filter 
 * @param {num_int} limit 
 * @param {str_com} options Alphasort:sorts the paths in alphabetical order,FullPath:returns absolute paths to the listed items,RegEx:accepts regexp patterns,Folders:list folders only,Files:list files only,NoEmpty:hide empty folders,project:Shows DS project folders only
 * @returns lst-[ paths:str_pth ]
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
The ListFolder method returns a list of all files and folders in a given folder.
The _filter_ **parameter** is an can be used to specify a filter pattern. For example to find only mp3 files, you would specify “.mp3” as a filter

The You can also **option**ally sort the list in alphabetica order with the “alphasort” option.

See Also: @WalkFolder, @IsFolder, @CreateList
 */



// ------------- SAMPLES ------------- 


    
/**
@sample List home directory
function OnStart()
{
	<b>var list = app.ListFolder( "/sdcard/" );</b>

	ldg = app.CreateListDialog( "/sdcard/*", list );
	ldg.Show();
}
 */
    
            
    
/**
@sample List .jpg assets
function OnStart()
{
	<b>var list = app.ListFolder( "/Sys/Img", ".jpg" );</b>

	ldg = app.CreateListDialog( "/Sys/Img/*.jpg", list );
	ldg.Show();
}
 */
    
            