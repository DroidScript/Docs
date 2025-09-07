// ------------- HEADER SECTION -------------


/** # SetAlarm #
 * @brief Set alarm to open your app at a specific time
 * Set a time when you want your app to start automatically if it is not already opened. When the alarm is fired, the global _OnAlarm_ event will be fired.
 * $$ app.SetAlarm(type, id?, callback?, time?, interval?, options?) $$
 * @param {str} type Set|Repeat|Cancel
 * @param {str||num_int} [id]
 * @param {fnc_json} [callback] {"pNames":["id"],"pTypes":["str||num_int"]}
 * @param {num_dat} [time]
 * @param {num_mls} [interval]
 * @param {str_com} [options] ExactIdle|Exact:only works for single shot alarms,App:Opens main app if called from a service
*/




// ------------- SAMPLES -------------



/**
@sample Set Alarm
function OnStart()
{
    <b>var now = Date.now();
    app.SetAlarm( "Set", 1234, OnAlarm, Date.now() + 3000 );</b>
    // app.ToBack();
    // app.Exit();
}

function OnAlarm( id )
{
    app.ShowPopup( "Got Alarm: id = " + id );
}
 */



/**
@sample Python Set Alarm
from native import app
import time as Date

def OnStart():
    <b>now = Date.now()
    app.SetAlarm("Set", 1234, OnAlarm, Date.now() + 3000)</b>
    # app.ToBack()
    # app.Exit()

def OnAlarm(id):
    app.ShowPopup("Got Alarm: id = " + str(id))
 */
