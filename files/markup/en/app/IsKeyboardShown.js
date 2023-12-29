// ------------- HEADER SECTION ------------- 


/** # IsKeyboardShown #
 * @brief Check whether device keyboard is shown
 * Checks if the device keyboard is currently visible or not.
 * 
 * See Also: @ShowKeyboard, @HideKeyboard
 * $$ app.IsKeyboardShown() $$ 
 * @returns bin
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Is Keyboard Shown
function OnStart()
{
    <b>var kbShown = app.IsKeyboardShown();</b>
    app.Alert( kbShown, "Is Keyboard Shown:" );
}
 */
    
            
    
/**
@sample Python Is Keyboard Shown
from native import app

def OnStart():
    kbShown = app.IsKeyboardShown()
    app.Alert(kbShown, "Is Keyboard Shown:")
 */
    
            