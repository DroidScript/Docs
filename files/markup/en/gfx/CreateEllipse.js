// ------------- HEADER SECTION ------------- 


/** # CreateEllipse #
 * @abbrev elp
 * @brief Creates an ellipse
 * Creates a elliptical game object.
 * $$ elp = gfx.CreateEllipse(width, height, color, lineWidth, lineColor, lineAlpha, group) $$ 
 * @param {num_frc} width 
 * @param {num_frc} height 
 * @param {num_col} color 
 * @param {num_pxl} lineWidth 
 * @param {num_col} lineColor 
 * @param {num_frc} lineAlpha 
 * @param {str} group 
 * @returns gvo-Ellipse
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
    <b>ellipse = gfx.CreateEllipse( 0.7, 0.4*gfx.aspect, 0xcccc00, 10, 0xbb00ff );</b>
}

function OnReady()
{
    gfx.AddGraphic( ellipse, 0.1, 0.2 );
    gfx.Play();
}
 */
    
            