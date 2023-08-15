
/** # CreateYesNoDialog #
 * @abbrev ynd
 * The YesNo dialog can be used to let the user confirm a specific action. Its the equivalent to the js confirm function, but it is more customizable. <grey>(and doesn't crash when aborting</grey>
 * $$ ynd = app.CreateYesNoDialog(message, options) $$ 
 * @param {str} message 
 * @param {str_com} options NoDim,NoFocus,TouchModal
 * @returns dso-YesNoDialog
*/


/** ## Methods ##
 * These are the methods available for CreateYesNoDialog
 */


/** ### AdjustColor ###
 * Adjust the visual color effect of the control by setting the Hue (by angle in degrees in a color circle), the saturation, brightness and contrast of the control.
 * $$ ynd.AdjustColor(hue, saturation, brightness, contrast) $$
 * @param {num} hue 
 * @param {num} saturation 
 * @param {num} brightness 
 * @param {num} contrast 0..100
 */


/** ### Batch ###
 * Batch method calls to be able to set all object's properties at once. * Note that you need to specify each parameter (use “” or <js nobox>null</js> to leave some out) * Inherited methods can be called by appending an underscore to the function name (ie. <js nobox>txt.Batch({ SetBackColor_: [“red”] })</js>
 * $$ ynd.Batch(properties) $$
 * @param {obj} properties { COMMAND:lst
 */


/** ### Dismiss ###
 * Hide the control and remove it from the screen.
 * $$ ynd.Dismiss() $$
 */


/** ### GetType ###
 * Returns the control class name.
 * $$ ynd.GetType() $$
 * @returns str-YesNoDialog
 */


/** ### Hide ###
 * Hide the control but keep the layout space free.
 * $$ ynd.Hide() $$
 */


/** ### Method ###
 * Allows access to other functions defined on the object in Java via reflection. *  * <premium>
 * $$ ynd.Method(name, types, p1, p2, p3, p4) $$
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
 * $$ ynd.SetBackColor(color, radius) $$
 * @param {str_col} color 
 * @param {num_pxl} radius 
 */


/** ### SetBackground ###
 * Changes the background to an image which can be repeated using the `repeat` option. * An image which is often used with that option is '/res/drawable/pattern_carbon' - try it out!
 * $$ ynd.SetBackground(file, options) $$
 * @param {str_ptf} file 
 * @param {str} options repeat
 */


/** ### SetButtonText ###
 * Changes the texts of the two Yes/No buttons.
 * $$ ynd.SetButtonText(yes, no) $$
 * @param {str} yes 
 * @param {str} no 
 */


/** ### SetOnTouch ###
 * %cb% the user touches one of the buttons, passing either “Yes” or “No” to the callback function
 * $$ ynd.SetOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["result"],"pTypes":["str-Yes|No"]}
 */


/** ### SetSize ###
 * Change the size of the control in either screen relative values or in pixels if the `px` option was given.
 * $$ ynd.SetSize(width, height, options) $$
 * @param {num} width 
 * @param {num} height 
 * @param {str} options px|sp|dip|dp|mm|pt
 */


/** ### Show ###
 * Set the visibility of the control to “Show”.
 * $$ ynd.Show() $$
 */

// CreateYesNoDialog.txt --> All the sample codes

/** @Sample
<sample Basic>
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
</sample>

 */

