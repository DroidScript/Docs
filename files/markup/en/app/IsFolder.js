// ------------- HEADER SECTION -------------


/** # IsFolder #
 * @brief Check if path leads to a folder
 * Checks if the passed fs path leads to a folder.
 *
 * See Also: @FolderExists, @FileExists
 * $$ app.IsFolder(folder) $$
 * @param {str_ptd} folder
 * @returns bin
*/




// ------------- SAMPLES -------------



/**
@sample Check /sdcard/ available
function OnStart()
{
    <b>var isFolder = app.IsFolder("/sdcard/");</b>
    app.Alert( isFolder, "/sdcard/ is Folder:" );
}
 */



/**
@sample Python Check APK
from native import app

def OnStart():
    isChrome = app.IsChrome()
    app.Alert(isChrome, "is Chrome:")
 */



/**
@sample Python Check /sdcard/ available
from native import app

def OnStart():
    isFolder = app.IsFolder("/sdcard/")
    app.Alert(isFolder, "/sdcard/ is Folder:")
 */
