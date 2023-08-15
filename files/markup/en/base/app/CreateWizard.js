
/** # CreateWizard #
 * @abbrev wiz
 * 
 * $$ wiz = app.CreateWizard(title, width, height, callback, options) $$ 
 * @param {str} title 
 * @param {num_frc} width 
 * @param {num_frc} height 
 * @param {str_com} options AutoCancel|NoCancel,NoTitle,NoFocus,NoDim,NoKeys,TouchModal,NoTouch
*/


// CreateWizard.md --> Complete documentation. Sample codes is at the bottom of this file.

/** @Description
The wizard is supposed to simplify a configuration progress which requires several inputs and decisions by the user.
These can be settings and usage terms on first startup or an installation process as you might know from desktop applications.
%c
The callback function will be called each time the user changes the wizard page.
The functions gets the current wizard layout and the page index (starting from 1) to identify the current progress.

### Page Initialisation
On the very first call the page index is **0** which means 'initialisation'.
Then you have to create and add all wizard pages to the passed (frame) layout.

In case the user cancels the wizard the index is **-1**.

 */

/** ## Methods ##
 * These are the methods available for CreateWizard
 */


/** ### Batch ###
 * Batch method calls to be able to set all object's properties at once. * Note that you need to specify each parameter (use “” or <js nobox>null</js> to leave some out) * Inherited methods can be called by appending an underscore to the function name (ie. <js nobox>txt.Batch({ SetBackColor_: [“red”] })</js>
 * $$ wiz.Batch(properties) $$
 * @param {obj} properties { COMMAND:lst
 */


/** ### Dismiss ###
 * Hide the control and remove it from the screen.
 * $$ wiz.Dismiss() $$
 */


/** ### Finish ###
 * Indicate that the Wizard is going to finish on the next page.
 * $$ wiz.Finish() $$
 */


/** ### GetButtons ###
 * Returns the list of the three control buttons at the bottom of the wizard.
 * $$ wiz.GetButtons() $$
 * @returns lst_obj-[ btnCancel:dso-CreateButton, btnPrev:dso-CreateButton, btnNext:dso-CreateButton ]
 */


/** ### GetDialog ###
 * Returns the dialog:dso-"CreateDialog" object of the wizard.
 * $$ wiz.GetDialog() $$
 * @returns dso-CreateDialog
 */


/** ### GetLayout ###
 * Return s the content layout:dso-"CreateLayout" object of the wizard.
 * $$ wiz.GetLayout() $$
 * @returns dso-CreateLayout
 */


/** ### GetType ###
 * Returns the control class name.
 * $$ wiz.GetType() $$
 */


/** ### Hide ###
 * Hide the control but keep the layout space free.
 * $$ wiz.Hide() $$
 */


/** ### IsVisible ###
 * Returns whether the control is currently visible to the user, ignoring overlaying controls.
 * $$ wiz.IsVisible() $$
 * @returns bin
 */


/** ### Show ###
 * Set the visibility of the control to “Show”.
 * $$ wiz.Show() $$
 */

// CreateWizard.txt --> All the sample codes

/** @Sample
<sample Demo>
function OnStart()
{
    var theme = app.CreateTheme( "light" );
    app.SetTheme( theme );

    wiz = app.CreateWizard( "My Wizard", 0.7, 0.7, OnWizard  );
    wiz.Show();
}

function OnWizard( lay, page )
{
    switch( page ) {
    case 0:
        wizTxt = app.CreateText( "", -1, -1, "MultiLine" );
        wizTxt.SetTextSize( 19 );
        lay.AddChild( wizTxt );

        wizFlag = app.CreateText( "[fa-flag-checkered]", -1, -1, "FontAwesome" );
        wizFlag.SetMargins( 0, 0.05, 0, 0 );
        wizFlag.SetTextSize( 64 );
        wizFlag.Gone();
        lay.AddChild( wizFlag );
    break;

    case 1:
        var msg = "This is the first page of your wizard";
        wizTxt.SetText( msg );
    break;

    case 2:
        var msg = "You can put any controls you like here, including"
            + " a webview and have as many  pages as you like";
        wizTxt.SetText( msg );
        wizFlag.Gone();
    break;

    case 3:
        wizTxt.SetText( "Wizard complete!" );
        wizFlag.Show();
        wiz.Finish();
    break;

    case 4:
        wiz.Dismiss();
        app.ShowPopup( "Wizard finished" );
    break;

    case -1:
        app.ShowPopup( "Wizard cancelled" );
    }
}
</sample>

 */

