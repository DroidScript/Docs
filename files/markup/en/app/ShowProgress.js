// ------------- HEADER SECTION -------------


/** # ShowProgress #
 * @brief Show a progress indicator
 * Shows a rotating progress circle indicating that something happens and that the user should keep his extremities with him until the process completed.
 * $$ app.ShowProgress(message, options?) $$ 
 * @param {str} [message] 
 * @param {str_com} [options] NoDim:Don't darken background,NonModal:allow background touch,Solid:shows solid background behind spinner
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Show and Hide Progress
function OnStart()
{
	<b>app.ShowProgress( "Loading..." );
	setTimeout( "app.HideProgress()", 3000 );</b>
}
 */
    
            
    
/**
@sample Python Show and Hide Progress
from native import app

def OnStart():
    app.ShowProgress( "Loading..." )
    setTimeout( hideProgress, 3000 )

def hideProgress():
    app.HideProgress()
 */
    
            