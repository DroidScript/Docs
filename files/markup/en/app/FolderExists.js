// ------------- HEADER SECTION ------------- 


/** # FolderExists #
 * @brief Checks if the folder exists
 * Checks if a given folder exits or not.
 * 
 * See Also: @MakeFolder, @CopyFolder, @RenameFolder
 * $$ app.FolderExists(folder) $$ 
 * @param {str_ptd} folder 
 * @returns bin
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Example
function OnStart()
{
	<b>if(app.FolderExists("myFolder"))
	    app.ShowPopup("myFolder exists!");
    else
	    app.ShowPopup("myFolder does not exist!");</b>
}
 */
    
            