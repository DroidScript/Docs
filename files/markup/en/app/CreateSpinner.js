// ------------- HEADER SECTION -------------


/** # CreateSpinner #
 * @abbrev spn
 * @brief Returns a new Spinner object
 *
 * $$ spn = app.CreateSpinner(list, width=-1, height=-1, options?) $$
 * @param {str_com} list
 * @param {num_frc} [width=-1]
 * @param {num_frc} [height=-1]
 * @param {str_com} [options] FillX/Y,NoSound
 * @returns dso-Spinner
*/


// ------------- LONG DESCRIPTION -------------

/** @Description
Create Spinners using the CreateSpinner method of the app object.
You can allow the Spinner to auto-size by leaving out the dimensions or you can specify a **width** and/or **height** as decimal fractions of the screen's width and height.

Use the **SetOnChange** method of your spinner to set the name of a function you want to be called when the user selects an item.

You can get the current selection of the Spinner button at any time using the **GetText** method and replace the option list at any time by using the **SetList** method.

Use the **SelectItem** method to select a particular item in code.
 */



// ------------- VISIBLE METHODS & PROPERTIES -------------


/** @extern AdjustColor */

/** @extern Animate */

/** @extern Batch */

/** @extern data */

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
 * $$ spn.GetType() $$
 * @returns str-Spinner
 */


/** @extern GetVisibility */

/** @extern GetWidth */

/** @extern Gone */

/** @extern Hide */

/** @extern IsEnabled */

/** @extern IsOverlap */

/** @extern IsVisible */

/** @extern Method */

/** ### SelectItem ###
 * @brief Change current shown item
 * Change the current shown item
 * <deprecated Use SetText instead>
 * $$ spn.SelectItem(item) $$
 * @param {str} item
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

/** ### SetList ###
 * @brief Change spinner list
 * Change the item list of the spinner.
 * $$ spn.SetList(list, delim=',') $$
 * @param {str_com} list
 * @param {str} [delim=',']
 */


/** @extern SetMargins */

/** ### SetOnChange ###
 * @brief Called when value changed by the user
 * Called when the spinner value has been changed by the user.
 * $$ spn.SetOnChange(callback) $$
 * @param {fnc_json} callback {"pNames":["item","index"],"pTypes":["str","num_int"]}
 */


/** ### SetOnTouch ###
 * @brief Define a callback function for touch events
 * Define a callback function that is called when the user touches the control.
 * <deprecated Use SetOnChange instead>
 * $$ spn.SetOnTouch(callback) $$
 * @param {fnc_json} callback {}
 */


/** @extern SetPadding */

/** @extern SetPosition */

/** @extern SetScale */

/** @extern SetSize */

/** ### SetText ###
 * @brief Change current shown item
 * Change the current shown item
 * $$ spn.SetText(item) $$
 * @param {str} item
 */


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

<b>	spin = app.CreateSpinner( "Bilbo,Frodo,Gandalf", 0.4 );
    spin.SetOnChange( ShowSelection );
    spin.SelectItem( "Frodo" );
    lay.AddChild( spin );

</b>	app.AddLayout( lay );
}

function ShowSelection( item )
{
    app.ShowPopup( "Selected = " + item );
}
 */



/**
@sample Python Example
from native import app

def OnStart():
    lay = app.CreateLayout("Linear", "VCenter,FillXY")

    spin = app.CreateSpinner("Bilbo,Frodo,Gandalf", 0.4)
    spin.SetOnChange(ShowSelection)
    spin.SelectItem("Frodo")
    lay.AddChild(spin)

    app.AddLayout(lay)

def ShowSelection(item, index):
    app.ShowPopup("Selected = " + item)
 */
