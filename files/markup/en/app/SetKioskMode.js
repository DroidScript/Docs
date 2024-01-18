// ------------- HEADER SECTION -------------


/** # SetKioskMode #
 * @brief Blocks android functionality outside your app
 * Blocks android functionality to keep the rest of your phone safe while others may use your app.
 *
 * <premium>
 * <xfeature>
 * $$ app.SetKioskMode(mode, enable?, options='', packages?) $$
 * @param {str_com} mode Power,Status,Nav,NavRight,LockTask:COSU kiosk,Pin:task un-/pinning
 * @param {bin} [enable]
 * @param {str_com} [options=''] Black,Tasks:prevents recent tasks button working
 * @param {str} [packages]
*/




// ------------- SAMPLES -------------



/**
@sample Demo
function OnStart()
{
    app.SetKioskMode( "Status,Nav", true, "Black" );
}
 */



/**
@sample Python Demo
from native import app

def OnStart():
    app.SetKioskMode( "Status,Nav", True, "Black" )
 */
