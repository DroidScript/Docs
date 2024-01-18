// ------------- HEADER SECTION -------------


/** # AddGraphic #
 * Adds a basic shape object to the game.
 * See Also: @CreateCircle, @CreateEllipse, @CreateRectangle, @CreatePolygon
 * $$ gfx.AddGraphic(obj, x, y, w, h, angle, alpha) $$ 
 * @param {obj} obj 
 * @param {num_frc} x 
 * @param {num_frc} y 
 * @param {num_frc} [w] 
 * @param {num_frc} [h] 
 * @param {num_rad} [angle] 
 * @param {num_frc} [alpha] 
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Basic
cfg.Game;

function OnLoad()
{
    rect = gfx.CreateRectangle( 0.8, 0.1, 0xff, 3, 0x5555ff, 1, "floor" );
}

function OnReady()
{
    <b>gfx.AddGraphic( rect, .1, 0.4 );</b>
	gfx.Play();
}
 */
    
            
    
/**
@sample Python Basic
# cfg.Game

def OnLoad():
    global rect
    rect = gfx.CreateRectangle(0.8, 0.1, 0xff, 3, 0x5555ff, 1, "floor")

def OnReady():
    gfx.AddGraphic(rect, .1, 0.4)
    gfx.Play()
 */
    
            