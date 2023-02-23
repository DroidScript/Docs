
/** # CreateDownloader #
 * @abbrev dwn
 * 
 * $$ dwn = app.CreateDownloader(options) $$ 
 * @param {str_com} options NoDialog|Light
 * @returns dso-Downloader
*/


// CreateDownloader.md --> Complete documentation. Sample codes is at the bottom of this file.

/** @Description
The Downloader component can be used to download a file straight from the internet to your phone or tablet's local storage. You can download a file with the **Download** method which accepts a _source url_ and a _target directory_: <js>dwn.Download( srcFileUrl, targetDir );</js>

Once the Download method has been called, it show a progress bar with the current download progress. But you can disable this behavior with the “NoDialog” **option**.

If you want to know when the download process has finished (or failed) you can define a callback functioni with the **SetOnComplete** method: <js>dload.SetOnComplete( callback );</js>

 */

/** ## Methods ##
 * These are the methods available for CreateDownloader
 */


/** ### Batch ###
 * Batch method calls to be able to set all object's properties at once. * Note that you need to specify each parameter (use “” or <js nobox>null</js> to leave some out) * Inherited methods can be called by appending an underscore to the function name (ie. <js nobox>txt.Batch({ SetBackColor_: [“red”] })</js>
 * $$ dwn.Batch(properties) $$
 * @param {obj} properties { COMMAND:lst
 */


/** ### Download ###
 * Start downloading one or multiple files.
 * $$ dwn.Download(url, fldr, name, headers) $$
 * @param {str_url||lst} url [urls:str_url]
 * @param {str_pth} fldr 
 * @param {str} name 
 * @param {str} headers 
 */


/** ### GetProgress ###
 * Returns the current download progress.
 * $$ dwn.GetProgress() $$
 * @returns num_frc
 */


/** ### GetSize ###
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
 * Checks if all downloads are completed.
 * $$ dwn.IsComplete() $$
 * @returns bin
 */


/** ### Method ###
 * Allows access to other functions defined on the object in Java via reflection. *  * <premium>
 * $$ dwn.Method(name, types, p1, p2, p3, p4) $$
 * @param {str} name 
 * @param {lst} types boolean,char,byte,short,int,long,float,double,String,CharSequence,...
 * @param {str} p1 
 * @param {str} p2 
 * @param {str} p3 
 * @param {str} p4 
 * @returns all
 */


/** ### SetOnCancel ###
 * %cb% download is cancelled.
 * $$ dwn.SetOnCancel(callback) $$
 * @param {fnc_json} callback {"pNames":["file"],"pTypes":["str_pth"]}
 */


/** ### SetOnComplete ###
 * %cb% all downloads are finished.
 * $$ dwn.SetOnComplete(callback) $$
 * @param {fnc_json} callback {}
 */


/** ### SetOnDownload ###
 * %cb% a file is download.
 * $$ dwn.SetOnDownload(callback) $$
 * @param {fnc_json} callback {"pNames":["path"],"pTypes":["str_pth"]}
 */


/** ### SetOnError ###
 * %cb% an error occurred while downloading a file.
 * $$ dwn.SetOnError(callback) $$
 * @param {fnc_json} callback {"pNames":["error"],"pTypes":["str"]}
 */

// CreateDownloader.txt --> All the sample codes

/** @Sample
<sample Example>
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
</sample>

 */

