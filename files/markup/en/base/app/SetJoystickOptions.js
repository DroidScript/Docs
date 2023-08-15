
/** # SetJoystickOptions #
 * 
 * $$ app.SetJoystickOptions(options) $$ 
 * @param {str_com} options ForwardKeys:allows the joystick key presses to pass onto the child controls of the main activity
*/


// SetJoystickOptions.md --> Complete documentation. Sample codes is at the bottom of this file.

/** @Description
Set options for the connected joystick. The “forwardkeys” **option** allows the joystick key presses to pass onto the child controls of the main activity. (They are normally prevented from reaching child controls).

See Also: @GetJoystickName, @GetJoystickState
 */

// SetJoystickOptions.txt --> All the sample codes

/** @Sample
<sample ForwardKeys>
function OnStart()
{
    app.SetJoystickOptions( "ForwardKeys" );
}
</sample>

 */

