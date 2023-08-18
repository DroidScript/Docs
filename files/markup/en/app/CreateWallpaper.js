
/** # CreateWallpaper #
 * @abbrev wlp
 * @brief Returns a new Wallpaper object
 * Creates a wallpaper instance in the wallpaper.js script.
 * 
 * <premium>
 * $$ wlp = app.CreateWallpaper(options) $$ 
 * @param {str_com} options 
*/




// -------- VISIBLE METHODS & PROPERTIES --------- 


/**
 * @extern Batch
 */

/** ### GetType ###
 * Returns the control class name.
 * $$ wlp.GetType() $$
 */


/**
 * @extern IsVisible
 */

/**
 * @extern Method
 */
// CreateWallpaper.txt --> All the sample codes

/** @Sample
<sample Basic>
function OnStart()
{
    app.ShowPopup( "Hello from wallpaper!" )

    wall = app.CreateWallpaper();
    var sw = app.GetScreenWidth( "real" )
    var sh = app.GetScreenHeight( "real" );
    img = app.CreateImage( "/Sys/Img/StarField.jpg", sw,sh, "px,wallpaper" );
}
</sample>

 */

