
/** ### alpha
 * The objects alpha value
 * $$ obj.alpha() $$
 * @returns num_frc
 */


/** ### angle
 * The rotation fraction of the object
 * $$ obj.angle() $$
 * @returns num_frc
 */


/** ### Contains
 * Checks if a point is contained in the sprite
 * $$ obj.Contains(x, y) $$
 * @param {num_frc} x 
 * @param {num_frc} y 
 * @returns bin
 */


/** ### data
 * An object for saving individual extra properties.
 * $$ obj.data() $$
 * @returns obj
 */


/** ### graphic
 * the PIXI graphic
 * $$ obj.graphic() $$
 * @returns obj
 */


/** ### group
 * The objects group identifier
 * $$ obj.group() $$
 * @returns str
 */


/** ### height
 * The height of the object
 * $$ obj.height() $$
 * @returns num_frc
 */


/** ### pivotX
 * The x pivot for rotations
 * $$ obj.pivotX() $$
 * @returns num_frc
 */


/** ### pivotY
 * The y pivot for rotations
 * $$ obj.pivotY() $$
 * @returns num_frc
 */


/** ### scaleX
 * The horizontal scaling
 * $$ obj.scaleX() $$
 * @returns num_fac
 */


/** ### scaleY
 * The vertical scaling
 * $$ obj.scaleY() $$
 * @returns num_fac
 */


/** ### SetMatrix
 * Set the individual 2d transformation
 * $$ obj.SetMatrix(mtx) $$
 * @param {obj} mtx Matrix
 */


/** ### Update
 * Updates internal properties
 * $$ obj.Update() $$
 */


/** ### visible
 * Indicates the objects visibility state
 * $$ obj.visible() $$
 * @returns bin
 */


/** ### width
 * The obects width
 * $$ obj.width() $$
 * @returns num
 */


/** ### PauseTween
 * Pause tweening.
 * $$ obj.PauseTween() $$
 */


/** ### PlayTween
 * Resume tweening.
 * $$ obj.PlayTween() $$
 */


/** ### SetTween
 * Sets up tween methods and properties without playing it.
 * $$ obj.SetTween() $$
 */


/** ### StartTween
 * Start tweening automatically on every rendered frame.
 * $$ obj.StartTween() $$
 */


/** ### StepTween
 * Updates a tween to the current time (if not paused).
 * $$ obj.StepTween() $$
 */


/** ### Tween
 * Performs an animation on the control. * The `target` object is for the position, size and rotation that the control has at the end of the animation. *  * The `type` specifies the behavior and the speed of the animation. Separated by a dot, you must also specify whether you want to apply this behavior to the beginning (In), end (Out), or to both (InOut) times of the animation. *  * With the amount of `repeat`s you can control how many times you want to play the animation. *  * If you have `jojo` activated, the animation will alternate between forward and backward playback, so that if the repetition value is odd, the control will be at the start position again at the end of the animation. *  * Finally the `callback` function will be called after the animation has finished. Well, it's about time!
 * $$ obj.Tween(target, duration, type, repeat, yoyo, callback) $$
 * @param {obj} target { x:num_frc, y:num_frc, w:num_frc, w:num_frc, sw:num_frc
 * @param {num_mls} duration 
 * @param {str} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
 * @param {num_int} repeat 
 * @param {bin} yoyo 
 * @param {fnc_json} callback {}
 */

