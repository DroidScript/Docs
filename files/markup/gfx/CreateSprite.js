
/** # CreateSprite #
 * @abbrev spr
 * 
 * $$ spr = gfx.CreateSprite(file, group, callback) $$ 
 * @param {str_ptf} file 
 * @param {str} group 
 * @returns gvo-CreateSprite
*/


// CreateSprite.md --> Complete documentation. Sample codes is at the bottom of this file.

/** @Description
Creates a sprite object based on an image file containing a sprite or a spritesheet.

To create a new Sprite just pass the image name as first parameter:

<js>gfx.CreateSprite( "/Sys/Img/Bunny.png", "bunnies" );</js>

**Spritesheets** can be loaded in two ways:

The simple one is a specific file pattern
“Img/Sheetname\_**WIDTH:'num'**x**HEIGHT:'num'**x**SPRITE\_SX:'num'**x**SPRITE\_SY:'num'**” or
“Img/Sheetname\_strip**TOTAL:'num'**\_**WIDTH:'num'**x**HEIGHT:'num'**x**SPRITE\_SX:'num'**x**SPRITE\_SY:'num'**”
if you have a different amount of sprites than the rectangle of _spritesx * spritesy_ sprites.

Example from the downloadable demo [Grannies and Zombies](https://ds.justplayer.de/uploads/grannies-and-zombies):
<js>
granny = gfx.CreateSprite( "Img/Granny\_1600x1000x8x5", "granny" );
zombie = gfx.CreateSprite( "Img/Zombie\_strip35\_1400x1000x7x5", "zombie" );
</js>

The second way is to create a SpriteSheet using the @CreateSpriteSheet method which might come handy if a single sprite has multiple animations or if a sprite is reused but using a different sprite sheet.

 */

/** ## Methods ##
 * These are the methods available for CreateSprite
 */


/** ### added ###
 * Indicates if the sprite has been added to the game
 * $$ spr.added() $$
 * @returns bin
 */


/** ### alpha ###
 * The objects alpha value
 * $$ spr.alpha() $$
 * @returns num_frc
 */


/** ### angle ###
 * The rotation fraction of the object
 * $$ spr.angle() $$
 * @returns num_frc
 */


/** ### aspect ###
 * The aspect ratio of the sprite
 * $$ spr.aspect() $$
 * @returns num
 */


/** ### Contains ###
 * Checks if a point is contained in the sprite
 * $$ spr.Contains(x, y) $$
 * @param {num_frc} x 
 * @param {num_frc} y 
 * @returns bin
 */


/** ### data ###
 * An object for saving individual extra properties.
 * $$ spr.data() $$
 * @returns obj
 */


/** ### Flip ###
 * Flips the sprite on the horizontal and/or the vertical axis.
 * $$ spr.Flip(horiz, vert) $$
 * @param {bin} horiz 
 * @param {bin} vert 
 */


/** ### GetFrame ###
 * Returns the current frame
 * $$ spr.GetFrame() $$
 * @returns num_int
 */


/** ### Goto ###
 * Displays a specific frame of an animation
 * $$ spr.Goto(frame) $$
 * @param {num_int} frame 
 */


/** ### group ###
 * The objects group identifier
 * $$ spr.group() $$
 * @returns str
 */


/** ### height ###
 * The height of the object
 * $$ spr.height() $$
 * @returns num_frc
 */


/** ### _isAtlas ###
 * 
 * $$ spr._isAtlas() $$
 * @returns bin
 */


/** ### _isStrip ###
 * 
 * $$ spr._isStrip() $$
 * @returns bin
 */


/** ### PauseTween ###
 * Pause tweening.
 * $$ spr.PauseTween() $$
 */


/** ### pivotX ###
 * The x pivot for rotations
 * $$ spr.pivotX() $$
 * @returns num_frc
 */


/** ### pivotY ###
 * The y pivot for rotations
 * $$ spr.pivotY() $$
 * @returns num_frc
 */


/** ### Play ###
 * Start playing the sprite animation
 * $$ spr.Play(startFrame, speed, loop) $$
 * @param {num_int} startFrame 
 * @param {num_int} speed 
 * @param {bin} loop 
 */


/** ### PlayRange ###
 * Start playing the sprite animation in a given frame range
 * $$ spr.PlayRange(firstFrame, lastFrame, speed, loop) $$
 * @param {num_int} firstFrame 
 * @param {num_int} lastFrame 
 * @param {num} speed 
 * @param {bin} loop 
 */


/** ### PlayTo ###
 * Play the animation until a specific frame is reached
 * $$ spr.PlayTo(frame) $$
 * @param {num_int} frame 
 */


/** ### PlayTween ###
 * Resume tweening.
 * $$ spr.PlayTween() $$
 */


/** ### scaleX ###
 * The horizontal scaling
 * $$ spr.scaleX() $$
 * @returns num_fac
 */


/** ### scaleY ###
 * The vertical scaling
 * $$ spr.scaleY() $$
 * @returns num_fac
 */


/** ### SetLoop ###
 * Define if the animation should loop or stop at the end
 * $$ spr.SetLoop(loop) $$
 * @param {bin} loop 
 */


/** ### SetMatrix ###
 * Set the individual 2d transformation
 * $$ spr.SetMatrix(mtx) $$
 * @param {obj} mtx Matrix
 */


/** ### SetPlaySpeed ###
 * Define at which speed the animation will play. 1 equals to 60 fps
 * $$ spr.SetPlaySpeed(speed) $$
 * @param {num} speed 
 */


/** ### SetRange ###
 * Define the frame range the animation should show.
 * $$ spr.SetRange(firstFrame, lastFrame, loop, play, speed) $$
 * @param {num_int} firstFrame 
 * @param {num_int} lastFrame 
 * @param {bin} loop 
 * @param {bin} play 
 * @param {num} speed 
 */


/** ### SetSize ###
 * Set the sprite size on the screen
 * $$ spr.SetSize(w, h) $$
 * @param {num_frc} w 
 * @param {num_frc} h 
 */


/** ### SetSpriteSheet ###
 * Change the animation to another.
 * $$ spr.SetSpriteSheet(sheet) $$
 * @param {gvo} sheet CreateSpriteSheet
 */


/** ### SetTexture ###
 * Change the sprite texture to another.
 * $$ spr.SetTexture(tx) $$
 * @param {gvo} tx CreateTexture
 */


/** ### SetTween ###
 * Sets up tween methods and properties without playing it.
 * $$ spr.SetTween() $$
 */


/** ### _sprite ###
 * 
 * $$ spr._sprite() $$
 * @returns ?
 */


/** ### StartTween ###
 * Start tweening automatically on every rendered frame.
 * $$ spr.StartTween() $$
 */


/** ### StepTween ###
 * Updates a tween to the current time (if not paused).
 * $$ spr.StepTween() $$
 */


/** ### Stop ###
 * Stop playin the animation.
 * $$ spr.Stop() $$
 */


/** ### StopAt ###
 * Causes the animation to stop playing at a specific frame
 * $$ spr.StopAt(frame) $$
 * @param {num_int} frame 
 */


/** ### _texture ###
 * 
 * $$ spr._texture() $$
 * @returns str
 */


/** ### Tween ###
 * Performs an animation on the control. * The `target` object is for the position, size and rotation that the control has at the end of the animation. *  * The `type` specifies the behavior and the speed of the animation. Separated by a dot, you must also specify whether you want to apply this behavior to the beginning (In), end (Out), or to both (InOut) times of the animation. *  * With the amount of `repeat`s you can control how many times you want to play the animation. *  * If you have `jojo` activated, the animation will alternate between forward and backward playback, so that if the repetition value is odd, the control will be at the start position again at the end of the animation. *  * Finally the `callback` function will be called after the animation has finished. Well, it's about time!
 * $$ spr.Tween(target, duration, type, repeat, yoyo, callback) $$
 * @param {obj} target { x:num_frc, y:num_frc, w:num_frc, w:num_frc, sw:num_frc
 * @param {num_mls} duration 
 * @param {str} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
 * @param {num_int} repeat 
 * @param {bin} yoyo 
 * @param {fnc_json} callback {}
 */


/** ### Update ###
 * Updates internal properties
 * $$ spr.Update() $$
 */


/** ### visible ###
 * Indicates the objects visibility state
 * $$ spr.visible() $$
 * @returns bin
 */


/** ### width ###
 * The obects width
 * $$ spr.width() $$
 * @returns num
 */


/** ### x ###
 * X-position on the screen.
 * $$ spr.x() $$
 * @returns num_frv
 */


/** ### y ###
 * Y-position on the screen.
 * $$ spr.y() $$
 * @returns num_frc
 */

// CreateSprite.txt --> All the sample codes

/** @Sample
 
 */

