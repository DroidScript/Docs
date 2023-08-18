
/** # GetPermission #

 * GetPermission accepts a list of 'dangerus' classified permissions and returns a list of ungranted permissions in the **callback** function, or in case of only “ExtSDCard” the path URI of the user-selected folder.
 * 
 * See Also: @CheckPermission
 * $$ app.GetPermission(type, callback) $$ 
 * @param {str_com} type Camera|ExtSDcard|External|Internal|Network|Storage|Overlay|SMS|Location|Calendar|Body|Contacts|Record|Phone|Biometric|Accounts|License|usb\:<pid:num>
*/


// GetPermission.txt --> All the sample codes

/** @Sample
<sample Get ExtSDCard Permission and User-Selected Path>
function OnStart()
{
    <b>var path = app.GetPermission( "extsdcard", OnPermission );</b>
}

function OnPermission( pathURI )
{
    app.Alert( pathURI );
}
</sample>

 */

