// ------------- HEADER SECTION -------------


/** # showProgressDialog #
 * @abbrev prd
 * @brief showProgressDialog
 * Shows a progress dialog component into your app.
 * 
 * ### Properties
 * These are the setter and getter properties for the showProgressDialog Component.
 * <smp noinl>text:"str:'Sets or returns the ProgressDialog text.'"</smp>
 * $$ prd = ui.showProgressDialog(text, options) $$ 
 * @param {str} text The text message of the progress dialog. Options can be \n `AutoCancel` to close the dialog when backdrop is click.
 * @param {str_com} options 
 * @returns obj-ProgressDialog
*/




// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### show ###
 * @brief show
 * Show the progress dialog component
 * $$ prd.show() $$
 */


/** ### hide ###
 * @brief hide
 * Hides the dialog component
 * $$ prd.hide() $$
 */


/** ### setOnClose ###
 * @brief setOnClose
 * Adds a callback handler method on close event
 * $$ prd.setOnClose(callback) $$
 * @param {fnc_json} callback 
 */



// ------------- SAMPLES ------------- 


    
/**
@sample Progress Dialog
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Add a button to the main layout
        this.btn = ui.addButton(this.main, "Show Progress Dialog", "Outlined")

        // Add a callback handler when the button is click
        this.btn.setOnTouch( this.onTouch )
    }

    onTouch()
    {
        // Show a progress dialog with `AutoCancel` the dismisses on backdrop click
        ui.showProgressDialog("Loading...", "AutoCancel")
    }
}
 */
    
            
    
/**
@sample Nocancel progress dialog
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Add a button to the main layout
        this.btn = ui.addButton(this.main, "Show Progress Dialog", "Outlined")

        // Add a callback handler when the button is click
        this.btn.setOnTouch( this.onTouch )
    }

    onTouch()
    {
        // Show a progress dialog with `AutoCancel` the dismisses on backdrop click
        this.pdlg = ui.showProgressDialog("Loading...", "NoCancel")

        // hide the progress dialog after 2 seconds
        setTimeout( () => {
            this.pdlg.hide()
            ui.showPopup( "Progress dialog is close!" )
        }, 2000)
    }
}
 */
    
            
    
/**
@sample Python Progress Dialog
from hybrid import ui

def OnStart():
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")
    btn = ui.addButton(main, "Show Progress Dialog", "Outlined")
    btn.setOnTouch(onTouch)

def onTouch(event):
    ui.showProgressDialog("Loading...", "AutoCancel")
 */
    
            
    
/**
@sample Python Nocancel progress dialog
from hybrid import ui

def OnStart():
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")
    btn = ui.addButton(main, "Show Progress Dialog", "Outlined")
    btn.setOnTouch(onTouch)

def onTouch(event):
    pdlg = ui.showProgressDialog("Loading...", "NoCancel")

    def hideProgressDialog():
        pdlg.hide()
        ui.showPopup("Progress dialog is close!")

    app.SetTimeout(hideProgressDialog, 2000)
 */
    
            