
/** # CreatePolygon #
 * @abbrev pol
 * Creates a polygonal game object.
 * $$ pol = gfx.CreatePolygon(points, pivotX, pivotY, color, lineWidth, lineColor, lineAlpha, group) $$ 
 * @param {lst} points [ x1:num_frc,y1:num_frc, x2:num_frc,y2:num_frc, ... ]
 * @param {num_frc} pivotX 
 * @param {num_frc} pivotY 
 * @param {num_col} color 
 * @param {num_pxl} lineWidth 
 * @param {num_col} lineColor 
 * @param {num_frc} lineAlpha 
 * @param {str} group 
 * @returns gvo-Polygon
*/


/** ## Methods ##
 * These are the methods available for CreatePolygon
 */


/** ### alpha ###
 * The objects alpha value
 * $$ pol.alpha() $$
 * @returns num_frc
 */


/** ### angle ###
 * The rotation fraction of the object
 * $$ pol.angle() $$
 * @returns num_frc
 */


/** ### Contains ###
 * Checks if a point is contained in the sprite
 * $$ pol.Contains(x, y) $$
 * @param {num_frc} x 
 * @param {num_frc} y 
 * @returns bin
 */


/** ### data ###
 * An object for saving individual extra properties.
 * $$ pol.data() $$
 * @returns obj
 */


/** ### graphic ###
 * the PIXI graphic
 * $$ pol.graphic() $$
 * @returns obj
 */


/** ### group ###
 * The objects group identifier
 * $$ pol.group() $$
 * @returns str
 */


/** ### height ###
 * The height of the object
 * $$ pol.height() $$
 * @returns num_frc
 */


/** ### pivotX ###
 * The x pivot for rotations
 * $$ pol.pivotX() $$
 * @returns num_frc
 */


/** ### pivotY ###
 * The y pivot for rotations
 * $$ pol.pivotY() $$
 * @returns num_frc
 */


/** ### scaleX ###
 * The horizontal scaling
 * $$ pol.scaleX() $$
 * @returns num_fac
 */


/** ### scaleY ###
 * The vertical scaling
 * $$ pol.scaleY() $$
 * @returns num_fac
 */


/** ### SetMatrix ###
 * Set the individual 2d transformation
 * $$ pol.SetMatrix(mtx) $$
 * @param {obj} mtx Matrix
 */


/** ### Update ###
 * Updates internal properties
 * $$ pol.Update() $$
 */


/** ### visible ###
 * Indicates the objects visibility state
 * $$ pol.visible() $$
 * @returns bin
 */


/** ### width ###
 * The obects width
 * $$ pol.width() $$
 * @returns num
 */

// CreatePolygon.txt --> All the sample codes

/** @Sample
<sample>
cfg.Game;

function OnLoad()
{
    <b>polygon = gfx.CreatePolygon( [0.2,0.6, 0.8,0.6, 0.5,0.2, 0.2,0.6], 0, 0, 0x33ff55, 6, 0xcc1122 );</b>
}

function OnReady()
{
    gfx.AddGraphic( polygon, 0.2, 0.7 );
    gfx.Play();
}
</sample>

 */

