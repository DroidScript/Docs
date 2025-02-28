// ------------- HEADER SECTION -------------


/** # RenameFile #
 * @brief Rename or move a local file
 * Renames a file on the local filesystem. This method can also be used to move a file to a whole other destination.
 *
 * See Also: @WriteFile, @CopyFile, @DeleteFile
 * $$ app.RenameFile(source, destination) $$
 * @param {str_pth} source
 * @param {str_pth} destination
*/




// ------------- SAMPLES -------------



/**
@sample Example
function OnStart()
{
	var oldfile = "test.txt";
    var newfile = "test2.txt";
	app.WriteFile( oldfile, "Created: " + new Date() );
	<b>app.RenameFile( oldfile, newfile );</b>
}
 */



/**
@sample Python Example
from native import app
from datetime import datetime

def OnStart():
    oldfile = "test.txt"
    newfile = "test2.txt"
    app.WriteFile(oldfile, f"Created: {datetime.now()}")
    <b>app.RenameFile(oldfile, newfile)</b>
 */
