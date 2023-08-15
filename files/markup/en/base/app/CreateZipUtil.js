
/** # CreateZipUtil #
 * @abbrev zip
 * The ZipUtil is handy for creating, editing and extracting zip files. You can even add files or texts to existing zip files, list their contents and extract single files from them.
 * $$ zip = app.CreateZipUtil(mode) $$ 
 * @param {str} mode 
 * @returns dso-ZipUtil
*/


/** ## Methods ##
 * These are the methods available for CreateZipUtil
 */


/** ### AddFile ###
 * Adds a file to the zip relative to the zip root.
 * $$ zip.AddFile(name, file) $$
 * @param {str:zip path} name 
 * @param {str_ptf} file 
 */


/** ### AddText ###
 * Adds some text to the zip relative to the zip root.
 * $$ zip.AddText(name, text) $$
 * @param {str:zip path} name 
 * @param {str} text 
 */


/** ### Batch ###
 * Batch method calls to be able to set all object's properties at once. * Note that you need to specify each parameter (use “” or <js nobox>null</js> to leave some out) * Inherited methods can be called by appending an underscore to the function name (ie. <js nobox>txt.Batch({ SetBackColor_: [“red”] })</js>
 * $$ zip.Batch(properties) $$
 * @param {obj} properties { COMMAND:lst
 */


/** ### Close ###
 * Closes the zip util.
 * $$ zip.Close() $$
 */


/** ### Create ###
 * Creates a new zip file.
 * $$ zip.Create(file) $$
 * @param {str_ptf} file 
 */


/** ### CreateDebugKey ###
 * Creates a Debuk keystore file
 * $$ zip.CreateDebugKey(file) $$
 * @param {str_ptf} file debug.keystore
 */


/** ### CreateKey ###
 * Creates a user keystore file
 * $$ zip.CreateKey(file, password, name, organization) $$
 * @param {str_ptf} file user.keystore
 * @param {str} password 
 * @param {str} name 
 * @param {str} organization 
 */


/** ### Extract ###
 * Extract a single file from the zip to a gived destination.
 * $$ zip.Extract(name, file) $$
 * @param {str:zip path} name 
 * @param {str_ptf} file 
 */


/** ### GetType ###
 * Returns the control class name.
 * $$ zip.GetType() $$
 * @returns str-ZipUtil
 */


/** ### List ###
 * Returns a list of the files contained in the zip.
 * $$ zip.List(path) $$
 * @param {str_pth} path 
 * @returns str_com
 */


/** ### Open ###
 * Opens an already existing zip file.
 * $$ zip.Open(file) $$
 * @param {str_ptf} file 
 */


/** ### Sign ###
 * Signs and checks the zip against the keystore file and returns if it is ok.
 * $$ zip.Sign(fileIn, fileOut, keyStore, password) $$
 * @param {str_ptf} fileIn 
 * @param {str_ptf} fileOut 
 * @param {str_pth} keyStore 
 * @param {str} password 
 * @returns bin
 */


/** ### UpdateManifest ###
 * Updates the zip manifest
 * $$ zip.UpdateManifest(fileIn, fileOut, packageName, appName, permissions, options) $$
 * @param {str_ptf} fileIn 
 * @param {str_ptf} fileOut 
 * @param {str} packageName 
 * @param {str} appName 
 * @param {str_com} permissions 
 * @param {str_com} options Launch,Debug
 */

// CreateZipUtil.txt --> All the sample codes

/** @Sample
<sample List Contents>
function OnStart()
{
	var name = app.GetAppName();
	var file = "/sdcard/" + name + ".zip";

	var zip = app.CreateZipUtil();
	zip.Open( file );
	var list = zip.List("").split(",");
	app.Alert(list.join(",\n"));
	zip.Close();
}
</sample>

<sample Compress>
function OnStart()
{
	var name = app.GetAppName();
	var fldr = app.GetPath() + "/" + name;
	var file = "/sdcard/" + name + ".zip";
	app.ShowProgress();

	var zip = app.CreateZipUtil();
	zip.Create( file );
	AddFolder( zip, name, fldr );
	zip.Close();

	app.HideProgress();
	app.ShowPopup( "saved to " + file );
}

<b>function AddFolder( zip, name, fldr )
{
	var list = app.ListFolder( fldr,"");
	for( var i = 0; i < list.length; i++ )
	{
		var title = list[i];
		if( !app.IsFolder( fldr + "/" + title ) )
			zip.AddFile( name + "/" + title, fldr + "/" + title );
		else
			AddFolder( zip, name + "/" + title, fldr + "/"+title );
	}
}</b>
</sample>

 */

