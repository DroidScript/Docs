// ------------- HEADER SECTION -------------


/** # CreateListDialog #
 * @abbrev ldg
 * @brief Returns a new ListDialog object
 * 
 * $$ ldg = app.CreateListDialog(title, list, options?) $$ 
 * @param {str} title 
 * @param {str} list 
 * @param {str} [options] Multi
 * @returns dso-ListDialog
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
If you want a quick way to let the user select one or even multiple items of a given dataset you can use the ListDialog.
Use the **SetOnTouch** method of the ListDialog object to set the name of a function you want to be called every times a list item is selected. The selected item is passed that function as parameter.
<sample Basic>

ou can use the “Multi” **option** to create a ListDialog with check boxes against each item. This allows multiple list items to be selected. An extra parameter isChecked is passed to the OnTouch callback function when a check box is checked or unchecked.
<Example Multi>
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** @extern AdjustColor */

/** @extern Batch */

/** @extern Dismiss */

/** ### GetType ###
 * Returns the control class name.
 * $$ ldg.GetType() $$
 * @returns str-ListDialog
 */


/** @extern Hide */

/** @extern Method */

/** @extern SetBackColor */

/** @extern SetBackground */

/** ### SetOnTouch ###
 * @brief Define a callback function for touch events
 * Define a callback function that is called when the user touches a list item.
 * $$ ldg.SetOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["title","checked?"],"pTypes":["str","bin"]}
 */


/** @extern SetSize */

/** @extern SetTextColor */

/** ### SetTitle ###
 * Change the dialog title.
 * $$ ldg.SetTitle(title) $$
 * @param {str} title 
 */


/** @extern Show */


// ------------- SAMPLES ------------- 


    
/**
@sample Basic
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
 */
    
            
    
/**
@sample Multi
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
 */
    
            
    
/**
@sample Python Basic
from native import app

def OnStart():
    dlg = app.CreateListDialog( "Choices", "Add,Remove,Delete" )
    dlg.SetOnTouch( dlg_OnTouch )
    dlg.Show()

def dlg_OnTouch( item, checked):
    app.ShowPopup( item )
 */
    
            
    
/**
@sample Python Multi
from native import app

def OnStart():
    dlg = app.CreateListDialog( "Days", "Mon,Tues,Wed,Thurs,Fri,Sat,Sun", "Multi" )
    dlg.SetOnTouch( dlg_OnTouch )
    dlg.Show()

def dlg_OnTouch( item, isChecked ):
    app.ShowPopup( item + " isChecked = " + str(isChecked) )
 */
    
            