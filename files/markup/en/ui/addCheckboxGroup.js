// ------------- HEADER SECTION -------------


/** # addCheckboxGroup #
 * @abbrev ckb
 * @brief addCheckboxGroup
 * Adds a CheckboxGroup to a given layout.
 * $$ ckb = ui.addCheckboxGroup(parent, list?, options?, width?, height?) $$
 * @param {obj} parent The parent layout where to add the CheckboxGroup.
 * @param {lst} [list] The items to be displayed.
 * @param {str_com} [options] Colors: `Default` `Primary` `Secondary` \n `Sizes`: `Small` `Medium` \n `Icon Position: `Left` or `Right` \n `Container`: `Elevated` or `Outlined` \n `Corners : `Square`
 * @param {num} [width] Fraction of the screen width.
 * @param {num} [height] Fraction of the screen height.
 * @returns uio-CheckboxGroup
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
 * Sets or returns the theme color use for the checkbox. Values can be <col nobox #fb8c00>Default</col> <col nobox #fb8c00>Primary</col> or <col nobox #fb8c00>Secondary</col>.
 * @returns str
 */


/** @extern cornerRadius */

/** @extern disabled */

/** ### elevation
 * @prop
 * Sets or returns the depth of the container.
 * @returns str
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
 * Sets or returns the size of the checkbox icon.
 * @returns num
 */


/** @extern isVisible */

/** ### itemPadding
 * @prop
 * Sets or returns the padding of each list item. See also <col nobox #fb8c00>setItemPadding</col> method.
 * @returns lst
 */


/** @extern label */

/** @extern left */

/** ### list
 * @prop
 * Sets or returns the list items.
 * @returns lst
 */


/** @extern margins */

/** @extern opacity */

/** @extern options */

/** @extern outlined */

/** @extern padding */

/** @extern parent */

/** @extern position */

/** @extern rotation */

/** ### sizeVariant
 * @prop
 * Sets or returns the size variant of the Checkbox. Values can be <col nobox #fb8c00>small</col> or <col nobox #fb8c00>medium</col>.
 * @returns str
 */


/** ### spaceBetween
 * @prop
 * Sets or returns the space between the checkbox icon and the text.
 * @returns num
 */


/** ### textColor
 * @prop
 * Sets or returns the text color in hexadecimal format.
 * @returns str_col
 */


/** ### textSize
 * @prop
 * Sets or returns the size of the checkbox icon. This will also affect the checkbox icon.
 * @returns num
 */


/** @extern top */

/** @extern type */

/** ### uncheckIcon
 * @prop
 * Sets or returns the material icon font for uncheck state.
 * @returns str
 */


/** @extern visibility */

/** @extern width */

/** ### setOnTouch ###
 * @brief setOnTouch
 * Sets a callback function when the checkbox item is touch
 * $$ ckb.setOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["value","text","index","event"],"pTypes":["bin-The checked state of the checkbox item.","str-The checkbox label text.","num-The index of the corresponding checkbox.","obj-The click event."]}
 */


/** ### setOnChange ###
 * @brief setOnChange
 * Adds a callback function to be called whent there is a change of value
 * $$ ckb.setOnChange(callback) $$
 * @param {fnc_json} callback {"pNames":["values"],"pTypes":["lst-An array of indexes corresponding to the checked checkbox items."]}
 */


/** ### setIcon ###
 * @brief setIcon
 * Sets the checked icon and unchecked icon
 * $$ ckb.setIcon(checked, unchecked) $$
 * @param {str} checked Material icon font
 * @param {str} unchecked Material icon font
 */


/** ### getIcon ###
 * @brief getIcon
 * Get the checked and unchecked icon of the checkbox group
 * $$ ckb.getIcon() $$
 * @returns obj
 */


/** ### setCheckedByIndex ###
 * @brief setCheckedByIndex
 * Checked or unchecked a given item by its index
 * $$ ckb.setCheckedByIndex(item, bool) $$
 * @param {num} item The item or index of the item.
 * @param {bin} bool The item value. Can be `true` or `false`.
 */


/** ### setCheckedByName ###
 * @brief setCheckedByName
 * Checked or unchecked a given item by its name
 * $$ ckb.setCheckedByName(name, bool) $$
 * @param {str} name The item or index of the item.
 * @param {bin} bool The item value. Can be `true` or `false`.
 */


/** ### getCheckedItems ###
 * @brief getCheckedItems
 * Get the list of all checked items
 * $$ ckb.getCheckedItems() $$
 * @returns str
 */


/** ### getCheckedByIndex ###
 * @brief getCheckedByIndex
 * Get the current value of the item in the list
 * $$ ckb.getCheckedByIndex(index) $$
 * @param {num} index The index of the corresponding item.
 * @returns bin
 */


/** ### getCheckedByName ###
 * @brief getCheckedByName
 * Get the current value of the item in the list
 * $$ ckb.getCheckedByName(name) $$
 * @param {str} name The index of the corresponding item.
 * @returns bin
 */


/** ### setTextByIndex ###
 * @brief setTextByIndex
 * Sets a new text to a given item by its index
 * $$ ckb.setTextByIndex(index, val) $$
 * @param {num} index The index of the item.
 * @param {str} val The new text to replace.
 */


/** ### setTextByName ###
 * @brief setTextByName
 * Sets a new text to a given item by its name
 * $$ ckb.setTextByName(name, val) $$
 * @param {str} name The name of the item
 * @param {str} val The new text to replace
 */


/** ### getText ###
 * @brief getText
 * Get the text of the item in a given index
 * $$ ckb.getText(index) $$
 * @param {num} index The index of the list
 * @returns str
 */


/** ### setList ###
 * @brief setList
 * Sets a new list of item in the checkbox group
 * $$ ckb.setList(list) $$
 * @param {obj} list The new list items for the checkbox group.
 */


/** ### setEnabled ###
 * @brief setEnabled
 * Enable or disable an item in the checkbox group
 * $$ ckb.setEnabled(index, value) $$
 * @param {num} index The index of the checkbox item.
 * @param {bin} value Values can be `true` or `false`.
 */


/** ### getEnabled ###
 * @brief getEnabled
 * Get the enabled state of a checkbox item
 * $$ ckb.getEnabled(index) $$
 * @param {num} index The index of the checkbox item.
 * @returns bin
 */


/** ### setEnabledByName ###
 * @brief setEnabledByName
 * Enable or disable a checkbox item by its name
 * $$ ckb.setEnabledByName(name, value) $$
 * @param {str} name The name of the checkbox item.
 * @param {bin} value Values can be `true` or `false`
 */


/** ### getEnabledByName ###
 * @brief getEnabledByName
 * Get the enabled state of a checkbox item by its name
 * $$ ckb.getEnabledByName(name) $$
 * @param {str} name The checkbox item.
 * @returns bin
 */


/** ### addItem ###
 * @brief addItem
 * Add or insert an item in the checkbox group
 * $$ ckb.addItem(text, index) $$
 * @param {str} text The text label for the checkbox.
 * @param {num} index The index in which to insert the item.
 */


/** ### removeItemByIndex ###
 * @brief removeItemByIndex
 * Removes an item in the checkbox group by its corresponding index
 * $$ ckb.removeItemByIndex(index) $$
 * @param {num} index The index of the corresponding item to remove.
 */


/** ### removeItemByName ###
 * @brief removeItemByName
 * Removes an item in the checkbox group by its title name
 * $$ ckb.removeItemByName(title) $$
 * @param {str} title The title text of the corresponding checkbox item.
 */


/** ### popItem ###
 * @brief popItem
 * Removes the last item in the checkbox group
 * $$ ckb.popItem() $$
 */


/** ### shiftItem ###
 * @brief shiftItem
 * Removes the first item in the checkbox group
 * $$ ckb.shiftItem() $$
 */


/** ### setOnContextMenu ###
 * @brief setOnContextMenu
 * Adds a callback function on right click
 * $$ ckb.setOnContextMenu(callback) $$
 * @param {fnc_json} callback {"pNames":["label","index","event"],"pTypes":["str-The checkbox item label text.","num-The index of the corresponding item.","obj-The pointer event object."]}
 */


/** ### setCornerRadius ###
 * @brief setCornerRadius
 * Sets the corner radius of the checkbox group
 * $$ ckb.setCornerRadius(tl?, tr?, bl?, br?, mode='px') $$
 * @param {num} [tl] Top-left corner radius.
 * @param {num} [tr] Top-right corner radius.
 * @param {num} [bl] Bottom-left corner radius.
 * @param {num} [br] Bottom-right corner radius.
 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
 */


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
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize checkbox items
        this.items = [
            "Checkbox item 1",
            "Checkbox item 2",
            "Checkbox item 3"
        ]

        // Add a checkbox group to the main layout.
        this.ckg = ui.addCheckboxGroup(this.main, this.items)

        // Add a callback handler for `onTouch` event
        this.ckg.setOnTouch( this.onTouch )
    }

    onTouch(value, item, index)
    {
        ui.showPopup( `Value of ${ item } is ${ value }` )
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
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")
        this.main.childSpacing = "evenly"

        // Initialize the checkbox items
        var list = [
            "Checkbox item 1",
            "Checkbox item 2",
            "Checkbox item 3"
        ]

        // Add a default CheckboxGroup to the main layout
        this.ckg1 = ui.addCheckboxGroup(this.main, list)
        this.ckg1.setOnTouch( this.onTouch )

        // Add a primary CheckboxGroup to the main layout
        this.ckg2 = ui.addCheckboxGroup(this.main, list, "Primary")
        this.ckg2.setOnTouch( this.onTouch )

        // Add a secondary CheckboxGroup to the main layout
        this.ckg3 = ui.addCheckboxGroup(this.main, list, "Secondary")
        this.ckg3.setOnTouch( this.onTouch )
    }

    onTouch(value, item, index)
    {
        ui.showPopup( `Value of ${ item } is ${ value }` )
    }
}
 */



/**
@sample Elevated
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize the checkbox list items
        var list = [
            "Checkbox item 1",
            "Checkbox item 2",
            "Checkbox item 3"
        ]

        // Add an elevated checkbox group to the main layout.
        this.ckg = ui.addCheckboxGroup( this.main, list, "Elevated,Secondary", 0.6)

        // Set the label of the CheckboxGroup
        this.ckg.label = "Select as many as you can"

        // Set the elevation of the CheckboxGroup container
        this.ckg.elevation = 4

        // Add a callback handler for `onTouch` event
        this.ckg.setOnTouch( this.onTouch )
    }

    onTouch(value, item, index)
    {
        ui.showPopup( `Value of ${ item } is ${ value }` )
    }
}
 */



/**
@sample Outlined
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize the checkbox items
        var list = [
            "Checkbox item 1",
            "Checkbox item 2",
            "Checkbox item 3"
        ]

        // Add an outlined checkbox group to the main layout.
        this.ckg = ui.addCheckboxGroup( this.main, list, "Outlined,Secondary", 0.9 )
        this.ckg.setOnTouch( this.onTouch )

        // Set the label of the CheckboxGroup items
        this.ckg.label = "Select as many as you can"

        // Set the cornerRadius to `20`
        this.ckg.cornerRadius = 20
    }

    onTouch(value, item, index)
    {
        ui.showPopup( `Value of ${ item } is ${ value }` )
    }
}
 */



/**
@sample Python Basic
from hybrid import ui

def OnStart():
    # Creates a fullscreen layout with objects vertically centered.
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")

    # Initialize checkbox items
    items = [
        "Checkbox item 1",
        "Checkbox item 2",
        "Checkbox item 3"
    ]

    # Add a checkbox group to the main layout.
    ckg = ui.addCheckboxGroup(main, items)

    # Add a callback handler for `onTouch` event
    ckg.setOnTouch(onTouch)

def onTouch(value, item, index, event):
    ui.showPopup(f"Value of {item} is {value}")
 */



/**
@sample Python Colors
from hybrid import ui

def OnStart():
    # Creates a fullscreen layout with objects vertically centered.
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")
    main.childSpacing = "evenly"

    # Initialize the checkbox items
    list = [
        "Checkbox item 1",
        "Checkbox item 2",
        "Checkbox item 3"
    ]

    # Add a default CheckboxGroup to the main layout
    ckg1 = ui.addCheckboxGroup(main, list)
    ckg1.setOnTouch(onTouch)

    # Add a primary CheckboxGroup to the main layout
    ckg2 = ui.addCheckboxGroup(main, list, "Primary")
    ckg2.setOnTouch(onTouch)

    # Add a secondary CheckboxGroup to the main layout
    ckg3 = ui.addCheckboxGroup(main, list, "Secondary")
    ckg3.setOnTouch(onTouch)

def onTouch(value, item, index, event):
    ui.showPopup(f"Value of {item} is {value}")
 */



/**
@sample Python Elevated
from hybrid import ui

def OnStart():
    # Creates a fullscreen layout with objects vertically centered.
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")

    # Initialize the checkbox list items
    list = [
        "Checkbox item 1",
        "Checkbox item 2",
        "Checkbox item 3"
    ]

    # Add an elevated checkbox group to the main layout.
    ckg = ui.addCheckboxGroup(main, list, "Elevated,Secondary", 0.6)

    # Set the label of the CheckboxGroup
    ckg.label = "Select as many as you can"

    # Set the elevation of the CheckboxGroup container
    ckg.elevation = 4

    # Add a callback handler for `onTouch` event
    ckg.setOnTouch(onTouch)

def onTouch(value, item, index, event):
    ui.showPopup(f"Value of {item} is {value}")
 */



/**
@sample Python Outlined
from hybrid import ui

def OnStart():
    # Creates a fullscreen layout with objects vertically centered.
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")

    # Initialize the checkbox items
    list = [
        "Checkbox item 1",
        "Checkbox item 2",
        "Checkbox item 3"
    ]

    # Add an outlined checkbox group to the main layout.
    ckg = ui.addCheckboxGroup(main, list, "Outlined,Secondary", 0.9)
    ckg.setOnTouch(onTouch)

    # Set the label of the CheckboxGroup items
    ckg.label = "Select as many as you can"

    # Set the cornerRadius to `20`
    ckg.cornerRadius = 20

def onTouch(value, item, index, event):
    ui.showPopup(f"Value of {item} is {value}")
 */
