
/** # HideProgressBar #
 * @brief Hide progress bar dialog
 * Hides a previously shown progress bar dialog.
 * See also @ShowProgressBar, @UpdateProgressBar.
 * $$ app.HideProgressBar() $$ 
*/


// HideProgressBar.txt --> All the sample codes

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

