// ------------- HEADER SECTION -------------


/** # CreateZipUtil #
 * @abbrev zip
 * @brief Returns a new ZipUtil object
 * The ZipUtil is handy for creating, editing and extracting zip files. You can even add files or texts to existing zip files, list their contents and extract single files from them.
 * $$ zip = app.CreateZipUtil(mode) $$
 * @param {str} mode
 * @returns dso-ZipUtil
*/




// ------------- VISIBLE METHODS & PROPERTIES -------------


/** ### AddFile ###
 * @brief Add file to zip
 * Adds a file to the zip relative to the zip root.
 * $$ zip.AddFile(name, file) $$
 * @param {str:zip path} name
 * @param {str_ptf} file
 */


/** ### AddText ###
 * @brief Add text to the zip
 * Adds some text to the zip relative to the zip root.
 * $$ zip.AddText(name, text) $$
 * @param {str:zip path} name
 * @param {str} text
 */


/** @extern Batch */

/** @extern data */

/** ### Close ###
 * @brief Close ZipUtil
 * Closes the zip util.
 * $$ zip.Close() $$
 */


/** ### Create ###
 * @brief Create zip file
 * Creates a new zip file.
 * $$ zip.Create(file) $$
 * @param {str_ptf} file
 * @returns nil
 */


/** ### CreateDebugKey ###
 * @brief Create debug keystore file
 * Creates a Debuk keystore file
 * $$ zip.CreateDebugKey(file) $$
 * @param {str_ptf} file debug.keystore
 * @returns nil
 */


/** ### CreateKey ###
 * @brief Create a user keystore file
 * Creates a user keystore file
 * $$ zip.CreateKey(file, password, name, organization) $$
 * @param {str_ptf} file user.keystore
 * @param {str} password
 * @param {str} name
 * @param {str} organization
 * @returns nil
 */


/** ### Extract ###
 * @brief Extract file from zip
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
 * @brief Get contained file list
 * Returns a list of the files contained in the zip.
 * $$ zip.List(path) $$
 * @param {str_pth} path
 * @returns str_com
 */


/** ### Open ###
 * @brief Open existing zip
 * Opens an already existing zip file.
 * $$ zip.Open(file) $$
 * @param {str_ptf} file
 */


/** ### Sign ###
 * @brief Sign and check zip against keystore file
 * Signs and checks the zip against the keystore file and returns if it is ok.
 * $$ zip.Sign(fileIn, fileOut, keyStore, password) $$
 * @param {str_ptf} fileIn
 * @param {str_ptf} fileOut
 * @param {str_pth} keyStore
 * @param {str} password
 * @returns bin
 */


/** ### UpdateManifest ###
 * @brief Update zip manifest
 * Updates the zip manifest
 * $$ zip.UpdateManifest(fileIn, fileOut, packageName, appName, permissions?, options?) $$
 * @param {str_ptf} fileIn
 * @param {str_ptf} fileOut
 * @param {str} packageName
 * @param {str} appName
 * @param {str_com} [permissions]
 * @param {str_com} [options] Launch,Debug
 */



// ------------- SAMPLES -------------



/**
@sample List Contents
function OnStart()
{
	var name = app.GetAppName();
	var file = "/sdcard/DroidScript/" + name + ".zip";

	app.ZipFolder( "/sdcard/DroidScript/" + name, file )

	var zip = app.CreateZipUtil();
	zip.Open( file );

	var list = zip.List("").split(",");
	app.Alert(list.join(",\n"));

	zip.Close();
}
 */



/**
@sample Compress
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
 */



/**
@sample Python List Contents
from native import app

def OnStart():
    name = app.GetAppName()
    file = "/sdcard/DroidScript/" + name + ".zip"
    
	# Zip the current project folder
	# and add it to the same folder.
    app.ZipFolder( "/sdcard/DroidScript/" + name, file )

    zip = app.CreateZipUtil()
    zip.Open(file)
    zip.Close()
    
    list = zip.List("").split(",")
    app.Alert("\n".join(list))
*/

/**
@sample Python Compress
from native import app

def OnStart():
	global name, fldr, zip
	name = app.GetAppName()
	fldr = app.GetPath() + "/" + name
	file = "/sdcard/" + name + ".zip"
	app.ShowProgress()

	zip = app.CreateZipUtil()
	zip.Create(file)
	AddFolder(zip, name, fldr)
	zip.Close()

	app.HideProgress()
	app.ShowPopup("saved to " + file)

<b>def AddFolder(zip, name, fldr):
	list = app.ListFolder(fldr, "")
	for i in range(len(list)):
		title = list[i]
		if not app.IsFolder(fldr + "/" + title):
			zip.AddFile(name + "/" + title, fldr + "/" + title)
		else:
			AddFolder(zip, name + "/" + title, fldr + "/" + title)
</b>
 */
