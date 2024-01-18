// ------------- HEADER SECTION -------------


/** # CreateSprite #
 * @abbrev spr
 * @brief Returns a new sprite object
 * 
 * $$ spr = gfx.CreateSprite(file, group, callback) $$ 
 * @param {str_ptf} file 
 * @param {str} [group] 
 * @param {fnc_json} [callback] {}
 * @returns gvo-CreateSprite
*/


// ------------- LONG DESCRIPTION ------------- 

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



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### added
 * @prop
 * @brief incicates if added to game
 * Indicates if the sprite has been added to the game
 * @returns bin
 */

                    
/** @extern alpha */

/** @extern angle */

/** ### aspect
 * @prop
 * @brief sprite aspect ratio
 * The aspect ratio of the sprite
 * @returns num
 */

                    
/** @extern Contains */

/** @extern data */

/** ### Flip ###
 * @brief Flip sprite
 * Flips the sprite on the horizontal and/or the vertical axis.
 * $$ spr.Flip(horiz, vert) $$
 * @param {bin} horiz 
 * @param {bin} vert 
 */


/** ### GetFrame ###
 * @brief Get current frame
 * Returns the current frame
 * $$ spr.GetFrame() $$
 * @returns num_int
 */


/** ### Goto ###
 * @brief go to animation frame
 * Displays a specific frame of an animation
 * $$ spr.Goto(frame) $$
 * @param {num_int} frame 
 */


/** @extern group */

/** @extern height */

/** @extern PauseTween */

/** @extern pivotX */

/** @extern pivotY */

/** ### Play ###
 * @brief play sprite animation
 * Start playing the sprite animation
 * $$ spr.Play(startFrame, speed, loop) $$
 * @param {num_int} startFrame 
 * @param {num_int} speed 
 * @param {bin} loop 
 */


/** ### PlayRange ###
 * @brief play range of animation frames
 * Start playing the sprite animation in a given frame range
 * $$ spr.PlayRange(firstFrame, lastFrame, speed, loop) $$
 * @param {num_int} firstFrame 
 * @param {num_int} lastFrame 
 * @param {num} speed 
 * @param {bin} loop 
 */


/** ### PlayTo ###
 * @brief play to animation frame
 * Play the animation until a specific frame is reached
 * $$ spr.PlayTo(frame) $$
 * @param {num_int} frame 
 */


/** @extern PlayTween */

/** @extern scaleX */

/** @extern scaleY */

/** ### SetLoop ###
 * @brief Set animation looping
 * Define if the animation should loop or stop at the end
 * $$ spr.SetLoop(loop) $$
 * @param {bin} loop 
 */


/** @extern SetMatrix */

/** ### SetPlaySpeed ###
 * @brief Set animation speed
 * Define at which speed the animation will play. 1 equals to 60 fps
 * $$ spr.SetPlaySpeed(speed) $$
 * @param {num} speed 
 */


/** ### SetRange ###
 * @brief Set animation frame range
 * Define the frame range the animation should show.
 * $$ spr.SetRange(firstFrame, lastFrame, loop, play, speed) $$
 * @param {num_int} firstFrame 
 * @param {num_int} lastFrame 
 * @param {bin} loop 
 * @param {bin} play 
 * @param {num} speed 
 */


/** ### SetSize ###
 * @brief Set sprite size
 * Set the sprite size on the screen
 * $$ spr.SetSize(w, h) $$
 * @param {num_frc} w 
 * @param {num_frc} h 
 */


/** ### SetSpriteSheet ###
 * @brief Change animation
 * Change the animation to another.
 * $$ spr.SetSpriteSheet(sheet) $$
 * @param {gvo} sheet CreateSpriteSheet
 */


/** ### SetTexture ###
 * @brief Change sprite texture
 * Change the sprite texture to another.
 * $$ spr.SetTexture(tx) $$
 * @param {gvo} tx CreateTexture
 */


/** @extern SetTween */

/** @extern StartTween */

/** @extern StepTween */

/** ### Stop ###
 * @brief Stop animation
 * Stop playin the animation.
 * $$ spr.Stop() $$
 */


/** ### StopAt ###
 * @brief Stop animation on frame
 * Causes the animation to stop playing at a specific frame
 * $$ spr.StopAt(frame) $$
 * @param {num_int} frame 
 */


/** @extern Tween */

/** @extern Update */

/** @extern visible */

/** @extern width */

/** ### x
 * @prop
 * X-position on the screen.
 * @returns num_frc
 */

                    
/** ### y
 * @prop
 * Y-position on the screen.
 * @returns num_frc
 */

                    