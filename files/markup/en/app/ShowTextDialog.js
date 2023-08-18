
/** # ShowTextDialog #
 * @brief Show a text input dialog
 * Shows a text input dialog with a title to allow the user to input some text.
 * $$ app.ShowTextDialog(title, default, callback) $$ 
 * @param {str} title 
 * @param {str} default 
*/


// ShowTextDialog.txt --> All the sample codes

/** @Sample
<sample Input Name>
function OnStart()
{
	<b>app.ShowTextDialog( "Type your Name:", "", OnInputName );</b>
}

function OnInputName( name )
{
    app.ShowPopup( "Your name is " + name );
}
</sample>

 */

