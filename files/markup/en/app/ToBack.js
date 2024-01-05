// ------------- HEADER SECTION -------------


/** # ToBack #
 * @brief Put the app in the background
 * Hides the app but continue running it in the background. If called, the global _OnPause_ event will be fired and if reshown, _OnResume_ is fired.
 * 
 * See Also: @ToFront
 * $$ app.ToBack() $$ 
*/




// ------------- SAMPLES ------------- 


    
/**
@sample App to Background
function OnStart()
{
    alert( "App will now go to back." );
    app.ToBack();
}

function OnPause()
{
    app.ShowPopup( "OnPause" );
}

function OnResume()
{
    app.ShowPopup( "OnResume" );
}
 */
    
            
    
/**
@sample Python App to Background
from native import app

def OnStart():
    app.Alert("App will now go to back.")
    app.ToBack()

def OnPause():
    app.ShowPopup("OnPause")

def OnResume():
    app.ShowPopup("OnResume")
 */
    
            