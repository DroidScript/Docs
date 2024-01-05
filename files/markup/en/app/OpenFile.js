// ------------- HEADER SECTION -------------


/** # OpenFile #
 * @brief Allow user to open a file with an external app
 * Allows the user to open a file with an external application on the device. The **choose** parameter shows the user a custom message in the choose dialog.
 * 
 * See also: @SendFile.
 * $$ app.OpenFile(file, type, choose) $$ 
 * @param {str_ptf} file 
 * @param {str_mim} type 
 * @param {str} choose 
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Example
function OnStart()
{
	 app.WriteFile( "/sdcard/test.txt", "Hello" );
	 <b>app.OpenFile( "/sdcard/test.txt", "text/plain", "Choose Editor" );</b>
}
 */
    
            
    
/**
@sample Python Example
from native import app

def OnStart():
    app.WriteFile("/sdcard/test.txt", "Hello")
    app.OpenFile("/sdcard/test.txt", "text/plain", "Choose Editor")
 */
    
            