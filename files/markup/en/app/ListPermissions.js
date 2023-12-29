// ------------- HEADER SECTION ------------- 


/** # ListPermissions #
 * Returns a list of granted permissions
 * 
 * See Also: @GetPermission @CheckPermission @RemovePermission
 * $$ app.ListPermissions(type) $$ 
 * @param {str} type Camera|Storage|ExtSDcard|Network|Notify|Location|SMS|Calendar|Body|Contacts|Record|Biometric|Phone|Accounts|License
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
    
            
    
/**
@sample Python List Permissions
from native import app

def OnStart():
    perms = app.ListPermissions("storage")
    app.Alert(perms, "Permissions:")
 */
    
            