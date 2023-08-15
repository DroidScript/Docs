
/** # CreateListDialog #
 * @abbrev ldg
 * 
 * $$ ldg = app.CreateListDialog(title, list, options) $$ 
 * @param {str} title 
 * @param {str} list 
 * @param {str} options Multi
 * @returns dso-ListDialog
*/


// CreateListDialog.md --> Complete documentation. Sample codes is at the bottom of this file.

/** @Description
If you want a quick way to let the user select one or even multiple items of a given dataset you can use the ListDialog.
Use the **SetOnTouch** method of the ListDialog object to set the name of a function you want to be called every times a list item is selected. The selected item is passed that function as parameter.
<sample Basic>

ou can use the “Multi” **option** to create a ListDialog with check boxes against each item. This allows multiple list items to be selected. An extra parameter isChecked is passed to the OnTouch callback function when a check box is checked or unchecked.
<Example Multi>

 */

/** ## Methods ##
 * These are the methods available for CreateListDialog
 */


/** ### AdjustColor ###
 * Adjust the visual color effect of the control by setting the Hue (by angle in degrees in a color circle), the saturation, brightness and contrast of the control.
 * $$ ldg.AdjustColor(hue, saturation, brightness, contrast) $$
 * @param {num} hue 
 * @param {num} saturation 
 * @param {num} brightness 
 * @param {num} contrast 0..100
 */


/** ### Batch ###
 * Batch method calls to be able to set all object's properties at once. * Note that you need to specify each parameter (use “” or <js nobox>null</js> to leave some out) * Inherited methods can be called by appending an underscore to the function name (ie. <js nobox>txt.Batch({ SetBackColor_: [“red”] })</js>
 * $$ ldg.Batch(properties) $$
 * @param {obj} properties { COMMAND:lst
 */


/** ### Dismiss ###
 * Hide the control and remove it from the screen.
 * $$ ldg.Dismiss() $$
 */


/** ### GetType ###
 * Returns the control class name.
 * $$ ldg.GetType() $$
 * @returns str-ListDialog
 */


/** ### Hide ###
 * Hide the control but keep the layout space free.
 * $$ ldg.Hide() $$
 */


/** ### Method ###
 * Allows access to other functions defined on the object in Java via reflection. *  * <premium>
 * $$ ldg.Method(name, types, p1, p2, p3, p4) $$
 * @param {str} name 
 * @param {lst} types boolean,char,byte,short,int,long,float,double,String,CharSequence,...
 * @param {str} p1 
 * @param {str} p2 
 * @param {str} p3 
 * @param {str} p4 
 * @returns all
 */


/** ### SetBackColor ###
 * Changes the background color of the control.
 * $$ ldg.SetBackColor(color) $$
 * @param {str_col} color 
 */


/** ### SetBackground ###
 * Changes the background to an image which can be repeated using the `repeat` option. * An image which is often used with that option is '/res/drawable/pattern_carbon' - try it out!
 * $$ ldg.SetBackground(file, options) $$
 * @param {str_ptf} file 
 * @param {str} options repeat
 */


/** ### SetOnTouch ###
 * Define a callback function that is called when the user touches a list item.
 * $$ ldg.SetOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["title","checked"],"pTypes":["str","bin"]}
 */


/** ### SetSize ###
 * Change the size of the control in either screen relative values or in pixels if the `px` option was given.
 * $$ ldg.SetSize(width, height, options) $$
 * @param {num} width 
 * @param {num} height 
 * @param {str} options px|sp|dip|dp|mm|pt
 */


/** ### SetTextColor ###
 * Change the text color of the contained text.
 * $$ ldg.SetTextColor(color) $$
 * @param {str_col} color 
 */


/** ### SetTitle ###
 * Change the dialog title.
 * $$ ldg.SetTitle(title) $$
 * @param {str} title 
 */


/** ### Show ###
 * Set the visibility of the control to “Show”.
 * $$ ldg.Show() $$
 */

// CreateListDialog.txt --> All the sample codes

/** @Sample
<sample Basic>
function OnStart()
{
	<b>dlg = app.CreateListDialog( "Choices", "Add,Remove,Delete" );
	dlg.SetOnTouch( dlg_OnTouch );
	dlg.Show();</b>
}

function dlg_OnTouch( item )
{
	app.ShowPopup( item );
}
</sample>

<sample Multi>
function OnStart()
{
	<b>dlg = app.CreateListDialog( "Days", "Mon,Tues,Wed,Thurs,Fri,Sat,Sun", "Multi" );
	dlg.SetOnTouch( dlg_OnTouch );
	dlg.Show();</b>
}

function dlg_OnTouch( item, isChecked )
{
	app.ShowPopup( item + " isChecked = " + isChecked );
}
</sample>

 */

