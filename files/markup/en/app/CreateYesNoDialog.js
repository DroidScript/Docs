// ------------- HEADER SECTION -------------


/** # CreateYesNoDialog #
 * @abbrev ynd
 * @brief Returns a new YesNoDialog object
 * The YesNo dialog can be used to let the user confirm a specific action. Its the equivalent to the js confirm function, but it is more customizable. <grey>(and doesn't crash when aborting</grey>
 * $$ ynd = app.CreateYesNoDialog(message, options) $$ 
 * @param {str} message 
 * @param {str_com} options NoDim,NoFocus,TouchModal
 * @returns dso-YesNoDialog
*/




// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** @extern AdjustColor */

/** @extern Batch */

/** @extern Dismiss */

/** ### GetType ###
 * Returns the control class name.
 * $$ ynd.GetType() $$
 * @returns str-YesNoDialog
 */


/** @extern Hide */

/** @extern Method */

/** ### SetBackColor ###
 * @brief Change the background color
 * Changes the background color of the control.
 * $$ ynd.SetBackColor(color, radius) $$
 * @param {str_col} color 
 * @param {num_pxl} radius 
 */


/** @extern SetBackground */

/** ### SetButtonText ###
 * @brief Change Yes/No button text
 * Changes the texts of the two Yes/No buttons.
 * $$ ynd.SetButtonText(yes, no) $$
 * @param {str} yes 
 * @param {str} no 
 */


/** ### SetOnTouch ###
 * @brief Called when user selects Yes or No
 * %cb% the user touches one of the buttons, passing either “Yes” or “No” to the callback function
 * $$ ynd.SetOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["result"],"pTypes":["str-Yes|No"]}
 */


/** @extern SetSize */

/** @extern Show */


// ------------- SAMPLES ------------- 


    
/**
@sample Basic
function OnStart()
{
    ynd = app.CreateYesNoDialog( "Choose an answer" );
    ynd.SetOnTouch( Ynd_OnTouch );
    ynd.Show();
}

function Ynd_OnTouch( result )
{
    app.Alert( result, "Result" );
}
 */
    
            
    
/**
@sample Python Basic
from native import app

def OnStart():
    ynd = app.CreateYesNoDialog("Choose an answer")
    ynd.SetOnTouch(Ynd_OnTouch)
    ynd.Show()

def Ynd_OnTouch(result):
    app.Alert(result, "Result")
 */
    
            