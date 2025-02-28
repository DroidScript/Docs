// ------------- HEADER SECTION -------------


/** # Script #
 * @brief imports an external JavaScript file
 * $$ app.Import(name, file) $$
 * @param {str} name Variable name that will reference the imported module
 * @param {str_ptf} file Relative path to the javascript file
*/


// ------------- LONG DESCRIPTION -------------

/** @Description
Imports a JavaScript module and assigns it to a specified variable name. The module must have a default export.

See Also: @Include
 */


// ------------- SAMPLES -------------


/**
@sample Import pocketbase
app.Import( "PocketBase", "https://cdn.jsdelivr.net/gh/pocketbase/js-sdk/dist/pocketbase.es.js" )

async function OnStart()
{
    try {
        var pb = new PocketBase('https://${username}-db.droidscript.cloud')
   
        const records = await pb.collection('people').getFullList({
            sort: '-created',
        })
        alert( JSON.stringify(records) )
    }
    catch( e ) {
        console.error( e )
    }
}
 */

/**
@sample Python Import pocketbase
from native import app
from browser import aio
import json

app.Import( "PocketBase", "https://cdn.jsdelivr.net/gh/pocketbase/js-sdk/dist/pocketbase.es.js" )

def OnStart():
    aio.run(list())

async def list():
    try:
        pb = PocketBase("https://{username}-db.droidscript.cloud")

        records = await pb.collection('people').getFullList({"sort": '-created'})
        app.Alert( json.dumps(records) )
    except Exception as e:
        print( e )
 */

