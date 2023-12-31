// ------------- HEADER SECTION ------------- 


/** # CreateButton #
 * @abbrev btn
 * @brief Creates a button control
 * 
 * $$ btn = app.CreateButton(text, width, height, options) $$ 
 * @param {str} text 
 * @param {num_frc} width 
 * @param {num_frc} height 
 * @param {str_com} options FontAwesome,Html,Monospace,Normal|Aluminium|Gray|Lego,SingleLine,Custom,AutoShrink:Auto-shrinks text to fit,AutoSize:Auto-sizes text to fit,NoPad,FillX/Y,NoSound
 * @returns dso-Button
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Buttons created with the **CreateButton** method are used for interacting with the app. This is done by calling a callback function after clicking on the button. You can specify such a callback function with the **SetOnTouch** Method:
<js>
btn.SetOnTouch( btn\_OnTouch );

function btn\_OnTouch()
{
	// your OnTouch code goes here
}
</js>

### Styling
You can allow the button to auto-size by leaving out the dimensions
<sample Default Size>

or you can specify a **width** and **height** as decimal fractions.
<sample Fixed Size>

Setting the width and height to _-1_ whilst using the “FillX” option will allow it to fill the layout width.
<sample Fill Layout Width>

You can customize the visual look in many ways by either using one of the existing style **options** “Alum” or “Gray”, or you can use “Custom” and define a custom style with the **SetStyle** method.
<sample Change Style>
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** @extern AdjustColor */

/** @extern Animate */

/** @extern Batch */

/** @extern ClearFocus */

/** @extern Focus */

/** @extern GetAbsHeight */

/** @extern GetAbsWidth */

/** @extern GetHeight */

/** @extern GetLeft */

/** @extern GetParent */

/** @extern GetPosition */

/** @extern GetText */

/** @extern GetTextSize */

/** @extern GetTop */

/** ### GetType ###
 * Returns the control class name.
 * $$ btn.GetType() $$
 * @returns str-Button
 */


/** @extern GetVisibility */

/** @extern GetWidth */

/** @extern Gone */

/** @extern Hide */

/** @extern IsEnabled */

/** @extern IsOverlap */

/** @extern IsVisible */

/** @extern Method */

/** @extern SetBackAlpha */

/** @extern Resize */

/** @extern SetBackColor */

/** @extern SetBackGradient */

/** @extern SetBackGradientRadial */

/** @extern SetBackground */

/** @extern SetColorFilter */

/** @extern SetDescription */

/** @extern SetEllipsize */

/** @extern SetEnabled */

/** @extern SetFontFile */

/** @extern SetHtml */

/** @extern SetMargins */

/** @extern SetOnTouch */

/** ### SetOnLongTouch ###
 * @brief Called when the button was long pressed
 * %cb% the button has been long pressed.
 * $$ btn.SetOnLongTouch(callback) $$
 * @param {fnc_json} callback {}
 */


/** @extern SetPadding */

/** @extern SetPosition */

/** @extern SetScale */

/** @extern SetSize */

/** ### SetStyle ###
 * @brief Customize the button looks
 * Customize the look of the button.
 * $$ btn.SetStyle(color1, color2, radius, strokeClr, strokeWidth, shadow) $$
 * @param {str_col} color1 
 * @param {str_col} color2 
 * @param {num_pxl} radius 
 * @param {str_col} strokeClr 
 * @param {num_pxl} strokeWidth 
 * @param {num_frc} shadow 
 */


/** @extern SetText */

/** @extern SetTextColor */

/** @extern SetTextShadow */

/** @extern SetTextSize */

/** @extern SetVisibility */

/** @extern Show */

/** @extern Tween */


// ------------- SAMPLES ------------- 


    
/**
@sample Default Size
function OnStart()
{
	lay = app.CreateLayout( "Linear", "VCenter,FillXY" );

<b>	btn = app.CreateButton( "Press Me" );
	btn.SetOnTouch( SayHello );
	lay.AddChild( btn );</b>

	app.AddLayout( lay );
}

function SayHello()
{
	app.ShowPopup("Hello World!");
}
 */
    
            
    
/**
@sample Fixed Size
function OnStart()
{
	lay = app.CreateLayout( "Linear", "VCenter,FillXY" );

<b>	btn = app.CreateButton( "Press Me", 0.5, 0.2 );
	btn.SetOnTouch( SayHello );
	lay.AddChild( btn );</b>

	app.AddLayout( lay );
}

function SayHello()
{
	app.ShowPopup("Hello World!");
}
 */
    
            
    
/**
@sample Fill Layout Width
function OnStart()
{
	lay = app.CreateLayout( "Linear", "VCenter,FillXY" );
	lay.SetPadding( 0.02, 0.02, 0.02, 0.02 );

<b>	btn = app.CreateButton( "Press Me", -1, -1, "FillX" );
	btn.SetOnTouch( SayHello );
	lay.AddChild( btn );</b>

	app.AddLayout( lay );
}

function SayHello()
{
	app.ShowPopup("Hello World!");
}
 */
    
            
    
/**
@sample Change Style
function OnStart()
{
	lay = app.CreateLayout( "Linear", "Vertical,FillXY" );
	lay.SetPadding( 0.1, 0.1, 0.1, 0 );

<b>	b1 = app.CreateButton( "Normal", -1, -1, "FillX" );
	lay.AddChild( b1 );

	b2 = app.CreateButton( "Gray", -1, -1, "FillX,Gray" );
	lay.AddChild( b2 );

	b3 = app.CreateButton( "Alum", -1, -1, "FillX,Alum" );
	lay.AddChild( b3 );</b>

	app.AddLayout( lay );
}
 */
    
            
    
/**
@sample Python Default Size
from native import app

def OnStart():
    lay = app.CreateLayout( "Linear", "VCenter,FillXY" )

    btn = app.CreateButton( "Press Me" )
    btn.SetOnTouch( SayHello )
    lay.AddChild( btn )

    app.AddLayout( lay )

def SayHello():
    app.ShowPopup("Hello World!")
 */
    
            
    
/**
@sample Python Fixed Size
from native import app

def OnStart():
    lay = app.CreateLayout( "Linear", "VCenter,FillXY" )

    btn = app.CreateButton( "Press Me", 0.5, 0.2 )
    btn.SetOnTouch( SayHello )
    lay.AddChild( btn )

    app.AddLayout( lay )

def SayHello():
    app.ShowPopup("Hello World!")
 */
    
            
    
/**
@sample Python Fill Layout Width
from native import app

def OnStart():
    lay = app.CreateLayout( "Linear", "VCenter,FillXY" )
    lay.SetPadding( 0.02, 0.02, 0.02, 0.02 )

    btn = app.CreateButton( "Press Me", -1, -1, "FillX" )
    btn.SetOnTouch( SayHello )
    lay.AddChild( btn )

    app.AddLayout( lay )

def SayHello():
    app.ShowPopup("Hello World!")
 */
    
            
    
/**
@sample Python Change Style
from native import app

def OnStart():
    lay = app.CreateLayout( "Linear", "Vertical,FillXY" )
    lay.SetPadding( 0.1, 0.1, 0.1, 0 )

    b1 = app.CreateButton( "Normal", -1, -1, "FillX" )
    lay.AddChild( b1 )

    b2 = app.CreateButton( "Gray", -1, -1, "FillX,Gray" )
    lay.AddChild( b2 )

    b3 = app.CreateButton( "Alum", -1, -1, "FillX,Alum" )
    lay.AddChild( b3 )

    app.AddLayout( lay )
 */
    
            