// ------------- HEADER SECTION -------------


/** # FileExists #
 * @brief Checks if the file exists
 * FileExists Checks if a given file exists in your filesystem or not.
 * 
 * See Also: @WriteFile, @CopyFile, @RenameFile
 * $$ app.FileExists(file) $$ 
 * @param {str_ptf} file 
 * @returns bin
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Example
function OnStart()
{
    <b>if(app.FileExists("myFile.txt")) {
        app.ShowPopup("myFile exists!");
    } else {
        app.ShowPopup("myFile does not exist!");
    }</b>
}
 */
    
            
    
/**
@sample Python Example
from native import app

def OnStart():
    if app.FileExists("myFile.txt"):
        app.ShowPopup("myFile exists!")
    else:
        app.ShowPopup("myFile does not exist!")
 */
    
            