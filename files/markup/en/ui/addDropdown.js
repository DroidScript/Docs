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


/** ### absHeight
 * @prop
 * Returns the absolute height of the control in pixels.
 * @returns num
 */

                    
/** ### absLeft
 * @prop
 * Returns the absolute distance of the control from the left in pixels.
 * @returns num
 */

                    
/** ### absTop
 * @prop
 * Returns the absolute distance of the control from the top in pixels.
 * @returns num
 */

                    
/** ### absWidth
 * @prop
 * Returns the absolute width of the control in pixels.
 * @returns num
 */

                    
/** ### backColor
 * @prop
 * A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col>
 * @returns str
 */

                    
/** ### backImage
 * @prop
 * The path to your image file.
 * @returns str
 */

                    
/** ### border
 * @prop
 * Sets or returns the border thickness in pixels.
 * @returns num
 */

                    
/** ### borderColor
 * @prop
 * Sets or returns the border color. Color is in hexadecimal form <col nobox #fb8c00>#rrggbb</col>
 * @returns str
 */

                    
/** ### borderStyle
 * @prop
 * Sets or returns the border style. Values can be <col nobox #fb8c00>dotted</col>, <col nobox #fb8c00>dashed</col>, <col nobox #fb8c00>solid</col>, <col nobox #fb8c00>double</col>, <col nobox #fb8c00>groove</col>, <col nobox #fb8c00>ridge</col>, <col nobox #fb8c00>inset</col> and <col nobox #fb8c00>outset</col>. Default is <col nobox #fb8c00>solid</col>.
 * @returns str
 */

                    
/** ### color
 * @prop
 * Sets or returns the theme color. Values can be <col nobox #fb8c00>Default</col> <col nobox #fb8c00>Primary</col> or <col nobox #fb8c00>Secondary</col>
 * @returns str
 */

                    
/** ### cornerRadius
 * @prop
 * Sets or returns the corner radius in pixels.
 * @returns num
 */

                    
/** ### disabled
 * @prop
 * Sets or returns the <col nobox #fb8c00>disabled</col> state of the control.
 * @returns bin
 */

                    
/** ### fontFile
 * @prop
 * Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use.
 * @returns str
 */

                    
/** ### height
 * @prop
 * Sets or returns the height of the control as a fraction of the parent control.
 * @returns num
 */

                    
/** ### icon
 * @prop
 * Sets or returns the dropdown material icon font.
 * @returns str
 */

                    
/** ### isVisible
 * @prop
 * Returns whether the control is visible or not.
 * @returns bin
 */

                    
/** ### label
 * @prop
 * Sets or returns the default label of the dropdown.
 * @returns str
 */

                    
/** ### left
 * @prop
 * Returns the distance of the control from the left.
 * @returns num
 */

                    
/** ### list
 * @prop
 * Sets or returns the dropdown list. You can also passed a comma separated string.
 * @returns lst
 */

                    
/** ### margins
 * @prop
 * Sets or returns the margin of the control. Works on controls with <col nobox #fb8c00>Linear</col> parent only. You can also pass a number to set equal margins for all sides.
 * @returns lst
 */

                    
/** ### opacity
 * @prop
 * Sets or returns the opacity of the control.
 * @returns num
 */

                    
/** ### options
 * @prop
 * Sets or returns the <col nobox #fb8c00>options</col> of the control.
 * @returns str
 */

                    
/** ### orientation
 * @prop
 * Sets or returns the orientation of the dropdown buttongroup. Values can be <col nobox #fb8c00>horizontal</col> or <col nobox #fb8c00>vertical</col>
 * @returns str
 */

                    
/** ### padding
 * @prop
 * Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.
 * @returns lst
 */

                    
/** ### parent
 * @prop
 * Returns the parent layout control.
 * @returns obj
 */

                    
/** ### position
 * @prop
 * Returns the position of the control. The returned object has <col nobox #fb8c00>left</col> <col nobox #fb8c00>top</col> <col nobox #fb8c00>right</col> and <col nobox #fb8c00>bottom</col> props.
 * @returns obj
 */

                    
/** ### rotation
 * @prop
 * Sets or returns the angle of rotation in degrees.
 * @returns num
 */

                    
/** ### sizeVariant
 * @prop
 * Sets or returns the size variant of the dropdown button. Values can be <col nobox #fb8c00>Small</col> or <col nobox #fb8c00>Medium</col> or <col nobox #fb8c00>Large</col>
 * @returns str
 */

                    
/** ### textColor
 * @prop
 * Sets or returns the color of the text.
 * @returns str
 */

                    
/** ### textSize
 * @prop
 * Sets or returns the size of the text within the control.
 * @returns num
 */

                    
/** ### top
 * @prop
 * Returns the distance of the control from the top.
 * @returns num
 */

                    
/** ### type
 * @prop
 * Returns the type of the control.
 * @returns str
 */

                    
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

                    
/** ### visibility
 * @prop
 * Sets or returns the visibility of the control.
 * @returns str
 */

                    
/** ### width
 * @prop
 * Sets or returns the width of the control as a fraction of the parent control.
 * @returns num
 */

                    
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
    
            