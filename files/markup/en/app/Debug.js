// ------------- HEADER SECTION -------------


/** # Debug #
 * @brief Debug messages to the console
 * This function is an app equivalent to console.log(msg) which writes text into a console visible in debug mode “true” or “console”.
 *
 * See Also: @SetDebug
 * $$ app.Debug(message) $$
 * @param {str} message
*/




// ------------- SAMPLES -------------



/**
@sample Demonstration
function OnStart()
{
    app.CreateDebug();
    app.ShowDebug(true);

	<b>app.Debug("\n\t\tHello World!");</b>
}
 */



/**
@sample Python Demonstration
from native import app

def OnStart():
    app.CreateDebug()
    app.ShowDebug(True)

    app.Debug("\n\t\tHello World!")
 */
