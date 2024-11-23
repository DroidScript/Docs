// ------------- HEADER SECTION -------------


/** # HasExternalStorage #
 * @abbrev hasExtStorage
 * @brief Check for read/write external sdcard/partition
 * Check if the device has read/write external sdcard/partition.
 * $$ app.HasExternalStorage() $$
 * @returns bin
*/




// ------------- SAMPLES -------------



/**
@sample Check for external storage
function OnStart()
{
    <b>var hasExtStorage = app.HasExternalStorage();</b>
    app.Alert( hasExtStorage, "Has External Storage:" );
}
 */



/**
@sample Python Check for external storage
from native import app

def OnStart():
    hasExtStorage = app.HasExternalStorage()
    app.Alert(hasExtStorage, "Has External Storage:")
 */
