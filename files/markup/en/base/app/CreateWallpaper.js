
/** # CreateWallpaper #
 * @abbrev wlp
 * Creates a wallpaper instance in the wallpaper.js script.
 * 
 * <premium>
 * $$ wlp = app.CreateWallpaper(options) $$ 
 * @param {str_com} options 
*/


/** ## Methods ##
 * These are the methods available for CreateWallpaper
 */


/** ### Batch ###
 * Batch method calls to be able to set all object's properties at once. * Note that you need to specify each parameter (use “” or <js nobox>null</js> to leave some out) * Inherited methods can be called by appending an underscore to the function name (ie. <js nobox>txt.Batch({ SetBackColor_: [“red”] })</js>
 * $$ wlp.Batch(properties) $$
 * @param {obj} properties { COMMAND:lst
 */


/** ### GetType ###
 * Returns the control class name.
 * $$ wlp.GetType() $$
 */


/** ### IsVisible ###
 * Returns whether the control is currently visible to the user, ignoring overlaying controls.
 * $$ wlp.IsVisible() $$
 * @returns bin
 */


/** ### Method ###
 * Allows access to other functions defined on the object in Java via reflection. *  * <premium>
 * $$ wlp.Method(name, types, p1, p2, p3, p4) $$
 * @param {str} name 
 * @param {lst} types boolean,char,byte,short,int,long,float,double,String,CharSequence,...
 * @param {str} p1 
 * @param {str} p2 
 * @param {str} p3 
 * @param {str} p4 
 * @returns all
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

