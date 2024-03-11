/** # Select
 * @abbrev sel
 * Adds a Select Component to a given layout.
 * @img(img1.png)
 * @img(img2.png)
 * @jdocs This component often refers to a dropdown or picker element that allows users to choose from a list of options. Add a select into your app using the `addSelect` method like this:
 * $$ sel =  ui.addSelect(parent, list, options, width, height) $$
 * @param {uio-Layout} parent The parent layout where to add the control
 * @param {Array} [list] The list of items for the Select options
 * @param {String} [options] A comma separated options.\nSizes: `Small`, `Medium`\nVariant: `Filled`, `Outlined`, `Standard`\nMargin: `Dense`, `Normal`\nUtils: `Required`, `Multiple`, `Radio`, `Disabled`, `AutoFocus`, `FullWidth`
 * @param {Number} [width] Fraction of the parent width `[0-1]`.
 * @param {Number} [height] Fraction of the parent height `[0-1]`.
 * @returns uio-Select
 */


/**
 * A simple list
 * $$ [ "Option 1", "Option 2", "Option 3"] $$
 * If you want a list with groupings, you can add a colon `:` before each item text to display as group name. Below is an example
 * $$ [":Group 1", "Option 1", "Option 2", ":Group 2", "Item 1", "Item 2"] $$
 */


    /** ## Properties
     * Here are the availabel setters and getter of the Select Component.
     * @prop {String} label Sets or returns the label text.
     * @prop {Array} list Sets or returns the list items. You can also pass a comma separated string of items.
     * @prop {Boolean} enabled Sets or returns a boolean value whether the component is enabled or disabled.
     * @prop {String} value Sets or returns the value of the Select Component. For Select with `Multiple` options, the `value` is an array of string items. You can also pass the `index` of the selected item. Pass an array of `indexes` for multiple selection.
     * @prop {String} variant Sets or returns the variant of the Select Component. Values can be `Standard` `Filled` and `Outlined`
     * @prop {String} sizeVariant Sets or returns the size variant of the Select Component. Values can be `Small` or `Medium`
     * @prop {String} iconColor Sets or returns the color of the icon in hexadecimal format `#rrggbb`
     * @prop {String} labelColor Sets or returns the color of the label text in hexadecimal format `#rrggbb`
     * @prop {Number} labelSize Sets or returns the size of the label.
     * @prop {String} popupColor Sets or returns the color of the popup in hexadecimal format.
     * @prop {Number} maxHeight Sets or returns the maximum height of the popup container.
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
     * Here are the methods available for the Select Component.
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
     * Adds a callback handler when an item is touch. This will be fired even if the value does not change.
     * $$ sel.setOnTouch( callback ) $$
     * @param {Function} callback The callback function to be called. ---> @arg {String} text The text of the touched item. @arg {Number} index The index of the touched item. @arg {Object} pos The position of the touch event.
     */


    /** ### setOnChange
     * Sets a callback function when the value changes.
     * $$ sel.setOnChange( callback ) $$
     * @param {Function} callback The function to be called. ---> @arg {String} value The value of the select input. @arg {Number} index Index or indexes of the selected items.
     */


    /** ### setOnOpen #
     * Sets a callback function when the menu is open.
     * $$ sel.setOnOpen( callback ) $$
     * @param {Function} callback The function to be called.
     */


    /** ### setOnClose
     * Sets a callback function when the menu dialog is close.
     * $$ sel.setOnClose( callback ) $$
     * @param {Function} callback The function to be called on select. ---> @arg {String} value The value of the select input.
     */


    /** ### addItem
     * Adds an item on the select component options list.
     * $$ sel.addItem( item ) $$
     * @param {String} item A new item to be added.
     * @param {Number} index The index in which to add the item.
     */


    /** ### removeItemByIndex
     * Removes an item in the select component item list by its index.
     * $$ sel.removeItemByIndex( index ) $$
     * @param {Number} index The index of the corresponding item to remove.
     */


    /** ### removeItemByName
     * Removes an item in the select component item list by its name.
     * $$ sel.removeItemByName( name ) $$
     * @param {String} name The name of the item to remove.
     */


    /** ### shifItem
     * Removes an item at the beginning of the list items. This will return the item being removed.
     * $$ sel.shifItem() $$
     */


    /** ### popItem
     * Removes an item at the end of the list items. This will return the item being removed.
     * $$ sel.popItem() $$
     */


    /** ### getItem
     * Returns the item at a given index.
     * $$ sel.getItem( index ) $$
     * @param {Number} index The index of the item.
     */


    /** ### setList
     * Sets the list items in the menu popup.
     * $$ sel.setList( items ) $$
     * @param {Array} items A comma separated string or array of options
     */


    /** ### setEnabled
     * Enable or disable the select component.
     * $$ sel.setEnabled( index, value ) $$
     * @param {Number} index Can be `true` or `false`. You can also pass a `Boolean` to enable or disable the Select component.
     * @param {Boolean} value Values can be `true` or `false`.
     */


    /** ### getEnabled
     * Get the enabled state of an item in the select menu.
     * $$ sel.getEnabled( index ) $$
     * @param {Number} index The index of the corresponding item in the select menu.
     * @returns Boolean
     */


    /** ### setEnabledByName
     * Enable or disable an item in the menu popup.
     * $$ sel.setEnabledByName( name, value ) $$
     * @param {String} name The name of the menu item.
     * @param {Boolean} value Value can be `true` or `false`
     */


    /** ### getEnabledByName
     * Get the enabled state of an item in the menu popup.
     * $$ sel.getEnabledByName( name ) $$
     * @param {String} name The name of the menu item.
     * @returns Boolean
     */


/* --- parent_methods here ----- */


/* ## Examples */


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


