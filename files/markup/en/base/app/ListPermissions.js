
/** # ListPermissions #
 * Returns a list of granted permissions
 * $$ app.ListPermissions(type) $$ 
 * @param {str} type storage
 * @returns lst-[perm:str_uri]
*/


// ListPermissions.txt --> All the sample codes

/** @Sample
<sample List Permissions>
function OnStart(perms)
{
    var perms = app.ListPermissions("storage");
    app.Alert(perms, "Permissions:");
}
</sample>
 */

