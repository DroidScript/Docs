
/** # CreateCircle #
 * @abbrev cir
 * Creates a circular game object.
 * $$ cir = gfx.CreateCircle(width, color, lineWidth, lineColor, lineAlpha, group) $$ 
 * @param {num_frc} width 
 * @param {num_col} color 
 * @param {num_pxl} lineWidth 
 * @param {num_col} lineColor 
 * @param {num_frc} lineAlpha 
 * @param {str} group 
 * @returns gvo-Circle
*/


/** ## Methods ##
 * These are the methods available for CreateCircle
 */


/** ### alpha ###
 * The objects alpha value
 * $$ cir.alpha() $$
 * @returns num_frc
 */


/** ### angle ###
 * The rotation fraction of the object
 * $$ cir.angle() $$
 * @returns num_frc
 */


/** ### Contains ###
 * Checks if a point is contained in the sprite
 * $$ cir.Contains(x, y) $$
 * @param {num_frc} x 
 * @param {num_frc} y 
 * @returns bin
 */


/** ### data ###
 * An object for saving individual extra properties.
 * $$ cir.data() $$
 * @returns obj
 */


/** ### graphic ###
 * the PIXI graphic
 * $$ cir.graphic() $$
 * @returns obj
 */


/** ### group ###
 * The objects group identifier
 * $$ cir.group() $$
 * @returns str
 */


/** ### height ###
 * The height of the object
 * $$ cir.height() $$
 * @returns num_frc
 */


/** ### pivotX ###
 * The x pivot for rotations
 * $$ cir.pivotX() $$
 * @returns num_frc
 */


/** ### pivotY ###
 * The y pivot for rotations
 * $$ cir.pivotY() $$
 * @returns num_frc
 */


/** ### scaleX ###
 * The horizontal scaling
 * $$ cir.scaleX() $$
 * @returns num_fac
 */


/** ### scaleY ###
 * The vertical scaling
 * $$ cir.scaleY() $$
 * @returns num_fac
 */


/** ### SetMatrix ###
 * Set the individual 2d transformation
 * $$ cir.SetMatrix(mtx) $$
 * @param {obj} mtx Matrix
 */


/** ### Update ###
 * Updates internal properties
 * $$ cir.Update() $$
 */


/** ### visible ###
 * Indicates the objects visibility state
 * $$ cir.visible() $$
 * @returns bin
 */


/** ### width ###
 * The obects width
 * $$ cir.width() $$
 * @returns num
 */

// CreateCircle.txt --> All the sample codes

/** @Sample
<sample>
cfg.Game;

function OnLoad()
{
    <b>circle = gfx.CreateCircle( 0.4, 0xff1133, 6, 0x7799ff );</b>
}

function OnReady()
{
    gfx.AddGraphic( circle, 0.3, 0.2 );
    gfx.Play();
}
</sample>

 */

