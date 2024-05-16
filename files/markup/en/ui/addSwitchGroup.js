/** # SwitchGroup
 * @abbrev swg
 * In UI development, a SwitchGroup refers to a collection or grouping of individual switches.
 * @img(img1.png)
 * @img(img2.png)
 * @jdocs Such a grouping is used to represent related settings or options that can be toggle on or off. Add a switchgroup into your app using the `addSwitchGroup` method like this:
 * $$ swg = ui.addSwitchGroup(parent, list, options, width, height) $$
 * @param {uio-Layout} parent The parent layout where to add the SwitchGroup Component.
 * @param {Array} [list] The list items array whose elements can be `String` if items is text only, or `Array` of the form `[ "icon", "label" ]` if items is icon and text.
 * @param {String} [options] A comma separated options.\nIcon: `Icon`\nColor: `Primary`, `Secondary`\nContainer: `Elevated`, `Outlined`\nCorner: `Square`\nList divider: `Divider`
 * @param {Number} [width] Fraction of the parent width `[0-1]`.
 * @param {Number} [height] Fraction of the parent height `[0-1]`.
 * @returns uio-SwitchGroup
 */


    /** ## Properties
     * Here are the available setter and getter properties of the SwitchGroup Component.
     * @prop {String} label Sets or returns the label text.
     * @prop {Array} list Sets or returns the list items. You can also pass a comma separated string of items.
     * @prop {String} edge Sets or returns the edge position of the toggle. Values can be `Start` `End` or `False`
     * @prop {String} color Sets or returns the theme color. Values can be `Default` `Primary` or `Secondary`
     * @prop {String} iconColor Sets or returns the theme color `Primary` `Secondary` or `Default`. You can also pass a hexadecimal color of the form `#rrggbb`
     * @prop {String} textColor Sets or returns the theme color `primary` or `secondary`. You can also pass a hexadecimal color of the form `#rrggbb`
     * @prop {Number} elevation Sets or returns the depth of the control container. Value ranges from 0 to 24.
     * @prop {Number} iconSize Sets or returns the size of the icon.
     * @prop {String} labelColor Sets or returns the color of the label text in hexadecimal format.
     * @prop {Number} labelSize Sets or returns the size of the label text.
     * @prop {Boolean} outlined Sets or returns whether the container is outlined or elevated.
     * @prop {Array} itemPadding Sets or returns the padding of each switch item. See also `setItemPadding` method.
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
     * Here the methods available for the SwitchGroup Component.
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
	 * Sets a callback function when the switch item is touch.
	 * $$ swt.setOnTouch( callback ) $$
	 * @param {Function} callback The function to be called. ---> @arg {String} text The switch item label text. @arg {Boolean} value The checked state of the switch item. @arg {Number} index The index of the corresponding switch item. @arg {Object} pos The position of the touch event.
	 */


    /** ### setOnChange
     * Adds a callback function to be called whent there is a change of value.
     * $$ swt.setOnChange(callback) $$
     * @param {Function} callback The callback function to be called. ---> @arg {Array} indexes An array of indexes corresponding to the checked switch items. @arg {Array} items An array of switchgroup items corresponding to the checked switch items.
     */


    /** ### setValueByIndex
     * Sets the value of the corresponding item in the list.
     * $$ swg.setValueByIndex(index, val) $$
     * @param {Number} index The index of the corresponding item.
     * @param {Boolean} val A Values can be `true` or `false`
     */


    /** ### getValueByIndex
     * Returns whether an item is check or unchecked.
     * $$ swg.getValueByIndex(index) $$
     * @param {Number} index The index of the corresponding item.
     * @returns Boolean
     */


    /** ### setList
     * Updates the list on the switchgroup component.
     * $$ swg.setList( lst ) $$
     * @param {Array} lst The list array or a comma separated list.
     */


    /** ### addItem
     * Adds or insert an item in the SwitchGroup list.
     * $$ swg.addItem( title, icon, value, index ) $$
     * @param {String} title The title text.
     * @param {String} icon Material icon font.
     * @param {Boolean} value The value of the item.
     * @param {Number} index The index in which to insert the item. Default is at the bottom of the list.
     */


    /** ### removeItemByIndex
     * Removes an item in the SwitchGroup by its index.
     * $$ swg.removeItemByIndex( index ) $$
     * @param {Number} index The index of the corresponding item to remove.
     */


    /** ### removeItemByName
     * Removes an item in the SwitchGroup component by its title name.
     * $$ swg.removeItemByName( title ) $$
     * @param {String} title The title text of the SwitchGroup item.
     */


    /** ### popItem
     * Removes the last item in the SwitchGroup list. This will return the item being removed.
     * $$ swg.popItem() $$
     */


    /** ### shiftItem
     * Removes the first item in SwitchGroup list. This will return the item being removed.
     * $$ swg.shiftItem() $$
     */


    /** ### setEnabled
	 * Enable or disable an item in the switchgroup component.
	 * $$ swt.setEnabled( index, value ) $$
	 * @param {Number} index The index of the corresponding item in the list. You can also pass `Boolean` to enable or disable the switchgroup component.
	 * @param {Boolean} value Values can be `true` or `false`.
	 */


    /** ### getEnabled
     * Get the enabled state of an item in the switch group.
     * $$ swt.getEnabled( index ) $$
     * @param {Number} index The index of the corresponding item in the switch group.
     * @returns Boolean
     */


    /** ### setOnContextMenu
     * Adds a callback function on right click.
     * $$ swt.setOnContextMenu( callback ) $$
     * @param {Function} callback The callback function to be called on context menu event or right click event. ---> @arg {String} text The label text of the switchgroup item. @arg {Number} index The index of the corresponding switchgroup item. @arg {Object} pos The position of the touch event.
     */


    /** ### setCornerRadius
     * Sets the corner radius of the switchgroup container.
     * $$ swt.setCornerRadius(tl, tr, bl, br, mode) $$
     * @param {Number} [tl] Top-left corner radius.
     * @param {Number} [tr] Top-right corner radius.
     * @param {Number} [bl] Bottom-left corner radius.
     * @param {Number} [br] Bottom-right corner radius.
     * @param {String} [mode='px'] Unit. Values are `px` `rem` or `%`.
     */


    /** ### setItemPadding
     * Sets the padding of the switch item. See `itemPadding` property for equivalent setter/getter property.
     * $$ swt.setItemPadding(left, top, right, bottom, mode) $$
     * @param {Number} left Left padding of the radio item.
     * @param {Number} top Top padding of the radio item.
     * @param {Number} right Right padding of the radio item.
     * @param {Number} bottom Bottom padding of the radio item.
     * @param {String} mode Unit of measurement. Can be `rem`, `px`, `%`, or `v` for viewport.
     */


/* --- parent_methods here ----- */


/* ## Examples */


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
@sample  With custom styles
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


