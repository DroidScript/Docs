// ------------- HEADER SECTION -------------


/** # GetDisplayHeight #
 * @brief Get apps display height
 * Get the display height of the app in pixels. Therefore the android status bar and virtual buttons won't be included to the value.
 *
 * See Also: @GetDisplayWidth, @GetScreenHeight
 * $$ app.GetDisplayHeight() $$
 * @returns num_pxl
*/




// ------------- SAMPLES -------------



/**
@sample Show display height
function OnStart()
{
    <b>var height = app.GetDisplayHeight();</b>
    app.Alert( height );
}
 */



/**
@sample Python
from native import app

def OnStart():
    height = app.GetDisplayHeight()
    app.Alert(height)
 */
