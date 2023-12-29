// ------------- HEADER SECTION ------------- 


/** # SetJoystickOptions #
 * @brief Set options for the connected joystick
 * 
 * $$ app.SetJoystickOptions(options) $$ 
 * @param {str_com} options ForwardKeys:allows the joystick key presses to pass onto the child controls of the main activity
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Set options for the connected joystick. The “forwardkeys” **option** allows the joystick key presses to pass onto the child controls of the main activity. (They are normally prevented from reaching child controls).

See Also: @GetJoystickName, @GetJoystickState
 */



// ------------- SAMPLES ------------- 


    
/**
@sample ForwardKeys
function OnStart()
{
    app.SetJoystickOptions( "ForwardKeys" );
}
 */
    
            
    
/**
@sample Python Example
from native import app

def OnStart():
    app.SetClipboardText( "Sample Text" )
 */
    
            
    
/**
@sample Python ForwardKeys
from native import app

def OnStart():
    app.SetJoystickOptions( "ForwardKeys" )
 */
    
            