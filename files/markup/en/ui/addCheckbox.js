/** # Checkbox
 * @abbrev ckb
 * A checkbox in UI development is a graphical control element that allows users to toggle between two states, typically checked or unchecked, to indicate a choice or selection.
 * @img(img1.png)
 * @img(img2.png)
 * @jdocs In Material Design, checkboxes maintain a consistent appearance with rounded corners and adhere to elevation principles. Add a checkbox component using the `addCheckbox` method like this:
 * $$ ckb = ui.addCheckbox(parent, text, options, width, height) $$
 * @param {uio-Layout} parent The layout where to add the checkbox
 * @param {String} text The label for the checkbox
 * @param {String} [options] A comma separated options.\nTheme Colors: `Primary`, `Secondary`\nSizes: `Medium`, `Small`\nIcon position: `Left`, `Top`, `Right`, `Bottom`\nVariant: `Indeterminate`, `Determinate`
 * @param {Number} [width] Fraction of the parent width `[0-1]`.
 * @param {Number} [height] Fraction of the parent height `[0-1]`.
 * @returns uio-Checkbox
 */


    /** ## Properties
     * Here are the available setters and/or getters of the Checkbox Component.
     * @prop {String} textPosition Sets or returns the text position. Values can be `left` `top` `right` `bottom`
     * @prop {String} checkIcon Sets or returns the material icon font for check stated.
     * @prop {String} uncheckIcon Sets or returns the material icon font for uncheck state.
     * @prop {Boolean} value Sets or returns the checked state of the checkbox.
     * @prop {Boolean} enabled Returns whether the Checkbox is enabled or disabled.
     * @prop {String} color Sets or returns the theme color of the checkbox when checked. Values can be `Default` `Primary` or `Secondary`
     * @prop {String} text Sets or returns the checkbox text.
     * @prop {Boolean} disable Enabled or disable the checkbox component.
     * @prop {Number} iconSize Sets or returns the size of the icon.
     * @prop {String} iconColor Sets or returns the color of the checkbox icon.
     * @prop {Number} spaceBetween Sets or returns the space between the checkbox icon and the label text.
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
	 * Here are the methods available for Checkbox Component
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
     * Adds an event handler when the checkbox is touch.
     * $$ ckb.setOnTouch( callback ) $$
     * @param {Function} callback The callback function to be called. ---> @arg {Boolean} check The checked state of the checkbox. @arg {Object} pos The position of the touch event.
     */


    /** ### setIcon
     * Sets a custom icon for the checkbox.
     * $$ ckb.setIcon( checked, unchecked ) $$
     * @param {String} checked Material icon for checked state
     * @param {String} unchecked Material icon for unchecked state
     */


    /** ### getIcon
     * Returns the icons of the form { checkIcon, uncheckedIcon }.
     * $$ ckb.getIcon() $$
     * @returns Object { checkIcon, uncheckedIcon }
     */


/* --- parent_methods here ----- */


/* ## Examples */


/**
@sample Basic
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter", 1, 1)

        // Add a checkbox control to the main layout
        this.ckb = ui.addCheckbox(this.main, "This is checkbox label")

        // Add a callback handler for `onTouch` event
        this.ckb.setOnTouch( this.onTouch )
    }

    onTouch( value )
    {
        ui.showPopup( `Value is ${ value }` )
    }
}
 */


/**
@sample Colors
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter", 1, 1)
        this.main.setChildMargins(0, 0.05, 0, 0.05)

        // Add a default checkbox control to the main layout
        this.ckb1 = ui.addCheckbox(this.main, "This is checkbox label")
        this.ckb1.setOnTouch( this.onTouch )

        // Add a primary checkbox control to the main layout
        this.ckb2 = ui.addCheckbox(this.main, "This is checkbox label", "Primary")
        this.ckb2.setOnTouch( this.onTouch )

        // Add a secondary checkbox control to the main layout
        // and set its value to `true`
        this.ckb3 = ui.addCheckbox(this.main, "This is checkbox label", "Secondary")
        this.ckb3.value = true
        this.ckb3.setOnTouch( this.onTouch )
    }

    onTouch( value )
    {
        ui.showPopup( `Value is ${ value }` )
    }
}
 */


/**
@sample Text positions
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter", 1, 1)
        this.main.setChildMargins(0, 0.05, 0, 0.05)

        // Add a checkbox with label on the right. 
        this.ckb1 = ui.addCheckbox(this.main, "Checkbox on the left", "Left")
        this.ckb1.setOnTouch( this.onTouch )

        // Add a checkbox with label on the bottom.
        this.ckb2 = ui.addCheckbox(this.main, "Checkbox on the top", "Primary,Top")
        this.ckb2.setOnTouch( this.onTouch )

        // Add a checkbox with label on the left.
        this.ckb3 = ui.addCheckbox(this.main, "Checkbox on the right", "Secondary,Right")
        this.ckb3.setOnTouch( this.onTouch )

        // Add a checkbox with label on top.
        this.ckb4 = ui.addCheckbox(this.main, "Checkbox on the bottom", "Secondary,Bottom")
        this.ckb4.setOnTouch( this.onTouch )
    }

    onTouch( value )
    {
        ui.showPopup( `Value is ${ value }` )
    }
}
 */


/**
@sample Adding custom checkbox icon
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter", 1, 1)

        // Adds checkbox control to the main layout
        this.ckb = ui.addCheckbox(this.main, "This is checkbox label", "Left,Secondary")

        // Set the checked icon to `favorite`
        // and uncheck icon to `person`
        this.ckb.setIcon("favorite", "person")

        // Add a callback handler for `onTouch` event
        this.ckb.setOnTouch( this.onTouch )
    }

    onTouch( value )
    {
        ui.showPopup( `Value is ${ value }` )
    }
}
 */


/**
@sample Python Basic
from hybrid import ui

def OnStart():
    # Creates a fullscreen layout with objects vertically centered.
    main = ui.addLayout("main", "Linear", "VCenter", 1, 1)

    # Add a checkbox control to the main layout
    ckb = ui.addCheckbox(main, "This is checkbox label")

    # Add a callback handler for `onTouch` event
    ckb.setOnTouch(onTouch)

def onTouch(value):
    ui.showPopup(f"Value is {value}")
 */


/**
@sample Python Colors
from hybrid import ui

def OnStart():
    global value
    # Creates a fullscreen layout with objects vertically centered.
    main = ui.addLayout("main", "Linear", "VCenter", 1, 1)
    main.setChildMargins(0, 0.05, 0, 0.05)

    # Add a default checkbox control to the main layout
    ckb1 = ui.addCheckbox(main, "This is checkbox label")
    ckb1.setOnTouch(onTouch)

    # Add a primary checkbox control to the main layout
    ckb2 = ui.addCheckbox(main, "This is checkbox label", "Primary")
    ckb2.setOnTouch(onTouch)

    # Add a secondary checkbox control to the main layout
    # and set its value to `True`
    ckb3 = ui.addCheckbox(main, "This is checkbox label", "Secondary")
    ckb3.value = True
    ckb3.setOnTouch(onTouch)

def onTouch(value):
    ui.showPopup(f"Value is {value}")
 */


/**
@sample Python Text positions
from hybrid import ui

def OnStart():
    # Creates a fullscreen layout with objects vertically centered.
    main = ui.addLayout("main", "Linear", "VCenter", 1, 1)
    main.setChildMargins(0, 0.05, 0, 0.05)

    # Add a checkbox with label on the right.
    ckb1 = ui.addCheckbox(main, "Checkbox on the left", "Left")
    ckb1.setOnTouch(onTouch)

    # Add a checkbox with label on the bottom.
    ckb2 = ui.addCheckbox(main, "Checkbox on the top", "Primary,Top")
    ckb2.setOnTouch(onTouch)

    # Add a checkbox with label on the left.
    ckb3 = ui.addCheckbox(main, "Checkbox on the right", "Secondary,Right")
    ckb3.setOnTouch(onTouch)

    # Add a checkbox with label on top.
    ckb4 = ui.addCheckbox(main, "Checkbox on the bottom", "Secondary,Bottom")
    ckb4.setOnTouch(onTouch)

def onTouch(value):
    ui.showPopup(f"Value is {value}")
 */


/**
@sample Python Adding custom checkbox icon
from hybrid import ui

def OnStart():
    # Creates a fullscreen layout with objects vertically centered.
    main = ui.addLayout("main", "Linear", "VCenter", 1, 1)

    # Adds checkbox control to the main layout
    ckb = ui.addCheckbox(main, "This is checkbox label", "Left,Secondary")

    # Set the checked icon to `favorite`
    # and uncheck icon to `person`
    ckb.setIcon("favorite", "person")

    # Add a callback handler for `onTouch` event
    ckb.setOnTouch(onTouch)

def onTouch(value):
    ui.showPopup(f"Value is {value}")
 */


