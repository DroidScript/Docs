
/** # ScanFile #
 * Forces android to scan an image file to appear in the phone's gallery.
 * 
 * See also: @CreateImage, @CreateCameraView, @ScreenShot.
 * $$ app.ScanFile(file) $$ 
 * @param {str_ptf} file 
*/


// ScanFile.txt --> All the sample codes

/** @Sample
<sample Add Image to Gallery>
function OnStart()
{
    img = app.CreateImage( null, 1, 1 );
    img.SetPaintColor( "green" );
    img.DrawCircle( 0.5, 0.5, 0.3 );
    img.Save( app.GetAppPath() + "/circle.jpg" );

    app.ScanFile( "circle.jpg" );
    app.ChooseImage();
}
</sample>

 */

