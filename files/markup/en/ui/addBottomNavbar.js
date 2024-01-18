// ------------- HEADER SECTION -------------


/** # addBottomNavbar #
 * @abbrev bmn
 * @brief addBottomNavbar
 * 
 * $$ bmn = ui.addBottomNavbar(parent, navs, options?, width?, height?) $$ 
 * @param {obj} parent The parent layout where to add the BottomNavbar
 * @param {lst} navs An array whose elements are of the form `[ "Title", "Icon" ]`
 * @param {str_com} [options] one or a combination of the following: `Hidelabels`
 * @param {num} [width] Fraction of the screen width. [0-1]
 * @param {num} [height] Fraction of the screen height. [0-1]
 * @returns uio-BottomNavbar
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Adds a bottom navigation bar to your app.

An example of a navs array.
<js>
var navs = [
    [ "Favorites", "favorites" ],
    [ "Groups", "person" ],
    [ "Folder", "folder" ]
]
</js>
 ### Properties
These are the setter and getter properties for the addBottomNavbar Component.
/** ### absHeight ###
 * @prop
 * Returns the absolute height of the control in pixels.
 * @returns num
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### absLeft
 * @prop
 * Returns the absolute distance of the control from the left in pixels.
 * @returns num_pxl
 */

                    
/** ### absTop
 * @prop
 * Returns the absolute distance of the control from the top in pixels.
 * @returns num_pxl
 */

                    
/** ### absWidth
 * @prop
 * Returns the absolute width of the control in pixels.
 * @returns num_pxl
 */

                    
/** ### backColor
 * @prop
 * A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col>
 * @returns str_col
 */

                    
/** ### backImage
 * @prop
 * The path to your image file.
 * @returns str_pth
 */

                    
/** ### border
 * @prop
 * Sets or returns the border thickness in pixels.
 * @returns num
 */

                    
/** ### borderColor
 * @prop
 * Sets or returns the border color. Color is in hexadecimal form <col nobox #fb8c00>#rrggbb</col>
 * @returns str_col
 */

                    
/** ### borderStyle
 * @prop
 * Sets or returns the border style. Values can be <col nobox #fb8c00>dotted</col>, <col nobox #fb8c00>dashed</col>, <col nobox #fb8c00>solid</col>, <col nobox #fb8c00>double</col>, <col nobox #fb8c00>groove</col>, <col nobox #fb8c00>ridge</col>, <col nobox #fb8c00>inset</col> and <col nobox #fb8c00>outset</col>. Default is <col nobox #fb8c00>solid</col>.
 * @returns str
 */

                    
/** ### cornerRadius
 * @prop
 * Sets or returns the corner radius in pixels.
 * @returns num
 */

                    
/** ### disabled
 * @prop
 * Sets or returns whether the bottom navigation is disabled or enabled. All navigation actions must be disabled to return <col nobox #fb8c00>true</col>. Otherwise, it will return <col nobox #fb8c00>false</col>.
 * @returns bin
 */

                    
/** ### fontFile
 * @prop
 * Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use.
 * @returns str
 */

                    
/** ### height
 * @prop
 * Sets or returns the height of the control as a fraction of the parent control.
 * @returns num
 */

                    
/** ### iconColor
 * @prop
 * Sets or returns the icon color. You can pass color in a hexadecimal format or rgb format.
 * @returns str
 */

                    
/** ### iconSize
 * @prop
 * Sets or returns the icon font-size. You can also pass string values such as <col nobox #fb8c00>1.2rem</col> or <col nobox #fb8c00>18px</col>.
 * @returns num
 */

                    
/** ### isVisible
 * @prop
 * Returns whether the control is visible or not.
 * @returns bin
 */

                    
/** ### labels
 * @prop
 * Sets or returns a boolean whether the labels are shown or hidden on active state.
 * @returns bin
 */

                    
/** ### left
 * @prop
 * Returns the distance of the control from the left.
 * @returns num
 */

                    
/** ### list
 * @prop
 * Sets or returns the navigation actions array. See <col nobox #fb8c00>navs</col> params above for format.
 * @returns lst
 */

                    
/** ### margins
 * @prop
 * Sets or returns the margin of the control. Works on controls with <col nobox #fb8c00>Linear</col> parent only. You can also pass a number to set equal margins for all sides.
 * @returns num||lst_num
 */

                    
/** ### opacity
 * @prop
 * Sets or returns the opacity of the control.
 * @returns num
 */

                    
/** ### options
 * @prop
 * Sets or returns the <col nobox #fb8c00>options</col> of the control.
 * @returns str
 */

                    
/** ### padding
 * @prop
 * Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.
 * @returns num||lst_num
 */

                    
/** ### parent
 * @prop
 * Returns the parent layout control.
 * @returns uio-Layout
 */

                    
/** ### position
 * @prop
 * Returns the position of the control. The returned object has <col nobox #fb8c00>left</col> <col nobox #fb8c00>top</col> <col nobox #fb8c00>right</col> and <col nobox #fb8c00>bottom</col> props.
 * @returns obj-{ left:num, top:num, right:num, bottom:num }
 */

                    
/** ### rotation
 * @prop
 * Sets or returns the angle of rotation in degrees.
 * @returns num_deg
 */

                    
/** ### textColor
 * @prop
 * Sets or returns the color of the text.
 * @returns str
 */

                    
/** ### textSize
 * @prop
 * Sets or returns the size of the text within the control.
 * @returns num
 */

                    
/** ### top
 * @prop
 * Returns the distance of the control from the top.
 * @returns num
 */

                    
/** ### type
 * @prop
 * Returns the type of the control.
 * @returns str
 */

                    
/** ### value
 * @prop
 * Sets or returns the current value of the BottomNavbar. This is the index of the corresponding selected action.
 * @returns num
 */

                    
/** ### visibility
 * @prop
 * Sets or returns the visibility of the control.
 * @returns str
 */

                    
/** ### width
 * @prop
 * Sets or returns the width of the control as a fraction of the parent control.
 * @returns num
 */

                    
/** ### setOnContextMenu ###
 * @brief setOnContextMenu
 * Adds a callback function on right click
 * $$ bmn.setOnContextMenu(callback) $$
 * @param {fnc_json} callback {"pNames":["text","index","event"],"pTypes":["str-Bottom navigation action text.","num-Bottom navigation action index.","obj-The pointer event object."]}
 */


/** ### setList ###
 * @brief setList
 * Sets the navigation actions list
 * $$ bmn.setList(navs) $$
 * @param {lst} navs The navigation actions array. See `navs` param above for format.
 */


/** ### getList ###
 * @brief getList
 * Returns the navigation actions list
 * $$ bmn.getList() $$
 * @returns lst
 */


/** ### selectItem ###
 * @brief selectItem
 * Sets navigation action to active by its name. If you are providing a wrong name, no action will be active
 * $$ bmn.selectItem(name) $$
 * @param {str} name The name to be set to active
 */


/** ### selectItemByIndex ###
 * @brief selectItemByIndex
 * Sets a botttom navigation action to active by its index
 * $$ bmn.selectItemByIndex(index) $$
 * @param {num} index The index of the bottom navigation action to be selected
 */


/** ### clearSelection ###
 * @brief clearSelection
 * Clears the selected navigation action
 * $$ bmn.clearSelection() $$
 */


/** ### setItemByIndex ###
 * @brief setItemByIndex
 * Updates a navigation action by its index
 * $$ bmn.setItemByIndex(index, newName, newIcon) $$
 * @param {num} index The index to update
 * @param {str} newName The name of the navigation action
 * @param {str} newIcon Material icon
 */


/** ### setIcon ###
 * @brief setIcon
 * Updates the icon of the given index
 * $$ bmn.setIcon(index, newIcon) $$
 * @param {num} index The index of the navigation action to update
 * @param {str} newIcon Material icon
 */


/** ### addItem ###
 * @brief addItem
 * Adds a navigation action
 * $$ bmn.addItem(name, icon, index) $$
 * @param {str} name The name of the navigation action
 * @param {str} icon Material icon
 * @param {num} index The index in which to add the action.
 */


/** ### removeItemByIndex ###
 * @brief removeItemByIndex
 * Removes a navigation action by its given index
 * $$ bmn.removeItemByIndex(index) $$
 * @param {num} index The index of the navigation action to be remove
 */


/** ### removeItemByName ###
 * @brief removeItemByName
 * Removes a navigation action by its given name
 * $$ bmn.removeItemByName(name) $$
 * @param {str} name The name of the navigation action to be remove.
 */


/** ### shiftItem ###
 * @brief shiftItem
 * Removes the first navigation action
 * $$ bmn.shiftItem() $$
 */


/** ### popItem ###
 * @brief popItem
 * Removes the last navigation action
 * $$ bmn.popItem() $$
 */


/** ### setOnChange ###
 * @brief setOnChange
 * Sets a callback function to execute when bottom navbar value changes
 * $$ bmn.setOnChange(callback) $$
 * @param {fnc_json} callback {"pNames":["text","index"],"pTypes":["str-Bottom navigation action text.","num-Bottom navigation action index."]}
 */


/** ### setEnabled ###
 * @brief setEnabled
 * Enable or disable a bottom navigation action. If you want to disable the component, use the `disable` property instead
 * $$ bmn.setEnabled(index, value) $$
 * @param {num} index The index of the navigation action.
 * @param {bin} value Values can be `true` or `false`.
 */


/** ### getEnabled ###
 * @brief getEnabled
 * Get the enabled state of a navigation action
 * $$ bmn.getEnabled(index) $$
 * @param {num} index The index of the navigation action.
 * @returns bin
 */


/** ### setEnabledByName ###
 * @brief setEnabledByName
 * Enabled or disable a bottom navigation action by its name
 * $$ bmn.setEnabledByName(name, value) $$
 * @param {str} name The name of the bottom navigation action.
 * @param {bin} value Values can be `true` or `false`
 */


/** ### getEnabledByName ###
 * @brief getEnabledByName
 * Get the enabled state of the bottom navigation action by its name
 * $$ bmn.getEnabledByName(name) $$
 * @param {str} name The name of the bottom navigation action.
 * @returns bin
 */


/** ### showLabels ###
 * @brief showLabels
 * Shows the text label of the bottom navigation action
 * $$ bmn.showLabels() $$
 */


/** ### hideLabels ###
 * @brief hideLabels
 * Hides the text label of the bottom navigation action
 * $$ bmn.hideLabels() $$
 */


/** @extern setOnTouch */

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


// ------------- SAMPLES ------------- 


    
/**
@sample Sample navs array.
var navs = [
        [ "Favorites", "favorites" ],
        [ "Groups", "person" ],
        [ "Folder", "folder" ]
    ]
 */
    
            
    
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
    
            