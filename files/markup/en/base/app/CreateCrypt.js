
/** # CreateCrypt #
 * @abbrev crp
 * The Crypt component is used to en- or decrypt a string with a given key or to create a hash of it.
 * $$ crp = app.CreateCrypt(options) $$ 
 * @param {str_com} options 
 * @returns dso-Crypt
*/


/** ## Methods ##
 * These are the methods available for CreateCrypt
 */


/** ### Batch ###
 * Batch method calls to be able to set all object's properties at once. * Note that you need to specify each parameter (use “” or <js nobox>null</js> to leave some out) * Inherited methods can be called by appending an underscore to the function name (ie. <js nobox>txt.Batch({ SetBackColor_: [“red”] })</js>
 * $$ crp.Batch(properties) $$
 * @param {obj} properties { COMMAND:lst
 */


/** ### Decrypt ###
 * Decrypt text with a key.
 * $$ crp.Decrypt(text, password) $$
 * @param {str} text 
 * @param {str} password 
 * @returns str
 */


/** ### Encrypt ###
 * Encrypt text with a key.
 * $$ crp.Encrypt(text, password) $$
 * @param {str} text 
 * @param {str} password 
 * @returns str
 */


/** ### GetType ###
 * Returns the control class name.
 * $$ crp.GetType() $$
 * @returns str-Crypt
 */


/** ### Hash ###
 * Build a hash of a string for one-way encryption.
 * $$ crp.Hash(text, mode, options) $$
 * @param {str} text 
 * @param {str} mode MD5|SHA|SHA
 * @param {str} options Wrap
 */


/** ### SetDescription ###
 * Set a control description for accessibility
 * $$ crp.SetDescription(desc) $$
 * @param {str} desc 
 */

// CreateCrypt.txt --> All the sample codes

/** @Sample
<sample Basic>
function OnStart()
{
    text = "Hello World!";
    <b>crpt = app.CreateCrypt();
    var encr = crpt.Encrypt(text, "key");
    var decr = crpt.Decrypt(encr, "key");
    var hash = crpt.Hash(text);</b>

    app.Alert(
        'text: "' + text + '"\n' +
        'encr: "' + encr + '"\n' +
        'decr: "' + decr + '"\n' +
        'hash: "' + hash + '"\n' ,
        "Data"
    );
}
</sample>

<sample Encrypt using device id>
function OnStart()
{
	crp = app.CreateCrypt();
	ShowDialog( "Hello World" );
}

function ShowDialog( data )
{
    app.ShowTextDialog("input text", data, OnText);
}

function OnText( text )
{
	var dlg = app.CreateYesNoDialog( "Choose option", "NoCancel" );
	dlg.SetOnTouch( OnAction );
	dlg.data.text = text;
    dlg.Show();
	dlg.SetButtonText( "Encrypt", "Decrypt" );
}

function OnAction( result )
{
    if( result == "Yes" )
    {
        result = crp.Encrypt( this.data.text, app.GetDeviceId() );
        ShowDialog( result );
    }
    else if( result == "No" )
    {
        result = crp.Decrypt( this.data.text, app.GetDeviceId() );
        ShowDialog( result );
    }
}
</sample>

 */

