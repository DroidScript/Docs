
/** # GetMediaFile #
 * Returns a file path to a unique media file matching the format “/storage/emulated/0/Pictures/[**folder**]/**YYYYMMDD**_**hhmmSSsss**[**ext**]”. The folder for this file will be created automatically.
 * 
 * See Also: @CreateImage, @CreateCameraView
 * $$ app.GetMediaFile(folder, ext) $$ 
 * @param {str:app name} folder 
 * @param {str} ext 
 * @returns str_pth
*/


// GetMediaFile.txt --> All the sample codes

/** @Sample
<sample Get Media File>
function OnStart()
{
    <b>var path = app.GetMediaFile("Hello World", ".png");</b>
    app.Alert( path );
}
</sample>

 */

