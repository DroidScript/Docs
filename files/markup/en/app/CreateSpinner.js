// ------------- HEADER SECTION ------------- 


/** # CreateSpinner #
 * @abbrev spn
 * @brief Returns a new Spinner object
 * 
 * $$ spn = app.CreateSpinner(list, width, height, options) $$ 
 * @param {str_com} list 
 * @param {num_frc} width 
 * @param {num_frc} height 
 * @param {str_com} options FillX/Y,NoSound
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
 * Change the current shown item * <deprecated Use SetText instead>
 * $$ spn.SelectItem(item) $$
 * @param {str} item 
 */


/** @extern SetBackAlpha */

/** @extern SetBackColor */

/** @extern SetBackGradient */

/** @extern SetBackGradientRadial */

/** @extern SetBackground */

/** @extern SetColorFilter */

/** @extern SetDescription */

/** @extern SetEnabled */

/** ### SetList ###
 * Change the item list of the spinner.
 * $$ spn.SetList(list, delim) $$
 * @param {str_com} list 
 * @param {str} delim 
 */


/** @extern SetMargins */

/** ### SetOnChange ###
 * Called when the spinner value has been changed by the user.
 * $$ spn.SetOnChange(callback) $$
 * @param {fnc_json} callback {"pNames":["item","index"],"pTypes":["str","num_int"]}
 */


/** ### SetOnTouch ###
 * Define a callback function that is called when the user touches the control. * <deprecated Use SetOnChange instead>
 * $$ spn.SetOnTouch(callback) $$
 * @param {fnc_json} callback {}
 */


/** @extern SetPadding */

/** @extern SetPosition */

/** @extern SetScale */

/** @extern SetSize */

/** ### SetText ###
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
    
            