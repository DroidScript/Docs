// ------------- HEADER SECTION -------------


/** # CreateEmail #
 * @abbrev mail
 * @brief Returns an Email object for user to send emails
 * The Email component allows us to send and receive emails without user interaction.
 * $$ mail = app.CreateEmail(account, password) $$
 * @param {str} account account email
 * @param {str} password account password
 * @returns dso-Email
*/




// ------------- VISIBLE METHODS & PROPERTIES -------------


/** @extern Batch */

/** @extern data */

/** ### GetType ###
 * Returns the control class name.
 * $$ mail.GetType() $$
 * @returns str-Email
 */


/** ### Receive ###
 * Start receiving emails from a given folder.
 * $$ mail.Receive(folder, maxCount, filter?) $$
 * @param {str} folder
 * @param {num_int} maxCount
 * @param {str} [filter]
 */


/** ### Send ###
 * Send an email to someone.
 * $$ mail.Send(subject, body, sender, recipients, attach?) $$
 * @param {str} subject
 * @param {str} body
 * @param {str} sender email address
 * @param {str} recipients email address
 * @param {str_pth} [attach]
 */


/** ### SetIMAP ###
 * @brief Set IMAP settings for receiving messages
 * Set IMAP or POP3 settings for receiving messages.
 * $$ mail.SetIMAP(server, port?) $$
 * @param {str} server imap/pop.gmail.com:google|imap/pop.mail.yahoo.com:yahoo|imap/pop.gmx.net:gmx
 * @param {num_int} [port] 993:imap|995:pop
 */


/** ### SetOnMessage ###
 * @brief Called when a message is received
 * %cb% a message is received.
 * $$ mail.SetOnMessage(callback) $$
 * @param {fnc_json} callback {"pNames":["data"],"pTypes":["obj-{ from:str_eml&comma; to:str_eml&comma; cc:str_eml&comma; subject:str&comma; body:str }"]}
 */


/** ### SetOnStatus ###
 * @brief Called when a status changed
 * %cb% a status changed.
 * $$ mail.SetOnStatus(callback) $$
 * @param {fnc_json} callback {"pNames":["status"],"pTypes":["str-Receive complete|Failed to receive emails: ...|Failed to send email: ..."]}
 */


/** ### SetSMTP ###
 * Set SMTP settings for sending messages.
 * $$ mail.SetSMTP(server, port) $$
 * @param {str} server smtp.gmail.com:google,smtp.mail.yahoo.com:yahoo,mail.gmx.net:gmx
 * @param {num_int} port 465:SSL|578:TLS (gmail&comma; yahoo)|587:gmx
 */



// ------------- SAMPLES -------------



/**
@sample Example
function OnStart()
{
    <b>email = app.CreateEmail( "mymail@gmail.com", "MyPass" );
    email.SetSMTP( "smtp.gmail.com", 465 );
    email.SetOnStatus( email_OnStatus );</b>

    app.ShowProgress( "Sending..." );
    email.Send( "My Subjewct", "My Content", "mymail@yahoo.com", "myothermail@gmail.com" );
}

function email_OnStatus( status )
{
    app.HideProgress();
    app.ShowPopup( status );
}
 */



/**
@sample Python Example
from native import app

def OnStart():
    email = app.CreateEmail( "mymail@gmail.com", "MyPass" )
    email.SetSMTP( "smtp.gmail.com", 465 )
    email.SetOnStatus( email_OnStatus )

    app.ShowProgress( "Sending..." )
    email.Send( "My Subjewct", "My Content", "mymail@yahoo.com", "myothermail@gmail.com" )

def email_OnStatus( status ):
    app.HideProgress()
    app.ShowPopup( status )
 */
