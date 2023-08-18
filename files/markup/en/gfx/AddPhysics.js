
/** # AddPhysics #
 * @abbrev phs
 * @brief Adds physics to the game
 * Adds the Box2D physics engine to your game.
 * <sample Billiard>
 * <sample Collision>
 * 
 * _The method list below shows the __functions which are added to game objects__ when using physics._
 * $$ phs = gfx.AddPhysics(gravity, accuracy, sleep) $$ 
 * @param {num} gravity 
 * @param {num} accuracy 
 * @param {num} sleep 
*/




// -------- VISIBLE METHODS & PROPERTIES --------- 


/** ### AddVelocity ###
 * Adds linear and angular velocity to the object
 * $$ phs.AddVelocity(x, y, angular, bodyRelative) $$
 * @param {num} x 
 * @param {num} y 
 * @param {num} angular 
 * @param {bin} bodyRelative 
 */


/** ### ApplyImpulse ###
 * Applies an impulse (impulse=velocity*mass) to the object
 * $$ phs.ApplyImpulse(x, y, offsetX, offsetY) $$
 * @param {num} x 
 * @param {num} y 
 * @param {num} offsetX 
 * @param {num} offsetY 
 */


/** ### Contains ###
 * Checks if a given point is in the hitbox
 * $$ phs.Contains(x, y) $$
 * @param {num_frc} x 
 * @param {num_frc} y 
 * @returns bin
 */


/** ### EnablePhysics ###
 * Temporally En/Disables physics for the game object.
 * $$ phs.EnablePhysics(enable) $$
 * @param {bin} enable 
 */


/** ### GetVelocity ###
 * Returns the current total linear velocity or the “x”, “y” or “angular” component.
 * $$ phs.GetVelocity(component) $$
 * @param {str} component x|y|angular
 * @returns number
 */


/** ### RemovePhysics ###
 * Removes physics from the game oblect.
 * $$ phs.RemovePhysics() $$
 */


/** ### SetMatrix ###
 * Applies a 2D transformation matrix to the game object.
 * $$ phs.SetMatrix(mtx) $$
 * @param {obj} mtx Matrix
 */


/** ### SetPhysics ###
 * Set the physics properties for the game object.
 * $$ phs.SetPhysics(groupId, type, density, bounce, friction, linearDamp, angularDamp) $$
 * @param {str} groupId 
 * @param {str} type moveable|fixed
 * @param {num} density 
 * @param {num} bounce 
 * @param {num} friction 
 * @param {num} linearDamp 
 * @param {num} angularDamp 
 */


/** ### SetShape ###
 * Defines the shape for collision detection of the object.
 * $$ phs.SetShape(shape, width, height) $$
 * @param {str} shape rect|round
 * @param {num_frc} width 
 * @param {num_frc} height 
 */


/** ### SetVelocity ###
 * Set the velocity of the game object.
 * $$ phs.SetVelocity(x, y, angular, bodyRelative) $$
 * @param {num} x 
 * @param {num} y 
 * @param {num} angular 
 * @param {bin} bodyRelative 
 */


/** ### UpdatePhysics ###
 * Updates the internal position and size properties
 * $$ phs.UpdatePhysics() $$
 */

// AddPhysics.txt --> All the sample codes

/** @Sample
<sample Billiard>

cfg.Game;

function OnLoad()
{
    <b>gfx.AddPhysics(0);
    gfx.Enclose( -1, "left,top,right,bottom", 1, 0.9, 0 );</b>

    ball1 = gfx.CreateSprite( "/Sys/Img/Forward.png" );
    ball2 = gfx.CreateSprite( "/Sys/Img/Forward.png" );
}

function OnReady()
{
    gfx.AddSprite( ball1, 0.2, 0.6, 0.16 );
    ball1.SetPhysics( 1, "Dynamic", 0.5, 0.8, 0.01 );
    ball1.SetVelocity( 2, -2.3 );
    ball1.SetShape( "round" );

    gfx.AddSprite( ball2, 0.5, 0.6, 0.24 );
    ball2.SetPhysics( 1, "Dynamic", 0.5, 0.8, 0.01 );
    ball2.SetVelocity( 2, 2.3 );
    ball2.SetShape( "round" );

    gfx.Play();
}
</sample>

<sample Collision>

cfg.Game;

function OnLoad()
{
    gfx.AddPhysics( 20 );
    gfx.Enclose( -1, "left,top,right,bottom", 1, 0.9, 0.01 );

    bunny = gfx.CreateSprite( "/Sys/Img/Bunny.png", "bunnies" );
    squeak = gfx.CreateSound( "/Sys/Snd/Squeak.mp3" );
}

function OnReady()
{
    gfx.AddSprite( bunny, 0.2, 0.6, 0.05 );
    bunny.SetPhysics( 1, "Dynamic", 0.5, 0.9, 0.1 );
    bunny.SetVelocity( 2, -2.3 );

    gfx.Play();
}


<b>function OnCollide( a, b )
{
    if( a.group == "bunnies" )
        squeak.Play( false, 0, 0 );
}</b>

</sample>

 */

