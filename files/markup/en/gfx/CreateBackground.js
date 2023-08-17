
/** # CreateBackground #
 * @abbrev bck
 * Creates a background
 * $$ bck = gfx.CreateBackground(file, options) $$ 
 * @param {str_ptf} file 
 * @param {str_com} options stretch
 * @returns gvo-Background
*/


/** ## Methods ##
 * These are the methods available for CreateBackground
 */


/** ### Scroll ###
 * Scrolls the background by a given value
 * $$ bck.Scroll(x, y) $$
 * @param {num} x 
 * @param {num} y 
 */


/** ### loaded ###
 * Indicates if the background is ready for use
 * $$ bck.loaded() $$
 * @returns bin
 */


/** ### _sprite ###
 * 
 * $$ bck._sprite() $$
 * @returns PIXI.Sprite
 */


/** ### _texture ###
 * 
 * $$ bck._texture() $$
 * @returns PIXI.Texture
 */

// CreateBackground.txt --> All the sample codes

/** @Sample
<sample Scroll>
cfg.Game;

function OnLoad()
{
    sky = gfx.CreateBackground( "/Sys/Img/Sky.jpg", "stretch" );
}

function OnReady()
{
    gfx.AddBackground( sky );
	gfx.Play();
}

function OnAnimate(t,dt)
{
    <b>sky.Scroll(-dt/1000, 0);</b>
}
</sample>

 */

