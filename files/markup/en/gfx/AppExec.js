// ------------- HEADER SECTION ------------- 


/** # AppExec #
 * @brief Executes code in the main app
 * Executes some code in the main app.
 * $$ gfx.AppExec(js) $$ 
 * @param {str_jsc} js 
*/




// ------------- SAMPLES ------------- 


    
/**
@sample 
cfg.Game;

function OnLoad()
{
    gfx.AppExec( "app.ShowPopup('Hello from Game')");
}

function OnReady() {}
 */
    
            
    
/**
@sample Python 
# cfg.Game

from native import app

def OnLoad():
    gfx.AppExec( "app.ShowPopup('Hello from Game')" )

def OnReady():
    pass
 */
    
            