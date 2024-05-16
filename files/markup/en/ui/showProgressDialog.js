/** # ProgressDialog
 * @abbrev prd
 * A ProgressDialog is a pop-up dialog that indicates the progress of a task, often accompanied by a loading spinner or bar.
 * @img(img1.png)
 * @jdocs It provides visual feedback to users during time-consuming operations, enhancing the overall user experience by conveying that the application is actively working on a task. Show a progress dialog in your app using the `showProgressDialog` method like this:
 * $$ prd = ui.showProgressDialog(text, options) $$
 * @param {String} [text] The text message of the progress dialog.
 * @param {String} [options] A comma separated options.\n`AutoCancel` to close the dialog when backdrop is click.
 * @returns uio-ProgressDialog
 */


	/** ## Properties
	 * Here are the available setters and getters for the ProgressDialog Component.
	 * @prop {String} text Sets or returns the ProgressDialog text.
	 */


	/** ## Methods
	 * Here are the available methods for the ProgressDialog Component.
	 */


    /** ### show
	 * Show the progress dialog component.
	 * $$ prd.show() $$
	 */


	/** ### hide
	 * Hides the dialog component.
	 * $$ prd.hide() $$
	 */


	/** ### setOnClose
	 * Adds a callback handler method on close event.
	 * $$ prd.setOnClose(callback) $$
	 * @param {Function} callback The callback function.
	 */


/* --- parent_methods here ----- */


/* ## Examples */


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
@sample  Nocancel progress dialog
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


