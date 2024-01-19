// ------------- HEADER SECTION -------------


/** # addDropdown #
 * @abbrev dpd
 * @brief addDropdown
 * Adds a dropdown component into your layout.
 * $$ dpd = ui.addDropdown(parent, list?, options?, width?, height?) $$
 * @param {obj} parent The layout where to add the dropdown.
 * @param {lst} [list] The list items to show.
 * @param {str} [options] A comma separated Dropdown options. Can be \n Colors: `Primary` `Secondary` `Default` \n `Variants`: `Contained` `Outlined` `Text` \n `Sizes`: `Small` `Medium` `Large` \n `Orientation`: `Horizontal` `Vertical` \n `Util`: `NoElevation`
 * @param {num} [width] Fraction of the screen width. [0-1]
 * @param {num} [height] Fraction of the screen height. [0-1]
 * @returns uio-Dropdown
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

/** @extern disabled */

/** @extern fontFile */

/** @extern height */

/** ### icon
 * @prop
 * Sets or returns the dropdown material icon font.
 * @returns str
 */


/** @extern isVisible */

/** ### label
 * @prop
 * Sets or returns the default label of the dropdown.
 * @returns str
 */


/** @extern left */

/** ### list
 * @prop
 * Sets or returns the dropdown list. You can also passed a comma separated string.
 * @returns lst
 */


/** @extern margins */

/** @extern opacity */

/** @extern options */

/** ### orientation
 * @prop
 * Sets or returns the orientation of the dropdown buttongroup. Values can be <col nobox #fb8c00>horizontal</col> or <col nobox #fb8c00>vertical</col>
 * @returns str
 */


/** @extern padding */

/** @extern parent */

/** @extern position */

/** @extern rotation */

/** ### sizeVariant
 * @prop
 * Sets or returns the size variant of the dropdown button. Values can be <col nobox #fb8c00>Small</col> or <col nobox #fb8c00>Medium</col> or <col nobox #fb8c00>Large</col>
 * @returns str
 */


/** @extern textColor */

/** @extern textSize */

/** @extern top */

/** @extern type */

/** ### value
 * @prop
 * Sets or returns the value of the Dropdown. If you pass a number it will be treated as the index of the corresponding item in the choices.
 * @returns str
 */


/** ### variant
 * @prop
 * Sets or returns the variant of the dropdown button. Values can be <col nobox #fb8c00>Contained</col> or <col nobox #fb8c00>Outlined</col> or <col nobox #fb8c00>Text</col>
 * @returns str
 */


/** @extern visibility */

/** @extern width */

/** ### setOnChange ###
 * @brief setOnChange
 * Adds a callback function on change event
 * $$ dpd.setOnChange(callback) $$
 * @param {fnc_json} callback {"pNames":["value","index"],"pTypes":["obj-item text.","num-The index of the corresponding item."]}
 */


/** ### setOnClose ###
 * @brief setOnClose
 * Adds a callback function on close event
 * $$ dpd.setOnClose(callback) $$
 * @param {fnc_json} callback {}
 */


/** ### setList ###
 * @brief setList
 * Sets the list items on the dropdown
 * $$ dpd.setList(val) $$
 * @param {lst} val The list of new items t display.
 */


/** ### setItemByIndex ###
 * @brief setItemByIndex
 * Updates the text of the corresponding item in the dropdown
 * $$ dpd.setItemByIndex(item, index) $$
 * @param {str} item The new item text.
 * @param {num} index The index of the item to update.
 */


/** ### getItemByIndex ###
 * @brief getItemByIndex
 * Returns a dropdown item by its corresponding index
 * $$ dpd.getItemByIndex(index) $$
 * @param {num} index The index of corresponding item.
 * @returns str
 */


/** ### setEnabled ###
 * @brief setEnabled
 * Enable or disable an item in the dropdown
 * $$ dpd.setEnabled(index, value) $$
 * @param {num} index The index of the item.
 * @param {bin} value Values can be `true` `false`.
 */


/** ### getEnabled ###
 * @brief getEnabled
 * Get the enabled state of an item in the dropdown menu
 * $$ dpd.getEnabled(index) $$
 * @param {num} index The index of the item.
 * @returns bin
 */


/** ### setEnabledByName ###
 * @brief setEnabledByName
 * Enable or disable an item in the dropdown
 * $$ dpd.setEnabledByName(name, value) $$
 * @param {str} name The name of the item.
 * @param {bin} value Values can be `true` `false`.
 */


/** ### getEnabledByName ###
 * @brief getEnabledByName
 * Get the enabled state of a menu item by its name
 * $$ dpd.getEnabledByName(name) $$
 * @param {str} name The name of the corresponding menu item.
 * @returns bin
 */


/** ### addItem ###
 * @brief addItem
 * Add or insert a menu item in the dropdown list
 * $$ dpd.addItem(name, index) $$
 * @param {str} name The name of the menu.
 * @param {num} index The index in which to insert the menu item.
 */


/** ### removeItemByIndex ###
 * @brief removeItemByIndex
 * Removes a menu item in the dropdown by its index
 * $$ dpd.removeItemByIndex(index) $$
 * @param {num} index The index of the menu item to remove.
 */


/** ### removeItemByName ###
 * @brief removeItemByName
 * Removes a menu item in the dropdown by its name
 * $$ dpd.removeItemByName(name) $$
 * @param {str} name The name of the menu item.
 */


/** ### shiftItem ###
 * @brief shiftItem
 * Removes the first item in the dropdown menu
 * $$ dpd.shiftItem() $$
 */


/** ### popItem ###
 * @brief popItem
 * Removes the last item in the dropdown menu
 * $$ dpd.popItem() $$
 */


/** ### setCornerRadius ###
 * @brief setCornerRadius
 * Sets the corner radius of the dropdown
 * $$ dpd.setCornerRadius(tl?, tr?, bl?, br?, mode='px') $$
 * @param {num} [tl] Top-left corner radius.
 * @param {num} [tr] Top-right corner radius.
 * @param {num} [bl] Bottom-left corner radius.
 * @param {num} [br] Bottom-right corner radius.
 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
 */


/** @extern setOnTouch */

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

/** @extern bringForward */

/** @extern sendBackward */


// ------------- SAMPLES -------------



/**
@sample Basic
class Main extends App
{
    onStart()
    {
        // Create a fullscreen linear layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize items to show in the dropdown
        var items = ["Item 1", "Item 2", "Item 3"]

        // Add Dropdown control to the main layout.
        this.dpd = ui.addDropdown(this.main, items)

        // Add a callback handler for `onChange` event on the Dropdown control
        this.dpd.setOnChange( this.onChange )
    }

    onChange(text, index)
    {
        ui.showPopup( "Value is " + text )
    }
}
 */



/**
@sample Custom styles
class Main extends App
{
    onStart()
    {
        // Create a fullscreen linear layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize dropdown items
        var items = ["Item 1", "Item 2", "Item 3"]

        // Add a Dropdown control to the main layout
        // and pass `Outlined` and `Primary` options for styling
        this.dpd = ui.addDropdown( this.main, items, "Outlined,Primary" )

        // Set the label property of the Dropdown
        this.dpd.label = "Choose and item"

        // Set the corner radius to 16px
        this.dpd.cornerRadius = 16

        // Set the text size to 18
        this.dpd.textSize = 18

        // Add a callback handler for `onChange` event of the Dropdown control
        this.dpd.setOnChange( this.onChange )
    }

    onChange(text, index)
    {
        ui.showPopup( "Value is " + text )
    }
}
 */



/**
@sample Python Basic
from hybrid import ui

def OnStart():
    # Create a fullscreen linear layout with objects vertically centered.
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")

    # Initialize items to show in the dropdown
    items = ["Item 1", "Item 2", "Item 3"]

    # Add Dropdown control to the main layout.
    dpd = ui.addDropdown(main, items)

    # Add a callback handler for `onChange` event on the Dropdown control
    dpd.setOnChange(onChange)

def onChange(text, index):
    ui.showPopup("Value is " + text)
 */



/**
@sample Python Custom styles
from hybrid import ui

def OnStart():
    # Create a fullscreen linear layout with objects vertically centered
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")

    # Initialize dropdown items
    items = ["Item 1", "Item 2", "Item 3"]

    # Add a Dropdown control to the main layout
    # and pass `Outlined` and `Primary` options for styling
    dpd = ui.addDropdown(main, items, "Outlined,Primary")

    # Set the label property of the Dropdown
    dpd.label = "Choose an item"

    # Set the corner radius to 16px
    dpd.cornerRadius = 16

    # Set the text size to 18
    dpd.textSize = 18

    # Add a callback handler for `onChange` event of the Dropdown control
    dpd.setOnChange(onChange)

def onChange(text, index):
    ui.showPopup("Value is " + text)
 */
