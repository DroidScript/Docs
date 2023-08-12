
/** # CreateEllipse #
 * @abbrev elp
 * Creates a elliptical game object.
 * $$ elp = gfx.CreateEllipse(width, height, color, lineWidth, lineColor, lineAlpha, group) $$ 
 * @param {num_frc} width 
 * @param {num_frc} height 
 * @param {num_col} color 
 * @param {num_pxl} lineWidth 
 * @param {num_col} lineColor 
 * @param {num_frc} lineAlpha 
 * @param {str} group 
 * @returns gvo-Ellipse
*/


/** ## Methods ##
 * These are the methods available for CreateEllipse
 */


/** ### alpha ###
 * The objects alpha value
 * $$ elp.alpha() $$
 * @returns num_frc
 */


/** ### angle ###
 * The rotation fraction of the object
 * $$ elp.angle() $$
 * @returns num_frc
 */


/** ### Contains ###
 * Checks if a point is contained in the sprite
 * $$ elp.Contains(x, y) $$
 * @param {num_frc} x 
 * @param {num_frc} y 
 * @returns bin
 */


/** ### data ###
 * An object for saving individual extra properties.
 * $$ elp.data() $$
 * @returns obj
 */


/** ### graphic ###
 * the PIXI graphic
 * $$ elp.graphic() $$
 * @returns obj
 */


/** ### group ###
 * The objects group identifier
 * $$ elp.group() $$
 * @returns str
 */


/** ### height ###
 * The height of the object
 * $$ elp.height() $$
 * @returns num_frc
 */


/** ### pivotX ###
 * The x pivot for rotations
 * $$ elp.pivotX() $$
 * @returns num_frc
 */


/** ### pivotY ###
 * The y pivot for rotations
 * $$ elp.pivotY() $$
 * @returns num_frc
 */


/** ### scaleX ###
 * The horizontal scaling
 * $$ elp.scaleX() $$
 * @returns num_fac
 */


/** ### scaleY ###
 * The vertical scaling
 * $$ elp.scaleY() $$
 * @returns num_fac
 */


/** ### SetMatrix ###
 * Set the individual 2d transformation
 * $$ elp.SetMatrix(mtx) $$
 * @param {obj} mtx Matrix
 */


/** ### Update ###
 * Updates internal properties
 * $$ elp.Update() $$
 */


/** ### visible ###
 * Indicates the objects visibility state
 * $$ elp.visible() $$
 * @returns bin
 */


/** ### width ###
 * The obects width
 * $$ elp.width() $$
 * @returns num
 */

// CreateEllipse.txt --> All the sample codes

/** @Sample
<sample>
cfg.Game;

function OnLoad()
{
    <b>ellipse = gfx.CreateEllipse( 0.7, 0.4*gfx.aspect, 0xcccc00, 10, 0xbb00ff );</b>
}

function OnReady()
{
    gfx.AddGraphic( ellipse, 0.1, 0.2 );
    gfx.Play();
}
</sample>

 */

