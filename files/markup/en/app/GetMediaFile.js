// ------------- HEADER SECTION ------------- 


/** # GetMediaFile #
 * @brief Get a path to an unambiguous media file
 * Returns a file path to a unique media file matching the format “/storage/emulated/0/Pictures/[**folder**]/**YYYYMMDD**_**hhmmSSsss**[**ext**]”. The folder for this file will be created automatically.
 * 
 * See Also: @CreateImage, @CreateCameraView
 * $$ app.GetMediaFile(folder, ext) $$ 
 * @param {str:app name} folder 
 * @param {str} ext 
 * @returns str_pth
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Get Media File
function OnStart()
{
    <b>var path = app.GetMediaFile("Hello World", ".png");</b>
    app.Alert( path );
}
 */
    
            
    
/**
@sample Python Get Media File
from native import app

def OnStart():
        path = app.GetMediaFile("Hello World", ".png")
        app.Alert(path)
 */
    
            
    
/**
@sample Python l

 */
    
            