// ------------- HEADER SECTION -------------


/** # addDialog #
 * @abbrev dlg
 * @brief addDialog
 * 
 * $$ dlg = ui.addDialog(title, body, actions, options) $$ 
 * @param {str} title The dialog title text.
 * @param {str} body The dialog message to be shown.
 * @param {str} actions A comma separated text for action buttons.
 * @param {str_com} options Colors: `Primary` `Secondary` \n `Util: `NoCancel` prevents the dialog from closing on action.
 * @returns obj-Dialog Component
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Adds a dialog into your app.

### Properties
These are the setter and getter properties for the addDialog Component.
<smp noinl>layout:"Layout:'Returns the layout of the dialog where you can add custom controls.'"</smp>
<smp noinl>text:"str:'Sets or returns the dialog text.'"</smp>
<smp noinl>titleColor:"str:'Sets or returns the title text color in hexadecimal format.'"</smp>
<smp noinl>titleText:"str:'Sets or returns the dialog title text.'"</smp>
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### setOnAction ###
 * @brief setOnAction
 * Adds a callback function when the action buttons are click
 * $$ dlg.setOnAction(callback) $$
 * @param {fnc_json} callback {"pNames":["text ","index "],"pTypes":["str-The dialog action text.","num-The index of the corresponding dialog action."]}
 */


/** ### setOnClose ###
 * @brief setOnClose
 * Adds a callback function when the dialog is close
 * $$ dlg.setOnClose(callback) $$
 * @param {fnc_json} callback 
 */


/** ### show ###
 * @brief show
 * Show the dialog
 * $$ dlg.show() $$
 */


/** ### hide ###
 * @brief hide
 * Hide the dialog
 * $$ dlg.hide() $$
 */



// ------------- SAMPLES ------------- 


    
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
    
            