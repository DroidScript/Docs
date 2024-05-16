/** # BottomSheet
 * @abbrev bts
 * The BottomSheet in Material Design is a UI component anchored at the screen bottom.
 * @img(img1.png)
 * @img(img2.png)
 * @jdocs It offers supplementary content without obstructing the main interface, enhancing user experience on mobile apps. Initialize a bottom sheet dialog like this:
 * $$ var bts = ui.addBottomSheet(title, options) $$
 * @param {String} title An optional bottomsheet title.
 * @param {String} options A comma separated options. Values are:\n`"Notch"` to add a small notch at the top of the bottomsheet.\n`"HideOnAction"` to hide the bottomsheet when actions are click.\n`"CloseAction"` add a close action at the left.\n`"MoreAction"` add a more action at the right.\n`"NoCancel"` to disable the default closing event when the backdrop is click.
 * @returns uio-BottomSheet
 */


/**
 * It's a good practice to avoid adding a notch when your bottomsheet has a `title`, or `leftAction` or `rightAction`
 */


    /** ## Properties
     * These are the setter and getter properties available for the BottomSheet component.
     * @prop {Object} layout Returns the layout of the bottomsheet. This is where you add your ui components.
     * @prop {String} leftActionIcon Sets or returns the left action icon.
     * @prop {String} rightActionIcon Sets or returns the right action icon.
     * @prop {String} title Sets or returns the bottomsheet title.
     * @prop {String} description Sets or returns the bottomsheet description.
     */


    /** ## Methods
     * These are the methods available for the BottomSheet component.
     */


    /** ### show
     * $$ bts.show() $$
     * Show the bottom sheet.
     */


    /** ### hide
     * $$ bts.hide() $$
     * Hide the bottom sheet.
     */


    /** ### setOnAction
     * Add a callback handler when the left and right action is click when they are provided.
     * $$ bts.setOnAction(name, pos) $$
     * @param {Function} cb A callback handler when the right or left action is click. The action `name` and `action icon` will be passed to the callback respectively. ---> @arg {String} name The action name. Can be `"leftAction"` or `"rightAction"`. @arg {String} icon Material icon font for the action. 
     */


    /** ### setOnOpen
     * Add a callback handler on `open` event.
     * $$ bts.setOnOpen( cb ) $$
     * @param {Function} cb The callback function to be called.
     */


    /** ### setOnClose
     * Add a callback handler on `close` event.
     * $$ bts.setOnClose( cb ) $$
     * @param {Function} cb The callback function to be called.
     */


/** ## Examples */


/**
@sample Basic
class Main extends App
{
    onStart()
    {
        // Create a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Add a button to the main layout to show the actionsheet when click
        this.btn = ui.addButton(this.main, "Show Bottom Sheet", "Primary")
        this.btn.setOnTouch( this.btn_onTouch )

        this.bts = ui.addBottomSheet( "My title" );

        // Create a button and add it to the bottomsheet layout.
        var btn = ui.addButton(this.bts.layout, "Button", "Secondary");
        btn.margins = [0, "1rem", 0, "1rem"];
    }

    btn_onTouch()
    {
        // show the bottomsheet
        this.bts.show();
    }
}
 */


/**
@sample Bottomsheet with notch
class Main extends App
{
    onStart()
    {
        // Create a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Add a button to the main layout to show the actionsheet when click
        this.btn = ui.addButton(this.main, "Show Bottom Sheet", "Primary")
        this.btn.setOnTouch( this.btn_onTouch )

        this.bts = ui.addBottomSheet("", "Notch");

        // Create a button and add it to the bottomsheet layout.
        var btn = ui.addButton(this.bts.layout, "Button", "Primary");
        btn.margins = [0, "1rem", 0, "1rem"];
    }

    btn_onTouch()
    {
        // show the bottomsheet
        this.bts.show();
    }
}
 */


/**
@sample Complete example
class Main extends App
{
    onStart()
    {
        // Create a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Add a button to the main layout to show the actionsheet when click
        this.btn = ui.addButton(this.main, "Show Bottom Sheet", "Primary")
        this.btn.setOnTouch( this.btn_onTouch )

        // Create a bottom sheet with the given options.
        // HideOnAction: Hide the bottomsheet on action click.
        // CloseAction and MoreAction: Add a left close action and right more action.
        // NoCancel: Prevent the bottomsheet from closing when the more action is click.
        this.bts = ui.addBottomSheet("", "HideOnAction,CloseAction,MoreAction,NoCancel");
        this.bts.title = "My details"
        this.bts.description = "This is a long description."
        this.bts.setOnAction( this.onAction );

        // Create a button and add it to the bottomsheet layout.
        var btn = ui.addButton(this.bts.layout, "Button", "Primary");
        btn.margins = [0, "1rem", 0, "1rem"];
    }

    btn_onTouch()
    {
        // show the bottomsheet
        this.bts.show();
    }

    onAction(name, icon) {
        ui.showPopup( name );
    }
}
 */


/**
@sample Python Basic BottomSheet
from hybrid import ui

def onStart():
    # Create a fullscreen layout with objects vertically centered
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")

    # Add a button to the main layout to show the actionsheet when clicked
    btn = ui.addButton(main, "Show Bottom Sheet", "Primary")
    btn.setOnTouch(btn_onTouch)

    bts = ui.addBottomSheet("My title")

    # Create a button and add it to the bottomsheet layout.
    btn = ui.addButton(bts.layout, "Button", "Secondary")
    btn.margins = [0, "1rem", 0, "1rem"]

def btn_onTouch():
    # Show the bottomsheet
    bts.show()


/**
@sample Python BottomSheet with notch
from hybrid import ui

def onStart():
    # Create a fullscreen layout with objects vertically centered
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")

    # Add a button to the main layout to show the actionsheet when clicked
    btn = ui.addButton(main, "Show Bottom Sheet", "Primary")
    btn.setOnTouch(btn_onTouch)

    bts = ui.addBottomSheet("", "Notch")

    # Create a button and add it to the bottomsheet layout.
    btn = ui.addButton(bts.layout, "Button", "Primary")
    btn.margins = [0, "1rem", 0, "1rem"]

def btn_onTouch():
    # Show the bottomsheet
    bts.show()


/**
@sample Python Complete example
from hybrid import ui

def onStart():
    # Create a fullscreen layout with objects vertically centered
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")

    # Add a button to the main layout to show the actionsheet when clicked
    btn = ui.addButton(main, "Show Bottom Sheet", "Primary")
    btn.setOnTouch(btn_onTouch)

    # Create a bottom sheet with the given options:
    # HideOnAction: Hide the bottomsheet on action click.
    # CloseAction and MoreAction: Add a left close action and right more action.
    # NoCancel: Prevent the bottomsheet from closing when the more action is clicked.
    bts = ui.addBottomSheet("", "HideOnAction,CloseAction,MoreAction,NoCancel")
    bts.title = "My details"
    bts.description = "This is a long description."
    bts.setOnAction(onAction)

    # Create a button and add it to the bottomsheet layout.
    btn = ui.addButton(bts.layout, "Button", "Primary")
    btn.margins = [0, "1rem", 0, "1rem"]

def btn_onTouch():
    # Show the bottomsheet
    bts.show()

def onAction(name, icon):
    ui.showPopup(name)
 */


