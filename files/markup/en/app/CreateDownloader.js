// ------------- HEADER SECTION -------------


/** # CreateDownloader #
 * @abbrev dwn
 * @brief Returns a new Downloader object
 * 
 * $$ dwn = app.CreateDownloader(options?) $$ 
 * @param {str_com} [options] NoDialog|Light
 * @returns dso-Downloader
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
The Downloader component can be used to download a file straight from the internet to your phone or tablet's local storage. You can download a file with the **Download** method which accepts a _source url_ and a _target directory_: <js>dwn.Download( srcFileUrl, targetDir );</js>

Once the Download method has been called, it show a progress bar with the current download progress. But you can disable this behavior with the “NoDialog” **option**.

If you want to know when the download process has finished (or failed) you can define a callback functioni with the **SetOnComplete** method: <js>dload.SetOnComplete( callback );</js>
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** @extern Batch */

/** ### Download ###
 * @brief Download file(s)
 * Start downloading one or multiple files.
 * $$ dwn.Download(url, fldr, name?, headers?) $$
 * @param {str_url||lst} url [urls:str_url]
 * @param {str_pth} fldr must not have a trailing slash
 * @param {str} [name] 
 * @param {str} [headers] 
 */


/** ### GetProgress ###
 * @brief Get current download progress
 * Returns the current download progress.
 * $$ dwn.GetProgress() $$
 * @returns num_frc
 */


/** ### GetSize ###
 * @brief Get target download size in bytes
 * Returns the target download size in bytes.
 * $$ dwn.GetSize() $$
 * @returns num_byt
 */


/** ### GetType ###
 * Returns the control class name.
 * $$ dwn.GetType() $$
 * @returns str-Downloader
 */


/** ### IsComplete ###
 * @brief Get download completed state
 * Checks if all downloads are completed.
 * $$ dwn.IsComplete() $$
 * @returns bin
 */


/** @extern Method */

/** ### SetOnCancel ###
 * @brief Called when download is cancelled
 * %cb% download is cancelled.
 * $$ dwn.SetOnCancel(callback) $$
 * @param {fnc_json} callback {"pNames":["file"],"pTypes":["str_pth"]}
 */


/** ### SetOnComplete ###
 * @brief Called when downloads are finished
 * %cb% all downloads are finished.
 * $$ dwn.SetOnComplete(callback) $$
 * @param {fnc_json} callback {}
 */


/** ### SetOnDownload ###
 * @brief Called when a file is downloaded
 * %cb% a file is download.
 * $$ dwn.SetOnDownload(callback) $$
 * @param {fnc_json} callback {"pNames":["path"],"pTypes":["str_pth"]}
 */


/** ### SetOnError ###
 * @brief Called when an error occurred while downloading
 * %cb% an error occurred while downloading a file.
 * $$ dwn.SetOnError(callback) $$
 * @param {fnc_json} callback {"pNames":["error"],"pTypes":["str"]}
 */



// ------------- SAMPLES ------------- 


    
/**
@sample Example
function OnStart()
{
	var srcFileUrl = "http://sgarman.net/downloadable.txt";
	var targetDir = "/sdcard";

	<b>dload = app.CreateDownloader();
	dload.SetOnComplete( dload_OnComplete );
	dload.Download( srcFileUrl, targetDir );</b>
}

function dload_OnComplete()
{
	app.ShowPopup("Download complete");
}
 */
    
            
    
/**
@sample Python Example
from native import app

def OnStart():
    srcFileUrl = "http://sgarman.net/downloadable.txt"
    targetDir = "/sdcard"

    dload = app.CreateDownloader()
    dload.SetOnComplete( dload_OnComplete )
    dload.Download( srcFileUrl, targetDir )

def dload_OnComplete():
    app.ShowPopup("Download complete")
 */
    
            