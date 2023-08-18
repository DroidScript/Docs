
/** # InstallWallpaper #
 * @brief Install Wallpaper.js as device wallpaper
 * Let the user install a device wallpaper located in the 'Wallpaper.js' script in the project root folder.
 * 
 * <premium>
 * 
 * See also @CreateWallpaper.
 * $$ app.InstallWallpaper(packageName, className) $$ 
 * @param {str} packageName this
 * @param {str} className this
 * @returns bin
*/


// InstallWallpaper.txt --> All the sample codes

/** @Sample
<sample Install Wallpaper>
var walljs = `
function OnStart()
{
    wall = app.CreateWallpaper();

    var sw = app.GetScreenWidth( "real" )
    var sh = app.GetScreenHeight( "real" );
    img = app.CreateImage( "/Sys/Img/StarField.jpg", sw, sh, "px,wallpaper" );
}`;

function OnStart() {
    app.WriteFile( "Wallpaper.js", walljs );
    app.InstallWallpaper( "this", "this" );
    app.Exit();
}
</sample>

 */

