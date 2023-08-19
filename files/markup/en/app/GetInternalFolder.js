// ------------- HEADER SECTION ------------- 


/** # GetInternalFolder #
 * @brief Get internal storage path
 * Get devices internal “/sdcard/” path. Normally it should be “/storage/emulated/legacy”.
 * 
 * See Also: @GetExternalFolder
 * $$ app.GetInternalFolder() $$ 
 * @returns str_pth
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Show Internal Storage Path
function OnStart()
{
    <b>var dir = app.GetInternalFolder();</b>
    app.Alert( dir );
}
 */
    
            