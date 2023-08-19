// ------------- HEADER SECTION ------------- 


/** # CreateTheme #
 * @abbrev thm
 * @brief Returns a new Theme object
 * Returns a Theme object.
 * 
 * <premium>
 * $$ thm = app.CreateTheme(baseTheme) $$ 
 * @param {str} baseTheme Dark|Light
 * @returns dso-Theme
*/




// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** @extern AdjustColor */

/** @extern Batch */

/** ### GetType ###
 * Returns the control class name.
 * $$ thm.GetType() $$
 * @returns str-Theme
 */


/** @extern Method */

/** @extern SetBackColor */

/** @extern SetBackground */

/** ### SetBtnTextColor ###
 * Define the standard text color of [buttons](CreateButton.htm) and [toggles](CreateToggle.htm).
 * $$ thm.SetBtnTextColor(color) $$
 * @param {str_col} color 
 */


/** ### SetButtonOptions ###
 * Define standard options of [buttons](CreateButton.htm) and [toggles](CreateToggle.htm).
 * $$ thm.SetButtonOptions(options) $$
 * @param {str_com} options FontAwesome,Html,Monospace,SingleLine,Custom,NoPad,FillX/Y,Normal|Aluminium|Gray|Lego
 */


/** ### SetButtonPadding ###
 * Define distances that elements within the control are to maintain from the control borders.
 * $$ thm.SetButtonPadding(left, top, right, bottom, mode) $$
 * @param {num} left 
 * @param {num} top 
 * @param {num} right 
 * @param {num_frc} bottom 
 * @param {str} mode px|sp|dip|mm|pt
 */


/** ### SetButtonStyle ###
 * Define standard style of [buttons](CreateButton.htm) and [toggles](CreateToggle.htm).
 * $$ thm.SetButtonStyle(color1, color2, radius, strokeClr, strokeWidth, shadow, checkClr) $$
 * @param {str_col} color1 
 * @param {str_col} color2 
 * @param {num_pxl} radius 
 * @param {str_col} strokeClr 
 * @param {num_pxl} strokeWidth 
 * @param {num_frc} shadow 
 * @param {str_col} checkClr 
 */


/** ### SetCheckBoxOptions ###
 * Define standard options of [check boxes](CreateCheckBox.htm).
 * $$ thm.SetCheckBoxOptions(options) $$
 * @param {str_com} options FillX/Y
 */


/** ### SetDialogBtnColor ###
 * Define standard button colors of [dialogs](CreateDialog.htm).
 * $$ thm.SetDialogBtnColor(color) $$
 * @param {str_col} color 
 */


/** ### SetDialogBtnTxtColor ###
 * Define standard button text colors of [dialogs](CreateDialog.htm).
 * $$ thm.SetDialogBtnTxtColor(color) $$
 * @param {str_col} color 
 */


/** ### SetDialogColor ###
 * Define standard background colors of [dialogs](CreateDialog.htm).
 * $$ thm.SetDialogColor(color) $$
 * @param {str_col} color 
 */


/** ### SetDialogCornerRadius ###
 * Define standard corder radius of [dialogs](CreateDialog.htm).
 * $$ thm.SetDialogCornerRadius(radius) $$
 * @param {num_pxl} radius 
 */


/** ### SetDimBehind ###
 * En/Disables standard dimming of [dialogs](CreateDialog.htm).
 * $$ thm.SetDimBehind(dim) $$
 * @param {bin} dim 
 */


/** ### SetHighlightColor ###
 * Define standard highlight colors.
 * $$ thm.SetHighlightColor(color) $$
 * @param {str_col} color 
 */


/** ### SetListDividerColor ###
 * Define standard divider colors of [lists](CreateList.htm).
 * $$ thm.SetListDividerColor(color) $$
 * @param {str_col} color 
 */


/** ### SetProgressBackColor ###
 * Define standard background progress color of [progress indicators](ShowProgress.htm).
 * $$ thm.SetProgressBackColor(color) $$
 * @param {str_col} color 
 */


/** ### SetProgressOptions ###
 * Define standard options of [progress indicators](ShowProgress.htm).
 * $$ thm.SetProgressOptions(options) $$
 * @param {str_com} options NoDim,NonModal,Solid
 */


/** ### SetProgressBarOptions ###
 * Define standard options of [progress bars](ShowProgressBar.htm).
 * $$ thm.SetProgressBarOptions(options) $$
 * @param {str} options Light
 */


/** ### SetProgressTextColor ###
 * Define standard text color of [progress indicators](ShowProgress.htm).
 * $$ thm.SetProgressTextColor(color) $$
 * @param {str_col} color 
 */


/** ### SetTextColor ###
 * Define standard text color of controls.
 * $$ thm.SetTextColor(color1, color2) $$
 * @param {str_col} color1 
 * @param {str_col} color2 
 */


/** ### SetTextEditOptions ###
 * Define standard options of [text edits](CreateTextEdit.htm).
 * $$ thm.SetTextEditOptions(options) $$
 * @param {str} options underline
 */


/** ### SetTitleColor ###
 * Define standard title text color of [dialogs](CreateDialog.htm).
 * $$ thm.SetTitleColor(color) $$
 * @param {str_col} color 
 */


/** ### SetTitleDividerColor ###
 * Define standard title divider color of [dialogs](CreateDialog.htm).
 * $$ thm.SetTitleDividerColor(color) $$
 * @param {str_col} color 
 */


/** ### SetTitleDividerHeight ###
 * Define standard title divider height of [dialogs](CreateDialog.htm).
 * $$ thm.SetTitleDividerHeight(height) $$
 * @param {num_pxl} height 
 */


/** ### SetTitleHeight ###
 * Define standard height of [dialogs](CreateDialog.htm).
 * $$ thm.SetTitleHeight(height, options) $$
 * @param {num_pxl} height 
 * @param {str_com} options px|dip|sp|mm|pt|pl|ps
 */


/** ### SetTitleTextSize ###
 * Define standard title text size of [dialogs](CreateDialog.htm).
 * $$ thm.SetTitleTextSize(size, options) $$
 * @param {num} size 
 * @param {str_com} options px|dip|sp|mm|pt|pl|ps
 */



// ------------- SAMPLES ------------- 


    
/**
@sample Hackers Theme
function OnStart()
{
    SetHackerTheme();

	lay = app.CreateLayout( "Linear", "VCenter,FillXY" );

    skb = app.CreateSeekBar( .8 );
    skb.SetValue( 50 );
    lay.AddChild( skb );

    spn = app.CreateSpinner( "FRED,BILL,MARK", .4, .1 );
    spn.SetMargins( 0, .05, 0, .05 );
    lay.AddChild( spn );

	tgl = app.CreateToggle( "Toggle", .3, .1 );
	lay.AddChild( tgl );

    edt = app.CreateTextEdit( "Hello World", .8 );
    edt.SetMargins( 0, .05, 0, .05 );
    lay.AddChild( edt );

    chk = app.CreateCheckBox( "Check me", .3 );
    lay.AddChild( chk );

	app.AddLayout( lay );

	app.Alert( "My Text", "Custom theme" );
}

function SetHackerTheme()
{
    <b>var theme = app.CreateTheme("dark");
    theme.SetBtnTextColor( "green" );
    theme.SetTitleColor( "green" );
    theme.SetDialogBtnTxtColor( "green" );
    theme.SetTextColor( "green" );
    theme.AdjustColor( -76 );
    app.SetTheme( theme );</b>
}
 */
    
            