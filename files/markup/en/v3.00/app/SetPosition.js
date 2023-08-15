
/** # SetPosition #
 * Change the main app's position and size. Mostly used for transparent apps.
 * $$ app.SetPosition(left, top, width, height, options) $$ 
 * @param {num_frc} left 
 * @param {num_frc} top 
 * @param {num_frc} width 
 * @param {num_frc} height 
 * @param {str} options px
*/


// SetPosition.txt --> All the sample codes

/** @Sample
<sample SetPosition>
function OnStart()
{
	<b>app.SetPosition( 0.2, 0.2, .6, .6 );</b>

	lay = app.CreateLayout( "linear", "VCenter,fillxy" );
	lay.SetBackColor("blue")

	btn = app.CreateButton( "Hello World", 0.3, 0.1 ); // 1, 1 will overflow
	lay.AddChild( btn );

	app.AddLayout( lay );
}
</sample>

 */

