// ------------- HEADER SECTION -------------


/** # CreateShortcut #
 * @brief Creates a Home-Screen shortcut to an app
 * This method creates a shortcut of an app on your home screen - referencing to a js file runnable with DS.
 * Note: since Android 9 this method prompts a system dialog
 * 
 * See also: @GetShortcuts
 * $$ app.CreateShortcut(name, iconFile, file, options?) $$ 
 * @param {str} name 
 * @param {str_ptf} iconFile 
 * @param {str_ptf} file 
 * @param {str_com} [options] Portrait|Landscape,Transparent,Debug:start app in debug mode,Game:runs in GameView mode|remote
 * @returns nil
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Demo
function OnStart()
{
    <b>var file = app.GetAppPath() + "/" + app.GetAppName() + ".js";
	app.CreateShortcut( "Demo", "/Sys/Img/Icon.png", file );</b>
    app.ShowPopup( "Add Shortcut" );
}
 */
    
            
    
/**
@sample Python 
from native import app

def OnStart():
    file = app.GetAppPath() + "/" + app.GetAppName() + ".js"
    app.CreateShortcut( "Demo", "/Sys/Img/Icon.png", file )
    app.ShowPopup( "Add Shortcut" )
 */
    
            