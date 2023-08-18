
/** # GetThumbnail #
 * @brief Create downscaled copy of an image
 * Creates a downscaled copy of an existing image. Pass -1 as width or height to keep the aspect ratio.
 * 
 * See Also: @CreateImage
 * $$ app.GetThumbnail(source, destination, width, height) $$ 
 * @param {str_pth} source 
 * @param {str_pth} destination 
 * @param {num_pxl} width 
 * @param {num_pxl} height 
*/


// GetThumbnail.txt --> All the sample codes

/** @Sample
<sample Create Thumbnail>
function OnStart()
{
    lay = app.CreateLayout( "absolute" );

    img = app.CreateImage( "/Sys/Img/Hello.png" );
    lay.AddChild( img );

    <b>app.GetThumbnail( "/Sys/Img/Hello.png", "/sdcard/Hello_thmb.png", 100, -1 );
    thmb = app.CreateImage( "/sdcard/Hello_thmb.png" );
    lay.AddChild( thmb );</b>

    app.AddLayout( lay );
}
</sample>

 */

