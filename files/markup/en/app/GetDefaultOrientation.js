// ------------- HEADER SECTION -------------


/** # GetDefaultOrientation #
 * @brief Get devces default orientation
 * Returns the default Orientation of the device. The result modes can be “Portrait” if the device width is smaller than the device height, or “Landscape” vice versa.
 * 
 * See Also: @SetOrientation, @GetOrientation
 * $$ app.GetDefaultOrientation() $$ 
 * @returns str-Portrait|Landscape
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Show Default Orientation
function OnStart()
{
    <b>var orient = app.GetDefaultOrientation();</b>
    app.Alert( orient );
}
 */
    
            
    
/**
@sample Python 
from native import app

def OnStart():
    orient = app.GetDefaultOrientation()
    app.Alert(orient)
 */
    
            