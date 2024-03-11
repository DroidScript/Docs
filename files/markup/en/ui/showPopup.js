/** # Popup
 * @abbrev pop
 * "Popup" is like a short notification that quickly appears on the screen, providing extra options or information in a concise and unobtrusive manner.
 * @img(img1.png)
 * @jdocs It's similar to a toast notification. Show a popup like this:
 * $$ pop = ui.showPopup( msg, options, duration ) $$
 * @param {String} msg The message to display on the pop-up.
 * @param {String} [options] A comma separated options.\nDuration: `Short`, `Long`\nVertical Alignment: `Top`, `Bottom`\nHorizontal Alignment: `Left`, `Center`, `Right`\nAction options: `Icon`, `HideOnAction`\nTransition: `Grow`, `Fade`, `Slide`, `Collapse`, `Zoom`
 * @param {Number} [duration] Time in milliseconds. Pass this if you don't want the default auto hide duration.
 * @param {String} [action] Action button text
 * @returns uio-Popup
 */


	/** ## Properties
	 * Here are the available setters and/or getters for the Popup Component.
	 * @prop {String} text Sets or returns the text of the popup.
	 * @prop {Number} duration Sets or returns the duration of the popup in milliseconds.
	 */


	/** ## Methods
	 * Here are the available methods for the Popup Component.
	 */


    /** ### setOnClose
	 * Adds an onClose callback to your popup.
	 * $$ popup.setOnClose( callback ) $$
	 * @param {Function} callback The onclose callback.
	 */


	/** ### setOnAction
	 * Adds an action callback when the user touches the action button. The `btnText` param must
	 * be provided in order to create an action button.
	 * $$ popup.setOnAction( callback ) $$
	 * @param {Function} callback The on action callback.
	 */


	/** ### show
	 * Show the popup.
	 * $$ popup.show() $$
	 */


	/** ### hide
	 * Hide the popup.
	 * $$ popup.hide() $$
	 */


	/** ### setPosition
	 * Updates the position of the popup.
	 * $$ popup.setPosition( vertical, horizontal ) $$
	 * @param {String} [vertical] Vertical alignment. Values can be `Top` `Bottom`
	 * @param {String} [horizontal] Horizontal alignment. Values can be `Left` `Center` and `Right`
	 */


	/** ### getPosition
	 * Returns the position of the popup. The returned object is of the form `{ vertical, horizontal }`
	 * $$ popup.getPosition() $$
	 * @returns Object
	 */


/* --- parent_methods here ----- */


/* ## Examples */


/**
@sample Basic
class Main extends App
{
    onStart()
    {
        // Create a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Add button control to the main layout
        this.btn1 = ui.addButton(this.main, "Show Popup")

        // Add a callback handler when the button is touched
        this.btn1.setOnTouch( this.onTouch )
    }

    onTouch()
    {
        // Display popup on the Top with transition Grow
        ui.showPopup("Hello from popup!")
    }
}
 */


/**
@sample Popup with transition
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")
        this.main.setChildMargins(0, 0, 0, 0.02)

        // Adds first button to the main layout
        this.btn1 = ui.addButton(this.main, "Top & Grow", "Primary")
        this.btn1.setOnTouch( this.onTouch1 )

        // Adds second button to the main layout
        this.btn2 = ui.addButton(this.main, "Bottom and Slide", "Secondary")
        this.btn2.setOnTouch( this.onTouch2 )
    }

    onTouch1()
    {
        // Display popup on the Top with transition Grow
        ui.showPopup("Hello world.", "Top,Grow")
    }

    onTouch2()
    {
        // Display popup on the Bottom with transition Slide in 1.5 seconds.
        ui.showPopup("Hello world.", "Bottom,Slide", 1500)
    }
}
 */


/**
@sample With action
class Main extends App
{
    onStart()
    {
        // Create a fullscreen layout with objects vertically centered
        this.layMain = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Add a button control to the main layout
        this.btn = ui.addButton(this.layMain, "Show Popup")

        // Add a callback handler when the button is touched
        this.btn.setOnTouch( this.showMessage )
    }

    showMessage()
    {
        // Show a popup with additional action
        this.snackbar = ui.showPopup("Please login to continue", "Bottom,Center", "", "Login")
        
        // Add a callback handler when the action is touched
        this.snackbar.setOnAction( this.onAction )
    }

    onAction()
    {
        // Hide the popup when the action button is click
        this.snackbar.hide()
        ui.showPopup("Login is click. Show login Page.")
    }
}
 */


/**
@sample Python Basic
from hybrid import ui

def OnStart():
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")
    btn1 = ui.addButton(main, "Show Popup")
    btn1.setOnTouch(onTouch)

def onTouch(event):
    ui.showPopup("Hello from popup!")
 */


/**
@sample Python Popups with transitions
from hybrid import ui

def OnStart():
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")
    main.setChildMargins(0, 0, 0, 0.02)
    btn1 = ui.addButton(main, "Top & Grow", "Primary")
    btn1.setOnTouch(onTouch1)
    btn2 = ui.addButton(main, "Bottom and Slide", "Secondary")
    btn2.setOnTouch(onTouch2)

def onTouch1(event):
    ui.showPopup("Hello world.", "Top,Grow")

def onTouch2(event):
    ui.showPopup("Hello world.", "Bottom,Slide", 1500)
 */


/**
@sample Python With Transition
from hybrid import ui

def OnStart():
    layMain = ui.addLayout("main", "Linear", "VCenter,FillXY")
    btn = ui.addButton(layMain, "Show Popup")
    btn.setOnTouch(showMessage)

def showMessage(event):
    global snackbar
    snackbar = ui.showPopup("Please login to continue", "Bottom,Center", "", "Login")
    snackbar.setOnAction(onAction)

def onAction():
    snackbar.hide()
    ui.showPopup("Login is click. Show login Page.")
 */


