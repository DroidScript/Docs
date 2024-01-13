// ------------- HEADER SECTION -------------


/** # SendSMS #
 * @brief Open the SMS app and autofill fields
 * Send an SMS to someone using the default SMS application. The passed argumets will be auto-filled or requested by the SMS app otherwise. %c
 * 
 * See Also: @SendMail, @SendText, @SendFile
 * $$ app.SendSMS(msg?, number?) $$ 
 * @param {str} [msg] 
 * @param {str_num} [number] 
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Send SMS
function OnStart()
{
    app.SendSMS( "Hello World!", "0123456789" );
}
 */
    
            
    
/**
@sample Python Send SMS
from native import app

def OnStart():
    app.SendSMS( "Hello World!", "0123456789" )
 */
    
            