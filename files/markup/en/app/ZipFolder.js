// ------------- HEADER SECTION ------------- 


/** # ZipFolder #
 * @brief Compress a folder to zip
 * Recursively compresses a local folder to a zip file.
 * 
 * See Also: @ZipFile, @UnzipFile
 * $$ app.ZipFolder(source, destination, options) $$ 
 * @param {str_pth} source 
 * @param {str_pth} destination 
 * @param {str} options spk:Create SPK from DS project folder
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Zip Folder
function OnStart()
{
    var folder = "/sdcard/DroidScript/Hello World";
	app.ZipFolder( folder, folder + ".zip" );
	app.ShowPopup( "Compressed to " + folder + ".zip" );
}
 */
    
            
    
/**
@sample Python 
from native import app

def OnStart():
    folder = "/sdcard/DroidScript/Hello World"
    app.ZipFolder(folder, folder + ".zip")
    app.ShowPopup("Compressed to " + folder + ".zip")
 */
    
            