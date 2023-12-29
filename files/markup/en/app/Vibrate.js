// ------------- HEADER SECTION ------------- 


/** # Vibrate #
 * @brief Vibrate device in a pattern
 * Makes the device vibrate in a specified pattern in millisecond values:
 * “pause:num\_mls,play:num\_mls,pause:num\_mls,play:num\_mls,...”
 * $$ app.Vibrate(pattern) $$ 
 * @param {str_com} pattern 
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Example
function OnStart()
{
	<b>app.Vibrate( "0,100,30,100,50,300" );</b>
}
 */
    
            
    
/**
@sample Python Example
from native import app

def OnStart():
    app.Vibrate( "0,100,30,100,50,300" )
 */
    
            