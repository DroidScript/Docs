// ------------- HEADER SECTION -------------


/** # UploadFile #
 * @brief Uploads a file to a server
 * Uploads a file to a server.
 * $$ app.UploadFile(url, file, name, callback) $$ 
 * @param {str_url} url 
 * @param {str_ptf} file 
 * @param {str} name 
 * @param {fnc_json} callback {}
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Upload File
function OnStart()
{
    var name = app.GetAppName() + ".js";
    var file = app.GetAppPath() + "/" + name;
	app.UploadFile( "https://yourwebsite.com/upload", file, name, OnUpload );
}

function OnUpload( error, file, result )
{
    if(error) app.Alert( "Upload Failed!" )
    else app.ShowPopup( "Response:\n" + result, "Upload Successful!" );
}
 */
    
            
    
/**
@sample Python Upload File
from native import app

def OnStart():
    global file
    name = app.GetAppName() + ".js"
    file = app.GetAppPath() + "/" + name
    app.UploadFile("https://yourwebsite.com/upload", file, name, OnUpload)

def OnUpload(error, file, result):
    if error:
        app.Alert("Upload Failed!")
    else:
        app.ShowPopup("Response:\n" + result, "Upload Successful!")
 */
    
            