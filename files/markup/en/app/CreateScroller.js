// ------------- HEADER SECTION ------------- 


/** # CreateScroller #
 * @abbrev scr
 * @brief Returns a new Scroller object
 * 
 * $$ scr = app.CreateScroller(width, height, options) $$ 
 * @param {num_frc} width 
 * @param {num_frc} height 
 * @param {str_com} options FillX|FillY|FillXY,Horizontal|Vertical,NoScrollBar,ScrollFade
 * @returns dso-Scroller
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
If you have much data to display which doesn't fit in the area availabe, you probably want to use a **Scroller**. The options for the Scroller are the same as the LinearLayout fill options, which set how a Scroller sizes within it's parent:- “FillX”, “FillY” and “FillXY”. By default Scrollers will auto-size to wrap their contents.

To add other controls to your scroller you need to put them in a scroller [layout](CreateLayout.htm) first, which you can then add to the scroller object.
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### AddChild ###
 * Add a layout to the scroller.
 * $$ scr.AddChild(layout) $$
 * @param {dso} layout CreateLayout
 */


/** @extern AdjustColor */

/** @extern Animate */

/** @extern Batch */

/** @extern ClearFocus */

/** ### DestroyChild ###
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
 * Returns the horizontal scroll bar position.
 * $$ scr.GetScrollX() $$
 * @returns num_frc
 */


/** ### GetScrollY ###
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
 * Removes a scroller layout from the scroller.
 * $$ scr.RemoveChild(child) $$
 * @param {dso} child 
 */


/** ### ScrollBy ###
 * Scrolls relatively to the current scroll bar positions.
 * $$ scr.ScrollBy(x, y) $$
 * @param {num_frc} x 
 * @param {num_frc} y 
 */


/** ### ScrollTo ###
 * Scrolls to a given fixed position.
 * $$ scr.ScrollTo(x, y) $$
 * @param {num_frc} x 
 * @param {num_frc} y 
 */


/** @extern SetBackAlpha */

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
    
            