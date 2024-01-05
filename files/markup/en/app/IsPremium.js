// ------------- HEADER SECTION -------------


/** # IsPremium #
 * @brief Check if user has a DroidScript Premium subscription
 * Checks if the user has a DroidScript premium subscription inside the IDE.
 * $$ app.IsPremium() $$ 
 * @returns bin
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Check Premium subscription
function OnStart()
{
    <b>var premium = app.IsPremium();</b>
    app.Alert( premium, "IsPremium" );
}
 */
    
            
    
/**
@sample Python Check Premium subscription
from native import app

def OnStart():
    premium = app.IsPremium()
    app.Alert(premium, "IsPremium")
 */
    
            