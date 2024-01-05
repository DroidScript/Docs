// ------------- HEADER SECTION -------------


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




// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### AddShape ###
 * @brief Adds velocity to the object
 * Adds linear and angular velocity to the object
 * $$ phs.AddShape(type, points) $$
 * @param {str} type Polygon
 * @param {lst} points [ [x:num_frc, y:num_frc] ]
 */


/** ### AddVelocity ###
 * @brief Adds velocity to the object
 * Adds linear and angular velocity to the object
 * $$ phs.AddVelocity(x, y, angular, bodyRelative) $$
 * @param {num} x 
 * @param {num} y 
 * @param {num} angular 
 * @param {bin} bodyRelative 
 */


/** ### ApplyImpulse ###
 * @brief Applies an impulse p=m*v to the object
 * Applies an impulse (impulse=velocity*mass) to the object
 * $$ phs.ApplyImpulse(x, y, offsetX, offsetY) $$
 * @param {num} x 
 * @param {num} y 
 * @param {num} offsetX -1..1
 * @param {num} offsetY -1..1
 */


/** ### Contains ###
 * @brief Checks if a point is in the hitbox
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
 * @brief Returns the total velocity or a component of it
 * Returns the current total linear velocity or the “x”, “y” or “angular” component.
 * $$ phs.GetVelocity(component) $$
 * @param {str} component x|y|angular
 * @returns num
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
 * @brief Set physics properties
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
 * @brief Define the collision shape
 * Defines the shape for collision detection of the object.
 * $$ phs.SetShape(shape, width, height) $$
 * @param {str} shape rect|round
 * @param {num_frc} width 
 * @param {num_frc} height 
 */


/** ### SetVelocity ###
 * @brief Set the object velocity
 * Set the velocity of the game object.
 * $$ phs.SetVelocity(x, y, angular, bodyRelative) $$
 * @param {num} x 
 * @param {num} y 
 * @param {num} angular 
 * @param {bin} bodyRelative 
 */


/** ### UpdatePhysics ###
 * @brief Update internal physics properties
 * Updates the internal position and size properties
 * $$ phs.UpdatePhysics() $$
 */



// ------------- SAMPLES ------------- 


    
/**
@sample Billiard
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
 */
    
            
    
/**
@sample Collision
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
 */
    
            
    
/**
@sample Python Billiard
# cfg.Game

def OnLoad():
    global ball1, ball2
    gfx.AddPhysics(0)
    gfx.Enclose(-1, "left,top,right,bottom", 1, 0.9, 0)

    ball1 = gfx.CreateSprite("/Sys/Img/Forward.png")
    ball2 = gfx.CreateSprite("/Sys/Img/Forward.png")

def OnReady():
    gfx.AddSprite(ball1, 0.2, 0.6, 0.16)
    ball1.SetPhysics(1, "Dynamic", 0.5, 0.8, 0.01)
    ball1.SetVelocity(2, -2.3)
    ball1.SetShape("round")

    gfx.AddSprite(ball2, 0.5, 0.6, 0.24)
    ball2.SetPhysics(1, "Dynamic", 0.5, 0.8, 0.01)
    ball2.SetVelocity(2, 2.3)
    ball2.SetShape("round")

    gfx.Play()
 */
    
            
    
/**
@sample Python Collision
# cfg.Game

def OnLoad():
    global bunny, squeak
    gfx.AddPhysics(20)
    gfx.Enclose(-1, "left,top,right,bottom", 1, 0.9, 0.01)

    bunny = gfx.CreateSprite("/Sys/Img/Bunny.png", "bunnies")
    squeak = gfx.CreateSound("/Sys/Snd/Squeak.mp3")

def OnReady():
    gfx.AddSprite(bunny, 0.2, 0.6, 0.05)
    bunny.SetPhysics(1, "Dynamic", 0.5, 0.9, 0.1)
    bunny.SetVelocity(2, -2.3)

    gfx.Play()

def OnCollide(a, b):
    if a.group == "bunnies":
        squeak.Play(False, 0, 0)
 */
    
            