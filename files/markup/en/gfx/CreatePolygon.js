// ------------- HEADER SECTION -------------


/** # CreatePolygon #
 * @abbrev pol
 * Creates a polygonal game object.
 * $$ pol = gfx.CreatePolygon(points, pivotX, pivotY, color, lineWidth, lineColor, lineAlpha, group) $$ 
 * @param {lst} points [ point_x_y:num_frc ]
 * @param {num_frc} pivotX 
 * @param {num_frc} pivotY 
 * @param {num_col} color 
 * @param {num_pxl} lineWidth 
 * @param {num_col} lineColor 
 * @param {num_frc} lineAlpha 
 * @param {str} group 
 * @returns gvo-Polygon
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
    <b>polygon = gfx.CreatePolygon( [0.2,0.6, 0.8,0.6, 0.5,0.2, 0.2,0.6], 0, 0, 0x33ff55, 6, 0xcc1122 );</b>
}

function OnReady()
{
    gfx.AddGraphic( polygon, 0.2, 0.7 );
    gfx.Play();
}
 */
    
            
    
/**
@sample Python 
# cfg.Game

def OnLoad():
    global polygon
    polygon = gfx.CreatePolygon([0.2,0.6, 0.8,0.6, 0.5,0.2, 0.2,0.6], 0, 0, 0x33ff55, 6, 0xcc1122 )

def OnReady():
    gfx.AddGraphic(polygon, 0.2, 0.7 )
    gfx.Play()
 */
    
            