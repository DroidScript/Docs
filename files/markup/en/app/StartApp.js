// ------------- HEADER SECTION ------------- 


/** # StartApp #
 * @brief Starts an app in a new window
 * Starts an app in a new window. **Note:** This function does only work in APKs because in the IDE your app is already running.
 * 
 * See Also: @StopApp
 * $$ app.StartApp(file, options, intent) $$ 
 * @param {str_ptf} file 
 * @param {str_com} options Portrait|Landscape,Transparent,Debug:start app in debug mode,Game:runs in GameView mode|remote
 * @param {str} intent { action:str&comma; type:str&comma; data:obj&comma; extras:obj }
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Example
function OnStart()
{
    <b>app.StartApp( "/sdcard/DroidScript/Hello World/Hello World.js" );</b>
}
 */
    
            