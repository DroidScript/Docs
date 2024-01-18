// ------------- HEADER SECTION -------------


/** # GetDisplayWidth #
 * @brief Get apps display width
 * Get the display width of the app in pixels. Therefore virtual buttons won't be included to the value.
 *
 * See Also: @GetDisplayHeight, @GetScreenWidth
 * $$ app.GetDisplayWidth() $$
 * @returns num_pxl
*/




// ------------- SAMPLES -------------



/**
@sample Show display width
function OnStart()
{
    <b>var width = app.GetDisplayWidth();</b>
    app.Alert( width );
}
 */



/**
@sample Python
from native import app

def OnStart():
    width = app.GetDisplayWidth()
    app.Alert(width)
 */
