// ------------- HEADER SECTION -------------


/** # ShowProgressBar #
 * @brief Show a progress bar dialog
 * Shows a dialog with a bar indicating the current progress of a certain thing.
 *
 * See Also: @UpdateProgressBar, @HideProgressBar
 * $$ app.ShowProgressBar(title, percent?, options?) $$
 * @param {str} title
 * @param {num_prc} [percent]
 * @param {str} [options] Light
*/




// ------------- SAMPLES -------------



/**
@sample Progress Bar
function OnStart()
{
	<b>app.ShowProgressBar( "Loading..." );

	for( prog = 0; prog < 100; prog++ )
	    app.UpdateProgressBar( prog );

	app.HideProgressBar();</b>
}
 */



/**
@sample Python Progress Bar
from native import app

def OnStart():
    app.ShowProgressBar( "Loading..." )

    for prog in range(100):
        app.UpdateProgressBar( prog )

    app.HideProgressBar()
 */
