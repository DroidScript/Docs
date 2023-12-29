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
 * @brief Define button text color
 * Define the standard text color of [buttons](CreateButton.htm) and [toggles](CreateToggle.htm).
 * $$ thm.SetBtnTextColor(color) $$
 * @param {str_col} color 
 */


/** ### SetButtonOptions ###
 * @brief Define button options
 * Define standard options of [buttons](CreateButton.htm) and [toggles](CreateToggle.htm).
 * $$ thm.SetButtonOptions(options) $$
 * @param {str_com} options FontAwesome,Html,Monospace,SingleLine,Custom,NoPad,FillX/Y,Normal|Aluminium|Gray|Lego
 */


/** ### SetButtonPadding ###
 * @brief Define button paddings
 * Define distances that elements within the control are to maintain from the control borders.
 * $$ thm.SetButtonPadding(left, top, right, bottom, mode) $$
 * @param {num} left 
 * @param {num} top 
 * @param {num} right 
 * @param {num_frc} bottom 
 * @param {str} mode px|sp|dip|mm|pt
 */


/** ### SetButtonStyle ###
 * @brief Define button style
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
 * @brief Define check box options
 * Define standard options of [check boxes](CreateCheckBox.htm).
 * $$ thm.SetCheckBoxOptions(options) $$
 * @param {str_com} options FillX/Y
 */


/** ### SetDialogBtnColor ###
 * @brief Define dialog button colors
 * Define standard button colors of [dialogs](CreateDialog.htm).
 * $$ thm.SetDialogBtnColor(color) $$
 * @param {str_col} color 
 */


/** ### SetDialogBtnTxtColor ###
 * @brief Define dialog button text colors
 * Define standard button text colors of [dialogs](CreateDialog.htm).
 * $$ thm.SetDialogBtnTxtColor(color) $$
 * @param {str_col} color 
 */


/** ### SetDialogColor ###
 * @brief Define dialog background colors
 * Define standard background colors of [dialogs](CreateDialog.htm).
 * $$ thm.SetDialogColor(color) $$
 * @param {str_col} color 
 */


/** ### SetDialogCornerRadius ###
 * @brief Define dialog corner radius
 * Define standard corder radius of [dialogs](CreateDialog.htm).
 * $$ thm.SetDialogCornerRadius(radius) $$
 * @param {num_pxl} radius 
 */


/** ### SetDimBehind ###
 * @brief Define whether to dim dialog background
 * En/Disables standard dimming of [dialogs](CreateDialog.htm).
 * $$ thm.SetDimBehind(dim) $$
 * @param {bin} dim 
 */


/** ### SetHighlightColor ###
 * @brief Define highlight colors
 * Define standard highlight colors.
 * $$ thm.SetHighlightColor(color) $$
 * @param {str_col} color 
 */


/** ### SetListDividerColor ###
 * @brief Define list divider colors
 * Define standard divider colors of [lists](CreateList.htm).
 * $$ thm.SetListDividerColor(color) $$
 * @param {str_col} color 
 */


/** ### SetProgressBackColor ###
 * @brief Define progress background color
 * Define standard background progress color of [progress indicators](ShowProgress.htm).
 * $$ thm.SetProgressBackColor(color) $$
 * @param {str_col} color 
 */


/** ### SetProgressOptions ###
 * @brief Define progress options
 * Define standard options of [progress indicators](ShowProgress.htm).
 * $$ thm.SetProgressOptions(options) $$
 * @param {str_com} options NoDim,NonModal,Solid
 */


/** ### SetProgressBarOptions ###
 * @brief Define progress bar options
 * Define standard options of [progress bars](ShowProgressBar.htm).
 * $$ thm.SetProgressBarOptions(options) $$
 * @param {str} options Light
 */


/** ### SetProgressTextColor ###
 * @brief Define progress text color
 * Define standard text color of [progress indicators](ShowProgress.htm).
 * $$ thm.SetProgressTextColor(color) $$
 * @param {str_col} color 
 */


/** ### SetTextColor ###
 * @brief Define control text color
 * Define standard text color of controls.
 * $$ thm.SetTextColor(color1, color2) $$
 * @param {str_col} color1 
 * @param {str_col} color2 
 */


/** ### SetTextEditOptions ###
 * @brief Define text edit options
 * Define standard options of [text edits](CreateTextEdit.htm).
 * $$ thm.SetTextEditOptions(options) $$
 * @param {str} options underline
 */


/** ### SetTitleColor ###
 * @brief Define title colors
 * Define standard title text color of [dialogs](CreateDialog.htm).
 * $$ thm.SetTitleColor(color) $$
 * @param {str_col} color 
 */


/** ### SetTitleDividerColor ###
 * @brief Define title divider colors
 * Define standard title divider color of [dialogs](CreateDialog.htm).
 * $$ thm.SetTitleDividerColor(color) $$
 * @param {str_col} color 
 */


/** ### SetTitleDividerHeight ###
 * @brief Define title divider height
 * Define standard title divider height of [dialogs](CreateDialog.htm).
 * $$ thm.SetTitleDividerHeight(height) $$
 * @param {num_pxl} height 
 */


/** ### SetTitleHeight ###
 * @brief Define title height
 * Define standard height of [dialogs](CreateDialog.htm).
 * $$ thm.SetTitleHeight(height, options) $$
 * @param {num_pxl} height 
 * @param {str_com} options px|dip|sp|mm|pt|pl|ps
 */


/** ### SetTitleTextSize ###
 * @brief Define title text size
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
    
            
    
/**
@sample Python Hackers Theme
from native import app

def OnStart():
    SetHackerTheme()

    lay = app.CreateLayout( "Linear", "VCenter,FillXY" )

    skb = app.CreateSeekBar( .8 )
    skb.SetValue( 50 )
    lay.AddChild( skb )

    spn = app.CreateSpinner( "FRED,BILL,MARK", .4, .1 )
    spn.SetMargins( 0, .05, 0, .05 )
    lay.AddChild( spn )

    tgl = app.CreateToggle( "Toggle", .3, .1 )
    lay.AddChild( tgl )

    edt = app.CreateTextEdit( "Hello World", .8 )
    edt.SetMargins( 0, .05, 0, .05 )
    lay.AddChild( edt )

    chk = app.CreateCheckBox( "Check me", .3 )
    lay.AddChild( chk )

    app.AddLayout( lay )

    app.Alert( "My Text", "Custom theme" )

def SetHackerTheme():
    theme = app.CreateTheme("dark")
    theme.SetBtnTextColor( "green" )
    theme.SetTitleColor( "green" )
    theme.SetDialogBtnTxtColor( "green" )
    theme.SetTextColor( "green" )
    theme.AdjustColor( -76 )
    app.SetTheme( theme )
 */
    
            