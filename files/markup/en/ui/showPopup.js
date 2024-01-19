// ------------- HEADER SECTION -------------


/** # showPopup #
 * @abbrev pop
 * @brief showPopup
 * Shows a popup into your app.
 * $$ pop = ui.showPopup(msg, options?, duration?, action?) $$
 * @param {str} msg The message to display on the pop-up.
 * @param {str} [options] A comma separated Menu options. Values can be \n Duration: `Short` `Long` \n `Vertical Alignment: `Top` `Bottom` \n `Horizontal Alignment: `Left` `Center` `Right` \n `Action options: `Icon` or `HideOnAction` \n `Transition`: `Grow` `Fade` `Slide` `Collapse` `Zoom`
 * @param {num} [duration] Time in milliseconds. Pass this, if you don't want the default auto hide duration.
 * @param {str} [action] Action button text.
 * @returns uio-Popup
*/




// ------------- VISIBLE METHODS & PROPERTIES -------------


/** ### duration
 * @prop
 * Sets or returns the duration of the popup in milliseconds.
 * @returns num
 */


/** ### text
 * @prop
 * Sets or returns the text of the popup.
 * @returns str
 */


/** ### setOnClose ###
 * @brief setOnClose
 * Adds an onClose callback to your popup
 * $$ pop.setOnClose(callback) $$
 * @param {fnc_json} callback {}
 */


/** ### setOnAction ###
 * @brief setOnAction
 * Adds an action callback when the user touches the action button. The `btnText` param must be provided in order to create an action button
 * $$ pop.setOnAction(callback) $$
 * @param {fnc_json} callback {}
 */


/** ### show ###
 * @brief show
 * Show the popup
 * $$ pop.show() $$
 */


/** ### hide ###
 * @brief hide
 * Hide the popup
 * $$ pop.hide() $$
 */


/** ### setPosition ###
 * @brief setPosition
 * Updates the position of the popup
 * $$ pop.setPosition(vertical?, horizontal?) $$
 * @param {str} [vertical] Vertical alignment. Values can be `Top` `Bottom`
 * @param {str} [horizontal] Horizontal alignment. Values can be `Left` `Center` and `Right`
 */


/** ### getPosition ###
 * @brief getPosition
 * Returns the position of the popup. The returned object is of the form `{ vertical, horizontal
 * $$ pop.getPosition() $$
 * @returns obj
 */



// ------------- SAMPLES -------------



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
@sample Popups with transitions
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
@sample With Transition
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
