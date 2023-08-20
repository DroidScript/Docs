// ------------- HEADER SECTION ------------- 


/** # CopyFolder #
 * @brief Copies a folder to a given destination
 * CopyFolder copies a folder and its contents to a given destination. If an item already exists in the destination it will not be overwritten unless overwrite is true.
 * 
 * **Note:** <js nobox>CopyFolder(fld1, fld2)</js> will copy the **contents** of _fld1_ to _fld2_.
 * 
 * See Also: @RenameFolder, @DeleteFolder, @FolderExists
 * $$ app.CopyFolder(source, destination, overwrite, filter) $$ 
 * @param {str_pth} source 
 * @param {str_pth} destination 
 * @param {bin} overwrite 
 * @param {str} filter pattern
*/




// ------------- SAMPLES ------------- 


    
/**
@sample 
function OnStart()
{
    app.MakeFolder("myFolder");
    <b>app.CopyFolder("myFolder", "/sdcard/myFolder");</b>

	if(app.FolderExists("/sdcard/myFolder"))
	    app.ShowPopup("myFolder exists in /sdcard/!");
    else
	    app.ShowPopup("myFolder does not exist in /sdcard/!");
}
 */
    
            