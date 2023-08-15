
/** # CreateRectangle #
 * @abbrev rct
 * Creates a rectangular game object.
 * $$ rct = gfx.CreateRectangle(width, height, color, lineWidth, lineColor, lineAlpha, group) $$ 
 * @param {num_frc} width 
 * @param {num_frc} height 
 * @param {num_col} color 
 * @param {num_pxl} lineWidth 
 * @param {num_col} lineColor 
 * @param {num_frc} lineAlpha 
 * @param {str} group 
 * @returns gvo-Rectangle
*/


/** ## Methods ##
 * These are the methods available for CreateRectangle
 */


/** ### alpha ###
 * The objects alpha value
 * $$ rct.alpha() $$
 * @returns num_frc
 */


/** ### angle ###
 * The rotation fraction of the object
 * $$ rct.angle() $$
 * @returns num_frc
 */


/** ### Contains ###
 * Checks if a point is contained in the sprite
 * $$ rct.Contains(x, y) $$
 * @param {num_frc} x 
 * @param {num_frc} y 
 * @returns bin
 */


/** ### data ###
 * An object for saving individual extra properties.
 * $$ rct.data() $$
 * @returns obj
 */


/** ### graphic ###
 * the PIXI graphic
 * $$ rct.graphic() $$
 * @returns obj
 */


/** ### group ###
 * The objects group identifier
 * $$ rct.group() $$
 * @returns str
 */


/** ### height ###
 * The height of the object
 * $$ rct.height() $$
 * @returns num_frc
 */


/** ### pivotX ###
 * The x pivot for rotations
 * $$ rct.pivotX() $$
 * @returns num_frc
 */


/** ### pivotY ###
 * The y pivot for rotations
 * $$ rct.pivotY() $$
 * @returns num_frc
 */


/** ### scaleX ###
 * The horizontal scaling
 * $$ rct.scaleX() $$
 * @returns num_fac
 */


/** ### scaleY ###
 * The vertical scaling
 * $$ rct.scaleY() $$
 * @returns num_fac
 */


/** ### SetMatrix ###
 * Set the individual 2d transformation
 * $$ rct.SetMatrix(mtx) $$
 * @param {obj} mtx Matrix
 */


/** ### Update ###
 * Updates internal properties
 * $$ rct.Update() $$
 */


/** ### visible ###
 * Indicates the objects visibility state
 * $$ rct.visible() $$
 * @returns bin
 */


/** ### width ###
 * The obects width
 * $$ rct.width() $$
 * @returns num
 */

// CreateRectangle.txt --> All the sample codes

/** @Sample
<sample>

cfg.Game;

function OnLoad()
{
    <b>rect = gfx.CreateRectangle( 0.4, 0.4, 0x00ffff, 6, 0xee3355 );</b>
}

function OnReady()
{
    gfx.AddGraphic( rect, 0.3, 0.2 );
    gfx.Play();
}

</sample>

 */

