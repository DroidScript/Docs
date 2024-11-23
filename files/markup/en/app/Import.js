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
