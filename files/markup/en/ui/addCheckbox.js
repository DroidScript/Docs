// ------------- HEADER SECTION -------------


/** # addCheckbox #
 * @abbrev ckb
 * @brief addCheckbox
 * Adds a checkbox control to the given layout.
 * $$ ckb = ui.addCheckbox(parent, text, options?, width?, height?) $$
 * @param {obj} parent The layout where to add the checkbox
 * @param {str} text The label for the checkbox
 * @param {str_com} [options] Colors: `Primary` `Secondary` `Medium` `Small` \n `Position`: `Left` `Top` `Right` `Bottom` \n `Variant`: `Indeterminate` `Determinate`
 * @param {num} [width] Fraction of the parent width. [0-1]
 * @param {num} [height] Fraction of the parent height. [0-1]
 * @returns uio-Checkbox
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

/** ### checkIcon
 * @prop
 * Sets or returns the material icon font for check stated.
 * @returns str
 */


/** ### color
 * @prop
 * Sets or returns the theme color of the checkbox when checked. Values can be <col nobox #fb8c00>Default</col> <col nobox #fb8c00>Primary</col> or <col nobox #fb8c00>Secondary</col>
 * @returns str
 */


/** @extern cornerRadius */

/** ### disable
 * @prop
 * Enabled or disable the checkbox component.
 * @returns bin
 */


/** @extern disabled */

/** ### enabled
 * @prop
 * Returns whether the Checkbox is enabled or disabled.
 * @returns bin
 */


/** @extern fontFile */

/** @extern height */

/** ### iconColor
 * @prop
 * Sets or returns the color of the checkbox icon.
 * @returns str
 */


/** ### iconSize
 * @prop
 * Sets or returns the size of the icon.
 * @returns num
 */


/** @extern isVisible */

/** @extern left */

/** @extern margins */

/** @extern opacity */

/** @extern options */

/** @extern padding */

/** @extern parent */

/** @extern position */

/** @extern rotation */

/** ### spaceBetween
 * @prop
 * Sets or returns the space between the checkbox icon and the label text.
 * @returns num
 */


/** ### text
 * @prop
 * Sets or returns the checkbox text.
 * @returns str
 */


/** @extern textColor */

/** ### textPosition
 * @prop
 * Sets or returns the text position. Values can be <col nobox #fb8c00>left</col> <col nobox #fb8c00>top</col> <col nobox #fb8c00>right</col> <col nobox #fb8c00>bottom</col>
 * @returns str
 */


/** @extern textSize */

/** @extern top */

/** @extern type */

/** ### uncheckIcon
 * @prop
 * Sets or returns the material icon font for uncheck state.
 * @returns str
 */


/** ### value
 * @prop
 * Sets or returns the checked state of the checkbox.
 * @returns bin
 */


/** @extern visibility */

/** @extern width */

/** ### setOnTouch ###
 * @brief setOnTouch
 * Adds an event handler when the checkbox is touch
 * $$ ckb.setOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["check"],"pTypes":["bin-The checked state of the checkbox."]}
 */


/** ### setIcon ###
 * @brief setIcon
 * Sets a custom icon for the checkbox
 * $$ ckb.setIcon(checked, unchecked) $$
 * @param {str} checked Material icon for checked state
 * @param {str} unchecked Material icon for unchecked state
 */


/** ### getIcon ###
 * @brief getIcon
 * Returns the icons of the form { checkIcon, uncheckedIcon
 * $$ ckb.getIcon() $$
 * @returns obj
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
