
/** # UpdateProgressBar #
 * @brief Update the ProgressBar percentage
 * Updates the progress percentage of a ProgressBar.
 * See Also: @ShowProgressBar, @HideProgressBar.
 * $$ app.UpdateProgressBar(percent, options) $$ 
 * @param {num_prc} percent 
 * @param {str} options doevents:force v8 UI update
*/


// UpdateProgressBar.txt --> All the sample codes

/** @Sample
<sample Progress Bar>
function OnStart()
{
	<b>app.ShowProgressBar( "Loading..." );

	for( prog = 0; prog < 100; prog++ )
	    app.UpdateProgressBar( prog );

	app.HideProgressBar();</b>
}
</sample>

 */

