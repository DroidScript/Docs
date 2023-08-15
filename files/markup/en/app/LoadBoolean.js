
/** # LoadBoolean #
 * Load a saved boolean value to remember varibale values between multiple app starts.
 * 
 * See also: @SaveBoolean.
 * $$ app.LoadBoolean(name, default, file) $$ 
 * @param {str} name 
 * @param {bin} default 
 * @param {str_ptf} file 
 * @returns bin
*/


// LoadBoolean.txt --> All the sample codes

/** @Sample
<sample Detect First Start>
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
</sample>

 */

