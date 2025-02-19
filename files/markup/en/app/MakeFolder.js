// ------------- HEADER SECTION -------------


/** # MakeFolder #
 * @brief Create new folder in the local fs
 * Creates a new folder in the local filesystem recursively.
 *
 * See Also: @FolderExists
 * $$ app.MakeFolder(folder) $$
 * @param {str_ptd} folder
*/




// ------------- SAMPLES -------------



/**
@sample Create folder
function OnStart()
{
    <b>app.MakeFolder("myFolder");</b>

	if(app.FolderExists("myFolder"))
	    app.ShowPopup("myFolder exists!");
    else
	    app.ShowPopup("myFolder does not exist!");
}
 */



/**
@sample Python Create folder
from native import app

def OnStart():
    app.MakeFolder("myFolder")

    if app.FolderExists("myFolder"):
        app.ShowPopup("myFolder exists!")
    else:
        app.ShowPopup("myFolder does not exist!")
 */
