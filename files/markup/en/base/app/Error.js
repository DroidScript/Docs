
/** # Error #
 * Shows a detailed error message with message, file and line in an asynchroneous dialog. You can also set it to quit the app after the user dismisses the dialog.
 * 
 * See Also: @Alert
 * $$ app.Error(message, line, file, quit) $$ 
 * @param {str} message 
 * @param {num_int} line 
 * @param {str_ptf} file 
 * @param {bin} quit 
*/


// Error.txt --> All the sample codes

/** @Sample
<sample Show error and exit>
function OnStart()
{
    var msg = "How dare you running that sample.\nI will close immediately!";
    app.Error( msg, 4, "demo.js", true );
}
</sample>

 */

