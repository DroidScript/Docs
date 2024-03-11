/** # CheckboxGroup
 * @abbrev ckb
 * A checkbox group in UI development is a collection of checkboxes grouped together for related selections or options.
 * @img(img1.png)
 * @img(img2.png)
 * @jdocs It allows users to make multiple choices from a set of related options. In Material Design, a checkbox group is often organized with clear spacing and alignment, providing a cohesive and visually coherent representation. This grouping enhances the user's ability to manage and understand multiple selections within the context of the application's design guidelines.
 * $$ ckb = ui.addCheckboxGroup(parent, list, options, width, height) $$
 * @jdocs Add a checkbox group using the `addCheckboxGroup` method like this:
 * @param {uio-Layout} parent The parent layout where to add the CheckboxGroup.
 * @param {Array} [list] The items to be displayed.
 * @param {String} [options] A comma separated options.\nTheme Color: `Default`, `Primary`, `Secondary`\nSizes: `Small`, `Medium`\nIcon Position: `Left`, `Right`\nContainer: `Elevated`, `Outlined`\nCorners : `Square`
 * @param {Number} [width] Fraction of the parent width `[0-1]`.
 * @param {Number} [height] Fraction of the parent height `[0-1]`.
 * @returns uio-CheckboxGroup
 */


	/** ## Properties ##
	 * Here are the available setters and/or getters of the CheckboxGroup Component.
	 * @prop {Array} list Sets or returns the list items.
	 * @prop {String} label Sets or returns the label text.
	 * @prop {String} checkIcon Sets or returns the material icon font for check stated.
     * @prop {String} uncheckIcon Sets or returns the material icon font for uncheck state.
	 * @prop {String} sizeVariant Sets or returns the size variant of the Checkbox. Values can be `small` or `medium`.
	 * @prop {String} textColor Sets or returns the text color in hexadecimal format.
	 * @prop {String} elevation Sets or returns the depth of the container.
     * @prop {String} iconColor Sets or returns the color of the checkbox icon.
     * @prop {Number} textSize Sets or returns the size of the checkbox icon. This will also affect the checkbox icon.
     * @prop {Number} iconSize Sets or returns the size of the checkbox icon.
     * @prop {Number} spaceBetween Sets or returns the space between the checkbox icon and the text.
     * @prop {String} color Sets or returns the theme color use for the checkbox. Values can be `Default` `Primary` or `Secondary`.
     * @prop {Boolean} outlined Sets or returns whether the container is outlined or elevated.
     * @prop {Array} itemPadding Sets or returns the padding of each list item. See also `setItemPadding` method.
     * @prop {String} orientation Sets or returns the orientation of the list. Can be "Vertical" or "Horizontal".
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
	 * Here are the methods available for CheckboxGroup Component
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
	 * Sets a callback function when the checkbox item is touch.
	 * $$ ckb.setOnTouch( callback ) $$
	 * @param {Function} callback The function to be called. ---> @arg {Boolean} value The checked state of the checkbox item. @arg {String} text The checkbox label text. @arg {Number} index The index of the corresponding checkbox. @arg {Object} pos The position of the touch event.
	 */


    /** ### setOnChange
     * Adds a callback function to be called whent there is a change of value.
     * $$ ckb.setOnChange(callback) $$
     * @param {Function} callback The callback function to be called. ---> @arg {Array} values An array of indexes corresponding to the checked checkbox items.
     */


	/** ### setIcon
	 * Sets the checked icon and unchecked icon
	 * $$ ckb.setIcon( checked, unchecked ) $$
	 * @param {String} checked Material icon font
	 * @param {String} unchecked Material icon font
	 */


    /** ### getIcon
	 * Get the checked and unchecked icon of the checkbox group.
	 * $$ ckb.getIcon() $$
	 * @returns Object
     * @@ The returned object is of the form `{checked, unchecked}`.
	 */


	/** ### setCheckedByIndex
     * Checked or unchecked a given item by its index.
	 * $$ ckb.setCheckedByIndex( index, bool ) $$
     * @param {Number} item The item or index of the item.
     * @param {Boolean} bool The item value. Can be `true` or `false`.
     */


	/** ### setCheckedByName
     * Checked or unchecked a given item by its name.
	 * $$ ckb.setCheckedByName( name, bool ) $$
     * @param {String} name The item or index of the item.
     * @param {Boolean} bool The item value. Can be `true` or `false`.
     */


    /** ### getCheckedItems
	 * Get the list of all checked items.
	 * $$ ckb.getCheckedItems() $$
	 * @returns String
	 */


	/** ### getCheckedByIndex
	 * Get the current value of the item in the list.
	 * $$ ckb.getCheckedByIndex( index ) $$
	 * @param {Number} index The index of the corresponding item.
	 * @returns Boolean
	 */


	/** ### getCheckedByName
	 * Get the current value of the item in the list.
	 * $$ ckb.getCheckedByName( name ) $$
	 * @param {String} name The index of the corresponding item.
	 * @returns Boolean
	 */


	/** ### setTextByIndex
     * Sets a new text to a given item by its index.
	 * $$ ckb.setTextByIndex( index, val ) $$
     * @param {Number} index The index of the item.
     * @param {String} val The new text to replace.
     */


	/** ### setTextByName
     * Sets a new text to a given item by its name.
	 * $$ ckb.v( name, val ) $$
     * @param {String} name The name of the item
     * @param {String} val The new text to replace
     */


	/** ### getText
	 * Get the text of the item in a given index.
	 * $$ ckb.getText( index ) $$
	 * @param {Number} index The index of the list
	 * @returns String
	 */


	/** ### setList
	 * Sets a new list of item in the checkbox group.
	 * $$ ckb.setList( list, delim ) $$
	 * @param {Array} list The new list items for the checkbox group.
	 */


	/** ### setEnabled
	 * Enable or disable an item in the checkbox group.
	 * $$ ckb.setEnabled( index, value ) $$
	 * @param {Number} index The index of the checkbox item.
	 * @param {Boolean} value Values can be `true` or `false`.
	 */


    /** ### getEnabled
     * Get the enabled state of a checkbox item.
     * $$ ckb.getEnabled( index ) $$
     * @param {Number} index The index of the checkbox item.
     * @returns Boolean
     */


    /** ### setEnabledByName
     * Enable or disable a checkbox item by its name.
     * $$ ckb.setEnabledByName( name, value ) $$
     * @param {String} name The name of the checkbox item.
     * @param {Boolean} value Values can be `true` or `false`
     */


    /** ### getEnabledByName
     * Get the enabled state of a checkbox item by its name.
     * @param {String} name The checkbox item.
     * @returns Boolean
     */


	/** ### addItem
	 * Add or insert an item in the checkbox group.
	 * $$ ckb.addItem( text, index ) $$
	 * @param {String} text The text label for the checkbox.
	 * @param {Number} index The index in which to insert the item.
	 */


	/** ### removeItemByIndex
	 * Removes an item in the checkbox group by its corresponding index.
	 * $$ ckb.removeItemByIndex( index ) $$
	 * @param {Number} index The index of the corresponding item to remove.
	 */


	/** ### removeItemByName
	 * Removes an item in the checkbox group by its title name.
	 * $$ ckb.removeItemByName( title ) $$
	 * @param {String} title The title text of the corresponding checkbox item.
	 */


	/** ### popItem
	 * Removes the last item in the checkbox group. This will return the item being removed.
	 * $$ ckb.popItem() $$
	 */


	 /** ### shiftItem
	  * Removes the first item in the checkbox group. This will return the item being removed.
	  * $$ ckb.shiftItem() $$
	  */


	/** ### setOnContextMenu
     * Adds a callback function on right click.
     * $$ ckb.setOnContextMenu( callback ) $$
     * @param {Function} callback The callback function to be called on context menu event or right click event. ---> @arg {String} label The checkbox item label text. @arg {Number} index The index of the corresponding item. @arg {Object} pos The position of the touch event.
     */


    /** ### setCornerRadius
     * Sets the corner radius of the checkbox group.
     * $$ acc.setCornerRadius(tl, tr, bl, br, mode) $$
     * @param {Number} [tl] Top-left corner radius.
     * @param {Number} [tr] Top-right corner radius.
     * @param {Number} [bl] Bottom-left corner radius.
     * @param {Number} [br] Bottom-right corner radius.
     * @param {String} [mode='px'] Unit. Values are `px` `rem` or `%`.
     */


    /** ### setItemPadding
     * Sets the padding of the checkbox item. See `itemPadding` property for equivalent setter/getter property.
     * $$ ckg.setItemPadding(left, top, right, bottom, mode) $$
     * @param {Number} left Left padding of the checkbox item.
     * @param {Number} top Top padding of the checkbox item.
     * @param {Number} right Right padding of the checkbox item.
     * @param {Number} bottom Bottom padding of the checkbox item.
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


