// ------------- HEADER SECTION -------------


/** # GetDatabaseFolder #
 * @brief Get apps database folder
 * Returns the path to the database folder of the app. An example pattern is “/data/data/packageName/databases”.
 *
 * See Also: @OpenDatabase
 * $$ app.GetDatabaseFolder() $$
 * @returns str_pth
*/




// ------------- SAMPLES -------------



/**
@sample Show
function OnStart()
{
    <b>var dir = app.GetDatabaseFolder();</b>
    app.Alert( dir );
}
 */



/**
@sample Python Show
from native import app

def OnStart():
    dir = app.GetDatabaseFolder()
    app.Alert(dir)
 */
