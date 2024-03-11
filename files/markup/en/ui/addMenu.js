/** # Menu
 * @abbrev men
 * A menu is a list of options or actions presented to the user as a popup.
 * @img(img1.png)
 * @img(img2.png)
 * @jdocs In Material Design, menus can be contextual, appearing in response to user interactions. They provide a consistent way to access additional functionality or navigate within an application. Show a menu by calling the `addMenu` method like this:
 * $$ men = ui.addMenu(parent, list, options, width, height) $$
 * @param {uio} parent The component where to anchor the Menu.
 * @param {Array} [list] A list of items to be shown in the pop-up menu. You can also pass a comma separated string. For menu with icon the format is `icon:title` \n Add a `colon` before an item to display it as the label text.
 * @param {String} [options] A comma separated options.\nTheme Color: `Primary`, `Secondary`, `Error`\nUtils: `Dense`, `Icon`
 * @param {Number} [width] Fraction of the parent width `[0-1]`.
 * @param {Number} [height] Fraction of the parent height `[0-1]`.
 * @returns uio-Menu
 */


/**
 * These are examples on how you can format your list.
 * Basic list
 * $$ var lst = ['Item 1', 'Item 2', 'Item 3']; $$
 * List with icons
 * $$ var lst = ['favorite:Favorites', 'person:Account', 'delete:Trash Bin']; $$
 * List with group title
 * $$ var lst = [':This is a label', 'Item 1', 'Item 2', 'Item 3']; $$
 */


	/** ## Properties
	 * Here are the available setters and/or getters for the Menu Component.
	 * @prop {Array} list Sets or returns the items in the menu. You can also pass a comma separated string.
     * @prop {Array} itemPadding Sets or returns the padding of each menu item. See also `setItemPadding` method.
	 */


	/** ## Methods
	 * Here are the available methods for Menu Component.
	 */ 


    /** ### setOnTouch
     * Adds a callback handler when the menu is touch.
     * $$ men.setOnTouch(callback) $$
     * @param {Function} callback The callback function to be called. ---> @arg {String} item The menu item text. @arg {String} icon The menu item icon. @arg {Number} index The menu item index.
     */


	/** ### show
	 * Show the menu pop-up.
	 * $$ men.show( parent ) $$
	 * @param {uio} parent The component where to anchor the menu. It can be a `Button` or an `Image`.
	 * If you passed a parent on initialization, then the menu si anchored on that component.
	 */


	/** ### hide
	 * Hide the pop-up menu.
	 * $$ men.hide() $$
	 */


	/** ### setList
	 * Updates the list items on the menu.
	 * $$ men.setList( list ) $$
	 * @param {Array} list The list items to show.
	 */


	/** ### addItem
	 * Adds an item in the menu list.
	 * $$ men.addItem( name, index ) $$
	 * @param {String} name The new item to be added.
	 * @param {Number} index The index at which to add the item.
	 */


	/** ### removeItemByIndex
	 * Removes an item in the menu items list by its index.
	 * $$ men.removeItemByIndex( index ) $$
	 * @param {Number} index The index of the item to remove.
	 */


	/** ### removeItemByName
	 * Removes an item in the menu items list by its name.
	 * $$ men.removeItemByName( name ) $$
	 * @param {String} name The name of the item to remove.
	 */


	/** ### popItem
	 * Removes the last item. This will return the item being removed.
	 * $$ men.popItem() $$
	 */


	/** ### shiftItem
	 * Removes the first item. This will return the item being removed.
	 * $$ men.shiftItem() $$
	 */


	/** ### setPosition
	 * Set the position of the menu from the left and top of the anchor component.
	 * $$ men.setPosition( left, top ) $$
	 * @param {Number} left The position of the menu from the left of the parent or anchor component. The unit is in pixels.
	 * @param {Number} top The position of the menu from the top of the parent or anchor component. The unit is in pixels.
	 */


	/** ### setAutoFocus
	 * Sets the autofocus value of the menu items.
	 * $$ men.setAutoFocus( bool ) $$
	 * @param {Boolean} bool Value can be `true` or `false`
	 */


    /** ### setEnabled
     * Enable or disable an item in the menu popup.
     * $$ men.setEnabled( index, value ) $$
     * @param {Number} index The index of the item.
     * @param {Boolean} value Values can be `true` or `false`. `false` to disable.
     */


    /** ### getEnabled
     * Get the enabled state of an item the menu popup.
     * $$ men.getEnabled(index) $$
     * @param {Number} index The index of the item.
     * @returns Boolean
     */


    /** ### setEnabledByName
     * Enable or disable an item in the menu popup by its name.
     * $$ men.setEnabledByName(name, value) $$
     * @param {String} name The name of the corresping item the menu.
     * @param {Boolean} value Values can be `true` or `false`. `false` to disable an item.
     */


    /** ### getEnabledByName
     * Get the enabled state of an item in the menu popup.
     * $$ men.getEnabledByName( name ) $$
     * @param {String} name The name of the item.
     * @returns Boolean
     */


    /** ### setItemPadding
     * Sets the padding of the menu item. See `itemPadding` property for equivalent setter/getter property.
     * $$ men.setItemPadding(left, top, right, bottom, mode) $$
     * @param {Number} left Left padding of the menu item.
     * @param {Number} top Top padding of the menu item.
     * @param {Number} right Right padding of the menu item.
     * @param {Number} bottom Bottom padding of the menu item.
     * @param {String} mode Unit of measurement. Can be `rem`, `px`, `%`, or `v` for viewport.
     */


/* --- parent_methods here ----- */


/* ## Examples */


/**
@sample Basic menu
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Adds a button control to the layout
        this.btn = ui.addButton(this.main, "Show Menu", "Primary")
        this.btn.setOnTouch( this.onTouch )

        // Menu items to display in the popup
        var items = ["Item 1", "Item 2", "Item 3"]

        // Adds a menu passing the button control as anchor
        this.menu = ui.addMenu(this.btn, items)

        // Add a callback handler when a menu is touched
        this.menu.setOnTouch( this.menuTouch )
    }

    onTouch()
    {
        // show the menu
        this.menu.show()
    }

    menuTouch( item )
    {
        ui.showPopup( item )
    }
}
 */


/**
@sample Changing anchor component
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")
        this.main.childSpacing = "Even";

        // Add a first button control to the layout
        this.btn1 = ui.addButton(this.main, "Button 1", "Primary")
        this.btn1.setOnTouch( this.onTouch1 )

        // Add a second button control to the layout
        this.btn2 = ui.addButton(this.main, "Button 2", "Secondary")
        this.btn2.setOnTouch( this.onTouch2 )

        // Menu items to display the menu popup
        var items = ["Item 1", "Item 2", "Item 3"]

        // Adds a menu without anchor component
        this.menu = ui.addMenu(null, items)

        // Add a callback handler when a menu is touched
        this.menu.setOnTouch( this.menuTouch )
    }

    onTouch1()
    {
        // Show the menu on button 1
        this.menu.show( this.btn1 )
    }

    onTouch2()
    {
        // Show the menu on button 2
        this.menu.show( this.btn2 )
    }

    menuTouch( item )
    {
        ui.showPopup( item )
    }
}
 */


/**
@sample With icons and disabled items
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Add a button control to the main layout
        this.btn = ui.addButton(this.main, "Show Menu", "Primary")
        this.btn.setOnTouch( this.onTouch )

        // List items with icons
        var items = ["person:Item 1", "delete:Item 2", "favorite:Item 3"]

        // Add a menu passing the btn as anchor component
        this.menu = ui.addMenu(this.btn, items, "Icons,Primary,Dense")

        // Disable the second menu item
        this.menu.setEnabled(1, false)

        // Add a callback handler when a menu is touched
        this.menu.setOnTouch( this.menuTouch )
    }

    onTouch()
    {
        // show the menu
        this.menu.show()
    }

    menuTouch( item )
    {
        // display the selected item
        ui.showPopup( item )
    }
}
 */


/**
@sample Anchor position on mouse / touch
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")
        this.main.setOnContextMenu( this.onMenu )

        // Add a text control to the layout
        this.txt = ui.addText(this.main, "Right click anywhere on the screen.\n(Long press if your on mobile phone)", "Multiline")

        // List items with icons
        var items = ["person:Item 1", "delete:Item 2", "favorite:Item 3"]

        // Add menu passing the btn as anchor component
        this.menu = ui.addMenu(null, items, "Icons,Dense")

        // Add a callback handler when a menu is touched
        this.menu.setOnTouch( this.menuTouch )
    }

    onMenu( pos )
    {
        // show the menu on the position of the mouse
        this.menu.show(pos.x, pos.y)
    }

    menuTouch( item )
    {
        // display the selected item
        ui.showPopup( item )
    }
}
 */


/**
@sample Python Basic menu
from hybrid import ui

def OnStart():
    global menu
    # Creates a fullscreen layout with objects vertically centered.
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")

    # Adds a button control to the layout
    btn = ui.addButton(main, "Show Menu", "Primary")
    btn.setOnTouch(onTouch)

    # Menu items to display in the popup
    items = ["Item 1", "Item 2", "Item 3"]

    # Adds a menu passing the button control as anchor
    menu = ui.addMenu(btn, items)

    # Add a callback handler when a menu is touched
    menu.setOnTouch(menuTouch)

def onTouch(event):
    # show the menu
    menu.show()

def menuTouch(item, icon, index):
    ui.showPopup(item)
 */


/**
@sample Python Changing anchor component
from hybrid import ui

def OnStart():
    global btn1, menu, btn2
    # Creates a fullscreen layout with objects vertically centered
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")
    main.setChildSpacing("Evenly")

    # Add a first button control to the layout
    btn1 = ui.addButton(main, "Button 1", "Primary")
    btn1.setOnTouch(onTouch1)

    # Add a second button control to the layout
    btn2 = ui.addButton(main, "Button 2", "Secondary")
    btn2.setOnTouch(onTouch2)

    # Menu items to display the menu popup
    items = ["Item 1", "Item 2", "Item 3"]

    # Adds a menu without anchor component
    menu = ui.addMenu(None, items)

    # Add a callback handler when a menu is touched
    menu.setOnTouch(menuTouch)

def onTouch1(event):
    # Show the menu on button 1
    menu.show(btn1)

def onTouch2(event):
    # Show the menu on button 2
    menu.show(btn2)

def menuTouch(item, icon, index):
    ui.showPopup(item)
 */


/**
@sample Python With icons and disabled items
from hybrid import ui

def OnStart():
    global menu
    # Creates a fullscreen layout with objects vertically centered
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")

    # Add a button control to the main layout
    btn = ui.addButton(main, "Show Menu", "Primary")
    btn.setOnTouch(onTouch)

    # List items with icons
    items = ["person:Item 1", "delete:Item 2", "favorite:Item 3"]

    # Add a menu passing the btn as anchor component
    menu = ui.addMenu(btn, items, "Icons,Primary,Dense")

    # Disable the second menu item
    menu.setEnabled(1, False)

    # Add a callback handler when a menu is touched
    menu.setOnTouch(menuTouch)

def onTouch(event):
    # show the menu
    menu.show()

def menuTouch(item, icon, index):
    # display the selected item
    ui.showPopup(item)
 */


/**
@sample Python Anchor position on mouse
from hybrid import ui

def OnStart():
    global menu
    # Creates a fullscreen layout with objects vertically centered
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")
    main.setOnContextMenu(onMenu)

    # Add a text control to the layout
    txt = ui.addText(main, "Right click anywhere on the screen.")

    # List items with icons
    items = ["person:Item 1", "delete:Item 2", "favorite:Item 3"]

    # Add menu passing the btn as anchor component
    menu = ui.addMenu(None, items, "Icons,Dense")

    # Add a callback handler when a menu is touched
    menu.setOnTouch(menuTouch)

def onMenu(pos):
    # show the menu on the position of the mouse
    menu.show(pos.x, pos.y)

def menuTouch(item, icon, index):
    # display the selected item
    ui.showPopup(item)
 */


