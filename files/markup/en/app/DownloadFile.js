// ------------- HEADER SECTION ------------- 


/** # DownloadFile #
 * @brief Download a file with Androids download manager
 * 
 * $$ app.DownloadFile(source, destination, title, description, options) $$ 
 * @param {str} source 
 * @param {str_pth} destination 
 * @param {str} title 
 * @param {str} description 
 * @param {str} options NoDialog
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Downloads a file using the Android's built-in download manager which creates a notification with the current download status and a custom title and description.

In some cases there seems to appear a dialog - you can prevent that using the _NoDialog_ option.

With this methof you won't be able to get a OnComplete callback - if you need that check out @CreateDownloader.
 */



// ------------- SAMPLES ------------- 


    
/**
@sample Downloading the DroidScript logo
function OnStart()
{
    var src = "http://www.androidscript.org/droidscriptwp/wp-content/uploads/2015/10/droidscript_logo_64x64.png";
    var dst = "/sdcard/Downloads/logo.png";
    app.DownloadFile(src, dst, "MyTitle", "My Description", "NoDialog");
}
 */
    
            
    
/**
@sample Download to external storage
function OnStart()
{
    var src = "http://www.androidscript.org/droidscriptwp/wp-content/uploads/2015/10/droidscript_logo_64x64.png";
    var dst = app.GetExternalFolder() + "/Downloads/logo.png";
    app.DownloadFile(src, dst, "MyTitle", "My Description", "NoDialog");
}
 */
    
            
    
/**
@sample Python Get current GPS location
from native import app

def OnStart():
    app.EnableGps()

    app.WaitForGps("WaitForGps", 10)

def WaitForGps():
    lat = app.GetGpsLatitude()
    lon = app.GetGpsLongitude()

    app.ShowPopup("Latitude: " + lat + ", Longitude: " + lon)
 */
    
            