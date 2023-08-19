// ------------- HEADER SECTION ------------- 


/** # RedirectAssets #
 * @brief Read assets from given folder
 * Reads the assets folders “Img”,“Snd”,“Html” and “Misc” from an external folder outside the apk.
 * $$ app.RedirectAssets(dir) $$ 
 * @param {str_ptd} dir 
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Redirect Assets
function OnStart()
{
    <b>app.RedirectAssets("/sdcard/DroidScript/Hello World/");</b>

    lay = app.CreateLayout( "Linear", "VCenter,FillXY" );

    img = app.CreateImage( "Img/Hello World.png" );
    lay.AddChild( img );

    app.AddLayout( lay );
}
 */
    
            