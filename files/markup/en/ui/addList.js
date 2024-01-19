// ------------- HEADER SECTION -------------


/** # addList #
 * @abbrev lst
 * @brief addList
 *
 * $$ lst = ui.addList(parent, list?, options?, width?, height?) $$
 * @param {obj} parent The parent layout
 * @param {lst} [list] An array of arrays. Each element is of the form `[icon, title, body, secondary]`
 * @param {str_com} [options] Media: `Icon` `Avatar` \n `Styling`: `Dense` `Inset` \n `Util`: `Selectable` `Divider` `SecondaryText`, `NoRipple` to disable ripple effect
 * @param {num} [width] Fraction of the screen width. [0-1]
 * @param {num} [height] Fraction of the screen height. [0-1]
 * @returns uio-List
*/


// ------------- LONG DESCRIPTION -------------

/** @Description
Lists are continuous, vertical indexes of text or images. They are used to group together related pieces of data or informations to highlight association with each other and easy to read. They are frequently used for navigation as well as displaying general content.

 Add a list to your app by calling the <col nobox #4c4>addList</col> method of the <col nobox #4c4>ui</col> object.

 If <col nobox #4c4>Icon</col> option is passed, the list must be of the form <col nobox #4c4>[icon, title, body, secondary]</col>. To display an image avatar, passed and additional <col nobox #4c4>Avatar</col> option and the list must be of the form <col nobox #4c4>[image, title, body, secondary]</col>

 If no <col nobox #4c4>Icon</col> option is passed, the list is treated as <col nobox #4c4>[title, body, secondary]</col> by default.

 The secondary action is an icon button by default, to display as a text passed <col nobox #4c4>secondarytext</col> option.

 Adding a <col nobox #4c4>selectable</col> list will disregard the <col nobox #4c4>icon</col> option.
 */



// ------------- VISIBLE METHODS & PROPERTIES -------------


/** @extern absHeight */

/** @extern absLeft */

/** @extern absTop */

/** @extern absWidth */

/** ### avatarSize
 * @prop
 * Sets or returns the size of the avatar. Values can be <col nobox #fb8c00>Small</col> <col nobox #fb8c00>Medium</col> <col nobox #fb8c00>Large</col>
 * @returns str
 */


/** ### avatarVariant
 * @prop
 * Sets or returns the variant of the avatar. Values can be <col nobox #fb8c00>Square</col> <col nobox #fb8c00>Round</col> or <col nobox #fb8c00>Circle</col>
 * @returns str
 */


/** ### backColor
 * @prop
 * Sets or returns the background color in a hexadecimal format.
 * @returns str
 */


/** @extern backImage */

/** @extern border */

/** @extern borderColor */

/** @extern borderStyle */

/** ### checkboxColor
 * @prop
 * Sets or returns the theme color of the checkbox when <col nobox #fb8c00>Selectable</col> option is enabled. Vaues can be <col nobox #fb8c00>Default</col> <col nobox #fb8c00>Primary</col> or <col nobox #fb8c00>Secondary</col>
 * @returns str
 */


/** @extern cornerRadius */

/** @extern disabled */

/** ### elevation
 * @prop
 * Sets or returns the depth of the list container. Values range from 0 to 24.
 * @returns num
 */


/** @extern fontFile */

/** @extern height */

/** ### iconColor
 * @prop
 * Sets or returns the icon color in a hexadecimal format.
 * @returns str
 */


/** ### iconSize
 * @prop
 * Sets or returns the size of the icon text.
 * @returns num
 */


/** @extern isVisible */

/** ### itemPadding
 * @prop
 * Sets or returns the padding of each list item. See also <col nobox #fb8c00>setItemPadding</col> method.
 * @returns lst
 */


/** @extern label */

/** @extern left */

/** @extern margins */

/** @extern opacity */

/** @extern options */

/** @extern outlined */

/** @extern padding */

/** @extern parent */

/** @extern position */

/** @extern rotation */

/** ### selectable
 * @prop
 * Sets or returns a boolean whether the list is selectable or not.
 * @returns bin
 */


/** @extern textColor */

/** ### textColor1
 * @prop
 * Sets or returns the color of the title text in hexadecimal format.
 * @returns str
 */


/** ### textColor2
 * @prop
 * Sets or returns the color of the body text in hexadecimal format.
 * @returns str
 */


/** @extern textSize */

/** ### textSize1
 * @prop
 * Sets or returns the size of the title text.
 * @returns num
 */


/** ### textSize2
 * @prop
 * Sets or returns the size of the body text.
 * @returns num
 */


/** @extern top */

/** @extern type */

/** @extern visibility */

/** @extern width */

/** ### addItem ###
 * @brief addItem
 * Adds an item in the list
 * $$ lst.addItem(title, body?, image?, index?) $$
 * @param {str} title The title of the item.
 * @param {str} [body] The text description of the item.
 * @param {str} [image] A material icon or image file path.
 * @param {num} [index] The index in which to add or insert the item.
 */


/** ### setOnTouch ###
 * @brief setOnTouch
 * Adds a callback function when the list item is click
 * $$ lst.setOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["title","body","icon","index","event"],"pTypes":["str-The list item title text.","str-The list item body text.","str-The list item icon.","num-The list item index.","obj-The pointer event object."]}
 */


/** ### setOnSelect ###
 * @brief setOnSelect
 * Sets a callback handler when an item in the list is selected
 * $$ lst.setOnSelect(callback) $$
 * @param {fnc_json} callback {"pNames":["title","index"],"pTypes":["str-The list item title text.","num-The index of the selected list item."]}
 */


/** ### setOnAction ###
 * @brief setOnAction
 * Sets a callback handler when an action icon is click
 * $$ lst.setOnAction(callback) $$
 * @param {fnc_json} callback {"pNames":["icon","index"],"pTypes":["str-The icon text.","num-The index of the corresponding secondary action."]}
 */


/** ### setOnContextMenu ###
 * @brief setOnContextMenu
 * Adds a callback function on right click
 * $$ lst.setOnContextMenu(callback) $$
 * @param {fnc_json} callback {"pNames":["title","body","icon","index","event"],"pTypes":["str-The list item title text.","str-The list item body text.","str-The list item icon.","num-The list item index.","obj-The pointer event object."]}
 */


/** ### getSelectedItems ###
 * @brief getSelectedItems
 * Returns an array of indexes of the selected items
 * $$ lst.getSelectedItems() $$
 * @returns lst_num
 */


/** ### getSelectedTitles ###
 * @brief getSelectedTitles
 * Returns an array of titles of selected items
 * $$ lst.getSelectedTitles() $$
 * @returns lst-[ titles:str ]
 */


/** ### setList ###
 * @brief setList
 * Updtes the list
 * $$ lst.setList(list) $$
 * @param {lst} list A comma separated list of items or an array. See the list format above.
 */


/** ### setSelectable ###
 * @brief setSelectable
 * Make the list selectable or not
 * $$ lst.setSelectable(selectable) $$
 * @param {bin} selectable If true, make the list selectable. Otherwise, list is not selectable
 */


/** ### setItemByIndex ###
 * @brief setItemByIndex
 * Change the content of an item in a list
 * $$ lst.setItemByIndex(index, newTitle, newBody?, newImage?) $$
 * @param {num} index The index of the item to update
 * @param {str} newTitle The new title of the item
 * @param {str} [newBody] The new body text
 * @param {str} [newImage] The new icon or image
 */


/** ### getItemByIndex ###
 * @brief getItemByIndex
 * Get the item in a list by its corresponding index
 * $$ lst.getItemByIndex(index) $$
 * @param {num} index Returns the item in a list as an object of the following format { title, body, image }
 * @returns obj-{ title:str, body:str, image:str }
 */


/** ### setItem ###
 * @brief setItem
 * Updates an item in the list
 * $$ lst.setItem(title, newTitle, newBody?, newImage?) $$
 * @param {str} title The title of the list item to update.
 * @param {str} newTitle The new title of the list item.
 * @param {str} [newBody] The new description of the list item.
 * @param {str} [newImage] A material icon font or image file path.
 */


/** ### getItem ###
 * @brief getItem
 * Get the item in the list by its correspding title
 * $$ lst.getItem(title) $$
 * @param {str} title Returns the item in a list as an object of the following format { title, body, image }
 * @returns obj-{ title:str, body:str, image:str }
 */


/** ### removeItemByIndex ###
 * @brief removeItemByIndex
 * Removes an element from the list
 * $$ lst.removeItemByIndex(index) $$
 * @param {num} index The index of the item to remove
 */


/** ### removeItemByName ###
 * @brief removeItemByName
 * Removes an item in the list by its title
 * $$ lst.removeItemByName(name) $$
 * @param {str} name The title of the list to remove.
 */


/** ### shiftItem ###
 * @brief shiftItem
 * Removes the first item the list
 * $$ lst.shiftItem() $$
 */


/** ### popItem ###
 * @brief popItem
 * Removes the last item in the list
 * $$ lst.popItem() $$
 */


/** ### deselectAll ###
 * @brief deselectAll
 * Clears all selection in the list if the list is selectable
 * $$ lst.deselectAll() $$
 */


/** ### selectItemByIndex ###
 * @brief selectItemByIndex
 * Selects an item in the list by its index and marked the checkbox. List must be selectable
 * $$ lst.selectItemByIndex(index) $$
 * @param {num} index The index to be selected.
 */


/** ### setTitleText ###
 * @brief setTitleText
 * Sets a new title text to a corresponding item in a list
 * $$ lst.setTitleText(index, title) $$
 * @param {num} index The index of the corresponding list item.
 * @param {str} title The new title text.
 */


/** ### setBodyText ###
 * @brief setBodyText
 * Sets a new secondary text to a corresponding item in a list
 * $$ lst.setBodyText(index, newText) $$
 * @param {num} index The index of the list whose secondary text to be changed.
 * @param {str} newText The new secondary text.
 */


/** ### setIcon ###
 * @brief setIcon
 * Updates an icon in a list by its corresponding index
 * $$ lst.setIcon(index, icon) $$
 * @param {num} index The index of the corresponding list item.
 * @param {str} icon Material icon font.
 */


/** ### setCornerRadius ###
 * @brief setCornerRadius
 * Sets the corner radius of the list container
 * $$ lst.setCornerRadius(tl?, tr?, bl?, br?, mode='px') $$
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
        var avatar = "https://static.wikia.nocookie.net/heroes-and-villain/images/7/7e/Bilbo_BOFA_12.png/revision/latest/scale-to-width-down/350?cb=20190320192007"
        
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
