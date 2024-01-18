// ------------- HEADER SECTION -------------


/** # addButtonGroup #
 * @abbrev btg
 * @brief addButtonGroup
 * Adds a button group into your app.
 * $$ btg = ui.addButtonGroup(parent, list?, options?, width?, height?) $$ 
 * @param {obj} parent The parent layout where to add the ButtonGroup
 * @param {lst} [list] The item to be displayed on the buttn group.
 * @param {str_com} [options] one or a combination of the following: \n Variant: `Contained` `Outlined` `Text` `Default` \n `Color`: `Primary` `Secondary` `Default` \n `Size`: `Small` `Medium` `Large` \n `Orientation`: `Horizontal` `Vertical` \n `Util`: `Icon` `NoElevation`
 * @param {num} [width] Fraction of the parent width. [0-1]
 * @param {num} [height] Fraction of the parent height. [0-1]
 * @returns uio-ButtonGroup
*/




// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### absHeight
 * @prop
 * Returns the absolute height of the control in pixels.
 * @returns num_pxl
 */

                    
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

                    
/** ### color
 * @prop
 * Sets or returns the theme color of the button. Values can be <col nobox #fb8c00>Default</col> <col nobox #fb8c00>Primary</col> or <col nobox #fb8c00>Secondary</col>
 * @returns str
 */

                    
/** ### cornerRadius
 * @prop
 * Sets or returns the corner radius in pixels.
 * @returns num
 */

                    
/** ### disabled
 * @prop
 * Sets or returns the <col nobox #fb8c00>disabled</col> state of the control.
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

                    
/** ### isVisible
 * @prop
 * Returns whether the control is visible or not.
 * @returns bin
 */

                    
/** ### left
 * @prop
 * Returns the distance of the control from the left.
 * @returns num
 */

                    
/** ### list
 * @prop
 * Sets or returns the list items of the button group.
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

                    
/** ### orientation
 * @prop
 * Sets or returns the orientation of the button group. Can be <col nobox #fb8c00>horizontal</col> or <col nobox #fb8c00>vertical</col>
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

                    
/** ### sizeVariant
 * @prop
 * Sets or returns the size variant. Values can be <col nobox #fb8c00>small</col> <col nobox #fb8c00>medium</col> or <col nobox #fb8c00>large</col>
 * @returns str
 */

                    
/** ### textColor
 * @prop
 * Sets or returns the color of the button text.
 * @returns str
 */

                    
/** ### textSize
 * @prop
 * Sets or returns the font size of the button text.
 * @returns num
 */

                    
/** ### toolTipPosition
 * @prop
 * Sets or returns the position of the tooltip. Values can be <col nobox #fb8c00>left</col> <col nobox #fb8c00>top</col> <col nobox #fb8c00>right</col> or <col nobox #fb8c00>bottom</col>
 * @returns str
 */

                    
/** ### toolTips
 * @prop
 * Sets or returns the list of tooltip titles.
 * @returns lst
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

                    
/** ### variant
 * @prop
 * Sets or returns the variant. Values can be <col nobox #fb8c00>Contained</col> <col nobox #fb8c00>Outlined</col> or <col nobox #fb8c00>Text</col>
 * @returns str
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

                    
/** ### setOnTouch ###
 * @brief setOnTouch
 * Adds a callback handler when the button is touch
 * $$ btg.setOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["text","index","event"],"pTypes":["str-The button text.","num-The index of the correspoding button.","obj-The pointer click event object."]}
 */


/** ### setOnContextMenu ###
 * @brief setOnContextMenu
 * Adds a callback function on right click
 * $$ btg.setOnContextMenu(callback) $$
 * @param {fnc_json} callback {"pNames":["text","index","event"],"pTypes":["str-Button text.","num-The index of the corresponding button.","obj-The pointer event object."]}
 */


/** ### setList ###
 * @brief setList
 * Sets the new list of the button group
 * $$ btg.setList(items) $$
 * @param {str} items A comma separated list or an array
 */


/** ### setItemByIndex ###
 * @brief setItemByIndex
 * Sets a new text for the item in the button group
 * $$ btg.setItemByIndex(item, index) $$
 * @param {str} item The new text
 * @param {num} index The index of the item.
 */


/** ### addItem ###
 * @brief addItem
 * Adds an additional item in the button group
 * $$ btg.addItem(item) $$
 * @param {str} item The additional item.
 */


/** ### removeItemIndex ###
 * @brief removeItemIndex
 * Removes an item in the button group by its index
 * $$ btg.removeItemIndex(index) $$
 * @param {num} index The index of the item to be remove.
 */


/** ### removeItemByName ###
 * @brief removeItemByName
 * Removes an item in the button group by its name
 * $$ btg.removeItemByName(name) $$
 * @param {str} name The name of the item to be remove.
 */


/** ### popItem ###
 * @brief popItem
 * Removes the last item of the button group
 * $$ btg.popItem() $$
 */


/** ### shiftItem ###
 * @brief shiftItem
 * Removes the first item in the button group
 * $$ btg.shiftItem() $$
 */


/** ### setToolTip ###
 * @brief setToolTip
 * Adds a tooltip to the ButtonGroup items
 * $$ btg.setToolTip(titles, pos='top') $$
 * @param {lst} titles The titles for each item in the ButtonGroup.
 * @param {str} [pos='top'] The positio of the tooltip. \n Can be `top` `left` `right` `bottom` `bottom-end` `bottom-start` `left-end` `left-start` `right-end` `right-start` `top-end` `top-start`
 */


/** ### enableElevation ###
 * @brief enableElevation
 * Enable of disable the elevation of the button group
 * $$ btg.enableElevation(enable) $$
 * @param {bin} enable `true` or `false`
 */


/** ### setEnabled ###
 * @brief setEnabled
 * Enable or disable a button item in the button group
 * $$ btg.setEnabled(index, value) $$
 * @param {num} index The index of the button item.
 * @param {bin} value Values can be `true` or `false`.
 */


/** ### getEnabled ###
 * @brief getEnabled
 * Get the enabled state of the button item in the button group
 * $$ btg.getEnabled(index) $$
 * @param {num} index The index of the button item in the button group.
 * @returns bin
 */


/** ### setEnabledByName ###
 * @brief setEnabledByName
 * Enable or disable a button item by its name
 * $$ btg.setEnabledByName(name, value) $$
 * @param {str} name The button text.
 * @param {bin} value Values can be `true` or `false`.
 */


/** ### getEnabledByName ###
 * @brief getEnabledByName
 * Get the enabled state of button item in the button group
 * $$ btg.getEnabledByName(name) $$
 * @param {str} name The button text.
 * @returns bin
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

/** @extern setCornerRadius */

/** @extern bringForward */

/** @extern sendBackward */


// ------------- SAMPLES ------------- 


    
/**
@sample Basic ButtonGroup
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with object vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter", 1, 1)

        // Initialize button items
        var buttons = ["Button 1", "Button 2", "Button 3"]

        // Add a ButtonGroup control to the main layout
        this.btg = ui.addButtonGroup(this.main, buttons, "", 0.9)

        // Add a callback handler for `onTouch` event
        this.btg.setOnTouch( this.onTouch )
    }

    onTouch(text, index)
    {
        // Display the touched button text
        ui.showPopup( text )
    }
}
 */
    
            
    
/**
@sample ButtonGroup variants
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with object vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter", 1, 1)
        this.main.setChildMargins(0, 0.05, 0, 0.05)

        var buttons = ["Button 1", "Button 2", "Button 3"]

        // Add a contained ButtonGroup to the main layout
        this.btg1 = ui.addButtonGroup(this.main, buttons, "Contained,Primary", 0.9)
        this.btg1.setOnTouch( this.onTouch )

        // Add an outlined ButtonGroup to the main layout
        this.btg2 = ui.addButtonGroup(this.main, buttons, "Outlined,Primary", 0.9)
        this.btg2.setOnTouch( this.onTouch )

        // Add a text ButtonGroup to the main layout
        this.btg3 = ui.addButtonGroup(this.main, buttons, "Text,Primary", 0.9)
        this.btg3.setOnTouch( this.onTouch )
    }

    onTouch(text, index)
    {
        // Display the touched button text
        ui.showPopup( text )
    }
}
 */
    
            
    
/**
@sample ButtonGroup colors
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with object vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter", 1, 1)
        this.main.setChildMargins(0, 0.05, 0, 0.05)

        // Initialize button items
        var buttons = ["Button 1", "Button 2", "Button 3"]

        // Add defualt ButtonGroup to the main layout
        this.btg1 = ui.addButtonGroup(this.main, buttons, "Default", 0.9)
        this.btg1.setOnTouch( this.onTouch )

        // Add primary ButtonGroup to the main layout
        this.btg2 = ui.addButtonGroup(this.main, buttons, "Primary", 0.9)
        this.btg2.setOnTouch( this.onTouch )

        // Add secondary ButtonGroup to the main layout
        this.btg3 = ui.addButtonGroup(this.main, buttons, "Secondary", 0.9)
        this.btg3.setOnTouch( this.onTouch )
    }

    onTouch(text, index)
    {
        // Display the touched button text
        ui.showPopup( text )
    }
}
 */
    
            
    
/**
@sample ButtonGroup sizes
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with object vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter", 1, 1)
        this.main.setChildMargins(0, 0.05, 0, 0.05)

        // Initialize button items
        var buttons = ["Button 1", "Button 2", "Button 3"]

        // Add small size ButtonGroup to the main layout
        this.btg1 = ui.addButtonGroup(this.main, buttons, "Contained,Primary,Small", 0.9)
        this.btg1.setOnTouch( this.onTouch )

        // Add medium/default size ButtonGroup to the main layout
        this.btg2 = ui.addButtonGroup(this.main, buttons, "Contained,Primary,Medium", 0.9)
        this.btg2.setOnTouch( this.onTouch )

        // Add large size ButtonGroup to the main layout
        this.btg3 = ui.addButtonGroup(this.main, buttons, "Contained,Primary,Large", 0.9)
        this.btg3.setOnTouch( this.onTouch )
    }

    onTouch(text, index)
    {
        // Display the touched button text
        ui.showPopup( text )
    }
}
 */
    
            
    
/**
@sample ButtonGroup icons
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with object vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter", 1, 1)
        this.main.setChildMargins(0, 0.05, 0, 0.05)

        // Initialize button items
        var buttons = ["delete", "shopping_cart", "dashboard"]

        // Add small and primary contained ButtonGroup icons to the main layout
        this.btg1 = ui.addButtonGroup(this.main, buttons, "Contained,Primary,Small,Icon")
        this.btg1.setOnTouch( this.onTouch )

        // Add a medium and secondary outlined ButtonGroup icons to the main layout
        this.btg2 = ui.addButtonGroup(this.main, buttons, "Outlined,Secondary,Medium,Icon")
        this.btg2.setOnTouch( this.onTouch )

        // Add a large and default text ButtonGroup icons to the main layout
        this.btg3 = ui.addButtonGroup(this.main, buttons, "Text,Large,Icon")
        this.btg3.setOnTouch( this.onTouch )
    }

    onTouch(text, index)
    {
        // Display the touched button text
        ui.showPopup( text )
    }
}
 */
    
            
    
/**
@sample Python Basic ButtonGroup
from hybrid import ui

def OnStart():
    # Creates a fullscreen layout with object vertically centered.
    main = ui.addLayout("main", "Linear", "VCenter", 1, 1)

    # Initialize button items
    buttons = ["Button 1", "Button 2", "Button 3"]

    # Add a ButtonGroup control to the main layout
    btg = ui.addButtonGroup(main, buttons, "", 0.9)

    # Add a callback handler for `onTouch` event
    btg.setOnTouch(onTouch)

def onTouch(text, index, event):
    # Display the touched button text
    ui.showPopup(text)
 */
    
            
    
/**
@sample Python ButtonGroup variants
from hybrid import ui

def OnStart():
    # Creates a fullscreen layout with object vertically centered.
    main = ui.addLayout("main", "Linear", "VCenter", 1, 1)
    main.setChildMargins(0, 0.05, 0, 0.05)

    buttons = ["Button 1", "Button 2", "Button 3"]

    # Add a contained ButtonGroup to the main layout
    btg1 = ui.addButtonGroup(main, buttons, "Contained,Primary", 0.9)
    btg1.setOnTouch(onTouch)

    # Add an outlined ButtonGroup to the main layout
    btg2 = ui.addButtonGroup(main, buttons, "Outlined,Primary", 0.9)
    btg2.setOnTouch(onTouch)

    # Add a text ButtonGroup to the main layout
    btg3 = ui.addButtonGroup(main, buttons, "Text,Primary", 0.9)
    btg3.setOnTouch(onTouch)

def onTouch(text, index, event):
    # Display the touched button text
    ui.showPopup(text)
 */
    
            
    
/**
@sample Python ButtonGroup colors
from hybrid import ui

def OnStart():
    # Creates a fullscreen layout with object vertically centered.
    main = ui.addLayout("main", "Linear", "VCenter", 1, 1)
    main.setChildMargins(0, 0.05, 0, 0.05)

    # Initialize button items
    buttons = ["Button 1", "Button 2", "Button 3"]

    # Add defualt ButtonGroup to the main layout
    btg1 = ui.addButtonGroup(main, buttons, "Default", 0.9)
    btg1.setOnTouch(onTouch)

    # Add primary ButtonGroup to the main layout
    btg2 = ui.addButtonGroup(main, buttons, "Primary", 0.9)
    btg2.setOnTouch(onTouch)

    # Add secondary ButtonGroup to the main layout
    btg3 = ui.addButtonGroup(main, buttons, "Secondary", 0.9)
    btg3.setOnTouch(onTouch)

def onTouch(text, index, event):
    # Display the touched button text
    ui.showPopup(text)
 */
    
            
    
/**
@sample Python ButtonGroup sizes
from hybrid import ui

def OnStart():
    # Creates a fullscreen layout with object vertically centered
    main = ui.addLayout("main", "Linear", "VCenter", 1, 1)
    main.setChildMargins(0, 0.05, 0, 0.05)

    # Initialize button items
    buttons = ["Button 1", "Button 2", "Button 3"]

    # Add small size ButtonGroup to the main layout
    btg1 = ui.addButtonGroup(main, buttons, "Contained,Primary,Small", 0.9)
    btg1.setOnTouch(onTouch)

    # Add medium/default size ButtonGroup to the main layout
    btg2 = ui.addButtonGroup(main, buttons, "Contained,Primary,Medium", 0.9)
    btg2.setOnTouch(onTouch)

    # Add large size ButtonGroup to the main layout
    btg3 = ui.addButtonGroup(main, buttons, "Contained,Primary,Large", 0.9)
    btg3.setOnTouch(onTouch)

def onTouch(text, index, event):
    # Display the touched button text
    ui.showPopup(text)
 */
    
            
    
/**
@sample Python ButtonGroup icons
from hybrid import ui

def OnStart():
    # Creates a fullscreen layout with object vertically centered.
    main = ui.addLayout("main", "Linear", "VCenter", 1, 1)
    main.setChildMargins(0, 0.05, 0, 0.05)

    # Initialize button items
    buttons = ["delete", "shopping_cart", "dashboard"]

    # Add small and primary contained ButtonGroup icons to the main layout
    btg1 = ui.addButtonGroup(main, buttons, "Contained,Primary,Small,Icon")
    btg1.setOnTouch(onTouch)

    # Add a medium and secondary outlined ButtonGroup icons to the main layout
    btg2 = ui.addButtonGroup(main, buttons, "Outlined,Secondary,Medium,Icon")
    btg2.setOnTouch(onTouch)

    # Add a large and default text ButtonGroup icons to the main layout
    btg3 = ui.addButtonGroup(main, buttons, "Text,Large,Icon")
    btg3.setOnTouch(onTouch)

def onTouch(text, index, event):
    # Display the touched button text
    ui.showPopup(text)
 */
    
            