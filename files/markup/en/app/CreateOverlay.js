// ------------- HEADER SECTION -------------


/** # CreateOverlay #
 * @abbrev ovl
 * @brief Returns a new Overlay object
 * Overlays are displayed above everything on the screen - even on the home screen or above other applications. Overlays can be created from services as well which makes them almost perfect for interacting with them.
 *
 * <premium>
 * $$ ovl = app.CreateOverlay(options?) $$
 * @param {str_com} [options] ShowWhenLocked,TurnScreenOn,KeepScreenOn
 * @returns dso-Overlay
*/




// ------------- VISIBLE METHODS & PROPERTIES -------------


/** ### AddLayout ###
 * @brief Adds layout to overlay
 * Adds a layout to the overlay.
 * $$ ovl.AddLayout(layout, left=0, top=0, options?) $$
 * @param {dso} layout CreateLayout
 * @param {num_frc} [left=0]
 * @param {num_frc} [top=0]
 * @param {str} [options] px
 */


/** @extern Batch */

/** @extern GetParent */

/** ### GetType ###
 * Returns the control class name.
 * $$ ovl.GetType() $$
 * @returns str-Overlay
 */


/** ### RemoveLayout ###
 * @brief Remove layout from overlay
 * Removes a layout from the overlay.
 * $$ ovl.RemoveLayout(layout) $$
 * @param {dso} layout CreateLayout
 */


/** ### SetPosition ###
 * @brief Changes a child layout position
 * Defines the position of a contained layout.
 * $$ ovl.SetPosition(layout, left=0, top=0, options?) $$
 * @param {dso} layout CreateLayout
 * @param {num_frc} [left=0]
 * @param {num_frc} [top=0]
 * @param {str} [options] px
 */



// ------------- SAMPLES -------------



/**
@sample Memory Monitor
cfg.Portrait;

function OnStart()
{
    app.ToBack();
	lay = app.CreateLayout( "Linear" );

    img = app.CreateImage( null, .3, .1 );
    img.SetBackColor( "#66333333" );
    img.SetAutoUpdate( false );
    lay.AddChild( img );

	ovl = app.CreateOverlay();
    ovl.AddLayout( lay, 0.8, app.GetTop() );

    app.Animate( Update, 1 );
}

var lst = new Array(100).fill(1e5);

function Update( time )
{
    var mem = app.GetMemoryInfo();
    lst.push( Math.round( 100 * mem.avail / mem.total ) - 50 );
    lst = lst.slice( -100 );

    img.Clear();
    img.SetPaintColor( "red" );
    img.DrawLine( 0, mem.threshold / mem.total, 1, mem.threshold / mem.total );

    img.SetPaintColor( "white" );
    img.DrawSamples( lst, 50 );
    img.Update();
}
 */



/**
@sample Python Memory Monitor
# cfg.Portrait

from native import app

def OnStart():
    global img
    app.ToBack()
    lay = app.CreateLayout("Linear")

    img = app.CreateImage(None, 0.3, 0.1)
    img.SetBackColor("#66333333")
    img.SetAutoUpdate(False)
    lay.AddChild(img)

    ovl = app.CreateOverlay()
    ovl.AddLayout(lay, 0.8, app.GetTop())

    app.Animate(Update, 1)

lst = [1e5] * 100

def Update(time, dtime):
    mem = app.GetMemoryInfo()
    lst.append(round(100 * mem.avail / mem.total) - 50)
    lst = lst[-100:]

    img.Clear()
    img.SetPaintColor("red")
    img.DrawLine(0, mem.threshold / mem.total, 1, mem.threshold / mem.total)

    img.SetPaintColor("white")
    img.DrawSamples(lst, 50)
    img.Update()
 */
