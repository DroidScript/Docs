// ------------- HEADER SECTION -------------


/** # SaveBoolean #
 * @brief Save a boolean value across multiple starts
 * Save a boolean value to remember varibale values between multiple app starts.
 *
 * See also: @LoadBoolean.
 * $$ app.SaveBoolean(name, value, file?) $$
 * @param {str} name
 * @param {bin} value
 * @param {str_ptf} [file]
*/




// ------------- SAMPLES -------------



/**
@sample Detect First Start
var file = "demofile";

function OnStart()
{
	var first = app.LoadBoolean( "first", true, file );

	if(first)
        app.ShowPopup( "You ran this demo for the first time!" );
    else
        app.ShowPopup( "This is not the first time you have run this demo." );

	<b>app.SaveBoolean( "first", false, file );</b>
}
 */



/**
@sample Python Detect First Start
from native import app

file = "demofile"

def OnStart():
    first = app.LoadBoolean( "first", True, file )

    if first:
        app.ShowPopup( "You ran this demo for the first time!" )
    else:
        app.ShowPopup( "This is not the first time you have run this demo." )

    app.SaveBoolean( "first", False, file )
 */
