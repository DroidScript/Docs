// ------------- HEADER SECTION -------------


/** # addSelect #
 * @abbrev sel
 * @brief addSelect
 *
 * $$ sel = ui.addSelect(parent, list?, options?, width?, height?) $$
 * @param {obj} parent The parent layout where to add the control
 * @param {lst} [list] The list of items for the Select options
 * @param {str_com} [options] Sizes: `Small` `Medium` \n `Variant`: `Filled` `Outlined` `Standard` \n `Margin`: `Dense` `Normal` \n `Utils`: `Required` `Multiple` `Radio` `Disabled` `AutoFocus` `FullWidth`
 * @param {num} [width] Fraction of the screen width. [0-1]
 * @param {num} [height] Fraction of the screen height. [0-1]
 * @returns uio-Select
*/


// ------------- LONG DESCRIPTION -------------

/** @Description
Adds a Select Component to a given layout.

 This component is used to create a drop-down list and is most often used in a form to collect user choices.

 A simple list
<js> [ "Option 1", "Option 2", "Option 3"] </js>


 If you want a list with groupings, you can add a colon <col nobox #4c4>:</col> before each item text to display as group name. Below is an example
<js> [" : Group 1", "Option 1", "Option 2", " : Group 2", "Item 1", "Item 2"] </js>
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

/** @extern cornerRadius */

/** @extern disabled */

/** ### enabled
 * @prop
 * Sets or returns a boolean value whether the component is enabled or disabled.
 * @returns bin
 */


/** @extern fontFile */

/** @extern height */

/** ### iconColor
 * @prop
 * Sets or returns the color of the icon in hexadecimal format <col nobox #fb8c00>#rrggbb</col>
 * @returns str
 */


/** @extern isVisible */

/** @extern label */

/** ### labelColor
 * @prop
 * Sets or returns the color of the label text in hexadecimal format <col nobox #fb8c00>#rrggbb</col>
 * @returns str
 */


/** ### labelSize
 * @prop
 * Sets or returns the size of the label.
 * @returns num
 */


/** @extern left */

/** ### list
 * @prop
 * Sets or returns the list items. You can also pass a comma separated string of items.
 * @returns lst
 */


/** @extern margins */

/** ### maxHeight
 * @prop
 * Sets or returns the maximum height of the popup container.
 * @returns num
 */


/** @extern opacity */

/** @extern options */

/** @extern padding */

/** @extern parent */

/** ### popupColor
 * @prop
 * Sets or returns the color of the popup in hexadecimal format.
 * @returns str
 */


/** @extern position */

/** @extern rotation */

/** ### sizeVariant
 * @prop
 * Sets or returns the size variant of the Select Component. Values can be <col nobox #fb8c00>Small</col> or <col nobox #fb8c00>Medium</col>
 * @returns str
 */


/** @extern textColor */

/** @extern textSize */

/** @extern top */

/** @extern type */

/** ### value
 * @prop
 * Sets or returns the value of the Select Component. For Select with <col nobox #fb8c00>Multiple</col> options, the <col nobox #fb8c00>value</col> is an array of string items. You can also pass the <col nobox #fb8c00>index</col> of the selected item. Pass an array of <col nobox #fb8c00>indexes</col> for multiple selection.
 * @returns str
 */


/** ### variant
 * @prop
 * Sets or returns the variant of the Select Component. Values can be <col nobox #fb8c00>Standard</col> <col nobox #fb8c00>Filled</col> and <col nobox #fb8c00>Outlined</col>
 * @returns str
 */


/** @extern visibility */

/** @extern width */

/** ### setOnChange ###
 * @brief setOnChange
 * Sets a callback function when the value changes
 * $$ sel.setOnChange(callback) $$
 * @param {fnc_json} callback {"pNames":["value"],"pTypes":["str-The value of the select input."]}
 */


/** ### setOnOpen ###
 * @brief setOnOpen
 * Sets a callback function when the menu is open
 * $$ sel.setOnOpen(callback) $$
 * @param {fnc_json} callback {}
 */


/** ### setOnClose ###
 * @brief setOnClose
 * Sets a callback function when the menu dialog is close
 * $$ sel.setOnClose(callback) $$
 * @param {fnc_json} callback {"pNames":["value"],"pTypes":["str-The value of the select input."]}
 */


/** ### addItem ###
 * @brief addItem
 * Adds an item on the select component options list
 * $$ sel.addItem(item, index) $$
 * @param {str} item A new item to be added.
 * @param {num} index The index in which to add the item.
 */


/** ### removeItemByIndex ###
 * @brief removeItemByIndex
 * Removes an item in the select component item list by its index
 * $$ sel.removeItemByIndex(index) $$
 * @param {num} index The index of the corresponding item to remove.
 */


/** ### removeItemByName ###
 * @brief removeItemByName
 * Removes an item in the select component item list by its name
 * $$ sel.removeItemByName(name) $$
 * @param {str} name The name of the item to remove.
 */


/** ### shifItem ###
 * @brief shifItem
 * Removes an item at the beginning of the list items
 * $$ sel.shifItem() $$
 */


/** ### popItem ###
 * @brief popItem
 * Removes an item at the end of the list items
 * $$ sel.popItem() $$
 */


/** ### getItem ###
 * @brief getItem
 * Returns the item at a given index
 * $$ sel.getItem(index) $$
 * @param {num} index The index of the item.
 * @returns num
 */


/** ### setList ###
 * @brief setList
 * Sets the list items in the menu popup
 * $$ sel.setList(items) $$
 * @param {obj} items A comma separated string or array of options
 */


/** ### setEnabled ###
 * @brief setEnabled
 * Enable or disable the select component
 * $$ sel.setEnabled(index, value) $$
 * @param {num} index `true` or `false`. You can also pass a `Boolean` to enable or disable the Select component.
 * @param {bin} value Values can be `true` or `false`.
 */


/** ### getEnabled ###
 * @brief getEnabled
 * Get the enabled state of an item in the select menu
 * $$ sel.getEnabled(index) $$
 * @param {num} index The index of the corresponding item in the select menu.
 * @returns bin
 */


/** ### setEnabledByName ###
 * @brief setEnabledByName
 * Enable or disable an item in the menu popup
 * $$ sel.setEnabledByName(name, value) $$
 * @param {str} name The name of the menu item.
 * @param {bin} value Value can be `true` or `false`
 */


/** ### getEnabledByName ###
 * @brief getEnabledByName
 * Get the enabled state of an item in the menu popup
 * $$ sel.getEnabledByName(name) $$
 * @param {str} name The name of the menu item.
 * @returns bin
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
        // Creates a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize the list items to show
        var items = ["Item 1", "Item 2", "Item 3"]

        // Adds a select control to the main layout
        this.sel = ui.addSelect(this.main, items, "", 0.6)

        // Set the label text
        this.sel.label = "Select an item"

        // Add a callback handler when an item is selected
        this.sel.setOnChange( this.onChange )
    }

    onChange(text, index)
    {
        ui.showPopup("You choose " + text)
    }
}
 */



/**
@sample Group title
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize the list items to show
        // The leading colon in each item will render it as group tile
        var items = [":Choices", "Item 1", "Item 2", "Item 3"]

        // Adds a select control to the main layout
        this.sel = ui.addSelect(this.main, items, "", 0.6)

        // Set the label text
        this.sel.label = "Select an item"

        // Add a callback handler when an item is selected
        this.sel.setOnChange( this.onChange )
    }

    onChange(text, index)
    {
        ui.showPopup("You choose " + text)
    }
}
 */



/**
@sample Multiple selection
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize list items to show
        var items = ["Item 1", "Item 2", "Item 3"]

        // Adds a select control to the main layout
        // Passing `Multiple` option will allow more than one selection
        this.sel = ui.addSelect(this.main, items, "Multiple", 0.6)
        this.sel.label = "Select an item"

        // Add a callback handler when an item is selected
        this.sel.setOnChange( this.onChange )
    }

    onChange(items, index)
    {
        ui.showPopup( "You choose " + items.join(", ") )
    }
}
 */



/**
@sample Outlined and small
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize list items to show
        var items = ["Item 1", "Item 2", "Item 3"]

        // Adds a select control to the main layout
        // Passing `Outlined` option will add a border
        // Passing `Small` option will make the control smaller
        this.sel = ui.addSelect(this.main, items, "Outlined,Small,Secondary", 0.6)
        this.sel.label = "Select an item"

        // Add a callback handler when an item is selected
        this.sel.setOnChange( this.onChange )
    }

    onChange(item, index)
    {
        ui.showPopup( "You choose " + item )
    }
}
 */



/**
@sample Radiogroup items
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize list items to show
        var items = ["Item 1", "Item 2", "Item 3"]

        // Adds a select control to the main layout
        // Passing `Radio` option will render the items as radiogroup
        this.sel = ui.addSelect(this.main, items, "Filled,Radio", 0.6)
        this.sel.label = "Select an item"

        // Add a callback handler when an item is selected
        this.sel.setOnChange( this.onChange )
    }

    onChange(item, index)
    {
        ui.showPopup( "You choose " + item )
    }
}
 */



/**
@sample Grouped list items
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize list items to show with group tiles
        var items = [":Group 1", "Item 1", "Item 2", ":Group 2", "Another item 1", "Another item 2"]

        // Adds a select control to the main layout
        this.sel = ui.addSelect(this.main, items, "Filled", 0.6)
        this.sel.label = "Select an item"

        // Add a callback handler when an item is selected
        this.sel.setOnChange( this.onChange )
    }

    onChange(item, index)
    {
        ui.showPopup( "You choose " + item )
    }
}
 */



/**
@sample Multiple radiogroup with titles
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize list items to show with group tiles
        var items = [":Group 1", "Item 1", "Item 2", ":Group 2", "Another item 1", "Another item 2"]

        // Adds a select control to the main layout
        this.sel = ui.addSelect(this.main, items, "Outlined,Radio,Multiple", 0.6)
        this.sel.label = "Select an item"

        // Add a callback handler when an item is selected
        this.sel.setOnChange( this.onChange )
    }

    onChange(items, index)
    {
        ui.showPopup( "You choose " + items.join(", ") )
    }
}
 */



/**
@sample Python Basic
from hybrid import ui
from native import app

def OnStart():
    # Creates a fullscreen layout with objects vertically centered
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")

    # Initialize the list items to show
    items = ["Item 1", "Item 2", "Item 3"]

    # Adds a select control to the main layout
    sel = ui.addSelect(main, items, "", 0.6)

    # Set the label text
    sel.label = "Select an item"

    # Add a callback handler when an item is selected
    sel.setOnChange(onChange)

def onChange(text):
    ui.showPopup("You choose " + text)

app.add(Main())
 */



/**
@sample Python Group title
from hybrid import ui
from native import app

def OnStart():
    # Creates a fullscreen layout with objects vertically centered
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")

    # Initialize the list items to show
    # The leading colon in each item will render it as group tile
    items = [":Choices", "Item 1", "Item 2", "Item 3"]

    # Adds a select control to the main layout
    sel = ui.addSelect(main, items, "", 0.6)

    # Set the label text
    sel.label = "Select an item"

    # Add a callback handler when an item is selected
    sel.setOnChange(onChange)

def onChange(text):
    ui.showPopup("You choose " + text)

app.add(Main())
 */



/**
@sample Python Multiple selection
from hybrid import ui
from native import app

def OnStart():
    global items
    # Creates a fullscreen layout with objects vertically centered
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")

    # Initialize list items to show
    items = ["Item 1", "Item 2", "Item 3"]

    # Adds a select control to the main layout
    # Passing `Multiple` option will allow more than one selection
    sel = ui.addSelect(main, items, "Multiple", 0.6)
    sel.label = "Select an item"

    # Add a callback handler when an item is selected
    sel.setOnChange(onChange)

def onChange(items):
    ui.showPopup("You choose " + ", ".join(items))

app.add(Main())
 */



/**
@sample Python Outlined and small
from hybrid import ui
from native import app

def OnStart():
    # Creates a fullscreen layout with objects vertically centered
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")

    # Initialize list items to show
    items = ["Item 1", "Item 2", "Item 3"]

    # Adds a select control to the main layout
    # Passing `Outlined` option will add a border
    # Passing `Small` option will make the control smaller
    sel = ui.addSelect(main, items, "Outlined,Small,Secondary", 0.6)
    sel.label = "Select an item"

    # Add a callback handler when an item is selected
    sel.setOnChange(onChange)

def onChange(item):
    ui.showPopup("You choose " + item)

app.add(Main())
 */



/**
@sample Python Radiogroup items
from hybrid import ui
from native import app

def OnStart():
    # Creates a fullscreen layout with objects vertically centered
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")

    # Initialize list items to show
    items = ["Item 1", "Item 2", "Item 3"]

    # Adds a select control to the main layout
    # Passing `Radio` option will render the items as radiogroup
    sel = ui.addSelect(main, items, "Filled,Radio", 0.6)
    sel.label = "Select an item"

    # Add a callback handler when an item is selected
    sel.setOnChange(onChange)

def onChange(item):
    ui.showPopup("You choose " + item)

app.add(Main())
 */



/**
@sample Python Grouped list items
from hybrid import ui
from native import app

def OnStart():
    # Creates a fullscreen layout with objects vertically centered
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")

    # Initialize list items to show with group tiles
    items = [":Group 1", "Item 1", "Item 2", ":Group 2", "Another item 1", "Another item 2"]

    # Adds a select control to the main layout
    sel = ui.addSelect(main, items, "Filled", 0.6)
    sel.label = "Select an item"

    # Add a callback handler when an item is selected
    sel.setOnChange(onChange)

def onChange(item):
    ui.showPopup("You choose " + item)

app.add(Main())
 */



/**
@sample Python Multiple radiogroup with titles
from hybrid import ui

def OnStart():
    global items
    # Creates a fullscreen layout with objects vertically centered
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")

    # Initialize list items to show with group tiles
    items = [":Group 1", "Item 1", "Item 2", ":Group 2", "Another item 1", "Another item 2"]

    # Adds a select control to the main layout
    sel = ui.addSelect(main, items, "Outlined,Radio,Multiple", 0.6)
    sel.label = "Select an item"

    # Add a callback handler when an item is selected
    sel.setOnChange(onChange)

def onChange(items):
    ui.show
 */
