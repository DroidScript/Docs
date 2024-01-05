// ------------- HEADER SECTION -------------


/** # GetFreeSpace #
 * @brief Get remaining storage size
 * Returns the free space of the internal or external storage in GigaBytes.
 * $$ app.GetFreeSpace(mode) $$ 
 * @param {str} mode internal|external
 * @returns num_gbt
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Show remaining internal and external storage
function OnStart()
{
    <b>var intSize = Math.round(app.GetFreeSpace("internal") * 1024);
    var extSize = Math.round(app.GetFreeSpace("external") * 1024);</b>

    var text =
        "internal: " + intSize + " MB\n" +
        "external: " + extSize + " MB";

    app.Alert( text );
}
 */
    
            
    
/**
@sample Python Show remaining internal and external storage
from native import app

def OnStart():
    intSize = int(app.GetFreeSpace("internal") * 1024)
    extSize = int(app.GetFreeSpace("external") * 1024)

    text = "internal: " + str(intSize) + " MB\n" + "external: " + str(extSize) + " MB"

    app.Alert(text)
 */
    
            