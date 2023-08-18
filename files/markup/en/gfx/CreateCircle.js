
/** # CreateCircle #
 * @abbrev cir
 * @brief Creates a circle
 * Creates a circular game object.
 * $$ cir = gfx.CreateCircle(width, color, lineWidth, lineColor, lineAlpha, group) $$ 
 * @param {num_frc} width 
 * @param {num_col} color 
 * @param {num_pxl} lineWidth 
 * @param {num_col} lineColor 
 * @param {num_frc} lineAlpha 
 * @param {str} group 
 * @returns gvo-Circle
*/




// -------- VISIBLE METHODS & PROPERTIES --------- 


/**
 * @extern alpha
 */

/**
 * @extern angle
 */

/**
 * @extern Contains
 */

/**
 * @extern data
 */

/**
 * @extern graphic
 */

/**
 * @extern group
 */

/**
 * @extern height
 */

/**
 * @extern pivotX
 */

/**
 * @extern pivotY
 */

/**
 * @extern scaleX
 */

/**
 * @extern scaleY
 */

/**
 * @extern SetMatrix
 */

/**
 * @extern Update
 */

/**
 * @extern visible
 */

/**
 * @extern width
 */
// CreateCircle.txt --> All the sample codes

/** @Sample
<sample>
cfg.Game;

function OnLoad()
{
    <b>circle = gfx.CreateCircle( 0.4, 0xff1133, 6, 0x7799ff );</b>
}

function OnReady()
{
    gfx.AddGraphic( circle, 0.3, 0.2 );
    gfx.Play();
}
</sample>

 */

