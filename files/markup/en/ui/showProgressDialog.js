// ------------- HEADER SECTION ------------- 


/** # showProgressDialog #
 * @abbrev prd
 * @brief showProgressDialog
 * 
 * $$ prd = ui.showProgressDialog(text, options) $$ 
 * @param {str} text The text message of the progress dialog. Options can be \n `AutoCancel` to close the dialog when backdrop is click.
 * @param {str} options A comma separated options for Progress Dialog.
 * @returns obj-ProgressDialog
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Shows a progress dialog component into your app.

<style>.samp { margin-top: 2px; } </style><h3>Properties</h3>These are the setter and getter properties for the showProgressDialog Component.
<div class="samp"><a href="#text-0" data-transition="pop" data-rel="popup" class="ui-link">text </a></div>
<div data-role="popup" id="text-0" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the ProgressDialog text.</p></div>
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### show ###
 * Show the progress dialog component *  * 
 * $$ prd.show() $$
 */


/** ### hide ###
 * Hides the dialog component *  * 
 * $$ prd.hide() $$
 */


/** ### setOnClose ###
 * Adds a callback handler method on close event *  * 
 * $$ prd.setOnClose(callback) $$
 * @param {} callback 
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
    
            