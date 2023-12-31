// ------------- HEADER SECTION -------------


/** # ZipFile #
 * @brief Compress a file to zip
 * Compresses a local file to a zip file.
 * 
 * See Also: @ZipFolder
 * $$ app.ZipFile(source, destination, options) $$ 
 * @param {str_pth} source 
 * @param {str_pth} destination 
 * @param {str} options spk:Create SPK from File
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Zip File
function OnStart()
{
    var file = "/sdcard/DroidScript/Hello World/Hello World.js";
	app.ZipFile( file, file + ".zip" );
	app.ShowPopup( "Compressed to " + file + ".zip" )
}
 */
    
            
    
/**
@sample Python Zip File
from native import app

def OnStart():
    file = "/sdcard/DroidScript/Hello World/Hello World.js"
    app.ZipFile( file, file + ".zip" )
    app.ShowPopup( "Compressed to " + file + ".zip" )
 */
    
            