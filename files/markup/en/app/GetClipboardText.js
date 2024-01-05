// ------------- HEADER SECTION -------------


/** # GetClipboardText #
 * @brief Get latest clipboard text
 * GetClipboardText returns text that was last copied to the clipboard.
 * 
 * See Also: @SetClipboardText
 * $$ app.GetClipboardText() $$ 
 * @returns str
*/




// ------------- SAMPLES ------------- 


    
/**
@sample show latest clipboard text
function OnStart()
{
    <b>var text = app.GetClipboardText();</b>
    app.Alert( text );
}
 */
    
            
    
/**
@sample Python show latest clipboard text
from native import app

def OnStart():
    text = app.GetClipboardText()
    app.Alert(text)
 */
    
            