// ------------- HEADER SECTION -------------


/** # IsTablet #
 * @brief Check if user device is a tablet
 * Checks if the user device is a tablet.
 * 
 * See Also: @IsChrome
 * $$ app.IsTablet() $$ 
 * @returns bin
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Check Tablet
function OnStart()
{
	<b>tablet = app.IsTablet();</b>
	app.ShowPopup( tablet, "Is Tablet:" );
}
 */
    
            
    
/**
@sample Python Check Tablet
from native import app

def OnStart():
    tablet = app.IsTablet()
    app.ShowPopup(str(tablet), "Is Tablet:")
 */
    
            