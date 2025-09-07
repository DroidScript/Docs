// ------------- HEADER SECTION -------------


/** # LoadBoolean #
 * @brief Load saved boolean value
 * Load a saved boolean value to remember varibale values between multiple app starts.
 *
 * See also: @SaveBoolean.
 * $$ app.LoadBoolean(name, default?, file?) $$
 * @param {str} name
 * @param {bin} [default]
 * @param {str_ptf} [file]
 * @returns bin
*/




// ------------- SAMPLES -------------



/**
@sample Detect First Start
var file = "demofile";

function OnStart()
{
	<b>var first = app.LoadBoolean( "first", true, file );</b>

	if(first)
        app.ShowPopup( "You ran this demo for the first time!" );
    else
        app.ShowPopup( "This is not the first time you have run this demo." );

	app.SaveBoolean( "first", false, file );
}
 */



/**
@sample Python
from native import app

def OnStart():
    file = "demofile"

    first = app.LoadBoolean("first", True, file)

    if first:
        app.ShowPopup("You ran this demo for the first time!")
    else:
        app.ShowPopup("This is not the first time you have run this demo.")

    app.SaveBoolean("first", False, file)
 */
