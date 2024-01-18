// ------------- HEADER SECTION -------------


/** # CreateRectangle #
 * @abbrev rct
 * @brief Creates a rectangle
 * Creates a rectangular game object.
 * $$ rct = gfx.CreateRectangle(width, height, color, lineWidth?, lineColor?, lineAlpha?, group?) $$ 
 * @param {num_frc} width 
 * @param {num_frc} height 
 * @param {num_col} color 
 * @param {num_pxl} [lineWidth] 
 * @param {num_col} [lineColor] 
 * @param {num_frc} [lineAlpha] 
 * @param {str} [group] 
 * @returns gvo-Rectangle
*/




// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** @extern alpha */

/** @extern angle */

/** @extern Contains */

/** @extern data */

/** @extern graphic */

/** @extern group */

/** @extern height */

/** @extern pivotX */

/** @extern pivotY */

/** @extern scaleX */

/** @extern scaleY */

/** @extern SetMatrix */

/** @extern Update */

/** @extern visible */

/** @extern width */


// ------------- SAMPLES ------------- 


    
/**
@sample 
cfg.Game;

function OnLoad()
{
    <b>rect = gfx.CreateRectangle( 0.4, 0.4, 0x00ffff, 6, 0xee3355 );</b>
}

function OnReady()
{
    gfx.AddGraphic( rect, 0.3, 0.2 );
    gfx.Play();
}
 */
    
            
    
/**
@sample Python 
# cfg.Game

def OnLoad():
    global rect
    rect = gfx.CreateRectangle(0.4, 0.4, 0x00ffff, 6, 0xee3355)

def OnReady():
    gfx.AddGraphic(rect, 0.3, 0.2)
    gfx.Play()
 */
    
            