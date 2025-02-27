// ------------- HEADER SECTION -------------


/** # CreateLayout #
 * @abbrev lay
 * @brief Returns a new Layout object
 *
 * $$ lay = app.CreateLayout(type, options?) $$
 * @param {str} type Linear|Absolute|Frame|Card
 * @param {str_com} [options] AutoSize:Resizes itself and child controls after device rotation,TouchThrough:forwards touch events to underlying children,TouchSpy:spies for touch events on all children,Left|Top|Right|Bottom|Center|H/VCenter,Wrap,Horizontal|Vertical,FillX/Y
 * @returns dso-Layout
*/


// ------------- LONG DESCRIPTION -------------

/** @Description
Layouts are container objects which are used to visually organize graphical objects (controls), such as text, buttons and images on the screen. There are 4 types of layouts: _**“Linear”**_, _**“Absolute”**_, _**“Frame”**_ and _**“Card”**_.

Layouts are transparent by default but you can set a background image which can be tiled or stretched to fill the layout. You can also set a background color or background gradient.

You can add child objects to the Layout using the AddChild function: <js>lay.AddChild( object );</js>
The alignment of chlld objects within a layout can be set by adding the **options** “Left”, “Right”, “Bottom” and “VCenter”, by default objects will be aligned “Top,Center”.

### Linear Layouts
Linear layouts are probably the most useful type and are used to organize controls in either the default “Vertical” or “Horizontal” direction on screen.
<sample Vertical>
<sample Horizontal>

By default Layouts will auto-size to wrap their contents but you have 3 more options as to how a layout sizes within it's parent: “FillX”, “FillY” and “FillXY”.
<sample Combined>

### Frame Layouts
Frame layouts are used to display objects in front or behind each other. Every time the **AddChild** function is called on a Frame layout, the child object is placed in a new layer in front of the previously added object at the top left of the frame.

Frame Layouts are useful if you wish to do **animated Flips** or **Slides** to reveal layers of objects or use **transparency**.
<sample Image Swap>

### Absolute Layouts
Absolute layouts ignore all alignment options and allow the absolute positioning of controls by calling the **SetPosition** and **SetSize** functions of each of the child objects. However, you are encouraged use linear layouts for most of your programs, unless it is _absolute_ly necessary.

### Card Layouts
Card Layouts are just like frame layouts, but with rounded corners and a shadow by default.
They may be used to display offers with an image and optional info text.
 */



// ------------- VISIBLE METHODS & PROPERTIES -------------


/** ### AddChild ###
 * @brief Add a control to the layout
 * Adds a control to the layout.
 * $$ lay.AddChild(child, order?) $$
 * @param {dso} child
 * @param {num_int} [order]
 */


/** @extern AdjustColor */

/** @extern Animate */

/** @extern Batch */

/** @extern data */

/** ### ChildToFront ###
 * @brief Moves a child to the layout front
 * Moves a child in front of all other children.
 * $$ lay.ChildToFront(child) $$
 * @param {dso} child
 */


/** @extern ClearFocus */

/** ### DestroyChild ###
 * Destroys and removes a child from the layout.
 * $$ lay.DestroyChild(child) $$
 * @param {dso} child
 */


/** @extern Focus */

/** @extern GetAbsHeight */

/** @extern GetAbsWidth */

/** ### GetChildOrder ###
 * Returns the z order of a child.
 * $$ lay.GetChildOrder(child) $$
 * @param {dso} child
 * @returns num_int
 */


/** @extern GetHeight */

/** @extern GetLeft */

/** @extern GetParent */

/** @extern GetPosition */

/** @extern GetTop */

/** ### GetType ###
 * Returns the control class name.
 * $$ lay.GetType() $$
 * @returns str-Layout
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
 * @brief Remove a child from the layout
 * Removes a child from the layout.
 * $$ lay.RemoveChild(child) $$
 * @param {dso} child
 */


/** @extern SetBackAlpha */

/** @extern Resize */

/** @extern SetBackColor */

/** @extern SetBackGradient */

/** @extern SetBackGradientRadial */

/** @extern SetBackground */

/** @extern SetColorFilter */

/** ### SetChildMargins ###
 * Set margins of top-level children.
 * $$ lay.SetChildMargins(left=0, top=0, right=0, bottom=0, mode='px') $$
 * @param {num} [left=0]
 * @param {num} [top=0]
 * @param {num} [right=0]
 * @param {num_frc} [bottom=0]
 * @param {str} [mode='px'] px|sp|dip|mm|pt
 */


/** ### SetChildTextSize ###
 * @brief Change text size of top-level children.
 * Change the text size of top-level children.
 * $$ lay.SetChildTextSize(size, mode='px') $$
 * @param {num} size
 * @param {str} [mode='px'] px|dip|sp|mm|pt|pl:scales text in proportion with device resolution|ps:scales text in proportion with device resolution
 */


/** ### SetCornerRadius ###
 * @brief Apply corner radius to card layouts's
 * Applies a corner radius to card layouts.
 * $$ lay.SetCornerRadius(radius) $$
 * @param {num_pxl} radius
 */


/** ### SetElevation ###
 * @brief Apply shadow to card layouts's
 * Applies a shadow to card layouts.
 * $$ lay.SetElevation(elevation) $$
 * @param {num_pxl} elevation
 */


/** @extern SetDescription */

/** @extern SetEnabled */

/** ### SetGravity ###
 * Adjust the placing of contained children.
 * $$ lay.SetGravity(gravity) $$
 * @param {str} gravity Left,Top,Right,Bottom,VCenter,HCenter,FillX,FillY,FillXY
 */


/** @extern SetMargins */

/** ### SetOnChildChange ###
 * @brief Called when the user changed a control content
 * Defines a callback function which is called when the content of a child control has been changed by the user.
 * $$ lay.SetOnChildChange(callback) $$
 * @param {fnc_json} callback {"pNames":["src"],"pTypes":["dso"]}
 */


/** @extern SetOnLongTouch */

/** @extern SetOnTouch #2088093920 */

/** @extern SetOnTouchDown */

/** @extern SetOnTouchMove */

/** @extern SetOnTouchUp */

/** ### SetOrientation ###
 * Change the children orientation.
 * $$ lay.SetOrientation(orient) $$
 * @param {str} orient Horizontal|Vertical
 */


/** @extern SetPadding */

/** @extern SetPosition */

/** @extern SetScale */

/** @extern SetSize */

/** @extern SetTouchable */

/** ### SetTouchThrough ###
 * @brief Enable touch event forwarding
 * Define whether the layout should forward OnTouch events to underlying controls.
 * $$ lay.SetTouchThrough(through) $$
 * @param {bin} through
 */


/** @extern SetVisibility */

/** @extern SetWeight */

/** ### SetWeightSum ###
 * Defines the total weight of all child controls
 * $$ lay.SetWeightSum(sum) $$
 * @param {num} sum
 */


/** @extern Show */

/** @extern Tween */


// ------------- SAMPLES -------------



/**
@sample Vertical
function OnStart()
{
    <b>lay = app.CreateLayout( "Linear", "Vertical" );</b>

    btnA = app.CreateButton( "A", 0.2, 0.1 );
    lay.AddChild( btnA );

    btnB = app.CreateButton( "B", 0.2, 0.1 );
    lay.AddChild( btnB );

    btnC = app.CreateButton( "C", 0.2, 0.1 );
    lay.AddChild( btnC );

    app.AddLayout( lay );
}
 */



/**
@sample Horizontal
function OnStart()
{
    <b>lay = app.CreateLayout( "Linear", "Horizontal,FillXY" );</b>

    btnA = app.CreateButton( "A", 0.2, 0.1 );
    lay.AddChild( btnA );

    btnB = app.CreateButton( "B", 0.2, 0.1 );
    lay.AddChild( btnB );

    btnC = app.CreateButton( "C", 0.2, 0.1 );
    lay.AddChild( btnC );

    app.AddLayout( lay );
}
 */



/**
@sample Combined
function OnStart()
{
    layVert = app.CreateLayout( "Linear", "Vertical,FillXY" );

    btnA = app.CreateButton( "A", 0.6, 0.1 );
    layVert.AddChild( btnA );

    <b>layHoriz = app.CreateLayout( "Linear", "Horizontal" );
    layVert.AddChild( layHoriz );</b>

    btnB1 = app.CreateButton( "B1", 0.2, 0.1 );
    layHoriz.AddChild( btnB1 );
    btnB2 = app.CreateButton( "B2", 0.2, 0.1 );
    layHoriz.AddChild( btnB2 );
    btnB3 = app.CreateButton( "B3", 0.2, 0.1 );
    layHoriz.AddChild( btnB3 );

    btnC = app.CreateButton( "C", 0.6, 0.1 );
    layVert.AddChild( btnC );

    app.AddLayout( layVert );
}
 */



/**
@sample Image Swap
function OnStart()
{
    lay = app.CreateLayout( "Linear", "VCenter,FillXY" );

    <b>layFrm = app.CreateLayout( "Frame" );</b>
    img1 = app.CreateImage( "/Sys/Img/Droid1.png", 0.5 );
    layFrm.AddChild( img1 );

    img2 = app.CreateImage( "/Sys/Img/Hello.png", 0.5 );
    img2.SetVisibility( "Hide" );
    layFrm.AddChild( img2 );
    lay.AddChild( layFrm );

    btn = app.CreateButton( "Press Me" );
    btn.SetMargins( 0,0.1,0,0 );
    btn.SetOnTouch( btn_OnTouch );
    lay.AddChild( btn );

    app.AddLayout( lay );
}

function btn_OnTouch()
{
    if( img2.GetVisibility() == "Hide" )
        img2.SetVisibility( "Show" );
    else
       img2.SetVisibility( "Hide" );
}
 */



/**
@sample Python Vertical
from native import app

def OnStart():
    <b>lay = app.CreateLayout( "Linear", "Vertical" )</b>

    btnA = app.CreateButton( "A", 0.2, 0.1 )
    lay.AddChild( btnA )

    btnB = app.CreateButton( "B", 0.2, 0.1 )
    lay.AddChild( btnB )

    btnC = app.CreateButton( "C", 0.2, 0.1 )
    lay.AddChild( btnC )

    app.AddLayout( lay )
 */



/**
@sample Python Horizontal
from native import app

def OnStart():
    <b>lay = app.CreateLayout( "Linear", "Horizontal,FillXY" )</b>

    btnA = app.CreateButton( "A", 0.2, 0.1 )
    lay.AddChild( btnA )

    btnB = app.CreateButton( "B", 0.2, 0.1 )
    lay.AddChild( btnB )

    btnC = app.CreateButton( "C", 0.2, 0.1 )
    lay.AddChild( btnC )

    app.AddLayout( lay )
 */



/**
@sample Python Combined
from native import app

def OnStart():
    layVert = app.CreateLayout( "Linear", "Vertical,FillXY" )

    btnA = app.CreateButton( "A", 0.6, 0.1 )
    layVert.AddChild( btnA )

    <b>layHoriz = app.CreateLayout( "Linear", "Horizontal" )
    layVert.AddChild( layHoriz )</b>

    btnB1 = app.CreateButton( "B1", 0.2, 0.1 )
    layHoriz.AddChild( btnB1 )
    btnB2 = app.CreateButton( "B2", 0.2, 0.1 )
    layHoriz.AddChild( btnB2 )
    btnB3 = app.CreateButton( "B3", 0.2, 0.1 )
    layHoriz.AddChild( btnB3 )

    btnC = app.CreateButton( "C", 0.6, 0.1 )
    layVert.AddChild( btnC )

    app.AddLayout( layVert )
 */



/**
@sample Python Image Swap
from native import app

def OnStart():
    global img2
    lay = app.CreateLayout( "Linear", "VCenter,FillXY" )

    <b>layFrm = app.CreateLayout( "Frame" )</b>
    img1 = app.CreateImage( "/Sys/Img/Droid1.png", 0.5 )
    layFrm.AddChild( img1 )

    img2 = app.CreateImage( "/Sys/Img/Hello.png", 0.5 )
    img2.SetVisibility( "Hide" )
    layFrm.AddChild( img2 )
    lay.AddChild( layFrm )

    btn = app.CreateButton( "Press Me" )
    btn.SetMargins( 0,0.1,0,0 )
    btn.SetOnTouch( btn_OnTouch )
    lay.AddChild( btn )

    app.AddLayout( lay )

def btn_OnTouch():
    if img2.GetVisibility() == "Hide":
        img2.SetVisibility( "Show" )
    else:
        img2.SetVisibility( "Hide" )
 */

