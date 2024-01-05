// ------------- HEADER SECTION -------------


/** # addSelect #
 * @abbrev sel
 * @brief addSelect
 * 
 * $$ sel = ui.addSelect(parent, list, options, width, height) $$ 
 * @param {obj} parent The parent layout where to add the control
 * @param {lst} list The list of items for the Select options
 * @param {str_com} options Sizes: `Small` `Medium` \n `Variant`: `Filled` `Outlined` `Standard` \n `Margin`: `Dense` `Normal` \n `Utils`: `Required` `Multiple` `Radio` `Disabled` `AutoFocus` `FullWidth`
 * @param {num} width Fraction of the screen width. [0-1]
 * @param {num} height Fraction of the screen height. [0-1]
 * @returns obj-Select Component
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Adds a Select Component to a given layout.

 This component is used to create a drop-down list and is most often used in a form to collect user choices.

 A simple list
<js> [ "Option 1", "Option 2", "Option 3"] </js>


 If you want a list with groupings, you can add a colon <col nobox #4c4>:</col> before each item text to display as group name. Below is an example
<js> [" : Group 1", "Option 1", "Option 2", " : Group 2", "Item 1", "Item 2"] </js>


### Properties
These are the setter and getter properties for the addSelect Component.
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
<smp noinl>enabled:"bin:'Sets or returns a boolean value whether the component is enabled or disabled.'"</smp>
<smp noinl>fontFile:"str:'Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use.'"</smp>
<smp noinl>height:"num:'Sets or returns the height of the control as a fraction of the parent control.'"</smp>
<smp noinl>iconColor:"str:'Sets or returns the color of the icon in hexadecimal format <col nobox #fb8c00>#rrggbb</col>'"</smp>
<smp noinl>isVisible:"bin:'Returns whether the control is visible or not.'"</smp>
<smp noinl>label:"str:'Sets or returns the label text.'"</smp>
<smp noinl>labelColor:"str:'Sets or returns the color of the label text in hexadecimal format <col nobox #fb8c00>#rrggbb</col>'"</smp>
<smp noinl>labelSize:"num:'Sets or returns the size of the label.'"</smp>
<smp noinl>left:"num:'Returns the distance of the control from the left.'"</smp>
<smp noinl>list:"lst:'Sets or returns the list items. You can also pass a comma separated string of items.'"</smp>
<smp noinl>margins:"lst:'Sets or returns the margin of the control. Works on controls with <col nobox #fb8c00>Linear</col> parent only. You can also pass a number to set equal margins for all sides.'"</smp>
<smp noinl>maxHeight:"num:'Sets or returns the maximum height of the popup container.'"</smp>
<smp noinl>opacity:"num:'Sets or returns the opacity of the control.'"</smp>
<smp noinl>options:"str:'Sets or returns the <col nobox #fb8c00>options</col> of the control.'"</smp>
<smp noinl>padding:"lst:'Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.'"</smp>
<smp noinl>parent:"obj:'Returns the parent layout control.'"</smp>
<smp noinl>popupColor:"str:'Sets or returns the color of the popup in hexadecimal format.'"</smp>
<smp noinl>position:"obj:'Returns the position of the control. The returned object has <col nobox #fb8c00>left</col> <col nobox #fb8c00>top</col> <col nobox #fb8c00>right</col> and <col nobox #fb8c00>bottom</col> props.'"</smp>
<smp noinl>rotation:"num:'Sets or returns the angle of rotation in degrees.'"</smp>
<smp noinl>sizeVariant:"str:'Sets or returns the size variant of the Select Component. Values can be <col nobox #fb8c00>Small</col> or <col nobox #fb8c00>Medium</col>'"</smp>
<smp noinl>textColor:"str:'Sets or returns the color of the text.'"</smp>
<smp noinl>textSize:"num:'Sets or returns the size of the text within the control.'"</smp>
<smp noinl>top:"num:'Returns the distance of the control from the top.'"</smp>
<smp noinl>type:"str:'Returns the type of the control.'"</smp>
<smp noinl>value:"str:'Sets or returns the value of the Select Component. For Select with <col nobox #fb8c00>Multiple</col> options, the <col nobox #fb8c00>value</col> is an array of string items. You can also pass the <col nobox #fb8c00>index</col> of the selected item. Pass an array of <col nobox #fb8c00>indexes</col> for multiple selection.'"</smp>
<smp noinl>variant:"str:'Sets or returns the variant of the Select Component. Values can be <col nobox #fb8c00>Standard</col> <col nobox #fb8c00>Filled</col> and <col nobox #fb8c00>Outlined</col>'"</smp>
<smp noinl>visibility:"str:'Sets or returns the visibility of the control.'"</smp>
<smp noinl>width:"num:'Sets or returns the width of the control as a fraction of the parent control.'"</smp>
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### setOnChange ###
 * @brief setOnChange
 * Sets a callback function when the value changes
 * $$ sel.setOnChange(callback) $$
 * @param {fnc_json} callback {"pNames":["value"],"pTypes":["str-The value of the select input."]}
 */


/** ### setOnOpen ###
 * @brief setOnOpen
 * Sets a callback function when the menu is open
 * $$ sel.setOnOpen(callback) $$
 * @param {fnc_json} callback {}
 */


/** ### setOnClose ###
 * @brief setOnClose
 * Sets a callback function when the menu dialog is close
 * $$ sel.setOnClose(callback) $$
 * @param {fnc_json} callback {"pNames":["value"],"pTypes":["str-The value of the select input."]}
 */


/** ### addItem ###
 * @brief addItem
 * Adds an item on the select component options list
 * $$ sel.addItem(item, index) $$
 * @param {str} item A new item to be added.
 * @param {num} index The index in which to add the item.
 */


/** ### removeItemByIndex ###
 * @brief removeItemByIndex
 * Removes an item in the select component item list by its index
 * $$ sel.removeItemByIndex(index) $$
 * @param {num} index The index of the corresponding item to remove.
 */


/** ### removeItemByName ###
 * @brief removeItemByName
 * Removes an item in the select component item list by its name
 * $$ sel.removeItemByName(name) $$
 * @param {str} name The name of the item to remove.
 */


/** ### shifItem ###
 * @brief shifItem
 * Removes an item at the beginning of the list items
 * $$ sel.shifItem() $$
 */


/** ### popItem ###
 * @brief popItem
 * Removes an item at the end of the list items
 * $$ sel.popItem() $$
 */


/** ### getItem ###
 * @brief getItem
 * Returns the item at a given index
 * $$ sel.getItem(index) $$
 * @param {num} index The index of the item.
 */


/** ### setList ###
 * @brief setList
 * Sets the list items in the menu popup
 * $$ sel.setList(items) $$
 * @param {obj} items A comma separated string or array of options
 */


/** ### setEnabled ###
 * @brief setEnabled
 * Enable or disable the select component
 * $$ sel.setEnabled(index, value) $$
 * @param {num} index `true` or `false`. You can also pass a `Boolean` to enable or disable the Select component.
 * @param {bin} value Values can be `true` or `false`.
 */


/** ### getEnabled ###
 * @brief getEnabled
 * Get the enabled state of an item in the select menu
 * $$ sel.getEnabled(index) $$
 * @param {num} index The index of the corresponding item in the select menu.
 * @returns bin
 */


/** ### setEnabledByName ###
 * @brief setEnabledByName
 * Enable or disable an item in the menu popup
 * $$ sel.setEnabledByName(name, value) $$
 * @param {str} name The name of the menu item.
 * @param {bin} value Value can be `true` or `false`
 */


/** ### getEnabledByName ###
 * @brief getEnabledByName
 * Get the enabled state of an item in the menu popup
 * $$ sel.getEnabledByName(name) $$
 * @param {str} name The name of the menu item.
 * @returns bin
 */


/** ### setOnTouch ###
 * @brief setOnTouch
 * Adds a callback handler when the component is touch
 * $$ sel.setOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["event"],"pTypes":["obj-The click event object."]}
 */


/** ### setOnContextMenu ###
 * @brief setOnContextMenu
 * Adds a callback function on right click
 * $$ sel.setOnContextMenu(callback) $$
 * @param {fnc_json} callback {"pNames":["event"],"pTypes":["obj-The pointer event object."]}
 */


/** ### animate ###
 * @brief animate
 * Animate the component
 * $$ sel.animate(anim, duration) $$
 * @param {str} anim The type of animation. Here are the available values \n `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` \n `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` \n `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` \n `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` \n `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` \n `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` \n `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` \n `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` \n `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` \n `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` \n `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` \n `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` \n `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` \n `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` \n `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` \n `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
 * @param {num} duration The time in milliseconds.
 */


/** ### setSize ###
 * @brief setSize
 * Sets the size of the component
 * $$ sel.setSize(width, height) $$
 * @param {num} width Fraction of the parent width. [0-1]
 * @param {num} height Fraction of the parent height. [0-1]
 */


/** ### show ###
 * @brief show
 * Show the component
 * $$ sel.show() $$
 */


/** ### hide ###
 * @brief hide
 * Hide the component
 * $$ sel.hide() $$
 */


/** ### gone ###
 * @brief gone
 * Destroy the component
 * $$ sel.gone() $$
 */


/** ### destroy ###
 * @brief destroy
 * Destroy the component
 * $$ sel.destroy() $$
 */


/** ### setScale ###
 * @brief setScale
 * Sets the x and y scaling of the component
 * $$ sel.setScale(x, y) $$
 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
 */


/** ### getPosition ###
 * @brief getPosition
 * Returns the position of the component. The return object is of the form `{ left, top, right, bottom
 * $$ sel.getPosition(options) $$
 * @param {str} options The mode of the measurements. Values can be `px` or `%`
 * @returns obj
 */


/** ### setMargins ###
 * @brief setMargins
 * Sets the margin of the component
 * $$ sel.setMargins(left, top, right, bottom, mode) $$
 * @param {num} left Fraction of the parent width.
 * @param {num} top Fraction of the parent height.
 * @param {num} right Fraction of the parent width.
 * @param {num} bottom Fraction of the parent height.
 * @param {str} mode `px` or `%`
 */


/** ### setPadding ###
 * @brief setPadding
 * Sets the padding component container
 * $$ sel.setPadding(left, top, right, bottom, mode) $$
 * @param {num} left Fraction of the component width.
 * @param {num} top Fraction of the component height. [0-1]
 * @param {num} right Fraction of the component width. [0-1]
 * @param {num} bottom Fraction of the component height. [0-1]
 * @param {str} mode The size thickness mode. Can be `px`
 */


/** ### setPosition ###
 * @brief setPosition
 * Sets the position of the component relative to its parent dimensions
 * $$ sel.setPosition(left, top, mode) $$
 * @param {num} left Fraction of the parent width. [0-1]
 * @param {num} top Fraction of the screen height. [0-1]
 * @param {str} mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
 */


/** ### setBorder ###
 * @brief setBorder
 * Sets the border line for the component container
 * $$ sel.setBorder(width, clr, style) $$
 * @param {num} width Border-left thickness in pixels.
 * @param {str} clr Border color in hexadecimal form `#rrggbb`
 * @param {str} style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
 */


/** ### setCornerRadius ###
 * @brief setCornerRadius
 * Sets the corner radius of the component
 * $$ sel.setCornerRadius(tl, tr, bl, br, mode) $$
 * @param {num} tl Top-Left border radius in pixels.
 * @param {num} tr Top-Right border radius in pixels.
 * @param {num} bl Bottom-Left border radius in pixels.
 * @param {num} br Bottom-Right border radius in pixels.
 * @param {str} mode Unit. Values are `px` `rem` or `%`.
 */


/** ### bringForward ###
 * @brief bringForward
 * Bring this component forward by a given z-index
 * $$ sel.bringForward(zIndex) $$
 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
 */


/** ### sendBackward ###
 * @brief sendBackward
 * Bring this component backward by a given z-index
 * $$ sel.sendBackward(zIndex) $$
 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
 */



// ------------- SAMPLES ------------- 


    
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
    
            