// ------------- HEADER SECTION ------------- 


/** # DeleteFile #
 * @brief Deletes a file
 * DeleteFile deletes a given file from the filesystem. This makes it hard to restore it!
 * 
 * See Also: @WriteFile, @RenameFile, @FileExists
 * $$ app.DeleteFile(file) $$ 
 * @param {str_ptf} file 
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Delete created file
function OnStart()
{
    app.WriteFile( "myFile.txt", "Bye World!\n", "Append" );

    <b>app.DeleteFile("myFile.txt");</b>

	if(app.FileExists("myFile.txt"))
	    app.ShowPopup("myFile was not deleted!");
    else
	    app.ShowPopup("myFile was deleted!");
}
 */
    
            
    
/**
@sample Python 
from native import app

def OnStart():
    app.WriteFile( "myFile.txt", "Bye World!\n", "Append" )

    app.DeleteFile("myFile.txt")

    if app.FileExists("myFile.txt"):
        app.ShowPopup("myFile was not deleted!")
    else:
        app.ShowPopup("myFile was deleted!")
 */
    
            