/** # Dropdown
 * @abbrev dpd
 * A dropdown, also known as a spinner or picker, is a user interface element that presents a list of options in a drop-down menu.
 * @img(img1.png)
 * @img(img2.png)
 * @jdocs Users can select one option from the list. In Material Design, Dropdowns typically provide a clear visual representation, ensuring a consistent and intuitive way for users to make selections within mobile applications. Add a dropdown into your app using the `addDropdown` method like this:
 * $$ dpd = ui.addDropdown(parent, list, options, width, height) $$
 * @param {uio-Layout} parent The layout where to add the dropdown.
 * @param {Array} [list] The list items to show.
 * @param {String} [options] A comma separated options.\nTheme Colors: `Primary`, `Secondary`, `Default`\nVariants: `Contained`, `Outlined`, `Text`\nSizes: `Small`, `Medium`, `Large`\nOrientation: `Horizontal`, `Vertical`\nUtil: `NoElevation` 
 * @param {Number} [width] Fraction of the parent width `[0-1]`.
 * @param {Number} [height] Fraction of the parent height `[0-1]`.
 * @returns uio-Dropdown
 */


	/** ## Properties
	 * Here are the available setters and/or getters of Dropdown Component.
	 * @prop {Array} list Sets or returns the dropdown list. You can also passed a comma separated string.
	 * @prop {String} value Sets or returns the value of the Dropdown. If you pass a number it will be treated as the index of the corresponding item in the choices.
	 * @prop {String} variant Sets or returns the variant of the dropdown button. Values can be `Contained` or `Outlined` or `Text`
	 * @prop {String} sizeVariant Sets or returns the size variant of the dropdown button. Values can be `Small` or `Medium` or `Large`
	 * @prop {String} color Sets or returns the theme color. Values can be `Default` `Primary` or `Secondary`
	 * @prop {String} orientation Sets or returns the orientation of the dropdown buttongroup. Values can be `horizontal` or `vertical`
	 * @prop {String} label Sets or returns the default label of the dropdown.
     * @prop {String} icon Sets or returns the dropdown material icon font.
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
	 * Here are the available methods for Dropdown Component.
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
     * Adds a callback handler when the component is touch.
     * $$ cname.setOnTouch( callback ) $$
     * @param {Function} callback The callback function to be called. ---> @arg {String} text The text of the touched item. @arg {Number} index The index of the touched item. @arg {Object} pos The position of the touch event.
     */


    /** ### setOnChange
	 * Adds a callback function on change event.
	 * $$ dpd.setOnChange(callback) $$
	 * @param {Function} callback The callback function. ---> @arg {String} The selected item text. @arg {Number} index The index of the corresponding item.
	 */


    /** ### setOnOpen
     * Adds a callback function on close event.
     * $$ dpd.setOnOpen(callback)  $$
     * @param {Function} callback The callback function.
     */


	/** ### setOnClose
	 * Adds a callback function on close event.
	 * $$ dpd.setOnClose(callback)  $$
	 * @param {Function} callback The callback function.
	 */


	/** ### setList
	 * Sets the list items on the dropdown.
	 * $$ dpd.setList(val) $$
	 * @param {Array} val The list of new items.
	 */


	/** ### setItemByIndex
	 * Updates the text of the corresponding item in the dropdown.
	 * $$ dpd.setItemByIndex(item, index) $$
	 * @param {String} item The new item text.
	 * @param {Number} index The index of the item to update.
	 */


	/** ### getItemByIndex
	 * Returns a dropdown item by its corresponding index.
	 * $$ dpd.getItemByIndex(index) $$
	 * @param {Number} index The index of corresponding item.
	 * @returns String
	 */


    /** ### setEnabled
	 * Enable or disable an item in the dropdown.
	 * $$ dpd.setEnabled( index, value ) $$
	 * @param {Number} index The index of the item.
	 * @param {Boolean} value Values can be `true` `false`.
	 */


    /** ### getEnabled
     * Get the enabled state of an item in the dropdown menu.
     * $$ dpd.getEnabled( index ) $$
     * @param {Number} index The index of the item.
     * @returns Boolean
     */


    /** ### setEnabledByName
	 * Enable or disable an item in the dropdown.
	 * $$ dpd.setEnabledByName( name, value ) $$
	 * @param {String} name The name of the item.
	 * @param {Boolean} value Values can be `true` `false`.
	 */


    /** ### getEnabledByName
     * Get the enabled state of a menu item by its name.
     * $$ dpd.getEnabledByName( name ) $$
     * @param {String} name The name of the corresponding menu item.
     * @returns Boolean
     */


	/** ### addItem
	 * Add or insert a menu item in the dropdown list.
	 * $$ dpd.addItem( name, index ) $$
	 * @param {String} name The name of the menu.
	 * @param {Number} index The index in which to insert the menu item.
	 */


	/** ### removeItemByIndex
	 * Removes a menu item in the dropdown by its index.
	 * $$ dpd.removeItemByIndex( index ) $$
	 * @param {Number} index The index of the menu item to remove.
	 */


	/** ### removeItemByName
	 * Removes a menu item in the dropdown by its name.
	 * $$ dpd.removeItemByName( name ) $$
	 * @param {String} name The name of the menu item.
	 */


	/** ### shiftItem
	 * Removes the first item in the dropdown menu. This will return the item being removed.
	 * $$ dpd.shiftItem() $$
	 */


	/** ### popItem
	 * Removes the last item in the dropdown menu. This will return the item being removed.
	 * $$ dpd.popItem() $$
	 */


    /** ### setCornerRadius
     * Sets the corner radius of the dropdown.
     * $$ acc.setCornerRadius(tl, tr, bl, br, mode) $$
     * @param {Number} [tl] Top-left corner radius.
     * @param {Number} [tr] Top-right corner radius.
     * @param {Number} [bl] Bottom-left corner radius.
     * @param {Number} [br] Bottom-right corner radius.
     * @param {String} [mode='px'] Unit. Values are `px` `rem` or `%`.
     */


/* --- parent_methods here ----- */


/* ## Examples */


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
        ui.showPopup("Value is " + text)
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


