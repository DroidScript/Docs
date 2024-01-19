// ------------- HEADER SECTION -------------


/** # addSwitch #
 * @abbrev swt
 * @brief addSwitch
 * Adds a Switch Component into your layout. A switch is a control whose values can be toggled between `on` and `off`.
 * $$ swt = ui.addSwitch(parent, text, options?, width?, height?) $$
 * @param {obj} parent The parent layout where to add the Switch Component.
 * @param {str} text The label text.
 * @param {str} [options] A comma separated switch options. Options can be one or a combination of the following \n Color: `Primary` `Secondary` `Default` \n `Icon Position: `Left` `Top` `Right` `Bottom` \n `Sizes`: `Small` `Medium`
 * @param {num} [width] Fraction of the screen width. [0-1]
 * @param {num} [height] Fraction of the screen height. [0-1]
 * @returns uio-Switch
*/




// ------------- VISIBLE METHODS & PROPERTIES -------------


/** @extern absHeight */

/** @extern absLeft */

/** @extern absTop */

/** @extern absWidth */

/** @extern backColor */

/** @extern backImage */

/** @extern border */

/** @extern borderColor */

/** @extern borderStyle */

/** @extern color */

/** @extern cornerRadius */

/** ### disableRipple
 * @prop
 * Sets or returns the disabled state of the ripple effect.
 * @returns bin
 */


/** @extern disabled */

/** ### edge
 * @prop
 * Sets or returns the edge position of the toggle. Values can be <col nobox #fb8c00>Start</col> <col nobox #fb8c00>End</col> or <col nobox #fb8c00>False</col>
 * @returns str
 */


/** ### enable
 * @prop
 * Sets or returns a Boolean whether the component is enabled or disabled.
 * @returns bin
 */


/** @extern fontFile */

/** @extern height */

/** ### iconPosition
 * @prop
 * Sets or returns the icon position. Values can be <col nobox #fb8c00>left</col> <col nobox #fb8c00>top</col> <col nobox #fb8c00>right</col> or <col nobox #fb8c00>bottom</col>
 * @returns str
 */


/** @extern isVisible */

/** @extern left */

/** @extern margins */

/** @extern opacity */

/** @extern options */

/** @extern padding */

/** @extern parent */

/** @extern position */

/** ### required
 * @prop
 * Sets or returns a boolean value whether this component is required or not.
 * @returns bin
 */


/** @extern rotation */

/** ### sizeVariant
 * @prop
 * Sets or returns the size variant of the toggle switch. Values can be <col nobox #fb8c00>Small</col> or <col nobox #fb8c00>Medium</col>
 * @returns str
 */


/** ### spaceBetween
 * @prop
 * Sets or returns the space between the switch icon and the label text.
 * @returns num
 */


/** ### text
 * @prop
 * Sets or returns the label text.
 * @returns str
 */


/** ### textColor
 * @prop
 * Sets or returns the text color in hexadecimal format.
 * @returns str_col
 */


/** @extern textSize */

/** @extern top */

/** @extern type */

/** ### value
 * @prop
 * Sets or returns the value of the switch toggle.
 * @returns bin
 */


/** @extern visibility */

/** @extern width */

/** ### setOnTouch ###
 * @brief setOnTouch
 * Adds an event handler when the switch is touch
 * $$ swt.setOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["check"],"pTypes":["bin-The checked state of the switch control."]}
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


// ------------- SAMPLES -------------



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
