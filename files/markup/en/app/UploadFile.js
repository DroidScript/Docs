
/** # UploadFile #
 * Uploads a file to a server.
 * $$ app.UploadFile(url, file, name, callback) $$ 
 * @param {str_url} url 
 * @param {str_ptf} file 
 * @param {str} name 
*/


// UploadFile.txt --> All the sample codes

/** @Sample
<sample Upload File>
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
</sample>

 */

