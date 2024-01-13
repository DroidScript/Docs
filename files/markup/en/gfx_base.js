
/** ### alpha
 * @prop
 * @brief the alpha value
 * The objects alpha value
 * @returns num_frc
 */


/** ### angle
 * @prop
 * @brief The rotation fraction
 * The rotation fraction of the object
 * @returns num_frc
 */


/** ### Contains
 * @brief Check if the sprite contains a point
 * Checks if a point is contained in the sprite
 * @param {num_frc} x
 * @param {num_frc} y 
 * @returns bin
 */


/** ### data
 * @prop
 * @brief Extra properties
 * An object for saving individual extra properties.
 * @returns obj
 */


/** ### graphic
 * @prop
 * @brief PIXI graphic
 * the PIXI graphic
 * @returns obj
 */


/** ### group
 * @prop
 * @brief The object's group
 * The objects group identifier
 * @returns str
 */


/** ### height
 * @prop
 * @brief The objects height
 * The height of the object
 * @returns num_frc
 */


/** ### pivotX
 * @prop
 * @brief Rotation x pivot
 * The x pivot for rotations
 * @returns num_frc
 */


/** ### pivotY
 * @prop
 * @brief Rotation y pivot
 * The y pivot for rotations
 * @returns num_frc
 */


/** ### scaleX
 * @prop
 * @brief Horizontal scaling
 * The horizontal scaling
 * @returns num_fac
 */


/** ### scaleY
 * @prop
 * @brief Vertical scaling
 * The vertical scaling
 * @returns num_fac
 */


/** ### SetMatrix
 * @brief Set 2d transformation
 * Set the individual 2d transformation
 * @param {obj} mtx Matrix
 */


/** ### Update
 * Updates internal properties
 */


/** ### visible
 * @prop
 * @brief Visibility state
 * Indicates the objects visibility state
 * @returns bin
 */


/** ### width
 * @prop
 * @brief Object width
 * The obects width
 * @returns num
 */


/** ### PauseTween
 * Pause tweening.
 */


/** ### PlayTween
 * Resume tweening.
 */


/** ### SetTween
 * @brief Setup tween methods
 * Sets up tween methods and properties without playing it.
 * @param #Tween
 */


/** ### StartTween
 * @brief Start tween
 * Start tweening automatically on every rendered frame.
 */


/** ### StepTween
 * @brief Update tween to now
 * Updates a tween to the current time (if not paused).
 */


/** ### Tween
 * @brief Animates the control
 * Performs an animation on the control.
 * The **target** object is for the position, size and rotation that the control has at the end of the animation.
 * 
 * The **type** specifies the behavior and the speed of the animation. Separated by a dot, you must also specify whether you want to apply this behavior to the beginning (In), end (Out), or to both (InOut) times of the animation.
 * 
 * With the amount of **repeat**s you can control how many times you want to play the animation.
 * 
 * If you have **jojo** activated, the animation will alternate between forward and backward playback, so that if the repetition value is odd, the control will be at the start position again at the end of the animation.
 * 
 * Finally the **callback** function will be called after the animation has finished. Well, it's about time!
 * @param {obj} target { x:num_frc, y:num_frc, w:num_frc, w:num_frc, sw:num_frc-horizontal scale, sh:num_frc-vertical scale, rot:num_deg }
 * @param {num_mls} duration 
 * @param {str} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
 * @param {num_int} repeat 
 * @param {bin} yoyo 
 * @param {fnc_json} callback {}
 */

