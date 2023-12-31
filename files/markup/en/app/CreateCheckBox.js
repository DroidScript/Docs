// ------------- HEADER SECTION ------------- 


/** # CreateCheckBox #
 * @abbrev chk
 * @brief Returns a new CheckBox object
 * 
 * $$ chk = app.CreateCheckBox(text, width, height, options) $$ 
 * @param {str} text 
 * @param {num_frc} width 
 * @param {num_frc} height 
 * @param {str_com} options FillX/Y,NoSound
 * @returns dso-CheckBox
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
CheckBoxes can be used to let the user en- or disable specific options in your app. They consist of a ticker box on the left and a text label on the right side.

It is disabled by default, but you can enable it with the **SetChecked** method to change its initial state.

Use the SetOnTouch method of the CheckBox object to define a function you want to be called when the CheckBox is touched. There you can read  the 'isChecked' parameter to get the current state of the CheckBox:
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** @extern AdjustColor */

/** @extern Animate */

/** @extern Batch */

/** @extern ClearFocus */

/** @extern Focus */

/** @extern GetAbsHeight */

/** @extern GetAbsWidth */

/** ### GetChecked ###
 * @brief Get current checked state
 * Checks if the checkbox is currently checked or not.
 * $$ chk.GetChecked() $$
 * @returns bin
 */


/** @extern GetHeight */

/** @extern GetLeft */

/** @extern GetParent */

/** @extern GetPosition */

/** @extern GetText */

/** @extern GetTextSize */

/** @extern GetTop */

/** ### GetType ###
 * Returns the control class name.
 * $$ chk.GetType() $$
 * @returns str-CheckBox
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

/** ### SetChecked ###
 * @brief Changes the ckecked state
 * Changes the current checked state of the CheckBox.
 * $$ chk.SetChecked(checked) $$
 * @param {bin} checked 
 */


/** @extern SetColorFilter */

/** @extern SetDescription */

/** @extern SetEnabled */

/** @extern SetMargins */

/** ### SetOnTouch ###
 * @brief Called when the CheckBox was touched
 * Define a callback function that is called when the user touches the CheckBox.
 * $$ chk.SetOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["isChecked"],"pTypes":["bin"]}
 */


/** @extern SetPadding */

/** @extern SetPosition */

/** @extern SetScale */

/** @extern SetSize */

/** @extern SetText */

/** @extern SetTextColor */

/** @extern SetTextSize */

/** @extern SetVisibility */

/** @extern Show */

/** @extern Tween */


// ------------- SAMPLES ------------- 


    
/**
@sample Example
function OnStart()
{
	lay = app.CreateLayout( "Linear", "VCenter,FillXY" );

	<b>chk = app.CreateCheckBox( "Enable Stuff" );
	chk.SetOnTouch( ShowState );
	lay.AddChild( chk );

	app.AddLayout( lay );</b>
}

function ShowState( isChecked )
{
	app.ShowPopup( "Checked = " + isChecked, "Short" );
}
 */
    
            
    
/**
@sample Python Example
from native import app

def OnStart():
    lay = app.CreateLayout( "Linear", "VCenter,FillXY" )

    chk = app.CreateCheckBox( "Enable Stuff" )
    chk.SetOnTouch( ShowState )
    lay.AddChild( chk )

    app.AddLayout( lay )

def ShowState( isChecked ):
    app.ShowPopup( "Checked = " + str(isChecked), "Short" )
 */
    
            