// ------------- HEADER SECTION -------------


/** # addDropdown #
 * @abbrev dpd
 * @brief addDropdown
 * 
 * $$ dpd = ui.addDropdown(parent, list, options, width, height) $$ 
 * @param {obj} parent The layout where to add the dropdown.
 * @param {lst} list The list items to show.
 * @param {str} options A comma separated Dropdown options. Can be \n Colors: `Primary` `Secondary` `Default` \n `Variants`: `Contained` `Outlined` `Text` \n `Sizes`: `Small` `Medium` `Large` \n `Orientation`: `Horizontal` `Vertical` \n `Util`: `NoElevation`
 * @param {num} width Fraction of the screen width. [0-1]
 * @param {num} height Fraction of the screen height. [0-1]
 * @returns obj-Dropdown Component.
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Adds a dropdown component into your layout.

### Properties
These are the setter and getter properties for the addDropdown Component.
<smp noinl>absHeight:"num:'Returns the absolute height of the control in pixels.'"</smp>
<smp noinl>absLeft:"num:'Returns the absolute distance of the control from the left in pixels.'"</smp>
<smp noinl>absTop:"num:'Returns the absolute distance of the control from the top in pixels.'"</smp>
<smp noinl>absWidth:"num:'Returns the absolute width of the control in pixels.'"</smp>
<smp noinl>backColor:"str:'A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col>'"</smp>
<smp noinl>backImage:"str:'The path to your image file.'"</smp>
<smp noinl>border:"num:'Sets or returns the border thickness in pixels.'"</smp>
<smp noinl>borderColor:"str:'Sets or returns the border color. Color is in hexadecimal form <col nobox #fb8c00>#rrggbb</col>'"</smp>
<smp noinl>borderStyle:"str:'Sets or returns the border style. Values can be <col nobox #fb8c00>dotted</col>, <col nobox #fb8c00>dashed</col>, <col nobox #fb8c00>solid</col>, <col nobox #fb8c00>double</col>, <col nobox #fb8c00>groove</col>, <col nobox #fb8c00>ridge</col>, <col nobox #fb8c00>inset</col> and <col nobox #fb8c00>outset</col>. Default is <col nobox #fb8c00>solid</col>.'"</smp>
<smp noinl>color:"str:'Sets or returns the theme color. Values can be <col nobox #fb8c00>Default</col> <col nobox #fb8c00>Primary</col> or <col nobox #fb8c00>Secondary</col>'"</smp>
<smp noinl>cornerRadius:"num:'Sets or returns the corner radius in pixels.'"</smp>
<smp noinl>disabled:"bin:'Sets or returns the <col nobox #fb8c00>disabled</col> state of the control.'"</smp>
<smp noinl>fontFile:"str:'Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use.'"</smp>
<smp noinl>height:"num:'Sets or returns the height of the control as a fraction of the parent control.'"</smp>
<smp noinl>icon:"str:'Sets or returns the dropdown material icon font.'"</smp>
<smp noinl>isVisible:"bin:'Returns whether the control is visible or not.'"</smp>
<smp noinl>label:"str:'Sets or returns the default label of the dropdown.'"</smp>
<smp noinl>left:"num:'Returns the distance of the control from the left.'"</smp>
<smp noinl>list:"lst:'Sets or returns the dropdown list. You can also passed a comma separated string.'"</smp>
<smp noinl>margins:"lst:'Sets or returns the margin of the control. Works on controls with <col nobox #fb8c00>Linear</col> parent only. You can also pass a number to set equal margins for all sides.'"</smp>
<smp noinl>opacity:"num:'Sets or returns the opacity of the control.'"</smp>
<smp noinl>options:"str:'Sets or returns the <col nobox #fb8c00>options</col> of the control.'"</smp>
<smp noinl>orientation:"str:'Sets or returns the orientation of the dropdown buttongroup. Values can be <col nobox #fb8c00>horizontal</col> or <col nobox #fb8c00>vertical</col>'"</smp>
<smp noinl>padding:"lst:'Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.'"</smp>
<smp noinl>parent:"obj:'Returns the parent layout control.'"</smp>
<smp noinl>position:"obj:'Returns the position of the control. The returned object has <col nobox #fb8c00>left</col> <col nobox #fb8c00>top</col> <col nobox #fb8c00>right</col> and <col nobox #fb8c00>bottom</col> props.'"</smp>
<smp noinl>rotation:"num:'Sets or returns the angle of rotation in degrees.'"</smp>
<smp noinl>sizeVariant:"str:'Sets or returns the size variant of the dropdown button. Values can be <col nobox #fb8c00>Small</col> or <col nobox #fb8c00>Medium</col> or <col nobox #fb8c00>Large</col>'"</smp>
<smp noinl>textColor:"str:'Sets or returns the color of the text.'"</smp>
<smp noinl>textSize:"num:'Sets or returns the size of the text within the control.'"</smp>
<smp noinl>top:"num:'Returns the distance of the control from the top.'"</smp>
<smp noinl>type:"str:'Returns the type of the control.'"</smp>
<smp noinl>value:"str:'Sets or returns the value of the Dropdown. If you pass a number it will be treated as the index of the corresponding item in the choices.'"</smp>
<smp noinl>variant:"str:'Sets or returns the variant of the dropdown button. Values can be <col nobox #fb8c00>Contained</col> or <col nobox #fb8c00>Outlined</col> or <col nobox #fb8c00>Text</col>'"</smp>
<smp noinl>visibility:"str:'Sets or returns the visibility of the control.'"</smp>
<smp noinl>width:"num:'Sets or returns the width of the control as a fraction of the parent control.'"</smp>
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### setOnChange ###
 * @brief setOnChange
 * Adds a callback function on change event
 * $$ dpd.setOnChange(callback) $$
 * @param {fnc_json} callback {"pNames":["The","index"],"pTypes":["obj-item text.","num-The index of the corresponding item."]}
 */


/** ### setOnClose ###
 * @brief setOnClose
 * Adds a callback function on close event
 * $$ dpd.setOnClose(callback) $$
 * @param {fnc_json} callback {}
 */


/** ### setList ###
 * @brief setList
 * Sets the list items on the dropdown
 * $$ dpd.setList(val) $$
 * @param {lst} val The list of new items t display.
 */


/** ### setItemByIndex ###
 * @brief setItemByIndex
 * Updates the text of the corresponding item in the dropdown
 * $$ dpd.setItemByIndex(item, index) $$
 * @param {str} item The new item text.
 * @param {num} index The index of the item to update.
 */


/** ### getItemByIndex ###
 * @brief getItemByIndex
 * Returns a dropdown item by its corresponding index
 * $$ dpd.getItemByIndex(index) $$
 * @param {num} index The index of corresponding item.
 * @returns str
 */


/** ### setEnabled ###
 * @brief setEnabled
 * Enable or disable an item in the dropdown
 * $$ dpd.setEnabled(index, value) $$
 * @param {num} index The index of the item.
 * @param {bin} value Values can be `true` `false`.
 */


/** ### getEnabled ###
 * @brief getEnabled
 * Get the enabled state of an item in the dropdown menu
 * $$ dpd.getEnabled(index) $$
 * @param {num} index The index of the item.
 * @returns bin
 */


/** ### setEnabledByName ###
 * @brief setEnabledByName
 * Enable or disable an item in the dropdown
 * $$ dpd.setEnabledByName(name, value) $$
 * @param {str} name The name of the item.
 * @param {bin} value Values can be `true` `false`.
 */


/** ### getEnabledByName ###
 * @brief getEnabledByName
 * Get the enabled state of a menu item by its name
 * $$ dpd.getEnabledByName(name) $$
 * @param {str} name The name of the corresponding menu item.
 * @returns bin
 */


/** ### addItem ###
 * @brief addItem
 * Add or insert a menu item in the dropdown list
 * $$ dpd.addItem(name, index) $$
 * @param {str} name The name of the menu.
 * @param {num} index The index in which to insert the menu item.
 */


/** ### removeItemByIndex ###
 * @brief removeItemByIndex
 * Removes a menu item in the dropdown by its index
 * $$ dpd.removeItemByIndex(index) $$
 * @param {num} index The index of the menu item to remove.
 */


/** ### removeItemByName ###
 * @brief removeItemByName
 * Removes a menu item in the dropdown by its name
 * $$ dpd.removeItemByName(name) $$
 * @param {str} name The name of the menu item.
 */


/** ### shiftItem ###
 * @brief shiftItem
 * Removes the first item in the dropdown menu
 * $$ dpd.shiftItem() $$
 */


/** ### popItem ###
 * @brief popItem
 * Removes the last item in the dropdown menu
 * $$ dpd.popItem() $$
 */


/** ### setCornerRadius ###
 * @brief setCornerRadius
 * Sets the corner radius of the dropdown
 * $$ dpd.setCornerRadius(tl, tr, bl, br, mode) $$
 * @param {num} tl Top-left corner radius.
 * @param {num} tr Top-right corner radius.
 * @param {num} bl Bottom-left corner radius.
 * @param {num} br Bottom-right corner radius.
 * @param {str} mode Unit. Values are `px` `rem` or `%`.
 */


/** @extern setOnTouch */

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

/** @extern bringForward */

/** @extern sendBackward */


// ------------- SAMPLES ------------- 


    
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
        ui.showPopup( "Value is " + text )
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
    
            