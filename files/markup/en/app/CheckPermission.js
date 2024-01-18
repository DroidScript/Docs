// ------------- HEADER SECTION -------------


/** # CheckPermission #
 * @brief Checks if permission was granted
 * CheckPermission checks whether the permission of a particular component has been granted.
 * You can also test for individual “android.permission.\*” strings.
 *
 * See Also: @GetPermission @RemovePermission @ListPermissions
 * $$ app.CheckPermission(type) $$
 * @param {str} type Camera|Storage|ExtSDcard|Network|Notify|Location|SMS|Calendar|Body|Contacts|Record|Biometric|Phone|Accounts|License|android.permission.\*
 * @returns lst-["“Permissions”":str-not granted permissions ]
*/




// ------------- SAMPLES -------------



/**
@sample check and get permissions
function OnStart()
{
    <b>var check = app.CheckPermission( "Camera,ExtSDcard,Network,Storage" );</b>
    if( check )
    {
        app.GetPermission( check, PermissionResult );
    }
    else alert( "everything ok!" );
}

function PermissionResult( ungranted )
{
    alert( "ungranted: " + ungranted );
}
 */



/**
@sample Python check and get permissions
from native import app

def OnStart():
    <b>check = app.CheckPermission( "Camera,ExtSDcard,Network,Storage" )</b>
    if check:
        app.GetPermission( check, PermissionResult )
    else:
        app.Alert( "everything ok!" )

def PermissionResult( ungranted ):
    app.Alert( "ungranted: " + ungranted )
 */
