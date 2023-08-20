// ------------- HEADER SECTION ------------- 


/** # CreateBackground #
 * @abbrev bck
 * @brief Returns a new background
 * Creates a background
 * $$ bck = gfx.CreateBackground(file, options) $$ 
 * @param {str_ptf} file 
 * @param {str_com} options stretch
 * @returns gvo-Background
*/




// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### Scroll ###
 * @brief Scroll Background
 * Scrolls the background by a given value
 * $$ bck.Scroll(x, y) $$
 * @param {num} x 
 * @param {num} y 
 */


/** ### loaded
 * @prop
 * @brief indicates if ready for use
 * Indicates if the background is ready for use
 * @returns bin
 */

                    

// ------------- SAMPLES ------------- 


    
/**
@sample Scroll
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
 */
    
            