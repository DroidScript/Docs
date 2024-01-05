// ------------- HEADER SECTION -------------


/** # CopyFile #
 * @brief Copies a file to a given destination
 * CopyFile copies a file to a given destination. The target must locate to the actual target file, not the folder. An existing file will be overridden.
 * 
 * See Also: @RenameFile, @DeleteFile, @FileExists
 * $$ app.CopyFile(source, destination) $$ 
 * @param {str_pth} source 
 * @param {str_pth} destination 
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Copy file
function OnStart()
{
    app.WriteFile( "myFile.txt", "Hello World from Write\n", "Append" );

    <b>app.CopyFile("myFile.txt", "/sdcard/myFile.txt");</b>

	if(app.FolderExists("/sdcard/myFile.txt"))
	    app.ShowPopup("myFile exists in /sdcard/!");
    else
	    app.ShowPopup("myFile does not exist in /sdcard/!");
}
 */
    
            
    
/**
@sample Python Copy file
from native import app

def OnStart():
    app.WriteFile( "myFile.txt", "Hello World from Write\n", "Append" )

    app.CopyFile("myFile.txt", "/sdcard/myFile.txt")

    if app.FolderExists("/sdcard/myFile.txt"):
        app.ShowPopup("myFile exists in /sdcard/!")
    else:
        app.ShowPopup("myFile does not exist in /sdcard/!")
 */
    
            