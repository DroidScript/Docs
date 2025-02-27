// ------------- HEADER SECTION -------------


/** # GetShortcuts #
 * @brief Get associated app shortcuts
 * Returns list of shortcuts associated with current app. Might return null when the feature is not supported.
 *
 * See also: @CreateShortcut
 * $$ app.GetShortcuts() $$
 * @returns lst
*/




// ------------- SAMPLES -------------



/**
@sample Show Shortcuts
function OnStart()
{
    var list = app.GetShortcuts();
    if (list == null) app.Alert( "Unsupported" );
    else app.Alert( list, "" );
}
 */



/**
@sample Python Show Shortcuts
from native import app

def OnStart():
    list = app.GetShortcuts()
    if list == None: app.Alert( "Unsupported" )
    else: app.Alert( list, "" )
 */
