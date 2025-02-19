// ------------- HEADER SECTION -------------


/** # RenameFolder #
 * @brief Rename or move a local folder
 * Renames a folder on the local filesystem. This method can also be used to move a folder to a whole other destination.
 *
 * See Also: @MakeFolder, @CopyFolder, @DeleteFolder
 * $$ app.RenameFolder(source, destination) $$
 * @param {str_pth} source
 * @param {str_pth} destination
*/




// ------------- SAMPLES -------------



/**
@sample Rename
function OnStart()
{
	<b>app.RenameFolder( "/sdcard/MyFolder", "/sdcard/YourFolder" );</b>
}
 */



/**
@sample Move
function OnStart()
{
	<b>app.RenameFolder( "/sdcard/MyFolder", "/sdcard/DroidScript/MyFolder" );</b>
}
 */



/**
@sample Python Rename
from native import app

def OnStart():
    <b>app.RenameFolder("/sdcard/MyFolder", "/sdcard/YourFolder")</b>
 */



/**
@sample Python Move
from native import app

def OnStart():
    <b>app.RenameFolder("/sdcard/MyFolder", "/sdcard/DroidScript/MyFolder")</b>
 */
