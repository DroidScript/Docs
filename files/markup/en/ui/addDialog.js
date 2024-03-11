/** # Dialog
 * @abbrev dlg
 * A Dialog in mobile UI design is a pop-up window that appears on top of the current screen to prompt the user for input or to convey information.
 * @img(img1.png)
 * @img(img2.png)
 * @img(img3.png)
 * @img(img4.png)
 * @jdocs In Material Design, Dialogs follow guidelines for clarity, actions, and consistent styling. They serve to enhance user interaction and provide a focused way to handle specific tasks or gather input within a mobile application. Add a dialog into your app using the `addDialog` method like this:
 * $$ dlg = ui.addDialog( title, body, actions, options ) $$
 * @param {String} title The dialog title text.
 * @param {String} body The dialog message to be shown.
 * @param {Array} [actions] A string of action button text.
 * @param {String} [options] A comma separated options.\nTheme Colors: `Primary`, `Secondary`\nUtil: `NoCancel` prevents the dialog from closing on action.
 * @param {Number} width Fraction of the screen width `[0-1]`.
 * @returns uio-Dialog
 */


	/** ## Properties
	 * Here are the available setters and/or getter of the Dialog Component.
	 * @prop {String} text Sets or returns the dialog text.
	 * @prop {String} titleText Sets or returns the dialog title text.
	 * @prop {String} titleColor Sets or returns the title text color in hexadecimal format.
     * @prop {Object} layout Returns the layout of the dialog where you can add custom controls.
	 */


	/** ## Methods
	 * Here are the available methods of the Dialog Component.
	 */


	/** ### setOnAction
	 * Adds a callback function when the action buttons are click.
	 * $$ dlg.setOnAction( callback ) $$
	 * @param {Function} callback The callback function. ---> @arg {String} text The dialog action text. @arg {Number} index The index of the corresponding dialog action.
	 */


	/** ### setOnClose
	 * Adds a callback function when the dialog is close.
	 * $$ dlg.setOnClose(callback) $$
	 * @param {Function} callback The callback function
	 */


	/** ### show
	 * Show the dialog.
	 * $$ dlg.show() $$
	 */


	/** ### hide
	 * Hide the dialog.
	 * $$ dlg.hide() $$
	 * @@ When you add an `onClose` callback, it will be fired after this event.
	 */


/* --- parent_methods here ----- */


/* ## Examples */


/**
@sample Basic
class Main extends App
{
    onStart()
    {
        // Create a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Add button to the main layout to show the dialog when clicked.
        this.btn = ui.addButton(this.main, "Show Dialog", "Contained,Primary")
        this.btn.setOnTouch( this.showDialog )

        // Message to be displayed in the Dialog component
        var bodyText = "Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."
        
        // Initialize the Dialog component with `Agree` and `Disagree` action buttons
        this.dlg = ui.addDialog("Use Google's location service?", bodyText, "Disagree,Agree")
    }

    showDialog()
    {
        // Show the Dialog component when the button is click.
        this.dlg.show()
    }
}
 */


/**
@sample NoCancel
class Main extends App
{
    onStart()
    {
        // Create a fullscreen layout with objects vertically centered
        this.main = ui.addLayout( "main", "Linear", "VCenter,FillXY")

        // Add a button to the main layout.
        this.btn = ui.addButton( this.main, "Show Dialog", "Contained,Primary" )

        // Add a callback handler for `onTouch` event on the button.
        this.btn.setOnTouch( this.showDialog )

        // Message to display
        var bodyText = "Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."
        
        // Initialize the Dialog component and pass a `NoCancel` option.
        this.dlg = ui.addDialog( "Use Google's location service?", bodyText, "Close,Agree", "NoCancel" )

        // Add a callback handler for `onAction` event on the Dialog component
        this.dlg.setOnAction( this.onAction );
    }

    showDialog()
    {
        // Show the Dialog component when button is click
        this.dlg.show();
    }

    onAction( action )
    {
        if(action == "Close")
        {
            ui.showPopup("There you go.");
            this.dlg.hide();
        }
        else
        {
            ui.showPopup("Oops! You can't close me here.");
        }
    }
}
 */


/**
@sample Adding controls to the dialog
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")
        this.main.setChildMargins(0.01, 0.01, 0.01, 0.01)

        // Adds a text control to the main layout.
        this.txt = ui.addText(this.main, "Email: ", "", 0.7)

        // Adds a button to show the dialog.
        this.btn = ui.addButton(this.main, "Show Dialog", "Contained,Primary")

        // Add a callback handler for `ontouch` event on the button control
        // to show the Dialog component
        this.btn.setOnTouch( this.showDialog )

        var bodyText = "To subscribe to this website, please enter your email address here. We will send updates occasionally."
        
        // Initialize the dialog.
        this.dlg = ui.addDialog("Subscribe", bodyText, "Cancel,Subscribe")

        // Add a callback handler for `onaction` event on the Dialog componenti
        this.dlg.setOnAction( this.onAction )

        // Adding textfield to the main layout
        this.tfd = ui.addTextField(this.dlg.layout, "", "Filled")
        this.tfd.label = "Email Address"
    }

    showDialog()
    {
        this.dlg.show()
    }

    onAction( action )
    {
        // Check the button that is click.
        if( action == "Subscribe" )
        {
            // Change the text of the text control.
            this.txt.text = "Email : " + this.tfd.text
        }
    }
}
 */


/**
@sample Python Basic
from hybrid import ui

def OnStart():
    global dlg
    # Create a fullscreen layout with objects vertically centered
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")

    # Add button to the main layout to show the dialog when clicked.
    btn = ui.addButton(main, "Show Dialog", "Contained,Primary")
    btn.setOnTouch(showDialog)

    # Message to be displayed in the Dialog component
    bodyText = "Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."

    # Initialize the Dialog component with `Agree` and `Disagree` action buttons
    dlg = ui.addDialog("Use Google's location service?", bodyText, "Disagree,Agree")

def showDialog(event):
    # Show the Dialog component when the button is clicked.
    dlg.show()
 */


/**
@sample Python NoCancel
from hybrid import ui

def OnStart():
    global dlg
    # Create a fullscreen layout with objects vertically centered
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")

    # Add a button to the main layout.
    btn = ui.addButton(main, "Show Dialog", "Contained,Primary")

    # Add a callback handler for `onTouch` event on the button.
    btn.setOnTouch(showDialog)

    # Message to display
    bodyText = "Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."

    # Initialize the Dialog component and pass a `NoCancel` option.
    dlg = ui.addDialog("Use Google's location service?", bodyText, "Close,Agree", "NoCancel")

    # Add a callback handler for `onAction` event on the Dialog component
    dlg.setOnAction(onAction)

def showDialog(event):
    # Show the Dialog component when button is clicked
    dlg.show()

def onAction(action, index):
    if action == "Close":
        ui.showPopup("There you go.")
        dlg.hide()
    else:
        ui.showPopup("Oops! You can't close me here.")
 */


/**
@sample Python Adding controls to the dialog
from hybrid import ui

def OnStart():
    global dlg, txt, tfd
    # Creates a fullscreen layout with objects vertically centered.
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")
    main.setChildMargins(0.01, 0.01, 0.01, 0.01)

    # Adds a text control to the main layout.
    txt = ui.addText(main, "Email: ", "", 0.7)

    # Adds a button to show the dialog.
    btn = ui.addButton(main, "Show Dialog", "Contained,Primary")

    # Add a callback handler for `ontouch` event on the button control
    # to show the Dialog component
    btn.setOnTouch(showDialog)

    bodyText = "To subscribe to this website, please enter your email address here. We will send updates occasionally."

    # Initialize the dialog.
    dlg = ui.addDialog("Subscribe", bodyText, "Cancel,Subscribe")

    # Add a callback handler for `onaction` event on the Dialog componenti
    dlg.setOnAction(onAction)

    # Adding textfield to the main layout
    tfd = ui.addTextField(dlg.layout, "", "Filled")
    tfd.label = "Email Address"

def showDialog(event):
    dlg.show()

def onAction(action, index):
    # Check the button that is clicked.
    if action == "Subscribe":
        # Change the text of the text control.
        txt.text = "Email: " + tfd.text
 */


