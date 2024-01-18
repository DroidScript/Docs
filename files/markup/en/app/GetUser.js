// ------------- HEADER SECTION -------------


/** # GetUser #
 * @brief Get current user email
 * Returns the email-address of the currently active user account.
 *
 * See Also: @GetAccounts
 * $$ app.GetUser() $$
 * @returns str_acc
*/




// ------------- SAMPLES -------------



/**
@sample Show App Path
function OnStart()
{
    <b>var usr = app.GetPath();</b>
    app.Alert( usr, "Active User:" );
}
 */



/**
@sample Python Show App Path
from native import app

def OnStart():
    usr = app.GetPath()
    app.Alert(usr, "Active User:")
 */
