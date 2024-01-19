// ------------- HEADER SECTION -------------


/** # UnzipFile #
 * @brief Unzip a zip file
 * Extracts the contents of a zip file to a given target folder.
 *
 * See Also: @ZipFolder, @ZipFile
 * $$ app.UnzipFile(source, destination, options?) $$
 * @param {str_pth} source
 * @param {str_pth} destination
 * @param {str} [options] spk:Extract SPK as DS project folder
*/




// ------------- SAMPLES -------------



/**
@sample Unzip File
function OnStart()
{
	<b>app.UnzipFile( "yourfile.zip", "/sdcard/Extracted" );</b>
}
 */



/**
@sample Python Unzip File
from native import app

def OnStart():
    <b>app.UnzipFile( "yourfile.zip", "/sdcard/Extracted" )</b>
 */
