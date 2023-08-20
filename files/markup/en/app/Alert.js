// ------------- HEADER SECTION ------------- 


/** # Alert #
 * @brief Shows a popup message with an 'OK' button to exit
 * 
 * $$ app.Alert(message, title, options, hue) $$ 
 * @param {str} message 
 * @param {str} title 
 * @param {str_com} options NoDim,NoFocus
 * @param {num_int} hue 
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Alert shows a simple text dialog with a colored title and a 'Ok' button to exit. If title was not given the dialog looks like a normal alert box.
Without the NoDim option the background behind the dialog will be darkened.

See Also:

See Also: @Error, @ShowTextDialog, @CreateYesNoDialog.
 */



// ------------- SAMPLES ------------- 


    
/**
@sample No Title
function OnStart()
{
	<b>app.Alert( "Hello World!" );</b>
}
 */
    
            
    
/**
@sample Yellow Title
function OnStart()
{
	<b>app.Alert( "This is an alert box", "Hello Yellow World!", "", -100 );</b>
}
 */
    
            