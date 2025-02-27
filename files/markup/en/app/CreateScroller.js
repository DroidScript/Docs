// ------------- HEADER SECTION -------------


/** # CreateScroller #
 * @abbrev scr
 * @brief Returns a new Scroller object
 *
 * $$ scr = app.CreateScroller(width=-1, height=-1, options?) $$
 * @param {num_frc} [width=-1]
 * @param {num_frc} [height=-1]
 * @param {str_com} [options] FillX|FillY|FillXY,Horizontal|Vertical,NoScrollBar,ScrollFade
 * @returns dso-Scroller
*/


// ------------- LONG DESCRIPTION -------------

/** @Description
If you have much data to display which doesn't fit in the area availabe, you probably want to use a **Scroller**. The options for the Scroller are the same as the LinearLayout fill options, which set how a Scroller sizes within it's parent:- “FillX”, “FillY” and “FillXY”. By default Scrollers will auto-size to wrap their contents.

To add other controls to your scroller you need to put them in a scroller [layout](CreateLayout.htm) first, which you can then add to the scroller object.
 */



// ------------- VISIBLE METHODS & PROPERTIES -------------


/** ### AddChild ###
 * @brief Add a layout control
 * Add a layout to the scroller.
 * $$ scr.AddChild(layout) $$
 * @param {dso} layout CreateLayout
 */


/** @extern AdjustColor */

/** @extern Animate */

/** @extern Batch */

/** @extern data */

/** @extern ClearFocus */

/** ### DestroyChild ###
 * @brief Devil rises and takes a child with him to hell
 * Removes and releases a child object.
 * $$ scr.DestroyChild(layout) $$
 * @param {dso} layout CreateLayout
 */


/** @extern Focus */

/** @extern GetAbsHeight */

/** @extern GetAbsWidth */

/** @extern GetHeight */

/** @extern GetLeft */

/** @extern GetParent */

/** @extern GetPosition */

/** ### GetScrollX ###
 * @brief Get horizontal scroll bar position
 * Returns the horizontal scroll bar position.
 * $$ scr.GetScrollX() $$
 * @returns num_frc
 */


/** ### GetScrollY ###
 * @brief Get vertical scroll bar position
 * Returns the vertical scroll bar position.
 * $$ scr.GetScrollY() $$
 * @returns num_frc
 */


/** @extern GetTop */

/** ### GetType ###
 * Returns the control class name.
 * $$ scr.GetType() $$
 * @returns str-Scroller
 */


/** @extern GetVisibility */

/** @extern GetWidth */

/** @extern Gone */

/** @extern Hide */

/** @extern IsEnabled */

/** @extern IsOverlap */

/** @extern IsVisible */

/** @extern Method */

/** ### RemoveChild ###
 * @brief Remove a scroller layout
 * Removes a scroller layout from the scroller.
 * $$ scr.RemoveChild(child) $$
 * @param {dso} child
 */


/** ### ScrollBy ###
 * @brief Scroll relative to the current position
 * Scrolls relatively to the current scroll bar positions.
 * $$ scr.ScrollBy(x, y) $$
 * @param {num_frc} x
 * @param {num_frc} y
 */


/** ### ScrollTo ###
 * @brief Scrolls to a given position
 * Scrolls to a given fixed position.
 * $$ scr.ScrollTo(x, y) $$
 * @param {num_frc} x
 * @param {num_frc} y
 */


/** @extern SetBackAlpha */

/** @extern Resize */

/** @extern SetBackColor */

/** @extern SetBackGradient */

/** @extern SetBackGradientRadial */

/** @extern SetBackground */

/** @extern SetColorFilter */

/** @extern SetDescription */

/** @extern SetEnabled */

/** @extern SetMargins */

/** @extern SetPadding */

/** @extern SetPosition */

/** @extern SetScale */

/** @extern SetSize */

/** @extern SetVisibility */

/** @extern SetWeight */

/** @extern Show */

/** @extern Tween */


// ------------- SAMPLES -------------



/**
@sample Example
function OnStart()
{
    lay = app.CreateLayout( "Linear", "FillXY" );

    <b>scroll = app.CreateScroller( 1.0, 1.0 );
    lay.AddChild( scroll );

    layScroll = app.CreateLayout( "Linear", "Left" );
    scroll.AddChild( layScroll );

    img = app.CreateImage( "/Sys/Img/Hello.png", 2.0, 2.0 );
    layScroll.AddChild( img );</b>

    app.AddLayout( lay );
}
 */



/**
@sample Python Example
from native import app

def OnStart():
    lay = app.CreateLayout("Linear", "FillXY")

    <b>scroll = app.CreateScroller(1.0, 1.0)
    lay.AddChild(scroll)

    layScroll = app.CreateLayout("Linear", "Left")
    scroll.AddChild(layScroll)

    img = app.CreateImage("/Sys/Img/Hello.png", 2.0, 2.0)
    layScroll.AddChild(img)</b>

    app.AddLayout(lay)
 */

