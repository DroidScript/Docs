// ------------- HEADER SECTION ------------- 


/** # GetOptions #
 * @brief Get app options
 * Returns all current app settings. If ran from inside DroidScript, “debug,remote,holo” is the default value.
 * 
 * See Also: @SetOptions
 * $$ app.GetOptions() $$ 
 * @returns str_com-portrait,landscape,dark,light,holo,node,hybrid,mui,transparent,debug,remote,noswapify
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Show App Options
cfg.No_Dom, cfg.Portrait;

function OnStart()
{
	var opt = app.GetOptions();
	app.Alert( opt );
}
 */
    
            
    
/**
@sample Python 
# cfg.No_Dom, cfg.Portrait

from native import app

def OnStart():
    opt = app.GetOptions()
    app.Alert( opt )
 */
    
            