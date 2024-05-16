/** # RadioGroup
 * @abbrev rdg
 * Adds a radiogroup component into your app.
 * @img(img1.png)
 * @img(img2.png)
 * @jdocs A RadioGroup in mobile UI design is a grouping of radio buttons that allows users to select a single option from a set. In Material Design, RadioGroups help organize and present related choices with a consistent appearance, providing an intuitive and visually cohesive way for users to make selections within a mobile application. Add a radigroup into your app using the `addRadioGroup` method like this:
 * $$ rdg = ui.addRadioGroup(parent, list, options, width, height) $$
 * @param {uio-Layout} parent The parent where to add the RadioGroup component.
 * @param {Array} [list] The list items array.
 * @param {String} [options] A comma separated options.\nRadio Sizes: `Small`, `Medium`\nTheme Colors: `Primary`, `Secondary`, Default\nOrientation: `Horizontal`, `Vertical`\nIcon Position: `Left`, `Right`\nContainer: `Elevated`, `Outlined`\nCorner: `Square`\nUtils: `Required`
 * @param {Number} [width] Fraction of the parent width `[0-1]`.
 * @param {Number} [height] Fraction of the parent height `[0-1]`.
 * @returns uio-RadioGroup
 */


/**
 * Pass `required` as option to have atleast one value selected.
 */


    /** ## Properties ##
     * Here are the available setters and getter of the RadioGroup Component.
     * @prop {Number} value Sets or returns the value of the RadioGroup Component as an index of the selected item.
     * @prop {String} label Sets or returns the label text of the RadioGroup Component.
     * @prop {Array} list Sets or returns the list array. You can also pass a comma separated string of items.
     * @prop {String} radioSize Sets or returns the size of the radio button. Values can be `Small` or `Medium`
     * @prop {String} color Sets or returns the theme color of the Radio Component. Values can be `Default` `Primary` or `Secondary`
     * @prop {Number} elevation Sets or returns the depth of the RadioGroup container. Value ranges from 0 to 24.
     * @prop {String} iconColor Sets or returns the icon color in hexadecimal format.
     * @prop {Number} spaceBetween Sets or returns the space between the radio button and the text.
     * @prop {Boolean} disabled Sets or returns the disabled state of the radio button group.
     * @prop {String} iconPosition Sets or returns the position of the icon. Values can be `left` or `right`
     * @prop {String} textPosition Sets or returns the position of the label text. Values can be `left` or `right`. 
     * @prop {Boolean} outlined Sets or returns whether the container is outlined or elevated.
     * @prop {String} textColor Stest or returns the color of the text in hexadecimal format. You can also pass color names e.g. `red`, `green` or `blue`. 
     * @prop {Array} itemPadding Sets or returns the padding of each radio item. See also `setItemPadding` method.
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
     * Here are the available methods available to RadioGroup Component.
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


    /** ### setOnChange
     * Call a function when the value of the radio group has changed.
     * $$ rdg.setOnChange( callback ) $$
     * @param {Function} callback The callback function. ---> @arg {String} text The radio item label text. @arg {Number} index The index of the selected item.
     */


    /** ### setOnTouch
     * Adds a callback function when an item is click.
     * $$ rdg.setOnTouch( callback ) $$
     * @param {Function} callback The callback function to be called. ---> @arg {Boolean} checked The checked state of the radio item. @arg {String} label The radio item label text. @arg {Number} index  The index of the radio item. @arg {Object} pos The position of the touch event.
     */


    /** ### setList
     * Sets the the radiogroup list items.
     * $$ rdg.setList( val ) $$
     * @param {String} val A comma separated items
     */


    /** ### setItemByIndex
     * Sets an item in the radiogroup component.
     * $$ rdg.setItemByIndex( index, text ) $$
     * @param {String} item The new item name to be displayed
     * @param {Number} index The index to of the item to be updated
     */


    /** ### setItemByName
     * Updates an item in the list by its corresponding name.
     * $$ rdg.setItemByName( name, text ) $$
     * @param {String} name The name of the item.
     * @param {String} text The new text to replaced the name of the item.
     */


    /** ### addItem
	 * Adds an item in the radio group list.
	 * $$ rdg.addItem( name, index ) $$
	 * @param {String} name The new item to be added.
	 * @param {Number} index The index in which to add the item.
	 */


    /** ### removeItemByIndex
	 * Removes an item in the radiogroup items list by its index.
	 * $$ rdg.removeItemByIndex( index ) $$
	 * @param {Number} index The index of the item to remove.
	 */


	/** ### removeItemByName
	 * Removes an item in the radiogroup items list by its name.
	 * $$ rdg.removeItemByName( name ) $$
	 * @param {String} name The name of the item to remove.
	 */


	/** ### popItem
	 * Removes the last item in the radiogroup. This will return the item being removed.
	 * $$ rdg.popItem() $$
	 */


	 /** ### shiftItem
	  * Removes the first item in the radiogroup. This will return the item being removed.
	  * $$ rdg.shiftItem() $$
	  */


    /** ### setEnabled
	 * Enable or disable the radiogroup or an item in the radiogroup.
	 * $$ rdg.setEnabled( index, value ) $$
	 * @param {Number} index The index of the item.
	 * @param {Boolean} value Values can be `true` or `false`. If `false`, the item will be disabled.
	 */


    /** ### getEnabled
     * Get the enabled state of an item in the radio group.
     * $$ rdg.getEnabled( index ) $$
     * @param {Number} index The index of the corresponding item.
     * @returns Boolean
     */


    /** ### setEnabledByName
     * Enable or disable a radiogroup item by its name.
     * $$ rdg.setEnabledByName( name, value ) $$
     * @param {String} name The radiogroup text.
     * @param {Boolean} value Values can be `true` or `false`.
     */


    /** ### getEnabledByName
     * Get the enabled state of a radiogroup item by its name.
     * $$ rdg.getEnabledByName( name ) $$
     * @param {String} name The radiogroup text.
     * @returns Boolean
     */


    /** ### setOnContextMenu
     * Adds a callback function on right click.
     * $$ rdg.setOnContextMenu( callback ) $$
     * @param {Function} callback The callback function to be called on context menu event or right click event. ---> @arg {String} label The list item label text. @arg {Number} index The index of the corresponding radio item. @arg {Object} pos The position of the touch event.
     */


    /** ### setCornerRadius
     * Sets the corner radius of the radiogroup container.
     * $$ acc.setCornerRadius(tl, tr, bl, br, mode) $$
     * @param {Number} [tl] Top-left corner radius.
     * @param {Number} [tr] Top-right corner radius.
     * @param {Number} [bl] Bottom-left corner radius.
     * @param {Number} [br] Bottom-right corner radius.
     * @param {String} [mode='px'] Unit. Values are `px` `rem` or `%`.
     */


    /** ### setItemPadding
     * Sets the padding of the radio item. See `itemPadding` property for equivalent setter/getter property.
     * $$ rdg.setItemPadding(left, top, right, bottom, mode) $$
     * @param {Number} left Left padding of the radio item.
     * @param {Number} top Top padding of the radio item.
     * @param {Number} right Right padding of the radio item.
     * @param {Number} bottom Bottom padding of the radio item.
     * @param {String} mode Unit of measurement. Can be `rem`, `px`, `%`, or `v` for viewport.
     */


/* --- parent_methods here ----- */


/* ## Examples */


/**
@sample Basic radiogroup
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize list items to show
        var items = ["Item 1", "Item 2", "Item 3"]

        // Add a radiogroup control to the main layout
        this.rdg = ui.addRadioGroup(this.main, items)

        // Add a callback handler when the value changes
        this.rdg.setOnChange( this.onChange )
    }

    onChange(text, index)
    {
        ui.showPopup("You choose " + text)
    }
}
 */


/**
@sample Elevated secondary radiogroup
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize list items to show
        var items = ["Item 1", "Item 2", "Item 3"]

        // Add an elevated radiogroup control to the main layout
        this.rdg = ui.addRadioGroup(this.main, items, "Elevated,Secondary", 0.6)

        // Set the label text of the radiogroup
        this.rdg.label = "Select one"

        // Set the elevation depth
        this.rdg.elevation = 4

        // Add a callback handler when the value changes
        this.rdg.setOnChange( this.onChange )
    }

    onChange(text, index)
    {
        ui.showPopup("You choose " + text)
    }
}
 */


/**
@sample Outlined and radios to the right
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize list items to show
        var items = ["Item 1", "Item 2", "Item 3"]

        // Add an outlined radiogroup control to the main layout
        // Passing `Right` will display the radios to the right
        this.rdg = ui.addRadioGroup( this.main, items, "Outlined,Primary,Right", 0.6)

        // Set the label text of the radiogroup
        this.rdg.label = "Select one"

        // Set the corner radius to 12
        this.rdg.cornerRadius = 12

        // Add a callback handler when the value changes
        this.rdg.setOnChange( this.onChange )
    }

    onChange(text, index)
    {
        ui.showPopup("You choose " + text)
    }
}
 */


/**
@sample Python Basic radiogroup
from hybrid import ui

def OnStart():
    # Creates a fullscreen layout with objects vertically centered
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")

    # Initialize list items to show
    items = ["Item 1", "Item 2", "Item 3"]

    # Add a radiogroup control to the main layout
    rdg = ui.addRadioGroup(main, items)

    # Add a callback handler when the value changes
    rdg.setOnChange( onChange )

def onChange(text):
    ui.showPopup("You choose " + text)
 */


/**
@sample Python Elevated secondary radiogroup
from hybrid import ui

def OnStart():
    # Creates a fullscreen layout with objects vertically centered
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")

    # Initialize list items to show
    items = ["Item 1", "Item 2", "Item 3"]

    # Add an elevated radiogroup control to the main layout
    rdg = ui.addRadioGroup(main, items, "Elevated,Secondary", 0.6)

    # Set the label text of the radiogroup
    rdg.label = "Select one"

    # Set the elevation depth
    rdg.elevation = 4

    # Add a callback handler when the value changes
    rdg.setOnChange( onChange )

def onChange(text):
    ui.showPopup("You choose " + text)
 */


/**
@sample Python Outlined and radios to the right
from hybrid import ui

def OnStart():
    # Creates a fullscreen layout with objects vertically centered
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")

    # Initialize list items to show
    items = ["Item 1", "Item 2", "Item 3"]

    # Add an outlined radiogroup control to the main layout
    # Passing `Right` will display the radios to the right
    rdg = ui.addRadioGroup( main, items, "Outlined,Primary,Right", 0.6)

    # Set the label text of the radiogroup
    rdg.label = "Select one"

    # Set the corner radius to 12
    rdg.cornerRadius = 12

    # Add a callback handler when the value changes
    rdg.setOnChange( onChange )

def onChange(text):
    ui.showPopup("You choose " + text)
 */


