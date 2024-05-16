/** # FAB
 * @abbrev fab
 * A Floating Action Button (FAB) is a prominent, circular button that hovers above the content, typically used for a primary action in an application.
 * @img(img1.png)
 * @img(img2.png)
 * @jdocs In Material Design, FABs provide a visually distinctive and accessible means to trigger key actions, promoting a clean and focused user interface. Add a floating action button into your app using the `addFAB` method like this:
 * $$ fab = ui.addFAB(parent, icon, options, text) $$
 * @param {uio-Layout} parent The parent layout where to add the fab
 * @param {String} icon The string icon of the FAB
 * @param {String} options A comma separated option.\nPosition: `Fixed`, `Static`\nStyle: `Rounded`, `Extended`\nAnchor: `Left`, `Right`
 * @param {String} text Text to show for extended FABs
 * @returns uio-FloatingActionButton
 */


/**
 * If you want the fab to position relative to the layout and not on the bottom right corner, pass a `Static` option. If fab is `Extended` pass a text argument.
 */


	/** ## Properties ##
	 * Here are the available setters and/or getters of the FloatingActionButton Component.
	 * @prop {String} icon Sets or returns the material icon font.
	 * @prop {String} text Sets or returns the text for extended FAB.
	 * @prop {String} color Sets or returns the theme color for the FAB. Values can be `Default` `Primary` or `Secondary`
	 * @prop {String} variant Sets or returns the variant use for the FAB. Can be `Extended` or `Rounded`
	 * @prop {String} sizeVariant Sets or returns the size variant of the FAB. Values can be `Small` `Medium` or `Large`
     * @prop {Number} iconSize Sets or returns the size of the icon.
     * @prop {Boolean} disabledRipple Sets or returns the disabled state of the ripple effect.
	 */


    /** @extern width */


    /** @extern height */


    /** @extern opacity */


    /** @extern textSize */


    /** @extern textColor */


    /** @extern rotation */


    /** @extern fontFile */


    /** @extern visibility */


    /** @extern type */


    /** @extern absWidth */


    /** @extern absHeight */


    /** @extern backColor */


    /** @extern backImage */


    /** @extern isVisible */


    /** @extern top */


    /** @extern left */


    /** @extern absTop */


    /** @extern absLeft */


    /** @extern parent */


    /** @extern position */


    /** @extern margins */


    /** @extern padding */


    /** @extern options */


    /** @extern disabled */


    /** @extern border */


    /** @extern borderColor */


    /** @extern borderStyle */


    /** @extern cornerRadius */


    /** @extern el */


    /** @extern elStyle */


	/** ## Methods
	 * Here are the available methods for the Floating Action Button.
	 */


    /** @extern setOnContextMenu */


    /** @extern animate */


    /** @extern setSize */


    /** @extern show */


    /** @extern hide */


    /** @extern gone */


    /** @extern destroy */


    /** @extern setScale */


    /** @extern getPosition */


    /** @extern setMargins */


    /** @extern setPadding */


    /** @extern setPosition */


    /** @extern setBorder */


    /** @extern setCornerRadius */


    /** @extern bringForward */


    /** @extern sendBackward */


    /** ### setOnTouch
     * Adds a callback handler when the FAB is touch.
     * $$ fab.setOnTouch( callback ) $$
     * @param {Function} callback The callback function to be called. ---> @arg {Object} pos The position of the touch event.
     */


    /** ### setCornerRadius ###
     * Sets the corner radius of the button.
     * $$ acc.setCornerRadius(tl, tr, bl, br, mode) $$
     * @param {Number} tl Top-left corner radius.
     * @param {Number} tr Top-right corner radius.
     * @param {Number} bl Bottom-left corner radius.
     * @param {Number} br Bottom-right corner radius.
     * @param {String} mode Unit. Values are `px` `rem` or `%`.
     */


/* --- parent_methods here ----- */


/* ## Examples ## */


/** #Example - Basic FAB
class Main extends App
{
    onStart()
    {
        // Create a fullscreen linear layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Add a floating action button to the main layout.
        // By default, FAB is positioned fix at the bottom right corner
        this.fab = ui.addFAB(this.main, "add")

        // Add a callback handler for `onTouch` event on the FAB
        this.fab.setOnTouch( this.onTouch )
    }

    onTouch()
    {
        ui.showPopup( "You click me!" )
    }
}
 */


/**
@sample Primary static FAB
class Main extends App
{
    onStart()
    {
        // Create a fullscreen linear layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Add a primary floating action button to the main layout.
        // Passing `Static` will ignore fixed positioning
        // and will follow the flow of the parent layout
        this.fab = ui.addFAB( this.main, "add", "Primary,Static" )

        // Add a callback handler for `onTouch` event on the FAB
        this.fab.setOnTouch( this.onTouch )
    }

    onTouch()
    {
        ui.showPopup( "You click me!" )
    }
}
 */


/**
@sample Extended FAB
class Main extends App
{
    onStart()
    {
        // Create a fullscreen linear layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Add a secondary floating action button to the main layout.
        // Passing `Extended` enables to add more text on the FAB
        this.fab = ui.addFAB(this.main, "add", "Secondary,Extended", "New message")

        // Add a callback handler for `onTouch` event on the FAB
        this.fab.setOnTouch( this.onTouch )
    }

    onTouch()
    {
        ui.showPopup( "You click me!" )
    }
}
 */


/**
@sample Secondary,Extended,Left
class Main extends App
{
    onStart()
    {
        // Create a fullscreen linear layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Add a secondary floating action button to the main layout.
        // Passing `Left` option will position the FAB on the bottom left corner
        this.fab = ui.addFAB(this.main, "add", "Secondary,Extended,Left", "New message")

        // Add a callback handler for `onTouch` event on the FAB
        this.fab.setOnTouch( this.onTouch )
    }

    onTouch()
    {
        ui.showPopup( "You click me!" )
    }
}
 */


/**
@sample Python Basic FAB
from hybrid import ui

def OnStart():
    # Create a fullscreen linear layout with objects vertically centered
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")

    # Add a floating action button to the main layout.
    # By default, FAB is positioned fix at the bottom right corner
    fab = ui.addFAB(main, "add")

    # Add a callback handler for `onTouch` event on the FAB
    fab.setOnTouch(onTouch)

def onTouch(event):
    ui.showPopup("You clicked me!")
 */


/**
@sample Python Primary static FAB
from hybrid import ui

def OnStart():
    # Create a fullscreen linear layout with objects vertically centered
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")

    # Add a primary floating action button to the main layout.
    # Passing `Static` will ignore fixed positioning
    # and will follow the flow of the parent layout
    fab = ui.addFAB(main, "add", "Primary,Static")

    # Add a callback handler for `onTouch` event on the FAB
    fab.setOnTouch(onTouch)

def onTouch(event):
    ui.showPopup("You clicked me!")
 */


/**
@sample Python Extended FAB
from hybrid import ui

def OnStart():
    # Create a fullscreen linear layout with objects vertically centered
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")

    # Add a secondary floating action button to the main layout.
    # Passing `Extended` enables to add more text on the FAB
    fab = ui.addFAB(main, "add", "Secondary,Extended", "New message")

    # Add a callback handler for `onTouch` event on the FAB
    fab.setOnTouch(onTouch)

def onTouch(event):
    ui.showPopup("You clicked me!")
 */


/**
@sample Python Secondary,Extended,Left
from hybrid import ui

def OnStart():
    # Create a fullscreen linear layout with objects vertically centered
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")

    # Add a secondary floating action button to the main layout.
    # Passing `Left` option will position the FAB on the bottom left corner
    fab = ui.addFAB(main, "add", "Secondary,Extended,Left", "New message")

    # Add a callback handler for `onTouch` event on the FAB
    fab.setOnTouch(onTouch)

def onTouch(event):
    ui.showPopup("You clicked me!")
 */


