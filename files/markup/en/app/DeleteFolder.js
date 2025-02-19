// ------------- HEADER SECTION -------------


/** # DeleteFolder #
 * @brief Delete a folder
 * DeleteFolder does the same as DeleteFile but with folders. It recursively removes all files and folders of the given folder and finally deletes it.
 *
 * See Also: @MakeFolder, @RenameFolder, @FolderExists
 * $$ app.DeleteFolder(folder) $$
 * @param {str_ptd} folder
*/




// ------------- SAMPLES -------------



/**
@sample Delete created folder
function OnStart()
{
    app.MakeFolder("myFolder");

    app.DeleteFolder("myFolder");

	if(app.FolderExists("myFolder"))
	    app.ShowPopup("myFolder was not deleted!");
    else
	    app.ShowPopup("myFolder was deleted!");
}
 */



/**
@sample Python Delete created folder
from native import app

def OnStart():
    app.MakeFolder("myFolder")

    app.DeleteFolder("myFolder")

    if app.FolderExists("myFolder"):
        app.ShowPopup("myFolder was not deleted!")
    else:
        app.ShowPopup("myFolder was deleted!")
 */
