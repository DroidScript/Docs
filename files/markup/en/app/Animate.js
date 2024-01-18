// ------------- HEADER SECTION -------------


/** # Animate #
 * @brief Similar to setInterval
 *
 * $$ app.Animate(callback?, fps=-1) $$
 * @param {fnc_json} [callback] {"pNames":["time","dtime"],"pTypes":["num_mls","num_mls"]}
 * @param {num_fps} [fps=-1]
*/


// ------------- LONG DESCRIPTION -------------

/** @Description
Animate calls a function repeatedly like setInterval() but with the current time (Date.getTime()) and the difference to the last call in milliseconds as parameter.
To stop the animation loop you can pass _null_ as first argument.
You can not have multiple animation loops at once.
When using _cfg.NoDom_; you cannot use JavaScripts _setInterval_ but only the _Animate_ function.
<red>Note: The _NoDom_ option is currently not available due to GooglePlays 64bit requirement since August 2019.</red>

### Comparison
**normal**:
    _setInterval_: about 242 calls per second
    _app.Animate_: about 217 calls per second

**with “NoDom” option**:
    _setInterval_: error
    _app.Animate_: up to 1000 calls per second
 */



// ------------- SAMPLES -------------



/**
@sample Multiple Animation loops
function OnStart()
{
    lay = app.CreateLayout("Linear");

    txt1 = app.CreateText("0");
    lay.AddChild(txt1);

    txt2 = app.CreateText("0");
    lay.AddChild(txt2);

    app.AddLayout(lay);

    // delay between calls: 1000ms / 10fps = 100 ms
    // for higher precision use higher fps
    app.Animate(loop, 10);
}

var t1 = 0, t2 = 0, n1 = 0, n2 = 0;
function loop(t, dt)
{
    // set txt1 every 500 ms
    if(t - t1 >= 500)
    {
        txt1.SetText(++n1 + "\tdt: " + (t - t1));
        t1 = t;
    }

    // set txt2 every 300 ms
    if(t - t2 >= 300)
    {
        txt2.SetText(++n2 + "\tdt: " + (t - t2));
        t2 = t;
    }
}
 */



/**
@sample Digital Clock
function OnStart()
{
    app.SetOrientation( "Portrait" );
    app.SetDebugEnabled( false );

    lay = app.CreateLayout( "Linear", "FillXY,VCenter" );

    txt = app.CreateText( "", -1, -1, "multiline" );
    txt.SetTextSize( 30 );
    lay.AddChild( txt );

    app.AddLayout( lay );

    <b>app.Animate( OnAnimate, 30 );</b>
}

function OnAnimate( time, dtime )
{
    txt.SetText( new Date().toLocaleString() + "\n" + time );
}
 */



/**
@sample SpeedTest
cfg.No_Dom;

var ltime = Date.now(), c = 0;

function OnStart()
{
    lay = app.CreateLayout( "Linear", "FillXY,VCenter" );

    txt = app.CreateText( "", .5, .1, "left" );
    lay.AddChild( txt );

    app.AddLayout( lay );

    <b>app.Animate(OnAnimate, 1000);</b>
}

function OnAnimate( time, dtime )
{
    c++;
    if( time - ltime >= 1000 ) {
        txt.SetText( c + " cps" );
        ltime = time;
        c = 0;
    }
}
 */



/**
@sample Python Multiple Animation loops
from native import app

def OnStart():
    global txt1, txt2, n1, n2
    lay = app.CreateLayout("Linear")

    txt1 = app.CreateText("0")
    lay.AddChild(txt1)

    txt2 = app.CreateText("0")
    lay.AddChild(txt2)

    app.AddLayout(lay)

    # delay between calls: 1000ms / 10fps = 100 ms
    # for higher precision use higher fps
    app.Animate(loop, 10)

t1 = 0
t2 = 0
n1 = 0
n2 = 0
def loop(t, dt):
    # set txt1 every 500 ms
    if t - t1 >= 500:
        txt1.SetText(str(++n1) + "\tdt: " + str(t - t1))
        t1 = t

    # set txt2 every 300 ms
    if t - t2 >= 300:
        txt2.SetText(str(++n2) + "\tdt: " + str(t - t2))
        t2 = t
 */



/**
@sample Python Digital Clock
from native import app

def OnStart():
    global txt
    app.SetOrientation("Portrait")
    app.SetDebugEnabled(False)

    lay = app.CreateLayout("Linear", "FillXY,VCenter")

    txt = app.CreateText("", -1, -1, "multiline")
    txt.SetTextSize(30)
    lay.AddChild(txt)

    app.AddLayout(lay)

    <b>app.Animate( OnAnimate, 30 );</b>
    app.Animate(OnAnimate, 30)

def OnAnimate(time, dtime):
    txt.SetText(str(new Date().toLocaleString()) + "\n" + str(time))
 */



/**
@sample Python SpeedTest
# cfg.No_Dom

from native import app
import time as Date

ltime = Date.now()
c = 0

def OnStart():
    global txt
    lay = app.CreateLayout("Linear", "FillXY,VCenter")

    txt = app.CreateText("", .5, .1, "left")
    lay.AddChild(txt)

    app.AddLayout(lay)

    <b>app.Animate(OnAnimate, 1000);</b>
    app.Animate(OnAnimate, 1000)

def OnAnimate(time, dtime):
    c += 1
    if time - ltime >= 1000:
        txt.SetText(str(c) + " cps")
        ltime = time
        c = 0
 */
