
/** # ExtractAssets #
 * @brief Extract app assets to a local directory
 * ExtractAssets allows to extract folders and files from your compiled APK to the local storage. But it works for local DroidScript projects as well. When override is false, already existant files will be kept and not overridden.
 * $$ app.ExtractAssets(source, destination, overwrite, options) $$ 
 * @param {str_pth} source 
 * @param {str_pth} destination 
 * @param {bin} overwrite 
 * @param {str} options DoEvents:extract in background
*/


// ExtractAssets.txt --> All the sample codes

/** @Sample
<sample Extract File>
function OnStart()
{
    app.WriteFile( "myData.txt", "main: " + app.GetAppName() );
    app.ExtractAssets( "myData.txt", "/sdcard/myData.txt" );
    app.Alert(app.ReadFile("/sdcard/myData.txt"));
}
</sample>

<sample Extract Folder>
function OnStart()
{
    app.MakeFolder( app.GetAppPath() + "/myFolder" );
    app.WriteFile( app.GetAppPath() + "/myFolder/myData.txt", "main: " + app.GetAppName() );
    app.ExtractAssets( "myFolder", "/sdcard/myFolder" );
    app.Alert(app.ReadFile("/sdcard/myFolder/myData.txt"));
}
</sample>

 */

