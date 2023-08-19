// ------------- HEADER SECTION ------------- 


/** # SendFile #
 * @brief Send a file to a remote target
 * 
 * $$ app.SendFile(file, subject, text, choose) $$ 
 * @param {str_pfa} file 
 * @param {str} subject 
 * @param {str} text 
 * @param {str} choose 
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Send a file to a remote target, ie. via Email. %c The **subject** and **text** arguments will be auto filled and the **choose** text will be displayed when the user selects the target app. Default may be something like _'Complete action using'_.

See Also: @SendImage, @SendText, @SendMail

 */



// ------------- SAMPLES ------------- 


    
/**
@sample Send File
function OnStart()
{
    app.WriteFile( "file.txt", "Hello World" );
	<b>app.SendFile( app.GetAppPath() + "/file.txt", "Shared File", app.GetUser() + " shared file.txt with you" );</b>
}
 */
    
            