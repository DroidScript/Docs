// ------------- HEADER SECTION -------------


/** # CreateDebug #
 * @brief Shows a debug log overlay
 * CreateDebug is used to show the console as overlay above the app in order to see the debug logs.
 * 
 * See Also: @SetDebug, @Debug
 * $$ app.CreateDebug(options?) $$ 
 * @param {str} [options] dialog:Show the debug log as black overlay dialog|clear:Clear content before showing
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Demonstration
function OnStart()
{
    <b>app.CreateDebug();</b>

	app.Debug("Hello World!");
}
 */
    
            
    
/**
@sample Python Demonstration
from native import app

def OnStart():
    app.CreateDebug()

    app.Debug("Hello World!")
 */
    
            