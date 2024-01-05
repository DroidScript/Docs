// ------------- HEADER SECTION -------------


/** # ShowTextDialog #
 * @brief Show a text input dialog
 * Shows a text input dialog with a title to allow the user to input some text.
 * $$ app.ShowTextDialog(title, default, callback) $$ 
 * @param {str} title 
 * @param {str} default 
 * @param {fnc_json} callback {"pNames":["text"],"pTypes":["str"]}
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Input Name
function OnStart()
{
	<b>app.ShowTextDialog( "Type your Name:", "", OnInputName );</b>
}

function OnInputName( name )
{
    app.ShowPopup( "Your name is " + name );
}
 */
    
            
    
/**
@sample Python Input Name
from native import app

def OnStart():
    app.ShowTextDialog("Type your Name:", "", OnInputName)

def OnInputName(name):
    app.ShowPopup("Your name is " + name)
 */
    
            