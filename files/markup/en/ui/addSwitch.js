/** # Switch
 * @abbrev swt
 * A Switch in mobile UI design is a toggle control that allows users to turn a setting on or off.
 * @img(img1.png)
 * @img(img2.png)
 * @jdocs In Material Design, it's presented with a sliding motion and adheres to consistent styling for clarity. Switches provide an intuitive way to enable or disable options in applications, contributing to a seamless user experience. Add a switch into your app using the `addSwitch` method like this:
 * $$ swt = ui.addSwitch(parent, text, options, width, height) $$
 * @param {uio-Layout} parent The parent layout where to add the Switch Component.
 * @param {String} text The label text.
 * @param {String} [options] A comma separated options.\nTheme Color: `Primary`, `Secondary`, `Default`\nIcon Position: `Left`, `Top`, `Right`, `Bottom`\nSizes: `Small`, `Medium`
 * @param {Number} [width] Fraction of the parent width `[0-1]`.
 * @param {Number} [height] Fraction of the parent height `[0-1]`.
 * @returns uio-Switch
 */


    /** ## Properties
     * Here are the available setters and getters for the Switch Component.
     * @prop {Boolean} value Sets or returns the value of the switch toggle.
     * @prop {String} text Sets or returns the label text.
     * @prop {String} iconPosition Sets or returns the icon position. Values can be `left` `top` `right` or `bottom`
     * @prop {Boolean} required Sets or returns a boolean value whether this component is required or not.
     * @prop {String} color Sets or returns the theme color. Values can be `Default` `Primary` or `Secondary`
     * @prop {String} textColor Sets or returns the text color in hexadecimal format.
     * @prop {String} sizeVariant Sets or returns the size variant of the toggle switch. Values can be `Small` or `Medium`
     * @prop {String} edge Sets or returns the edge position of the toggle. Values can be `Start` `End` or `False`
     * @prop {Boolean} enable Sets or returns a Boolean whether the component is enabled or disabled.
     * @prop {Number} spaceBetween Sets or returns the space between the switch icon and the label text.
     * @prop {Boolean} disableRipple Sets or returns the disabled state of the ripple effect.
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
     * Here are the available methods of the Switch Component.
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
     * Adds an event handler when the switch is touch.
     * $$ swt.setOnTouch( callback ) $$
     * @param {Function} callback The callback function to be called. ---> @arg {Boolean} check The checked state of the switch control. @arg {Object} pos The position of the event.
     */


/* --- parent_methods here ----- */


/* ## Examples */


/**
@sample Basic
class Main extends App
{
    onStart()
    {
        // Creates a layout with objects verticaly centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Adds a switch to the main layout
        this.swt = ui.addSwitch(this.main, "Check me", "Secondary", 0.5)

        // Add a callback handler when the switch control is touch
        this.swt.setOnTouch( this.onTouch )
    }

    onTouch( value )
    {
        ui.showPopup("Value is : "  + value)

        // Setting the switch label text
        this.swt.text = `Check me (Value is ${value})`
    }
}
 */


/**
@sample Right switch with custom styles
class Main extends App
{
    onStart()
    {
        // Creates a layout with objects verticaly centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Adds a switch control to the main layout
        // `Right` option will display the switch on the right
        this.swt = ui.addSwitch(this.main, "Check me", "Right,Secondary", 0.5)

        // Add some custom styling to thw switch control
        this.swt.border = 1
        this.swt.padding = ["1.2rem"]
        this.swt.cornerRadius = 4
        this.swt.backColor = "yellow"

        // Add a callback handler when the switch control is touch
        this.swt.setOnTouch( this.onTouch )
    }

    onTouch( value )
    {
        ui.showPopup("Value is : "  + value)
    }
}
 */


/**
@sample Python Basic
from hybrid import ui

def OnStart():
    global swt
    # Creates a layout with objects verticaly centered
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")

    # Adds a switch to the main layout
    swt = ui.addSwitch(main, "Check me", "Secondary", 0.5)

    # Add a callback handler when the switch control is touch
    swt.setOnTouch(onTouch)

def onTouch(value):
    ui.showPopup("Value is : "  + value)

    # Setting the switch label text
    swt.text = f"Check me (Value is {value})"
 */


/**
@sample Python Right switch with custom styles
from hybrid import ui

def OnStart():
    # Creates a layout with objects verticaly centered
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")

    # Adds a switch control to the main layout
    # `Right` option will display the switch on the right
    swt = ui.addSwitch(main, "Check me", "Right,Secondary", 0.5)

    # Add some custom styling to thw switch control
    swt.border = 1
    swt.padding = ["1.2rem"]
    swt.cornerRadius = 4
    swt.backColor = "yellow"

    # Add a callback handler when the switch control is touch
    swt.setOnTouch(onTouch)

def onTouch(value):
    ui.showPopup("Value is : " + value)
 */


