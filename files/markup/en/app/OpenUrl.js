// ------------- HEADER SECTION -------------


/** # OpenUrl #
 * @brief Allow user to open an url with an external app
 * Allows the user to open an url with an external application on the device. The **choose** parameter shows the user a custom message in the choose dialog.
 * 
 * See Also: @CreateWebView, @OpenFile
 * $$ app.OpenUrl(url, type?, choose?) $$ 
 * @param {str_url} url 
 * @param {str_mim} [type] 
 * @param {str} [choose] 
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Example
function OnStart()
{
	 <b>app.OpenUrl( "http://droidscript.org" );</b>
}
 */
    
            
    
/**
@sample Python Example
from native import app

def OnStart():
    app.OpenUrl("http://droidscript.org")
 */
    
            