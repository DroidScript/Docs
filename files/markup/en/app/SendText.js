// ------------- HEADER SECTION ------------- 


/** # SendText #
 * @brief Share text between apps
 * 
 * $$ app.SendText(text, subject, choose) $$ 
 * @param {str} text 
 * @param {str} subject 
 * @param {str} choose 
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
This Method is used for sharing text between apps.

If choose is defined, an android dialog will appear with the **choose** value as info text.
Otherwise the dialog will appear if the user did not specify an app which should be always opened for this type of data.

The **subject** parameter seems to be obsolete these times and is just kept for backwards compatibility.

See Also: @SendFile
 */



// ------------- SAMPLES ------------- 


    
/**
@sample Demo
function OnStart()
{
    <b>app.SendText("Hello World", "My Subject", "Choose an app");</b>
}
 */
    
            