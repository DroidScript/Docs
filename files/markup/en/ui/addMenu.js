// ------------- HEADER SECTION -------------


/** # addMenu #
 * @abbrev men
 * @brief addMenu
 * 
 * $$ men = ui.addMenu(parent, list?, options?, width?, height?) $$ 
 * @param {obj} parent The component where to anchor the Menu.
 * @param {lst} [list] A list of items to be shown in the pop-up menu. You can also pass a comma separated string. For menu with icon the format is `icon&colon;title` \n `Add a `colon` before an item to display it as the label text.
 * @param {str_com} [options] Color: `Primary` `Secondary` `Error` \n List: `Dense` \n Icons: `Icon`
 * @param {num} [width] Fraction of the screen width. [0-1]
 * @param {num} [height] Fraction of the screen height. [0-1]
 * @returns uio-Menu
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Adds a pop-up menu into your components.

 These are examples on how you can format your list.

 Basic list
<js> var lst = [ 'Item 1', 'Item 2', 'Item 3' ]; </js>


 List with icons
<js> var lst = ['favorite : Favorites', 'person : Account', 'delete : Trash Bin']; </js>


 List with group title
<js> var lst = [' : This is a label', 'Item 1', 'Item 2', 'Item 3']; </js>


### Properties
These are the setter and getter properties for the addMenu Component.
<smp noinl>absHeight:"num:'Returns the absolute height of the control in pixels.'"</smp>
<smp noinl>absLeft:"num:'Returns the absolute distance of the control from the left in pixels.'"</smp>
<smp noinl>absTop:"num:'Returns the absolute distance of the control from the top in pixels.'"</smp>
<smp noinl>absWidth:"num:'Returns the absolute width of the control in pixels.'"</smp>
<smp noinl>backColor:"str:'A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col>'"</smp>
<smp noinl>backImage:"str:'The path to your image file.'"</smp>
<smp noinl>border:"num:'Sets or returns the border thickness in pixels.'"</smp>
<smp noinl>borderColor:"str:'Sets or returns the border color. Color is in hexadecimal form <col nobox #fb8c00>#rrggbb</col>'"</smp>
<smp noinl>borderStyle:"str:'Sets or returns the border style. Values can be <col nobox #fb8c00>dotted</col>, <col nobox #fb8c00>dashed</col>, <col nobox #fb8c00>solid</col>, <col nobox #fb8c00>double</col>, <col nobox #fb8c00>groove</col>, <col nobox #fb8c00>ridge</col>, <col nobox #fb8c00>inset</col> and <col nobox #fb8c00>outset</col>. Default is <col nobox #fb8c00>solid</col>.'"</smp>
<smp noinl>cornerRadius:"num:'Sets or returns the corner radius in pixels.'"</smp>
<smp noinl>disabled:"bin:'Sets or returns the <col nobox #fb8c00>disabled</col> state of the control.'"</smp>
<smp noinl>fontFile:"str:'Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use.'"</smp>
<smp noinl>height:"num:'Sets or returns the height of the control as a fraction of the parent control.'"</smp>
<smp noinl>isVisible:"bin:'Returns whether the control is visible or not.'"</smp>
<smp noinl>itemPadding:"lst:'Sets or returns the padding of each menu item. See also <col nobox #fb8c00>setItemPadding</col> method.'"</smp>
<smp noinl>left:"num:'Returns the distance of the control from the left.'"</smp>
<smp noinl>list:"lst:'Sets or returns the items in the menu. You can also pass a comma separated string.'"</smp>
<smp noinl>margins:"lst:'Sets or returns the margin of the control. Works on controls with <col nobox #fb8c00>Linear</col> parent only. You can also pass a number to set equal margins for all sides.'"</smp>
<smp noinl>opacity:"num:'Sets or returns the opacity of the control.'"</smp>
<smp noinl>options:"str:'Sets or returns the <col nobox #fb8c00>options</col> of the control.'"</smp>
<smp noinl>padding:"lst:'Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.'"</smp>
<smp noinl>parent:"obj:'Returns the parent layout control.'"</smp>
<smp noinl>position:"obj:'Returns the position of the control. The returned object has <col nobox #fb8c00>left</col> <col nobox #fb8c00>top</col> <col nobox #fb8c00>right</col> and <col nobox #fb8c00>bottom</col> props.'"</smp>
<smp noinl>rotation:"num:'Sets or returns the angle of rotation in degrees.'"</smp>
<smp noinl>textColor:"str:'Sets or returns the color of the text.'"</smp>
<smp noinl>textSize:"num:'Sets or returns the size of the text within the control.'"</smp>
<smp noinl>top:"num:'Returns the distance of the control from the top.'"</smp>
<smp noinl>type:"str:'Returns the type of the control.'"</smp>
<smp noinl>visibility:"str:'Sets or returns the visibility of the control.'"</smp>
<smp noinl>width:"num:'Sets or returns the width of the control as a fraction of the parent control.'"</smp>
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### setOnTouch ###
 * @brief setOnTouch
 * Adds a callback handler when the menu is touch
 * $$ men.setOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["item","icon","index"],"pTypes":["str-The menu item text.","str-The menu item icon.","num-The menu item index."]}
 */


/** ### show ###
 * @brief show
 * Show the menu pop-up
 * If you passed a parent on initialization, then the menu si anchored on that component
 * $$ men.show(parent) $$
 * @param {obj} parent The component where to anchor the menu. It can be a `Button` or an `Image`.
 */


/** ### hide ###
 * @brief hide
 * Hide the pop-up menu
 * $$ men.hide() $$
 */


/** ### setList ###
 * @brief setList
 * Updates the list items on the menu
 * $$ men.setList(list) $$
 * @param {lst} list The list items to show.
 */


/** ### addItem ###
 * @brief addItem
 * Adds an item in the menu list
 * $$ men.addItem(name, index) $$
 * @param {str} name The new item to be added.
 * @param {num} index The index at which to add the item.
 */


/** ### removeItemByIndex ###
 * @brief removeItemByIndex
 * Removes an item in the menu items list by its index
 * $$ men.removeItemByIndex(index) $$
 * @param {num} index The index of the item to remove.
 */


/** ### removeItemByName ###
 * @brief removeItemByName
 * Removes an item in the menu items list by its name
 * $$ men.removeItemByName(name) $$
 * @param {str} name The name of the item to remove.
 */


/** ### popItem ###
 * @brief popItem
 * Removes the last item
 * $$ men.popItem() $$
 */


/** ### shiftItem ###
 * @brief shiftItem
 * Removes the first item
 * $$ men.shiftItem() $$
 */


/** ### setPosition ###
 * @brief setPosition
 * Set the position of the menu from the left and top of the anchor component
 * $$ men.setPosition(left, top) $$
 * @param {num} left The position of the menu from the left of the parent or anchor component. The unit is in pixels.
 * @param {num} top The position of the menu from the top of the parent or anchor component. The unit is in pixels.
 */


/** ### setAutoFocus ###
 * @brief setAutoFocus
 * Sets the autofocus value of the menu items
 * $$ men.setAutoFocus(bool) $$
 * @param {bin} bool Value can be `true` or `false`
 */


/** ### setEnabled ###
 * @brief setEnabled
 * Enable or disable an item in the menu popup
 * $$ men.setEnabled(index, value) $$
 * @param {num} index The index of the item.
 * @param {bin} value Values can be `true` or `false`. `false` to disable.
 */


/** ### getEnabled ###
 * @brief getEnabled
 * Get the enabled state of an item the menu popup
 * $$ men.getEnabled(index) $$
 * @param {num} index The index of the item.
 * @returns bin
 */


/** ### setEnabledByName ###
 * @brief setEnabledByName
 * Enable or disable an item in the menu popup by its name
 * $$ men.setEnabledByName(name, value) $$
 * @param {str} name The name of the corresping item the menu.
 * @param {bin} value Values can be `true` or `false`. `false` to disable an item.
 */


/** ### getEnabledByName ###
 * @brief getEnabledByName
 * Get the enabled state of an item in the menu popup
 * $$ men.getEnabledByName(name) $$
 * @param {str} name The name of the item.
 * @returns bin
 */


/** @extern setOnContextMenu */

/** @extern animate */

/** @extern setSize */

/** @extern gone */

/** @extern destroy */

/** @extern setScale */

/** @extern getPosition */

/** @extern setMargins */

/** @extern setPadding */

/** @extern setBorder */

/** @extern setCornerRadius */

/** @extern bringForward */

/** @extern sendBackward */


// ------------- SAMPLES ------------- 


    
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
        this.main.setChildSpacing( "Evenly" )

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
@sample Anchor position on mouse
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")
        this.main.setOnContextMenu( this.onMenu )

        // Add a text control to the layout
        this.txt = ui.addText(this.main, "Right click anywhere on the screen.")

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
    
            