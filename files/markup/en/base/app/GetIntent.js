
/** # GetIntent #
 * Returns an intent object sent to the app.
 * 
 * See Also: @SendIntent
 * $$ app.GetIntent() $$ 
 * @returns obj-{ action:str&comma; type:str&comma; data:str&comma; flags:num_int&comma; extras: { app_intent:str&comma; app_file:str_pth&comma; app_options:str } }
*/


// GetIntent.txt --> All the sample codes

/** @Sample
<sample Get received intent data>
function OnStart()
{
    <b>var int = app.GetIntent();</b>
    app.Alert( JSON.stringify( int ));
}
</sample>

 */

