// ------------- HEADER SECTION -------------


/** # SetClipboardText #
 * @brief Change the device clipboard text
 * The SetClipboardText method puts text data on the device clip board. This allows you to copy and paste text between different applications.
 *
 * See Also: @GetClipboardText
 * $$ app.SetClipboardText(text) $$
 * @param {str} text
*/




// ------------- SAMPLES -------------



/**
@sample Example
function OnStart()
{
	<b>app.SetClipboardText( "Sample Text" );</b>
}
 */



/**
@sample Python Example
from native import app

def OnStart():
    app.SetClipboardText("Sample Text")
 */
