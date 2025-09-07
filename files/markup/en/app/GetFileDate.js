// ------------- HEADER SECTION -------------


/** # GetFileDate #
 * @brief Get last modified date of a file or folder
 * GetFileDate returns a Date object containing the last modified date of a file or folder.
 * $$ app.GetFileDate(file) $$
 * @param {str_ptf} file
 * @returns jso-Date
*/




// ------------- SAMPLES -------------



/**
@sample Show /sdcard/ last modifies date
function OnStart()
{
    var date = app.GetFileDate("/sdcard/");
    app.Alert( date.toLocaleString() );
}
 */



/**
@sample Python Show /sdcard/ last modifies date
from native import app

def OnStart():
    date = app.GetFileDate("/sdcard/")
    app.Alert(date.toLocaleString())
 */
