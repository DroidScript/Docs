// ------------- HEADER SECTION ------------- 


/** # CreateDialog #
 * @abbrev dlg
 * @brief Returns a new Dialog object to display messages
 * 
 * $$ dlg = app.CreateDialog(title, options) $$ 
 * @param {str} title 
 * @param {str_com} options AutoCancel|NoCancel,NoTitle,NoFocus,NoDim,NoKeys,Fillscreen,Fullscreen,TouchModal,NoTouch,Modal,Kiosk,Old:apply old list style affecting title style and unrounded corners
 * @returns dso-Dialog
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Custom dialogs appear on top of the app and thus can be used to show temporary information or collect data from the user. They are also useful for displaying configuration or settings controls.
%c
Dialogs are resizeable and you can also change the look of them so that they fit in with the theme of your application.

A custom dialog needs a layout to add the controls to. Use the @CreateLayout method of the **app** object to add a layout.
<js>
layDlg = app.CreateLayout( type, options );
dlg.AddLayout( layDlg );
</js>
If you have added all your controls to the dialog layout you can use the **Show** method to show the dialog.

Normally the user can cancel the dialog by pressing the _BACK_ button of the device, but you can disable that option by using the “NoCancel” **option**. In order to close the dialog now, you have to call **Dismiss**.
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### AddLayout ###
 * @brief Add content layout
 * Add the content layout to the dialog.
 * $$ dlg.AddLayout(layout) $$
 * @param {dso} layout CreateLayout
 */


/** @extern AdjustColor */

/** @extern Batch */

/** @extern ClearFocus */

/** @extern Dismiss */

/** ### EnableBackKey ###
 * @brief En/Disables hiding via presing the back key
 * En/Disables the device back key to hide the dialog.
 * $$ dlg.EnableBackKey(enable) $$
 * @param {bin} enable 
 */


/** @extern Focus */

/** @extern GetAbsHeight */

/** @extern GetAbsWidth */

/** @extern GetHeight */

/** @extern GetLeft */

/** @extern GetParent */

/** @extern GetPosition */

/** ### GetTitleHeight ###
 * @brief Get title bar height
 * Returns the height of the title bar.
 * $$ dlg.GetTitleHeight() $$
 * @returns num_pxl
 */


/** @extern GetTop */

/** ### GetType ###
 * Returns the control class name.
 * $$ dlg.GetType() $$
 * @returns str-Dialog
 */


/** @extern GetVisibility */

/** @extern GetWidth */

/** @extern Gone */

/** @extern Hide */

/** @extern IsEnabled */

/** @extern IsOverlap */

/** @extern IsVisible */

/** @extern Method */

/** ### RemoveLayout ###
 * Removes a content layout.
 * $$ dlg.RemoveLayout(layout) $$
 * @param {dso} layout CreateLayout
 */


/** @extern SetBackAlpha */

/** ### SetBackColor ###
 * @brief Change the background color
 * Changes the background color of the control.
 * $$ dlg.SetBackColor(color, radius) $$
 * @param {str_col} color 
 * @param {num_pxl} radius 
 */


/** @extern SetBackGradient */

/** @extern SetBackGradientRadial */

/** @extern SetBackground */

/** @extern SetColorFilter */

/** @extern SetDescription */

/** @extern SetEnabled */

/** @extern SetMargins */

/** ### SetOnBack ###
 * @brief Called when back button was pressed while the dialog was shown
 * %cb% the device's back button was pressed while the dialog was on front.
 * $$ dlg.SetOnBack(callback) $$
 * @param {fnc_json} callback {}
 */


/** ### SetOnCancel ###
 * @brief Called when the dialog is cancelled
 * %cb% the dialog is cancelled.
 * $$ dlg.SetOnCancel(callback) $$
 * @param {fnc_json} callback {}
 */


/** @extern SetOnTouch #2088093920 */

/** @extern SetPadding */

/** @extern SetPosition */

/** @extern SetScale */

/** @extern SetSize */

/** ### SetTitle ###
 * @brief Changes the dialog title
 * Changes the title of the dialog.
 * $$ dlg.SetTitle(title) $$
 * @param {str} title 
 */


/** ### SetTitleColor ###
 * Changes the color of the dialog title. Only works with "Old" option.
 * $$ dlg.SetTitleColor(clr) $$
 * @param {str_col} clr 
 */


/** ### SetTitleDividerColor ###
 * @brief Changes the title divider height for "Old" dialogs
 * Changes the title divider color of the dialog. Only works with "Old" option.
 * $$ dlg.SetTitleDividerColor(color) $$
 * @param {str_col} color 
 */


/** ### SetTitleDividerHeight ###
 * @brief Change height of the title divider for "Old" dialogs
 * Changes the divider height of the dialog. Only works with "Old" option.
 * $$ dlg.SetTitleDividerHeight(height, options) $$
 * @param {num_pxl} height 
 * @param {str} options px|sp|dip|mm|pt
 */


/** ### SetTitleHeight ###
 * @brief Change height of the title bar for "Old" dialogs
 * Changes the height of the title bar. Only works with "Old" option.
 * $$ dlg.SetTitleHeight(height, options) $$
 * @param {num_pxl} height 
 * @param {str_com} options px|sp|dip|mm|pt
 */


/** ### SetTitleTextSize ###
 * @brief Changes the title text size for "Old" dialogs
 * Changes the text size of the dialog title. Only works with "Old" option.
 * $$ dlg.SetTitleTextSize(size, options) $$
 * @param {num} size 
 * @param {str} options px|sp|dip|mm|pt
 */


/** @extern SetVisibility */

/** @extern Show */

/** @extern Tween */


// ------------- SAMPLES ------------- 


    
/**
@sample Demo
function OnStart()
{
	dlg = app.CreateDialog( "Custom Dialog" );

	layDlg = app.CreateLayout( "linear", "VCenter,FillXY" );
	layDlg.SetSize( 0.7, 0.3 );
	dlg.AddLayout( layDlg );

	chk = app.CreateCheckBox( "Check Box" );
	chk.SetMargins( 0, 0.02, 0, 0.02 );
	layDlg.AddChild( chk );

	btnDlg = app.CreateButton( "Close Dialog", 0.6, 0.1 );
	btnDlg.SetOnTouch( btnDlg_OnTouch );
	layDlg.AddChild( btnDlg );

	dlg.Show();
}

function btnDlg_OnTouch()
{
	dlg.Dismiss();
}
 */
    
            
    
/**
@sample Python Demo
from native import app

def OnStart():
    global dlg
    dlg = app.CreateDialog( "Custom Dialog" )

    layDlg = app.CreateLayout( "linear", "VCenter,FillXY" )
    layDlg.SetSize( 0.7, 0.3 )
    dlg.AddLayout( layDlg )

    chk = app.CreateCheckBox( "Check Box" )
    chk.SetMargins( 0, 0.02, 0, 0.02 )
    layDlg.AddChild( chk )

    btnDlg = app.CreateButton( "Close Dialog", 0.6, 0.1 )
    btnDlg.SetOnTouch( btnDlg_OnTouch )
    layDlg.AddChild( btnDlg )

    dlg.Show()

def btnDlg_OnTouch():
    dlg.Dismiss()
 */
    
            