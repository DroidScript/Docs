/** # List
 * @abbrev lst
 * Lists are continuous, vertical indexes of text or images.
 * @img(img1.png)
 * @img(img2.png)
 * @jdocs They are used to group together related pieces of data or informations to highlight association with each other and easy to read. They are frequently used for navigation as well as displaying general content. Add a list to your app by calling the `addList` method of the `ui` object.
 * $$ list = ui.addList(parent, list, options, width, height) $$
 * @param {uio-Layout} parent The parent layout
 * @param {Array} [list] An array of arrays. Each element is of the form `[icon, title, body, secondary]`
 * @param {String} [options] A comma separated options.\nMedia: `Icon`, `Avatar`\nStyling: `Dense`, `Inset`\nUtils: `Selectable`, `Divider`, `SecondaryText`, `NoRipple`, `NoScrollBar`
 * @param {Number} [width] Fraction of the parent width `[0-1]`.
 * @param {Number} [height] Fraction of the parent height `[0-1]`.
 * @returns uio-List
 */


/**
 * If `Icon` option is passed, the list must be of the form `[icon, title, body, secondary]`. To display an image avatar, passed and additional `Avatar` option and the list must be of the form `[image, title, body, secondary]`
 * If no `Icon` option is passed, the list is treated as `[title, body, secondary]` by default.
 * The secondary action is an icon button by default, to display as a text passed `secondarytext` option.
 * Adding a `selectable` list will disregard the `icon` option.
 */


    /** ## Properties
     * Here are the available setters and/or getters for the List Component.
     * @prop {String} avatarSize Sets or returns the size of the avatar. Values can be `Small` `Medium` `Large`
     * @prop {String} avatarVariant Sets or returns the variant of the avatar. Values can be `Square` `Round` or `Circle`
     * @prop {String} checkboxColor Sets or returns the theme color of the checkbox when `Selectable` option is enabled. Values can be `Default` `Primary` or `Secondary` or hexadecimal color.
     * @prop {String} label Sets or returns the label text.
     * @prop {Boolean} selectable Sets or returns a boolean whether the list is selectable or not.
     * @prop {Number} elevation Sets or returns the depth of the list container. Values range from 0 to 24.
     * @prop {String} backColor Sets or returns the background color in a hexadecimal format.
     * @prop {Number} textSize1 Sets or returns the size of the title text.
     * @prop {Number} textSize2 Sets or returns the size of the body text.
     * @prop {Number} iconSize Sets or returns the size of the icon text.
     * @prop {String} textColor1 Sets or returns the color of the title text in hexadecimal format.
     * @prop {String} textColor2 Sets or returns the color of the body text in hexadecimal format.
     * @prop {String} iconColor Sets or returns the icon color in a hexadecimal format.
     * @prop {Boolean} outlined Sets or returns whether the container is outlined or elevated.
     * @prop {Array} itemPadding Sets or returns the padding of each list item. See also `setItemPadding` method.
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
     * Here are the following methods available on the List Component.
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


    /** ### addItem
     * Adds an item in the list.
     * $$ lst.addItem( title, body, image, index ) $$
     * @param {String} title The title of the item.
     * @param {String} [body] The text description of the item.
     * @param {String} [image] A material icon or image file path.
     * @param {String} [action] A text for the action or material icon.
     * @param {Number} [index] The index in which to add or insert the item.
     */


    /** ### setOnTouch
     * Adds a callback function when the list item is click.
     * $$ lst.setOnTouch( callback ) $$
     * @param {Function} callback The callback function to be called. ---> @arg {String} title The list item title text. @arg {String} body The list item body text. @arg {String} icon The list item icon. @arg {String} action The action text. @arg {Number} index The list item index. @arg {Object} pos The position of the touch event.
     */


    /** ### setOnLongTouch
     * Adds a callback handler for a long touch event. The touch timer is about 500 milliseconds.
     * $$ lst.setOnLongTouch( callback ) $$
     * @param {Function} callback The callback function to be called. ---> @arg {String} title The list item title. @arg {String} body The list item description text. @arg {String} icon The list item icon. @arg {String} action  The action text. @arg {Number} index The list item index. @arg {Object} pos The position of the touch event.
     */


	/** ### setOnSelect
     * Sets a callback handler when an item in the list is selected.
     * $$ lst.setOnSelect( callback ) $$
     * @param {Function} callback The callback function to be called. ---> @arg {String} title The list item title text. @arg {Number} index The index of the selected list item. @arg {Boolean} checked The checked state of the list item.
     */


    /** ### setOnAction
     * $$ lst.setOnAction( callback ) $$
     * Sets a callback handler when an action icon is click.
     * @param {Function} callback The callback function. ---> @arg {String} icon The icon text. @arg {Number} index The index of the corresponding secondary action.
     */


    /** ### setOnContextMenu
     * Adds a callback function on right click.
     * $$ lst.setOnContextMenu( callback ) $$
     * @param {Function} callback The callback function to be called on context menu event or right click event. ---> @arg {String} title The list item title text. @arg {String} body The list item body text. @arg {String} icon The list item icon. @arg {String} action The action text. @arg {Number} index The list item index. @arg {Object} pos The position of the touch event.
     */


    /** ### getSelectedItems
     * $$ lst.getSelectedItems() $$
     * Returns an array of indexes of the selected items.
     */


    /** ### getSelectedTitles
     * $$ lst.getSelectedTitles() $$
     * Returns an array of titles of selected items
     */


    /** ### setList
     * Updtes the list.
     * $$ lst.setList( list ) $$
     * @param {Array} list A comma separated list of items or an array. See the list format above.
     */


    /** ### setSelectable
     * Make the list selectable or not.
     * $$ lst.setSelectable( selectable ) $$
     * @param {Boolean} selectable If true, make the list selectable. Otherwise, list is not selectable
     */


    /** ### setItemByIndex
     * Change the content of an item in a list.
     * $$ lst.setItemByIndex(index, newTitle, newBody, newIcon, newAction) $$
     * @param {Number} index The index of the item to update
     * @param {String} newTitle The new title of the item
     * @param {String} [newBody] The new body text
     * @param {String} [newIcon] The new icon or image
     * @param {String} [newAction] The new action icon or action text
     */


    /** ### getItemByIndex
     * Get the item in a list by its corresponding index.
     * $$ lst.getItemByIndex(index, json) $$
     * @param {Number} index Returns the corresponding list item.
     * @param {Boolean} json Pass `true` to return the corresponding list item as an object of the form `{title,body,image,action}`
     */


	/** ### setItem
     * Updates an item in the list.
     * $$ lst.setItem( title, newTitle, newBody, newIcon ) $$
     * @param {String} title The title of the list item to update.
     * @param {String} newTitle The new title of the list item.
     * @param {String} [newBody] The new description of the list item.
     * @param {String} [newIcon] A material icon font or image file path.
     * @param {String} [newAction] A material icon font for the action icon button.
     */


    /** ### getItem
     * Get the item in the list by its corresponding title.
     * $$ lst.getItem(title, json) $$
     * @param {String} title Title of the list item.
     * @param {Boolean} json Pass `true` to return the corresponding list item as an object of the form `{title,body,image,action}`
     */


    /** ### removeItemByIndex
      * Removes an element from the list.
      * $$ lst.removeItemByIndex( index ) $$
      * @param {Number} index The index of the item to remove
      */


    /** ### removeItemByName
     * Removes an item in the list by its title.
     * $$ lst.removeItemByName( name ) $$
     * @param {String} name The title of the list to remove.
     */


    /** ### shiftItem
     * Removes the first item the list. This will return the item being removed.
     * $$ lst.shiftItem() $$
     */


    /** ### popItem
     * Removes the last item in the list. This will return the item being removed.
     * $$ lst.popItem() $$
     */


    /** ### deselectAll
     * Clears all selection in the list if the list is selectable.
     * $$ lst.deselectAll() $$
     */


    /** ### selectItemByIndex
     * Selects an item in the list by its index and marked the checkbox. List must be selectable.
     * $$ lst.selectItemByIndex( index ) $$
     * @param {Number} index The index to be selected.
     */


    /** ### setTitleText
     * Sets a new title text to a corresponding item in a list.
     * $$ lst.setTitleText( index, title ) $$
     * @param {Number} index The index of the corresponding list item.
     * @param {String} title The new title text.
     */


    /** ### setBodyText
     * Sets a new secondary text to a corresponding item in a list.
     * $$ lst.setBodyText( index, newText ) $$
     * @param {Number} index The index of the list whose secondary text to be changed.
     * @param {String} newText The new secondary text.
     */


    /** ### setIcon
     * Updates an icon in a list by its corresponding index.
     * $$ lst.setIcon( index, icon ) $$
     * @param {Number} index The index of the corresponding list item.
     * @param {String} icon Material icon font.
     */


    /** ### setCornerRadius
     * Sets the corner radius of the list container.
     * $$ acc.setCornerRadius(tl, tr, bl, br, mode) $$
     * @param {Number} [tl] Top-left corner radius.
     * @param {Number} [tr] Top-right corner radius.
     * @param {Number} [bl] Bottom-left corner radius.
     * @param {Number} [br] Bottom-right corner radius.
     * @param {String} [mode='px'] Unit. Values are `px` `rem` or `%`.
     */


    /** ### setItemPadding
     * Sets the padding of the list item. See `itemPadding` property for equivalent setter/getter property.
     * $$ lst.setItemPadding(left, top, right, bottom, mode) $$
     * @param {Number} [left] Left padding of the list item.
     * @param {Number} [top] Top padding of the list item.
     * @param {Number} [right] Right padding of the list item.
     * @param {Number} [bottom] Bottom padding of the list item.
     * @param {String} [mode] Unit of measurement. Can be `rem`, `px`, `%`, or `v` for viewport.
     */


/* --- parent_methods here ----- */


/* ## Examples */


/**
@sample Basic list
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize the list items to show
        var list = ["Javascript", "Java", "Python"]

        // Add a list control to the main layout
        this.lst = ui.addList(this.main, list, "", 0.6)

        // Adds a callback handler when the list is touched
        this.lst.setOnTouch( this.onTouch )
    }
    
    onTouch( title, body, icon, action, index )
    {
        ui.showPopup( title, "Short" )
    }
}
 */


/**
@sample List with icon and body
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter", 1, 1)
        this.main.setChildMargins(0, 0, 0, 0.02)

        // Initialize the list items to show
        var list = [
            ["favorite", "Javascript", "This is a sample body text."],
            ["person", "Java", "This is a sample body text."],
            ["settings", "Python", "This is a sample body text."]
        ]

        // Add a list control with icon to the main layout
        this.lst = ui.addList(this.main, list, "Icon", 0.8)

        // Adds a callback handler when the list is touched
        this.lst.setOnTouch( this.onTouch )

        // Add a button control to the main layout
        this.btn = ui.addButton(this.main, "Change Icon Color", "Outlined")

        // Add a callback handler to change the icon color when the button is touched
        this.btn.setOnTouch( this.changeIconColor )
    }
    
    onTouch(title, body, icon, action, index)
    {
        ui.showPopup(title, "Short")
    }

    changeIconColor()
    {
        this.lst.iconColor = "#e91e63"
    }
}
 */


/**
@sample Contacts list
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Avatar url
        var avatar = "https://sample-ds-tutorials.firebaseapp.com/img/ds-logo.png"
        
        // Initialize the contact items to show
        var list = [
            [avatar, "Frodo", "+0123456789"],
            [avatar, "Bilbo", "+0123456789"],
            [avatar, "Well", "+0123456789"]
        ]

        // Add a list control with avatar to the main layout
        this.lst = ui.addList(this.main, list, "Avatar", 0.8)

        // Adds a callback handler when the list is touched
        this.lst.setOnTouch( this.onTouch )
    }

    onTouch(title, body, icon, action, index)
    {
        ui.showPopup(title + " : " +body, "Short")
    }
}
 */


/**
@sample Elevated list
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize the list items to show
        var list = [
            ["favorite", "Javascript", "This is a sample body text."],
            ["person", "Java", "This is a sample body text."],
            ["settings", "Python", "This is a sample body text."]
        ]

        // Add an elevated list control to the main layout
        this.lst = ui.addList(this.main, list, "Icon,Elevated", 0.8)

        // Set the elevation depth to 5
        this.lst.elevation = 5

        // Set the list label
        this.lst.label = "This is a label text"

        // Adds a callback handler when the list is touched
        this.lst.setOnTouch( this.onTouch )
    }

    onTouch(title, body, icon, action, index)
    {
        ui.showPopup(title + " : " +body, "Short")
    }
}
 */


/**
@sample Outlined List
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize the list items to show
        var list = [
            ["favorite", "Javascript", "This is a sample body text."],
            ["person", "Java", "This is a sample body text."],
            ["settings", "Python", "This is a sample body text."]
        ]

        // Add an outlined list control to the main layout
        this.lst = ui.addList(this.main, list, "Icon,Outlined", 0.8)
        
        // Set the list label
        this.lst.label = "My awesome list"

        // Set the corner radius to 12
        this.lst.cornerRadius = 12

        // Adds a callback handler when the list is touched
        this.lst.setOnTouch( this.onTouch )
    }

    onTouch(title, body, icon, action, index)
    {
        ui.showPopup(title + " : " +body, "Short")
    }
}
 */


/**
@sample Selectable List
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        var list = ["Javascript", "Java", "Python"]

        // Add a list control to the main layout
        this.lst = ui.addList(this.main, list, "", 0.6)

        // Set the list label
        this.lst.label = "Long press any item to select"

        // Add on long touch event and set the list to selectable
        this.lst.setOnLongTouch( this.onLongTouch   )

        // Add `onSelect` event listener to the list
        // and display the selected item in the popup
        this.lst.setOnSelect( this.onSelect )
    }

    onLongTouch()
    {
        this.lst.selectable = true
    }

    onSelect(title, i, value)
    {
        ui. showPopup(title + " : " + value)
    }
}
 */


/**
@sample Python Basic list
from hybrid import ui

def OnStart():
            main = ui.addLayout("main", "Linear", "VCenter,FillXY")

            list = ["Javascript", "Java", "Python"]

            lst = ui.addList(main, list,
 */


