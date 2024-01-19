// ------------- HEADER SECTION -------------


/** # addSwitchGroup #
 * @abbrev swg
 * @brief addSwitchGroup
 * Adds a SwitchGroup Component into your layout. A switchgroup is a list whose items can be toggled between `on` and `off`.
 * $$ swg = ui.addSwitchGroup(parent, list?, options?, width?, height?) $$
 * @param {obj} parent The parent layout where to add the SwitchGroup Component.
 * @param {obj} [list] The list items array whose elements can be `String` if items is text only, or `Array` of the form `[ "icon", "label" ]` if items is icon and text.
 * @param {str_com} [options] Icon: `Icon` \n `Color`: `Primary` or `Secondary` \n `Container`: `Elevated` or `Outlined` \n `Corner`: `Square` \n`Divider`
 * @param {num} [width] Fraction of the screen width. [0-1]
 * @param {num} [height] Fraction of the screen height. [0-1]
 * @returns uio-SwitchGroup
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

/** ### edge
 * @prop
 * Sets or returns the edge position of the toggle. Values can be <col nobox #fb8c00>Start</col> <col nobox #fb8c00>End</col> or <col nobox #fb8c00>False</col>
 * @returns str
 */


/** ### elevation
 * @prop
 * Sets or returns the depth of the control container. Value ranges from 0 to 24.
 * @returns num
 */


/** @extern fontFile */

/** @extern height */

/** ### iconColor
 * @prop
 * Sets or returns the theme color <col nobox #fb8c00>Primary</col> <col nobox #fb8c00>Secondary</col> or <col nobox #fb8c00>Default</col>. You can also pass a hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col>
 * @returns str
 */


/** ### iconSize
 * @prop
 * Sets or returns the size of the icon.
 * @returns num
 */


/** @extern isVisible */

/** ### itemPadding
 * @prop
 * Sets or returns the padding of each switch item. See also <col nobox #fb8c00>setItemPadding</col> method.
 * @returns lst
 */


/** @extern label */

/** ### labelColor
 * @prop
 * Sets or returns the color of the label text in hexadecimal format.
 * @returns str
 */


/** ### labelSize
 * @prop
 * Sets or returns the size of the label text.
 * @returns num
 */


/** @extern left */

/** ### list
 * @prop
 * Sets or returns the list items. You can also pass a comma separated string of items.
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

/** ### textColor
 * @prop
 * Sets or returns the theme color <col nobox #fb8c00>primary</col> or <col nobox #fb8c00>secondary</col>. You can also pass a hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col>
 * @returns str
 */


/** @extern textSize */

/** @extern top */

/** @extern type */

/** @extern visibility */

/** @extern width */

/** ### setOnTouch ###
 * @brief setOnTouch
 * Sets a callback function when the switch item is touch
 * $$ swg.setOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["value","text","index","event"],"pTypes":["bin-The checked state of the switch item.","str-The switch item label text.","num-The index of the corresponding switch item.","obj-The click event."]}
 */


/** ### setOnChange ###
 * @brief setOnChange
 * Adds a callback function to be called whent there is a change of value
 * $$ swg.setOnChange(callback) $$
 * @param {fnc_json} callback {"pNames":["values"],"pTypes":["lst-An array of indexes corresponding to the checked switch items."]}
 */


/** ### setValueByIndex ###
 * @brief setValueByIndex
 * Sets the value of the corresponding item in the list
 * $$ swg.setValueByIndex(index, val) $$
 * @param {num} index The index of the corresponding item.
 * @param {bin} val A Values can be `true` or `false`
 */


/** ### getValueByIndex ###
 * @brief getValueByIndex
 * Returns whether an item is check or unchecked
 * $$ swg.getValueByIndex(index) $$
 * @param {num} index The index of the corresponding item.
 * @returns bin
 */


/** ### setList ###
 * @brief setList
 * Updates the list on the switchgroup component
 * $$ swg.setList(lst) $$
 * @param {obj} lst The list array or a comma separated list.
 */


/** ### addItem ###
 * @brief addItem
 * Adds or insert an item in the SwitchGroup list
 * $$ swg.addItem(title, icon, value, index) $$
 * @param {str} title The title text.
 * @param {str} icon Material icon font.
 * @param {bin} value The value of the item.
 * @param {num} index The index in which to insert the item. Default is at the bottom of the list.
 */


/** ### removeItemByIndex ###
 * @brief removeItemByIndex
 * Removes an item in the SwitchGroup by its index
 * $$ swg.removeItemByIndex(index) $$
 * @param {num} index The index of the corresponding item to remove.
 */


/** ### removeItemByName ###
 * @brief removeItemByName
 * Removes an item in the SwitchGroup component by its title name
 * $$ swg.removeItemByName(title) $$
 * @param {str} title The title text of the SwitchGroup item.
 */


/** ### popItem ###
 * @brief popItem
 * Removes the last item in the SwitchGroup list
 * $$ swg.popItem() $$
 */


/** ### shiftItem ###
 * @brief shiftItem
 * Removes the first item in SwitchGroup list
 * $$ swg.shiftItem() $$
 */


/** ### setEnabled ###
 * @brief setEnabled
 * Enable or disable an item in the switchgroup component
 * $$ swg.setEnabled(index, value) $$
 * @param {num} index The index of the corresponding item in the list. You can also pass `Boolean` to enable or disable the switchgroup component.
 * @param {bin} value Values can be `true` or `false`.
 */


/** ### getEnabled ###
 * @brief getEnabled
 * Get the enabled state of an item in the switch group
 * $$ swg.getEnabled(index) $$
 * @param {num} index The index of the corresponding item in the switch group.
 * @returns bin
 */


/** ### setOnContextMenu ###
 * @brief setOnContextMenu
 * Adds a callback function on right click
 * $$ swg.setOnContextMenu(callback) $$
 * @param {fnc_json} callback {"pNames":["text","index","event"],"pTypes":["str-The label text of the switchgroup item.","num-The index of the corresponding switchgroup item.","obj-The pointer event object."]}
 */


/** ### setCornerRadius ###
 * @brief setCornerRadius
 * Sets the corner radius of the switchgroup container
 * $$ swg.setCornerRadius(tl?, tr?, bl?, br?, mode='px') $$
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
        // Creates a layout with objects verticaly centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        var items = ["This is item 1", "This is item 2", "This is item 3"]

        // Add a switchgroup control to the main layout.
        this.swg = ui.addSwitchGroup(this.main, items, "Secondary", 0.9)

        // Add a callback handler when the switchgroup item is touch
        this.swg.setOnTouch( this.onTouch )
    }

    onTouch(item, value)
    {
        ui.showPopup(item + " : "  + value)
    }
}
 */



/**
@sample SwitchGroup with leading icons
class Main extends App
{
    onStart()
    {
        // Creates a layout with objects verticaly centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize switchgroup items with leading icon
        var items = [
            ["music_note", "Enable Sound"],
            ["bluetooth", "Enable Bluetooth"],
            ["wifi", "Enable Wifi"]
        ]

        // Add a switchgroup control to the main layout.
        this.swg = ui.addSwitchGroup(this.main, items, "Secondary,Icon", 0.9)

        // Set the label text of the switchgroup control
        this.swg.label = "Settings"

        // Add a callback handler when the switchgroup item is touch
        this.swg.setOnTouch( this.onTouch )
    }

    onTouch(item, value)
    {
        ui.showPopup(item + " : "  + value)
    }
}
 */



/**
@sample With custom styles
class Main extends App
{
    onStart()
    {
        // Creates a layout with objects verticaly centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize switchgroup items with leading icon
        var items = [
            ["music_note", "Enable Sound"],
            ["bluetooth", "Enable Bluetooth"],
            ["wifi", "Enable Wifi"]
        ]

        // Adds a switchgroup control to the main layout
        this.swg = ui.addSwitchGroup(this.main, items, "Secondary,Icon", 0.9)
        this.swg.setOnTouch( this.onTouch )

        // Set the text color to deep-purple
        this.swg.textColor = "#673ab7"

        // Set the icon color to teal
        this.swg.iconColor = "#009688"

        // Set the corner radius
        this.swg.cornerRadius = 4

        // Set the background color using rgba
        this.swg.backColor = "rgba(255, 255, 100, 255)"
    }

    onTouch( item, value )
    {
        ui.showPopup( item + " : "  + value )
    }
}
 */



/**
@sample Elevated switchgroup with onChange callback
class Main extends App
{
    onStart()
    {
        // Creates a layout with objects verticaly centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize switchgroup items to be displayed
        var items = ["This is item 1", "This is item 2", "This is item 3"]

        // Adds a switchgroup control to the main layout
        this.swg = ui.addSwitchGroup( this.main, items, "Secondary,Elevated", 0.9 )
        this.swg.label = "My label"
        this.swg.elevation = 4

        // Add a callback handler when the value of switchgroup changes
        this.swg.setOnChange( this.onChange )
    }

    onChange(items, indexes)
    {
        ui.showPopup( items.join(", ") )
    }
}
 */



/**
@sample Outlined switchgroup
class Main extends App
{
    onStart()
    {
        // Creates a layout with objects verticaly centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize switchgroup items to be displayed
        var items = ["This is item 1", "This is item 2", "This is item 3"]

        // Adds a switchgroup control to the main layout
        this.swg = ui.addSwitchGroup( this.main, items, "Primary,Outlined", 0.9)
        this.swg.label = "My label"
        this.swg.cornerRadius = 8

        // Add a callback handler when the value of switchgroup changes
        this.swg.setOnChange( this.onChange )
    }

    onChange(items, indexes)
    {
        ui.showPopup( items.join(", ") )
    }
}
 */



/**
@sample Python Basic
from hybrid import ui

def OnStart():
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")

    items = ["This is item 1", "This is item 2", "This is item 3"]

    swg = ui.addSwitchGroup(main, items, "Secondary", 0.9)
    swg.setOnTouch(onTouch)

def onTouch(item, value, index, event):
    ui.showPopup(item + " : " + value)
 */



/**
@sample Python SwitchGroup with leading icons
from hybrid import ui

def OnStart():
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")

    items = [
        ["music_note", "Enable Sound"],
        ["bluetooth", "Enable Bluetooth"],
        ["wifi", "Enable Wifi"]
    ]

    swg = ui.addSwitchGroup(main, items, "Secondary,Icon", 0.9)
    swg.label = "Settings"
    swg.setOnTouch(onTouch)

def onTouch(item, value, index, event):
    ui.showPopup(item + " : " + value)
 */



/**
@sample Python With custom styles
from hybrid import ui

def OnStart():
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")

    items = [
        ["music_note", "Enable Sound"],
        ["bluetooth", "Enable Bluetooth"],
        ["wifi", "Enable Wifi"]
    ]

    swg = ui.addSwitchGroup(main, items, "Secondary,Icon", 0.9)
    swg.setOnTouch(onTouch)

    swg.textColor = "#673ab7"
    swg.iconColor = "#009688"
    swg.cornerRadius = 4
    swg.backColor = "rgba(255, 255, 100, 255)"

def onTouch(item, value, index, event):
    ui.showPopup(item + " : " + value)
 */



/**
@sample Python Elevated switchgroup with onChange callback
from hybrid import ui

def OnStart():
    global items
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")

    items = ["This is item 1", "This is item 2", "This is item 3"]

    swg = ui.addSwitchGroup(main, items, "Secondary,Elevated", 0.9)
    swg.label = "My label"
    swg.elevation = 4

    swg.setOnChange(onChange)

def onChange(items):
    ui.showPopup(", ".join(items))
 */



/**
@sample Python Outlined switchgroup
from hybrid import ui

def OnStart():
    global items
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")

    items = ["This is item 1", "This is item 2", "This is item 3"]

    swg = ui.addSwitchGroup(main, items, "Primary,Outlined", 0.9)
    swg.label = "My label"
    swg.cornerRadius = 8

    swg.setOnChange(onChange)

def onChange(items):
    ui.showPopup(", ".join(items))
 */
