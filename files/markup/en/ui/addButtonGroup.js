// ------------- HEADER SECTION ------------- 


/** # addButtonGroup #
 * @abbrev btg
 * @brief addButtonGroup
 * 
 * $$ btg = ui.addButtonGroup(parent, list, options, width, height) $$ 
 * @param {obj} parent The parent layout where to add the ButtonGroup
 * @param {lst} list The item to be displayed on the buttn group.
 * @param {str_com} options one or a combination of the following: \n Variant: `Contained` `Outlined` `Text` `Default` \n `Color: `Primary` `Secondary` `Default` \n `Size: `Small` `Medium` `Large` \n `Orientation: `Horizontal` `Vertical` \n `Util: `Icon` `NoElevation`
 * @param {num} width Fraction of the parent width. [0-1]
 * @param {num} height Fraction of the parent height. [0-1]
 * @returns obj-ButtonGroup Component
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Adds a button group into your app.

### Properties
These are the setter and getter properties for the addButtonGroup Component.
<smp noinl>absHeight:"num:'Returns the absolute height of the control in pixels.'"</smp>
<smp noinl>absLeft:"num:'Returns the absolute distance of the control from the left in pixels.'"</smp>
<smp noinl>absTop:"num:'Returns the absolute distance of the control from the top in pixels.'"</smp>
<smp noinl>absWidth:"num:'Returns the absolute width of the control in pixels.'"</smp>
<smp noinl>backColor:"str:'A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col>'"</smp>
<smp noinl>backImage:"str:'The path to your image file.'"</smp>
<smp noinl>border:"num:'Sets or returns the border thickness in pixels.'"</smp>
<smp noinl>borderColor:"str:'Sets or returns the border color. Color is in hexadecimal form <col nobox #fb8c00>#rrggbb</col>'"</smp>
<smp noinl>borderStyle:"str:'Sets or returns the border style. Values can be <col nobox #fb8c00>dotted</col>, <col nobox #fb8c00>dashed</col>, <col nobox #fb8c00>solid</col>, <col nobox #fb8c00>double</col>, <col nobox #fb8c00>groove</col>, <col nobox #fb8c00>ridge</col>, <col nobox #fb8c00>inset</col> and <col nobox #fb8c00>outset</col>. Default is <col nobox #fb8c00>solid</col>.'"</smp>
<smp noinl>color:"str:'Sets or returns the theme color of the button. Values can be <col nobox #fb8c00>Default</col> <col nobox #fb8c00>Primary</col> or <col nobox #fb8c00>Secondary</col>'"</smp>
<smp noinl>cornerRadius:"num:'Sets or returns the corner radius in pixels.'"</smp>
<smp noinl>disabled:"bin:'Sets or returns the <col nobox #fb8c00>disabled</col> state of the control.'"</smp>
<smp noinl>fontFile:"str:'Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use.'"</smp>
<smp noinl>height:"num:'Sets or returns the height of the control as a fraction of the parent control.'"</smp>
<smp noinl>isVisible:"bin:'Returns whether the control is visible or not.'"</smp>
<smp noinl>left:"num:'Returns the distance of the control from the left.'"</smp>
<smp noinl>list:"lst:'Sets or returns the list items of the button group.'"</smp>
<smp noinl>margins:"lst:'Sets or returns the margin of the control. Works on controls with <col nobox #fb8c00>Linear</col> parent only. You can also pass a number to set equal margins for all sides.'"</smp>
<smp noinl>opacity:"num:'Sets or returns the opacity of the control.'"</smp>
<smp noinl>options:"str:'Sets or returns the <col nobox #fb8c00>options</col> of the control.'"</smp>
<smp noinl>orientation:"str:'Sets or returns the orientation of the button group. Can be <col nobox #fb8c00>horizontal</col> or <col nobox #fb8c00>vertical</col>'"</smp>
<smp noinl>padding:"lst:'Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.'"</smp>
<smp noinl>parent:"obj:'Returns the parent layout control.'"</smp>
<smp noinl>position:"obj:'Returns the position of the control. The returned object has <col nobox #fb8c00>left</col> <col nobox #fb8c00>top</col> <col nobox #fb8c00>right</col> and <col nobox #fb8c00>bottom</col> props.'"</smp>
<smp noinl>rotation:"num:'Sets or returns the angle of rotation in degrees.'"</smp>
<smp noinl>sizeVariant:"str:'Sets or returns the size variant. Values can be <col nobox #fb8c00>small</col> <col nobox #fb8c00>medium</col> or <col nobox #fb8c00>large</col>'"</smp>
<smp noinl>textColor:"str:'Sets or returns the color of the button text.'"</smp>
<smp noinl>textSize:"num:'Sets or returns the font size of the button text.'"</smp>
<smp noinl>toolTipPosition:"str:'Sets or returns the position of the tooltip. Values can be <col nobox #fb8c00>left</col> <col nobox #fb8c00>top</col> <col nobox #fb8c00>right</col> or <col nobox #fb8c00>bottom</col>'"</smp>
<smp noinl>toolTips:"lst:'Sets or returns the list of tooltip titles.'"</smp>
<smp noinl>top:"num:'Returns the distance of the control from the top.'"</smp>
<smp noinl>type:"str:'Returns the type of the control.'"</smp>
<smp noinl>variant:"str:'Sets or returns the variant. Values can be <col nobox #fb8c00>Contained</col> <col nobox #fb8c00>Outlined</col> or <col nobox #fb8c00>Text</col>'"</smp>
<smp noinl>visibility:"str:'Sets or returns the visibility of the control.'"</smp>
<smp noinl>width:"num:'Sets or returns the width of the control as a fraction of the parent control.'"</smp>
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### setOnTouch ###
 * @brief setOnTouch
 * Adds a callback handler when the button is touch
 * $$ btg.setOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["text ","index ","event "],"pTypes":["str-The button text.","num-The index of the correspoding button.","obj-The pointer click event object."]}
 */


/** ### setOnContextMenu ###
 * @brief setOnContextMenu
 * Adds a callback function on right click
 * $$ btg.setOnContextMenu(callback) $$
 * @param {fnc_json} callback {"pNames":["text ","index ","event "],"pTypes":["str-Button text.","num-The index of the corresponding button.","obj-The pointer event object."]}
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
 * $$ btg.setToolTip(titles, pos) $$
 * @param {lst} titles The titles for each item in the ButtonGroup.
 * @param {str} pos The positio of the tooltip. \n Can be `top` `left` `right` `bottom` `bottom-end` `bottom-start` `left-end` `left-start` `right-end` `right-start` `top-end` `top-start`
 */


/** ### enableElevation ###
 * @brief enableElevation
 * Enable of disable the elevation of the button group
 * $$ btg.enableElevation(enable) $$
 * @param {bin} enable Can be `true` or `false`
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


/** ### animate ###
 * @brief animate
 * Animate the component
 * $$ btg.animate(anim, duration) $$
 * @param {str} anim The type of animation. Here are the available values \n `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` \n `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` \n `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` \n `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` \n `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` \n `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` \n `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` \n `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` \n `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` \n `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` \n `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` \n `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` \n `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` \n `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` \n `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` \n `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
 * @param {num} duration The time in milliseconds.
 */


/** ### setSize ###
 * @brief setSize
 * Sets the size of the component
 * $$ btg.setSize(width, height) $$
 * @param {num} width Fraction of the parent width. [0-1]
 * @param {num} height Fraction of the parent height. [0-1]
 */


/** ### show ###
 * @brief show
 * Show the component
 * $$ btg.show() $$
 */


/** ### hide ###
 * @brief hide
 * Hide the component
 * $$ btg.hide() $$
 */


/** ### gone ###
 * @brief gone
 * Destroy the component
 * $$ btg.gone() $$
 */


/** ### destroy ###
 * @brief destroy
 * Destroy the component
 * $$ btg.destroy() $$
 */


/** ### setScale ###
 * @brief setScale
 * Sets the x and y scaling of the component
 * $$ btg.setScale(x, y) $$
 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
 */


/** ### getPosition ###
 * @brief getPosition
 * Returns the position of the component. The return object is of the form `{ left, top, right, bottom
 * $$ btg.getPosition(options) $$
 * @param {str} options The mode of the measurements. Values can be `px` or `%`
 * @returns obj
 */


/** ### setMargins ###
 * @brief setMargins
 * Sets the margin of the component
 * $$ btg.setMargins(left, top, right, bottom, mode) $$
 * @param {num} left Fraction of the parent width.
 * @param {num} top Fraction of the parent height.
 * @param {num} right Fraction of the parent width.
 * @param {num} bottom Fraction of the parent height.
 * @param {str} mode `px` or `%`
 */


/** ### setPadding ###
 * @brief setPadding
 * Sets the padding component container
 * $$ btg.setPadding(left, top, right, bottom, mode) $$
 * @param {num} left Fraction of the component width.
 * @param {num} top Fraction of the component height. [0-1]
 * @param {num} right Fraction of the component width. [0-1]
 * @param {num} bottom Fraction of the component height. [0-1]
 * @param {str} mode The size thickness mode. Can be `px`
 */


/** ### setPosition ###
 * @brief setPosition
 * Sets the position of the component relative to its parent dimensions
 * $$ btg.setPosition(left, top, mode) $$
 * @param {num} left Fraction of the parent width. [0-1]
 * @param {num} top Fraction of the screen height. [0-1]
 * @param {str} mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
 */


/** ### setBorder ###
 * @brief setBorder
 * Sets the border line for the component container
 * $$ btg.setBorder(width, clr, style) $$
 * @param {num} width Border-left thickness in pixels.
 * @param {str} clr Border color in hexadecimal form `#rrggbb`
 * @param {str} style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
 */


/** ### setCornerRadius ###
 * @brief setCornerRadius
 * Sets the corner radius of the component
 * $$ btg.setCornerRadius(tl, tr, bl, br, mode) $$
 * @param {num} tl Top-Left border radius in pixels.
 * @param {num} tr Top-Right border radius in pixels.
 * @param {num} bl Bottom-Left border radius in pixels.
 * @param {num} br Bottom-Right border radius in pixels.
 * @param {str} mode Unit. Values are `px` `rem` or `%`.
 */


/** ### bringForward ###
 * @brief bringForward
 * Bring this component forward by a given z-index
 * $$ btg.bringForward(zIndex) $$
 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
 */


/** ### sendBackward ###
 * @brief sendBackward
 * Bring this component backward by a given z-index
 * $$ btg.sendBackward(zIndex) $$
 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
 */



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
    
            