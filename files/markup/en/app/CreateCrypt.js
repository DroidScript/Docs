// ------------- HEADER SECTION ------------- 


/** # CreateCrypt #
 * @abbrev crp
 * @brief Returns a new Crypt object to encrypt or decrypt a string with a given key or create a hash of it
 * The Crypt component is used to en- or decrypt a string with a given key or to create a hash of it.
 * $$ crp = app.CreateCrypt(options) $$ 
 * @param {str_com} options 
 * @returns dso-Crypt
*/




// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** @extern Batch */

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
 * @brief Get a hash from a string
 * Build a hash of a string for one-way encryption.
 * $$ crp.Hash(text, mode, options) $$
 * @param {str} text 
 * @param {str} mode MD5|SHA|SHA-1|SHA-224|SHA-256|SHA-384|SHA-512
 * @param {str} options Wrap
 */


/** @extern SetDescription */


// ------------- SAMPLES ------------- 


    
/**
@sample Basic
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
 */
    
            
    
/**
@sample Encrypt using device id
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
 */
    
            
    
/**
@sample Python Basic
from native import app

def OnStart():
    text = "Hello World!"
    crpt = app.CreateCrypt()
    encr = crpt.Encrypt(text, "key")
    decr = crpt.Decrypt(encr, "key")
    hash = crpt.Hash(text)

    app.Alert(
        'text: "' + text + '"\n' +
        'encr: "' + encr + '"\n' +
        'decr: "' + decr + '"\n' +
        'hash: "' + hash + '"\n' ,
        "Data"
    )
 */
    
            
    
/**
@sample Python Encrypt using device id
from native import app

def OnStart():
    global crp
    crp = app.CreateCrypt()
    ShowDialog("Hello World")

def ShowDialog(data):
    app.ShowTextDialog("input text", data, OnText)

def OnText(text):
    global data
    dlg = app.CreateYesNoDialog("Choose option", "NoCancel")
    dlg.SetOnTouch(OnAction)
    dlg.data = {"text": text}
    dlg.Show()
    dlg.SetButtonText("Encrypt", "Decrypt")

def OnAction(result):
    if result == "Yes":
        result = crp.Encrypt(this.data["text"], app.GetDeviceId())
        ShowDialog(result)
    elif result == "No":
        result = crp.Decrypt(this.data["text"], app.GetDeviceId())
        ShowDialog(result)
 */
    
            