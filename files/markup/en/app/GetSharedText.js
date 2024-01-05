// ------------- HEADER SECTION -------------


/** # GetSharedText #
 * @brief Get value of shared text
 * Returns the value of a shared text. If the result is returned, it cannot be read another time unless it is shared again.
 * 
 * See Also: @GetSharedFiles, @SendFile, @SendText
 * $$ app.GetSharedText() $$ 
 * @returns str
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Show Shared Text
function OnStart()
{
	<b>var text = app.GetSharedText();</b>

	if( text ) app.Alert( text );
	else app.ShowPopup( "No shared text received." );
}
 */
    
            
    
/**
@sample Python Show Shared Text
from native import app

def OnStart():
    text = app.GetSharedText()

    if text:
        app.Alert(text)
    else:
        app.ShowPopup("No shared text received.")
 */
    
            