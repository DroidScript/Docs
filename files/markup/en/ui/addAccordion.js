/** # Accordion
 * @abbrev acc
 * @brief Adds an accordion or expansion panel into your app.
 * Adds an accordion or expansion panel into your app.
 * @img(img1.png)
 * @img(img2.png)
 * @jdocs This is very useful to display controls that are grouped together. Add an accordion using the `addAccordion` method like this:
 * $$ acc = ui.addAccordion(parent, titles, options, width, height)
 * @param {uio-Layout} parent The parent layout where to add the text.
 * @param {Array} titles An array of accordion titles.
 * @param {String} [options] A comma separated options. Style: Square Layout type: Linear|Absolute
 * @param {Number} [width] Fraction of the parent width `[0-1]`
 * @param {Number} [height] Fraction of the parent height `[0-1]`
 * @returns uio-Accordion
 */


	/** ## Properties
	 * Here are the properties you can set or get from the Accordion Component.
	 * @prop {Number} titleWidth Sets and returns the width of the title as fraction. Useful when you have a long title.
	 * @prop {String} expandIcon Sets or returns the material icon font for the expand icon.
	 * @prop {Array} titles Sets or returns the list of titles for the accordion panel. Each element of the titles array is a string.
	 * @prop {Number} toggle Collapse or shrink a corresponding accordion by its index.
     * @prop {String} textColor1 Sets or returns the title text color in hexadecimal format `#rrggbb`
     * @prop {String} textColor2 Sets or returns the secondary text color in hexadecimal format `#rrggbb`
     * @prop {Boolean} disabled Sets or returns whether the accordion is disabled or not. `True` only if all accordion is disable, otherwise `false`.
     * @prop {Number} textSize1 Sets or returns the accordion title text size.
     * @prop {Number} textSize2 Sets or returns the accordion secondary text size.
     * @prop {Boolean} rounded Sets or returns whether the accordion is rounded or not.
     * @prop {Number} cornerRadius Sets or returns the corner radius of the accordion panel. You can also pass an array of the form `[tl, tr, bl, br]`. See also `setCornerRadius` method.
     * @prop {Array} secondaryText Sets or returns the secondary text of the accordion items. See also `setSecondaryText` method.
     * @prop {Array} itemPadding Sets or returns the padding of each accordion item. See also `setItemPadding` method.
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
	 * Here are the methods available for Accordion Component.
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


	/** ### getLayout
	 * Get the layout of the corresponding accordion item. This is very useful when you add a control or component that will be displayed when the accordion collapse.
	 * $$ acc.getLayout( index ) $$
	 * @param {Number} index The index of the accordion. You can also pass accordion title.
	 * @returns Object
	 */


	/** ### setTitleText
	 * Update the accordion title by passing its corresponding index.
	 * $$ acc.setTitleText( index, text ) $$
	 * @param {Number} index The index of the corresponding title to updates.
	 * @param {String} title The new title text.
	 */


	/** ### setSecondaryText
	 * Adds a secondary text on the accordion.
	 * $$ acc.setSecondaryText( text ) $$
	 * @param {Array} text The secondary text to display. You can also pass arguments as a comma separated string.
	 * @param {Number} index If `index` is provided, the corresponding index will be updated with the new text.
	 */


	/** ### setExpandIcon
	 * Sets the expand icon at the right of the accordion.
	 * $$ acc.setExpandIcon( icon ) $$
	 * @param {String} icon A material icon
	 */


	/** ### addItem
	 * Adds an item to the accordion.
	 * $$ acc.addItem( title, secondaryText, index ) $$
	 * @param {String} title Accordion title
	 * @param {String} secondaryText Accordion secondary text
	 * @param {Number} index The index at which the accordion item will be added. If `null`, the item will be added at the bottom of the accordion.
	 */


	/** ### removeItemByIndex
	 * Removes accordion item by its index.
	 * $$ acc.removeItemByIndex( index ) $$
	 * @param {Number} index The index of the corresponding accordion to remove.
	 */


	/** ### removeItemByName
	 * Removes accordion item by its title name.
	 * $$ acc.removeItemByName( title ) $$
	 * @param {String} title The title of the corresponding accordion to remove.
	 */


	/** ### shiftItem
	 * Removes the first accordion item. This will return the item being removed.
	 * $$ acc.shiftItem() $$
	 */


	/** ### popItem
	 * Removes the last accordion item. This will return the item being removed.
	 * $$ acc.popItem() $$
	 */


	/** ### setEnabled
	 * Enable or disable the accordion component or an item in the accordion component.
	 * $$ btg.setEnabled( index, value ) $$
	 * @param {Number} index The index of the corresponding accordion.
	 * @param {Boolean} value Values can be `true` or `false`.
	 */


    /** ### getEnabled
     * Get the enabled state of an accordion item by its index.
     * @param {Number} index The index of the accordion item.
     * @returns Boolean
     */


    /** ### setEnabledByName
     * Enable or disable an accordion item by its name.
     * $$ acc.setEnabledByName( name, value ) $$
     * @param {String} name The title of the accordion
     * @param {Boolean} value Values can be `true` or `false`.
     */


    /** ### getEnabledByName
     * Get the enabled state of an accordion item by its name.
     * $$ acc.getEnabledByName( name ) $$
     * @param {String} name The title of the accordion.
     * @returns Boolean
     */


	/** ### getLayoutIndex
	 * Get the index of the corresponding layout.
	 * @param {Object} layout The layout to check.
	 * @returns Number
	 */


	/** ### setOnTouch
	 * Sets a callback function when the accordion is touch.
	 * $$ acc.setOnTouch( callback ) $$
	 * @param {Function} callback The callback function to be called. ---> @arg {Number} index The index of the corresponding accordion item. @arg {Boolean} expand The expanded state of the accordion.
	 */


	/** ### setOnContextMenu
     * Adds a callback function on right click.
     * $$ acc.setOnContextMenu( callback ) $$
     * @param {Function} callback The callback function to be called on context menu event or right click event. ---> @arg {String} title The accordion title text. @arg {Number} index The index of the corresponding accordion item. @arg {Object} pos The position of the touch event.
     */


    /** ### setTextColor
     * Sets the color of the title and the secondary text respectively.
     * $$ acc.setTextColor(color1, color2) $$
     * @param {String} color1 Color of the title text in hexadecimal format `#rrggbb`
     * @param {String} [color2] Color of the secondary text in hexadecimal format `#rrggbb`
     */


    /** ### setCornerRadius
     * Sets the corner radius of the top and bottom accordion panels.
     * $$ acc.setCornerRadius(tl, tr, bl, br, mode) $$
     * @param {Number} [tl] Top-left corner radius.
     * @param {Number} [tr] Top-right corner radius.
     * @param {Number} [bl] Bottom-left corner radius.
     * @param {Number} [br] Bottom-right corner radius.
     * @param {String} [mode='px'] Unit of measurement. Values are `px` `rem` or `%`.
     */


    /** ### setItemPadding
     * Sets the padding of the accordion item. See `itemPadding` property for equivalent setter/getter property.
     * $$ acc.setItemPadding(left, top, right, bottom, mode) $$
     * @param {Number} left Left padding of the accordion item.
     * @param {Number} top Top padding of the accordion item.
     * @param {Number} right Right padding of the accordion item.
     * @param {Number} bottom Bottom padding of the accordion item.
     * @param {String} mode Unit of measurement. Can be `rem`, `px`, `%`, or `v` for viewport.
     */


/* --- parent_methods here ----- */


/* ## Examples */


/**
@sample Complete accordion implementation
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen main layout.
        this.main = ui.addLayout( "main", "Linear", "VCenter", 1, 1 )

        this.accords = [ "Accordion 1", "Accordion 2", "Accordion 3" ]

        // Adds an accordion to the main layout
        this.acc = ui.addAccordion( this.main, this.accords, "", 0.9 )

        // Secondary text to display
        var secTxt = [
            "This is the secondary text 1",
            "This is the secondary text 2",
            "This is the secondary text 3"
        ]

        // sets the secondary text
        this.acc.setSecondaryText( secTxt )

        // Add ontouch event handler to the accordion
        this.acc.setOnTouch( this.onTouch )

        // Add controls to the first accordion layout
        this.lay1 = this.acc.getLayout( 0 )
        this.txt = ui.addText(this.lay1, "This is a text in the first layout.")

        // Add controls to the second layout
        this.lay2 = this.acc.getLayout( 1 )
        this.btn = ui.addButton(this.lay2, "Button", "Primary")

        // Add controls to the third layout
        this.lay3 = this.acc.getLayout( 2 )
        this.tfd = ui.addTextField(this.lay3, "", "Outlined", 0.3)
        this.tfd.label = "Enter some text"
    }
    
    onTouch(index, expand)
    {
        var msg = `${this.accords[index]} is ${expand ? "open" : "close"}`
        ui.showPopup( msg )
    }
}
*/


/**
@sample Items manipulation
class Main extends App
{
    onStart()
    {
        this.count = 1;

        // Creates a fullscreen main layout.
        this.main = ui.addLayout( "main", "Linear", "VCenter", 1, 1 )
        this.main.setChildMargins(0, 0.01, 0, 0.01)

        var accords = [ "Accordion 1", "Accordion 2", "Accordion 3" ]

        // Adds an accordion to the main layout
        this.acc = ui.addAccordion( this.main, accords, "", 0.9 )

        this.lay = ui.addLayout(this.main, "Linear", "Horizontal", 0.9)
        this.lay.childSpacing = "evenly"

        // add a button controls to add or remove accordion item
        this.btn1 = ui.addButton( this.lay, "Append Item" )
        this.btn1.setOnTouch( this.btn1_onTouch )

        this.btn2 = ui.addButton( this.lay, "Add Item in index 1" )
        this.btn2.setOnTouch( this.btn2_onTouch )

        this.btn3 = ui.addButton( this.lay, "Remove Item" )
        this.btn3.setOnTouch(  this.btn3_onTouch )
    }

    btn1_onTouch()
    {
        // add an item at the bottom of the accordion
        this.acc.addItem( "New Bottom Title", "New secondary text" )
    }

    btn2_onTouch()
    {
        var title = "New Title " + this.count++
        // insert item in the second index
        this.acc.addItem( title, "New secondary text", 1 )
    }

    btn3_onTouch()
    {
        this.acc.removeItemByIndex( 2 )
        ui.showPopup( "Second item is removed" )
    }
}
 */


/**
@sample Custom styles
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen main layout.
        this.main = ui.addLayout("main", "Linear", "VCenter")

        var items = ["Accordion 1", "Accordion 2", "Accordion 3"]
        var texts = ["Description for item 1", "Description for item 2", "Description for item 3"];

        // Adds an accordion to the main layout
        this.acc = ui.addAccordion(this.main, items, "", 0.9)
        this.acc.setSecondaryText( texts )

        // Sets the background color
        this.acc.backColor = "#b2dfdb"

        // Sets the text-sizes
        this.acc.textSize1 = 18
        this.acc.textSize2 = 14

        // Sets the text colors
        this.acc.textColor1 = "#00695c"
        this.acc.textColor2 = "#009688"

        // Sets the corner radius
        this.acc.cornerRadius = 14

        // Sets the expand icon
        this.acc.expandIcon = "favorite"
    }
}
 */


/**
@sample Python Complete accordion implementation
from hybrid import ui

def OnStart():
    global accords
    # Creates a fullscreen main layout.
    main = ui.addLayout("main", "Linear", "VCenter", 1, 1)

    accords = ["Accordion 1", "Accordion 2", "Accordion 3"]

    # Adds an accordion to the main layout
    acc = ui.addAccordion(main, accords, "", 0.9)

    # Secondary text to display
    secTxt = [
        "This is the secondary text 1",
        "This is the secondary text 2",
        "This is the secondary text 3"
    ]

    # sets the secondary text
    acc.setSecondaryText(secTxt)

    # Add ontouch event handler to the accordion
    acc.setOnTouch(onTouch)

    # Add controls to the first accordion layout
    lay1 = acc.getLayout(0)
    txt = ui.addText(lay1, "This is a text in the first layout.")

    # Add controls to the second layout
    lay2 = acc.getLayout(1)
    btn = ui.addButton(lay2, "Button", "Primary")

    # Add controls to the third layout
    lay3 = acc.getLayout(2)
    tfd = ui.addTextField(lay3, "", "Outlined", 0.3)
    tfd.label = "Enter some text"

def onTouch(index, expand):
    msg = f"{accords[index]} is {'open' if expand else 'close'}"
    ui.showPopup(msg)
 */


/**
@sample Python Items manipulation
from hybrid import ui

def OnStart():
    global acc, count
    count = 1

    # Creates a fullscreen main layout.
    main = ui.addLayout("main", "Linear", "VCenter", 1, 1)
    main.setChildMargins(0, 0.01, 0, 0.01)

    accords = ["Accordion 1", "Accordion 2", "Accordion 3"]

    # Adds an accordion to the main layout
    acc = ui.addAccordion(main, accords, "", 0.9)

    lay = ui.addLayout(main, "Linear", "Horizontal", 0.9)
    lay.childSpacing = "evenly"

    # add a button controls to add or remove accordion item
    btn1 = ui.addButton(lay, "Append Item")
    btn1.setOnTouch(btn1_onTouch)

    btn2 = ui.addButton(lay, "Add Item in index 1")
    btn2.setOnTouch(btn2_onTouch)

    btn3 = ui.addButton(lay, "Remove Item")
    btn3.setOnTouch(btn3_onTouch)

def btn1_onTouch(event):
    # add an item at the bottom of the accordion
    acc.addItem("New Bottom Title", "New secondary text")

def btn2_onTouch(event):
    title = "New Title " + str(count)
    # insert item in the second index
    acc.addItem(title, "New secondary text", 1)
    count += 1

def btn3_onTouch(event):
    acc.removeItemByIndex(2)
    ui.showPopup("Second item is removed")
 */


/**
@sample Python Custom styles
from hybrid import ui

def OnStart():
    # Creates a fullscreen main layout.
    main = ui.addLayout("main", "Linear", "VCenter")

    items = ["Accordion 1", "Accordion 2", "Accordion 3"]
    texts = ["Description for item 1", "Description for item 2", "Description for item 3"]

    # Adds an accordion to the main layout
    acc = ui.addAccordion(main, items, "", 0.9)
    acc.setSecondaryText(texts)

    # Sets the background color
    acc.backColor = "#b2dfdb"

    # Sets the text-sizes
    acc.textSize1 = 18
    acc.textSize2 = 14

    # Sets the text colors
    acc.textColor1 = "#00695c"
    acc.textColor2 = "#009688"

    # Sets the corner radius
    acc.cornerRadius = 14

    # Sets the expand icon
    acc.expandIcon = "favorite"
 */


