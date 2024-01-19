// ------------- HEADER SECTION -------------


/** # ScreenShot #
 * @brief Take a screen shot of your app
 * Takes a screen shot of your app and saves it to the specified path. Quality is an **option**al percentage value for jpg files defaulting to 95.
 *
 * See also: @GetMediaFile
 * $$ app.ScreenShot(fileName, quality?) $$
 * @param {str_ptf} fileName
 * @param {num_prc} [quality]
*/




// ------------- SAMPLES -------------



/**
@sample Take Screenshot
function OnStart()
{
    lay = app.CreateLayout( "linear" );
    img = app.CreateImage( null, 1, 1 );
    img.SetPaintColor( "green" );
    img.DrawCircle( 0.5, 0.5, 0.3 );
    lay.AddChild( img );
    app.AddLayout( lay );

    <b>app.ScreenShot( "/sdcard/file.jpg" );</b>
    img.SetImage( "/sdcard/file.jpg" );
}
 */



/**
@sample Python Take Screenshot
from native import app

def OnStart():
    lay = app.CreateLayout("linear")
    img = app.CreateImage(None, 1, 1)
    img.SetPaintColor("green")
    img.DrawCircle(0.5, 0.5, 0.3)
    lay.AddChild(img)
    app.AddLayout(lay)

    app.ScreenShot("/sdcard/file.jpg")
    img.SetImage("/sdcard/file.jpg")
 */
