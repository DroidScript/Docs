
/** # GetOptions #
 * Returns all current app settings. If ran from inside DroidScript, “debug,remote,holo” is the default value.
 * 
 * See Also: @SetOptions
 * $$ app.GetOptions() $$ 
 * @returns str_com-portrait,landscape,dark,light,holo,node,hybrid,mui,transparent,debug,remote,noswapify
*/


// GetOptions.txt --> All the sample codes

/** @Sample
<sample Show App Options>
cfg.No_Dom, cfg.Portrait;

function OnStart()
{
	var opt = app.GetOptions();
	app.Alert( opt );
}
</sample>

 */

