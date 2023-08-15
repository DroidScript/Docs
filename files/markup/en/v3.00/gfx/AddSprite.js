
/** # AddSprite #
 * Adds a [sprite](CreateSprite.htm) object to the game.
 * $$ gfx.AddSprite(sprite, x, y, w, h, angle, alpha) $$ 
 * @param {gvo} sprite CreateSprite
 * @param {num_frc} x 
 * @param {num_frc} y 
 * @param {num_frc} w 
 * @param {num_frc} h 
 * @param {num_frc} angle 
 * @param {num_frc} alpha 
*/


// AddSprite.txt --> All the sample codes

/** @Sample
<sample>

cfg.Game;

function OnLoad()
{
    droid = gfx.CreateSprite( "/Sys/Img/Hello.png" );
}

function OnReady()
{
    gfx.AddSprite( droid, 0.2, 0.4, 0.5 );
    gfx.Play();
}
</sample>

 */

