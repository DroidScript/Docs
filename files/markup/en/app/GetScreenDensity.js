// ------------- HEADER SECTION -------------


/** # GetScreenDensity #
 * @brief Get the screen density
 * Returns the density of the device's screen.
 * 
 * See Also: @GetScreenWidth, @GetScreenHeight, @SetDensity
 * $$ app.GetScreenDensity() $$ 
 * @returns num_int
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Show Screen Density
function OnStart()
{
    <b>var dens = app.GetScreenDensity();</b>
    app.Alert( dens );
}
 */
    
            
    
/**
@sample Python Show Screen Density
from native import app

def OnStart():
    <b>dens = app.GetScreenDensity()</b>
    app.Alert(dens)
 */
    
            