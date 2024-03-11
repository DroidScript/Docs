/** # BottomNavbar
 * @abbrev bmn
 * The Bottom Navigation Bar (BottomNavBar) is a key element in mobile user interface design, typically placed at the bottom of the screen.
 * @img(img1.png)
 * @img(img2.png)
 * @jdocs In Material Design, it features navigation icons or labels for quick access to app sections. It enhances user navigation, maintaining a consistent and ergonomic design across mobile applications. The Bottom Navigation Bar provides a visually clear and accessible way for users to switch between primary destinations or views. Add a bottom navigation bar into your app using the `addBottomNavbar` method like this:
 * $$ bmn = ui.addBottomNavbar(parent, navs, options, width, height) $$
 * @param {uio-Layout} parent The parent layout where to add the BottomNavbar
 * @param {Array} navs An array whose elements are of the form `[ "Title", "Icon" ]`
 * @param {String} [options] A comma separated options.\nPosition: "Fixed", "Static"\nLabel: `Hidelabels`
 * @param {Number} [width] Fraction of the screen width `[0-1]`
 * @param {Number} [height] Fraction of the screen height `[0-1]`
 * @returns uio-BottomNavbar
 */


/**
@description
An example of a navs array.
<js>
var navs = [
    [ "Favorites", "favorites" ],
    [ "Groups", "person" ],
    [ "Folder", "folder" ]
]
</js>
 */


    /** ## Properties
     * Here are the available setter and/or getter properties of the BottomNavbar Component.
     * @prop {Boolean} labels Sets or returns a boolean whether the labels are shown or hidden on active state.
     * @prop {Array} list Sets or returns the navigation actions array. See `navs` params above for format.
     * @prop {Boolean} disabled Sets or returns whether the bottom navigation is disabled or enabled. All navigation actions must be disabled to return `true`. Otherwise, it will return `false`.
     * @prop {Number} value Sets or returns the current value of the BottomNavbar. This is the index of the corresponding selected action.
     * @prop {Number} iconSize Sets or returns the icon font-size. You can also pass string values such as `1.2rem` or `18px`.
     * @prop {String} iconColor Sets or returns the icon color. You can pass color in a hexadecimal format or rgb format.
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
	 * Here are the methods available for BottomNavbar Component
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
     * Adds a callback handler when the BottomNavbar item is touch.
     * $$ bmn.setOnTouch( callback ) $$
     * @param {Function} callback The callback function to be called. ---> @arg {String} name The name of the item. @arg {Number} value The value or index of the item. @arg {Object} pos The position of the touch event.
     */


    /** ### setOnContextMenu
     * Adds a callback function on right click.
     * $$ bmn.setOnContextMenu( callback ) $$
     * @param {Function} callback The callback function to be called on context menu event or right click event. ---> @arg {String} text Bottom navigation action text. @arg {Number} index Bottom navigation action index. @arg {Object} pos The position of the touch event.
     */


    /** ### setList
     * Sets the navigation actions list.
     * $$ bmn.setList( navs ) $$
     * @param {Array} navs The navigation actions array. See `navs` param above for format.
     */


    /** ### getList
     * Returns the navigation actions list.
     * @returns Array
     */


    /** ### selectItem
     * Sets navigation action to active by its name. If you are providing a wrong name, no action will be active.
     * $$ bmn.selectItem( name ) $$
     * @param {String} name The name to be set to active
     */


    /** ### selectItemByIndex
     * Sets a botttom navigation action to active by its index
     * $$ bmn.selectItemByIndex( index ) $$
     * @param {Number} index The index of the bottom navigation action to be selected
     */


    /** ### clearSelection
     * Clears the selected navigation action.
     * $$ bmn.clearSelection() $$
     */


    /** ### setItemByIndex
     * Updates a navigation action by its index.
     * $$ bmn.setItemByIndex( index, newName, newIcon ) $$
     * @param {Number} index The index to update
     * @param {String} newName The name of the navigation action
     * @param {String} newIcon Material icon
     */


    /** ### setIcon
     * Updates the icon of the given index.
     * $$ bmn.setIcon( index, newIcon ) $$
     * @param {Number} index The index of the navigation action to update
     * @param {String} newIcon Material icon
     */


    /** ### addItem
     * Adds a navigation action
     * $$ bmn.addItem( name, icon ) $$
     * @param {String} name The name of the navigation action
     * @param {String} icon Material icon
     * @param {Number} index The index in which to add the action.
     */


    /** ### removeItemByIndex
     * Removes a navigation action by its given index.
     * $$ bmn.removeItemByIndex( index ) $$
     * @param {Number} index The index of the navigation action to be remove
     */


    /** ### removeItemByName
     * Removes a navigation action by its given name.
     * $$ bmn.removeItemByName( index ) $$
     * @param {String} name The name of the navigation action to be remove.
     * @@ This will work only on the latest browsers.
     */


    /** ### shiftItem
     * Removes the first navigation action. This will return the item being removed.
     * $$ bmn.shiftItem() $$
     */


    /** ### popItem
     * Removes the last navigation action. This will return the item being removed.
     * $$ bmn.popItem() $$
     */


    /** ### setOnChange
     * Sets a callback function to execute when bottom navbar value changes.
     * $$ bmn.setOnChange( callback ) $$
     * @param {Function} callback A callback function. ---> @arg {String} text Bottom navigation action text. @arg {Number} index Bottom navigation action index.
     */


    /** ### setEnabled
	 * Enable or disable a bottom navigation action. If you want to disable the component, use the `disable` property instead.
	 * $$ bmn.setEnabled( index, value ) $$
	 * @param {Number} index The index of the navigation action.
	 * @param {Boolean} value Values can be `true` or `false`.
	 */


    /** ### getEnabled
     * Get the enabled state of a navigation action.
     * @param {Number} index The index of the navigation action.
     * @returns Boolean
     */


    /** ### setEnabledByName
     * Enabled or disable a bottom navigation action by its name.
     * $$ bmn.setEnabledByName(name, value) $$
     * @param {String} name The name of the bottom navigation action.
     * @param {Boolean} value Values can be `true` or `false`
     */


    /** ### getEnabledByName
     * Get the enabled state of the bottom navigation action by its name.
     * $$ bmn. getEnabledByName( name ) $$
     * @param {String} name The name of the bottom navigation action.
     * @returns Boolean
     */


    /** ### showLabels
     * Shows the text label of the bottom navigation action.
     * $$ bmn.showLabels() $$
     */


    /** ### hideLabels
     * Hides the text label of the bottom navigation action.
     * $$ bmn.hideLabels() $$
     */


/* --- parent_methods here ----- */


/* ## Examples ## */


/**
@sample Basic
class Main extends App
{
    onStart()
    {
        // Creates a layout with objects verticaly centered.
        this.main = ui.addLayout( "main", "Linear", "VCenter", 1, 1 )
        this.main.setChildMargins( 0.01, 0.01, 0.01, 0.01 )

        var navs = [
            [ "Favorites", "favorites" ],
            [ "Groups", "person" ],
            [ "Folder", "folder" ]
        ]

        // Creates a BottomNavbar control
        this.bmn = ui.addBottomNavbar(this.main, navs, "", 1)

        // Add a callback handler for `onChange` event
        this.bmn.setOnChange( this.onChange )
    }

    onChange(text, index)
    {
        ui.showPopup( text )
    }
}
 */


/**
@sample Hide or show labels
class Main extends App
{
    onStart()
    {
        // Creates a layout with objects verticaly centered.
        this.main = ui.addLayout( "main", "Linear", "VCenter", 1, 1 )
        this.main.setChildMargins( 0.01, 0.01, 0.01, 0.01 )

        var navs = [
            [ "Favorites", "favorites" ],
            [ "Groups", "person" ],
            [ "Folder", "folder" ]
        ]

        // Creates a BottomNavbar control
        this.bmn = ui.addBottomNavbar(this.main, navs, "", 1)

        // Add a callback handler for `onChange` event
        this.bmn.setOnChange( this.onChange )

        // Button to show the labels
        this.btn = ui.addButton(this.main, "Show Labels")
        this.btn.setOnTouch( this.showLabels )

        // Button to hide the labels
        this.btn1 = ui.addButton(this.main, "Hide Labels")
        this.btn1.setOnTouch( this.hideLabels )
    }

    showLabels( )
    {
        this.bmn.showLabels()
    }

    hideLabels()
    {
        this.bmn.hideLabels()
    }

    onChange(text, index)
    {
        ui.showPopup( text )
    }
}
 */


/**
@sample Custom styles
class Main extends App
{
    onStart()
    {
        // Creates a layout with objects verticaly centered.
        this.main = ui.addLayout("main", "Linear", "VCenter", 1, 1)

        var navs = [
            [ "Favorites", "favorites" ],
            [ "Groups", "person" ],
            [ "Folder", "folder" ]
        ]

        // Creates a BottomNavbar control
        this.bmn = ui.addBottomNavbar(this.main, navs, "", 1)

        // Hide the labels when not active
        this.bmn.labels = false

        // Set the color of the text and icons
        this.bmn.textColor = "#673ab7"
        this.bmn.iconColor = "#673ab7"

        // Set the icon size
        this.bmn.iconSize = "2rem"
    }
}
 */


/**
@sample Python Sample navs array.
from native import cfg

navs = [
    ["Favorites", "favorites"],
    ["Groups", "person"],
    ["Folder", "folder"]
]
 */


/**
@sample Python Basic
from hybrid import ui

def OnStart():
    # Creates a layout with objects vertically centered
    main = ui.addLayout("main", "Linear", "VCenter", 1, 1)
    main.setChildMargins(0.01, 0.01, 0.01, 0.01)

    navs = [
        ["Favorites", "favorites"],
        ["Groups", "person"],
        ["Folder", "folder"]
    ]

    # Creates a BottomNavbar control
    bmn = ui.addBottomNavbar(main, navs, "", 1)

    # Add a callback handler for `onChange` event
    bmn.setOnChange(onChange)

def onChange(text, index):
    ui.showPopup(text)
 */


/**
@sample Python Hide or show labels
from hybrid import ui

def OnStart():
    global bmn
    # Creates a layout with objects vertically centered
    main = ui.addLayout("main", "Linear", "VCenter", 1, 1)
    main.setChildMargins(0.01, 0.01, 0.01, 0.01)

    navs = [
        ["Favorites", "favorites"],
        ["Groups", "person"],
        ["Folder", "folder"]
    ]

    # Creates a BottomNavbar control
    bmn = ui.addBottomNavbar(main, navs, "", 1)

    # Add a callback handler for `onChange` event
    bmn.setOnChange(onChange)

    # Button to show the labels
    btn = ui.addButton(main, "Show Labels")
    btn.setOnTouch(showLabels)

    # Button to hide the labels
    btn1 = ui.addButton(main, "Hide Labels")
    btn1.setOnTouch(hideLabels)

def showLabels(event):
    bmn.showLabels()

def hideLabels(event):
    bmn.hideLabels()

def onChange(text, index):
    ui.showPopup(text)
 */


/**
@sample Python Custom styles
from hybrid import ui

def OnStart():
    # Creates a layout with objects vertically centered
    main = ui.addLayout("main", "Linear", "VCenter", 1, 1)

    navs = [
        ["Favorites", "favorites"],
        ["Groups", "person"],
        ["Folder", "folder"]
    ]

    # Creates a BottomNavbar control
    bmn = ui.addBottomNavbar(main, navs, "", 1)

    # Hide the labels when not active
    bmn.labels = False

    # Set the color of the text and icons
    bmn.textColor = "#673ab7"
    bmn.iconColor = "#673ab7"

    # Set the icon size
    bmn.iconSize = "2rem"
 */


