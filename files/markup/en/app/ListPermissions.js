// ------------- HEADER SECTION ------------- 


/** # ListPermissions #
 * Returns a list of granted permissions
 * $$ app.ListPermissions(type) $$ 
 * @param {str} type storage
 * @returns lst-[perm:str_uri]
*/




// ------------- SAMPLES ------------- 


    
/**
@sample List Permissions
function OnStart(perms)
{
    var perms = app.ListPermissions("storage");
    app.Alert(perms, "Permissions:");
}
 */
    
            